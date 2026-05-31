'use client'

import { Suspense, useEffect, useMemo, useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { useGLTF, Bounds } from '@react-three/drei'
import * as THREE from 'three'

useGLTF.setDecoderPath('https://www.gstatic.com/draco/versioned/decoders/1.5.7/')

type Variant = 'hero' | 'icon' | 'rocket'

useGLTF.preload('/models/hero.glb')
useGLTF.preload('/models/laptop.glb')
useGLTF.preload('/models/network.glb')
useGLTF.preload('/models/bulb.glb')
useGLTF.preload('/models/rocket.glb')

// Theme-aware colour palette keyed by model path.
// body  → lerp target for albedo (blended 55% toward this from original)
// emissive → glow colour added on top
const MODEL_PALETTE: Record<string, {
  light: { body: string; emissive: string; emissiveIntensity: number }
  dark:  { body: string; emissive: string; emissiveIntensity: number }
}> = {
  // Laptop — "Build" pillar: silver-cool body, green screen glow (light) / navy body, cyan glow (dark)
  '/models/laptop.glb': {
    light: { body: '#C8D6E5', emissive: '#16A34A', emissiveIntensity: 0.18 },
    dark:  { body: '#1E3A5F', emissive: '#06B6D4', emissiveIntensity: 0.28 },
  },
  // Network — "Lead" pillar: sky-blue nodes, green pulse (light) / deep-space blue, cyan pulse (dark)
  '/models/network.glb': {
    light: { body: '#BFDBFE', emissive: '#22C55E', emissiveIntensity: 0.22 },
    dark:  { body: '#0F1F4A', emissive: '#06B6D4', emissiveIntensity: 0.35 },
  },
  // Bulb — "Solve" pillar: warm cream, amber filament glow (light) / dark amber, saffron glow (dark)
  '/models/bulb.glb': {
    light: { body: '#FEF3C7', emissive: '#D97706', emissiveIntensity: 0.30 },
    dark:  { body: '#1C0F00', emissive: '#F59E0B', emissiveIntensity: 0.48 },
  },
  // Rocket — Vision section: peach-orange body, fire glow (light) / deep-red, saffron exhaust (dark)
  '/models/rocket.glb': {
    light: { body: '#FED7AA', emissive: '#EA580C', emissiveIntensity: 0.28 },
    dark:  { body: '#3B1000', emissive: '#F59E0B', emissiveIntensity: 0.45 },
  },
}

function GLBScene({ src, variant, theme }: { src: string; variant: Variant; theme: string }) {
  const { scene: gltfScene } = useGLTF(src)
  const ref = useRef<THREE.Group>(null!)

  // Clone the scene + materials so we never mutate the shared useGLTF cache.
  const scene = useMemo(() => {
    const clone = gltfScene.clone(true)
    clone.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        child.material = Array.isArray(child.material)
          ? child.material.map((m: THREE.Material) => m.clone())
          : (child.material as THREE.Material).clone()
      }
    })
    return clone
  }, [gltfScene])

  // Dispose cloned materials on unmount to avoid GPU leaks.
  useEffect(() => {
    return () => {
      scene.traverse((child) => {
        if (child instanceof THREE.Mesh) {
          const mats = Array.isArray(child.material) ? child.material : [child.material]
          mats.forEach((m: THREE.Material) => m?.dispose())
        }
      })
    }
  }, [scene])

  // Apply theme colours whenever theme or src changes.
  useEffect(() => {
    const palette = MODEL_PALETTE[src]
    if (!palette) return
    const { body, emissive, emissiveIntensity } = theme === 'dark' ? palette.dark : palette.light
    const bodyColor     = new THREE.Color(body)
    const emissiveColor = new THREE.Color(emissive)

    scene.traverse((child) => {
      if (!(child instanceof THREE.Mesh)) return
      const mats = Array.isArray(child.material) ? child.material : [child.material]
      mats.forEach((m) => {
        const mat = m as THREE.MeshStandardMaterial
        if (!mat?.color) return
        mat.color.lerp(bodyColor, 0.55)
        mat.emissive = emissiveColor.clone()
        mat.emissiveIntensity = emissiveIntensity
        mat.needsUpdate = true
      })
    })
  }, [scene, src, theme])

  useFrame((state) => {
    if (!ref.current) return
    const t = state.clock.elapsedTime
    if (variant === 'hero') {
      ref.current.rotation.y += 0.003
      ref.current.position.y = Math.sin(t * 0.7) * 0.04
    } else if (variant === 'icon') {
      ref.current.rotation.y = t * 0.65
      ref.current.rotation.x = Math.sin(t * 0.4) * 0.06
    } else {
      // rocket — gentle spin
      ref.current.rotation.y = t * 0.45
    }
  })

  return (
    <Bounds fit clip margin={1.15}>
      <primitive ref={ref} object={scene} dispose={null} />
    </Bounds>
  )
}

const CAM: Record<Variant, { position: [number, number, number]; fov: number }> = {
  hero:   { position: [0, 0.5, 3.5], fov: 42 },
  icon:   { position: [0, 0,   3],   fov: 50 },
  rocket: { position: [0, 0.2, 3],   fov: 46 },
}

const LIGHTS: Record<string, { ambient: number; dirColor: string; rimColor: string }> = {
  dark:  { ambient: 0.55, dirColor: '#FFD9A0', rimColor: '#06B6D4' },
  light: { ambient: 0.8,  dirColor: '#FFFFFF',  rimColor: '#16A34A' },
}

export default function Model3D({
  src,
  variant = 'icon',
  theme = 'dark',
  className,
  style,
}: {
  src: string
  variant?: Variant
  theme?: string
  className?: string
  style?: React.CSSProperties
}) {
  // Hero + rocket must be ready immediately:
  //   hero  → above the fold
  //   rocket → GSAP scroll trigger fires before IntersectionObserver has time to mount the Canvas
  const [inView, setInView] = useState(variant === 'hero' || variant === 'rocket')
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (variant === 'rocket') return  // always mounted, no observer needed
    const el = containerRef.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([e]) => setInView(e.isIntersecting),
      { threshold: 0.05 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [variant])

  const cam  = CAM[variant]
  const lc   = LIGHTS[theme] ?? LIGHTS.dark
  const isDark = theme === 'dark'

  return (
    <div ref={containerRef} className={className} style={{ width: '100%', height: '100%', ...style }}>
      {inView && (
        <Canvas
          shadows={false}
          dpr={[1, 1.5]}
          camera={{ position: cam.position, fov: cam.fov }}
          gl={{ antialias: true, alpha: true }}
        >
          <ambientLight intensity={lc.ambient} />
          <directionalLight
            position={[5, 8, 3]}
            intensity={isDark ? 1.4 : 1.8}
            color={lc.dirColor}
          />
          <pointLight
            position={[-4, 1, -2]}
            intensity={isDark ? 2.5 : 1.5}
            color={lc.rimColor}
            distance={16}
          />

          <Suspense fallback={null}>
            <GLBScene src={src} variant={variant} theme={theme} />
          </Suspense>
        </Canvas>
      )}
    </div>
  )
}

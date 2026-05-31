'use client'

import { useRef, useMemo, useEffect, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { useTheme } from 'next-themes'

function ParticleCloud({
  count,
  accentColor,
  accentColor2,
}: {
  count: number
  accentColor: THREE.Color
  accentColor2: THREE.Color
}) {
  const ref = useRef<THREE.Points>(null)

  const [positions, colors] = useMemo(() => {
    const pos = new Float32Array(count * 3)
    const col = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 40
      pos[i * 3 + 1] = (Math.random() - 0.5) * 30
      pos[i * 3 + 2] = (Math.random() - 0.5) * 20
      const c = Math.random() > 0.5 ? accentColor : accentColor2
      col[i * 3] = c.r
      col[i * 3 + 1] = c.g
      col[i * 3 + 2] = c.b
    }
    return [pos, col]
  }, [count, accentColor, accentColor2])

  useFrame(({ clock }) => {
    if (!ref.current) return
    ref.current.rotation.y = clock.elapsedTime * 0.018
    ref.current.rotation.x = Math.sin(clock.elapsedTime * 0.009) * 0.12
  })

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-color" args={[colors, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.055}
        vertexColors
        transparent
        opacity={0.55}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  )
}

export default function Particles() {
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [reducedMotion, setReducedMotion] = useState(false)

  useEffect(() => {
    setMounted(true)
    setReducedMotion(window.matchMedia('(prefers-reduced-motion: reduce)').matches)
  }, [])

  const isDark = mounted ? resolvedTheme === 'dark' : true
  const count = typeof window !== 'undefined' && window.innerWidth < 768 ? 250 : 800

  const accentColor = useMemo(
    () => new THREE.Color(isDark ? '#F59E0B' : '#16A34A'),
    [isDark]
  )
  const accentColor2 = useMemo(
    () => new THREE.Color(isDark ? '#06B6D4' : '#22C55E'),
    [isDark]
  )

  if (!mounted || reducedMotion) return null

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 0,
        pointerEvents: 'none',
        opacity: 0.9,
      }}
    >
      <Canvas
        camera={{ position: [0, 0, 8], fov: 70 }}
        style={{ width: '100%', height: '100%' }}
        gl={{ antialias: false, alpha: true }}
      >
        <ParticleCloud count={count} accentColor={accentColor} accentColor2={accentColor2} />
      </Canvas>
    </div>
  )
}

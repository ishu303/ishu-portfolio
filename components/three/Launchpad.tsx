'use client';

import { Suspense, useEffect, useMemo, useRef } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { RoundedBox, Float, useGLTF } from '@react-three/drei';
import * as THREE from 'three';

useGLTF.setDecoderPath('https://www.gstatic.com/draco/versioned/decoders/1.5.7/');
useGLTF.preload('/models/hero.glb');

type Theme = 'light' | 'dark';

interface LaunchpadProps {
  theme?: Theme;
  className?: string;
}

const PALETTE: Record<Theme, { rim: string; key: string; screen: string; ground: number }> = {
  light: { rim: '#16A34A', key: '#FFF3D6', screen: '#22C55E', ground: 0.28 },
  dark:  { rim: '#06B6D4', key: '#FFD9A0', screen: '#06B6D4', ground: 0.5 },
};

const clay = (color: string, extra: Record<string, unknown> = {}) => ({
  color,
  roughness: 0.55,
  clearcoat: 0.5,
  clearcoatRoughness: 0.45,
  ...extra,
});

function Island() {
  return (
    <RoundedBox args={[3.6, 0.5, 2.6]} radius={0.22} smoothness={6} position={[0, -0.9, 0]} castShadow receiveShadow>
      <meshPhysicalMaterial {...clay('#EEF2F6')} />
    </RoundedBox>
  );
}

function Laptop({ screenColor }: { screenColor: string }) {
  return (
    <group position={[-0.55, -0.55, 0.1]} rotation={[0, 0.5, 0]}>
      <RoundedBox args={[1.4, 0.08, 0.95]} radius={0.04} smoothness={4} castShadow>
        <meshPhysicalMaterial {...clay('#D7DEE6')} />
      </RoundedBox>
      <group position={[0, 0.46, -0.42]} rotation={[-0.38, 0, 0]}>
        <RoundedBox args={[1.4, 0.92, 0.06]} radius={0.05} smoothness={4} castShadow>
          <meshPhysicalMaterial {...clay('#C9D2DC')} />
        </RoundedBox>
        <mesh position={[0, 0, 0.04]}>
          <planeGeometry args={[1.18, 0.72]} />
          <meshBasicMaterial color="#0F1B2D" toneMapped={false} />
        </mesh>
        {[0.22, 0.08, -0.06, -0.2].map((y, i) => (
          <mesh key={i} position={[-0.34 + (i % 2) * 0.12, y, 0.05]}>
            <planeGeometry args={[0.42 - (i % 3) * 0.08, 0.045]} />
            <meshBasicMaterial color={screenColor} toneMapped={false} />
          </mesh>
        ))}
      </group>
    </group>
  );
}

function HeroModel() {
  const { scene } = useGLTF('/models/hero.glb');
  const ref = useRef<THREE.Group>(null!);

  const { normScale, liftY } = useMemo(() => {
    const box = new THREE.Box3().setFromObject(scene);
    const size = new THREE.Vector3();
    box.getSize(size);
    const tallest = Math.max(size.x, size.y, size.z, 0.001);
    const s = Math.min(Math.max(3.0 / tallest, 0.15), 6);
    return { normScale: s, liftY: -box.min.y * s };
  }, [scene]);

  useFrame((state) => {
    if (!ref.current) return;
    ref.current.position.x += (1.0 + state.pointer.x * 0.14 - ref.current.position.x) * 0.04;
    ref.current.position.y += (-0.65 + state.pointer.y * 0.08 - ref.current.position.y) * 0.04;
  });

  return (
    <group ref={ref} position={[1.0, -0.65, 0]} rotation={[0, -Math.PI / 3, 0]}>
      <group scale={normScale} position={[0, liftY, 0]}>
        <primitive object={scene} dispose={null} />
      </group>
    </group>
  );
}

function OrbitingBlocks({ accent }: { accent: string }) {
  const blocks = useMemo(
    () => [
      { r: 1.9, y: 0.9, speed: 0.5, size: 0.34, phase: 0 },
      { r: 2.2, y: 0.2, speed: 0.35, size: 0.26, phase: Math.PI * 0.8 },
      { r: 1.7, y: 1.3, speed: 0.6, size: 0.22, phase: Math.PI * 1.4 },
    ],
    []
  );
  const refs = useRef<THREE.Mesh[]>([]);
  useFrame((state) => {
    const t = state.clock.elapsedTime;
    blocks.forEach((b, i) => {
      const m = refs.current[i];
      if (!m) return;
      const a = t * b.speed + b.phase;
      m.position.set(Math.cos(a) * b.r, b.y + Math.sin(a * 1.3) * 0.15, Math.sin(a) * b.r);
      m.rotation.x = a * 0.6;
      m.rotation.y = a * 0.8;
    });
  });
  return (
    <>
      {blocks.map((b, i) => (
        <RoundedBox
          key={i}
          ref={(el) => { if (el) refs.current[i] = el; }}
          args={[b.size, b.size, b.size]}
          radius={b.size * 0.22}
          smoothness={4}
          castShadow
        >
          <meshPhysicalMaterial
            {...clay(i === 1 ? accent : '#E2E8F0', {
              emissive: i === 1 ? accent : '#000',
              emissiveIntensity: i === 1 ? 0.25 : 0,
            })}
          />
        </RoundedBox>
      ))}
    </>
  );
}

// Updates camera FOV whenever the canvas resizes
function ResponsiveCamera() {
  const { camera, size } = useThree();
  useEffect(() => {
    const cam = camera as THREE.PerspectiveCamera;
    cam.fov = size.width < 480 ? 58 : size.width < 768 ? 46 : 35;
    cam.updateProjectionMatrix();
  }, [camera, size.width]);
  return null;
}

function Scene({ theme }: { theme: Theme }) {
  const p = PALETTE[theme];
  const root = useRef<THREE.Group>(null!);
  const { size } = useThree();

  const reduceMotion = useMemo(
    () => typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches,
    []
  );

  // Uniform scene scale: 1.0 at ≥900 px, down to 0.6 at 320 px
  const sceneScale = Math.max(1.2, Math.min(1.0, size.width / 900));

  useFrame((state) => {
    if (!root.current) return;
    const t = state.clock.elapsedTime;
    root.current.position.y = reduceMotion ? 0 : Math.sin(t * 0.8) * 0.08;
    const tx = reduceMotion ? 0 : state.pointer.x * 0.25;
    const ty = reduceMotion ? 0 : -state.pointer.y * 0.15;
    root.current.rotation.y += (tx - root.current.rotation.y) * 0.05;
    root.current.rotation.x += (ty - root.current.rotation.x) * 0.05;
  });

  return (
    <>
      <ResponsiveCamera />
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 6, 4]} intensity={1.6} color={p.key} castShadow shadow-mapSize={[1024, 1024]} />
      <pointLight position={[-4, 1, -3]} intensity={3} color={p.rim} distance={18} />
      <pointLight position={[0, -2, 5]} intensity={0.8} color={p.rim} distance={14} />

      {/* Shadow lives inside root so it scales with the rest of the scene */}
      <group ref={root} scale={sceneScale}>
        <Float speed={reduceMotion ? 0 : 1.2} rotationIntensity={0.15} floatIntensity={0.4}>
          <Island />
          <Laptop screenColor={p.screen} />
          <Suspense fallback={null}><HeroModel /></Suspense>
          <OrbitingBlocks accent={theme === 'dark' ? '#F59E0B' : '#22C55E'} />
        </Float>
      </group>
    </>
  );
}

export default function Launchpad({ theme = 'dark', className }: LaunchpadProps) {
  return (
    <div className={className} style={{ width: '100%', height: '100%' }}>
      <Canvas
        shadows
        dpr={[1, 2]}
        camera={{ position: [4.2, 2.6, 6], fov: 33 }}
        gl={{ antialias: true, alpha: true }}
      >
        <Scene theme={theme} />
      </Canvas>
    </div>
  );
}

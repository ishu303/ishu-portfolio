'use client';

/**
 * Avatar.tsx — refined coded young-human avatar (pure R3F primitives).
 * Semi-realistic feel: smooth oval head, soft skin material (sheen),
 * glasses, a slight smile curve, hoodie bust. NOT photoreal — clean stylized-real.
 *
 * Drop inside Launchpad's <Float> group, in place of the old primitive character:
 *   <Avatar position={[1.05, -0.55, 0]} scale={1} rotation={[0, -0.35, 0]} />
 *
 * Tune knobs: skin / hoodie hex, scale, position, rotation.
 * No own Canvas — it inherits the scene's lighting (warm key + theme rim).
 */

import * as THREE from 'three';

interface AvatarProps {
  position?: [number, number, number];
  scale?: number;
  rotation?: [number, number, number];
  skin?: string;
  hoodie?: string;
  hair?: string;
}

export default function Avatar({
  position = [0, 0, 0],
  scale = 1,
  rotation = [0, 0, 0],
  skin = '#C98C5E',     // warm medium tone — tweak to taste
  hoodie = '#2F6BBF',
  hair = '#1C1713',
}: AvatarProps) {
  return (
    <group position={position} scale={scale} rotation={rotation}>
      {/* ---------- HEAD (smooth oval = the "face curve") ---------- */}
      <mesh position={[0, 1.5, 0]} scale={[1, 1.12, 1.04]} castShadow>
        <sphereGeometry args={[0.5, 64, 64]} />
        {/* skin: high roughness + sheen = soft, fleshy, not plastic */}
        <meshPhysicalMaterial
          color={skin}
          roughness={0.62}
          clearcoat={0.12}
          clearcoatRoughness={0.6}
          sheen={0.5}
          sheenRoughness={0.85}
          sheenColor={'#FFD9B3'}
        />
      </mesh>

      {/* subtle chin/jaw to break the perfect sphere */}
      <mesh position={[0, 1.16, 0.14]} scale={[0.7, 0.55, 0.6]}>
        <sphereGeometry args={[0.5, 48, 48]} />
        <meshPhysicalMaterial color={skin} roughness={0.62} sheen={0.5} sheenColor={'#FFD9B3'} />
      </mesh>

      {/* ears */}
      {[-1, 1].map((d) => (
        <mesh key={d} position={[0.49 * d, 1.48, 0]} scale={[0.5, 0.9, 0.6]}>
          <sphereGeometry args={[0.12, 24, 24]} />
          <meshPhysicalMaterial color={skin} roughness={0.62} sheen={0.4} sheenColor={'#FFD9B3'} />
        </mesh>
      ))}

      {/* nose */}
      <mesh position={[0, 1.46, 0.5]} scale={[0.6, 0.8, 0.9]}>
        <sphereGeometry args={[0.1, 24, 24]} />
        <meshPhysicalMaterial color={skin} roughness={0.6} />
      </mesh>

      {/* eyes (whites + iris) */}
      {[-1, 1].map((d) => (
        <group key={d} position={[0.17 * d, 1.55, 0.45]}>
          <mesh>
            <sphereGeometry args={[0.075, 24, 24]} />
            <meshStandardMaterial color={'#F5F3EF'} roughness={0.3} />
          </mesh>
          <mesh position={[0, 0, 0.055]}>
            <sphereGeometry args={[0.038, 20, 20]} />
            <meshStandardMaterial color={'#3A2A1C'} roughness={0.2} />
          </mesh>
        </group>
      ))}

      {/* eyebrows */}
      {[-1, 1].map((d) => (
        <mesh key={d} position={[0.18 * d, 1.66, 0.47]} rotation={[0, 0, -0.12 * d]}>
          <boxGeometry args={[0.17, 0.025, 0.05]} />
          <meshStandardMaterial color={hair} roughness={0.7} />
        </mesh>
      ))}

      {/* ---------- GLASSES (square-ish frames) ---------- */}
      {[-1, 1].map((d) => (
        <mesh key={d} position={[0.18 * d, 1.55, 0.49]}>
          <torusGeometry args={[0.13, 0.018, 12, 24]} />
          <meshStandardMaterial color={'#1A1A1A'} roughness={0.35} metalness={0.3} />
        </mesh>
      ))}
      {/* bridge */}
      <mesh position={[0, 1.55, 0.5]}>
        <boxGeometry args={[0.12, 0.018, 0.018]} />
        <meshStandardMaterial color={'#1A1A1A'} roughness={0.35} metalness={0.3} />
      </mesh>
      {/* temple arms */}
      {[-1, 1].map((d) => (
        <mesh key={d} position={[0.34 * d, 1.55, 0.28]} rotation={[0, 0.5 * d, 0]}>
          <boxGeometry args={[0.22, 0.018, 0.018]} />
          <meshStandardMaterial color={'#1A1A1A'} roughness={0.35} metalness={0.3} />
        </mesh>
      ))}

      {/* ---------- SLIGHT SMILE (a gentle curve) ---------- */}
      <mesh position={[0, 1.32, 0.47]} rotation={[0, 0, Math.PI]}>
        <torusGeometry args={[0.1, 0.02, 10, 24, Math.PI * 0.7]} />
        <meshStandardMaterial color={'#9C5B47'} roughness={0.6} />
      </mesh>

      {/* ---------- HAIR (smooth cap + fringe) ---------- */}
      <mesh position={[0, 1.6, -0.02]} scale={[1.06, 1.0, 1.08]}>
        {/* top hemisphere only -> sits like hair, doesn't cover face */}
        <sphereGeometry args={[0.5, 48, 48, 0, Math.PI * 2, 0, Math.PI * 0.62]} />
        <meshPhysicalMaterial color={hair} roughness={0.5} sheen={0.6} sheenColor={'#5a4a3a'} />
      </mesh>
      {/* small swept fringe */}
      <mesh position={[0.12, 1.78, 0.38]} rotation={[0.5, 0, -0.3]} scale={[0.5, 0.3, 0.4]}>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshPhysicalMaterial color={hair} roughness={0.5} sheen={0.6} sheenColor={'#5a4a3a'} />
      </mesh>

      {/* ---------- NECK ---------- */}
      <mesh position={[0, 1.05, 0]} castShadow>
        <cylinderGeometry args={[0.17, 0.2, 0.35, 24]} />
        <meshPhysicalMaterial color={skin} roughness={0.62} sheen={0.4} sheenColor={'#FFD9B3'} />
      </mesh>

      {/* ---------- HOODIE BUST ---------- */}
      <mesh position={[0, 0.5, 0]} scale={[1.15, 0.95, 1]} castShadow>
        <sphereGeometry args={[0.62, 40, 40]} />
        <meshPhysicalMaterial color={hoodie} roughness={0.85} sheen={0.5} sheenColor={'#ffffff'} />
      </mesh>
      {/* hood collar */}
      <mesh position={[0, 0.95, -0.02]} rotation={[Math.PI / 2.2, 0, 0]}>
        <torusGeometry args={[0.26, 0.09, 16, 32]} />
        <meshPhysicalMaterial color={hoodie} roughness={0.85} />
      </mesh>
      {/* zipper line */}
      <mesh position={[0, 0.55, 0.6]}>
        <boxGeometry args={[0.03, 0.55, 0.02]} />
        <meshStandardMaterial color={'#E8E8E8'} roughness={0.4} metalness={0.4} />
      </mesh>
    </group>
  );
}
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Box, Torus } from '@react-three/drei';

export function Tool3D() {
  const groupRef = useRef();

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.5;
    }
  });

  return (
    <group ref={groupRef}>
      <Box args={[1, 1, 1]} position={[0, 0, 0]}>
        <meshStandardMaterial
          color="#7B1FA2"
          metalness={0.8}
          roughness={0.2}
        />
      </Box>
      <Torus args={[1.5, 0.1, 16, 100]} rotation={[Math.PI / 2, 0, 0]}>
        <meshStandardMaterial
          color="#1A237E"
          metalness={0.8}
          roughness={0.2}
        />
      </Torus>
    </group>
  );
}
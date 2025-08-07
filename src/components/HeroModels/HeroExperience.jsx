import { Float, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

import React from "react";
import { useMediaQuery } from "react-responsive";
import { Space } from "./Space";

const HeroExperience = () => {
  const isTable = useMediaQuery({ query: "(max-width : 1024px)" });
  const isMobile = useMediaQuery({ query: "(max-width : 768px)" });
  return (
    <Canvas camera={{ position: [0, 0, 15], fov: 45 }}>
      <ambientLight intensity={0.2} color="#1a1a40" />
      <directionalLight position={[5, 5, 5]} intensity={1} />

      <OrbitControls
        enablePan={false}
        enableZoom={!isTable}
        maxDistance={20}
        minDistance={5}
        minPolarAngle={Math.PI / 5}
        maxPolarAngle={Math.PI / 2}
      />
      <Float floatIntensity={0.1}>

      <group
        scale={isMobile ? 1.6 : 2}
        position={[0, 0, 0]}
        rotation={[0.5, 10, 0]}
        >
        <Space />
      </group>
        </Float>
    </Canvas>
  );
};

export default HeroExperience;

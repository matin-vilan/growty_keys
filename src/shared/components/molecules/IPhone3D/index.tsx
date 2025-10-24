"use client";
import React, { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Environment, ContactShadows } from "@react-three/drei";
import * as THREE from "three";

interface IPhone3DProps {
  className?: string;
  position?: [number, number, number];
  rotation?: [number, number, number];
  scale?: number;
  autoRotate?: boolean;
  enableZoom?: boolean;
  enablePan?: boolean;
}

// Simple iPhone Model Component (fallback)
const SimpleIPhoneModel = ({
  position = [0, 0, 0],
  rotation = [0, 0, 0],
  scale = 1,
  autoRotate = true,
}: Omit<IPhone3DProps, "className" | "enableZoom" | "enablePan">) => {
  const meshRef = useRef<THREE.Group>(null);

  // Auto rotation animation
  useFrame((state) => {
    if (meshRef.current && autoRotate) {
      meshRef.current.rotation.y =
        Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
    }
  });

  return (
    <group ref={meshRef} position={position} rotation={rotation} scale={scale}>
      {/* iPhone Body */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[0.8, 1.6, 0.1]} />
        <meshStandardMaterial color="#C0C0C0" metalness={0.8} roughness={0.2} />
      </mesh>

      {/* Screen */}
      <mesh position={[0, 0, 0.06]}>
        <boxGeometry args={[0.7, 1.4, 0.02]} />
        <meshStandardMaterial color="#000000" />
      </mesh>

      {/* Dynamic Island */}
      <mesh position={[0, 0.6, 0.07]}>
        <boxGeometry args={[0.15, 0.05, 0.01]} />
        <meshStandardMaterial color="#000000" />
      </mesh>

      {/* Home Indicator */}
      <mesh position={[0, -0.7, 0.07]}>
        <boxGeometry args={[0.3, 0.01, 0.01]} />
        <meshStandardMaterial color="#FFFFFF" />
      </mesh>
    </group>
  );
};

// iPhone Model Component
const IPhoneModel = ({
  position = [0, 0, 0],
  rotation = [0, 0, 0],
  scale = 1,
  autoRotate = true,
}: Omit<IPhone3DProps, "className" | "enableZoom" | "enablePan">) => {
  // Use simple model to avoid GLTF texture errors
  return (
    <SimpleIPhoneModel
      position={position}
      rotation={rotation}
      scale={scale}
      autoRotate={autoRotate}
    />
  );
};

// Main iPhone3D Component
const IPhone3D: React.FC<IPhone3DProps> = ({
  className = "",
  position = [0, 0, 0],
  rotation = [0, 0, 0],
  scale = 1,
  autoRotate = true,
  enableZoom = true,
  enablePan = true,
}) => {
  return (
    <div className={`w-full h-full ${className}`}>
      <Canvas
        camera={{
          position: [0, 0, 5],
          fov: 45,
          near: 0.1,
          far: 1000,
        }}
        shadows
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: "high-performance",
        }}
      >
        {/* Lighting Setup */}
        <ambientLight intensity={0.4} />
        <directionalLight
          position={[10, 10, 5]}
          intensity={1}
          castShadow
          shadow-mapSize-width={2048}
          shadow-mapSize-height={2048}
        />
        <pointLight position={[-10, -10, -10]} intensity={0.3} />

        {/* Environment */}
        <Environment preset="studio" />

        {/* iPhone Model */}
        <Suspense fallback={null}>
          <IPhoneModel
            position={position}
            rotation={rotation}
            scale={scale}
            autoRotate={autoRotate}
          />
        </Suspense>

        {/* Contact Shadows */}
        <ContactShadows
          position={[0, -2, 0]}
          opacity={0.4}
          scale={10}
          blur={2}
          far={4.5}
        />

        {/* Controls */}
        <OrbitControls
          enableZoom={enableZoom}
          enablePan={enablePan}
          enableRotate={true}
          autoRotate={autoRotate}
          autoRotateSpeed={2}
          minDistance={3}
          maxDistance={10}
          maxPolarAngle={Math.PI / 2}
        />
      </Canvas>
    </div>
  );
};

export default IPhone3D;

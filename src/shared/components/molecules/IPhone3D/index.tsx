"use client";
import React, { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Environment, ContactShadows } from "@react-three/drei";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/Addons.js";

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

// GLTF Model Component - Load without textures
const GLTFModel = () => {
  const [gltf, setGltf] = React.useState<THREE.Group | null>(null);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);

  React.useEffect(() => {
    const loader = new GLTFLoader();

    loader.load(
      "/iphone16/scene.gltf",
      (gltf) => {
        // Remove all textures and set basic materials
        gltf.scene.traverse((child) => {
          if ((child as THREE.Mesh).isMesh && (child as THREE.Mesh).material) {
            const mesh = child as THREE.Mesh;
            if (Array.isArray(mesh.material)) {
              mesh.material.forEach((material: THREE.Material) => {
                const mat = material as THREE.MeshStandardMaterial;
                // Remove all texture maps
                mat.map = null;
                mat.normalMap = null;
                mat.emissiveMap = null;
                mat.aoMap = null;
                mat.metalnessMap = null;
                mat.roughnessMap = null;
                // Set basic metallic material
                mat.color = new THREE.Color(0x333333);
                mat.metalness = 0.8;
                mat.roughness = 0.2;
              });
            } else {
              const material = mesh.material as THREE.MeshStandardMaterial;
              // Remove all texture maps
              material.map = null;
              material.normalMap = null;
              material.emissiveMap = null;
              material.aoMap = null;
              material.metalnessMap = null;
              material.roughnessMap = null;
              // Set basic metallic material
              material.color = new THREE.Color(0x333333);
              material.metalness = 0.8;
              material.roughness = 0.2;
            }
          }
        });

        setGltf(gltf.scene);
        setLoading(false);
      },
      undefined,
      (error) => {
        console.warn("Failed to load GLTF model:", error);
        setError(true);
        setLoading(false);
      }
    );
  }, []);

  if (loading) {
    return <SimpleIPhoneModel />;
  }

  if (error || !gltf) {
    return <SimpleIPhoneModel />;
  }

  return <primitive object={gltf} scale={0.22} />;
};

// iPhone Model Component
const IPhoneModel = ({
  position = [0, 0, 0],
  rotation = [0, 0, 0],
  scale = 1,
  autoRotate = true,
}: Omit<IPhone3DProps, "className" | "enableZoom" | "enablePan">) => {
  const meshRef = useRef<THREE.Group>(null);

  // Partial rotation animation: 0° → 45° → 0° (no full spin)
  useFrame((state) => {
    if (meshRef.current && autoRotate) {
      const time = state.clock.elapsedTime;
      const duration = 4; // 4 seconds for complete cycle

      // Create a smooth oscillation between 0° and -45° (left side)
      // Using Math.sin to create smooth back-and-forth motion
      const angle = (Math.sin((time * Math.PI) / duration) + 1) * 0.5; // 0 to 1
      const rotationAngle = -angle * (Math.PI / 4); // Convert to radians (-45° = -π/4)

      // Apply rotation on Y-axis (left-right rotation)
      meshRef.current.rotation.y = rotationAngle;

      // Keep other rotations at 0
      meshRef.current.rotation.x = 0;
      meshRef.current.rotation.z = 0;
    }
  });

  return (
    <group ref={meshRef} position={position} rotation={rotation} scale={scale}>
      <Suspense fallback={<SimpleIPhoneModel />}>
        <GLTFModel />
      </Suspense>
    </group>
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
        <IPhoneModel
          position={position}
          rotation={rotation}
          scale={scale}
          autoRotate={autoRotate}
        />

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
          autoRotate={false}
          autoRotateSpeed={0}
          minDistance={3}
          maxDistance={10}
          maxPolarAngle={Math.PI / 2}
          minAzimuthAngle={-Math.PI / 4}
          maxAzimuthAngle={Math.PI / 4}
        />
      </Canvas>
    </div>
  );
};

export default IPhone3D;

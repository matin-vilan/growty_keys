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
  imageSource?: string;
}

const configureTexture = (texture: THREE.Texture) => {
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.flipY = false;
  texture.wrapS = THREE.ClampToEdgeWrapping;
  texture.wrapT = THREE.ClampToEdgeWrapping;
  texture.repeat.set(1.95, 0.92);
  texture.offset.set(0.025, 0.04);
  texture.needsUpdate = true;
};

const SimpleIPhoneModel = ({
  position = [0, 0, 0],
  rotation = [0, 0, 0],
  scale = 1,
  autoRotate = true,
  imageSource,
}: Omit<IPhone3DProps, "className" | "enableZoom" | "enablePan">) => {
  const meshRef = useRef<THREE.Group>(null);
  const [texture, setTexture] = React.useState<THREE.Texture | null>(null);

  React.useEffect(() => {
    if (imageSource) {
      const loader = new THREE.TextureLoader();
      loader.load(
        imageSource,
        (loadedTexture) => {
          configureTexture(loadedTexture);
          setTexture(loadedTexture);
        },
        undefined,
        (error) => {
          console.error("Failed to load texture:", error);
        }
      );
    }
  }, [imageSource]);

  useFrame((state) => {
    if (meshRef.current && autoRotate) {
      meshRef.current.rotation.y =
        Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
    }
  });

  const screenMaterial = React.useMemo(() => {
    if (!texture) {
      return new THREE.MeshStandardMaterial({ color: 0x000000 });
    }

    const mat = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      map: texture,
      emissiveMap: null,
      emissiveIntensity: 0,
      metalness: 0,
      roughness: 0,
    });
    return mat;
  }, [texture]);

  return (
    <group ref={meshRef} position={position} rotation={rotation} scale={scale}>
      {/* iPhone Body */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[0.8, 1.6, 0.1]} />
        <meshStandardMaterial color="#C0C0C0" metalness={0.8} roughness={0.2} />
      </mesh>

      {/* Screen with Image */}
      <mesh position={[0, 0, 0.06]} material={screenMaterial}>
        <boxGeometry args={[0.7, 1.4, 0.02]} />
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

const GLTFModel = ({ imageSource }: { imageSource?: string }) => {
  const [gltf, setGltf] = React.useState<THREE.Group | null>(null);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);
  const [texture, setTexture] = React.useState<THREE.Texture | null>(null);
  const gltfRef = React.useRef<THREE.Group | null>(null);

  React.useEffect(() => {
    if (imageSource) {
      const loader = new THREE.TextureLoader();
      loader.load(
        imageSource,
        (loadedTexture) => {
          configureTexture(loadedTexture);
          setTexture(loadedTexture);
        },
        undefined,
        (error) => {
          console.error("Failed to load texture:", error);
        }
      );
    }
  }, [imageSource]);

  React.useEffect(() => {
    if (gltfRef.current && texture) {
      gltfRef.current.traverse((child) => {
        if ((child as THREE.Mesh).isMesh && (child as THREE.Mesh).material) {
          const mesh = child as THREE.Mesh;
          const materials = Array.isArray(mesh.material)
            ? mesh.material
            : [mesh.material];

          materials.forEach((material) => {
            const mat = material as THREE.MeshStandardMaterial;
            if (
              mat.color &&
              (mat.color.getHex() === 0x000000 || mat.color.getHex() < 0x333333)
            ) {
              mat.map = texture;
              mat.color = new THREE.Color(0xffffff);
              mat.emissiveMap = null;
              mat.emissiveIntensity = 0;
              mat.metalness = 0;
              mat.roughness = 0;
              mat.needsUpdate = true;
            }
          });
        }
      });
    }
  }, [texture]);

  React.useEffect(() => {
    const loader = new GLTFLoader();

    loader.load(
      "/iphone16/scene.gltf",
      (gltf) => {
        gltf.scene.traverse((child) => {
          if ((child as THREE.Mesh).isMesh && (child as THREE.Mesh).material) {
            const mesh = child as THREE.Mesh;
            const materials = Array.isArray(mesh.material)
              ? mesh.material
              : [mesh.material];

            materials.forEach((material) => {
              const mat = material as THREE.MeshStandardMaterial;

              mat.normalMap = null;
              mat.emissiveMap = null;
              mat.aoMap = null;
              mat.metalnessMap = null;
              mat.roughnessMap = null;

              if (!mat.color || mat.color.getHex() > 0x333333) {
                mat.color = new THREE.Color(0x333333);
                mat.metalness = 0.8;
                mat.roughness = 0.2;
              }
            });
          }
        });

        gltfRef.current = gltf.scene;
        setGltf(gltf.scene);
        setLoading(false);

        if (texture) {
          setTimeout(() => {
            if (gltfRef.current) {
              gltfRef.current.traverse((child) => {
                if (
                  (child as THREE.Mesh).isMesh &&
                  (child as THREE.Mesh).material
                ) {
                  const mesh = child as THREE.Mesh;
                  const materials = Array.isArray(mesh.material)
                    ? mesh.material
                    : [mesh.material];

                  materials.forEach((material) => {
                    const mat = material as THREE.MeshStandardMaterial;
                    if (
                      mat.color &&
                      (mat.color.getHex() === 0x000000 ||
                        mat.color.getHex() < 0x333333)
                    ) {
                      mat.map = texture;
                      mat.color = new THREE.Color(0xffffff);
                      mat.emissiveMap = null;
                      mat.emissiveIntensity = 0;
                      mat.metalness = 0;
                      mat.roughness = 0;
                      mat.needsUpdate = true;
                    }
                  });
                }
              });
            }
          }, 0);
        }
      },
      undefined,
      (error) => {
        console.warn("Failed to load GLTF model:", error);
        setError(true);
        setLoading(false);
      }
    );
  }, [texture]);

  if (loading) {
    return <SimpleIPhoneModel imageSource={imageSource} />;
  }

  if (error || !gltf) {
    return <SimpleIPhoneModel imageSource={imageSource} />;
  }

  return <primitive object={gltf} scale={0.22} />;
};

const IPhoneModel = ({
  position = [0, 0, 0],
  rotation = [0, 0, 0],
  scale = 1,
  autoRotate = true,
  imageSource,
}: Omit<IPhone3DProps, "className" | "enableZoom" | "enablePan">) => {
  const meshRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (meshRef.current && autoRotate) {
      const time = state.clock.elapsedTime;
      const duration = 4;

      const angle = (Math.sin((time * Math.PI) / duration) + 1) * 0.5;
      const rotationAngle = -angle * (Math.PI / 4);

      meshRef.current.rotation.y = rotationAngle;

      meshRef.current.rotation.x = 0;
      meshRef.current.rotation.z = 0;
    }
  });

  return (
    <group ref={meshRef} position={position} rotation={rotation} scale={scale}>
      <Suspense fallback={<SimpleIPhoneModel imageSource={imageSource} />}>
        <GLTFModel imageSource={imageSource} />
      </Suspense>
    </group>
  );
};

const IPhone3D: React.FC<IPhone3DProps> = ({
  className = "",
  position = [0, 0, 0],
  rotation = [0, 0, 0],
  scale = 1,
  autoRotate = true,
  enableZoom = true,
  enablePan = true,
  imageSource,
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
        <ambientLight intensity={0.4} />
        <directionalLight
          position={[10, 10, 5]}
          intensity={1}
          castShadow
          shadow-mapSize-width={2048}
          shadow-mapSize-height={2048}
        />
        <pointLight position={[-10, -10, -10]} intensity={0.3} />

        <Environment preset="studio" />

        <IPhoneModel
          position={position}
          rotation={rotation}
          scale={scale}
          autoRotate={autoRotate}
          imageSource={imageSource}
        />

        <ContactShadows
          position={[0, -2, 0]}
          opacity={0.4}
          scale={10}
          blur={2}
          far={4.5}
        />

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          enableRotate={false}
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

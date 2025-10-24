"use client";
import Header from "@/shared/components/organism/Header";
import SinLine from "@/shared/components/molecules/SinLine";
import Circulars from "@/shared/animations/Circulars";
import IPhone3D from "@/shared/components/molecules/IPhone3D";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-primary relative">
      <Header />
      <SinLine className="absolute top-[10%] left-0 w-full h-full" />
      <Circulars />

      {/* iPhone 3D Model */}
      <div className="absolute top-1/2 right-8 transform -translate-y-1/2 w-80 h-96 z-10">
        <IPhone3D
          position={[0, 0, 0]}
          rotation={[0, 0, 0]}
          scale={1.2}
          autoRotate={true}
          enableZoom={true}
          enablePan={false}
        />
      </div>
    </div>
  );
}

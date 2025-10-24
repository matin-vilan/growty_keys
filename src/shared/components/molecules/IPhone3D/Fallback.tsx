import React from "react";

interface IPhone3DFallbackProps {
  className?: string;
}

const IPhone3DFallback: React.FC<IPhone3DFallbackProps> = ({
  className = "",
}) => {
  return (
    <div
      className={`w-full h-full bg-gray-200 rounded-3xl flex items-center justify-center ${className}`}
    >
      <div className="text-center">
        <div className="w-32 h-56 bg-gray-800 rounded-3xl mx-auto mb-4 relative">
          <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-16 h-6 bg-gray-900 rounded-full"></div>
          <div className="absolute top-12 left-1/2 transform -translate-x-1/2 w-24 h-40 bg-gray-700 rounded-lg"></div>
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gray-900 rounded-full"></div>
        </div>
        <p className="text-gray-600 text-sm">iPhone 3D Model</p>
        <p className="text-gray-500 text-xs">
          Install Three.js dependencies to see 3D model
        </p>
      </div>
    </div>
  );
};

export default IPhone3DFallback;

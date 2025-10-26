import Image from "next/image";
import React from "react";

interface AvatarProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
}

const Avatar: React.FC<AvatarProps> = ({
  src,
  alt,
  width = 32,
  height = 32,
  className = "",
}) => {
  return (
    <div className={`relative ${className}`}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="rounded-full object-cover border-2 border-white shadow-sm"
      />
    </div>
  );
};

export default Avatar;

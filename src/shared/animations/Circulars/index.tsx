import React from "react";
import { twMerge } from "tailwind-merge";

interface CircleProps {
  className?: string;
  delay?: string;
  opacity?: number;
  size?: string;
  hasPulseOpacity?: boolean;
}

const Circle = ({
  className,
  delay,
  opacity = 0.1,
  size,
  hasPulseOpacity = false,
}: CircleProps) => {
  return (
    <div
      className={twMerge(
        `absolute rounded-full border-2 border-secondary animate-pulse-slow animate-pulseScale ease-in-out infinite`,
        className
      )}
      style={{
        animationDelay: `${delay}`,
        opacity: opacity,
        width: size,
        height: size,
        animation: hasPulseOpacity
          ? "pulseOpacityWithPulseScale 4s ease-in-out infinite"
          : undefined,
      }}
    />
  );
};

interface CircleConfig {
  size: string;
  opacity: number;
  delay: string;
  className?: string;
  hasPulseOpacity?: boolean;
}

interface CircularsProps {
  className?: string;
  circles?: CircleConfig[];
}

const Circulars: React.FC<CircularsProps> = ({ className = "", circles }) => {
  // Default circles configuration
  const defaultCircles: CircleConfig[] = [
    { size: "720px", opacity: 0.1, delay: "0s", hasPulseOpacity: true },
    { size: "590px", opacity: 0.1, delay: "0s", hasPulseOpacity: true },
    { size: "500px", opacity: 0.2, delay: "0.25s", hasPulseOpacity: true },
    { size: "380px", opacity: 0.2, delay: "0.75s" },
    { size: "300px", opacity: 0.3, delay: "1s" },
    {
      size: "185px",
      opacity: 0.5,
      delay: "1.25s",
      className: "bg-secondary",
    },
  ];

  const circleConfigs = circles || defaultCircles;
  return (
    <div
      className={`absolute bottom-0 left-0 flex justify-center items-center inset-0 overflow-hidden pointer-events-none ${className}`}
    >
      {circleConfigs.map((config, index) => (
        <Circle
          key={`circle-${index}`}
          size={config.size}
          opacity={config.opacity}
          delay={config.delay}
          className={config.className}
          hasPulseOpacity={config.hasPulseOpacity}
        />
      ))}
    </div>
  );
};

export default Circulars;

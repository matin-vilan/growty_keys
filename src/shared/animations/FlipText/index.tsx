"use client";

import { useEffect, useState } from "react";

interface FlipTextProps {
  words?: string[];
  interval?: number;
  className?: string;
}

interface FlipTextProps {
  words?: string[];
  interval?: number;
  className?: string;
  startDelay?: number;
}

export default function FlipText({
  words = ["WORK", "GROW"],
  interval = 3000,
  className = "",
  startDelay = 0,
}: FlipTextProps) {
  const [index, setIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    let intervalId: NodeJS.Timeout;

    const startAnimation = () => {
      setIsAnimating(true);

      setTimeout(() => {
        setIndex((prev) => (prev + 1) % words.length);
      }, 350);

      setTimeout(() => {
        setIsAnimating(false);
      }, 700);
    };

    timeoutId = setTimeout(() => {
      startAnimation();

      intervalId = setInterval(() => {
        setIsAnimating(true);

        setTimeout(() => {
          setIndex((prev) => (prev + 1) % words.length);
        }, 350);

        setTimeout(() => {
          setIsAnimating(false);
        }, 700);
      }, interval);
    }, startDelay);

    return () => {
      clearTimeout(timeoutId);
      clearInterval(intervalId);
    };
  }, [words?.length, interval, startDelay]);

  return (
    <span
      className={`inline-block origin-bottom flip-text ${
        isAnimating ? "flip-text-animating" : ""
      } ${className}`}
      style={{
        transformStyle: "preserve-3d",
        display: "inline-block",
        perspective: "1000px",
      }}
    >
      {words[index]}
      <style jsx>{`
        .flip-text {
          transition: transform 0.7s cubic-bezier(0.4, 0, 0.2, 1),
            opacity 0.7s cubic-bezier(0.4, 0, 0.2, 1);
          transform: rotateX(0deg);
          opacity: 1;
        }

        .flip-text-animating {
          animation: flipAnimation 0.7s cubic-bezier(0.4, 0, 0.2, 1);
        }

        @keyframes flipAnimation {
          0% {
            transform: rotateX(0deg);
            opacity: 1;
          }
          15% {
            transform: rotateX(-30deg);
            opacity: 0.8;
          }
          35% {
            transform: rotateX(-70deg);
            opacity: 0.3;
          }
          50% {
            transform: rotateX(-90deg);
            opacity: 0.05;
          }
          65% {
            transform: rotateX(-70deg);
            opacity: 0.3;
          }
          85% {
            transform: rotateX(-30deg);
            opacity: 0.8;
          }
          100% {
            transform: rotateX(0deg);
            opacity: 1;
          }
        }
      `}</style>
    </span>
  );
}

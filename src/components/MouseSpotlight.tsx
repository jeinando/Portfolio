"use client";
import { useEffect, useState } from "react";

export default function MousePointer() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div className="pointer-events-none fixed top-0 left-0 w-screen h-screen z-50">
      <div
        className="absolute rounded-full transition-all duration-300 ease-out"
        style={{
          transform: `translate(${position.x - 500}px, ${position.y - 500}px)`,
          width: "1000px",
          height: "1000px",
          background:
            "radial-gradient(circle, rgba(128, 90, 213, 0.2) 0%, rgba(128, 90, 213, 0.05) 70%, rgba(128, 90, 213, 0) 100%)",
          opacity: 0.4,
          filter: "blur(60px)",
        }}
      />
    </div>
  );
}

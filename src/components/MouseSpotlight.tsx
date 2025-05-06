// components/MouseSpotlight.tsx
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
    <div
      className="pointer-events-none fixed top-0 left-0 w-screen h-screen z-50 mix-blend-difference"
      style={{ pointerEvents: "none" }}
    >
      <div
        className="absolute w-32 h-32 rounded-full bg-purple-600/50 backdrop-blur-xl transition-all duration-300 ease-out"
        style={{
          transform: `translate(${position.x - 64}px, ${position.y - 64}px)`,
          boxShadow: "0 0 20px 10px rgba(128, 0, 128, 0.6)", // Sombra morada
          filter: "blur(15px)", // Filtro de desenfoque
        }}
      />
    </div>
  );
}

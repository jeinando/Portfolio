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
      className="pointer-events-none fixed top-0 left-0 w-screen h-screen z-50"
      style={{ pointerEvents: "none" }} // quitamos mix-blend-difference
    >
      <div
        className="absolute rounded-full transition-all duration-300 ease-out"
        style={{
          transform: `translate(${position.x - 500}px, ${position.y - 500}px)`,
          width: "1000px",
          height: "1000px",
          background: "radial-gradient(circle, rgba(186, 85, 211, 0.2) 0%, rgba(186, 85, 211, 0.05) 70%, rgba(186, 85, 211, 0) 100%)", // degradado morado suave
          opacity: 0.4, // luz tenue
          filter: "blur(50px)", // borde muy difuso
        }}
      />
    </div>
  );
}

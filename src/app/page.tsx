"use client"; 
import { useEffect, useState } from "react";
import MousePointer from "@/components/MouseSpotlight";

export default function Home() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative">
      <MousePointer /> {/* Aquí mantienes el efecto del puntero */}

      <section className="min-h-screen flex flex-col justify-center items-center text-center px-4 py-8">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">Jacob Tellez</h1> {/* Aquí agregas el nombre */}
        <p className="text-lg text-gray-600 max-w-xl mb-6">
          Desarrollador web enfocado en crear experiencias modernas y eficientes usando Next.js, Tailwind CSS y TypeScript.
        </p>
        <div className="flex gap-4">
          <a
            href="#Download CV"
            className="flex items-center justify-center gap-2 md:px-6 md:py-2 hover:bg-gray-700 md:rounded-2xl border border-transparent hover:border-gray-500 transition-all min-h-[50px] md:text-base px-6 py-4 text-xl duration-300 w-[160px] bg-gray-800/15"
          >
            Download CV
          </a>
          <a
            href="/contact"
            className="flex items-center justify-center gap-2 md:px-6 md:py-2 hover:bg-gray-700 md:rounded-2xl border border-transparent hover:border-gray-500 transition-all min-h-[50px] md:text-base px-6 py-4 text-xl duration-300 w-[160px] bg-gray-800/15"
          >
            Contact
          </a>
        </div>
      </section>
    </div>
  );
}

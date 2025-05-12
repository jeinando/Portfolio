"use client";

import MousePointer from "@/components/MouseSpotlight";
import Experience from "@/components/Sections/Experience";
import ScrollSpyMenu from "@/components/ScrollSpyMenu";
import About from "@/components/Sections/About";
import Education from "@/components/Sections/Education";
import Skills from "@/components/Sections/Skills";
import Contact from "@/components/Sections/Contact";
import Certifications from "@/components/Sections/Certificacions";

export default function Home() {
  return (
    <div className="relative bg-white dark:bg-neutral-950 text-gray-900 dark:text-gray-100">
      <MousePointer />

      <main className="w-full px-6 lg:px-12 space-y-24"> {/* Reducido el espacio entre secciones */}
        {/* Hero Section */}
        <section
          id="hero"
          className="min-h-screen flex flex-col justify-center items-center text-center py-20 fade-in-up"
        >
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Jacob Tellez</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-xl mb-6">
            Aspiring software developer with a strong foundation in modern web technologies, eager to contribute and grow in real-world projects.
          </p>
          <div className="flex gap-4 mb-10">
            <a
              href="/Jacob_Tellez_CV_2025.pdf"  
              className="px-6 py-3 text-lg rounded-xl bg-gray-800/15 hover:bg-gray-700 transition"
            >
              Download CV
            </a>
            <a
              href="#contact"
              className="px-6 py-3 text-lg rounded-xl bg-gray-800/15 hover:bg-gray-700 transition"
            >
              Contact
            </a>
          </div>

          {/* ScrollSpy justo debajo de los botones, alineado a la izquierda */}
          <div className="self-start ml-8">
            <ScrollSpyMenu />
          </div>
        </section>

        {/* Secciones reorganizadas para tener Skills y About más cerca del principio */}
        <Skills />
        <About />
        <Experience />
        <Education />
        <Certifications/>
        <Contact />
        {/* Puedes agregar más secciones aquí */}
      </main>
    </div>
  );
}

"use client"; 
import { useEffect, useState } from "react";
import MousePointer from "@/components/MouseSpotlight";

export default function Home() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative">
      <MousePointer /> {/* Aquí mantienes el efecto del puntero */}

      <section className="min-h-screen flex flex-col justify-center items-center text-center px-4 py-8">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">¡Hola! Soy Jacob</h1>
        <p className="text-lg text-gray-600 max-w-xl mb-6">
          Desarrollador web enfocado en crear experiencias modernas y eficientes usando Next.js, Tailwind CSS y TypeScript.
        </p>
        <div className="flex gap-4">
          <a
            href="#about"
            className="bg-gray-900 text-white px-5 py-2 rounded-full hover:bg-gray-700 transition"
          >
            Sobre mí
          </a>
          <a
            href="#contact"
            className="border border-gray-300 px-5 py-2 rounded-full hover:bg-gray-100 transition"
          >
            Contacto
          </a>
        </div>
      </section>

      {/* Sección de Experiencia */}
      <section id="experience" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Experiencia Profesional</h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold">Zozmic - Independent Clothing Brand</h3>
              <span className="text-gray-600">(Founder & Owner) - Jan 2019 – Present</span>
              <ul className="mt-4 list-disc pl-5">
                <li>Manage all aspects of the business, including branding, product development, and financial operations.</li>
                <li>Design and develop the official Zozmic website, ensuring a seamless UI/UX experience.</li>
                <li>Oversee clothing design, from concept to production, ensuring unique and high-quality apparel.</li>
                <li>Handle accounting, budgeting, and financial planning to sustain business growth.</li>
                <li>Implement digital marketing strategies and manage social media presence to drive brand awareness.</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Freelance Graphic & Brand Designer</h3>
              <span className="text-gray-600">(2020 – Present)</span>
              <ul className="mt-4 list-disc pl-5">
                <li>Design and sell custom logos, branding, and apparel designs for clothing brands and retail stores.</li>
                <li>Work closely with clients to create unique visual identities that align with their brand vision.</li>
                <li>Develop high-quality, print-ready designs optimized for different materials and production methods.</li>
                <li>Provide UI/UX consulting for e-commerce websites, ensuring a seamless and engaging user experience.</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold">ByteClub – Electronics Store</h3>
              <span className="text-gray-600">(2024 – Present)</span>
              <ul className="mt-4 list-disc pl-5">
                <li>Designed and developed the ByteClub website, integrating a real-time connection to the supplier’s database via API.</li>
                <li>Manage all administrative operations, including inventory management, financial planning, and supplier relations.</li>
                <li>Implement digital marketing strategies to drive retail sales, including social media campaigns and targeted advertising.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Sección de Educación */}
      <section id="education" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Educación</h2>
          <div>
            <h3 className="text-xl font-semibold">Bachelor of System Engineering</h3>
            <span className="text-gray-600">Universidad Fidelitas - 2023 – Present</span>
          </div>
        </div>
      </section>

      {/* Sección de Habilidades */}
      <section id="skills" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Habilidades Técnicas</h2>
          <ul className="space-y-2">
            <li>• Business Analysis</li>
            <li>• Databases: Oracle, SQL Server</li>
            <li>• Programming Languages: Python, Java, .NET, C#, PHP, JavaScript</li>
            <li>• Web Development: HTML, CSS, Tailwind, React, ASP.NET</li>
            <li>• Version Control: Git, GitHub</li>
            <li>• UI/UX Design</li>
            <li>• Graphic Design: Adobe Illustrator, Photoshop, Lightroom, Premiere Pro</li>
          </ul>
        </div>
      </section>

      {/* Sección de Certificaciones */}
      <section id="certifications" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Certificaciones</h2>
          <ul className="space-y-2">
            <li>• Certification in Introduction to IoT</li>
            <li>• CCNA: Certification in Introduction to Networks</li>
            <li>• CCNAv7: Switching, Routing, and Wireless Essentials</li>
          </ul>
        </div>
      </section>

      {/* Sección de Contacto */}
      <section id="contact" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Contacto</h2>
          <p className="text-lg text-gray-600">
            Si deseas saber más o discutir oportunidades, no dudes en contactarme a través de mi correo electrónico:
            <a href="mailto:jacobtellezr@gmail.com" className="text-blue-600">jacobtellezr@gmail.com</a>.
          </p>
        </div>
      </section>
    </div>
  );
}

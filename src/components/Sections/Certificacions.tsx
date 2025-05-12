"use client";

import { motion } from "framer-motion";
import { useRef } from "react";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const certifications = [
  "Certification in Introduction to IoT",
  "CCNA: Certification in Introduction to Networks",
  "CCNAv7: Switching, Routing, and Wireless Essentials",
 
];

const Certifications = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (scrollRef.current) {
      const scrollAmount = (e.clientX / window.innerWidth) * scrollRef.current.scrollWidth;
      scrollRef.current.scrollLeft = scrollAmount;
    }
  };

  return (
    <section id="certifications" className="py-24 scroll-mt-24">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl font-bold mb-12 text-right"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Certifications
        </motion.h2>

        {/* Carrusel de Certificaciones */}
        <motion.div
          className="relative overflow-hidden"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div
            className="flex gap-6 mx-auto"
            ref={scrollRef}
            onMouseMove={handleMouseMove}
            style={{
              scrollBehavior: "smooth",
              overflowX: "auto",
              paddingBottom: "10px",
              maxWidth: "80%", // Limita el ancho del carrusel y lo hace más centrado
              margin: "0 auto", // Centra el carrusel horizontalmente
            }}
          >
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                className="min-w-[250px] h-48 p-6 border border-zinc-300 dark:border-zinc-600 rounded-xl hover:border-purple-500 hover:text-purple-500 transition-all duration-300"
              >
                <p className="text-lg text-gray-800 dark:text-gray-200">{cert}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;

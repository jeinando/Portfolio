"use client";

import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const Education = () => {
  return (
    <section id="education" className="py-24 scroll-mt-24">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl font-bold mb-12 text-right"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Education
        </motion.h2>

        <div className="space-y-16 lg:pl-32 text-right">
          {/* Bachelor of System Engineering */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-xl font-semibold">Bachelor of System Engineering</h3>
            <span className="text-gray-500 block mb-2">Universidad Fidélitas – 2023 – Present</span>
            <p className="text-gray-400">
              Currently pursuing a bachelor's degree focused on software engineering, system architecture, and IT project management. Actively developing technical and problem-solving skills through academic projects and personal initiatives.
            </p>
          </motion.div>

          {/* Puedes agregar más experiencias educativas aquí */}
        </div>
      </div>
    </section>
  );
};

export default Education;

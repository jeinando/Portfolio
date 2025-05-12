"use client";

import { motion } from "framer-motion";
import {
  SiJavascript,
  SiPython,
  SiSharp,
  SiPhp,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiReact,
  SiNextdotjs,
  SiGit,
  SiGithub,
  SiMysql,
  SiOracle,
  SiFigma,
  SiAdobephotoshop,
  SiAdobeillustrator,
} from "react-icons/si";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const skills = [
  { icon: <SiJavascript />, name: "JavaScript" },
  { icon: <SiPython />, name: "Python" },
  { icon: <SiSharp />, name: "C#" },
  { icon: <SiPhp />, name: "PHP" },
  { icon: <SiHtml5 />, name: "HTML" },
  { icon: <SiCss3 />, name: "CSS" },
  { icon: <SiTailwindcss />, name: "Tailwind CSS" },
  { icon: <SiReact />, name: "React" },
  { icon: <SiNextdotjs />, name: "Next.js" },
  { icon: <SiGit />, name: "Git" },
  { icon: <SiGithub />, name: "GitHub" },
  { icon: <SiMysql />, name: "SQL Server" },
  { icon: <SiOracle />, name: "Oracle" },
  { icon: <SiFigma />, name: "Figma" },
  { icon: <SiAdobephotoshop />, name: "Photoshop" },
  { icon: <SiAdobeillustrator />, name: "Illustrator" },
];

export default function Skills() {
  return (
    <section id="skills" className="pt-12 pb-24 scroll-mt-24">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl font-bold mb-8 text-right"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Skills
        </motion.h2>

        <motion.div
          className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-4 gap-6 text-4xl text-zinc-700 dark:text-zinc-300 justify-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="flex flex-col items-center hover:scale-110 transition-transform"
            >
              {skill.icon}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

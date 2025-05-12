"use client";

import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const About = () => {
  return (
    <section id="about" className="py-16 scroll-mt-24 mt-2"> {/* Margin-top reducido */}
      <div className="container mx-auto px-4 flex justify-center">
        <motion.div
          className="text-right max-w-3xl lg:pr-20"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-gray-400 leading-relaxed">
            I'm a passionate System Engineering student with a solid understanding of modern web technologies such as TypeScript, Next.js, and Tailwind CSS. While I may not yet have extensive industry experience, I have developed several personal projects that reflect my problem-solving skills, clean code practices, and attention to user experience.
            <br /><br />
            I'm highly motivated to grow in a collaborative environment where I can both contribute to real-world projects and learn from experienced professionals. I take initiative, enjoy debugging and refining code, and am comfortable picking up new tools or frameworks as needed. My academic background has also given me a strong base in computer science fundamentals like algorithms, data structures, and systems analysis.
            <br /><br />
            I'm currently seeking internship opportunities in software development or IT where I can gain hands-on experience, bring enthusiasm and dedication, and continue evolving as a developer. I believe that curiosity, consistency, and teamwork are key to becoming a great engineer—and I’m ready to bring that mindset into any opportunity.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

"use client";

import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const Experience = () => {
  return (
    <section id="experience" className="py-24 scroll-mt-24">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl font-bold mb-12 text-right"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Professional Experience
        </motion.h2>

        <div className="space-y-16 lg:pl-32 text-right">
          {/* Zozmic */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-xl font-semibold">Zozmic - Independent Clothing Brand</h3>
            <span className="text-gray-500 block mb-2">(Founder & Owner) - Jan 2019 – Present</span>
            <ul className="list-none pl-0 text-left lg:text-right text-gray-400">
              <li>Manage all aspects of the business including branding, product development, and finances.</li>
              <li>Design and maintain the Zozmic website with seamless UI/UX.</li>
              <li>Lead clothing design from concept to production.</li>
              <li>Handle budgeting and financial planning for business growth.</li>
              <li>Execute digital marketing strategies and manage social media presence.</li>
            </ul>
          </motion.div>

          {/* Freelance */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-xl font-semibold">Freelance Graphic & Brand Designer</h3>
            <span className="text-gray-500 block mb-2">(2020 – Present)</span>
            <ul className="list-none pl-0 text-left lg:text-right text-gray-400">
              <li>Create custom logos, branding, and apparel designs for various clients.</li>
              <li>Collaborate with brands to align visuals with identity.</li>
              <li>Deliver print-ready, high-quality graphics for multiple media types.</li>
              <li>Offer UI/UX consulting for e-commerce platforms.</li>
              <li>Independently manage projects and client communications.</li>
            </ul>
          </motion.div>

          {/* ByteClub */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-xl font-semibold">ByteClub – Electronics Store</h3>
            <span className="text-gray-500 block mb-2">(2024 – Present)</span>
            <ul className="list-none pl-0 text-left lg:text-right text-gray-400">
              <li>Developed ByteClub’s website with real-time API integration for inventory.</li>
              <li>Managed store operations, finances, and supplier communications.</li>
              <li>Negotiated wholesale deals with partners and business clients.</li>
              <li>Led marketing efforts including social media campaigns and targeted ads.</li>
              <li>Ensured smooth customer experience both online and in-store.</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

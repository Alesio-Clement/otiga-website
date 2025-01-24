"use client";
import React from "react";
import { motion } from "framer-motion";  // Import motion from Framer Motion

const IndustryPage = () => {
  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols gap-8 mt-40 items-center px-4 xl:gap-16 xl:px-16">
        <div className="mb-40 md:mt-0 text-left flex flex-col h-full">
          {/* Title */}
          <motion.h2 
            className="text-4xl font-bold text-white mb-4"
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ duration: 1 }}
          >
            Industry
          </motion.h2>

          {/* Description */}
          <motion.p 
            className="text-base lg:text-lg"
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ duration: 1, delay: 0.2 }}
          >
            In today's data-centric world, industries are increasingly recognizing the importance of harnessing data to drive informed decision-making, enhance operational efficiency, and gain a competitive advantage. At ORTH, we offer specialized training programs designed to help industries unlock the full potential of their data and equip their employees with the latest data science tools and techniques.
          </motion.p>

          {/* Why Partner With Us */}
          <motion.h4 
            className="text-3xl font-bold text-white mt-10"
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ duration: 1, delay: 0.4 }}
          >
            Why partner with us?
          </motion.h4>
          <motion.p
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ duration: 1, delay: 0.6 }}
          >
            At Otigo Research & Technology Hub, we are committed to helping industries harness the power of data science. Partner with us to transform your data into actionable insights, upskill your workforce, and achieve your organizational objectives. Let us be your trusted tech training partner on the journey to data-driven excellence.
          </motion.p>

          {/* List of Benefits */}
          <motion.ul
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ duration: 1, delay: 0.8 }}
          >
            <motion.li className="py-2">Understanding your data</motion.li>
            <motion.li className="py-2">Utilizing data science tools</motion.li>
            <motion.li className="py-2">Employees upskilling</motion.li>
          </motion.ul>
        </div>
      </div>
    </section>
  );
};

export default IndustryPage;

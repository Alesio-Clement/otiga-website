"use client";
import React from "react";
import { motion } from "framer-motion"; 

const Consultancyage = () => {
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
            Consultancy
          </motion.h2>

          {/* Description */}
          <motion.p
            className="text-base lg:text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Understanding your audience and gathering accurate data is vital for making informed decisions. At ORTH, we provide survey and data analytics services tailored to meet your unique needs. Whether you are a business looking to understand customer preferences, an academic institution conducting research, or a nonprofit organization aiming to measure impact, our expert team is here to help.
          </motion.p>

          <motion.p
            className="text-base lg:text-lg mt-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            The following are the key consultancy services we offer
          </motion.p>

          {/* List */}
          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <motion.li className="py-2">1. Surveys</motion.li>
            <motion.li className="py-2">2. Data analytics</motion.li>
          </motion.ul>

          {/* Final description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            At ORTH, we are dedicated to helping you harness the power of your data. Our expertise in data analytics ensures that you gain meaningful insights that propel your organization forward.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default Consultancyage;

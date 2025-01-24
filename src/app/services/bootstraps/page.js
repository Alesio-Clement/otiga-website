"use client";
import React from "react";
import { motion } from "framer-motion";  // Import motion from Framer Motion

const BootstrapPage = () => {
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
            Bootcamps
          </motion.h2>

          {/* Description */}
          <motion.p 
            className="text-base lg:text-lg"
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ duration: 1, delay: 0.2 }}
          >
            Are you a recent high school graduate eager to dive into the exciting world of technology? Look no further! ORTH is delighted to present to you our comprehensive bootcamp designed specifically for young, aspiring technology enthusiasts like you.
          </motion.p>

          <motion.p 
            className="text-base lg:text-lg mt-10"
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ duration: 1, delay: 0.4 }}
          >
            Our bootcamp focuses on two fundamental pillars of modern technologies:
          </motion.p>

          {/* List of Pillars */}
          <motion.ul
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ duration: 1, delay: 0.6 }}
          >
            <motion.li className="py-2">1. Data analytics.</motion.li>
            <motion.li className="py-2">2. Software development.</motion.li>
          </motion.ul>

          <motion.p 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ duration: 1, delay: 0.8 }}
          >
            Through the program, you will gain hands-on experience with industry standard tools and technology that are critical in the current technology landscape.
          </motion.p>

          {/* Bootcamp Details */}
          <motion.h4
            className="text-3xl font-bold text-white mt-10"
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ duration: 1, delay: 1 }}
          >
            Bootcamps
          </motion.h4>
          <motion.ul
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ duration: 1, delay: 1.2 }}
          >
            <motion.li className="py-2">1. Understanding data and its relevance in making decisions</motion.li>
            <motion.li className="py-2">2. Mastering tools like Excel for data manipulation and visualization.</motion.li>
            <motion.li className="py-2">3. Learning software tools like R, Python for data processing, manipulation, and visualization</motion.li>
          </motion.ul>

          {/* Software Development */}
          <motion.h4 
            className="text-3xl font-bold text-white mt-10"
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ duration: 1, delay: 1.4 }}
          >
            Software Development
          </motion.h4>
          <motion.ul
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ duration: 1, delay: 1.6 }}
          >
            <motion.li className="py-2">1. Introduction to programming concepts</motion.li>
            <motion.li className="py-2">2. Building applications with Python</motion.li>
            <motion.li className="py-2">3. Developing problem-solving skills and coding efficiency</motion.li>
            <motion.li className="py-2">4. Understanding software development life cycle (SDLC)</motion.li>
          </motion.ul>

          {/* Bootcamp Duration */}
          <motion.h4 
            className="text-3xl font-bold text-white mt-10"
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ duration: 1, delay: 1.8 }}
          >
            Bootcamp Duration
          </motion.h4>
          <motion.p
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ duration: 1, delay: 2 }}
          >
            The bootcamp spans 12 weeks, offering balanced theoretical knowledge and practical application. The program is designed to ensure that the students gain a deep understanding of the concepts while also offering ample time for hands-on experience.
          </motion.p>

          {/* Target Groups */}
          <motion.h4 
            className="text-3xl font-bold text-white mt-10"
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ duration: 1, delay: 2.2 }}
          >
            Target Groups
          </motion.h4>
          <motion.p 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ duration: 1, delay: 2.4 }}
          >
            The bootcamp is designed for individuals who have recently completed high school and are keen to embark on a career in technology. No prior experience is needed, all you need is a passion for learning and desire to build a solid foundation in the world of technology.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default BootstrapPage;

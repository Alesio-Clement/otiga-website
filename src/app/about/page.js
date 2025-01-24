"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const AboutPage = () => {
  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols gap-8 mt-40  items-center px-4 xl:gap-16  xl:px-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-40 md:mt-0 text-left flex flex-col h-full"
        >
          <h2 className="text-4xl font-bold text-white mb-4">About ORTH</h2>
          <p className="text-base lg:text-lg">
            ORTH as a center of excellence offering training on data science, machine learning, artificial intelligence and software engineering. We strive to facilitate the achievement of individual and organizational objectives by equipping individuals, teams, organizational leadership with the specialized tech knowledge and skills required to excel in these domains.
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="mt-4 md:mt-0 text-left flex flex-col h-full"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Position Statement</h2>
          <p className="text-base lg:text-lg">
            For individuals, teams, and organizations striving for excellence in the tech industry, Otigo Research & Technology Hub (ORTH) is the premier center of excellence that offers specialized training in data science, machine learning, artificial intelligence, and software engineering to equip them with the knowledge, skills, and industry connections required to excel in these domains. We are dedicated to advancing personal and organizational success through cutting-edge education, expertise, and networking opportunities.
          </p>
        </motion.div>
      </div>

      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 mt-20 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="text-left flex flex-col h-full"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Why Choose ORTH</h2>
          <h4 className="text-1xl font-bold text-white mb-4">For the industry</h4>
          <ul>
            <li className="py-2">1. Empower your team with the ability to make data-driven decisions.</li>
            <li className="py-2">2. Stay ahead of the competition by leveraging advanced data science techniques and tools to gain deeper insights into market trends and customer behavior.</li>
            <li className="py-2">3. Invest in your employees professional growth by providing them with the skills and knowledge needed to thrive in a data-driven industry.</li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="text-left flex flex-col h-full"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Why Choose ORTH</h2>
          <h4 className="text-1xl font-bold text-white mb-4">For individuals</h4>
          <ol>
            <li className="py-2">1. Facilitate connections between the trainees and industry experts through our training programs.</li>
            <li className="py-2">2. Equip you with the skills in high demand by employers.</li>
            <li className="py-2">3. Engage in hands-on projects and real-world case studies.</li>
            <li className="py-2">4. Network with industry experts and peers, gaining insights and connections that can help propel your career forward.</li>
          </ol>
        </motion.div>
      
      </div>

      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 mt-20 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="text-left flex flex-col h-full"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Our Vision</h2>
          <p>To become Africa&apos;s market leader and most trusted center of excellence for training in data science, machine learning, artificial intelligence and software engineering. Creating a future where data science and AI professionals take their rightful place in developing innovative solutions to complex problems, drive innovation and improving the quality of life.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="text-left flex flex-col h-full"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Our Mission</h2>
          <p>To bridge the gap between theory and practice by offering deeply immersive training programs in collaboration with industries.</p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutPage;

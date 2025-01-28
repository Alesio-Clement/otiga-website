"use client";

import { motion } from "framer-motion";
import { useRef, useState } from "react";
import Testi from '../components/Testi';

const stats = [

  { number: "50+", label: "Happy Clients" },
  { number: "15+", label: "Team Members" },
  { number: "4+", label: "Years Experience" },
];

const AnimatedBackground = () => (
  <div className="absolute inset-0 overflow-hidden">

    <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
  </div>
);

const Home2 = () => {
  


  return (
    <div className="relative min-h-screen bg-gray-900">
     
  
      <section className="relative py-32 px-32">
        <div className="container relative mx-auto py-4 px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-5xl font-bold text-white md:text-7xl">
              Industry Focused
            </h1>
            <p className="mx-auto mb-12 max-w-2xl text-xl text-gray-300">
              Have a project in mind? We&apos;d love to hear about it. Let&apos;s work together to create something amazing.
            </p>
          </motion.div>

  
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative inline-block flex justify-center items-center mx-auto"
          >
            <div className=" -inset-1  bg-gradient-to-r from-blue-600 to-purple-600 opacity-70 blur-lg transition-opacity duration-300 group-hover:opacity-100" />
            <a
              href="/contact"
              className="relative inline-flex items-center gap-2 rounded bg-blue-600 px-8 py-4 text-lg font-medium text-white transition-colors hover:bg-blue-700"
            >
              Get in Touch
              <motion.svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                animate={{ x: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </motion.svg>
            </a>
          </motion.div>
          
          <section className="py-10">
            <div className="container mx-auto px-5">
              <div className="grid gap-6 md:grid-cols-3">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="text-center"
                  >
                    <div className="mb-2 text-6xl font-bold text-white">
                      {stat.number}
                    </div>
                    <div className="text-gray-600">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
  
          <section className="py-10 bg-white/5 p-8 backdrop-blur-sm rounded">
          <AnimatedBackground />
            <div className="grid gap-8 lg:grid-cols-1">
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className=" "
              >
                <h1 className="text-center mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-5xl font-bold text-white md:text-7xl">
                About Us
                </h1>
                <p className="text-center mx-auto mb-12 max-w-2xl text-gray-300">
                  Have a project in mind? We&apos;d love to hear about it. Let&apos;s work together to create something amazing.
                </p>
                
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative inline-block flex justify-center items-center mx-auto rounded"
              >
                <div className="-inset-1 bg-gradient-to-r from-blue-600 to-purple-600 opacity-70 blur-lg transition-opacity duration-300 group-hover:opacity-100" />
                <a
                  href="/contact"
                  className="relative inline-flex items-center gap-2 rounded bg-blue-600 px-8 py-4 text-lg font-medium text-white transition-colors hover:bg-blue-700"
                >
                  Get in Touch
                  <motion.svg
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </motion.svg>
                </a>
              </motion.div>

              <img
                src="/images/bg1.png" 
                alt="Image Description" 
                className="mx-auto my-2 max-w-full rounded-lg" 
              />
            </div>
          </section>

          <section className="relative py-10">
            <div className="container relative mx-auto">
              <div className="grid gap-8 lg:grid-cols-2 ">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="text-left  bg-white/5 p-8 backdrop-blur-sm rounded"
                >
                  <h1 className="mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-2xl font-bold text-white md:text-2xl">
                  About Us
                  </h1>
                  <p className="mx-auto mb-12 max-w-2xl  text-gray-300">
                    Have a project in mind? We&apos;d love to hear about it. Let&apos;s work together to create something amazing.
                    Have a project in mind? We&apos;d love to hear about it. Let&apos;s work together to create something amazing.
                    Have a project in mind? We&apos;d love to hear about it. Let&apos;s work together to create something amazing.
                    Have a project in mind? We&apos;d love to hear about it. Let&apos;s work together to create something amazing.
                  </p>
                </motion.div>
      
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="text-left  bg-white/5 p-8 backdrop-blur-sm rounded"
                >
                  <h1 className="mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-2xl font-bold text-white md:text-2xl">
                  Mission
                  </h1>
                  <p className="mx-auto mb-12 max-w-2xl  text-justify text-gray-300">
                    Have a project in mind? We&apos;d love to hear about it. Let&apos;s work together to create something amazing.
                    Have a project in mind? We&apos;d love to hear about it. Let&apos;s work together to create something amazing.
                    Have a project in mind? We&apos;d love to hear about it. Let&apos;s work together to create something amazing.
                  </p>
                  <h1 className="mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-2xl font-bold text-white md:text-2xl">
                   Vision
                  </h1>
                  <p className="mx-auto mb-12 max-w-2xl text-justify text-gray-300">
                    Have a project in mind? We&apos;d love to hear about it. Let&apos;s work together to create something amazing.
                    Have a project in mind? We&apos;d love to hear about it. Let&apos;s work together to create something amazing.
                    Have a project in mind? We&apos;d love to hear about it. Let&apos;s work together to create something amazing.
                  </p>
                </motion.div>
              </div>
            </div>
          </section>

          <section className="relative py-10 bg-white/5 p-8 backdrop-blur-sm">
            <div className="container relative mx-auto px-4">
              <div className="grid gap-8 lg:grid-cols-2">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="text-left "
                >
                  <h1 className="mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-2xl font-bold text-white md:text-4xl">
                  Why Us
                  </h1>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="text-left"
                >
                  <p className="mx-auto text-justify mb-12 max-w-2xl  text-gray-300">
                    Have a project in mind? We&apos;d love to hear about it. Let&apos;s work together to create something amazing.
                    Have a project in mind? We&apos;d love to hear about it. Let&apos;s work together to create something amazing.
                    Have a project in mind? We&apos;d love to hear about it. Let&apos;s work together to create something amazing.
                    Have a project in mind? We&apos;d love to hear about it. Let&apos;s work together to create something amazing.
                  </p>
                  
                </motion.div>
              </div>
            </div>
          </section>
        </div>

      <Testi />
      </section>
  
    </div>
  );
 
};

export default Home2;

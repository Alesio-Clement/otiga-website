"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-r from-#1e1e00 via-#003300 to-#000033 text-white">
      <div className="  grid grid-cols-1  pt-40 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className=" col-span-12 place-self-center mb-5  text-center sm:text-center justify-self-center"
        >
          <h1 className="text-white sm:text-5xl lg:text-6xl lg:leading-normal">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
              Industry Focussed{" "}
            </span>
            <br></br>
            <TypeAnimation
              sequence={[
                "Tech Training Partner",
                1000,
                "Research and Tech Hub",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
          ORTH as a center of excellence offering training on data science, machine learning, <br /> artificial intelligence and software engineering.
          </p>
          <div>
            <Link
              href="/contact"
              className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-200 text-white"
            >
             Get in Touch 
            </Link>
            <Link
              href="/about"
              className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 text-white mt-3"
            >
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                About Us
              </span>
            </Link>
          </div>
        </motion.div>
        <motion.div
      initial={{ opacity: 0, scale: 0.8 }} // Start smaller and invisible
      whileInView={{ opacity: 1, scale: 1 }} // Zoom in to full size and opacity
      transition={{ duration: 0.8 }} // Transition duration
      className="col-span-12 place-self-center my-24"
      viewport={{ once: true }} // Ensures the animation triggers only once when scrolled into view
    >
      <div className="relative">
        <Image
          src="/images/bg.jpg"
          alt="hero image"
          width={950}
          height={900}
        />
      </div>
    </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;

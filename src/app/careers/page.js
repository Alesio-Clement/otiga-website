"use client";
import React from "react";

const CareerPage = () => {
  return (
    <section className="text-white" id="about">
    <div className="md:grid md:grid-cols gap-8 mt-40  items-center px-4 xl:gap-16  xl:px-16">
      <div className="mb-40 md:mt-0 text-center flex flex-col h-full">
        <h2 className="text-4xl font-bold text-white mb-4">Careers Opportunities</h2>
        <p className="text-base lg:text-lg">
        Read the latest career opportunities and stay up to date about our organization, our projects, our events, and the impact we’re making.
        </p>
     

        <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 mt-20 px-4 xl:gap-16 sm:py-16 xl:px-16">
      <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
        <h2 className="text-4xl font-bold text-white mb-4">Fullstack Developer (Junior - Intermediate)</h2>
          <p>Oct 10, 2024</p>
          
        </div>
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <p>We are looking for an enthusiastic, organized, and skilled programmer to join our development team. As a Fullstack developer, you will be responsible for the development of applications that users can use to connect and interact with others. You will participate in the software development cycle, which includes design, development, unit testing, and bug fixing.</p>
        </div>
      
      </div>
      
      </div>
    </div>
  </section>
  );
};

export default CareerPage;

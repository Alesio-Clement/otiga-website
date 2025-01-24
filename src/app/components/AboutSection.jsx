"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Mission",
    id: "mission",
    content: (
      <p>Bridge the gap between theory and practice by offering deeply immersive training programs in collaboration with the industry.</p>
    ),
  },
  {
    title: "Vision",
    id: "vision",
    content: (
      <p>To become Africa&apos;s market leader and trusted center of excellence for training in data science, machine learning, artificial intelligence and software engineering.

      Creating a future where data science and AI professionals take their place in developing innovative solutions to complex problems, drive innovation and improve quality of life.</p>
    ),
  },
  
];

const AboutSection = () => {
  const [tab, setTab] = useState("mission");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols gap-8 items-center px-4 xl:gap-16  xl:px-16">
        {/* <Image src="/images/about-image.png" width={500} height={500} /> */}
        <div className="mt-4 md:mt-0 text-center flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Us</h2>
          <p className="text-base lg:text-lg">
          For individuals, teams and organizations striving for excellence in the industry, ORTH is the premier center of excellence. We offer specialized training in data science, machine learning, artificial intelligence and software engineering to equip you with knowledge, skills and industry connections required to excel.
          </p>
          <div className="flex flex-row justify-center mt-8">
            <TabButton
              selectTab={() => handleTabChange("mission")}
              active={tab === "mission"}
            >
              {" "}
              Mission{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("vision")}
              active={tab === "vision"}
            >
              {" "}
              Vision{" "}
            </TabButton>
           
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
      <div className="md:grid md:grid-cols-2 gap-8 items-start py-8 mt-20 px-4 xl:gap-16 sm:py-16">
  {/* Title Section */}
  <h2 className="text-4xl font-bold text-white md:justify-self-start">Why Choose ORTH</h2>

  {/* Content Section */}
  <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
    {/* For the Industry */}
    <h4 className="text-xl font-bold text-white mb-4">For the industry</h4>
    <ul>
      <li className="py-2">1. Empower your team with the ability to make data-driven decisions.</li>
      <li className="py-2">2. Stay ahead of the competition by leveraging advanced data science techniques and tools to gain deeper insights into market trends and customer behavior.</li>
      <li className="py-2">3. Invest in your employees' professional growth by providing them with the skills and knowledge needed to thrive in a data-driven industry.</li>
    </ul>

    {/* For Individuals */}
    <h4 className="text-xl font-bold text-white mb-4 mt-8">For individuals</h4>
    <ol>
      <li className="py-2">1. Through our training programs, facilitate the connections between the trainees and industry experts.</li>
      <li className="py-2">2. Equip you with the skills in high demand by employers.</li>
      <li className="py-2">3. Engage in hands-on projects and real-world case studies.</li>
      <li className="py-2">4. Network with industry experts and peers, gaining insights and connections that can help propel your career forward.</li>
    </ol>
  </div>
</div>


        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">

      </div>
    </section>
  );
};

export default AboutSection;

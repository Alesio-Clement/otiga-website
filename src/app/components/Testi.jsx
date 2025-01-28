"use client";

import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import { useEffect } from "react";

const testimonials = [
  {
    name: "John Doe",
    role: "CEO, Nairobi Real Estate Ltd",
    image: "/images/avatar.jpg",
    quote:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
    rating: 5,
  },
  {
    name: "John Doe",
    role: "Director, Sunshine Academy",
    image: "/images/avatar.jpg",
    quote:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
    rating: 5,
  },
  {
    name: "John Doe",
    role: "Founder, Healing Hands NGO",
    image: "/images/avatar.jpg",
    quote:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
    rating: 5,
  },
  {
    name: "John Doe",
    role: "Operations Manager, Swift Logistics",
    image: "/images/avatar.jpg",
    quote:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
    rating: 5,
  },
];

const Testi = () => {
  const controls = useAnimation();
  const duplicatedTestimonials = [...testimonials, ...testimonials]; // Duplicate for infinite effect

  useEffect(() => {
    const animate = async () => {
      await controls.start({
        x: [0, -100 * testimonials.length], // Slide by the width of original testimonials
        transition: {
          x: {
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          },
        },
      });
    };
    animate();
  }, [controls]);

  return (
    <section className="">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center my-10"
        >
          <h2 className="text-4xl font-bold text-white">
          Testimonnials
          </h2>
          
        </motion.div>

        <div className="relative">
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-gray-900 to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-gray-900 to-transparent z-10" />

          {/* Testimonials Slider */}
          <div className="overflow-hidden">
            <motion.div
              animate={controls}
              className="flex gap-6 py-8"
              style={{ width: `${duplicatedTestimonials.length * 400}px` }}
            >
              {duplicatedTestimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  className="w-[400px] flex-shrink-0"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl h-full">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="relative w-16 h-16">
                        <Image
                          src={testimonial.image}
                          alt={testimonial.name}
                          fill
                          className="rounded-full object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-white">
                          {testimonial.name}
                        </h3>
                        <p className="text-blue-200/80">{testimonial.role}</p>
                      </div>
                    </div>

                    

                    <blockquote>
                      <p className="text-gray-300 italic">
                        &quot;{testimonial.quote}&quot;
                      </p>
                    </blockquote>

                    {/* Decorative Quote Icon */}
                    <div className="absolute top-6 right-6 text-blue-400/20">
                      <svg
                        className="w-8 h-8"
                        fill="currentColor"
                        viewBox="0 0 32 32"
                      >
                        <path d="M10 8c-3.314 0-6 2.686-6 6s2.686 6 6 6c.796 0 1.557-.156 2.255-.436C11.482 21.642 9.87 23 8 23v2c3.314 0 6-2.686 6-6V8h-4zm14 0c-3.314 0-6 2.686-6 6s2.686 6 6 6c.796 0 1.557-.156 2.255-.436C25.482 21.642 23.87 23 22 23v2c3.314 0 6-2.686 6-6V8h-4z" />
                      </svg>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

       
      </div>
    </section>
  );
};

export default Testi;

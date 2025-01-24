"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  autoplay: true,
  autoplaySpeed: 5000,
  arrows: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1280,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 1279,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const Testimonials = () => {
  const testimonials = [
    {
      message: "This is the best service I've ever used! Highly recommend.",
      name: "John Doe",
    },
    {
      message: "Amazing quality and customer support. 10/10 would buy again.",
      name: "Jane Smith",
    },
    {
      message: "Absolutely loved my experience. Will be back for sure.",
      name: "Chris Johnson",
    },
    {
      message: "A game-changer for my business. Couldn't ask for more.",
      name: "Emily Davis",
    },
  ];

  return (
    <Slider {...settings}>
      {testimonials.map((tm, i) => (
        <aside key={i} className="">

         <div className="rounded-lg mb-40 bg-darkGray bg-opacity-10 shadow-md flex flex-col items-center justify-center">
         
          
            <h2 className="text-center text-4xl font-bold text-white mt-40 mb-6">
            Client testimonials
      </h2>
            <h4 className="text-base text-darkGray text-center mb-8">
              <q className="font-serif italic text-4xl">{tm.message}</q>
            </h4>
            <h3 className="text-center text-lg text-white">
              <span className="font-semibold">{tm.name}</span>
            </h3>
          </div>
        </aside>
      ))}
    </Slider>
  );
};

export default Testimonials;

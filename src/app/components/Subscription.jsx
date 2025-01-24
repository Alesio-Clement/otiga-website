"use client";
import React from "react";



const Subscription = () => {
 

  return (
      
      <div className="mt-12 sm:mt-16 bg-[#1a1a1a] rounded-md py-8 px-6 sm:px-12 text-center">
        <h3 className="text-white text-2xl font-semibold mb-4">Subscribe to Our Newsletter</h3>
        <p className="text-[#ADB7BE] text-base mb-6">
          Stay updated with our latest achievements, news, and updates. Join our mailing list today!
        </p>
        <form className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <input
            type="email"
            placeholder="Enter your email address"
            className="w-full sm:w-1/2 px-4 py-2 rounded-md text-black text-sm focus:outline-none"
          />
          <button
            type="submit"
            className="bg-primary-500 hover:bg-blue-700 text-white px-6 py-2 rounded-md text-sm font-semibold transition-all"
          >
            Subscribe
          </button>
        </form>
      </div>
  )
};

export default Subscription;

import React from "react";

const Footer = () => {
  return (
    <footer className="footer border-t-[#33353F] bg-[#1a1a1a] text-white py-6">
      <div className="container mx-auto px-6 flex flex-col lg:flex-row justify-between items-center">
    
        <div>
          <ul className="flex space-x-6 text-slate-400">
          <li><a href="/" className="hover:text-white">Hoem</a></li>
            <li><a href="/about" className="hover:text-white">About Us</a></li>
            <li><a href="/services" className="hover:text-white">Services</a></li>
            <li><a href="/contact" className="hover:text-white">Contact</a></li>
            <li><a href="/privacy" className="hover:text-white">Privacy Policy</a></li>
          </ul>
        </div>

        
        <div className="mt-4 lg:mt-0 text-center lg:text-right text-slate-600 text-sm">
          © {new Date().getFullYear()} Otigo Research and Technology Hub. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

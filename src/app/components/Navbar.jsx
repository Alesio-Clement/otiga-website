"use client";
import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import { Bars3Icon, XMarkIcon, ChevronDownIcon } from "@heroicons/react/24/solid";

const navLinks = [
  {
    title: "HOME",
    path: "/",
    dropdown: [
      { title: "Home 1", path: "/" },
      { title: "Home 2", path: "/home2/" },
    ],
  },
  {
    title: "ABOUT US",
    path: "/about",
  },
  {
    title: "OUR SERVICES",
    path: "/services",
    dropdown: [
      { title: "Bootstraps", path: "/services/bootstraps" },
      { title: "Industry", path: "/services/industry" },
      { title: "Individual Upskills", path: "/services/individual-upskills" },
      { title: "Consultancy", path: "/services/consultancy" },
    ],
  },
  {
    title: "NEWS",
    path: "#news",
  },
  {
    title: "CAREERS",
    path: "/careers",
  },
  {
    title: "CONTACT US",
    path: "/contact",
  },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const [activeLink, setActiveLink] = useState("/");

  const handleDropdownEnter = (index) => {
    setDropdownOpen(index); // Open the dropdown
  };

  const handleDropdownLeave = () => {
    setTimeout(() => setDropdownOpen(null), 200); // Add a slight delay before hiding
  };

  return (
    <nav className="relative mx-auto top-0 left-0 right-0 z-10 bg-[#000000] bg-opacity-100">
      <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-5 py-2">
        <Link href="/" className="text-2xl md:text-5xl text-white font-semibold">
          <Image
            className="rounded"
            src="/images/logo.jpg"
            alt="hero image"
            width={200}
            height={300}
          />
        </Link>

        {/* Mobile menu toggle */}
        <div className="mobile-menu block md:hidden">
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <Bars3Icon className="h-5 w-5" />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          )}
        </div>

        {/* Desktop menu */}
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
            {navLinks.map((link, index) => (
              <li
                key={index}
                className="relative group"
                onMouseEnter={() => handleDropdownEnter(index)}
                onMouseLeave={handleDropdownLeave}
              >
                {link.dropdown ? (
                  <>
                    <div className="cursor-pointer flex items-center space-x-1">
                      <span
                        className={`block pl-3 pr-4 text-[#ffffff] rounded md:p-0 hover:text-white ${
                          activeLink === link.path ? "underline" : ""
                        }`}
                        onClick={() => setActiveLink(link.path)}
                      >
                        {link.title}
                      </span>
                      <ChevronDownIcon className="w-4 h-4 text-white" />
                    </div>
                    {dropdownOpen === index && (
                      <div
                        className="absolute left-0 bg-[#121212] border border-gray-700 rounded-md shadow-lg w-48 mt-1"
                        onMouseEnter={() => handleDropdownEnter(index)}
                        onMouseLeave={handleDropdownLeave}
                      >
                        <ul className="py-2">
                          {link.dropdown.map((dropdownItem, idx) => (
                            <li key={idx}>
                              <Link
                                href={dropdownItem.path}
                                className="block px-4 py-2 text-[#ADB7BE] hover:text-white"
                                onClick={() => setActiveLink(dropdownItem.path)}
                              >
                                {dropdownItem.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={link.path}
                    className={`block text-white ${
                      activeLink === link.path ? "underline" : ""
                    }`}
                    onClick={() => setActiveLink(link.path)}
                  >
                    {link.title}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {navbarOpen && (
        <div className="mobile-menu block md:hidden">
          <ul className="flex flex-col p-4 space-y-4">
            {navLinks.map((link, index) => (
              <li key={index} className="relative">
                {link.dropdown ? (
                  <>
                    <div
                      onClick={() => handleDropdownEnter(index)}
                      className="cursor-pointer flex justify-between items-center text-white"
                    >
                      <span>{link.title}</span>
                      <ChevronDownIcon
                        className={`h-5 w-5 transform ${
                          dropdownOpen === index ? "rotate-180" : ""
                        }`}
                      />
                    </div>
                    {dropdownOpen === index && (
                      <div className="pl-4 bg-[#121212] border border-gray-700 rounded-md shadow-lg">
                        <ul className="py-2">
                          {link.dropdown.map((dropdownItem, idx) => (
                            <li key={idx}>
                              <Link
                                href={dropdownItem.path}
                                className="block px-4 py-2 text-[#ADB7BE] hover:text-white"
                              >
                                {dropdownItem.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={link.path}
                    className={`block text-white ${
                      activeLink === link.path ? "underline" : ""
                    }`}
                    onClick={() => setActiveLink(link.path)}
                  >
                    {link.title}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;


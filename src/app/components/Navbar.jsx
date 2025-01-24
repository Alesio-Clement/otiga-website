"use client";
import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import NavLink from "./NavLink";
import MenuOverlay from "./MenuOverlay";

const navLinks = [
  {
    title: "HOME",
    path: "/",
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
    title: "CARRERS",
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
  const [activeLink, setActiveLink] = useState("/"); // Track active link

  const handleDropdown = (index) => {
    setDropdownOpen(dropdownOpen === index ? null : index); // Toggle the dropdown open/close
  };

  return (
    <nav className="relative mx-auto top-0 left-0 right-0 z-10 bg-[#000000] bg-opacity-100">
      <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-5 py-2">
        <Link
          href={"/"}
          className="text-2xl md:text-5xl text-white font-semibold"
        >
          <Image className="rounded" src="/images/logo.jpg" alt="hero image" width={200} height={300} />
        </Link>
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
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
            {navLinks.map((link, index) => (
              <li key={index} className="relative">
                {link.dropdown ? (
                  <div
                    onMouseEnter={() => handleDropdown(index)}
                    onMouseLeave={() => handleDropdown(null)}
                    className="cursor-pointer"
                  >
                    <span
                      className={`block pl-3 pr-4 text-[#ffffff] rounded md:p-0 hover:text-white ${activeLink === link.path ? 'underline' : ''}`}
                      onClick={() => setActiveLink(link.path)} // Update active link on click
                    >
                      {link.title}
                    </span>
                    {dropdownOpen === index && (
                      <div className="absolute left-0 bg-[#121212] border border-gray-700 rounded-md shadow-lg w-48">
                        <ul className="py-2">
                          {link.dropdown.map((dropdownItem, idx) => (
                            <li key={idx}>
                              <Link
                                href={dropdownItem.path}
                                className={`block px-4 py-2 text-[#ADB7BE] hover:text-white ${activeLink === dropdownItem.path ? 'underline' : ''}`}
                                onClick={() => setActiveLink(dropdownItem.path)} // Set active link when clicking dropdown item
                              >
                                {dropdownItem.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                ) : (
                  <NavLink
                    href={link.path}
                    title={link.title}
                    className={activeLink === link.path ? 'underline' : ''}
                    onClick={() => setActiveLink(link.path)} // Set active link on click
                  />
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
      {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
    </nav>
  );
};

export default Navbar;

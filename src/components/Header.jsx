import React, { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="fixed w-full top-0 bg-[#f0f8ff] shadow-sm z-50">
      <div className="container mx-auto flex items-center justify-between px-6">
        {/* Logo */}
        <div className="flex items-center">
          <img 
            src="Logo.svg" 
            alt="Azurecloudi Logo" 
            className="h-28 w-auto object-contain" 
          />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8 text-base font-medium">
          <Link to="/" className="text-black hover:text-[#517db9] transition duration-300">
            Home
          </Link>
          <Link to="/about-us" className="text-black hover:text-[#517db9] transition duration-300">
            About Us
          </Link>
          <Link to="/services" className="text-black hover:text-[#517db9] transition duration-300">
            Services
          </Link>
          <Link to="/portfolio" className="text-black hover:text-[#517db9] transition duration-300">
            Portfolio
          </Link>
          <Link to="/careers" className="text-black hover:text-[#517db9] transition duration-300">
            Careers
          </Link>
          <Link to="/contact-us" className="text-black hover:text-[#517db9] transition duration-300">
            Contact Us
          </Link>
          <Link
            to="/consultation"
            className="bg-[#517db9] hover:text-[#517db9] text-white px-4 py-2 rounded-md shadow-md hover:bg-[#f0f8ff] transition"
          >
            Get a Free Consultation
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-3xl text-[#517db9] focus:outline-none"
          onClick={toggleMenu}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <motion.div
        initial={{ opacity: 0, x: "100%" }}
        animate={isOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: "100%" }}
        transition={{ duration: 0.3 }}
        className={`fixed inset-0 bg-white p-6 transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } lg:hidden shadow-xl flex flex-col items-center`}
      >
        <Link
          to="/"
          className="mt-36 text-lg font-semibold text-black hover:text-[#517db9] transition duration-300 text-center"
          onClick={() => setIsOpen(false)}
        >
          Home
        </Link>
        <Link
          to="/about-us"
          className="text-lg font-semibold text-black hover:text-[#517db9] transition duration-300 text-center mt-4"
          onClick={() => setIsOpen(false)}
        >
          About Us
        </Link>
        <Link
          to="/services"
          className="text-lg font-semibold text-black hover:text-[#517db9] transition duration-300 text-center mt-4"
          onClick={() => setIsOpen(false)}
        >
          Services
        </Link>
        <Link
          to="/portfolio"
          className="text-lg font-semibold text-black hover:text-[#517db9] transition duration-300 text-center mt-4"
          onClick={() => setIsOpen(false)}
        >
          Portfolio
        </Link>
        <Link
          to="/careers"
          className="text-lg font-semibold text-black hover:text-[#517db9] transition duration-300 text-center mt-4"
          onClick={() => setIsOpen(false)}
        >
          Careers
        </Link>
        <Link
          to="/contact-us"
          className="text-lg font-semibold text-black hover:text-[#517db9] transition duration-300 text-center mt-4"
          onClick={() => setIsOpen(false)}
        >
          Contact Us
        </Link>
        <div className="mt-8">
          <Link
            to="/consultation"
            className="bg-white text-[#517db9] px-4 py-2 rounded-xl shadow-md hover:bg-gray-200 transition"
            onClick={() => setIsOpen(false)}
          >
            Get a Free Consultation
          </Link>
        </div>
        <button
          className="absolute top-4 right-4 text-3xl text-[#517db9] focus:outline-none"
          onClick={toggleMenu}
          aria-label="Close menu"
        >
          <HiX />
        </button>
      </motion.div>
    </header>
  );
};

export default Header;

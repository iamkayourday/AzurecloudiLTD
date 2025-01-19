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
    <header className="fixed w-full top-0 bg-[#f0f8ff] shadow-md z-50">
      <div className="container mx-auto flex items-center justify-between px-4 lg:px-8 py-4">
        {/* Text-based Logo */}
        <div className="flex items-center">
          <span className="text-2xl lg:text-3xl font-bold text-[#517db9] tracking-wider font-serif">
            Azure<span className="text-[#364f6b]">cloudi</span>
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-6 text-base font-medium">
          {[
            { to: "/", label: "Home" },
            { to: "/about-us", label: "About Us" },
            { to: "/services", label: "Services" },
            { to: "/case-study", label: "Case Study" },
            { to: "/careers", label: "Careers" },
            { to: "/contact-us", label: "Contact Us" },
          ].map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="text-gray-700 hover:text-[#517db9] transition-colors duration-300"
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/consultation"
            className="bg-[#517db9] hover:bg-[#f0f8ff] text-white hover:text-[#517db9] px-4 py-2 rounded-md shadow-lg transition-all duration-300"
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
        className={`fixed inset-0 bg-[#f0f8ff] p-6 lg:hidden shadow-lg flex flex-col items-center`}
      >
        {[
          { to: "/", label: "Home" },
          { to: "/about-us", label: "About Us" },
          { to: "/services", label: "Services" },
          { to: "/case-study", label: "Case Study" },
          { to: "/careers", label: "Careers" },
          { to: "/contact-us", label: "Contact Us" },
        ].map((item, index) => (
          <Link
            key={item.to}
            to={item.to}
            className={`${
              index === 0 ? "mt-36" : "mt-4"
            } text-lg font-semibold text-gray-700 hover:text-[#517db9] transition-colors duration-300`}
            onClick={() => setIsOpen(false)}
          >
            {item.label}
          </Link>
        ))}
        <div className="mt-8">
          <Link
            to="/consultation"
            className="bg-[#517db9] text-white px-4 py-2 rounded-lg shadow-lg hover:bg-[#364f6b] transition-colors duration-300"
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

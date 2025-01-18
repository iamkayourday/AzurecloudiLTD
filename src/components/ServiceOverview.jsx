import React from 'react';
import { FaCloud, FaShieldAlt, FaCogs, FaLaptop, FaUserShield } from 'react-icons/fa'; // Importing icons

const ServicesOverview = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-extrabold text-[#517db9]">Our Services</h2>
        <p className="mt-4 text-[#517db9]">
          We provide a wide range of IT consultancy services to help your business grow and thrive.
        </p>
        <div className="mt-8 flex flex-wrap justify-center">
          <div className="w-full md:w-1/3 p-4">
            <div className="p-6 rounded-lg shadow-lg bg-[#f0f8ff] ">
              <FaCloud className="w-12 h-12 mx-auto text-[#517db9]" /> {/* Cloud Solutions Icon */}
              <h3 className="mt-4 text-2xl font-bold text-[#517db9]">Cloud Solutions</h3>
              <p className="mt-2 text-[#517db9]">Innovative cloud solutions to help your business stay ahead of the curve.</p>
            </div>
          </div>
          <div className="w-full md:w-1/3 p-4">
            <div className="bg-[#f0f8ff]  p-6 rounded-lg shadow-lg">
              <FaShieldAlt className="w-12 h-12 mx-auto text-[#517db9]" /> {/* Cybersecurity Icon */}
              <h3 className="mt-4 text-2xl font-bold text-[#517db9]">Cybersecurity</h3>
              <p className="mt-2 text-[#517db9]">Comprehensive security solutions to protect your data and infrastructure.</p>
            </div>
          </div>
          <div className="w-full md:w-1/3 p-4">
            <div className="bg-[#f0f8ff]  p-6 rounded-lg shadow-lg">
              <FaCogs className="w-12 h-12 mx-auto text-[#517db9]" /> {/* Managed IT Services Icon */}
              <h3 className="mt-4 text-2xl font-bold text-[#517db9]">Managed IT Services</h3>
              <p className="mt-2 text-[#517db9]">Proactive IT management to ensure your systems are running smoothly.</p>
            </div>
          </div>
          <div className="w-full md:w-1/3 p-4">
            <div className="bg-[#f0f8ff]  p-6 rounded-lg shadow-lg">
              <FaLaptop className="w-12 h-12 mx-auto text-[#517db9]" /> {/* IT Strategy Consulting Icon */}
              <h3 className="mt-4 text-2xl font-bold text-[#517db9]">IT Strategy Consulting</h3>
              <p className="mt-2 text-[#517db9]">Expert advice to align your IT strategy with your business goals.</p>
            </div>
          </div>
          <div className="w-full md:w-1/3 p-4">
            <div className="bg-[#f0f8ff]  p-6 rounded-lg shadow-lg">
              <FaUserShield className="w-12 h-12 mx-auto text-[#517db9]" /> {/* Compliance Services Icon */}
              <h3 className="mt-4 text-2xl font-bold text-[#517db9]">Compliance Services</h3>
              <p className="mt-2 text-[#517db9]">Ensuring your business meets industry standards and regulations.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;

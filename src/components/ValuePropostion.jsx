import React from 'react';
import { FaUserTie, FaGlobe, FaBriefcase } from 'react-icons/fa'; // Importing icons

const ValueProposition = () => {
  return (
    <section className="py-16 ">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-extrabold text-[#517db9]">Why Choose Us?</h2>
        <p className="mt-4 text-[#517db9]">
          We offer innovative cloud solutions to transform your business and drive success.
        </p>
        <div className="mt-8 flex flex-wrap justify-center space-x-6">
          <div className="w-full md:w-1/3 p-4">
            <div className="p-6 rounded-lg shadow-lg bg-[#f0f8ff]">
              <FaUserTie className="w-12 h-12 mx-auto text-[#517db9]" /> {/* Experienced Team Icon */}
              <h3 className="mt-4 text-2xl font-bold text-[#517db9]">Experienced Team</h3>
              <p className="mt-2 text-[#517db9]">Our team has years of experience in delivering top-notch solutions.</p>
            </div>
          </div>
          <div className="w-full md:w-1/3 p-4">
            <div className="bg-[#f0f8ff] p-6 rounded-lg shadow-lg">
              <FaGlobe className="w-12 h-12 mx-auto text-[#517db9]" /> {/* Global Reach Icon */}
              <h3 className="mt-4 text-2xl font-bold text-[#517db9]">Global Reach</h3>
              <p className="mt-2 text-[#517db9]">We provide services to clients worldwide, ensuring top quality and reliability.</p>
            </div>
          </div>
          <div className="w-full md:w-1/3 p-4">
            <div className="bg-[#f0f8ff] p-6 rounded-lg shadow-lg">
              <FaBriefcase className="w-12 h-12 mx-auto text-[#517db9]" /> {/* Professional Services Icon */}
              <h3 className="mt-4 text-2xl font-bold text-[#517db9]">Professional Services</h3>
              <p className="mt-2 text-[#517db9]">We offer a wide range of professional IT consultancy services tailored to your needs.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;

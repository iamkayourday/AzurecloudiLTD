import React from 'react';
import { motion } from 'framer-motion';
import { FaUserTie, FaGlobe, FaBriefcase } from 'react-icons/fa'; // Importing icons

const ValueProposition = () => {
  return (
    <section className="relative bg-[#f0f8ff] text-gray-500 py-20">
      <div className="container mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center lg:items-start justify-between">
        {/* Left Section: Image + Heading */}
        <div className="lg:w-1/2 flex flex-col items-center lg:items-start">
          <motion.img
            src="/Hero.jpg"
            alt="Consulting"
            className="w-full max-w-md lg:max-w-lg rounded-lg shadow-lg mb-8 lg:mb-12"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          />
          <motion.h2
            className="text-4xl font-bold tracking-tight text-center lg:text-left"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            Why Work With Us?
          </motion.h2>
          <motion.p
            className="mt-4 text-lg leading-relaxed text-center lg:text-left"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            At our core, we combine expertise, innovation, and global experience to transform
            businesses and drive success in the digital era.
          </motion.p>
        </div>

        {/* Right Section: Cards */}
        <div className="mt-12 lg:mt-0 lg:w-1/2 grid gap-8">
          {/* Card 1 */}
          <motion.div
            className="flex items-center p-6 bg-white rounded-xl shadow-lg text-blue-600 hover:scale-105 transition-transform"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="w-16 h-16 flex items-center justify-center bg-blue-100 rounded-full">
              <FaUserTie className="w-8 h-8" />
            </div>
            <div className="ml-4">
              <h3 className="text-xl font-bold">Expert Team</h3>
              <p className="mt-2 text-sm">
                Benefit from the guidance of seasoned professionals with decades of experience.
              </p>
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            className="flex items-center p-6 bg-white rounded-xl shadow-lg text-blue-600 hover:scale-105 transition-transform"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="w-16 h-16 flex items-center justify-center bg-blue-100 rounded-full">
              <FaGlobe className="w-8 h-8" />
            </div>
            <div className="ml-4">
              <h3 className="text-xl font-bold">Global Impact</h3>
              <p className="mt-2 text-sm">
                Our services span continents, empowering businesses worldwide to thrive.
              </p>
            </div>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            className="flex items-center p-6 bg-white rounded-xl shadow-lg text-blue-600 hover:scale-105 transition-transform"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="w-16 h-16 flex items-center justify-center bg-blue-100 rounded-full">
              <FaBriefcase className="w-8 h-8" />
            </div>
            <div className="ml-4">
              <h3 className="text-xl font-bold">Tailored Solutions</h3>
              <p className="mt-2 text-sm">
                From strategy to execution, we provide solutions tailored to your unique needs.
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative Graphics */}
      {/* <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-48 h-48 bg-white opacity-20 rounded-full top-10 right-20 blur-2xl"></div>
        <div className="absolute w-64 h-64 bg-blue-700 opacity-30 rounded-full bottom-10 left-10 blur-3xl"></div>
      </div> */}
    </section>
  );
};

export default ValueProposition;

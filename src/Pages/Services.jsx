import React, { useEffect } from "react";
import { motion } from "framer-motion";

import {
  FaCloud,
  FaShieldAlt,
  FaCogs,
  FaLaptop,
  FaBriefcase,
  FaLock,
  FaMoneyBillWave,
} from "react-icons/fa";

const services = [
  {
    title: "IT Strategy & Consulting",
    description:
      "Craft and execute a technology roadmap that aligns with your business goals, ensuring long-term success.",
    icon: <FaLaptop className="w-16 h-16 text-[#517db9] mx-auto mb-4" />,
  },
  {
    title: "Cloud Solutions",
    description:
      "Transform your operations with scalable cloud platforms, enhancing efficiency and reducing costs.",
    icon: <FaCloud className="w-16 h-16 text-[#517db9] mx-auto mb-4" />,
  },
  {
    title: "Cybersecurity",
    description:
      "Protect your digital assets with advanced security measures designed to keep threats at bay.",
    icon: <FaShieldAlt className="w-16 h-16 text-[#517db9] mx-auto mb-4" />,
  },
  {
    title: "Managed IT Services",
    description:
      "Focus on your core business while we handle your IT infrastructure with proactive support and maintenance.",
    icon: <FaCogs className="w-16 h-16 text-[#517db9] mx-auto mb-4" />,
  },
];

const benefits = [
  {
    title: "Tailored Solutions",
    description: "Customized strategies that cater to your unique needs.",
    icon: <FaBriefcase className="w-16 h-16 text-[#517db9] mx-auto mb-4" />,
  },
  {
    title: "Expert Support",
    description:
      "Access to a team of skilled professionals ready to assist you.",
    icon: <FaLock className="w-16 h-16 text-[#517db9] mx-auto mb-4" />,
  },
  {
    title: "Cost Efficiency",
    description: "Optimize your IT spending while maximizing output.",
    icon: <FaMoneyBillWave className="w-16 h-16 text-[#517db9] mx-auto mb-4" />,
  },
  {
    title: "Enhanced Security",
    description: "State-of-the-art solutions to protect your data.",
    icon: <FaShieldAlt className="w-16 h-16 text-[#517db9] mx-auto mb-4" />,
  },
];

const industries = [
  "Healthcare",
  "Finance",
  "Logistics",
  "Retail",
  "Education",
];

const Services = () => {
  useEffect(() => {
    // Scroll to the top of the page on component mount
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="py-16 px-6 text-gray-800 mt-14">
      {/* Hero */}

      <section
        className="relative flex flex-col items-center justify-center h-screen bg-cover bg-center px-6 md:px-16 lg:px-24 rounded-full"
        style={{
          backgroundImage: "url('/Hero.jpg')", // Replace with your background image URL
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black opacity-60 rounded-full"></div>

        {/* Content */}
        <div className="relative z-10 text-center text-white">
          {/* Heading */}
          <motion.h1
            className="text-4xl md:text-6xl font-extrabold leading-tight lg:mt-0 mt-40 text-[#517db9]"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Our Services
          </motion.h1>

          {/* Subheading */}
          <motion.p
            className="mt-4 text-lg md:text-2xl"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Discover how we empower businesses through technology.
          </motion.p>

          {/* Buttons */}
          <motion.div
            className="mt-6 flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-6"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <a
              href="/contact-us"
              className="bg-[#517db9] text-white px-6 py-3 rounded-md shadow-md hover:bg-[#f0f8ff] hover:text-[#517db9] transition font-medium"
            >
              Contact Us
            </a>
            {/* <a
            href="#learn-more"
            className="bg-transparent border-2 border-[#517db9] text-white px-6 py-3 rounded-md shadow-md hover:bg-[#517db9] hover:text-white transition font-medium"
          >
            Learn More
          </a> */}
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            repeat: Infinity,
            duration: 1.5,
            repeatType: "reverse",
          }}
        >
          <div className="w-4 h-4 border-4 border-white rounded-full"></div>
          <div className="w-1 h-6 mx-auto bg-white mt-1 rounded"></div>
        </motion.div>
      </section>

      {/* Service Descriptions */}
      <div className="container mx-auto mb-16">
        <h2 className="text-3xl font-semibold text-[#517db9] mb-8 text-center">
          What We Offer
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-[#f0f8ff] rounded-lg shadow-lg p-6 text-center"
            >
              {service.icon}
              <h3 className="text-xl font-semibold text-[#517db9]">
                {service.title}
              </h3>
              <p className="text-[#517db9] mt-2">{service.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Benefits Section */}
      <div className="container mx-auto mb-16 text-center">
        <h2 className="text-3xl font-semibold text-[#517db9] mb-8">
          Why Choose Us
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-[#f0f8ff] rounded-lg shadow-lg p-6 text-center"
            >
              {benefit.icon}
              <h3 className="text-lg font-semibold text-[#517db9]">
                {benefit.title}
              </h3>
              <p className="text-[#517db9] mt-2">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Industries Served */}
      <div className="container mx-auto mb-16 text-center">
        <h2 className="text-3xl font-semibold text-[#517db9] mb-8">
          Industries We Serve
        </h2>
        <div className="flex flex-wrap justify-center gap-8">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="bg-[#f0f8ff] rounded-lg shadow-lg p-4 w-36 text-center"
            >
              <p className="text-[#517db9] font-medium">{industry}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Call-to-Actions */}
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold text-[#517db9] mb-6">
          Ready to Transform Your Business?
        </h2>
        <p className="text-[#517db9] mb-6">
          Connect with us to explore how we can elevate your operations.
        </p>
        <div className="space-x-4">
          {/* <button className="bg-[#517db9] text-white px-6 py-3 rounded-md shadow-md hover:bg-blue-800 transition">
            Request a Consultation
          </button> */}
          <a
            href="/contact-us"
            className="py-4 px-8 bg-[#517db9] text-white text-lg font-semibold rounded-full hover:bg-[#41699e] transition-all duration-300 ease-in-out transform hover:scale-105 shadow-lg"
            whileHover={{ scale: 1.1 }}
          >
            Request a Consultation
          </a>
          {/* <button className="bg-[#f0f8ff] text-[#517db9] px-6 py-3 rounded-md shadow-md hover:bg-blue-100 transition">
            Learn More
          </button> */}
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-12 px-6 bg-[#f0f8ff] text-[#517db9] flex flex-col items-center justify-center space-y-6 mt-24 rounded-xl">
        <h3 className="font-extrabold text-center text-4xl md:text-6xl w-auto text-[#517db9]">
          Let’s start something great together!
        </h3>
        <a
          href="/contact-us"
          className="py-4 px-8 bg-[#517db9] text-white text-lg font-semibold rounded-full hover:bg-[#41699e] transition-all duration-300 ease-in-out transform hover:scale-105 shadow-lg"
          whileHover={{ scale: 1.1 }}
        >
          Contact us
        </a>
      </div>
    </section>
  );
};

export default Services;

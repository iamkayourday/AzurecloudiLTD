import React from 'react';
import { motion } from 'framer-motion';
import { FaCloud, FaShieldAlt, FaCogs, FaLaptop, FaUserShield } from 'react-icons/fa';

const ServicesOverview = () => {
  const services = [
    {
      icon: <FaCloud className="w-12 h-12 mx-auto text-[#517db9]" />,
      title: "Cloud Solutions",
      description: "Innovative cloud solutions to help your business stay ahead of the curve.",
    },
    {
      icon: <FaShieldAlt className="w-12 h-12 mx-auto text-[#517db9]" />,
      title: "Cybersecurity",
      description: "Comprehensive security solutions to protect your data and infrastructure.",
    },
    {
      icon: <FaCogs className="w-12 h-12 mx-auto text-[#517db9]" />,
      title: "Managed IT Services",
      description: "Proactive IT management to ensure your systems are running smoothly.",
    },
    {
      icon: <FaLaptop className="w-12 h-12 mx-auto text-[#517db9]" />,
      title: "IT Strategy Consulting",
      description: "Expert advice to align your IT strategy with your business goals.",
    },
    {
      icon: <FaUserShield className="w-12 h-12 mx-auto text-[#517db9]" />,
      title: "Compliance Services",
      description: "Ensuring your business meets industry standards and regulations.",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-extrabold text-[#517db9]">Our Services</h2>
        <p className="mt-4 text-gray-600">
          We provide a wide range of IT consultancy services to help your business grow and thrive.
        </p>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-[#f0f8ff] p-6 rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              {service.icon}
              <h3 className="mt-4 text-2xl font-bold text-[#517db9]">{service.title}</h3>
              <p className="mt-2 text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;

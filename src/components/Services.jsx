import React from 'react';
import { FaCloud, FaShieldAlt, FaCogs, FaLaptop, FaBriefcase, FaLock, FaMoneyBillWave } from 'react-icons/fa';

const services = [
  {
    title: 'IT Strategy & Consulting',
    description: 'Craft and execute a technology roadmap that aligns with your business goals, ensuring long-term success.',
    icon: <FaLaptop className="w-16 h-16 text-[#bc4c37] mx-auto mb-4" />,
  },
  {
    title: 'Cloud Solutions',
    description: 'Transform your operations with scalable cloud platforms, enhancing efficiency and reducing costs.',
    icon: <FaCloud className="w-16 h-16 text-[#bc4c37] mx-auto mb-4" />,
  },
  {
    title: 'Cybersecurity',
    description: 'Protect your digital assets with advanced security measures designed to keep threats at bay.',
    icon: <FaShieldAlt className="w-16 h-16 text-[#bc4c37] mx-auto mb-4" />,
  },
  {
    title: 'Managed IT Services',
    description: 'Focus on your core business while we handle your IT infrastructure with proactive support and maintenance.',
    icon: <FaCogs className="w-16 h-16 text-[#bc4c37] mx-auto mb-4" />,
  },
];

const benefits = [
  {
    title: 'Tailored Solutions',
    description: 'Customized strategies that cater to your unique needs.',
    icon: <FaBriefcase className="w-16 h-16 text-[#bc4c37] mx-auto mb-4" />,
  },
  {
    title: 'Expert Support',
    description: 'Access to a team of skilled professionals ready to assist you.',
    icon: <FaLock className="w-16 h-16 text-[#bc4c37] mx-auto mb-4" />,
  },
  {
    title: 'Cost Efficiency',
    description: 'Optimize your IT spending while maximizing output.',
    icon: <FaMoneyBillWave className="w-16 h-16 text-[#bc4c37] mx-auto mb-4" />,
  },
  {
    title: 'Enhanced Security',
    description: 'State-of-the-art solutions to protect your data.',
    icon: <FaShieldAlt className="w-16 h-16 text-[#bc4c37] mx-auto mb-4" />,
  },
];

const industries = [
  'Healthcare',
  'Finance',
  'Logistics',
  'Retail',
  'Education',
];

const Services = () => {
  return (
    <section className="py-16 px-6 text-gray-800 mt-10">
      {/* Page Heading */}
      <div className="container mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900">Our Services</h1>
        <p className="text-lg text-gray-600 mt-4">
          Discover how we empower businesses through technology.
        </p>
      </div>

      {/* Service Descriptions */}
      <div className="container mx-auto mb-16">
        <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center">
          What We Offer
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 text-center"
            >
              {service.icon}
              <h3 className="text-xl font-semibold text-gray-800">
                {service.title}
              </h3>
              <p className="text-gray-600 mt-2">{service.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Benefits Section */}
      <div className="container mx-auto mb-16 text-center">
        <h2 className="text-3xl font-semibold text-gray-800 mb-8">
          Why Choose Us
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 text-center"
            >
              {benefit.icon}
              <h3 className="text-lg font-semibold text-gray-800">
                {benefit.title}
              </h3>
              <p className="text-gray-600 mt-2">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Industries Served */}
      <div className="container mx-auto mb-16 text-center">
        <h2 className="text-3xl font-semibold text-gray-800 mb-8">
          Industries We Serve
        </h2>
        <div className="flex flex-wrap justify-center gap-8">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-4 w-36 text-center"
            >
              <p className="text-gray-800 font-medium">{industry}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Call-to-Actions */}
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">
          Ready to Transform Your Business?
        </h2>
        <p className="text-gray-600 mb-6">
          Connect with us to explore how we can elevate your operations.
        </p>
        <div className="space-x-4">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-md shadow-md hover:bg-blue-700 transition">
            Request a Consultation
          </button>
          <button className="bg-gray-300 text-gray-800 px-6 py-3 rounded-md shadow-md hover:bg-gray-400 transition">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
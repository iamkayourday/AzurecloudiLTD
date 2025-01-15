import React from 'react';
import { FaCloud, FaShieldAlt, FaCogs, FaLaptop, FaIndustry } from 'react-icons/fa';

const services = [
  {
    title: "IT Strategy Consulting",
    description: "Expert advice to align your IT strategy with your business goals.",
    icon: <FaLaptop className="w-12 h-12 text-[#bc4c37]" />,
    image: "https://via.placeholder.com/400x250"
  },
  {
    title: "Cloud Solutions",
    description: "Innovative cloud solutions to help your business stay ahead of the curve.",
    icon: <FaCloud className="w-12 h-12 text-[#bc4c37]" />,
    image: "https://via.placeholder.com/400x250"
  },
  {
    title: "Cybersecurity",
    description: "Comprehensive security solutions to protect your data and infrastructure.",
    icon: <FaShieldAlt className="w-12 h-12 text-[#bc4c37]" />,
    image: "https://via.placeholder.com/400x250"
  },
  {
    title: "Managed IT Services",
    description: "Proactive IT management to ensure your systems are running smoothly.",
    icon: <FaCogs className="w-12 h-12 text-[#bc4c37]" />,
    image: "https://via.placeholder.com/400x250"
  },
];

const industries = [
  { name: "Healthcare", icon: <FaIndustry className="w-12 h-12 text-[#bc4c37]" /> },
  { name: "Finance", icon: <FaIndustry className="w-12 h-12 text-[#bc4c37]" /> },
  { name: "Logistics", icon: <FaIndustry className="w-12 h-12 text-[#bc4c37]" /> },
  { name: "Retail", icon: <FaIndustry className="w-12 h-12 text-[#bc4c37]" /> },
];

const ServicesPage = () => {
  return (
    <div className="container mx-auto px-6 py-16 mt-10 space-y-16 ">
      {/* Hero Section */}
      <section className="text-center">
        <h1 className="text-4xl font-extrabold text-[#4a4a4a] mb-6">Our Services</h1>
        <p className="text-lg text-gray-600">We offer a wide range of IT consultancy services to help your business grow and thrive.</p>
      </section>

      {/* Detailed Descriptions */}
      <section className="space-y-16">
        {services.map((service, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row items-center ${index % 2 === 0 ? '' : 'md:flex-row-reverse'} space-y-6 md:space-y-0`}
          >
            <div className="md:w-1/2">
              <img src={service.image} alt={service.title} className="w-full rounded-lg shadow-md h-80" />
            </div>
            <div className="md:w-1/2 p-6">
              <div className="flex items-center space-x-4">
                {service.icon}
                <h2 className="text-3xl font-extrabold text-[#4a4a4a]">{service.title}</h2>
              </div>
              <p className="mt-4 text-lg text-gray-600">{service.description}</p>
            </div>
          </div>
        ))}
      </section>

      {/* Benefits Section */}
      <section className="text-center">
        <h2 className="text-3xl font-extrabold text-[#4a4a4a] mb-6">Benefits of Our Services</h2>
        <p className="text-lg text-gray-600 mb-8">Our services are designed to solve your most pressing IT challenges and help you achieve your business goals.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <FaCloud className="w-12 h-12 mx-auto text-[#bc4c37]" />
            <h3 className="mt-4 text-2xl font-bold text-[#4a4a4a]">Scalability</h3>
            <p className="mt-2 text-gray-600">Easily scale your IT infrastructure to meet your growing business needs.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <FaShieldAlt className="w-12 h-12 mx-auto text-[#bc4c37]" />
            <h3 className="mt-4 text-2xl font-bold text-[#4a4a4a]">Security</h3>
            <p className="mt-2 text-gray-600">Protect your data and systems with our advanced security solutions.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <FaCogs className="w-12 h-12 mx-auto text-[#bc4c37]" />
            <h3 className="mt-4 text-2xl font-bold text-[#4a4a4a]">Efficiency</h3>
            <p className="mt-2 text-gray-600">Improve operational efficiency with our managed IT services.</p>
          </div>
        </div>
      </section>

      {/* Industries Served */}
      <section className="text-center">
        <h2 className="text-3xl font-extrabold text-[#4a4a4a] mb-6">Industries We Serve</h2>
        <p className="text-lg text-gray-600 mb-8">We specialize in providing IT solutions for a variety of industries.</p>
        <div className="flex flex-wrap justify-center gap-8">
          {industries.map((industry, index) => (
            <div key={index} className="flex items-center space-x-4">
              {industry.icon}
              <span className="text-lg text-gray-600">{industry.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center">
        <h2 className="text-3xl font-extrabold text-[#4a4a4a] mb-6">Ready to Transform Your Business?</h2>
        <p className="text-lg text-gray-600 mb-8">Contact us today to request a consultation and learn how our services can help you achieve your business goals.</p>
        <a
          href="/consultation"
          className="bg-[#bc4c37] text-white px-6 py-3 rounded-md shadow-md hover:bg-[#a43c2e] transition"
        >
          Request a Consultation
        </a>
      </section>
    </div>
  );
};

export default ServicesPage;

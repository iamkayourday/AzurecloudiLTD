import React,{ useEffect }  from "react";
import { FaCloud, FaShieldAlt, FaCogs, FaLaptop, FaBriefcase, FaLock, FaMoneyBillWave } from 'react-icons/fa';

const services = [
  {
    title: 'IT Strategy & Consulting',
    description: 'Craft and execute a technology roadmap that aligns with your business goals, ensuring long-term success.',
    icon: <FaLaptop className="w-16 h-16 text-[#517db9] mx-auto mb-4" />,
  },
  {
    title: 'Cloud Solutions',
    description: 'Transform your operations with scalable cloud platforms, enhancing efficiency and reducing costs.',
    icon: <FaCloud className="w-16 h-16 text-[#517db9] mx-auto mb-4" />,
  },
  {
    title: 'Cybersecurity',
    description: 'Protect your digital assets with advanced security measures designed to keep threats at bay.',
    icon: <FaShieldAlt className="w-16 h-16 text-[#517db9] mx-auto mb-4" />,
  },
  {
    title: 'Managed IT Services',
    description: 'Focus on your core business while we handle your IT infrastructure with proactive support and maintenance.',
    icon: <FaCogs className="w-16 h-16 text-[#517db9] mx-auto mb-4" />,
  },
];

const benefits = [
  {
    title: 'Tailored Solutions',
    description: 'Customized strategies that cater to your unique needs.',
    icon: <FaBriefcase className="w-16 h-16 text-[#517db9] mx-auto mb-4" />,
  },
  {
    title: 'Expert Support',
    description: 'Access to a team of skilled professionals ready to assist you.',
    icon: <FaLock className="w-16 h-16 text-[#517db9] mx-auto mb-4" />,
  },
  {
    title: 'Cost Efficiency',
    description: 'Optimize your IT spending while maximizing output.',
    icon: <FaMoneyBillWave className="w-16 h-16 text-[#517db9] mx-auto mb-4" />,
  },
  {
    title: 'Enhanced Security',
    description: 'State-of-the-art solutions to protect your data.',
    icon: <FaShieldAlt className="w-16 h-16 text-[#517db9] mx-auto mb-4" />,
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
  useEffect(() => {
    // Scroll to the top of the page on component mount
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="py-16 px-6 text-gray-800 mt-14">
      {/* Page Heading */}
      <div className="container mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold text-[#517db9]">Our Services</h1>
        <p className="text-lg text-[#517db9] mt-4">
          Discover how we empower businesses through technology.
        </p>
      </div>

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
          <button className="bg-[#517db9] text-white px-6 py-3 rounded-md shadow-md hover:bg-blue-800 transition">
            Request a Consultation
          </button>
          <button className="bg-[#f0f8ff] text-[#517db9] px-6 py-3 rounded-md shadow-md hover:bg-blue-100 transition">
            Learn More
          </button>
        </div>
      </div>
      
       {/* CTA Section */}
       <div
        className="py-12 px-6 bg-[#f0f8ff] text-[#517db9] flex flex-col items-center justify-center space-y-6 mt-24 rounded-xl"
      >
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

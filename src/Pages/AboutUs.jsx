import React from 'react';
import { FaAws, FaMicrosoft, FaServer } from 'react-icons/fa';

const teamMembers = [
  { name: 'John Doe', role: 'CEO', image: 'https://via.placeholder.com/150' },
  { name: 'Jane Smith', role: 'CTO', image: 'https://via.placeholder.com/150' },
  { name: 'James Brown', role: 'COO', image: 'https://via.placeholder.com/150' },
];

const CertificationCard = ({ Icon, text, color }) => (
  <div className="flex items-center space-x-4 hover:scale-105 transition-transform">
    <Icon className={`w-12 h-12 ${color}`} />
    <span className="text-lg text-gray-600">{text}</span>
  </div>
);

const AboutUs = () => {
  return (
    <div className="container mx-auto px-6 py-16 mt-10 space-y-16">
      {/* Page Heading */}
      <header className="text-center mb-16">
        <h1 className="text-5xl font-extrabold text-gray-800">
          About Us
        </h1>
        <p className="text-lg text-gray-600 mt-4">
          Get to know our journey, mission, and the incredible team behind our success.
        </p>
      </header>

      {/* Mission and Vision Statement */}
      <section className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0">
        <div className="md:w-1/2">
          <h2 className="text-3xl font-extrabold text-gray-800 mb-4">Our Mission and Vision</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            We are committed to empowering innovation and collaboration through technology. Our vision is to
            create a world where technology fosters global connectivity and bridges gaps.
          </p>
        </div>
        <div className="md:w-1/2">
          <img
            src="/Hero.webp"
            alt="Team collaborating on a project"
            className="w-full rounded-lg shadow-md h-80"
          />
        </div>
      </section>

      {/* Company Story */}
      <section className="flex flex-col md:flex-row-reverse items-center space-y-6 md:space-y-0">
        <div className="md:w-1/2 lg:ml-5">
          <h2 className="text-3xl font-extrabold text-gray-800 mb-4">Our Story</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            From humble beginnings to a global partner, our journey has been driven by a passion for innovation.
            We've transformed challenges into opportunities, always staying true to our values.
          </p>
        </div>
        <div className="md:w-1/2">
          <img
            src="/Hero.webp"
            alt="Our journey and success"
            className="w-full rounded-lg shadow-md h-80"
          />
        </div>
      </section>

      {/* Team Members Section */}
      <section>
        <h2 className="text-3xl font-extrabold text-gray-800 mb-8 text-center">Meet Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow"
            >
              <img
                src={member.image}
                alt={`Portrait of ${member.name}`}
                className="w-32 h-32 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-bold text-gray-800">{member.name}</h3>
              <p className="text-gray-600">{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Certifications and Partnerships */}
      <section>
        <h2 className="text-3xl font-extrabold text-gray-800 mb-8 text-center">Certifications and Partnerships</h2>
        <div className="flex flex-wrap justify-center gap-8">
          <CertificationCard Icon={FaMicrosoft} text="Microsoft Partner" color="text-blue-600" />
          <CertificationCard Icon={FaAws} text="AWS Partner" color="text-yellow-600" />
          <CertificationCard Icon={FaServer} text="Industry Certified" color="text-green-600" />
        </div>
      </section>
    </div>
  );
};

export default AboutUs;

import React from 'react';

const MissionVision = () => {
  return (
    <section className="py-16 px-6">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 text-center">
        <div>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Mission</h2>
          <p className="text-lg text-gray-600 mb-8">
            To empower businesses and individuals with cutting-edge technology solutions that drive success and innovation.
          </p>
        </div>
        <div>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Vision</h2>
          <p className="text-lg text-gray-600">
            To be a global leader in delivering exceptional digital services that shape the future of technology.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;

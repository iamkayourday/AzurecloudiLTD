import React from 'react';

const Team = () => {
  const teamMembers = [
    {
      name: 'Jane Doe',
      role: 'CEO',
      bio: 'Visionary leader with over 15 years of experience in technology.',
      photo: '/thumbnail.avif',
    },
    {
      name: 'John Smith',
      role: 'CTO',
      bio: 'Expert in cloud computing and data security.',
      photo: '/thumbnail.avif',
    },
    {
      name: 'Alice Brown',
      role: 'Head of Marketing',
      bio: 'Creative marketer with a passion for branding and storytelling.',
      photo: '/man.jpg',
    },
    {
      name: 'Bob Green',
      role: 'Lead Developer',
      bio: 'Seasoned developer specializing in full-stack development.',
      photo: '/thumbnail.avif',
    },
  ];

  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-12">
          Meet the Team
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={member.photo}
                alt={member.name}
                className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-indigo-100"
              />
              <h3 className="text-xl font-semibold text-gray-700">
                {member.name}
              </h3>
              <p className="text-indigo-600 font-medium">{member.role}</p>
              <p className="text-gray-600 mt-3">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;

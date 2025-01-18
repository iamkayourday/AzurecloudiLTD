import React from 'react';

const jobListings = [
  {
    title: 'Frontend Developer',
    description: 'Develop and maintain user-facing features for our applications.',
    location: 'Remote',
    id: 1,
  },
  {
    title: 'Backend Developer',
    description: 'Build and optimize server-side functionality and APIs.',
    location: 'New York, NY',
    id: 2,
  },
  {
    title: 'Product Manager',
    description: 'Oversee product development and ensure alignment with company goals.',
    location: 'San Francisco, CA',
    id: 3,
  },
];

const testimonials = [
  {
    name: 'Jane Doe',
    role: 'Software Engineer',
    quote: 'Working here has been an incredible journey of growth and collaboration.',
    image: 'https://via.placeholder.com/150',
  },
  {
    name: 'John Smith',
    role: 'Product Designer',
    quote: 'The supportive culture here allows me to thrive creatively.',
    image: 'https://via.placeholder.com/150',
  },
];

const Careers = () => {
  return (
    <div className="container mx-auto px-6 py-16 space-y-16 mt-10">
      {/* Header Section */}
      <header className="text-center mb-16">
        <h2 className="text-5xl font-extrabold text-gray-800">Careers</h2>
        <p className="text-lg text-gray-600 mt-4">
          Join our team and help us shape the future of technology. Discover opportunities to grow and thrive.
        </p>
      </header>

      {/* Job Listings */}
      <section>
        <h3 className="text-3xl font-extrabold text-gray-800 mb-8">Open Positions</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {jobListings.map((job) => (
            <div
              key={job.id}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow space-y-4"
            >
              <h4 className="text-xl font-bold text-gray-800">{job.title}</h4>
              <p className="text-gray-600">{job.description}</p>
              <p className="text-sm text-gray-500">Location: {job.location}</p>
              <button className="mt-4 px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700">
                Apply Now
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Company Culture Section */}
      <section>
        <h3 className="text-3xl font-extrabold text-gray-800 mb-8">Life at Our Company</h3>
        <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8">
          <div className="md:w-1/2">
            <p className="text-lg text-gray-600 leading-relaxed">
              At our company, we prioritize innovation, collaboration, and inclusivity. Our workplace fosters
              growth and creativity, ensuring every team member feels valued and supported.
            </p>
          </div>
          <div className="md:w-1/2">
            <img
              src="/culture.jpg"
              alt="Workplace culture"
              className="w-full rounded-lg shadow-md"
            />
          </div>
        </div>
      </section>

      {/* Employee Testimonials */}
      <section>
        <h3 className="text-3xl font-extrabold text-gray-800 mb-8">What Our Team Says</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow space-y-4"
            >
              <img
                src={testimonial.image}
                alt={`Portrait of ${testimonial.name}`}
                className="w-16 h-16 rounded-full mx-auto"
              />
              <p className="text-gray-600 text-center">"{testimonial.quote}"</p>
              <h4 className="text-center text-lg font-bold text-gray-800">{testimonial.name}</h4>
              <p className="text-center text-sm text-gray-500">{testimonial.role}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Careers;

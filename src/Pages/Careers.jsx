import React, { useEffect } from "react";
import { motion } from "framer-motion";

const jobListings = [
  {
    title: "Frontend Developer",
    description:
      "Develop and maintain user-facing features for our applications.",
    location: "Remote",
    id: 1,
  },
  {
    title: "Backend Developer",
    description: "Build and optimize server-side functionality and APIs.",
    location: "New York, NY",
    id: 2,
  },
  {
    title: "Product Manager",
    description:
      "Oversee product development and ensure alignment with company goals.",
    location: "San Francisco, CA",
    id: 3,
  },
];

const testimonials = [
  {
    name: "Emma Johnson",
    role: "Software Engineer",
    quote:
      "Working here has been an incredible journey of growth and collaboration.",
    image: "/Hero.jpg",
  },
  {
    name: "Olivia Brown",
    role: "Product Designer",
    quote: "The supportive culture here allows me to thrive creatively.",
    image: "/Hero.jpg",
  },
  {
    name: "James Williams",
    role: "Product Designer",
    quote: "The supportive culture here allows me to thrive creatively.",
    image: "/Hero.jpg",
  },
];

const Careers = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleScrollToPositions = () => {
    const positionsSection = document.getElementById("job-positions");
    if (positionsSection) {
      positionsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="container mx-auto px-6 py-16 space-y-16 mt-10 max-w-7xl">
      {/* Header Section */}
      <motion.header
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0"
      >
        {/* Text Section */}
        <div className="md:w-1/2 space-y-6">
          <h1 className="text-5xl font-extrabold text-gray-800 leading-tight">
            Careers at Our Company
          </h1>
          <p className="text-lg text-gray-600">
            Join a team that values innovation, collaboration, and inclusivity.
            Discover your next great opportunity with us.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleScrollToPositions}
            className="py-3 px-6 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all duration-300 ease-in-out"
          >
            View Positions
          </motion.button>
        </div>

        {/* Oval Image */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2 flex justify-center"
        >
          <img
            src="/Hero.jpg"
            alt="Careers Hero"
            className="w-[300px] h-[500px] object-cover rounded-full shadow-lg"
          />
        </motion.div>
      </motion.header>

      {/* Round Div */}
      <div className="py-10 px-20 bg-[#f0f8ff] max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 rounded-full shadow-md">
        <div className="lg:border-r lg:border-gray-400">
          <h2 className="font-bold text-4xl text-[#517db9]">30+</h2>
          <p className="font-semibold text-[#385f95]">Released projects</p>
          <p className="text-[#6d99d6] font-medium">
            {" "}
            Successfully finished projects with creativity.
          </p>
        </div>

        <div className="lg:border-r lg:border-gray-400">
          <h2 className="font-bold text-4xl text-[#517db9]">21</h2>
          <p className="font-semibold text-[#385f95]">Awesome clients</p>
          <p className="text-[#6d99d6] font-medium">
            Trusted clients who love our consultancy.
          </p>
        </div>

        <div className="lg:border-r lg:border-gray-400">
          <h2 className="font-bold text-4xl text-[#517db9]">12+</h2>
          <p className="font-semibold text-[#385f95]">Ongoing projects</p>
          <p className="text-[#6d99d6] font-medium">
            Ongoing projects are being worked by team.
          </p>
        </div>

        <div>
          <h2 className="font-bold text-4xl text-[#517db9]">6</h2>
          <p className="font-semibold text-[#385f95]">Consultants team</p>
          <p className="text-[#6d99d6] font-medium">
            Focuses on impactful, efficient project execution with Azure Cloud
            solutions.
          </p>
        </div>
      </div>

      {/* Advantages */}
      <section className="py-16">
        <div className="flex flex-col md:flex-row items-stretch space-y-8 md:space-y-0 md:space-x-8">
          {/* Image Section */}
          <div className="relative md:w-1/2 flex-grow">
            <img
              src="/Hero.jpg"
              alt="Advantages"
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-40 rounded-lg px-6 py-8">
              <h3 className="text-3xl md:text-4xl font-extrabold text-white text-center">
                Explore Our Advantages with Azure Cloud Solutions
              </h3>
              <p className="text-white text-center mt-4">
                Join a dynamic team that values innovation, collaboration, and
                continuous learning, empowering you to thrive and excel in your
                career with cutting-edge Azure Cloud technologies.
              </p>
            </div>
          </div>

          {/* Text Divs Section */}
          <div className="md:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Extensive Expertise */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow space-y-4">
              <h4 className="text-xl font-bold text-[#517db9]">
                Extensive Expertise
              </h4>
              <p className="text-gray-600">
                Our team brings extensive experience and proven expertise to
                deliver exceptional results.
              </p>
            </div>

            {/* Innovative Solutions */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow space-y-4">
              <h4 className="text-xl font-bold text-[#517db9]">
                Innovative Solutions
              </h4>
              <p className="text-gray-600">
                We prioritize innovation and creativity in every project we
                undertake.
              </p>
            </div>

            {/* Customer-Centric Approach */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow space-y-4">
              <h4 className="text-xl font-bold text-[#517db9]">
                Customer-Centric Approach
              </h4>
              <p className="text-gray-600">
                Customer satisfaction is at the heart of our business
                philosophy.
              </p>
            </div>

            {/* On-Time Delivery */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow space-y-4">
              <h4 className="text-xl font-bold text-[#517db9]">
                On-Time Delivery
              </h4>
              <p className="text-gray-600">
                We deliver projects on time, ensuring efficiency and
                reliability.
              </p>
            </div>

            {/* Scalable Solutions */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow space-y-4">
              <h4 className="text-xl font-bold text-[#517db9]">
                Scalable Solutions
              </h4>
              <p className="text-gray-600">
                Our solutions are scalable and tailored to your specific needs.
              </p>
            </div>

            {/* Transparent Collaboration */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow space-y-4">
              <h4 className="text-xl font-bold text-[#517db9]">
                Transparent Collaboration
              </h4>
              <p className="text-gray-600">
                We foster a culture of collaboration and transparency throughout
                our process.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Job Listings */}
      <section id="job-positions">
        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-3xl font-extrabold text-[#517db9] mb-8 align-middle text-center"
        >
          Open Positions
        </motion.h3>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {jobListings.map((job) => (
            <motion.div
              key={job.id}
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow space-y-4"
            >
              <h4 className="text-xl font-bold text-[#517db9]">{job.title}</h4>
              <p className="text-gray-600">{job.description}</p>
              <p className="text-sm text-gray-500">Location: {job.location}</p>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="mt-4 px-4 py-2 bg-[#517db9] text-white font-semibold rounded-lg hover:bg-[#395d90]"
              >
                Apply Now
              </motion.button>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Employee Testimonials */}
      <section>
        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-3xl font-extrabold text-[#517db9] mb-8"
        >
          What Our Team Says
        </motion.h3>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow space-y-4"
            >
              <img
                src={testimonial.image}
                alt={`Portrait of ${testimonial.name}`}
                className="w-16 h-16 rounded-full mx-auto"
              />
              <p className="text-gray-600 text-center">"{testimonial.quote}"</p>
              <h4 className="text-center text-lg font-bold text-gray-800">
                {testimonial.name}
              </h4>
              <p className="text-center text-sm text-gray-500">
                {testimonial.role}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Bento Grid Section
      <section className="py-16">
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-6">
          <div className="col-span-1 sm:col-span-2 lg:col-span-3 bg-gray-200 rounded-lg shadow-lg">
            <img
              src="/Hero.jpg"
              alt="Placeholder 1"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div className="col-span-1 sm:col-span-1 lg:col-span-1 bg-gray-200 rounded-lg shadow-lg">
            <img
              src="/Hero.jpg"
              alt="Placeholder 2"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div className="col-span-1 sm:col-span-1 lg:col-span-1 bg-gray-200 rounded-lg shadow-lg">
            <img
              src="/Hero.jpg"
              alt="Placeholder 3"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div className="col-span-1 sm:col-span-2 lg:col-span-2 bg-gray-200 rounded-lg shadow-lg">
            <img
              src="/Hero.jpg"
              alt="Placeholder 4"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div className="col-span-1 sm:col-span-1 lg:col-span-1 bg-gray-200 rounded-lg shadow-lg">
            <img
              src="/Hero.jpg"
              alt="Placeholder 5"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default Careers;

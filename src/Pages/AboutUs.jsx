import React,{ useEffect }  from "react";
import { motion } from "framer-motion";
import { FaAws, FaMicrosoft, FaServer } from "react-icons/fa";

const CertificationCard = ({ Icon, text, color }) => (
  <motion.div
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
    className="flex items-center space-x-4 hover:scale-105 transition-transform"
  >
    <Icon className={`w-12 h-12 ${color}`} />
    <span className="text-lg text-gray-600">{text}</span>
  </motion.div>
);

const AboutUs = () => {
  
  useEffect(() => {
    // Scroll to the top of the page on component mount
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container mx-auto px-6 py-16 mt-16 space-y-16">
      {/* Page Heading */}
      <header className="text-center mb-16">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-extrabold text-[#517db9]"
        >
          About Us
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-lg text-gray-600 mt-4"
        >
          Get to know our journey, mission, and the incredible team behind our
          success.
        </motion.p>
      </header>

      {/* Mission and Vision Statement */}
      <section className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0">
        <motion.div
          className="md:w-1/2"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-extrabold text-[#517db9] mb-4">
            Our Mission and Vision
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            At our core, we are driven by a mission to foster innovation and
            global connectivity through cutting-edge technology. We aim to
            create solutions that bring people together, bridge cultural and
            geographical gaps, and empower communities worldwide. Our vision is
            a future where technology transcends boundaries, inspires progress,
            and shapes a more inclusive world.
          </p>
        </motion.div>
        <motion.div
          className="md:w-1/2"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src="/connect.jpg"
            alt="Team collaborating on a project"
            className="w-full rounded-lg shadow-md h-80"
          />
        </motion.div>
      </section>

      {/* Company Story */}
      <section className="flex flex-col md:flex-row-reverse items-center space-y-6 md:space-y-0">
        <motion.div
          className="md:w-1/2 lg:ml-5"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-extrabold text-[#517db9] mb-4">
            Our Story
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Starting as a small team with big dreams, we’ve grown into a global
            force shaping the technology landscape. Each milestone in our
            journey is a testament to resilience, innovation, and the relentless
            pursuit of excellence. With a diverse team and a collaborative
            spirit, we continue to rewrite the narrative of what’s possible in
            the tech world.
          </p>
          <p className="text-lg text-gray-600 mt-4">
            Together, we’ve built partnerships, tackled challenges, and
            celebrated achievements that inspire us to keep striving for greater
            heights.
          </p>
        </motion.div>
        <motion.div
          className="md:w-1/2"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src="/success.avif"
            alt="Our journey and success"
            className="w-full rounded-lg shadow-md h-80"
          />
        </motion.div>
      </section>
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-[#517db9]">Our Core Values</h1>
          <p className="text-lg text-gray-600 mt-4">
            Discover the principles that drive our commitment to excellence.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Excellence */}
          <div className="bg-[#f0f8ff] py-6 px-6 border-[#517db9] border rounded-3xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-2xl font-semibold mb-4 text-[#517db9]">
              Excellence
            </h2>
            <p className="text-base text-gray-600">
              Committed to delivering the highest quality services and
              solutions, ensuring superior performance and outstanding results
              for our clients.
            </p>
          </div>
          {/* Empowerment */}
          <div className="bg-[#f0f8ff] py-6 px-6 border-[#517db9] border rounded-3xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-2xl font-semibold mb-4 text-[#517db9]">
              Empowerment
            </h2>
            <p className="text-base text-gray-600">
              Empowering clients and team members to innovate, succeed, and
              achieve their goals through collaboration and support.
            </p>
          </div>
          {/* Innovation */}
          <div className="bg-[#f0f8ff] py-6 px-6 border-[#517db9] border rounded-3xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-2xl font-semibold mb-4 text-[#517db9]">
              Innovation
            </h2>
            <p className="text-base text-gray-600">
              Continuously seeking creative and effective solutions to meet
              evolving challenges and drive progress in every aspect of our
              work.
            </p>
          </div>
        </div>
      </div>

      {/* Team Members Section */}
      {/* <section>
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl font-extrabold text-[#517db9] mb-8 text-center"
        >
          Meet Our Team */}
        {/* </motion.h2> */}
        {/* <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        > */}
          {/* Individual Team Member 1 */}
          {/* <div className="relative group p-6 rounded-full w-80 h-96 mx-auto overflow-hidden transition-shadow"> */}
            {/* Team Member Image */}
            {/* <img
              src="/team1.jpg"
              alt="Portrait of John Doe"
              className="w-full h-full object-cover rounded-full"
            /> */}
            {/* Hover Content */}
            {/* <div className="absolute bottom-0 w-full flex flex-col items-center justify-center bg-[#f0f8ff] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-full p-4">
              <h3 className="text-xl font-bold text-gray-800">Jane Doe</h3>
              <p className="text-gray-600">CEO</p>
            </div>
          </div> */}

          {/* Individual Team Member 2 */}
          {/* <div className="relative group p-6 rounded-full w-80 h-96 mx-auto overflow-hidden transition-shadow"> */}
            {/* Team Member Image */}
            {/* <img
              src="/team2.jpg"
              alt="Portrait of Jane Smith"
              className="w-full h-full object-cover rounded-full"
            /> */}
            {/* Hover Content */}
            {/* <div className="absolute bottom-0 w-full flex flex-col items-center justify-center bg-[#f0f8ff] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-full p-4">
              <h3 className="text-xl font-bold text-gray-800">Jane Smith</h3>
              <p className="text-gray-600">CTO</p>
            </div>
          </div> */}

          {/* Individual Team Member 3 */}
          {/* <div className="relative group p-6 rounded-full w-80 h-96 mx-auto overflow-hidden transition-shadow"> */}
            {/* Team Member Image */}
            {/* <img
              src="/team3.jpg"
              alt="Portrait of Robert Brown"
              className="w-full h-full object-cover rounded-full"
            /> */}
            {/* Hover Content */}
            {/* <div className="absolute bottom-0 w-full flex flex-col items-center justify-center bg-[#f0f8ff] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-full p-4">
              <h3 className="text-xl font-bold text-gray-800">Robert Brown</h3>
              <p className="text-gray-600">CFO</p>
            </div>
          </div> */}

          {/* Individual Team Member 4 */}
          {/* <div className="relative group p-6 rounded-full w-80 h-96 mx-auto overflow-hidden transition-shadow"> */}
            {/* Team Member Image */}
            {/* <img
              src="/team4.jpg"
              alt="Portrait of Emily White"
              className="w-full h-full object-cover rounded-full"
            /> */}
            {/* Hover Content */}
            {/* <div className="absolute bottom-0 w-full flex flex-col items-center justify-center bg-[#f0f8ff] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-full p-4">
              <h3 className="text-xl font-bold text-gray-800">Emily White</h3>
              <p className="text-gray-600">COO</p>
            </div>
          </div>
        </motion.div>
        <p className="text-center align-middle font-semibold">
          We are hiring.{" "}
          <a href="/careers" className="underline">
            Open positions
          </a>
        </p>
      </section> */}


      {/* Certifications and Partnerships */}
      <section>
        <h2 className="text-3xl font-extrabold text-gray-800 mb-8 text-center">
          Certifications and Partnerships
        </h2>
        <motion.div
          className="flex flex-wrap justify-center gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <CertificationCard
            Icon={FaMicrosoft}
            text="Microsoft Partner"
            color="text-blue-600"
          />
          <CertificationCard
            Icon={FaAws}
            text="AWS Partner"
            color="text-yellow-600"
          />
          <CertificationCard
            Icon={FaServer}
            text="Industry Certified"
            color="text-green-600"
          />
        </motion.div>
      </section>
      <div className="py-12 px-6 bg-[#f0f8ff] text-[#517db9] flex flex-col items-center justify-center space-y-6">
        <h3 className="font-extrabold text-center text-4xl md:text-6xl w-auto text-[#517db9]">
          Let’s start something great together!
        </h3>
        <a
          href="/contact-us"
          className="py-4 px-8 bg-[#517db9] text-white text-lg font-semibold rounded-full hover:bg-[#41699e] transition-all duration-300 ease-in-out transform hover:scale-105 shadow-lg"
        >
          Contact us
        </a>
      </div>
    </div>
  );
};

export default AboutUs;

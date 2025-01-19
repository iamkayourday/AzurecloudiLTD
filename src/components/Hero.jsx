import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      className="relative flex flex-col items-center justify-center h-screen bg-cover bg-center px-6 md:px-16 lg:px-24"
      style={{
        backgroundImage: "url('/Hero.jpg')", // Replace with your background image URL
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black opacity-60"></div>

      {/* Content */}
      <div className="relative z-10 text-center text-white">
        {/* Heading */}
        <motion.h1
          className="text-4xl md:text-6xl font-extrabold leading-tight lg:mt-0 mt-40 text-white"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Welcome to <span className="text-[#517db9]">Azurecloudi LTD</span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          className="mt-4 text-lg md:text-2xl"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          Innovative cloud solutions to transform your business and drive success.
        </motion.p>

        {/* Buttons */}
        <motion.div
          className="mt-6 flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-6"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <a
            href="/contact-us"
            className="bg-[#517db9] text-white px-6 py-3 rounded-md shadow-md hover:bg-[#f0f8ff] hover:text-[#517db9] transition font-medium"
          >
            Contact Us
          </a>
          {/* <a
            href="#learn-more"
            className="bg-transparent border-2 border-[#517db9] text-white px-6 py-3 rounded-md shadow-md hover:bg-[#517db9] hover:text-white transition font-medium"
          >
            Learn More
          </a> */}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          repeat: Infinity,
          duration: 1.5,
          repeatType: "reverse",
        }}
      >
        <div className="w-4 h-4 border-4 border-white rounded-full"></div>
        <div className="w-1 h-6 mx-auto bg-white mt-1 rounded"></div>
      </motion.div>
    </section>
  );
};

export default Hero;

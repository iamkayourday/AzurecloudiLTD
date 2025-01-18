const Hero = () => {
  return (
    <section className="relative flex flex-col items-center justify-center h-screen bg-cover bg-center px-6 md:px-16 lg:px-24"
      style={{
        backgroundImage: "url('/Hero.jpg')", // Replace with your background image URL
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div> {/* Dark overlay */}

      <div className="relative z-10 text-center text-white">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight lg:mt-0 mt-40">
          Welcome to <span className="text-[#517db9] ">Azurecloudi LTD</span>
        </h1>
        <p className="mt-4 text-lg md:text-2xl">
          Innovative cloud solutions to transform your business and drive success.
        </p>
        <div className="mt-6 flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-6">
          <a
            href="#contact"
            className="bg-[#517db9] text-white px-6 py-3 rounded-md shadow-md hover:bg-[#f0f8ff] hover:text-[#517db9] transition font-medium"
          >
            Contact Us
          </a>
          <a
            href="#learn-more"
            className="bg-[#517db9] text-white px-6 py-3 rounded-md shadow-md hover:bg-[#f0f8ff] hover:text-[#517db9]  transition font-medium"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;

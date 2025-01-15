// Hero  Component with Tailwind CSS
const Hero = () => {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat h-screen flex items-center justify-center"
      style={{
        backgroundImage: "url('/Hero.webp')", // Replace with your background image URL
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-6">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
          Welcome to Azurecloudi LTD
        </h1>
        <p className="text-lg md:text-2xl mb-8">
          We provide innovative cloud solutions to power your business.
        </p>
        <div className="space-x-4">
          <a
            href="#contact"
            className="bg-indigo-600 text-white px-6 py-3 rounded-md shadow-md hover:bg-indigo-700 transition"
          >
            Contact Us
          </a>
          <a
            href="#learn-more"
            className="bg-gray-800 text-white px-6 py-3 rounded-md shadow-md hover:bg-gray-900 transition"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;

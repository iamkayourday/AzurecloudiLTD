import React,{ useEffect }  from "react";
import { FaUser, FaEnvelope, FaPhoneAlt, FaCommentDots } from "react-icons/fa";
import { Link } from "react-router-dom";

const ContactUs = () => {
  useEffect(() => {
    // Scroll to the top of the page on component mount
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Header Section */}
      <header className="text-center mb-12">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-800">
          Contact Us
        </h2>
        <p className="text-base sm:text-lg text-gray-600 mt-4">
          We’d love to hear from you. Whether you have a question or just want
          to say hello, feel free to reach out!
        </p>
      </header>

      {/* Contact Form and Image Section */}
      <section className="flex flex-col lg:flex-row items-stretch lg:space-x-8">
        {/* Image */}
        <Link to="/" className="lg:w-1/2 w-full mb-8 lg:mb-0">
          <div className="h-64 sm:h-80 lg:h-full flex items-center border-2 border-blue-500 rounded-lg overflow-hidden">
            <img
              src="Hero.webp"
              alt="Contact Us"
              className="w-full h-full object-cover"
            />
          </div>
        </Link>

        {/* Form */}
        <div className="lg:w-1/2 w-full">
          <form className="bg-white p-6 sm:p-8 rounded-lg shadow-lg flex flex-col space-y-6">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-800">
              Get in Touch
            </h3>

            {/* Name Fields */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="first-name"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  First Name
                </label>
                <div className="flex items-center border border-gray-300 rounded-lg">
                  <FaUser className="ml-3 text-gray-400" />
                  <input
                    type="text"
                    id="first-name"
                    placeholder="First Name"
                    className="w-full border-0 p-3 rounded-r-lg focus:outline-none focus:ring focus:ring-blue-300"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="last-name"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Last Name
                </label>
                <div className="flex items-center border border-gray-300 rounded-lg">
                  <FaUser className="ml-3 text-gray-400" />
                  <input
                    type="text"
                    id="last-name"
                    placeholder="Last Name"
                    className="w-full border-0 p-3 rounded-r-lg focus:outline-none focus:ring focus:ring-blue-300"
                  />
                </div>
              </div>
            </div>

            {/* Email Field */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Email
              </label>
              <div className="flex items-center border border-gray-300 rounded-lg">
                <FaEnvelope className="ml-3 text-gray-400" />
                <input
                  type="email"
                  id="email"
                  placeholder="Your Email"
                  className="w-full border-0 p-3 rounded-r-lg focus:outline-none focus:ring focus:ring-blue-300"
                />
              </div>
            </div>

            {/* Phone Field */}
            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Phone Number
              </label>
              <div className="flex items-center border border-gray-300 rounded-lg">
                <FaPhoneAlt className="ml-3 text-gray-400" />
                <input
                  type="tel"
                  id="phone"
                  placeholder="Phone Number"
                  pattern="[0-9+\-\(\) ]*"
                  className="w-full border-0 p-3 rounded-r-lg focus:outline-none focus:ring focus:ring-blue-300"
                />
              </div>
            </div>

            {/* Message Field */}
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Message
              </label>
              <div className="flex items-start border border-gray-300 rounded-lg">
                <FaCommentDots className="ml-3 mt-3 text-gray-400" />
                <textarea
                  id="message"
                  placeholder="Your Message"
                  rows="4"
                  className="w-full border-0 p-3 rounded-r-lg focus:outline-none focus:ring focus:ring-blue-300"
                ></textarea>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Submit
            </button>
          </form>
        </div>
      </section>

      {/* Text Under the Form and Image */}
      {/* <div className="text-center mt-12">
        <p className="text-sm sm:text-lg text-gray-600">
          We’d love to hear from you or just reach out manually to{" "}
          <a href="mailto: info@azurecloudi.com" className="text-blue-600">
             info@azurecloudi.com
          </a>
        </p>
      </div> */}

      {/* Grid of Contact Options */}
      {/* <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h4 className="text-lg font-bold text-gray-800">Email Support</h4>
          <p className="text-gray-600 mt-2">
            Reach us at{" "}
            <a href="mailto: info@azurecloudi.com" className="text-blue-600">
               info@azurecloudi.com
            </a>
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h4 className="text-lg font-bold text-gray-800">Visit Our Office</h4>
          <p className="text-gray-600 mt-2">
            123 Main Street, City, State, ZIP
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h4 className="text-lg font-bold text-gray-800">Call Us Directly</h4>
          <p className="text-gray-600 mt-2">Phone: +1 (123) 456-7890</p>
        </div>
      </section> */}
      
      {/* CTA Section */}
      {/* <div
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
      </div> */}
    </div>
  );
};

export default ContactUs;

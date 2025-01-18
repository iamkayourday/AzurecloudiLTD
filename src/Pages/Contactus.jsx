import React from "react";
import { FaUser, FaEnvelope, FaPhoneAlt, FaCommentDots } from "react-icons/fa";

const ContactUs = () => {
  return (
    <div className="container mx-auto px-6 py-16">
      {/* Header Section */}
      <header className="text-center mb-16 mt-14">
        <h2 className="text-5xl font-extrabold text-gray-800">Contact Us</h2>
        <p className="text-lg text-gray-600 mt-4">
          We’d love to hear from you. Whether you have a question or just want
          to say hello, feel free to reach out!
        </p>
      </header>

      {/* Contact Form and Image Section */}
      <section className="flex flex-col lg:flex-row items-stretch lg:space-x-8 mb-16">
        {/* Image */}
        <div className="lg:w-1/2 w-full mb-8 lg:mb-0 flex items-center border-2 border-[#517db9] rounded-lg">
          <img
            src="Hero.webp"
            alt="Contact Us"
            className="rounded-lg shadow-lg w-full h-full object-cover"
          />
        </div>

        {/* Form */}
        <div className="lg:w-1/2 w-full border-2 border-[#517db9] rounded-lg">
          <form className="bg-white p-6 rounded-lg shadow-lg h-full flex flex-col space-y-6">
            <h3 className="text-3xl font-extrabold text-gray-800 mb-6">
              Get in Touch
            </h3>

            <div className="grid grid-cols-2 gap-4">
              <div className="relative">
                <label
                  htmlFor="first-name"
                  className="block text-gray-700 font-medium mb-2"
                >
                  First Name
                </label>
                <div className="flex items-center border border-gray-300 rounded-lg">
                  <FaUser className="ml-3 text-gray-400" />
                  <input
                    type="text"
                    id="first-name"
                    placeholder="First Name"
                    className="w-full border-0 rounded-r-lg p-3 focus:outline-none focus:ring focus:ring-blue-300"
                  />
                </div>
              </div>
              <div className="relative">
                <label
                  htmlFor="last-name"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Last Name
                </label>
                <div className="flex items-center border border-gray-300 rounded-lg">
                  <FaUser className="ml-3 text-gray-400" />
                  <input
                    type="text"
                    id="last-name"
                    placeholder="Last Name"
                    className="w-full border-0 rounded-r-lg p-3 focus:outline-none focus:ring focus:ring-blue-300"
                  />
                </div>
              </div>
            </div>

            <div className="relative">
              <label
                htmlFor="email"
                className="block text-gray-700 font-medium mb-2"
              >
                Email
              </label>
              <div className="flex items-center border border-gray-300 rounded-lg">
                <FaEnvelope className="ml-3 text-gray-400" />
                <input
                  type="email"
                  id="email"
                  placeholder="Your Email"
                  className="w-full border-0 rounded-r-lg p-3 focus:outline-none focus:ring focus:ring-blue-300"
                />
              </div>
            </div>

            <div className="relative">
              <label
                htmlFor="phone"
                className="block text-gray-700 font-medium mb-2"
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
                  className="w-full border-0 rounded-r-lg p-3 focus:outline-none focus:ring focus:ring-blue-300"
                />
              </div>
            </div>

            <div className="relative">
              <label
                htmlFor="message"
                className="block text-gray-700 font-medium mb-2"
              >
                Message
              </label>
              <div className="flex items-start border border-gray-300 rounded-lg">
                <FaCommentDots className="ml-3 mt-3 text-gray-400" />
                <textarea
                  id="message"
                  placeholder="Your Message"
                  rows="4"
                  className="w-full border-0 rounded-r-lg p-3 focus:outline-none focus:ring focus:ring-blue-300"
                ></textarea>
              </div>
            </div>

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
      <div className="text-center mb-16">
        <p className="text-lg text-gray-600">
          We’d love to hear from you or just reach out manually to{" "}
          <a href="mailto:info@example.com" className="text-blue-600">
            info@example.com
          </a>
        </p>
      </div>

      {/* Grid of Contact Options */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h4 className="text-xl font-bold text-gray-800">Email Support</h4>
          <p className="text-gray-600 mt-2">
            Reach us at{" "}
            <a href="mailto:support@example.com" className="text-blue-600">
              support@example.com
            </a>
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h4 className="text-xl font-bold text-gray-800">Visit Our Office</h4>
          <p className="text-gray-600 mt-2">
            123 Main Street, City, State, ZIP
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h4 className="text-xl font-bold text-gray-800">Call Us Directly</h4>
          <p className="text-gray-600 mt-2">Phone: +1 (123) 456-7890</p>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;

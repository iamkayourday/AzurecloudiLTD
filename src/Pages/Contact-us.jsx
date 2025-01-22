import React, { useState, useEffect } from "react";
import { FaUser, FaEnvelope, FaPhoneAlt, FaCommentDots } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const ContactUs = () => {
  const navigate = useNavigate();

  // State to manage form inputs
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  // State to manage errors
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" }); // Clear error on input
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form
    const validationErrors = {};
    if (!formData.firstName.trim()) validationErrors.firstName = "First name is required.";
    if (!formData.lastName.trim()) validationErrors.lastName = "Last name is required.";
    if (!formData.email.trim()) validationErrors.email = "Email is required.";
    if (!formData.phone.trim()) validationErrors.phone = "Phone number is required.";
    if (!formData.message.trim()) validationErrors.message = "Message is required.";

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      // Redirect to Thank You page on successful form submission
      navigate("/thank-you");
    }
  };

  useEffect(() => {
    // Scroll to the top of the page on component mount
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Header Section */}
      <header className="text-center mb-12">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-[#517db9]">
          Contact Us
        </h2>
        <p className="text-base sm:text-lg text-gray-600 mt-4">
          We’d love to hear from you. Whether you have a question or just want to say hello, feel free to reach out!
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
          <form
            onSubmit={handleSubmit}
            className="bg-white p-6 sm:p-8 rounded-lg shadow-lg flex flex-col space-y-6"
          >
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#517db9]">
              Get in Touch
            </h3>

            {/* Name Fields */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="firstName"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  First Name
                </label>
                <div className="flex items-center border border-gray-300 rounded-lg">
                  <FaUser className="ml-3 text-gray-400" />
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full border-0 p-3 rounded-r-lg focus:outline-none focus:ring focus:ring-blue-300"
                  />
                </div>
                {errors.firstName && (
                  <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>
                )}
              </div>
              <div>
                <label
                  htmlFor="lastName"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Last Name
                </label>
                <div className="flex items-center border border-gray-300 rounded-lg">
                  <FaUser className="ml-3 text-gray-400" />
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full border-0 p-3 rounded-r-lg focus:outline-none focus:ring focus:ring-blue-300"
                  />
                </div>
                {errors.lastName && (
                  <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>
                )}
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
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full border-0 p-3 rounded-r-lg focus:outline-none focus:ring focus:ring-blue-300"
                />
              </div>
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
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
                  name="phone"
                  placeholder="Phone Number"
                  pattern="[0-9+\-\(\) ]*"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full border-0 p-3 rounded-r-lg focus:outline-none focus:ring focus:ring-blue-300"
                />
              </div>
              {errors.phone && (
                <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
              )}
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
                  name="message"
                  placeholder="Your Message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full border-0 p-3 rounded-r-lg focus:outline-none focus:ring focus:ring-blue-300"
                ></textarea>
              </div>
              {errors.message && (
                <p className="text-red-500 text-sm mt-1">{errors.message}</p>
              )}
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
    </div>
  );
};

export default ContactUs;

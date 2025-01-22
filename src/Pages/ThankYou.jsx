import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";

const ThankYou = () => {
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState(10); // Set initial countdown to 10 seconds

  useEffect(() => {
    // Countdown timer
    const timer = setInterval(() => {
      setCountdown((prevCountdown) => {
        if (prevCountdown === 1) {
          navigate("/contact-us");
        }
        return prevCountdown - 1;
      });
    }, 1000);

    return () => clearInterval(timer); // Cleanup timer on unmount
  }, [navigate]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-md text-center">
        {/* Success Icon */}
        <div className="text-[#517db9] mb-6">
          <FaCheckCircle size={60} className="mx-auto" />
        </div>
        {/* Heading */}
        <h2 className="text-3xl font-bold text-[#517db9] mb-4">Thank You!</h2>
        {/* Message */}
        <p className="text-lg text-gray-600 mb-6">
          Your message has been successfully sent!!
        </p>
        {/* Countdown Redirect */}
        <p className="text-sm text-gray-500 mb-8">
          You’ll be redirected to the Contact page in <span className="font-bold">{countdown}</span> seconds.
          <br />
          If not, click the button below.
        </p>
        {/* Button */}
        <button
          onClick={() => navigate("/contact-us")}
          className="bg-[#517db9] text-white py-3 px-6 rounded-lg hover:bg-[#4676b8] transition-colors"
        >
          Go to Contact Page
        </button>
      </div>
    </div>
  );
};

export default ThankYou;

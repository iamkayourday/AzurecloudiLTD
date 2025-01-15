import { useState, useEffect } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1024);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const updateMedia = () => {
    setIsDesktop(window.innerWidth >= 1024);
  };

  useEffect(() => {
    window.addEventListener('resize', updateMedia);
    return () => window.removeEventListener('resize', updateMedia);
  });

  return (
    <header className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        <div className="text-2xl font-extrabold tracking-wide">Azurecloudi LTD</div>

        {isDesktop ? (
          <div className="flex items-center space-x-8 text-lg font-medium">
            <nav className="flex space-x-6">
              <a href="#home" className="hover:text-gray-200 transition duration-300">Home</a>
              <a href="#about" className="hover:text-gray-200 transition duration-300">About Us</a>
              <a href="#services" className="hover:text-gray-200 transition duration-300">Services</a>
              <a href="#portfolio" className="hover:text-gray-200 transition duration-300">Portfolio</a>
              <a href="#careers" className="hover:text-gray-200 transition duration-300">Careers</a>
              <a href="#contact" className="hover:text-gray-200 transition duration-300">Contact Us</a>
            </nav>
            <a href="#consultation" className="bg-white text-blue-600 px-4 py-2 rounded-md shadow-md hover:bg-gray-200 transition">Get a Free Consultation</a>
          </div>
        ) : (
          <>
            <button
              className="focus:outline-none text-3xl"
              onClick={toggleMenu}
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
            >
              {isOpen ? <HiX /> : <HiMenu />}
            </button>
            <motion.div
              initial={{ opacity: 0, x: '100%' }}
              animate={isOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: '100%' }}
              transition={{ duration: 0.3 }}
              className={`fixed top-0 right-0 w-3/4 h-full bg-gradient-to-b from-indigo-600 via-purple-600 to-pink-600 text-white p-6 transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} shadow-xl`}
            >
              <ul className="space-y-8 text-lg font-semibold">
                <li><a href="#home" className="block hover:text-gray-200 transition duration-300">Home</a></li>
                <li><a href="#about" className="block hover:text-gray-200 transition duration-300">About Us</a></li>
                <li><a href="#services" className="block hover:text-gray-200 transition duration-300">Services</a></li>
                <li><a href="#portfolio" className="block hover:text-gray-200 transition duration-300">Portfolio</a></li>
                <li><a href="#careers" className="block hover:text-gray-200 transition duration-300">Careers</a></li>
                <li><a href="#contact" className="block hover:text-gray-200 transition duration-300">Contact Us</a></li>
              </ul>
              <div className="mt-8">
                <a href="#consultation" className="bg-white text-blue-600 px-4 py-2 rounded-md shadow-md hover:bg-gray-200 transition block text-center">Get a Free Consultation</a>
              </div>
              <button
                className="absolute top-4 right-4 text-3xl focus:outline-none"
                onClick={toggleMenu}
                aria-label="Close menu"
              >
                <HiX />
              </button>
            </motion.div>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;

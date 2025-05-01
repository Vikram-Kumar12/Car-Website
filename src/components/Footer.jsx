import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowUp } from 'react-icons/fi';
import { Link } from 'react-scroll';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <span className="text-yellow-500">Lux</span>Cars
            </h3>
            <p className="text-gray-400">
              Your premier destination for luxury and performance vehicles.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="home" smooth={true} duration={500} className="text-gray-400 hover:text-yellow-500 cursor-pointer transition-colors">Home</Link></li>
              <li><Link to="premium" smooth={true} duration={500} className="text-gray-400 hover:text-yellow-500 cursor-pointer transition-colors">Premium Brands</Link></li>
              <li><Link to="featured" smooth={true} duration={500} className="text-gray-400 hover:text-yellow-500 cursor-pointer transition-colors">Featured Models</Link></li>
              <li><Link to="about" smooth={true} duration={500} className="text-gray-400 hover:text-yellow-500 cursor-pointer transition-colors">About</Link></li>
              <li><Link to="contact" smooth={true} duration={500} className="text-gray-400 hover:text-yellow-500 cursor-pointer transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li className="hover:text-yellow-500 transition-colors">Vehicle Sales</li>
              <li className="hover:text-yellow-500 transition-colors">Test Drives</li>
              <li className="hover:text-yellow-500 transition-colors">Financing</li>
              <li className="hover:text-yellow-500 transition-colors">Maintenance</li>
              <li className="hover:text-yellow-500 transition-colors">Trade-Ins</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Newsletter</h4>
            <p className="text-gray-400 mb-4">
              Subscribe to our newsletter for the latest updates and offers.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="bg-gray-800 text-white px-4 py-2 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 w-full"
              />
              <button className="bg-yellow-500 hover:bg-yellow-600 text-black px-4 py-2 rounded-r-lg transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} LuxCars. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-yellow-500 transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-yellow-500 transition-colors">Terms of Service</a>
            <button
              onClick={scrollToTop}
              className="text-gray-400 hover:text-yellow-500 transition-colors flex items-center"
            >
              Back to Top <FiArrowUp className="ml-1" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
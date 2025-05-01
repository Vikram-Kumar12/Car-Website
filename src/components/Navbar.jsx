import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaCar, FaUser, FaHeart, FaChevronDown, FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isNewCarsOpen, setIsNewCarsOpen] = useState(false);
  const [isCityPopupOpen, setIsCityPopupOpen] = useState(false);
  const [city, setCity] = useState('Select City');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Disable scroll when mobile menu is open
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.body.style.overflow = 'auto'; // Cleanup
    };
  }, [isMobileMenuOpen]);

  const newCarsOptions = [
    "Explore New Cars",
    "Electric Cars",
    "Popular Cars",
    "Upcoming Cars",
    "New Launches",
    "Car Insurance",
    "Popular Brands",
    "Compare Cars",
    "New Car Offers & Discounts",
    "Find Car Dealers",
    "Find EV Charging Stations",
    "Find Fuel Stations",
    "Check Fuel Prices"
  ];

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
    setIsNewCarsOpen(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <motion.nav
      className={`fixed w-full z-50 transition-colors duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 py-3">
        {/* Top Navbar */}
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <FaCar className="text-blue-600 text-2xl mr-2" />
            <Link to="/" className="text-2xl font-bold text-blue-600">
              CarConsult
            </Link>
          </div>

          {/* Desktop Navigation - This was missing in previous version */}
          <div className="hidden md:flex space-x-6 items-center">
            <Link to="/" className="text-gray-800 hover:text-blue-600 transition-colors">
              Home
            </Link>
            <Link to="/about" className="text-gray-800 hover:text-blue-600 transition-colors">
              About
            </Link>
            <Link to="/services" className="text-gray-800 hover:text-blue-600 transition-colors">
              Services
            </Link>
            <Link to="/consult" className="text-gray-800 hover:text-blue-600 transition-colors">
              Consult
            </Link>
            
            <div className="relative">
              <button 
                onClick={() => setIsNewCarsOpen(!isNewCarsOpen)}
                className="flex items-center text-gray-800 hover:text-blue-600 transition-colors"
              >
                New Cars <FaChevronDown className="ml-1" />
              </button>
              
              {isNewCarsOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute left-0 mt-2 w-64 bg-white rounded-md shadow-lg py-1 z-50"
                >
                  {newCarsOptions.map((option, index) => (
                    <Link
                      key={index}
                      to="#"
                      className="block px-4 py-2 text-gray-800 hover:bg-blue-50 hover:text-blue-600"
                    >
                      {option}
                    </Link>
                  ))}
                </motion.div>
              )}
            </div>

            <button 
              onClick={() => setIsCityPopupOpen(true)}
              className="bg-blue-100 text-blue-600 px-4 py-2 rounded-md hover:bg-blue-200 transition-colors"
            >
              {city}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <FaHeart className="text-gray-800 text-xl" />
            <FaUser className="text-gray-800 text-xl" />
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-800"
            >
              {isMobileMenuOpen ? (
                <FaTimes className="text-xl" />
              ) : (
                <FaBars className="text-xl" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <>
              {/* Overlay */}
              <div 
                className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  document.body.style.overflow = 'auto';
                }}
              />
              
              {/* Menu Content */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className={`fixed top-16 left-0 right-0 bottom-0 z-50 overflow-y-auto ${
                  isScrolled ? 'bg-white' : 'bg-white'
                } md:hidden`}
              >
                <div className="container mx-auto px-4 py-4">
                  <div className="flex flex-col space-y-4">
                    <Link 
                      to="/" 
                      className="text-gray-800 hover:text-blue-600 px-3 py-2 rounded hover:bg-blue-50"
                      onClick={handleLinkClick}
                    >
                      Home
                    </Link>
                    <Link 
                      to="/about" 
                      className="text-gray-800 hover:text-blue-600 px-3 py-2 rounded hover:bg-blue-50"
                      onClick={handleLinkClick}
                    >
                      About
                    </Link>
                    <Link 
                      to="/services" 
                      className="text-gray-800 hover:text-blue-600 px-3 py-2 rounded hover:bg-blue-50"
                      onClick={handleLinkClick}
                    >
                      Services
                    </Link>
                    <Link 
                      to="/consult" 
                      className="text-gray-800 hover:text-blue-600 px-3 py-2 rounded hover:bg-blue-50"
                      onClick={handleLinkClick}
                    >
                      Consult
                    </Link>
                    
                    <div className="border-t border-gray-200 pt-2">
                      <button 
                        onClick={() => setIsNewCarsOpen(!isNewCarsOpen)}
                        className="flex items-center justify-between w-full text-gray-800 hover:text-blue-600 px-3 py-2 rounded hover:bg-blue-50"
                      >
                        <span>New Cars</span>
                        <FaChevronDown className={`transition-transform ${isNewCarsOpen ? 'rotate-180' : ''}`} />
                      </button>
                      
                      {isNewCarsOpen && (
                        <div className="ml-4 mt-2 space-y-2">
                          {newCarsOptions.map((option, index) => (
                            <Link
                              key={index}
                              to="#"
                              className="block text-gray-600 hover:text-blue-600 px-3 py-2 rounded hover:bg-blue-50"
                              onClick={handleLinkClick}
                            >
                              {option}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>

                    <button 
                      onClick={() => {
                        setIsCityPopupOpen(true);
                        setIsMobileMenuOpen(false);
                      }}
                      className="bg-blue-100 text-blue-600 px-4 py-2 rounded-md hover:bg-blue-200 transition-colors text-left"
                    >
                      {city}
                    </button>
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>

        {/* City Selection Popup */}
        {isCityPopupOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="bg-white rounded-lg p-6 w-full max-w-md"
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold">Select Your City</h3>
                <button onClick={() => setIsCityPopupOpen(false)}>
                  <FaTimes className="text-gray-500" />
                </button>
              </div>
              <input
                type="text"
                placeholder="Enter your city"
                className="w-full px-4 py-2 border rounded-md mb-4"
              />
              <div className="grid grid-cols-3 gap-2">
                {['Jamshedpur','Delhi', 'Mumbai', 'Bangalore', 'Hyderabad', 'Chennai', 'Kolkata'].map(city => (
                  <button
                    key={city}
                    onClick={() => {
                      setCity(city);
                      setIsCityPopupOpen(false);
                    }}
                    className="px-3 py-2 bg-gray-100 hover:bg-blue-100 rounded-md"
                  >
                    {city}
                  </button>
                ))}
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;
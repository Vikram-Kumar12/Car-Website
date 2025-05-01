import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaCar, FaUserTie, FaCalendarAlt, FaPhoneAlt, FaHeadset, FaChartLine, FaSearch, FaShieldAlt } from 'react-icons/fa';
import { GiCarKey } from 'react-icons/gi';
import { useInView } from 'react-intersection-observer';

const Consults = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Modal state
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    city: '',
    brand: '',
    model: '',
    variant: 'medium',
    budget: '',
    timeline: '',
    needLoan: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setIsOpen(false);
    // Add your form submission logic here
  };

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      }
    }
  };

  const item = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { 
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const consultationTypes = [
    {
      icon: <FaUserTie className="text-3xl text-blue-600" />,
      title: "Purchase Strategy Session",
      duration: "30-45 mins",
      description: "Get personalized advice on the best luxury vehicle for your needs and budget",
      benefits: [
        "Market trends analysis",
        "Budget optimization",
        "Custom shortlist creation"
      ],
      bestFor: "First-time luxury buyers"
    },
    {
      icon: <FaChartLine className="text-3xl text-blue-600" />,
      title: "Investment Consultation",
      duration: "60 mins",
      description: "Expert guidance on collectible and appreciating-value vehicles",
      benefits: [
        "Depreciation forecasts",
        "Rare model identification",
        "Portfolio diversification"
      ],
      bestFor: "Collectors & investors"
    },
    {
      icon: <GiCarKey className="text-3xl text-blue-600" />,
      title: "Fleet Management Review",
      duration: "90 mins",
      description: "Optimize your luxury fleet with operational efficiency analysis",
      benefits: [
        "Total cost of ownership",
        "Rotation strategy",
        "Resale value maximization"
      ],
      bestFor: "Corporate clients"
    },
    {
      icon: <FaCar className="text-3xl text-blue-600" />,
      title: "Pre-Purchase Inspection",
      duration: "2-3 hours",
      description: "Comprehensive evaluation of your potential vehicle purchase",
      benefits: [
        "Mechanical assessment",
        "Authenticity verification",
        "Negotiation leverage report"
      ],
      bestFor: "Pre-owned buyers"
    }
  ];

  const experts = [
    {
      name: "Aarav Sharma",
      role: "Luxury Vehicle Specialist",
      experience: "12 years",
      specialty: "European Supercars"
    },
    {
      name: "Priya Patel",
      role: "Investment Analyst",
      experience: "8 years",
      specialty: "Classic Car Appreciation"
    },
    {
      name: "Rohan Malhotra",
      role: "Fleet Consultant",
      experience: "15 years",
      specialty: "Corporate Solutions"
    }
  ];

  return (
    <>
      {/* Original Consultation Component */}
      <section id="consultation" className="py-20 px-5 sm:px-10 bg-white">

        <div className="max-w-7xl mx-auto">

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              <span className="text-blue-600">Expert</span> Consultation Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Leverage our industry expertise to make informed decisions about your luxury automotive needs
            </p>
          </motion.div>

          {/* Consultation Types */}
          <motion.div
            ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={container}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
          >
            {consultationTypes.map((consultation, index) => (
              <motion.div
                key={index}
                variants={item}
                whileHover={{ scale: 1.03 }}
                className="bg-gray-50 rounded-xl overflow-hidden border border-gray-200 hover:border-blue-300 transition-all duration-300"
              >
                <div className="p-6 h-full flex flex-col">
                  <div className="mb-4 flex items-center gap-4">
                    <div className="bg-blue-100 p-3 rounded-full">
                      {consultation.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800">{consultation.title}</h3>
                      <span className="text-sm text-blue-600">{consultation.duration}</span>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4 flex-grow">{consultation.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-medium text-gray-800 mb-2">Key Benefits:</h4>
                    <ul className="space-y-2">
                      {consultation.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start">
                          <svg className="h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-gray-600">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mt-auto pt-4 border-t border-gray-200">
                    <p className="text-sm text-gray-500">
                      <span className="font-medium">Best for:</span> {consultation.bestFor}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Our Experts Section */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="mb-20"
          >
            <div className="text-center mb-12">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                Meet Our <span className="text-blue-600">Consultation Team</span>
              </h3>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Our specialists average 10+ years in the luxury automotive industry
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {experts.map((expert, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100"
                >
                  <div className="bg-gray-100 h-48 flex items-center justify-center">
                    <FaUserTie className="text-6xl text-gray-400" />
                  </div>
                  <div className="p-6">
                    <h4 className="text-xl font-bold text-gray-900 mb-1">{expert.name}</h4>
                    <p className="text-blue-600 mb-2">{expert.role}</p>
                    <div className="flex items-center text-sm text-gray-500 mb-2">
                      <span className="font-medium mr-2">Experience:</span>
                      {expert.experience}
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <span className="font-medium mr-2">Specialty:</span>
                      {expert.specialty}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 md:p-12 text-white"
          >
            <div className="max-w-5xl mx-auto">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="flex-shrink-0">
                  <FaHeadset className="text-5xl text-blue-300" />
                </div>
                <div className="text-center md:text-left">
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">Ready for Your Consultation?</h3>
                  <p className="mb-6 text-blue-100 max-w-2xl">
                    Schedule a personalized session with one of our luxury automotive specialists today
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                    <motion.button
                      onClick={() => setIsOpen(true)}
                      className="px-6 py-3 bg-white text-blue-800 font-medium rounded-lg hover:bg-gray-100 transition-all duration-300 flex items-center justify-center gap-2"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FaCalendarAlt /> Book Online
                    </motion.button>
                    <button className="px-6 py-3 bg-transparent border-2 border-white text-white font-medium rounded-lg hover:bg-white hover:text-blue-800 transition-all duration-300 flex items-center justify-center gap-2">
                      <FaPhoneAlt /> Call Now
                    </button>

                    {/* XYZ Button */}
                    <motion.button
                      onClick={() => setIsOpen(true)}
                      className="px-6 py-3 bg-yellow-400 text-gray-900 font-medium rounded-lg hover:bg-yellow-500 transition-all duration-300 flex items-center justify-center gap-2"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Book Free Consultation
                    </motion.button>

                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
        
      </section>

      {/* Consultation Form Modal (Shared by both components) */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-white rounded-lg shadow-xl max-w-md w-full max-h-[90vh] overflow-y-auto"
          >
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900">Free Consultation</h3>
                <button 
                  onClick={() => setIsOpen(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                  <input
                    type="text"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number *</label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">City / Location</label>
                  <input
                    type="text"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Preferred Brand *</label>
                  <select
                    value={formData.brand}
                    onChange={(e) => setFormData({ ...formData, brand: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    required
                  >
                    <option value="">Select Brand</option>
                    <option value="Audi">Audi</option>
                    <option value="BMW">BMW</option>
                    <option value="Mercedes">Mercedes</option>
                    <option value="Porsche">Porsche</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Car Model *</label>
                  <input
                    type="text"
                    value={formData.model}
                    onChange={(e) => setFormData({ ...formData, model: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Budget Range</label>
                  <input
                    type="text"
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    placeholder="e.g., ₹50-70 Lakhs"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Additional Message</label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    rows="3"
                  ></textarea>
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition duration-200 font-medium"
                  >
                    Submit Request
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      )}

    </>
  );
};

export default Consults;
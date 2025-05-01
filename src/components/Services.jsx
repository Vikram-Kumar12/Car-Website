import { motion } from 'framer-motion';
import { FaCar, FaSearch, FaHandshake, FaShieldAlt, FaHeadset, FaTachometerAlt, FaExchangeAlt, FaMoneyBillWave } from 'react-icons/fa';
import { GiCarKey } from 'react-icons/gi';
import { useInView } from 'react-intersection-observer';

const Services = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

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

  const services = [
    {
      icon: <FaSearch className="text-3xl text-blue-600" />,
      title: "Advanced Vehicle Search",
      description: "Our intelligent search system lets you filter by make, model, price range, features, and more to find your perfect luxury vehicle.",
      features: [
        "100+ filter combinations",
        "Save favorite searches",
        "Price alert notifications"
      ]
    },
    {
      icon: <FaCar className="text-3xl text-blue-600" />,
      title: "Virtual Showroom",
      description: "Explore vehicles in stunning 360° detail with our augmented reality showroom from the comfort of your home.",
      features: [
        "Interactive 3D models",
        "Color customization",
        "Interior walkthroughs"
      ]
    },
    {
      icon: <FaHandshake className="text-3xl text-blue-600" />,
      title: "Concierge Buying Service",
      description: "Our expert buyers will handle the entire purchase process for you, from negotiation to paperwork.",
      features: [
        "Price benchmarking",
        "Dealer negotiations",
        "Document handling"
      ]
    },
    {
      icon: <GiCarKey className="text-3xl text-blue-600" />,
      title: "Test Drive Coordination",
      description: "Schedule test drives at your convenience with our network of luxury dealership partners.",
      features: [
        "At-home test drives",
        "Extended trial periods",
        "Multi-model comparisons"
      ]
    },
    {
      icon: <FaShieldAlt className="text-3xl text-blue-600" />,
      title: "Certified Pre-Owned Verification",
      description: "Every pre-owned vehicle undergoes our 200-point inspection process for your peace of mind.",
      features: [
        "Full vehicle history reports",
        "Mechanical certification",
        "Warranty options"
      ]
    },
    {
      icon: <FaMoneyBillWave className="text-3xl text-blue-600" />,
      title: "Financing Solutions",
      description: "Exclusive financing options with competitive rates through our banking partners.",
      features: [
        "Loan pre-approval",
        "Lease comparisons",
        "Payment calculators"
      ]
    },
    {
      icon: <FaExchangeAlt className="text-3xl text-blue-600" />,
      title: "Trade-In Valuation",
      description: "Get instant estimates for your current vehicle with our AI-powered valuation tool.",
      features: [
        "Market-based pricing",
        "Multiple offer options",
        "Seamless trade process"
      ]
    },
    {
      icon: <FaHeadset className="text-3xl text-blue-600" />,
      title: "24/7 Owner Support",
      description: "Dedicated support team available round-the-clock for all your post-purchase needs.",
      features: [
        "Maintenance scheduling",
        "Roadside assistance",
        "Concierge services"
      ]
    }
  ];

  return (
    <section id="services" className="py-20 px-5 sm:px-10 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our <span className="text-blue-600">Premium Services</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            LuxCars goes beyond just listings - we offer a complete luxury automotive experience with these exclusive services
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={container}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="p-6">
                <div className="mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Service Info */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20 bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 md:p-12 text-white"
        >
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-shrink-0">
                <FaTachometerAlt className="text-5xl text-blue-300" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">White Glove Delivery Service</h3>
                <p className="mb-4 text-blue-100">
                  Our exclusive delivery program ensures your new vehicle arrives in perfect condition, anywhere in the world. Includes:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3">
                    <div className="bg-blue-500/20 p-2 rounded-full">
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-blue-50">Worldwide shipping coordination</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-blue-500/20 p-2 rounded-full">
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-blue-50">Climate-controlled transport</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-blue-500/20 p-2 rounded-full">
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-blue-50">Full detailing upon arrival</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-blue-500/20 p-2 rounded-full">
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-blue-50">Personal delivery specialist</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
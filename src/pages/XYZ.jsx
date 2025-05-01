import { motion } from 'framer-motion';

const XYZ = () => {
  // Sample services data - can be replaced with blog posts/other content
  const services = [
    {
      title: "Car Valuation",
      description: "Get instant price estimate for your current vehicle",
      icon: "💰"
    },
    {
      title: "Loan Comparison",
      description: "Compare rates from 25+ banks in one place",
      icon: "📊"
    },
    {
      title: "Insurance Help",
      description: "Zero-depreciation & comprehensive policy guidance",
      icon: "🛡️"
    }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="py-12 bg-gray-50 min-h-screen"
    >
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Our Services</h1>
          <p className="text-xl text-gray-600">
            Everything you need for a hassle-free car buying experience
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition cursor-pointer"
              whileHover={{ y: -5 }}
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h2 className="text-2xl font-semibold mb-2">{service.title}</h2>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-blue-600 text-white rounded-xl p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to find your dream car?</h2>
          <p className="mb-6 max-w-2xl mx-auto">
            Our experts will help you choose the perfect model and get the best financing deal
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
            Book Free Consultation
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default XYZ;
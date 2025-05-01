import { bestSellers } from '../constants';
import { motion } from 'framer-motion';
import CarCard from './common/Card.jsx';
import { Link } from 'react-router-dom';

const BestSellers = () => {
  return (
    <section className="py-12 bg-gray-50">

      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">New Cars</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {bestSellers.map((car, index) => (
            <motion.div
              key={car.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <CarCard car={car} />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Centered "More Cars" Button */}
      <div className="flex justify-center mt-10">
          <Link 
            to="/all-Sellings-Cars" 
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-300 shadow-md hover:shadow-lg"
          >
            View More Cars
          </Link>
        </div>
        
    </section>
  );
};

export default BestSellers;
import { useState } from 'react';
import { carsData1 } from '../constants.js';
import CarCard from './common/Card.jsx';
import { Link } from 'react-router-dom';

const CarListings = () => {
  const [cars] = useState(carsData1); // Removed filter-related state

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-8">Available Cars</h2>
        
        {/* Responsive Cars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {cars.map(car => (
            <CarCard key={car.id} car={car} />
          ))}
        </div>

        {/* Centered "More Cars" Button */}
        <div className="flex justify-center mt-10">
          <Link 
            to="/allAvailableCars" 
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-300 shadow-md hover:shadow-lg"
          >
            View More Cars
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CarListings;
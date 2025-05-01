import { useState } from 'react';
import { carsData2 } from '../constants.js';
import CarCard from './common/Card.jsx';
import Filter from './common/Filter.jsx';
import Consultation from './Consultation.jsx';

const AllAvailableCars = () => {
  const [filteredCars, setFilteredCars] = useState(carsData2);
  const [filters, setFilters] = useState({
    brand: 'all',
    priceRange: 'all',
    condition: 'all'
  });

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
    
    let results = carsData2;
    
    if (newFilters.brand !== 'all') {
      results = results.filter(car => car.brand === newFilters.brand);
    }
    
    if (newFilters.priceRange !== 'all') {
      const [min, max] = newFilters.priceRange.split('-').map(Number);
      results = results.filter(car => car.price >= min && car.price <= max);
    }
    
    if (newFilters.condition !== 'all') {
      results = results.filter(car => car.condition === newFilters.condition);
    }
    
    setFilteredCars(results);
  };

  return (
    <section className="py-12">
      <div className="container mx-auto px-4 mt-10">
        <h2 className="text-3xl font-bold text-center mb-8">All Available Cars</h2>
        
        <Filter filters={filters} onFilterChange={handleFilterChange} />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {filteredCars.map(car => (
            <CarCard key={car.id} car={car} />
          ))}
        </div>
      </div>
      <div className='mt-10'><Consultation/></div>
    </section>
  );
};

export default AllAvailableCars;
import { useState } from 'react';

const Filter = ({ filters, onFilterChange }) => {
  const [localFilters, setLocalFilters] = useState(filters);

  const handleChange = (e) => {
    const newFilters = {
      ...localFilters,
      [e.target.name]: e.target.value
    };
    setLocalFilters(newFilters);
    onFilterChange(newFilters);
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold mb-3">Filter Cars</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Brand Filter */}
        <div>
          <label className="block text-sm font-medium mb-1">Brand</label>
          <select
            name="brand"
            value={localFilters.brand}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          >
            <option value="all">All Brands</option>
            <option value="Hyundai">Hyundai</option>
            <option value="Tata">Tata</option>
            <option value="Maruti">Maruti Suzuki</option>
          </select>
        </div>

        {/* Price Range Filter */}
        <div>
          <label className="block text-sm font-medium mb-1">Price Range</label>
          <select
            name="priceRange"
            value={localFilters.priceRange}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          >
            <option value="all">All Prices</option>
            <option value="0-500000">Under ₹5L</option>
            <option value="500000-1000000">₹5L - ₹10L</option>
            <option value="1000000-1500000">₹10L - ₹15L</option>
          </select>
        </div>

        {/* Condition Filter */}
        <div>
          <label className="block text-sm font-medium mb-1">Condition</label>
          <select
            name="condition"
            value={localFilters.condition}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          >
            <option value="all">All Conditions</option>
            <option value="new">New</option>
            <option value="used">Used</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Filter;
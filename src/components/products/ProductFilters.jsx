import { useState } from 'react';
import { FunnelIcon } from '@heroicons/react/24/outline';

export default function ProductFilters({ filters, setFilters }) {
  const [isOpen, setIsOpen] = useState(false);

  const categories = [
    'All',
    'Tools',
    'Fertilizers',
    'Seeds',
    'Machinery',
    'Irrigation'
  ];

  const locations = [
    'All',
    'North Region',
    'South Region',
    'East Region',
    'West Region'
  ];

  const handleReset = () => {
    setFilters({
      category: '',
      minPrice: '',
      maxPrice: '',
      location: ''
    });
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-sm">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold flex items-center">
          <FunnelIcon className="h-5 w-5 mr-2" />
          Filters
        </h2>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-indigo-600 hover:text-indigo-800 md:hidden"
        >
          {isOpen ? 'Hide' : 'Show'}
        </button>
      </div>

      <div className={`mt-4 space-y-4 ${isOpen ? 'block' : 'hidden md:block'}`}>
        <div>
          <label className="block text-sm font-medium text-gray-700">Category</label>
          <select
            value={filters.category}
            onChange={(e) => setFilters({ ...filters, category: e.target.value })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          >
            {categories.map((category) => (
              <option key={category} value={category === 'All' ? '' : category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Min Price</label>
            <input
              type="number"
              value={filters.minPrice}
              onChange={(e) => setFilters({ ...filters, minPrice: e.target.value })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              min="0"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Max Price</label>
            <input
              type="number"
              value={filters.maxPrice}
              onChange={(e) => setFilters({ ...filters, maxPrice: e.target.value })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              min="0"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Location</label>
          <select
            value={filters.location}
            onChange={(e) => setFilters({ ...filters, location: e.target.value })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          >
            {locations.map((location) => (
              <option key={location} value={location === 'All' ? '' : location}>
                {location}
              </option>
            ))}
          </select>
        </div>

        <div className="flex justify-end">
          <button
            onClick={handleReset}
            className="text-sm text-gray-600 hover:text-gray-800"
          >
            Reset Filters
          </button>
        </div>
      </div>
    </div>
  );
}
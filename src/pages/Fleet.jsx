import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { VEHICLES } from '../data/cars';
import CarCard from '../components/CarCard';
import { Car, ChevronRight } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function Fleet() {
  const [selectedFilter, setSelectedFilter] = useState('All');
  const { isDark } = useTheme();

  const categories = ['All', 'Sedan', 'SUV', 'MPV', 'Full-size SUV'];

  const filteredCars = selectedFilter === 'All'
    ? VEHICLES
    : VEHICLES.filter((c) => c.category === selectedFilter);

  return (
    <div className={`min-h-screen pb-24 transition-colors duration-300 ${
      isDark ? 'bg-[#111111] text-white' : 'bg-[#f8f9fa] text-gray-900'
    }`}>
      {/* Top Banner / Breadcrumb */}
      <div className={`border-b py-8 transition-colors duration-300 ${
        isDark ? 'bg-[#0c0c0e] border-zinc-800/80 text-zinc-400' : 'bg-white border-gray-200 text-gray-500'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h1 className={`text-2xl sm:text-3xl font-extrabold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Vehicle Fleet
              </h1>
              <p className={`text-xs mt-1 ${isDark ? 'text-zinc-400' : 'text-gray-500'}`}>
                Explore our full line-up of verified executive and luxury models.
              </p>
            </div>

            {/* Breadcrumb */}
            <div className="flex items-center space-x-2 text-xs">
              <Link to="/" className={`transition-colors ${isDark ? 'hover:text-white' : 'hover:text-gray-900'}`}>Home</Link>
              <ChevronRight className="w-3.5 h-3.5 opacity-50" />
              <span className="text-[#ff3600] font-medium">Fleet</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        
        {/* Section Heading & Category Filters */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="text-[#ff3600] font-bold text-xs uppercase tracking-widest block mb-2">
              Select Car
            </span>
            <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>
              Our Amazing <span className="text-[#ff3600] border-b-2 border-[#ff3600] pb-1">Car</span>
            </h2>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedFilter(cat)}
                className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all ${
                  selectedFilter === cat
                    ? 'bg-[#ff3600] text-white shadow-md shadow-[#ff3600]/30'
                    : isDark
                    ? 'bg-[#18191c] text-zinc-400 hover:text-white border border-zinc-800'
                    : 'bg-white text-gray-700 hover:text-gray-900 border border-gray-200 shadow-xs'
                }`}
              >
                {cat === 'All' ? 'All Cars' : cat}
              </button>
            ))}
          </div>
        </div>

        {/* Fleet Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCars.map((car) => (
            <CarCard key={car.id} car={car} />
          ))}
        </div>

        {/* Inventory Note */}
        <div className={`mt-16 p-6 rounded-2xl border text-center max-w-2xl mx-auto ${
          isDark 
            ? 'bg-[#18191c] border-zinc-800 text-zinc-300' 
            : 'bg-white border-gray-200 text-gray-600 shadow-sm'
        }`}>
          <div className={`w-10 h-10 rounded-full text-[#ff3600] flex items-center justify-center mx-auto mb-3 ${
            isDark ? 'bg-zinc-900' : 'bg-orange-50'
          }`}>
            <Car className="w-5 h-5" />
          </div>
          <h3 className={`font-bold text-base ${isDark ? 'text-white' : 'text-gray-900'}`}>Client Fleet Overview</h3>
          <p className={`text-xs mt-1 leading-relaxed ${isDark ? 'text-zinc-400' : 'text-gray-500'}`}>
            All 5 vehicles in our fleet are subject to immediate reservation confirmation. For long-term corporate leasing or specific vehicle configurations, please reach out to our team.
          </p>
          <div className="mt-4">
            <Link
              to="/contact"
              className="inline-flex items-center text-xs font-bold text-[#ff3600] hover:text-[#e53100] uppercase tracking-wider"
            >
              Enquire About Long-Term Fleet Rates &rarr;
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}

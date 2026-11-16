import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowUpRight, 
  Gauge, 
  Fuel, 
  Settings2, 
  Users 
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function CarCard({ car }) {
  const { isDark } = useTheme();

  return (
    <div className={`group rounded-2xl p-5 border transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 ${
      isDark
        ? 'bg-[#18191c] border-zinc-800/80 hover:border-zinc-700 shadow-none hover:shadow-2xl hover:shadow-black/60'
        : 'bg-white border-gray-200 hover:border-gray-300 shadow-sm hover:shadow-xl'
    }`}>
      <div>
        {/* Grey Image Container with Inset Vehicle Image */}
        <div className={`relative w-full h-52 sm:h-56 rounded-xl overflow-hidden flex items-center justify-center p-3 border ${
          isDark 
            ? 'bg-[#232528] border-transparent' 
            : 'bg-gray-100 border-gray-200/60'
        }`}>
          {/* Category Tag */}
          <div className="absolute top-3 left-3 z-10">
            <span className={`text-[11px] font-bold tracking-wide uppercase px-2.5 py-1 rounded-md backdrop-blur-md border shadow-xs ${
              isDark 
                ? 'bg-[#18191c]/80 text-zinc-300 border-zinc-700/50' 
                : 'bg-white/90 text-gray-800 border-gray-200'
            }`}>
              {car.category}
            </span>
          </div>

          <img
            src={car.images.main}
            alt={car.name}
            className="w-full h-full object-cover rounded-lg group-hover:scale-105 transition-transform duration-500 ease-out"
            loading="lazy"
          />
        </div>

        {/* Vehicle Information */}
        <div className="mt-5 space-y-3">
          {/* Vehicle Name */}
          <h3 className={`text-xl font-bold group-hover:text-[#ff3600] transition-colors ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>
            {car.name}
          </h3>

          {/* Horizontal row with small orange icons */}
          <div className={`grid grid-cols-4 gap-2 pt-1 pb-2 border-b text-[11px] ${
            isDark ? 'border-zinc-800/80 text-zinc-400' : 'border-gray-100 text-gray-500'
          }`}>
            <div className="flex flex-col items-center text-center">
              <Gauge className="w-3.5 h-3.5 text-[#ff3600] mb-1" />
              <span className="truncate w-full font-medium" title={car.overview?.mileage}>
                {car.overview?.mileageShort || car.overview?.mileage || 'Approx. 12 km/L'}
              </span>
            </div>

            <div className="flex flex-col items-center text-center">
              <Fuel className="w-3.5 h-3.5 text-[#ff3600] mb-1" />
              <span className="truncate w-full font-medium" title={car.overview?.fuelType}>
                {car.overview?.fuelTypeShort || car.overview?.fuelType || 'Petrol'}
              </span>
            </div>

            <div className="flex flex-col items-center text-center">
              <Settings2 className="w-3.5 h-3.5 text-[#ff3600] mb-1" />
              <span className="truncate w-full font-medium" title={car.overview?.transmission}>
                {car.overview?.transmissionShort || 'Automatic'}
              </span>
            </div>

            <div className="flex flex-col items-center text-center">
              <Users className="w-3.5 h-3.5 text-[#ff3600] mb-1" />
              <span className="truncate w-full font-medium" title={car.overview?.seating}>
                {car.overview?.seatingShort || car.overview?.seating || '5 Seats'}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Card Footer: Pricing and Detail Action Button */}
      <div className="mt-5 pt-3 flex items-center justify-between">
        <div>
          <span className={`block text-[11px] font-semibold uppercase tracking-wider ${
            isDark ? 'text-zinc-500' : 'text-gray-400'
          }`}>Rate</span>
          <span className={`text-lg font-bold tracking-tight ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>
            {car.price}
          </span>
        </div>

        <Link
          to={`/cars/${car.slug}`}
          className="inline-flex items-center space-x-1.5 px-4 py-2 rounded-xl text-xs font-bold text-white bg-[#ff3600] hover:bg-[#e53100] transition-colors shadow-md shadow-[#ff3600]/20 group/btn"
          aria-label={`View full details of ${car.name}`}
        >
          <span>Rent Now</span>
          <ArrowUpRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
        </Link>
      </div>
    </div>
  );
}

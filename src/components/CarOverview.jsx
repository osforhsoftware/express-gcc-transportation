import React from 'react';
import { 
  Car, 
  Calendar, 
  Gauge, 
  Fuel, 
  Settings2, 
  Users, 
  Compass, 
  CheckCircle2, 
  PhoneCall 
} from 'lucide-react';
import { CONTACT_INFO } from '../data/cars';
import { useTheme } from '../context/ThemeContext';

export default function CarOverview({ vehicle }) {
  const { isDark } = useTheme();

  if (!vehicle) return null;

  const overviewRows = [
    {
      icon: Car,
      label: 'Car Type',
      value: vehicle.overview?.carType || vehicle.category || 'Executive Vehicle'
    },
    {
      icon: Calendar,
      label: 'Model Year',
      value: vehicle.overview?.modelYear || 'Year to be confirmed'
    },
    {
      icon: Gauge,
      label: 'Fuel Economy',
      value: vehicle.overview?.mileage || 'Confirm with booking team'
    },
    {
      icon: Fuel,
      label: 'Fuel Type',
      value: vehicle.overview?.fuelType || 'Confirm with booking team'
    },
    {
      icon: Settings2,
      label: 'Transmission',
      value: vehicle.overview?.transmission || 'Confirm with booking team'
    },
    {
      icon: Users,
      label: 'Person / Seating',
      value: vehicle.overview?.seating || 'Confirm with booking team'
    },
    {
      icon: Compass,
      label: 'Drive Type',
      value: vehicle.overview?.driveType || 'Confirm with booking team'
    }
  ];

  return (
    <div className={`rounded-2xl border p-6 space-y-6 transition-colors duration-300 ${
      isDark ? 'bg-[#18191c] border-zinc-800' : 'bg-white border-gray-200 shadow-sm'
    }`}>
      <div className={`flex items-center justify-between border-b pb-4 ${
        isDark ? 'border-zinc-800' : 'border-gray-100'
      }`}>
        <h3 className={`text-xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
          Car Overview
        </h3>
        <span className="text-xs font-semibold px-2.5 py-1 bg-orange-50 text-[#ff3600] rounded-md border border-[#ff3600]/20">
          Fleet Details
        </span>
      </div>

      {/* Overview Table / Rows */}
      <div className="space-y-4">
        {overviewRows.map((row, index) => {
          const IconComponent = row.icon;
          return (
            <div
              key={index}
              className={`flex items-center justify-between py-2 border-b last:border-0 ${
                isDark ? 'border-zinc-800/80' : 'border-gray-100'
              }`}
            >
              <div className="flex items-center space-x-3">
                <div className={`w-8 h-8 rounded-lg text-[#ff3600] flex items-center justify-center ${
                  isDark ? 'bg-zinc-900' : 'bg-orange-50'
                }`}>
                  <IconComponent className="w-4 h-4 stroke-[2]" />
                </div>
                <span className={`text-sm font-medium ${isDark ? 'text-zinc-400' : 'text-gray-600'}`}>
                  {row.label}
                </span>
              </div>

              <div className="text-right">
                <span className={`text-sm font-semibold ${isDark ? 'text-zinc-200' : 'text-gray-800'}`}>
                  {row.value}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Key Comfort Highlights */}
      {vehicle.features && vehicle.features.length > 0 && (
        <div className={`pt-4 border-t ${isDark ? 'border-zinc-800' : 'border-gray-100'}`}>
          <h4 className={`text-sm font-bold uppercase tracking-wider mb-3 text-xs ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>
            Included Comfort Features
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
            {vehicle.features.map((feature, idx) => (
              <div key={idx} className="flex items-center space-x-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#ff3600] shrink-0" />
                <span className={isDark ? 'text-zinc-300' : 'text-gray-700'}>{feature}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Assistance callout */}
      <div className={`rounded-xl p-4 border flex flex-col sm:flex-row sm:items-center justify-between gap-3 ${
        isDark ? 'bg-zinc-900/60 border-zinc-800 text-zinc-400' : 'bg-gray-50 border-gray-200 text-gray-600'
      }`}>
        <div className="text-xs">
          <span className={`block font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>Need specific details?</span>
          <span>Contact dispatch for specifications or special requests.</span>
        </div>
        <div className="flex items-center space-x-2 shrink-0">
          <a
            href={`tel:${CONTACT_INFO.qatar.tel}`}
            className="px-3 py-2 rounded-lg bg-[#ff3600] text-white hover:bg-[#e53100] transition-colors flex items-center space-x-1 text-xs font-bold"
            title="Call Qatar"
          >
            <PhoneCall className="w-3 h-3" />
            <span>Qatar</span>
          </a>
          <a
            href={`tel:${CONTACT_INFO.saudi.tel}`}
            className={`px-3 py-2 rounded-lg text-white transition-colors flex items-center space-x-1 text-xs font-bold ${
              isDark ? 'bg-zinc-800 hover:bg-zinc-700' : 'bg-zinc-900 hover:bg-black'
            }`}
            title="Call Saudi"
          >
            <PhoneCall className="w-3 h-3" />
            <span>Saudi</span>
          </a>
        </div>
      </div>
    </div>
  );
}

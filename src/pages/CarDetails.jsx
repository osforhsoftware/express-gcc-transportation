import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  Phone, 
  MessageCircle, 
  ChevronRight, 
  ShieldCheck, 
  Car, 
  ArrowLeft,
  CalendarCheck,
  CheckCircle2
} from 'lucide-react';
import { getVehicleBySlug, CONTACT_INFO, VEHICLES } from '../data/cars';
import CarGallery from '../components/CarGallery';
import CarOverview from '../components/CarOverview';
import { useTheme } from '../context/ThemeContext';

export default function CarDetails() {
  const { slug } = useParams();
  const vehicle = getVehicleBySlug(slug);
  const { isDark } = useTheme();

  // If vehicle slug not found, redirect to fleet
  if (!vehicle) {
    return (
      <div className={`min-h-[60vh] flex items-center justify-center py-20 px-4 ${isDark ? 'bg-[#111111] text-white' : 'bg-white text-gray-900'}`}>
        <div className="text-center max-w-md">
          <div className="w-16 h-16 rounded-full bg-orange-100 text-[#ff3600] flex items-center justify-center mx-auto mb-4">
            <Car className="w-8 h-8" />
          </div>
          <h2 className="text-2xl font-bold mb-2">Vehicle Not Found</h2>
          <p className="text-sm mb-6 opacity-70">
            The vehicle you are looking for does not exist in our active fleet inventory.
          </p>
          <Link
            to="/cars"
            className="inline-flex items-center space-x-2 px-6 py-3 bg-[#ff3600] text-white rounded-xl font-bold text-sm hover:bg-[#e53100] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Fleet</span>
          </Link>
        </div>
      </div>
    );
  }

  // Pre-filled WhatsApp message URLs for Qatar and Saudi Arabia
  const whatsappText = encodeURIComponent(
    `Hello Express GCC Transportation, I would like to inquire about availability and rates for the ${vehicle.name} (${vehicle.category}).`
  );
  const whatsappUrlQatar = `https://wa.me/${CONTACT_INFO.qatar.whatsapp}?text=${whatsappText}`;
  const whatsappUrlSaudi = `https://wa.me/${CONTACT_INFO.saudi.whatsapp}?text=${whatsappText}`;

  // Other fleet cars for recommendation
  const otherCars = VEHICLES.filter((v) => v.slug !== vehicle.slug).slice(0, 3);

  return (
    <div className={`min-h-screen pb-24 transition-colors duration-300 ${
      isDark ? 'bg-[#111111] text-zinc-100' : 'bg-white text-gray-900'
    }`}>
      {/* Breadcrumb & Navigation Bar */}
      <div className={`border-b py-4 transition-colors duration-300 ${
        isDark ? 'bg-[#0c0c0e] border-zinc-800/80 text-zinc-400' : 'bg-gray-50 border-gray-200 text-gray-500'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2 text-xs">
            <Link to="/" className={`transition-colors ${isDark ? 'hover:text-white' : 'hover:text-gray-900'}`}>Home</Link>
            <ChevronRight className="w-3.5 h-3.5 opacity-50" />
            <Link to="/cars" className={`transition-colors ${isDark ? 'hover:text-white' : 'hover:text-gray-900'}`}>Fleet</Link>
            <ChevronRight className="w-3.5 h-3.5 opacity-50" />
            <span className="text-[#ff3600] font-semibold">{vehicle.name}</span>
          </div>
        </div>
      </div>

      {/* Main Vehicle Details Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 lg:pt-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* LEFT COLUMN: Gallery & Vehicle Information */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Gallery Component */}
            <CarGallery images={vehicle.images.gallery} carName={vehicle.name} />

            {/* Description & Overview */}
            <div className={`rounded-2xl border p-6 sm:p-8 space-y-6 transition-colors duration-300 ${
              isDark ? 'bg-[#18191c] border-zinc-800 text-zinc-300' : 'bg-white border-gray-200 text-gray-600 shadow-sm'
            }`}>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#ff3600] block mb-1">
                  Vehicle Profile
                </span>
                <h2 className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  About the {vehicle.name}
                </h2>
              </div>

              <p className="text-sm leading-relaxed">
                {vehicle.fullDescription}
              </p>

              <div className={`p-4 rounded-xl border text-xs space-y-2 ${
                isDark 
                  ? 'bg-orange-950/20 border-orange-900/40 text-zinc-300' 
                  : 'bg-orange-50/70 border-orange-200/60 text-gray-700'
              }`}>
                <div className={`flex items-center space-x-2 font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  <ShieldCheck className="w-4 h-4 text-[#ff3600]" />
                  <span>Rental Enquiry & Assistance</span>
                </div>
                <p className="leading-relaxed opacity-80">
                  Our team is available to assist with vehicle information, rental enquiries and booking arrangements. Contact us to discuss your travel requirements and vehicle availability.
                </p>
              </div>

              {/* Verified Features */}
              <div>
                <h3 className={`text-sm font-bold uppercase tracking-wider mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  Vehicle Highlights & Equipment
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {vehicle.features.map((feat, idx) => (
                    <div 
                      key={idx} 
                      className={`flex items-center space-x-2.5 text-xs p-2.5 rounded-lg border ${
                        isDark 
                          ? 'bg-zinc-900 border-zinc-800 text-zinc-300' 
                          : 'bg-gray-50 border-gray-100 text-gray-700'
                      }`}
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#ff3600] shrink-0" />
                      <span className="font-medium">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: Price Card & Car Overview */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Price Card */}
            <div className={`rounded-2xl border p-6 sm:p-8 space-y-5 transition-colors duration-300 ${
              isDark ? 'bg-[#18191c] border-zinc-800' : 'bg-white border-gray-200 shadow-sm'
            }`}>
              <div>
                <span className={`text-xs font-semibold uppercase tracking-wider block mb-1 ${
                  isDark ? 'text-zinc-500' : 'text-gray-400'
                }`}>
                  Rental Pricing
                </span>
                <div className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}>
                  {vehicle.price}
                </div>
                <p className={`text-xs mt-1 ${isDark ? 'text-zinc-400' : 'text-gray-500'}`}>
                  {vehicle.priceSubtext}
                </p>
              </div>

              {/* Direct Call & WhatsApp Action Buttons */}
              <div className="space-y-2.5 pt-2">
                {/* Call Qatar & Saudi */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <a
                    href={`tel:${CONTACT_INFO.qatar.tel}`}
                    className="py-3.5 px-3 rounded-xl font-bold text-xs text-white bg-[#ff3600] hover:bg-[#e53100] transition-colors shadow-md shadow-[#ff3600]/25 flex items-center justify-center space-x-1.5"
                    title="Call Qatar Office"
                  >
                    <Phone className="w-4 h-4 shrink-0" />
                    <span>{CONTACT_INFO.qatar.flag} Call Qatar</span>
                  </a>

                  <a
                    href={`tel:${CONTACT_INFO.saudi.tel}`}
                    className={`py-3.5 px-3 rounded-xl font-bold text-xs text-white transition-colors shadow-md flex items-center justify-center space-x-1.5 ${
                      isDark ? 'bg-zinc-800 hover:bg-zinc-700' : 'bg-zinc-900 hover:bg-black'
                    }`}
                    title="Call Saudi Arabia Office"
                  >
                    <Phone className="w-4 h-4 shrink-0" />
                    <span>{CONTACT_INFO.saudi.flag} Call Saudi</span>
                  </a>
                </div>

                {/* WhatsApp Enquiry Buttons */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <a
                    href={whatsappUrlQatar}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`py-3 px-3 rounded-xl font-bold text-xs border transition-colors flex items-center justify-center space-x-1.5 ${
                      isDark
                        ? 'text-emerald-300 bg-emerald-950/40 hover:bg-emerald-950/60 border-emerald-800'
                        : 'text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border-emerald-200'
                    }`}
                    title="WhatsApp Qatar"
                  >
                    <MessageCircle className={`w-4 h-4 shrink-0 ${isDark ? 'text-emerald-400' : 'text-emerald-600'}`} />
                    <span>{CONTACT_INFO.qatar.flag} Qatar WhatsApp</span>
                  </a>

                  <a
                    href={whatsappUrlSaudi}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`py-3 px-3 rounded-xl font-bold text-xs border transition-colors flex items-center justify-center space-x-1.5 ${
                      isDark
                        ? 'text-emerald-300 bg-emerald-950/40 hover:bg-emerald-950/60 border-emerald-800'
                        : 'text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border-emerald-200'
                    }`}
                    title="WhatsApp Saudi Arabia"
                  >
                    <MessageCircle className={`w-4 h-4 shrink-0 ${isDark ? 'text-emerald-400' : 'text-emerald-600'}`} />
                    <span>{CONTACT_INFO.saudi.flag} Saudi WhatsApp</span>
                  </a>
                </div>

                <Link
                  to="/contact"
                  className={`w-full py-2.5 px-6 rounded-xl font-semibold text-xs transition-colors flex items-center justify-center space-x-2 ${
                    isDark 
                      ? 'text-zinc-300 bg-zinc-800/90 hover:bg-zinc-700' 
                      : 'text-gray-700 bg-gray-100 hover:bg-gray-200'
                  }`}
                >
                  <CalendarCheck className="w-4 h-4 opacity-70" />
                  <span>Send Online Reservation Request</span>
                </Link>
              </div>

              {/* Direct Booking Assistance Numbers */}
              <div className={`pt-3 border-t text-[11px] space-y-1 ${
                isDark ? 'border-zinc-800 text-zinc-400' : 'border-gray-100 text-gray-500'
              }`}>
                <span className={`block font-semibold ${isDark ? 'text-zinc-300' : 'text-gray-700'}`}>Direct booking assistance:</span>
                <div className={`flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 font-medium ${
                  isDark ? 'text-zinc-200' : 'text-gray-800'
                }`}>
                  <a href={`tel:${CONTACT_INFO.qatar.tel}`} className="hover:text-[#ff3600]">
                    {CONTACT_INFO.qatar.flag} Qatar: {CONTACT_INFO.qatar.display}
                  </a>
                  <a href={`tel:${CONTACT_INFO.saudi.tel}`} className="hover:text-[#ff3600]">
                    {CONTACT_INFO.saudi.flag} Saudi: {CONTACT_INFO.saudi.display}
                  </a>
                </div>
              </div>
            </div>

            {/* Car Overview Card */}
            <CarOverview vehicle={vehicle} />

          </div>

        </div>

        {/* Other Fleet Options Section */}
        <div className={`mt-20 pt-12 border-t ${isDark ? 'border-zinc-800' : 'border-gray-200'}`}>
          <div className="flex items-center justify-between mb-8">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#ff3600]">
                Explore Fleet
              </span>
              <h3 className={`text-2xl font-bold mt-1 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Other Vehicles in Our Collection
              </h3>
            </div>
            <Link
              to="/cars"
              className="text-xs font-bold text-[#ff3600] hover:text-[#e53100] uppercase tracking-wider"
            >
              View All &rarr;
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {otherCars.map((car) => (
              <Link
                key={car.id}
                to={`/cars/${car.slug}`}
                className={`group rounded-2xl p-4 border transition-all hover:shadow-lg ${
                  isDark
                    ? 'bg-[#18191c] border-zinc-800 hover:border-[#ff3600]/40 shadow-none'
                    : 'bg-gray-50 border-gray-200 hover:border-[#ff3600]/40 shadow-sm hover:bg-white'
                }`}
              >
                <div className={`aspect-[16/10] rounded-xl overflow-hidden mb-3 ${
                  isDark ? 'bg-zinc-800' : 'bg-gray-200'
                }`}>
                  <img
                    src={car.images.main}
                    alt={car.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-bold uppercase text-[#ff3600]">{car.category}</span>
                    <h4 className={`font-bold text-sm group-hover:text-[#ff3600] transition-colors ${
                      isDark ? 'text-white' : 'text-gray-900'
                    }`}>
                      {car.name}
                    </h4>
                  </div>
                  <span className={`text-xs font-semibold ${isDark ? 'text-zinc-400' : 'text-gray-500'}`}>
                    {car.price}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}

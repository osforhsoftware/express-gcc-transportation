import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  MessageCircle, 
  ChevronRight, 
  Navigation,
  ArrowUpRight
} from 'lucide-react';
import ContactForm from '../components/ContactForm';
import { CONTACT_INFO } from '../data/cars';
import { useTheme } from '../context/ThemeContext';

export default function Contact() {
  const { isDark } = useTheme();
  const whatsappUrlQatar = `https://wa.me/${CONTACT_INFO.qatar.whatsapp}?text=${encodeURIComponent(
    'Hello Express GCC Transportation (Qatar), I would like to inquire about car availability and rates.'
  )}`;
  const whatsappUrlSaudi = `https://wa.me/${CONTACT_INFO.saudi.whatsapp}?text=${encodeURIComponent(
    'Hello Express GCC Transportation (Saudi Arabia), I would like to inquire about car availability and rates.'
  )}`;

  return (
    <div className={`min-h-screen pb-24 transition-colors duration-300 ${
      isDark ? 'bg-[#111111] text-zinc-100' : 'bg-white text-gray-900'
    }`}>
      {/* Top Breadcrumb & Header */}
      <div className={`border-b py-8 transition-colors duration-300 ${
        isDark ? 'bg-[#0c0c0e] border-zinc-800/80 text-zinc-400' : 'bg-gray-50 border-gray-200 text-gray-500'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white">
                Contact Us
              </h1>
              <p className="text-xs text-gray-500 dark:text-zinc-400 mt-1">
                Reach our reservation desk in Qatar & Saudi Arabia for pricing, custom duration packages, and fleet inquiries.
              </p>
            </div>

            <div className="flex items-center space-x-2 text-xs text-gray-500 dark:text-zinc-400">
              <Link to="/" className="hover:text-gray-900 dark:hover:text-white transition-colors">Home</Link>
              <ChevronRight className="w-3.5 h-3.5 text-gray-400 dark:text-zinc-600" />
              <span className="text-[#ff3600] font-semibold">Contact</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Area (Matches Screenshot 2 & 5) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 lg:pt-16">
        
        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {/* 🇶🇦 Qatar Contact Card */}
          <div className="bg-gray-50 dark:bg-[#18191c] p-6 rounded-2xl border border-gray-200 dark:border-zinc-800 flex items-start space-x-4 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-[#ff3600] text-white flex items-center justify-center shrink-0 shadow-md shadow-[#ff3600]/20">
              <Phone className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-bold uppercase text-gray-500 dark:text-zinc-400 tracking-wider">
                {CONTACT_INFO.qatar.flag} Qatar Call / WhatsApp
              </span>
              <a href={`tel:${CONTACT_INFO.qatar.tel}`} className="block text-sm font-bold text-gray-900 dark:text-white hover:text-[#ff3600] transition-colors mt-0.5">
                {CONTACT_INFO.qatar.display}
              </a>
              <span className="text-[11px] text-gray-500 dark:text-zinc-500 block mt-1">Doha Booking Desk</span>
            </div>
          </div>

          {/* 🇸🇦 Saudi Arabia Contact Card */}
          <div className="bg-gray-50 dark:bg-[#18191c] p-6 rounded-2xl border border-gray-200 dark:border-zinc-800 flex items-start space-x-4 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-[#ff3600] text-white flex items-center justify-center shrink-0 shadow-md shadow-[#ff3600]/20">
              <Phone className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-bold uppercase text-gray-500 dark:text-zinc-400 tracking-wider">
                {CONTACT_INFO.saudi.flag} Saudi Arabia Office
              </span>
              <a href={`tel:${CONTACT_INFO.saudi.tel}`} className="block text-sm font-bold text-gray-900 dark:text-white hover:text-[#ff3600] transition-colors mt-0.5">
                {CONTACT_INFO.saudi.display}
              </a>
              <span className="text-[11px] text-gray-500 dark:text-zinc-500 block mt-1">KSA Booking Line</span>
            </div>
          </div>

          {/* 🇶🇦 Location Card */}
          <div className="bg-gray-50 dark:bg-[#18191c] p-6 rounded-2xl border border-gray-200 dark:border-zinc-800 flex items-start space-x-4 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-[#ff3600] text-white flex items-center justify-center shrink-0 shadow-md shadow-[#ff3600]/20">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-bold uppercase text-gray-500 dark:text-zinc-400 tracking-wider">Our Location</span>
              <a 
                href={CONTACT_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-sm font-bold text-gray-900 dark:text-white hover:text-[#ff3600] transition-colors mt-0.5"
              >
                {CONTACT_INFO.location}
              </a>
              <span className="text-[11px] text-gray-500 dark:text-zinc-500 block mt-1">Click to open Google Maps</span>
            </div>
          </div>

          {/* Working Hours Card */}
          <div className="bg-gray-50 dark:bg-[#18191c] p-6 rounded-2xl border border-gray-200 dark:border-zinc-800 flex items-start space-x-4 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-[#ff3600] text-white flex items-center justify-center shrink-0 shadow-md shadow-[#ff3600]/20">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-bold uppercase text-gray-500 dark:text-zinc-400 tracking-wider">Working Hours</span>
              <span className="block text-sm font-bold text-gray-900 dark:text-white mt-0.5">
                {CONTACT_INFO.hours}
              </span>
              <span className="text-[11px] text-gray-500 dark:text-zinc-500 block mt-1">Airport & City delivery</span>
            </div>
          </div>
        </div>

        {/* Form and Map Grid (Matches Screenshot 5) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Form on Left (6 cols) */}
          <div className="lg:col-span-6">
            <ContactForm />
          </div>

          {/* Map & WhatsApp Card on Right (6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* WhatsApp Quick CTA Box with both Qatar & Saudi options */}
            <div className="bg-gradient-to-r from-emerald-600 to-teal-700 text-white rounded-2xl p-6 shadow-md flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <span className="text-xs uppercase font-bold tracking-wider text-emerald-200">Instant Messenger</span>
                <h3 className="text-lg font-bold">Chat With Us on WhatsApp</h3>
                <p className="text-xs text-emerald-100 mt-1">
                  Fastest way to check current vehicle availability and receive a custom price in Qatar or Saudi Arabia.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-2 shrink-0">
                <a
                  href={whatsappUrlQatar}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-emerald-800 hover:bg-emerald-50 px-4 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-colors flex items-center space-x-1.5 shadow-sm"
                  title="WhatsApp Qatar"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-600" />
                  <span>{CONTACT_INFO.qatar.flag} Qatar</span>
                </a>

                <a
                  href={whatsappUrlSaudi}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-emerald-800 hover:bg-emerald-50 px-4 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-colors flex items-center space-x-1.5 shadow-sm"
                  title="WhatsApp Saudi Arabia"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-600" />
                  <span>{CONTACT_INFO.saudi.flag} Saudi</span>
                </a>
              </div>
            </div>

            {/* Map Frame (Matches Screenshot 5 & Points to Doha, Qatar) */}
            <div className="bg-white dark:bg-[#18191c] rounded-2xl border border-gray-200 dark:border-zinc-800 overflow-hidden shadow-sm transition-colors">
              <div className="p-4 border-b border-gray-100 dark:border-zinc-800 flex items-center justify-between bg-gray-50 dark:bg-zinc-900/60">
                <div className="flex items-center space-x-2">
                  <Navigation className="w-4 h-4 text-[#ff3600]" />
                  <span className="text-xs font-bold text-gray-800 dark:text-zinc-200">
                    Express GCC Transportation Fleet Depot & Dispatch Location
                  </span>
                </div>
                <a 
                  href={CONTACT_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[11px] font-semibold text-[#ff3600] hover:underline flex items-center space-x-1"
                >
                  <span>{CONTACT_INFO.location}</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </div>

              {/* Responsive Google Map Embed pointing to Doha, Qatar */}
              <div className="relative w-full h-[380px] bg-gray-100 dark:bg-zinc-800">
                <iframe
                  title="Express GCC Transportation Location Map - Doha, Qatar"
                  src={CONTACT_INFO.googleMapsEmbed}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                />
              </div>

              <div className="p-3 bg-gray-50 dark:bg-zinc-900/60 border-t border-gray-100 dark:border-zinc-800 flex items-center justify-between text-xs text-gray-600 dark:text-zinc-400">
                <span>📍 Serving all locations across Doha, Qatar & GCC Routes</span>
                <a 
                  href={CONTACT_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-[#ff3600] hover:underline flex items-center space-x-1"
                >
                  <span>Open in Google Maps</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}


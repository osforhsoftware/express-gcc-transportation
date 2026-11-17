import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  ChevronUp, 
  CheckCircle2,
  ArrowUpRight
} from 'lucide-react';
import { CONTACT_INFO } from '../data/cars';
import ExpressLogo from './ExpressLogo';
import { useTheme } from '../context/ThemeContext';

export default function Footer() {
  const { isDark } = useTheme();
  const [subscribed, setSubscribed] = useState(false);
  const [emailInput, setEmailInput] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (emailInput.trim()) {
      setSubscribed(true);
      setTimeout(() => {
        setSubscribed(false);
        setEmailInput('');
      }, 4000);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full relative mt-auto">
      {/* Top Bright Orange Callout Banner (Matches Screenshot 1 & 3) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mb-16 relative z-10">
        <div className="bg-[#ff3600] rounded-2xl p-8 sm:p-12 text-white shadow-2xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Subtle background curved vector lines */}
          <div className="absolute inset-0 pointer-events-none opacity-10">
            <svg className="w-full h-full" viewBox="0 0 800 200" fill="none">
              <path d="M0 100 Q 200 20 400 100 T 800 100" stroke="white" strokeWidth="6" />
              <path d="M0 150 Q 300 50 600 150 T 1200 150" stroke="white" strokeWidth="4" />
            </svg>
          </div>

          <div className="relative z-10 text-center md:text-left flex items-center gap-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
              If you have any questions<br className="hidden sm:block" /> Please Call.
            </h2>

            {/* Hand-drawn loop curly arrow matching Screenshot 1 & 3 */}
            <div className="hidden xl:block pointer-events-none opacity-90 text-white -mr-4">
              <svg width="130" height="60" viewBox="0 0 130 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path 
                  d="M10 40 C35 55, 55 58, 65 35 C75 12, 50 15, 60 38 C70 58, 100 48, 120 22" 
                  stroke="white" 
                  strokeWidth="2.5" 
                  strokeLinecap="round" 
                  strokeDasharray="none"
                />
                <path 
                  d="M112 18 L122 21 L120 32" 
                  stroke="white" 
                  strokeWidth="2.5" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                />
              </svg>
            </div>
          </div>

          <div className="relative z-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            {/* 🇶🇦 Qatar Direct Line */}
            <a
              href={`tel:${CONTACT_INFO.qatar.tel}`}
              className="inline-flex items-center space-x-2.5 bg-white text-gray-900 px-5 py-3 rounded-full font-bold text-sm sm:text-base shadow-lg hover:bg-gray-100 transition-all hover:scale-105"
            >
              <span className="w-7 h-7 rounded-full bg-[#ff3600] text-white flex items-center justify-center shrink-0">
                <Phone className="w-3.5 h-3.5" />
              </span>
              <span>{CONTACT_INFO.qatar.flag} Qatar: {CONTACT_INFO.qatar.display}</span>
            </a>

            {/* 🇸🇦 Saudi Arabia Direct Line */}
            <a
              href={`tel:${CONTACT_INFO.saudi.tel}`}
              className="inline-flex items-center space-x-2.5 bg-zinc-900 text-white px-5 py-3 rounded-full font-bold text-sm sm:text-base shadow-lg hover:bg-black transition-all hover:scale-105"
            >
              <span className="w-7 h-7 rounded-full bg-[#ff3600] text-white flex items-center justify-center shrink-0">
                <Phone className="w-3.5 h-3.5" />
              </span>
              <span>{CONTACT_INFO.saudi.flag} Saudi: {CONTACT_INFO.saudi.display}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer Body - Clean Light & Dark Theme */}
      <div className={`pt-28 pb-10 border-t transition-colors duration-300 ${
        isDark ? 'bg-[#0c0d10] text-zinc-200 border-zinc-800/80' : 'bg-white text-gray-800 border-gray-100'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-gray-200 dark:border-zinc-800">
            
            {/* Column 1: Brand & Newsletter (5 cols) */}
            <div className="lg:col-span-5 space-y-5">
              {/* Official Express GCC Transportation Logo */}
              <Link to="/" className="inline-block py-1 focus:outline-none" aria-label="Express GCC Transportation Home">
                <ExpressLogo 
                  theme="auto" 
                  height="h-12 sm:h-13" 
                  className="hover:opacity-95 transition-opacity" 
                />
              </Link>

              <p className="text-gray-600 dark:text-zinc-400 text-sm leading-relaxed max-w-sm">
                Don't miss out on the latest updates, exclusive offers, and insider news. Join our community and get everything delivered directly.
              </p>

              {/* Newsletter Form */}
              <form onSubmit={handleSubscribe} className="max-w-md">
                <div className="flex items-center rounded-xl overflow-hidden border border-gray-300 dark:border-zinc-700 focus-within:border-[#ff3600] bg-gray-50 dark:bg-zinc-900 p-1 shadow-sm">
                  <input
                    type="email"
                    required
                    value={emailInput}
                    onChange={(e) => setEmailInput(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full px-3 py-2 text-sm bg-transparent text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-zinc-500 focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="px-5 py-2.5 bg-[#ff3600] hover:bg-[#e53100] text-white text-xs font-bold uppercase rounded-lg transition-colors whitespace-nowrap shadow-sm"
                  >
                    Subscribe
                  </button>
                </div>
                {subscribed && (
                  <p className="mt-2 text-xs text-emerald-600 dark:text-emerald-400 font-medium flex items-center space-x-1">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Thank you for subscribing!</span>
                  </p>
                )}
              </form>
            </div>

            {/* Column 2: Useful Links (3 cols) */}
            <div className="lg:col-span-3 space-y-4">
              <h3 className="text-gray-900 dark:text-white font-bold text-base">Useful Links</h3>
              <ul className="space-y-2.5 text-sm text-gray-600 dark:text-zinc-400">
                <li>
                  <Link to="/" className="hover:text-[#ff3600] transition-colors">Home</Link>
                </li>
                <li>
                  <Link to="/about" className="hover:text-[#ff3600] transition-colors">About Us</Link>
                </li>
                <li>
                  <Link to="/cars" className="hover:text-[#ff3600] transition-colors">Our Fleet</Link>
                </li>
                <li>
                  <Link to="/contact" className="hover:text-[#ff3600] transition-colors">Contact</Link>
                </li>
                <li>
                  <Link to="/cars/toyota-camry" className="hover:text-[#ff3600] transition-colors">Featured Sedan</Link>
                </li>
                <li>
                  <Link to="/cars/gmc-yukon-xl" className="hover:text-[#ff3600] transition-colors">Executive Full-Size</Link>
                </li>
              </ul>
            </div>

            {/* Column 3: Contact Us (4 cols) */}
            <div className="lg:col-span-4 space-y-4">
              <h3 className="text-gray-900 dark:text-white font-bold text-base">Contact Us</h3>
              
              <div className="space-y-3.5">
                {/* 🇶🇦 Qatar Line */}
                <div className="flex items-start space-x-3">
                  <div className="w-9 h-9 rounded-lg bg-[#ff3600] text-white flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-xs font-semibold text-gray-500 dark:text-zinc-400 uppercase">
                      {CONTACT_INFO.qatar.flag} Qatar Call / WhatsApp
                    </span>
                    <a href={`tel:${CONTACT_INFO.qatar.tel}`} className="text-sm font-semibold text-gray-900 dark:text-white hover:text-[#ff3600] transition-colors">
                      {CONTACT_INFO.qatar.display}
                    </a>
                  </div>
                </div>

                {/* 🇸🇦 Saudi Arabia Line */}
                <div className="flex items-start space-x-3">
                  <div className="w-9 h-9 rounded-lg bg-[#ff3600] text-white flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-xs font-semibold text-gray-500 dark:text-zinc-400 uppercase">
                      {CONTACT_INFO.saudi.flag} Saudi Arabia Call / WhatsApp
                    </span>
                    <a href={`tel:${CONTACT_INFO.saudi.tel}`} className="text-sm font-semibold text-gray-900 dark:text-white hover:text-[#ff3600] transition-colors">
                      {CONTACT_INFO.saudi.display}
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-9 h-9 rounded-lg bg-[#ff3600] text-white flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-xs font-semibold text-gray-500 dark:text-zinc-400 uppercase">Send US Email</span>
                    <a href={`mailto:${CONTACT_INFO.email}`} className="text-sm font-semibold text-gray-900 dark:text-white hover:text-[#ff3600] transition-colors">
                      {CONTACT_INFO.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-9 h-9 rounded-lg bg-[#ff3600] text-white flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-xs font-semibold text-gray-500 dark:text-zinc-400 uppercase">Our Location</span>
                    <a 
                      href={CONTACT_INFO.googleMapsUrl} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-sm font-semibold text-gray-900 dark:text-white hover:text-[#ff3600] transition-colors flex items-center space-x-1"
                    >
                      <span>{CONTACT_INFO.location}</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-gray-400 dark:text-zinc-500" />
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-9 h-9 rounded-lg bg-[#ff3600] text-white flex items-center justify-center shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-xs font-semibold text-gray-500 dark:text-zinc-400 uppercase">Working Hours</span>
                    <span className="text-sm font-semibold text-gray-900 dark:text-white">
                      {CONTACT_INFO.hours}
                    </span>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Bottom Bar: Copyright & Social */}
          <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500 dark:text-zinc-500">
            <div>
              Copyright © 2026 All Rights Reserved by Express GCC Transportation
            </div>

            <div className="flex items-center">
              {/* Scroll To Top Button */}
              <button
                onClick={scrollToTop}
                className="w-9 h-9 rounded-full border border-[#ff3600] text-[#ff3600] hover:bg-[#ff3600] hover:text-white flex items-center justify-center transition-all shadow-sm"
                title="Back to Top"
                aria-label="Back to top"
              >
                <ChevronUp className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}


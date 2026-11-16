import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Search, 
  Menu, 
  X, 
  Calendar
} from 'lucide-react';
import { CONTACT_INFO } from '../data/cars';
import ExpressLogo from './ExpressLogo';
import ThemeToggle from './ThemeToggle';
import WhatsAppDropdown from './WhatsAppDropdown';
import { useTheme } from '../context/ThemeContext';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { isDark } = useTheme();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Fleet', path: '/cars' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <header className={`w-full sticky top-0 z-50 backdrop-blur-md transition-colors duration-200 shadow-xs ${
      isDark 
        ? 'bg-[#111111]/95 text-white border-b border-zinc-800/80' 
        : 'bg-white/95 text-gray-900 border-b border-gray-200/90 shadow-sm'
    }`}>
      {/* Sleek Main Executive Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Official Express GCC Transportation Logo */}
          <Link to="/" className="flex items-center py-1 group focus:outline-none" aria-label="Express GCC Transportation Home">
            <ExpressLogo 
              theme={isDark ? 'dark' : 'light'} 
              height="h-10 sm:h-12" 
              className="group-hover:opacity-95 transition-opacity" 
            />
          </Link>

          {/* Desktop Links (Centered & Modern) */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `text-sm font-semibold tracking-wide transition-colors relative py-1 ${
                    isActive
                      ? 'text-[#ff3600]'
                      : isDark
                      ? 'text-zinc-300 hover:text-white'
                      : 'text-gray-700 hover:text-[#ff3600]'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {link.name}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#ff3600] rounded-full" />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          {/* Right Header Actions */}
          <div className="hidden md:flex items-center space-x-3.5">
            {/* Minimalist Executive Theme Toggle */}
            <ThemeToggle />

            {/* Quick Fleet Search */}
            <Link
              to="/cars"
              className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
                isDark
                  ? 'text-zinc-400 hover:text-white hover:bg-zinc-800'
                  : 'text-gray-600 hover:text-[#ff3600] hover:bg-gray-100'
              }`}
              title="Browse Fleet"
            >
              <Search className="w-4 h-4" />
            </Link>

            {/* WhatsApp Direct Contact Button */}
            <WhatsAppDropdown />

            <div className={`h-4 w-px ${isDark ? 'bg-zinc-800' : 'bg-gray-200'}`} />

            {/* Book Now Button */}
            <Link
              to="/cars"
              className="inline-flex items-center space-x-2 px-5 py-2.5 text-xs font-bold uppercase tracking-wider rounded-xl text-white bg-[#ff3600] hover:bg-[#e53100] transition-all shadow-md shadow-[#ff3600]/25 hover:shadow-lg hover:shadow-[#ff3600]/40"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book Now</span>
            </Link>
          </div>

          {/* Mobile Menu & Quick Actions */}
          <div className="flex md:hidden items-center space-x-2">
            <WhatsAppDropdown />
            <ThemeToggle />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-lg transition-colors ${
                isDark ? 'text-white hover:bg-zinc-800' : 'text-gray-800 hover:bg-gray-100'
              }`}
              aria-label="Toggle navigation"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className={`md:hidden px-4 pt-2 pb-6 border-t transition-colors ${
          isDark ? 'bg-[#18191c] border-zinc-800 text-white' : 'bg-white border-gray-200 text-gray-900 shadow-lg'
        }`}>
          <div className="flex flex-col space-y-2 pt-2">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `px-3 py-2.5 text-sm font-semibold rounded-lg transition-colors ${
                    isActive
                      ? 'bg-[#ff3600] text-white'
                      : isDark
                      ? 'text-zinc-300 hover:bg-zinc-800'
                      : 'text-gray-800 hover:bg-gray-100'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}

            <Link
              to="/cars"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-3 text-xs font-bold uppercase tracking-wider rounded-xl text-white bg-[#ff3600] hover:bg-[#e53100] transition-colors mt-2"
            >
              Explore Fleet & Book
            </Link>

            {/* Mobile Contact Quick Links */}
            <div className={`pt-4 mt-2 border-t flex flex-col space-y-2 text-xs ${
              isDark ? 'border-zinc-800 text-zinc-400' : 'border-gray-200 text-gray-600'
            }`}>
              <a href={`tel:${CONTACT_INFO.qatar.tel}`} className="flex items-center space-x-2 hover:text-[#ff3600]">
                <Phone className="w-3.5 h-3.5 text-[#ff3600]" />
                <span className={`font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>{CONTACT_INFO.qatar.flag} Qatar:</span>
                <span>{CONTACT_INFO.qatar.display}</span>
              </a>
              <a href={`tel:${CONTACT_INFO.saudi.tel}`} className="flex items-center space-x-2 hover:text-[#ff3600]">
                <Phone className="w-3.5 h-3.5 text-[#ff3600]" />
                <span className={`font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>{CONTACT_INFO.saudi.flag} Saudi:</span>
                <span>{CONTACT_INFO.saudi.display}</span>
              </a>
              <a href={CONTACT_INFO.googleMapsUrl} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 hover:text-[#ff3600]">
                <MapPin className="w-3.5 h-3.5 text-[#ff3600]" />
                <span>{CONTACT_INFO.location}</span>
              </a>
              <div className="flex items-center space-x-2">
                <Mail className="w-3.5 h-3.5 text-[#ff3600]" />
                <span>{CONTACT_INFO.email}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

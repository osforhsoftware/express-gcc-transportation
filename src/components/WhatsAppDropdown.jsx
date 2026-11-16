import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, ExternalLink, ChevronDown } from 'lucide-react';
import { CONTACT_INFO } from '../data/cars';
import { useTheme } from '../context/ThemeContext';

export default function WhatsAppDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const { isDark } = useTheme();

  // Close when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const qatarMsg = encodeURIComponent('Hello Express GCC Transportation, I would like to inquire about vehicle reservation in Qatar.');
  const saudiMsg = encodeURIComponent('Hello Express GCC Transportation, I would like to inquire about cross-border transportation to Saudi Arabia.');

  const branches = [
    {
      country: 'Qatar (Doha HQ)',
      flag: '🇶🇦',
      number: CONTACT_INFO.qatar.display,
      url: `https://wa.me/${CONTACT_INFO.qatar.whatsapp}?text=${qatarMsg}`,
      badge: 'Main Dispatch • 24/7'
    },
    {
      country: 'Saudi Arabia',
      flag: '🇸🇦',
      number: CONTACT_INFO.saudi.display,
      url: `https://wa.me/${CONTACT_INFO.saudi.whatsapp}?text=${saudiMsg}`,
      badge: 'Cross-Border Line'
    }
  ];

  return (
    <div className="relative" ref={dropdownRef}>
      {/* WhatsApp Trigger Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Chat on WhatsApp"
        title="Chat on WhatsApp (Qatar & Saudi Arabia)"
        className="w-10 h-10 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white flex items-center justify-center shadow-md shadow-[#25D366]/30 hover:scale-105 active:scale-95 transition-all duration-200 focus:outline-none"
      >
        {/* Official WhatsApp SVG */}
        <svg 
          viewBox="0 0 24 24" 
          className="w-5 h-5 fill-current"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
        </svg>
      </button>

      {/* Popover Card */}
      {isOpen && (
        <div 
          className={`absolute right-0 mt-3 w-72 rounded-2xl p-4 shadow-2xl border transition-all z-50 animate-in fade-in slide-in-from-top-2 duration-200 ${
            isDark 
              ? 'bg-[#18191c] border-zinc-800 text-white shadow-black/80' 
              : 'bg-white border-gray-200 text-gray-900 shadow-xl'
          }`}
        >
          {/* Popover Header */}
          <div className="flex items-center justify-between pb-3 mb-3 border-b border-zinc-700/50">
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-wider text-[#25D366]">
                WhatsApp Direct Support
              </span>
            </div>
            <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${
              isDark ? 'bg-zinc-800 text-zinc-400' : 'bg-gray-100 text-gray-600'
            }`}>
              24/7
            </span>
          </div>

          <p className={`text-xs mb-3 font-normal ${isDark ? 'text-zinc-400' : 'text-gray-600'}`}>
            Select a branch to chat directly with our reservation & dispatch team:
          </p>

          {/* Branch Links */}
          <div className="space-y-2">
            {branches.map((b) => (
              <a
                key={b.country}
                href={b.url}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className={`flex items-center justify-between p-3 rounded-xl border transition-all group ${
                  isDark
                    ? 'bg-zinc-900/90 hover:bg-zinc-800/90 border-zinc-800 hover:border-[#25D366]/40'
                    : 'bg-gray-50 hover:bg-emerald-50/50 border-gray-200 hover:border-[#25D366]/40'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">{b.flag}</span>
                  <div>
                    <div className="text-xs font-bold flex items-center space-x-1.5">
                      <span>{b.country}</span>
                    </div>
                    <div className={`text-xs font-mono font-medium ${
                      isDark ? 'text-zinc-300' : 'text-gray-700'
                    }`}>
                      {b.number}
                    </div>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-zinc-400 group-hover:text-[#25D366] group-hover:translate-x-0.5 transition-all" />
              </a>
            ))}
          </div>

          {/* Instant Doha Quick Tap */}
          <div className="mt-3 pt-2 text-center">
            <a
              href={`https://wa.me/${CONTACT_INFO.qatar.whatsapp}?text=${qatarMsg}`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="text-[11px] font-semibold text-[#25D366] hover:underline"
            >
              Direct Chat with Main Dispatch (Qatar) →
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function ThemeToggle({ className = '' }) {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      title={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      className={`relative w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#ff3600]/40 ${
        isDark
          ? 'bg-zinc-800/80 hover:bg-zinc-700/80 text-zinc-300 hover:text-white border border-zinc-700/60 shadow-sm'
          : 'bg-gray-100 hover:bg-gray-200/80 text-zinc-700 hover:text-zinc-900 border border-gray-200 shadow-sm'
      } ${className}`}
    >
      <div className="relative w-5 h-5 flex items-center justify-center">
        {/* Sun Icon for Light Mode */}
        <Sun
          className={`w-4 h-4 text-amber-500 absolute transition-all duration-300 transform ${
            isDark
              ? 'opacity-0 rotate-90 scale-0 pointer-events-none'
              : 'opacity-100 rotate-0 scale-100'
          }`}
          strokeWidth={2}
        />
        {/* Moon Icon for Dark Mode */}
        <Moon
          className={`w-4 h-4 text-zinc-200 absolute transition-all duration-300 transform ${
            isDark
              ? 'opacity-100 rotate-0 scale-100'
              : 'opacity-0 -rotate-90 scale-0 pointer-events-none'
          }`}
          strokeWidth={2}
        />
      </div>
    </button>
  );
}

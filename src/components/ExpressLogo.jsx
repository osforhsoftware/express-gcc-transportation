import React from 'react';
import logoRefinedDark from '../assets/images/logo-express-refined.png'; // Fully cleaned metallic silver-white & vibrant orange-red on transparent bg
import logoOriginalLight from '../assets/images/logo-express-light-bg.png'; // Fully cleaned black typography & vibrant orange-red on transparent bg
import { useTheme } from '../context/ThemeContext';

export default function ExpressLogo({ 
  theme = 'auto', 
  className = '', 
  height = 'h-10 sm:h-11 md:h-12',
  withGlow = true
}) {
  let activeTheme = theme;
  try {
    const themeContext = useTheme();
    if (theme === 'auto') {
      activeTheme = themeContext.theme;
    }
  } catch (e) {
    if (theme === 'auto') {
      activeTheme = 'dark';
    }
  }

  const isDarkBg = activeTheme === 'dark';
  const logoSrc = isDarkBg ? logoRefinedDark : logoOriginalLight;
  const glowClass = (isDarkBg && withGlow) ? 'logo-glow-effect' : '';

  return (
    <div className={`inline-flex items-center select-none ${className}`}>
      <img
        src={logoSrc}
        alt="Express GCC Transportation"
        className={`${height} w-auto object-contain transition-transform duration-300 hover:scale-[1.03] ${glowClass}`}
        loading="eager"
      />
    </div>
  );
}

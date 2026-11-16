import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    // Check localStorage first
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('express_gcc_theme');
      if (saved === 'dark' || saved === 'light') {
        return saved;
      }
    }
    // Default to dark luxury theme as the brand primary
    return 'dark';
  });

  const isDark = theme === 'dark';

  // Apply theme classes to DOM synchronously and accurately
  const applyThemeToDOM = (activeTheme) => {
    const root = document.documentElement;
    const body = document.body;
    if (activeTheme === 'dark') {
      root.classList.add('dark');
      root.classList.remove('light');
      if (body) {
        body.classList.add('dark');
        body.classList.remove('light');
      }
    } else {
      root.classList.remove('dark');
      root.classList.add('light');
      if (body) {
        body.classList.remove('dark');
        body.classList.add('light');
      }
    }
  };

  // Sync with DOM and localStorage whenever theme changes
  useEffect(() => {
    applyThemeToDOM(theme);
    localStorage.setItem('express_gcc_theme', theme);
  }, [theme]);

  // Clean, instantaneous, and dependable toggle
  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    
    // Apply immediately to the DOM so all CSS dark:* classes switch instantly
    applyThemeToDOM(nextTheme);
    localStorage.setItem('express_gcc_theme', nextTheme);
    
    // Update React state to re-render all dependent components
    setTheme(nextTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, isDark, toggleTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}

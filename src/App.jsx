import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Fleet from './pages/Fleet';
import CarDetails from './pages/CarDetails';
import About from './pages/About';
import Contact from './pages/Contact';

// Scroll to top automatically when route changes
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function Layout({ children }) {
  const { isDark } = useTheme();

  return (
    <div className={`flex flex-col min-h-screen ${isDark ? 'dark bg-[#111111] text-zinc-100' : 'bg-white text-zinc-900'} transition-colors duration-250`}>
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cars" element={<Fleet />} />
            <Route path="/cars/:slug" element={<CarDetails />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            {/* Catch-all route redirects to Fleet */}
            <Route path="*" element={<Fleet />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </ThemeProvider>
  );
}

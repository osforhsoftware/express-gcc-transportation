import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  ArrowUpRight, 
  Car, 
  ShieldCheck, 
  Clock, 
  DollarSign, 
  Award, 
  Calendar, 
  MapPin, 
  ArrowRight,
  CheckCircle2,
  PhoneCall,
  Sparkles,
  Users,
  Compass,
  CheckCircle
} from 'lucide-react';
import CarCard from '../components/CarCard';
import AnimatedCounter from '../components/AnimatedCounter';
import { VEHICLES, CONTACT_INFO } from '../data/cars';
import { useTheme } from '../context/ThemeContext';

const HERO_VIDEOS = [
  {
    src: '/videos/hero-car.mp4',
    title: 'Highway Executive Cruise'
  },
  {
    src: '/videos/hero-car-2.mp4',
    title: 'City Avenue Night Drive'
  },
  {
    src: '/videos/hero-car-3.mp4',
    title: 'Scenic Asphalt Journey'
  }
];

export default function Home() {
  const navigate = useNavigate();
  const { isDark } = useTheme();
  const [selectedFilter, setSelectedFilter] = useState('All');
  
  // Hero multi-video cross-fade state
  const [activeVideoIndex, setActiveVideoIndex] = useState(0);
  const videoRefs = useRef([]);

  useEffect(() => {
    // Play active video smoothly
    const currentVideo = videoRefs.current[activeVideoIndex];
    if (currentVideo) {
      currentVideo.currentTime = 0;
      currentVideo.play().catch(() => {});
    }

    // Pre-buffer next video
    const nextIdx = (activeVideoIndex + 1) % HERO_VIDEOS.length;
    const nextVideo = videoRefs.current[nextIdx];
    if (nextVideo) {
      nextVideo.load();
    }

    // Seamless automatic transition every 7.5 seconds
    const timer = setTimeout(() => {
      setActiveVideoIndex(nextIdx);
    }, 7500);

    return () => clearTimeout(timer);
  }, [activeVideoIndex]);

  // Hero booking search state
  const [heroSearch, setHeroSearch] = useState({
    carSlug: '',
    location: 'Doha International Airport / City Center',
    pickupDate: '',
    returnDate: ''
  });

  const categories = ['All', 'Sedan', 'SUV', 'MPV', 'Full-size SUV'];

  const categoryCards = [
    { 
      name: 'Sedan', 
      models: 'Toyota Camry',
      capacity: '5 Seats • Executive Cabin', 
      desc: 'Smooth highway & business city travel',
      count: '1 Model' 
    },
    { 
      name: 'SUV', 
      models: 'Toyota Fortuner',
      capacity: '7 Seats • 3-Row Versatility', 
      desc: 'Rugged capability & family journeys',
      count: '1 Model' 
    },
    { 
      name: 'MPV', 
      models: 'Toyota Innova',
      capacity: '7–8 Seats • Group Comfort', 
      desc: 'Airport transfers & group touring',
      count: '1 Model' 
    },
    { 
      name: 'Full-size SUV', 
      models: 'Sequoia & Yukon XL',
      capacity: '7–8 Seats • Extended Luxury', 
      desc: 'Commanding road presence & VIP transit',
      count: '2 Models' 
    }
  ];

  const stats = [
    {
      icon: Car,
      value: 5,
      suffix: '+',
      label: 'Verified Fleet Models',
      sub: 'Toyota & GMC Executive Selection'
    },
    {
      icon: Award,
      value: 5500,
      suffix: '+',
      label: 'Satisfied Travelers',
      sub: 'Across Qatar & Saudi Arabia'
    },
    {
      icon: ShieldCheck,
      value: 100,
      suffix: '%',
      label: 'Inspected & Sanitized',
      sub: 'Multi-Point Quality Standards'
    },
    {
      icon: Clock,
      value: 24,
      suffix: '/7',
      label: 'Airport & Hotel Dispatch',
      sub: 'Prompt Delivery & Support'
    }
  ];

  const filteredVehicles = selectedFilter === 'All'
    ? VEHICLES
    : VEHICLES.filter((c) => c.category === selectedFilter);

  const handleHeroSubmit = (e) => {
    e.preventDefault();
    if (heroSearch.carSlug) {
      navigate(`/cars/${heroSearch.carSlug}`);
    } else {
      navigate('/cars');
    }
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      isDark ? 'bg-[#111111] text-white' : 'bg-white text-gray-900'
    }`}>
      {/* 1. HERO SECTION (Refined Commercial Luxury Staging with Cinematic Background Video) */}
      <section className="relative min-h-[640px] lg:min-h-[720px] flex items-center overflow-hidden border-b border-zinc-800">
        {/* Background Multi-Video Carousel with Seamless Cross-fade */}
        <div className="absolute inset-0 z-0 overflow-hidden bg-black">
          {HERO_VIDEOS.map((item, idx) => (
            <video
              key={item.src}
              ref={(el) => (videoRefs.current[idx] = el)}
              muted
              playsInline
              preload="auto"
              poster="https://images.unsplash.com/photo-1617814076367-b759c7d7e738?q=80&w=1920&auto=format&fit=crop"
              className={`absolute inset-0 w-full h-full object-cover object-center scale-105 pointer-events-none transition-opacity duration-1000 ease-in-out ${
                activeVideoIndex === idx ? 'opacity-80 z-10' : 'opacity-0 z-0'
              }`}
            >
              <source src={item.src} type="video/mp4" />
            </video>
          ))}
          {/* Subtle directional vignette: dark behind text on left, clear on center & road */}
          <div className="absolute inset-0 z-20 bg-gradient-to-r from-[#111111]/90 via-[#111111]/40 to-transparent pointer-events-none" />
          <div className="absolute inset-0 z-20 bg-gradient-to-t from-[#111111] via-transparent to-black/30 pointer-events-none" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-[#ff3600] font-bold text-xs uppercase tracking-[0.2em] block">
                Executive & Private Transportation • Qatar & GCC
              </span>

              {/* Exact user request heading with GoRental signature underline styling */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.1]">
                Find Your <span className="text-[#ff3600] border-b-2 border-[#ff3600] pb-1">Perfect</span> Ride
              </h1>

              <p className="text-base sm:text-lg text-zinc-300 max-w-xl font-normal leading-relaxed">
                Discover executive comfort, style and dependable performance with our curated fleet of premium sedans, multi-passenger carriers, and luxury full-size SUVs.
              </p>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <Link
                  to="/cars"
                  className="inline-flex items-center space-x-3 bg-[#ff3600] hover:bg-[#e53100] text-white px-7 py-3.5 rounded-xl font-bold text-base transition-all duration-200 shadow-xl shadow-[#ff3600]/25 group hover:scale-[1.02]"
                >
                  <span>Explore Our Cars</span>
                  <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Link>

                <Link
                  to="/contact"
                  className="inline-flex items-center space-x-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-zinc-300 hover:text-white bg-zinc-900/90 hover:bg-zinc-800 border border-zinc-700/80 transition-colors"
                >
                  <span>Contact Our Team</span>
                </Link>
              </div>

              {/* Real Commercial Credentials (No generic AI bullet points) */}
              <div className="pt-6 border-t border-zinc-800/80 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-xl text-xs text-zinc-300">
                <div className="flex items-center space-x-2.5">
                  <span className="w-7 h-7 rounded-lg bg-zinc-900 border border-zinc-800 text-[#ff3600] flex items-center justify-center shrink-0 font-bold text-[11px]">
                    🇶🇦/🇸🇦
                  </span>
                  <span className="font-semibold text-zinc-300">Qatar & KSA Permits</span>
                </div>
                <div className="flex items-center space-x-2.5">
                  <div className="w-7 h-7 rounded-lg bg-zinc-900 border border-zinc-800 text-[#ff3600] flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <span className="font-semibold text-zinc-300">Fully Insured Fleet</span>
                </div>
                <div className="flex items-center space-x-2.5">
                  <div className="w-7 h-7 rounded-lg bg-zinc-900 border border-zinc-800 text-[#ff3600] flex items-center justify-center shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <span className="font-semibold text-zinc-300">24/7 Airport Dispatch</span>
                </div>
              </div>
            </div>

            {/* Right Booking / Search Card (Refined Dark-Luxury Card) */}
            <div className="lg:col-span-5">
              <div className="bg-[#18191c]/95 backdrop-blur-xl text-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-zinc-800/90 relative overflow-hidden">
                <div className="flex items-center justify-between mb-6 border-b border-zinc-800/80 pb-4">
                  <div>
                    <span className="px-3.5 py-1 rounded-full bg-[#ff3600] text-white text-[11px] font-bold uppercase tracking-wider inline-block">
                      Reservation Desk
                    </span>
                    <h3 className="text-lg font-bold text-white mt-1.5">
                      Check Rates & Availability
                    </h3>
                  </div>
                  <span className="text-[11px] text-zinc-400 font-medium">
                    Instant Quote
                  </span>
                </div>

                <form onSubmit={handleHeroSubmit} className="space-y-4">
                  {/* Select Car */}
                  <div>
                    <label className="block text-xs font-bold text-zinc-300 uppercase tracking-wider mb-1.5">
                      Choose Car Model
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-zinc-400">
                        <Car className="w-4 h-4 text-[#ff3600]" />
                      </div>
                      <select
                        value={heroSearch.carSlug}
                        onChange={(e) => setHeroSearch({ ...heroSearch, carSlug: e.target.value })}
                        className="w-full pl-10 pr-4 py-3 bg-zinc-900/90 border border-zinc-700/80 rounded-xl text-sm font-medium text-white focus:outline-none focus:ring-2 focus:ring-[#ff3600]/30 focus:border-[#ff3600] transition-colors"
                      >
                        <option value="" className="bg-[#18191c] text-white">All Vehicles (View Full Fleet)</option>
                        {VEHICLES.map((car) => (
                          <option key={car.id} value={car.slug} className="bg-[#18191c] text-white">
                            {car.name} — {car.category}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Pick Up Location */}
                  <div>
                    <label className="block text-xs font-bold text-zinc-300 uppercase tracking-wider mb-1.5">
                      Pick Up Location
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-zinc-400">
                        <MapPin className="w-4 h-4 text-[#ff3600]" />
                      </div>
                      <input
                        type="text"
                        value={heroSearch.location}
                        onChange={(e) => setHeroSearch({ ...heroSearch, location: e.target.value })}
                        placeholder="Doha International Airport / City Center"
                        className="w-full pl-10 pr-4 py-3 bg-zinc-900/90 border border-zinc-700/80 rounded-xl text-sm font-medium text-white focus:outline-none focus:ring-2 focus:ring-[#ff3600]/30 focus:border-[#ff3600] transition-colors"
                      />
                    </div>
                  </div>

                  {/* Pick Up & Return Dates */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-zinc-300 uppercase tracking-wider mb-1.5">
                        Pick Up Date
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-zinc-400">
                          <Calendar className="w-4 h-4 text-[#ff3600]" />
                        </div>
                        <input
                          type="date"
                          value={heroSearch.pickupDate}
                          onChange={(e) => setHeroSearch({ ...heroSearch, pickupDate: e.target.value })}
                          className="w-full pl-10 pr-3 py-3 bg-zinc-900/90 border border-zinc-700/80 rounded-xl text-xs font-medium text-white focus:outline-none focus:ring-2 focus:ring-[#ff3600]/30 focus:border-[#ff3600] transition-colors [color-scheme:dark]"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-zinc-300 uppercase tracking-wider mb-1.5">
                        Return Date
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-zinc-400">
                          <Calendar className="w-4 h-4 text-[#ff3600]" />
                        </div>
                        <input
                          type="date"
                          value={heroSearch.returnDate}
                          onChange={(e) => setHeroSearch({ ...heroSearch, returnDate: e.target.value })}
                          className="w-full pl-10 pr-3 py-3 bg-zinc-900/90 border border-zinc-700/80 rounded-xl text-xs font-medium text-white focus:outline-none focus:ring-2 focus:ring-[#ff3600]/30 focus:border-[#ff3600] transition-colors [color-scheme:dark]"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Find Vehicle Button */}
                  <button
                    type="submit"
                    className="w-full py-4 px-6 rounded-xl font-bold text-sm uppercase tracking-wider text-white bg-[#ff3600] hover:bg-[#e53100] transition-all shadow-lg shadow-[#ff3600]/30 hover:shadow-[#ff3600]/50 flex items-center justify-center space-x-2 mt-2"
                  >
                    <span>Check Vehicle Rates</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              </div>
            </div>

          </div>
        </div>

        {/* Subtle Cinematic Video Scene Indicators */}
        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-30 flex items-center space-x-2.5 bg-black/40 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/10">
          {HERO_VIDEOS.map((video, idx) => (
            <button
              key={idx}
              onClick={() => setActiveVideoIndex(idx)}
              title={video.title}
              aria-label={video.title}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                activeVideoIndex === idx
                  ? 'w-8 bg-[#ff3600]'
                  : 'w-2 bg-white/40 hover:bg-white/70'
              }`}
            />
          ))}
        </div>
      </section>

      {/* 2. BROWSE BY VEHICLE CATEGORY (Refined Commercial Cards) */}
      <section className={`py-20 border-b transition-colors duration-300 ${
        isDark ? 'bg-[#0c0c0e] border-zinc-800/80' : 'bg-[#f8f9fa] border-gray-200'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-[#ff3600] font-bold text-xs uppercase tracking-[0.2em] block mb-1">
              Vehicle Classes
            </span>
            <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-black ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>
              Browse By <span className="text-[#ff3600] border-b-2 border-[#ff3600] pb-1">Car</span> Type
            </h2>
            <p className={`text-xs sm:text-sm mt-3 ${
              isDark ? 'text-zinc-400' : 'text-gray-600'
            }`}>
              Explore our verified vehicle classes tailored for business itineraries, family comfort, and VIP travel.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categoryCards.map((cat, idx) => {
              const isSelected = selectedFilter === cat.name;
              return (
                <button
                  key={idx}
                  onClick={() => {
                    setSelectedFilter(cat.name);
                    const el = document.getElementById('featured-cars');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className={`rounded-2xl p-6 text-left transition-all duration-300 flex flex-col justify-between group border relative overflow-hidden ${
                    isSelected 
                      ? 'bg-orange-50/50 border-[#ff3600] shadow-xl shadow-[#ff3600]/15' 
                      : isDark
                      ? 'bg-[#18191c] hover:bg-[#1e2025] border-zinc-800/90 shadow-none'
                      : 'bg-white hover:bg-gray-50 border-gray-200 shadow-sm'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors ${
                        isSelected 
                          ? 'bg-[#ff3600] text-white shadow-md shadow-[#ff3600]/30' 
                          : 'bg-zinc-900 border border-zinc-800 text-[#ff3600] group-hover:border-[#ff3600]'
                      }`}>
                        <Car className="w-6 h-6 stroke-[2]" />
                      </div>
                      <span className={`text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md border ${
                        isDark ? 'text-zinc-400 bg-zinc-900/80 border-zinc-800' : 'text-gray-500 bg-gray-100 border-gray-200'
                      }`}>
                        {cat.count}
                      </span>
                    </div>

                    <h3 className={`text-xl font-bold group-hover:text-[#ff3600] transition-colors ${
                      isDark ? 'text-white' : 'text-gray-900'
                    }`}>
                      {cat.name}
                    </h3>
                    <span className="block text-xs font-semibold text-[#ff3600] mt-0.5">
                      {cat.models}
                    </span>
                    <span className={`block text-xs font-medium mt-2 ${
                      isDark ? 'text-zinc-400' : 'text-gray-500'
                    }`}>
                      {cat.capacity}
                    </span>
                  </div>

                  <div className={`pt-5 mt-4 border-t flex items-center justify-between text-xs ${
                    isDark ? 'border-zinc-800/80 text-zinc-400' : 'border-gray-100 text-gray-500'
                  }`}>
                    <span className="text-[11px]">{cat.desc}</span>
                    <ArrowUpRight className="w-4 h-4 text-[#ff3600] opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0 ml-1" />
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. FEATURED FLEET SHOWCASE ("Our Amazing Car") */}
      <section id="featured-cars" className={`py-20 transition-colors duration-300 ${
        isDark ? 'bg-[#111111] text-white' : 'bg-white text-gray-900'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <span className="text-[#ff3600] font-bold text-xs uppercase tracking-[0.2em] block mb-2">
                Verified Fleet
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 dark:text-white">
                Our Amazing <span className="text-[#ff3600] border-b-2 border-[#ff3600] pb-1">Car</span>
              </h2>
            </div>

            {/* Filter Pills */}
            <div className="flex flex-wrap items-center gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedFilter(cat)}
                  className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                    selectedFilter === cat
                      ? 'bg-[#ff3600] text-white shadow-md shadow-[#ff3600]/30'
                      : 'bg-white dark:bg-[#18191c] text-gray-600 dark:text-zinc-400 hover:text-gray-900 dark:hover:text-white border border-gray-200 dark:border-zinc-800 hover:border-[#ff3600]/40 shadow-xs'
                  }`}
                >
                  {cat === 'All' ? 'All Cars' : cat}
                </button>
              ))}
            </div>
          </div>

          {/* Three-column desktop grid matching GoRental */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredVehicles.map((car) => (
              <CarCard key={car.id} car={car} />
            ))}
          </div>

          <div className="mt-14 text-center">
            <Link
              to="/cars"
              className="inline-flex items-center space-x-2 text-sm font-bold text-gray-800 dark:text-zinc-300 hover:text-[#ff3600] dark:hover:text-white px-7 py-3.5 rounded-xl border border-gray-200 dark:border-zinc-800 hover:border-[#ff3600] bg-gray-50 dark:bg-zinc-900/60 hover:bg-gray-100 dark:hover:bg-zinc-900 transition-colors shadow-sm dark:shadow-none"
            >
              <span>View All 5 Models in Fleet</span>
              <ArrowUpRight className="w-4 h-4 text-[#ff3600]" />
            </Link>
          </div>
        </div>
      </section>

      {/* 4. ANIMATED STATISTICS & CREDENTIALS STRIP */}
      <section className={`py-16 border-t border-b transition-colors duration-300 ${
        isDark ? 'bg-[#0c0c0e] border-zinc-800/80' : 'bg-[#f8f9fa] border-gray-200'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, idx) => {
              const IconComp = stat.icon;
              return (
                <div
                  key={idx}
                  className={`rounded-2xl p-7 border transition-all text-center flex flex-col items-center group ${
                    isDark 
                      ? 'bg-[#18191c] border-zinc-800/90 hover:border-[#ff3600]/50 shadow-md' 
                      : 'bg-white border-gray-200 hover:border-[#ff3600]/50 shadow-sm'
                  }`}
                >
                  <div className={`w-12 h-12 rounded-xl border group-hover:border-[#ff3600] text-[#ff3600] flex items-center justify-center mb-4 transition-colors ${
                    isDark ? 'bg-zinc-900 border-zinc-800' : 'bg-orange-50 border-orange-100'
                  }`}>
                    <IconComp className="w-6 h-6 stroke-[2]" />
                  </div>

                  <div className={`text-3xl sm:text-4xl font-black tracking-tight mb-1 ${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`}>
                    <AnimatedCounter
                      end={stat.value}
                      suffix={stat.suffix}
                      duration={2200}
                    />
                  </div>

                  <h3 className={`text-sm font-bold uppercase tracking-wider ${
                    isDark ? 'text-zinc-200' : 'text-gray-800'
                  }`}>
                    {stat.label}
                  </h3>
                  <span className={`text-xs mt-1 ${isDark ? 'text-zinc-400' : 'text-gray-500'}`}>
                    {stat.sub}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. REDEFINING CAR RENTAL */}
      <section className={`py-20 transition-colors duration-300 ${
        isDark ? 'bg-[#111111] text-white' : 'bg-white text-gray-900'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left: Authentic Executive Fleet Staging with 1000+ Motion Badge */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-3xl overflow-hidden border border-zinc-800 aspect-[4/3] bg-zinc-900 shadow-2xl">
                {/* Authentic Executive Handover / Luxury Vehicle Photo */}
                <img
                  src="https://images.unsplash.com/photo-1549399542-7e3f8b79c341?q=80&w=900&auto=format&fit=crop"
                  alt="Express GCC Transportation Handover"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating Orange Badge with Smooth Count-Up Motion */}
              <div className="absolute -top-6 -left-4 sm:left-4 bg-[#ff3600] text-white p-5 sm:p-6 rounded-2xl shadow-2xl flex flex-col items-center">
                <span className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                  <AnimatedCounter end={1000} suffix="+" duration={2000} />
                </span>
                <span className="text-xs font-semibold uppercase tracking-wider text-orange-100 mt-0.5">
                  Car Rent Already
                </span>
              </div>
            </div>

            {/* Right Information */}
            <div className="lg:col-span-6 space-y-6">
              <span className="text-[#ff3600] font-bold text-xs uppercase tracking-[0.2em] block">
                About Express GCC Transportation
              </span>
              
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 dark:text-white leading-tight">
                Redefining Car <span className="text-[#ff3600] border-b-2 border-[#ff3600] pb-1">Rental</span><br />
                One Ride at a Time
              </h2>

              <p className="text-gray-600 dark:text-zinc-400 text-sm sm:text-base leading-relaxed">
                Welcome to Express GCC Transportation where innovation drives every journey. Discover a curated collection of executive sedans, dependable SUVs, and spacious multi-purpose carriers crafted to elevate your travel experience across Qatar and Saudi Arabia.
              </p>

              {/* 4 Commercial Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-2">
                <div className="flex items-start space-x-3.5">
                  <div className="w-10 h-10 rounded-xl bg-orange-50 dark:bg-zinc-900 border border-orange-100 dark:border-zinc-800 text-[#ff3600] flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-gray-900 dark:text-white font-bold text-sm">24/7 Dedicated Support</h3>
                    <p className="text-gray-500 dark:text-zinc-400 text-xs mt-1">Prompt customer assistance for enquiries, bookings and itineraries.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3.5">
                  <div className="w-10 h-10 rounded-xl bg-orange-50 dark:bg-zinc-900 border border-orange-100 dark:border-zinc-800 text-[#ff3600] flex items-center justify-center shrink-0">
                    <DollarSign className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-gray-900 dark:text-white font-bold text-sm">Transparent Pricing</h3>
                    <p className="text-gray-500 dark:text-zinc-400 text-xs mt-1">Direct rates tailored to your custom duration without hidden surcharges.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3.5">
                  <div className="w-10 h-10 rounded-xl bg-orange-50 dark:bg-zinc-900 border border-orange-100 dark:border-zinc-800 text-[#ff3600] flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-gray-900 dark:text-white font-bold text-sm">Meticulously Maintained</h3>
                    <p className="text-gray-500 dark:text-zinc-400 text-xs mt-1">Every car is cleaned, sanitized and technically checked before dispatch.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3.5">
                  <div className="w-10 h-10 rounded-xl bg-orange-50 dark:bg-zinc-900 border border-orange-100 dark:border-zinc-800 text-[#ff3600] flex items-center justify-center shrink-0">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-gray-900 dark:text-white font-bold text-sm">Flexible Durations</h3>
                    <p className="text-gray-500 dark:text-zinc-400 text-xs mt-1">Options for daily, weekly, or extended private chauffeured travel.</p>
                  </div>
                </div>
              </div>

              <div className="pt-4 flex items-center space-x-4">
                <Link
                  to="/about"
                  className="inline-flex items-center space-x-2 px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider text-gray-800 dark:text-white border border-gray-300 dark:border-zinc-700 hover:border-[#ff3600] hover:bg-gray-50 dark:hover:bg-zinc-900 transition-colors"
                >
                  <span>Learn More</span>
                  <ArrowUpRight className="w-4 h-4 text-[#ff3600]" />
                </Link>

                <Link
                  to="/contact"
                  className="inline-flex items-center space-x-2 text-xs font-bold text-[#ff3600] hover:text-[#e53100]"
                >
                  <span>Request Custom Quote</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 6. HOW IT WORKS 3-STEP GUIDE */}
      <section className={`py-20 border-t mb-20 transition-colors duration-300 ${
        isDark ? 'bg-[#0c0c0e] border-zinc-800/80' : 'bg-[#f8f9fa] border-gray-200'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-[#ff3600] font-bold text-xs uppercase tracking-[0.2em] block mb-1">
              Seamless Process
            </span>
            <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-black ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>
              How It <span className="text-[#ff3600] border-b-2 border-[#ff3600] pb-1">Works</span>
            </h2>
            <p className={`text-xs sm:text-sm mt-3 ${
              isDark ? 'text-zinc-400' : 'text-gray-600'
            }`}>
              Rent your executive vehicle in three straightforward steps with full support from our Qatar and Saudi teams.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className={`rounded-2xl p-8 border relative hover:border-[#ff3600]/40 transition-all hover:shadow-lg ${
              isDark ? 'bg-[#18191c] border-zinc-800' : 'bg-white border-gray-200 shadow-sm'
            }`}>
              <span className="text-4xl font-black text-[#ff3600] block mb-4">01</span>
              <h3 className={`text-xl font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>Select Your Vehicle</h3>
              <p className={`text-xs sm:text-sm leading-relaxed ${isDark ? 'text-zinc-400' : 'text-gray-600'}`}>
                Choose from our verified fleet of Toyota sedans, versatile SUVs, family MPVs, or luxury GMC Yukon XL executive carriers.
              </p>
            </div>

            {/* Step 2 */}
            <div className={`rounded-2xl p-8 border relative hover:border-[#ff3600]/40 transition-all hover:shadow-lg ${
              isDark ? 'bg-[#18191c] border-zinc-800' : 'bg-white border-gray-200 shadow-sm'
            }`}>
              <span className="text-4xl font-black text-[#ff3600] block mb-4">02</span>
              <h3 className={`text-xl font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>Confirm Your Itinerary</h3>
              <p className={`text-xs sm:text-sm leading-relaxed ${isDark ? 'text-zinc-400' : 'text-gray-600'}`}>
                Connect directly with our Doha or Saudi Arabia reservation desk via WhatsApp or phone to confirm rental dates and direct pricing.
              </p>
            </div>

            {/* Step 3 */}
            <div className={`rounded-2xl p-8 border relative hover:border-[#ff3600]/40 transition-all hover:shadow-lg ${
              isDark ? 'bg-[#18191c] border-zinc-800' : 'bg-white border-gray-200 shadow-sm'
            }`}>
              <span className="text-4xl font-black text-[#ff3600] block mb-4">03</span>
              <h3 className={`text-xl font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>Punctual Handover</h3>
              <p className={`text-xs sm:text-sm leading-relaxed ${isDark ? 'text-zinc-400' : 'text-gray-600'}`}>
                Enjoy seamless vehicle delivery at Hamad International Airport, your luxury hotel, or private residence anywhere in Qatar or KSA.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

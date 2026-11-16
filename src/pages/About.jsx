import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, 
  Clock, 
  DollarSign, 
  Award, 
  ArrowUpRight, 
  Plus, 
  Minus, 
  CheckCircle2, 
  Car,
  Star,
  Users,
  Quote,
  ChevronRight,
  Sparkles
} from 'lucide-react';
import ContactForm from '../components/ContactForm';
import AnimatedCounter from '../components/AnimatedCounter';
import { CONTACT_INFO } from '../data/cars';
import { useTheme } from '../context/ThemeContext';

export default function About() {
  const { isDark } = useTheme();
  const [openFaq, setOpenFaq] = useState(0);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const stats = [
    {
      icon: Car,
      value: 5,
      suffix: '+',
      label: 'Verified Fleet Models',
      sub: 'Toyota & GMC Executive Vehicles'
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
      label: 'Dedicated Support',
      sub: 'Direct Line & WhatsApp Dispatch'
    }
  ];

  const brandPartners = [
    { name: 'TOYOTA', label: 'Executive Fleet' },
    { name: 'GMC', label: 'Luxury Full-Size' },
    { name: 'DENALI', label: 'Executive Trim' },
    { name: 'HYBRID', label: 'Eco Mobility' },
    { name: 'VIP GCC', label: 'Transit Routes' }
  ];

  const testimonials = [
    {
      quote:
        'I had an exceptional experience with Express GCC Transportation. The booking process was straightforward, and the GMC Yukon XL was in immaculate condition. The team provided prompt support for our cross-border transit between Qatar and Saudi Arabia. Highly recommended!',
      author: 'Jonathon Doe',
      role: 'Corporate Travel Director',
      rating: 5,
      image:
        'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=600&auto=format&fit=crop'
    },
    {
      quote:
        'Booking the Toyota Sequoia for our family trip in Doha was seamless. Clean cabin, smooth ride, and direct communication with their dispatch desk without any hassle. The best car rental experience we had in the GCC.',
      author: 'Ahmad Al-Mansoor',
      role: 'Private Client (Doha)',
      rating: 5,
      image:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop'
    },
    {
      quote:
        'Punctual, professional, and reliable. The Toyota Camry was delivered spotless at the airport with zero delays. Clear pricing and 24/7 responsiveness via WhatsApp made our business trip completely stress-free.',
      author: 'Sarah Jenkins',
      role: 'Executive Consultant',
      rating: 5,
      image:
        'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop'
    }
  ];

  const faqs = [
    {
      q: 'Are there mileage limits on the rental?',
      a: 'Rental mileage terms depend on your specific vehicle and booking duration. Please confirm the applicable daily or weekly allowance with our booking desk during your reservation inquiry. Custom unlimited packages are also available upon request.'
    },
    {
      q: 'Can I get an estimate before you start the work?',
      a: 'Yes, we provide transparent, comprehensive rental estimates based on your selected vehicle model, rental duration, and delivery location prior to any commitment.'
    },
    {
      q: 'What should I do if the rental car breaks down?',
      a: 'We provide 24/7 dedicated roadside assistance throughout Qatar and GCC transit routes. Simply call our direct support number, and our team will coordinate immediate mobile technician dispatch or vehicle replacement.'
    },
    {
      q: 'How do I modify or cancel my reservation?',
      a: 'You can modify your dates, requested vehicle category, or pickup arrangements by contacting our reservation team at least 24 hours in advance with zero penalty.'
    },
    {
      q: 'Can I pick up a car in one location and drop it off in another?',
      a: 'Yes, flexible collection and return arrangements across major transit hubs, Hamad International Airport, city hotels, and cross-border GCC routes can be arranged.'
    }
  ];

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      isDark ? 'bg-[#111111] text-zinc-100' : 'bg-white text-gray-900'
    }`}>
      {/* 1. SHOWROOM BREADCRUMB HERO BANNER (Matches Screenshot 6) */}
      <section className="relative h-[280px] sm:h-[340px] md:h-[400px] bg-zinc-950 overflow-hidden flex items-center">
        {/* Background Image with Dark Vignette */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1920&auto=format&fit=crop"
            alt="Automotive Showroom"
            className="w-full h-full object-cover object-center opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/35" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight">
            About Us
          </h1>
          <p className="text-zinc-300 text-sm sm:text-base mt-2 max-w-lg font-normal">
            Delivering excellence, premium vehicle reliability, and executive transportation across Qatar and the GCC.
          </p>
        </div>

        {/* Signature Curved Bottom-Right Cutout Breadcrumb Pill (Matches Screenshot 6) */}
        <div className="absolute bottom-0 right-0 z-20 bg-white dark:bg-[#18191c] pt-3 pl-6 pr-6 sm:pr-10 rounded-tl-3xl shadow-sm hidden sm:flex items-center space-x-2 text-xs font-semibold text-gray-600 dark:text-zinc-300 border-t border-l border-transparent dark:border-zinc-800">
          <Link to="/" className="hover:text-gray-900 dark:hover:text-white transition-colors">Home</Link>
          <span className="text-[#ff3600] font-bold">•</span>
          <span className="text-[#ff3600]">About</span>
        </div>
      </section>

      {/* MAIN CONTAINER */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 2. MAIN ABOUT SECTION (Matches Screenshot 5) */}
        <section className="pt-16 sm:pt-24 pb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left: Modern Organic Photo Collage with 1000+ Motion Badge */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-3xl overflow-hidden border border-gray-200 dark:border-zinc-800 shadow-xl aspect-[4/3] bg-gray-100 dark:bg-zinc-900">
                <img
                  src="https://images.unsplash.com/photo-1549399542-7e3f8b79c341?q=80&w=900&auto=format&fit=crop"
                  alt="Client receiving car keys"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating Orange Badge with Smooth Count-Up Motion (0 -> 1000+) */}
              <div className="absolute -top-6 -left-3 sm:left-6 bg-[#ff3600] text-white p-5 sm:p-6 rounded-2xl shadow-2xl flex flex-col items-center">
                <span className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                  <AnimatedCounter end={1000} suffix="+" duration={2000} />
                </span>
                <span className="text-xs font-semibold uppercase tracking-wider text-orange-100 mt-0.5">
                  Car Rent Already
                </span>
              </div>

              {/* Inset smaller vehicle photo frame */}
              <div className="hidden sm:block absolute -bottom-8 -right-4 w-48 h-36 rounded-2xl overflow-hidden border-4 border-white dark:border-zinc-900 shadow-xl bg-gray-200 dark:bg-zinc-800">
                <img
                  src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=400&auto=format&fit=crop"
                  alt="Express GCC Transportation Fleet"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Right: Text Information & Highlights */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <span className="text-[#ff3600] font-bold text-xs uppercase tracking-widest block mb-1">
                  About Us
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-white leading-tight">
                  Redefining Car <span className="text-[#ff3600] border-b-2 border-[#ff3600] pb-1">Rental</span><br />
                  One Ride at a Time
                </h2>
              </div>

              <p className="text-gray-600 dark:text-zinc-300 text-sm sm:text-base leading-relaxed">
                Welcome to Express GCC Transportation where innovation drives every journey. Discover a curated collection of executive sedans, dependable SUVs, and spacious multi-passenger carriers designed to elevate your travel experience across Qatar and the GCC.
              </p>

              {/* Feature Highlights with Orange Icons */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
                <div className="flex items-start space-x-3.5">
                  <div className="w-11 h-11 rounded-xl bg-orange-50 dark:bg-orange-950/30 border border-orange-100 dark:border-orange-900/40 text-[#ff3600] flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-gray-900 dark:text-white font-bold text-sm">24/7 Dedicated Support</h3>
                    <p className="text-gray-500 dark:text-zinc-400 text-xs mt-1">Direct booking desk and roadside assistance whenever you need it.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3.5">
                  <div className="w-11 h-11 rounded-xl bg-orange-50 dark:bg-orange-950/30 border border-orange-100 dark:border-orange-900/40 text-[#ff3600] flex items-center justify-center shrink-0">
                    <DollarSign className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-gray-900 dark:text-white font-bold text-sm">Competitive Pricing</h3>
                    <p className="text-gray-500 dark:text-zinc-400 text-xs mt-1">Direct rates without hidden fees, tailored for short and extended hire.</p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 flex items-center space-x-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center space-x-2 px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider text-gray-800 dark:text-zinc-200 border border-gray-300 dark:border-zinc-700 hover:border-[#ff3600] dark:hover:border-[#ff3600] hover:text-[#ff3600] dark:hover:text-[#ff3600] transition-colors"
                >
                  <span>Contact Us</span>
                  <span className="w-5 h-5 rounded-full bg-gray-100 dark:bg-zinc-800 text-gray-700 dark:text-zinc-300 flex items-center justify-center">
                    <ArrowUpRight className="w-3 h-3" />
                  </span>
                </Link>

                <Link
                  to="/cars"
                  className="inline-flex items-center space-x-2 px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-[#ff3600] hover:bg-[#e53100] transition-colors shadow-md shadow-[#ff3600]/25"
                >
                  <span>Explore Fleet</span>
                </Link>
              </div>
            </div>

          </div>
        </section>

        {/* 3. ANIMATED STATISTICS / COUNTERS SECTION (Matches Screenshot 3) */}
        <section className="py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, idx) => {
              const IconComp = stat.icon;
              return (
                <div
                  key={idx}
                  className="bg-gray-50/80 dark:bg-[#18191c] hover:bg-white dark:hover:bg-[#202226] rounded-3xl p-8 border border-gray-200/80 dark:border-zinc-800/80 shadow-xs hover:shadow-xl hover:border-orange-200 dark:hover:border-zinc-700 transition-all duration-300 text-center flex flex-col items-center group"
                >
                  <div className="w-14 h-14 rounded-2xl bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-700 group-hover:border-[#ff3600] text-[#ff3600] flex items-center justify-center mb-5 shadow-xs transition-colors">
                    <IconComp className="w-7 h-7 stroke-[2]" />
                  </div>

                  <div className="text-4xl sm:text-5xl font-black text-gray-900 dark:text-white tracking-tight mb-2">
                    <AnimatedCounter
                      end={stat.value}
                      suffix={stat.suffix}
                      duration={2200}
                    />
                  </div>

                  <h3 className="text-sm font-bold text-gray-900 dark:text-white uppercase tracking-wider">
                    {stat.label}
                  </h3>
                  <span className="text-xs text-gray-500 dark:text-zinc-400 mt-1">
                    {stat.sub}
                  </span>
                </div>
              );
            })}
          </div>
        </section>

        {/* 4. BRAND / FLEET PARTNERS STRIP (Matches Screenshot 2) */}
        <section className="py-12 border-t border-b border-gray-100 dark:border-zinc-800/80 my-8">
          <div className="text-center mb-6">
            <span className="text-xs font-bold uppercase tracking-widest text-gray-400 dark:text-zinc-500">
              Trusted Vehicle Manufacturers in Our Fleet
            </span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
            {brandPartners.map((brand, idx) => (
              <div
                key={idx}
                className="bg-gray-50 dark:bg-[#18191c] rounded-2xl py-6 px-4 text-center border border-gray-200/70 dark:border-zinc-800/80 hover:border-[#ff3600]/40 hover:bg-white dark:hover:bg-[#202226] hover:shadow-sm transition-all"
              >
                <span className="block text-xl font-black text-gray-800 dark:text-white tracking-widest">
                  {brand.name}
                </span>
                <span className="block text-[11px] font-semibold text-gray-500 dark:text-zinc-400 uppercase tracking-wider mt-1">
                  {brand.label}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* 5. CUSTOMER TESTIMONIALS SECTION (Matches Screenshot 4) */}
        <section className="py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left: Testimonial Content */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="text-[#ff3600] font-bold text-xs uppercase tracking-widest block mb-1">
                  Testimonial
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight">
                  What Our Customers <span className="text-[#ff3600] border-b-2 border-[#ff3600] pb-1">Are Saying</span>
                </h2>
              </div>

              {/* Quote Mark & Body */}
              <div className="space-y-4 pt-2">
                <Quote className="w-10 h-10 text-[#ff3600] opacity-80" />
                
                <p className="text-gray-700 dark:text-zinc-300 text-base sm:text-lg leading-relaxed italic">
                  "{testimonials[activeTestimonial].quote}"
                </p>

                {/* 5 Star Rating */}
                <div className="flex items-center space-x-1 pt-2">
                  {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#ff3600] text-[#ff3600]" />
                  ))}
                </div>
              </div>

              {/* Slider Pagination Dots (Matches Screenshot 4) */}
              <div className="flex items-center space-x-2 pt-4">
                {testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveTestimonial(idx)}
                    aria-label={`Go to testimonial ${idx + 1}`}
                    className={`h-2.5 rounded-full transition-all duration-300 ${
                      activeTestimonial === idx
                        ? 'w-8 bg-[#ff3600]'
                        : 'w-2.5 bg-gray-300 dark:bg-zinc-700 hover:bg-gray-400 dark:hover:bg-zinc-600'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Right: Client Photo with Overlaid Identity Badge (Matches Screenshot 4) */}
            <div className="lg:col-span-5 relative">
              <div className="rounded-3xl overflow-hidden border border-gray-200 dark:border-zinc-800 shadow-xl aspect-[4/5] bg-gray-100 dark:bg-zinc-900 max-w-md mx-auto relative">
                <img
                  src={testimonials[activeTestimonial].image}
                  alt={testimonials[activeTestimonial].author}
                  className="w-full h-full object-cover transition-opacity duration-300"
                />

                {/* Overlaid Info Badge */}
                <div className="absolute bottom-5 left-5 right-5 bg-white/95 dark:bg-[#18191c]/95 backdrop-blur-md rounded-2xl p-4 sm:p-5 border border-white/60 dark:border-zinc-700/60 shadow-xl">
                  <h4 className="text-lg font-extrabold text-gray-900 dark:text-white">
                    {testimonials[activeTestimonial].author}
                  </h4>
                  <span className="text-xs font-semibold text-gray-500 dark:text-zinc-400 block mt-0.5">
                    {testimonials[activeTestimonial].role}
                  </span>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* 6. GET IN TOUCH & FAQ ACCORDION (Matches Screenshot 2) */}
        <section className="py-16 border-t border-gray-100 dark:border-zinc-800/80">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-[#ff3600] font-bold text-xs uppercase tracking-widest block mb-1">
              FAQ
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white">
              Frequently Asked <span className="text-[#ff3600] border-b-2 border-[#ff3600] pb-1">Question</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Left Column: Get In Touch Form (5 cols on lg) */}
            <div className="lg:col-span-5">
              <ContactForm />
            </div>

            {/* Right Column: FAQ Accordion (7 cols on lg) (Matches Screenshot 2) */}
            <div className="lg:col-span-7 space-y-3">
              {faqs.map((faq, index) => {
                const isOpen = openFaq === index;
                return (
                  <div
                    key={index}
                    className="rounded-xl border border-gray-200 dark:border-zinc-800 overflow-hidden bg-white dark:bg-[#18191c] shadow-xs transition-all"
                  >
                    <button
                      onClick={() => setOpenFaq(isOpen ? null : index)}
                      className={`w-full py-4 px-5 text-left flex items-center justify-between font-bold text-sm transition-colors ${
                        isOpen 
                          ? 'text-[#ff3600] bg-orange-50/40 dark:bg-orange-950/20' 
                          : 'text-gray-900 dark:text-zinc-100 hover:text-[#ff3600]'
                      }`}
                    >
                      <span className="pr-4">{faq.q}</span>
                      <span className={`w-6 h-6 rounded-md flex items-center justify-center shrink-0 text-sm font-bold ${
                        isOpen ? 'bg-[#ff3600] text-white' : 'bg-gray-100 dark:bg-zinc-800 text-gray-600 dark:text-zinc-300'
                      }`}>
                        {isOpen ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                      </span>
                    </button>

                    {isOpen && (
                      <div className="px-5 pb-5 pt-2 text-xs sm:text-sm text-gray-600 dark:text-zinc-300 leading-relaxed border-t border-gray-100 dark:border-zinc-800 bg-gray-50/60 dark:bg-zinc-900/60">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

          </div>
        </section>

      </div>
    </div>
  );
}

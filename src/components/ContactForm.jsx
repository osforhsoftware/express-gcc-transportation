import React, { useState } from 'react';
import { 
  User, 
  Mail, 
  Phone, 
  Car, 
  MessageSquare, 
  Send, 
  CheckCircle2, 
  AlertCircle 
} from 'lucide-react';
import { VEHICLES, CONTACT_INFO } from '../data/cars';

export default function ContactForm({ preselectedCar = '' }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    carType: preselectedCar || '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [submittedMessage, setSubmittedMessage] = useState(null);

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Please enter your full name';
    if (!formData.email.trim()) {
      errs.email = 'Please enter your email address';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = 'Please enter a valid email address';
    }
    if (!formData.phone.trim()) {
      errs.phone = 'Please enter your phone number';
    }
    if (!formData.message.trim()) {
      errs.message = 'Please enter your inquiry or message';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      // Demo submission feedback without pretending data is stored on a server
      setSubmittedMessage({
        title: 'Demo Inquiry Submitted Successfully',
        text: `Thank you, ${formData.name}. For immediate reservations, please contact us directly via our Qatar (${CONTACT_INFO.qatar.display}) or Saudi Arabia (${CONTACT_INFO.saudi.display}) WhatsApp or Phone lines.`
      });

      // Clear form after a moment
      setFormData({
        name: '',
        email: '',
        phone: '',
        carType: '',
        message: ''
      });
    }
  };

  return (
    <div className="bg-white dark:bg-[#18191c] rounded-2xl p-6 sm:p-8 border border-gray-200 dark:border-zinc-800 shadow-sm transition-colors duration-300">
      <div className="mb-6">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
          Get In Touch
        </h3>
        <p className="text-gray-500 dark:text-zinc-400 text-sm mt-1">
          Have an inquiry about availability or custom hire periods? Send us a message.
        </p>
      </div>

      {submittedMessage && (
        <div className="mb-6 p-4 rounded-xl bg-orange-50 dark:bg-orange-950/30 border border-[#ff3600]/30 text-gray-800 dark:text-zinc-200">
          <div className="flex items-start space-x-3">
            <CheckCircle2 className="w-5 h-5 text-[#ff3600] shrink-0 mt-0.5" />
            <div>
              <h4 className="font-bold text-gray-900 dark:text-white text-sm">{submittedMessage.title}</h4>
              <p className="text-xs text-gray-600 dark:text-zinc-300 mt-1 leading-relaxed">{submittedMessage.text}</p>
              <button 
                onClick={() => setSubmittedMessage(null)}
                className="mt-2 text-xs font-semibold text-[#ff3600] underline"
              >
                Send another inquiry
              </button>
            </div>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Name */}
        <div>
          <label className="block text-xs font-semibold text-gray-700 dark:text-zinc-300 uppercase tracking-wider mb-1.5">
            Your Name <span className="text-[#ff3600]">*</span>
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400 dark:text-zinc-500">
              <User className="w-4 h-4" />
            </div>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="e.g. John Doe"
              className={`w-full pl-10 pr-4 py-3 bg-gray-50 dark:bg-zinc-900 border rounded-xl text-sm text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-[#ff3600]/20 focus:border-[#ff3600] transition-colors ${
                errors.name ? 'border-red-400' : 'border-gray-200 dark:border-zinc-700'
              }`}
            />
          </div>
          {errors.name && (
            <p className="mt-1 text-xs text-red-500 flex items-center space-x-1">
              <AlertCircle className="w-3.5 h-3.5" />
              <span>{errors.name}</span>
            </p>
          )}
        </div>

        {/* Email */}
        <div>
          <label className="block text-xs font-semibold text-gray-700 dark:text-zinc-300 uppercase tracking-wider mb-1.5">
            Email Address <span className="text-[#ff3600]">*</span>
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400 dark:text-zinc-500">
              <Mail className="w-4 h-4" />
            </div>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="johndoe@gmail.com"
              className={`w-full pl-10 pr-4 py-3 bg-gray-50 dark:bg-zinc-900 border rounded-xl text-sm text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-[#ff3600]/20 focus:border-[#ff3600] transition-colors ${
                errors.email ? 'border-red-400' : 'border-gray-200 dark:border-zinc-700'
              }`}
            />
          </div>
          {errors.email && (
            <p className="mt-1 text-xs text-red-500 flex items-center space-x-1">
              <AlertCircle className="w-3.5 h-3.5" />
              <span>{errors.email}</span>
            </p>
          )}
        </div>

        {/* Phone */}
        <div>
          <label className="block text-xs font-semibold text-gray-700 dark:text-zinc-300 uppercase tracking-wider mb-1.5">
            Phone Number <span className="text-[#ff3600]">*</span>
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400 dark:text-zinc-500">
              <Phone className="w-4 h-4" />
            </div>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+974 3128 1336 / +966 53 053 6952"
              className={`w-full pl-10 pr-4 py-3 bg-gray-50 dark:bg-zinc-900 border rounded-xl text-sm text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-[#ff3600]/20 focus:border-[#ff3600] transition-colors ${
                errors.phone ? 'border-red-400' : 'border-gray-200 dark:border-zinc-700'
              }`}
            />
          </div>
          {errors.phone && (
            <p className="mt-1 text-xs text-red-500 flex items-center space-x-1">
              <AlertCircle className="w-3.5 h-3.5" />
              <span>{errors.phone}</span>
            </p>
          )}
        </div>

        {/* Vehicle Selection */}
        <div>
          <label className="block text-xs font-semibold text-gray-700 dark:text-zinc-300 uppercase tracking-wider mb-1.5">
            Interested Vehicle
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400 dark:text-zinc-500">
              <Car className="w-4 h-4" />
            </div>
            <select
              name="carType"
              value={formData.carType}
              onChange={handleChange}
              className="w-full pl-10 pr-4 py-3 bg-gray-50 dark:bg-zinc-900 border border-gray-200 dark:border-zinc-700 rounded-xl text-sm text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#ff3600]/20 focus:border-[#ff3600] transition-colors appearance-none"
            >
              <option value="">Select a vehicle from our fleet...</option>
              {VEHICLES.map((v) => (
                <option key={v.id} value={v.name}>
                  {v.name} ({v.category})
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Message */}
        <div>
          <label className="block text-xs font-semibold text-gray-700 dark:text-zinc-300 uppercase tracking-wider mb-1.5">
            Your Message <span className="text-[#ff3600]">*</span>
          </label>
          <div className="relative">
            <div className="absolute top-3.5 left-3.5 pointer-events-none text-gray-400 dark:text-zinc-500">
              <MessageSquare className="w-4 h-4" />
            </div>
            <textarea
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              placeholder="Please let us know your intended rental dates, pickup requirements, or any specific requests..."
              className={`w-full pl-10 pr-4 py-3 bg-gray-50 dark:bg-zinc-900 border rounded-xl text-sm text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-[#ff3600]/20 focus:border-[#ff3600] transition-colors resize-none ${
                errors.message ? 'border-red-400' : 'border-gray-200 dark:border-zinc-700'
              }`}
            />
          </div>
          {errors.message && (
            <p className="mt-1 text-xs text-red-500 flex items-center space-x-1">
              <AlertCircle className="w-3.5 h-3.5" />
              <span>{errors.message}</span>
            </p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-3.5 px-6 rounded-xl font-bold text-sm uppercase tracking-wider text-white bg-[#0e131f] dark:bg-zinc-800 hover:bg-[#ff3600] dark:hover:bg-[#ff3600] transition-all duration-300 flex items-center justify-center space-x-2 shadow-md hover:shadow-[#ff3600]/25"
        >
          <span>Get In Touch</span>
          <Send className="w-4 h-4" />
        </button>
      </form>
    </div>
  );
}


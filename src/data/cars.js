// Local JavaScript data for vehicle inventory
// Exactly 5 vehicles provided by client
// Centralized data architecture ready for future admin dashboard & API integration

import camryMain from '../assets/images/cars/camry-main.jpg';
import camrySide from '../assets/images/cars/camry-side.jpg';
import camryRear from '../assets/images/cars/camry-rear.jpg';
import camryInterior from '../assets/images/cars/camry-interior.jpg';

import fortunerMain from '../assets/images/cars/fortuner-main.jpg';
import fortunerSide from '../assets/images/cars/fortuner-side.jpg';
import fortunerRear from '../assets/images/cars/fortuner-rear.jpg';
import fortunerInterior from '../assets/images/cars/fortuner-interior.jpg';

import innovaMain from '../assets/images/cars/innova-main.jpg';
import innovaSide from '../assets/images/cars/innova-side.jpg';
import innovaRear from '../assets/images/cars/innova-rear.jpg';
import innovaInterior from '../assets/images/cars/innova-interior.jpg';

import sequoiaMain from '../assets/images/cars/sequoia-main.jpg';
import sequoiaSide from '../assets/images/cars/sequoia-side.jpg';
import sequoiaRear from '../assets/images/cars/sequoia-rear.jpg';
import sequoiaInterior from '../assets/images/cars/sequoia-interior.jpg';

import yukonMain from '../assets/images/cars/yukon-main.jpg';
import yukonSide from '../assets/images/cars/yukon-side.jpg';
import yukonRear from '../assets/images/cars/yukon-rear.jpg';
import yukonInterior from '../assets/images/cars/yukon-interior.jpg';

export const VEHICLES = [
  {
    id: 'toyota-camry',
    slug: 'toyota-camry',
    name: 'Toyota Camry',
    category: 'Sedan',
    badge: 'Popular Executive Sedan',
    shortDescription: 'Experience comfortable and refined travel with the Toyota Camry. Its elegant sedan styling, spacious cabin and smooth driving experience make it a suitable choice for business trips, city journeys and everyday travel.',
    fullDescription: 'Experience comfortable and refined travel with the Toyota Camry. Its elegant sedan styling, spacious cabin and smooth driving experience make it a suitable choice for business trips, city journeys and everyday travel.',
    price: 'Contact for Price',
    priceSubtext: 'Daily, weekly and monthly hire available upon request',
    images: {
      main: camryMain,
      gallery: [
        camryMain,
        camrySide,
        camryRear,
        camryInterior
      ]
    },
    overview: {
      carType: 'Executive Sedan',
      modelYear: '2023',
      variant: '2.5L 4-Cylinder / Hybrid',
      mileage: 'Approx. 14–17 km/L',
      mileageShort: '14–17 km/L',
      fuelType: 'Petrol / Hybrid (Variant Dependent)',
      fuelTypeShort: 'Petrol/Hybrid',
      transmission: '8-Speed Automatic / e-CVT',
      transmissionShort: 'Automatic',
      seating: '5 Seats (Spacious Executive Cabin)',
      seatingShort: '5 Seats',
      driveType: 'Front-Wheel Drive (FWD)'
    },
    features: [
      'Comfortable Travel Experience',
      'Elegant Sedan Styling',
      'Spacious Cabin',
      'Suitable for Business Travel',
      'Smooth Everyday Journeys',
      'Practical Luggage Space'
    ]
  },
  {
    id: 'toyota-fortuner',
    slug: 'toyota-fortuner',
    name: 'Toyota Fortuner',
    category: 'SUV',
    badge: 'Versatile 7-Seater SUV',
    shortDescription: 'Discover confident and comfortable journeys with the Toyota Fortuner. Its bold SUV appearance, spacious interior and commanding road presence make it an excellent choice for family travel and long-distance journeys.',
    fullDescription: 'Discover confident and comfortable journeys with the Toyota Fortuner. Its bold SUV appearance, spacious interior and commanding road presence make it an excellent choice for family travel and long-distance journeys.',
    price: 'Contact for Price',
    priceSubtext: 'Daily, weekly and monthly hire available upon request',
    images: {
      main: fortunerMain,
      gallery: [
        fortunerMain,
        fortunerSide,
        fortunerRear,
        fortunerInterior
      ]
    },
    overview: {
      carType: 'Mid-Size Rugged SUV',
      modelYear: '2023',
      variant: '2.7L / 4.0L V6',
      mileage: 'Approx. 9–11 km/L',
      mileageShort: '9–11 km/L',
      fuelType: 'Petrol / Diesel (Variant Dependent)',
      fuelTypeShort: 'Petrol/Diesel',
      transmission: '6-Speed Automatic with Sequential Shift',
      transmissionShort: 'Automatic',
      seating: '7 Seats (3-Row Versatile Seating)',
      seatingShort: '7 Seats',
      driveType: '4WD / Rear-Wheel Drive (RWD)'
    },
    features: [
      'Bold SUV Styling',
      'Elevated Driving Position',
      'Spacious Interior',
      'Suitable for Long Journeys',
      'Family Travel Comfort',
      'Versatile Travel Experience'
    ]
  },
  {
    id: 'toyota-innova',
    slug: 'toyota-innova',
    name: 'Toyota Innova',
    category: 'MPV',
    badge: 'Family & Group Travel MPV',
    shortDescription: 'Make every journey comfortable with the Toyota Innova. Designed with practical space and versatile seating, it is a convenient choice for family outings, airport transfers and group travel.',
    fullDescription: 'Make every journey comfortable with the Toyota Innova. Designed with practical space and versatile seating, it is a convenient choice for family outings, airport transfers and group travel.',
    price: 'Contact for Price',
    priceSubtext: 'Daily, weekly and monthly hire available upon request',
    images: {
      main: innovaMain,
      gallery: [
        innovaMain,
        innovaSide,
        innovaRear,
        innovaInterior
      ]
    },
    overview: {
      carType: 'Premium Multi-Purpose Vehicle (MPV)',
      modelYear: '2023',
      variant: '2.0L Dual VVT-i / Hybrid',
      mileage: 'Approx. 11–14 km/L',
      mileageShort: '11–14 km/L',
      fuelType: 'Petrol / Hybrid (Variant Dependent)',
      fuelTypeShort: 'Petrol/Hybrid',
      transmission: 'Automatic (CVT / 6-Speed)',
      transmissionShort: 'Automatic',
      seating: '7–8 Seats (Configurable Passenger Cabin)',
      seatingShort: '7–8 Seats',
      driveType: 'Front-Wheel Drive (FWD)'
    },
    features: [
      'Practical MPV Design',
      'Comfortable Group Travel',
      'Versatile Interior Space',
      'Family-Friendly Design',
      'Convenient Airport Transfers',
      'Everyday Travel Comfort'
    ]
  },
  {
    id: 'toyota-sequoia',
    slug: 'toyota-sequoia',
    name: 'Toyota Sequoia',
    category: 'Full-size SUV',
    badge: 'Luxury Full-Size 3-Row SUV',
    shortDescription: 'Enjoy spacious premium travel with the Toyota Sequoia. Its full-size SUV design and generous cabin space make it a great choice for families and customers who prefer larger vehicles.',
    fullDescription: 'Enjoy spacious premium travel with the Toyota Sequoia. Its full-size SUV design and generous cabin space make it a great choice for families and customers who prefer larger vehicles.',
    price: 'Contact for Price',
    priceSubtext: 'Daily, weekly and monthly hire available upon request',
    images: {
      main: sequoiaMain,
      gallery: [
        sequoiaMain,
        sequoiaSide,
        sequoiaRear,
        sequoiaInterior
      ]
    },
    overview: {
      carType: 'Full-Size Luxury SUV',
      modelYear: '2023',
      variant: 'i-FORCE MAX 3.5L Twin-Turbo V6 Hybrid',
      mileage: 'Approx. 8–10 km/L',
      mileageShort: '8–10 km/L',
      fuelType: 'Twin-Turbo V6 Hybrid (i-FORCE MAX)',
      fuelTypeShort: 'Hybrid V6',
      transmission: '10-Speed Electronically Controlled Automatic',
      transmissionShort: '10-Spd Auto',
      seating: '7–8 Seats (3-Row Executive Seating)',
      seatingShort: '7–8 Seats',
      driveType: '4-Wheel Drive (4WD)'
    },
    features: [
      'Full-Size SUV Design',
      'Generous Cabin Space',
      'Premium Travel Experience',
      'Spacious Interior',
      'Suitable for Family Journeys',
      'Comfortable Long-Distance Travel'
    ]
  },
  {
    id: 'gmc-yukon-xl',
    slug: 'gmc-yukon-xl',
    name: 'GMC Yukon XL',
    category: 'Full-size SUV',
    badge: 'Executive Extended-Length SUV',
    shortDescription: 'Experience premium journeys with the GMC Yukon XL. Its impressive full-size SUV design, generous interior space and comfortable travel experience make it ideal for premium family and group transportation.',
    fullDescription: 'Experience premium journeys with the GMC Yukon XL. Its impressive full-size SUV design, generous interior space and comfortable travel experience make it ideal for premium family and group transportation.',
    price: 'Contact for Price',
    priceSubtext: 'Daily, weekly and monthly hire available upon request',
    images: {
      main: yukonMain,
      gallery: [
        yukonMain,
        yukonSide,
        yukonRear,
        yukonInterior
      ]
    },
    overview: {
      carType: 'Extended Full-Size Luxury SUV',
      modelYear: '2023',
      variant: '5.3L / 6.2L EcoTec3 V8',
      mileage: 'Approx. 7–9 km/L',
      mileageShort: '7–9 km/L',
      fuelType: 'EcoTec3 V8 Petrol',
      fuelTypeShort: 'V8 Petrol',
      transmission: '10-Speed Automatic with Precision Shift',
      transmissionShort: '10-Spd Auto',
      seating: '7–8 Seats (Extended Wheelbase Cabin)',
      seatingShort: '7–8 Seats',
      driveType: '4WD / All-Wheel Drive (AWD)'
    },
    features: [
      'Premium Full-Size SUV',
      'Generous Interior Space',
      'Luxury Travel Experience',
      'Spacious Passenger Cabin',
      'Suitable for Group Travel',
      'Comfortable Road Trips'
    ]
  }
];

// Helper functions for easy filtering and queries
export const getVehicleBySlug = (slug) => {
  return VEHICLES.find((vehicle) => vehicle.slug === slug);
};

export const getCategories = () => {
  return ['All Vehicles', 'Sedan', 'SUV', 'MPV', 'Full-size SUV'];
};

// Configurable contact information
export const CONTACT_INFO = {
  // 🇶🇦 Qatar Branch
  qatar: {
    country: 'Qatar',
    flag: '🇶🇦',
    display: '+974 3128 1336',
    tel: '+97431281336',
    whatsapp: '97431281336'
  },
  // 🇸🇦 Saudi Arabia Branch
  saudi: {
    country: 'Saudi Arabia',
    flag: '🇸🇦',
    display: '+966 53 053 6952',
    tel: '+966530536952',
    whatsapp: '966530536952'
  },
  // General / Default references
  phone: '+97431281336',
  phoneDisplay: '+974 3128 1336',
  email: 'mylimoaminlal@gmail.com',
  location: 'Doha, Qatar 🇶🇦',
  locationCity: 'Doha',
  locationCountry: 'Qatar',
  googleMapsUrl: 'https://maps.google.com/?q=Doha,+Qatar',
  googleMapsEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115456.40248232986!2d51.44195655!3d25.286106!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e45c534ffdce87f%3A0x44d9319f78cfd4b1!2sDoha%2C%20Qatar!5e0!3m2!1sen!2sqa!4v1700000000000!5m2!1sen!2sqa',
  hours: '24/7 Available for Bookings & Dispatch',
  whatsappNumber: '97431281336'
};

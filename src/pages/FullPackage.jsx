// src/components/FullDayTrips.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Star, ArrowRight, Clock, MapPin, 
  Waves, Ship, Camera, TreePalm, 
  Landmark, Sun, Store
} from 'lucide-react';

// ==========================================
// 1. DATA YA FULL-DAY TRIPS
// ==========================================
const fullDayTripsData = [
  {
    id: 'mnemba-stone-town-forodhani',
    badge: 'Popular',
    badgeColor: 'bg-[#F5B91B]',
    badgeTextColor: 'text-white',
    duration: 'Full Day',
    image: '/Trip/mnemba.jpeg', // Snorkeling/Turtle
    price: 70,
    title: 'Mnemba, Stone Town & Forodhani Trip',
    description: 'Snorkeling, history and sunset vibes in one day.',
    location: 'Mnemba • Stone Town • Forodhani',
    features: [
      { icon: <Waves size={18} />, label: 'Snorkeling' },
      { icon: <Landmark size={18} />, label: 'Historical Tour' },
      { icon: <Sun size={18} />, label: 'Sunset Views' }
    ],
    rating: 4.8,
    reviews: 320
  },
  {
    id: 'safari-blue',
    badge: 'Best Seller',
    badgeColor: 'bg-[#087443]',
    badgeTextColor: 'text-white',
    duration: 'Full Day',
    image: '/Trip/safari blue.jpeg',
    price: 65,
    title: 'Safari Blue Adventure',
    description: 'Sail, snorkel and relax on a stunning sandbank.',
    location: 'Kwale Island • Sandbank',
    features: [
      { icon: <Ship size={18} />, label: 'Dhow Cruise' },
      { icon: <Waves size={18} />, label: 'Snorkeling' },
      { icon: <TreePalm size={18} />, label: 'Sandbank' }
    ],
    rating: 4.9,
    reviews: 412
  },
  {
    id: 'stone-town-heritage',
    badge: 'Trending',
    badgeColor: 'bg-[#04A9E8]',
    badgeTextColor: 'text-white',
    duration: 'Full Day',
    image: '/Trip/stonetown.jpeg',
    price: 35,
    title: 'Stone Town Heritage Tour',
    description: 'Explore Zanzibar\'s rich history and culture.',
    location: 'Stone Town',
    features: [
      { icon: <Landmark size={18} />, label: 'Historic Sites' },
      { icon: <Camera size={18} />, label: 'Walking Tour' },
      { icon: <Store size={18} />, label: 'Photo Stops' }
    ],
    rating: 4.7,
    reviews: 275
  }
];

// ==========================================
// 2. COMPONENT KUU
// ==========================================
const FullDayTrips = () => {
  return (
    <section className="relative w-full bg-[#fdfbf7] py-20 font-sans overflow-hidden">
      
      {/* Mapambo ya Majani (Palm Shadows) - Nyuma */}
      <div className="absolute top-0 left-0 w-64 h-64 opacity-20 pointer-events-none -translate-x-1/4 -translate-y-1/4" style={{ backgroundImage: `url('https://www.transparentpng.com/thumb/palm-tree/palm-tree-transparent-image-2.png')`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat' }}></div>
      <div className="absolute top-0 right-0 w-64 h-64 opacity-20 pointer-events-none translate-x-1/4 -translate-y-1/4 rotate-45" style={{ backgroundImage: `url('https://www.transparentpng.com/thumb/palm-tree/palm-tree-transparent-image-2.png')`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat' }}></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 opacity-20 pointer-events-none -translate-x-1/4 translate-y-1/4" style={{ backgroundImage: `url('https://www.transparentpng.com/thumb/palm-tree/palm-tree-transparent-image-2.png')`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat' }}></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 opacity-20 pointer-events-none translate-x-1/4 translate-y-1/4 rotate-45" style={{ backgroundImage: `url('https://www.transparentpng.com/thumb/palm-tree/palm-tree-transparent-image-2.png')`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat' }}></div>

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 relative z-10">
        
        {/* ================= HEADER ================= */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-[#087443] bg-white text-[#087443] font-bold tracking-widest text-xs md:text-sm mb-6 shadow-sm">
            <TreePalm size={18} className="text-[#087443]" />
            FULL-DAY TRIPS
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#10243A] mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            Amazing Full-Day Trip Packages
          </h2>
          
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto italic">
            Experience the best of Zanzibar in one unforgettable day.
          </p>

          {/* Wavy Gold Decorative Underline */}
          <div className="flex justify-center mt-6">
             <svg width="160" height="15" viewBox="0 0 160 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 10C35 10 35 5 65 5C95 5 95 10 125 10C140 10 145 7 155 7" stroke="#F5B91B" strokeWidth="4" strokeLinecap="round"/>
             </svg>
          </div>
        </div>

        {/* ================= GRID YA KADI ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {fullDayTripsData.map((trip) => (
            <div 
              key={trip.id} 
              className="group bg-white rounded-2xl overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_50px_rgba(8,116,67,0.15)] transition-all duration-300 border border-gray-100 flex flex-col hover:-translate-y-2"
            >
              
              {/* Image Area */}
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={trip.image} 
                  alt={trip.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Badge ya Kushoto Juu */}
                <div className={`absolute top-4 left-4 ${trip.badgeColor} ${trip.badgeTextColor} text-xs font-bold px-4 py-1.5 rounded-full flex items-center gap-1.5 shadow-lg`}>
                  <Star size={12} fill="currentColor" />
                  {trip.badge}
                </div>

                {/* Muda wa Kulia Juu */}
                <div className="absolute top-4 right-4 bg-[#10243A]/80 backdrop-blur-sm text-white text-xs font-medium px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-lg">
                  <Clock size={12} />
                  {trip.duration}
                </div>

                {/* Bei (Price) - Kama Badge ya Njano Yenye Shape */}
                <div className="absolute bottom-4 right-4 bg-[#F5B91B] text-[#10243A] rounded-tl-xl rounded-br-xl rounded-tr-sm rounded-bl-sm shadow-lg p-3 px-4 text-center transform group-hover:scale-105 transition-transform duration-300">
                  <span className="text-[10px] uppercase block leading-none mb-1 font-bold">From</span>
                  <span className="text-2xl font-extrabold leading-none">${trip.price}</span>
                  <span className="text-[10px] block leading-none mt-1 font-semibold">/person</span>
                </div>
              </div>

              {/* Content Area */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-[#10243A] mb-2 group-hover:text-[#087443] transition-colors line-clamp-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                  {trip.title}
                </h3>
                
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {trip.description}
                </p>

                {/* Location */}
                <div className="flex items-center gap-1.5 text-sm font-semibold text-[#10243A] mb-6">
                  <MapPin size={16} className="text-[#087443]" />
                  {trip.location}
                </div>

                {/* Features (Icons za Mviringo) */}
                <div className="flex justify-between items-center mb-6 border-t border-b border-gray-100 py-4">
                  {trip.features.map((feature, index) => (
                    <div key={index} className="flex flex-col items-center gap-2">
                      <div className="w-12 h-12 rounded-full bg-[#f0f7f3] text-[#087443] flex items-center justify-center group-hover:bg-[#087443] group-hover:text-white transition-colors duration-300">
                        {feature.icon}
                      </div>
                      <span className="text-[11px] font-semibold text-gray-600 text-center">{feature.label}</span>
                    </div>
                  ))}
                </div>

                {/* Footer: Rating & Button */}
                <div className="mt-auto flex items-center justify-between">
                  <div className="flex items-center gap-1 text-sm font-bold text-[#10243A]">
                    <Star size={16} className="text-[#F5B91B]" fill="currentColor" />
                    <span>{trip.rating}</span>
                    <span className="text-gray-400 font-normal text-xs">({trip.reviews} reviews)</span>
                  </div>

                  <Link 
                    to={`/full-day-trip/${trip.id}`} 
                    className="flex items-center gap-2 bg-[#087443] text-white text-sm font-bold px-5 py-2.5 rounded-full hover:bg-green-800 transition-colors group/btn shadow-md"
                  >
                    View Details
                    <ArrowRight size={16} className="transform group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* ================= VIEW ALL BUTTON ================= */}
        <div className="text-center">
          <Link 
            to="/full-day-trips" 
            className="inline-flex items-center gap-2 bg-[#087443] text-white font-bold px-8 py-4 rounded-full hover:bg-green-800 transition-all duration-300 shadow-lg shadow-green-900/20"
          >
            View All Full-Day Trips
            <ArrowRight size={18} />
          </Link>
        </div>

      </div>
    </section>
  );
};

export default FullDayTrips;
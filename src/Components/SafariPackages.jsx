// src/pages/SafariPackages.jsx
import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { 
  Search, MapPin, Star, Clock, Users, CheckCircle2, 
  PawPrint, ShieldCheck, Headset, Gem, TreePalm, 
  MessageCircle, Mail, ArrowRight, CalendarDays, 
  ChevronRight, Camera, X, Flame, UserCheck, Compass
} from 'lucide-react';

// ==========================================
// 1. DATA YA SAFARI PACKAGES
// ==========================================
const safariCategories = [
  { id: 'serengeti', name: 'Serengeti Safaris', img: 'https://images.unsplash.com/photo-1546182990-dffeafbe841d?q=80&w=200&auto=format&fit=crop' },
  { id: 'ngorongoro', name: 'Ngorongoro Crater', img: 'https://images.unsplash.com/photo-1519066629447-267fffa62d4b?q=80&w=200&auto=format&fit=crop' },
  { id: 'tarangire', name: 'Tarangire Safari', img: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=200&auto=format&fit=crop' },
  { id: 'manyara', name: 'Lake Manyara Safari', img: 'https://images.unsplash.com/photo-1534567153574-2b12153a87f0?q=80&w=200&auto=format&fit=crop' },
  { id: 'selous', name: 'Selous Game Reserve', img: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=200&auto=format&fit=crop' },
  { id: 'custom', name: 'Custom Safaris', img: 'https://images.unsplash.com/photo-1521651201144-634f700b36ef?q=80&w=200&auto=format&fit=crop' },
];

const safariData = {
  'serengeti': {
    id: 'serengeti',
    title: 'Serengeti Classic Migration Safari',
    location: 'Tanzania',
    rating: 5.0,
    reviews: 124,
    price: 1450,
    duration: '5 Days / 4 Nights',
    group: '4x4 Safari Jeep',
    park: 'Serengeti National Park',
    description: 'Witness the world-famous Great Migration in the Serengeti! Millions of wildebeest and zebras crossing the endless plains, followed by Africa\'s top predators. This 5-day safari takes you to the heart of the action with luxury tented camp accommodation.',
    highlights: [
      'Great Migration viewing', 'Stunning landscapes',
      'Big Five sightings', 'Professional safari guide',
      'Luxury tented camp', 'Unforgettable experience'
    ],
    images: [
      'https://images.unsplash.com/photo-1546182990-dffeafbe841d?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1534567153574-2b12153a87f0?q=80&w=600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1521651201144-634f700b36ef?q=80&w=600&auto=format&fit=crop'
    ]
  },
  '1': {
    id: '1', title: 'Serengeti Classic Migration Safari', location: 'Serengeti, Tanzania', rating: 5.0, reviews: 378,
    price: 1450, duration: '4 Days / 3 Nights', group: '4x4 Safari Jeep', park: 'Serengeti National Park',
    description: 'Witness the Great Migration in the Serengeti with millions of wildebeest, zebra and luxury tented camps.',
    highlights: ['Great Migration viewing', 'Big Five sightings', 'Luxury tented camp', 'Professional safari guide'],
    images: ['https://images.unsplash.com/photo-1546182990-dffeafbe841d?q=80&w=1000&auto=format&fit=crop','https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=1000&auto=format&fit=crop','https://images.unsplash.com/photo-1534567153574-2b12153a87f0?q=80&w=1000&auto=format&fit=crop']
  },
  '2': {
    id: '2', title: 'Ultimate Tanzania Grand Safari', location: 'Northern Tanzania', rating: 5.0, reviews: 198,
    price: 3850, duration: '9 Days / 8 Nights', group: '4x4 Safari Jeep', park: 'Five National Parks',
    description: 'Explore Tarangire, Serengeti, Ngorongoro and Lake Natron on this ultimate Tanzania adventure.',
    highlights: ['Five national parks', 'Great Migration', 'Lake Natron', 'Luxury lodges'],
    images: ['https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=1000&auto=format&fit=crop','https://images.unsplash.com/photo-1521651201144-634f700b36ef?q=80&w=1000&auto=format&fit=crop','https://images.unsplash.com/photo-1546182990-dffeafbe841d?q=80&w=1000&auto=format&fit=crop']
  },
  '3': {
    id: '3', title: 'Serengeti & Ngorongoro Crater Safari', location: 'Northern Tanzania', rating: 4.9, reviews: 312,
    price: 1350, duration: '4 Days / 3 Nights', group: '4x4 Safari Jeep', park: 'Serengeti & Ngorongoro',
    description: 'Visit the iconic Serengeti plains and descend into the Ngorongoro Crater to experience the Big Five.',
    highlights: ['Serengeti National Park', 'Ngorongoro Crater descent', 'Big Five sightings', 'Private guide'],
    images: ['https://images.unsplash.com/photo-1534567153574-2b12153a87f0?q=80&w=1000&auto=format&fit=crop','https://images.unsplash.com/photo-1519066629447-267fffa62d4b?q=80&w=1000&auto=format&fit=crop','https://images.unsplash.com/photo-1546182990-dffeafbe841d?q=80&w=1000&auto=format&fit=crop']
  },
  '4': {
    id: '4', title: 'Classic Tanzania Northern Circuit Safari', location: 'Northern Tanzania', rating: 4.9, reviews: 267,
    price: 2250, duration: '6 Days / 5 Nights', group: '4x4 Safari Jeep', park: 'Northern Circuit',
    description: 'Explore Tarangire, Manyara, Serengeti and Ngorongoro in one unforgettable northern circuit journey.',
    highlights: ['Four iconic parks', 'Big Five', 'Great Migration', 'Comfortable lodges'],
    images: ['https://images.unsplash.com/photo-1521651201144-634f700b36ef?q=80&w=1000&auto=format&fit=crop','https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=1000&auto=format&fit=crop','https://images.unsplash.com/photo-1534567153574-2b12153a87f0?q=80&w=1000&auto=format&fit=crop']
  },
  '5': {
    id: '5', title: 'Ngorongoro Highlands & Crater Safari', location: 'Ngorongoro, Tanzania', rating: 4.9, reviews: 234,
    price: 980, duration: '3 Days / 2 Nights', group: '4x4 Safari Jeep', park: 'Ngorongoro Highlands',
    description: 'Enjoy a crater game drive, rim walk and authentic Maasai cultural experience in the Ngorongoro Highlands.',
    highlights: ['Crater game drive', 'Crater rim walk', 'Maasai culture', 'Wildlife viewing'],
    images: ['https://images.unsplash.com/photo-1519066629447-267fffa62d4b?q=80&w=1000&auto=format&fit=crop','https://images.unsplash.com/photo-1534567153574-2b12153a87f0?q=80&w=1000&auto=format&fit=crop','https://images.unsplash.com/photo-1521651201144-634f700b36ef?q=80&w=1000&auto=format&fit=crop']
  },
  '6': {
    id: '6', title: 'Serengeti Deep Wilderness Safari', location: 'Remote Serengeti, Tanzania', rating: 5.0, reviews: 156,
    price: 2650, duration: '6 Days / 5 Nights', group: '4x4 Safari Jeep', park: 'Remote Serengeti',
    description: 'Immerse yourself in remote Serengeti areas with walking safaris and authentic bush camping.',
    highlights: ['Remote Serengeti areas', 'Walking safari', 'Bush camping', 'Wildlife photography'],
    images: ['https://images.unsplash.com/photo-1456926631375-92c8ce872def?q=80&w=1000&auto=format&fit=crop','https://images.unsplash.com/photo-1546182990-dffeafbe841d?q=80&w=1000&auto=format&fit=crop','https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=1000&auto=format&fit=crop']
  },
};

// ==========================================
// 2. COMPONENT KUU
// ==========================================
const SafariPackages = () => {
  const { id } = useParams();
  const [activeCategory, setActiveCategory] = useState(id || '1');
  const tour = safariData[id || activeCategory] || safariData['1'];

  const [searchTerm, setSearchTerm] = useState('');

  // Pata related tours (zote isipokuwa hii ya sasa)
  const relatedTours = Object.values(safariData).filter(t => t.id !== (id || activeCategory)).slice(0, 3);

  return (
    <div className="min-h-screen bg-[#fcfdfa] font-sans pb-24 overflow-x-hidden">
      
      {/* ================= CSS KEYFRAMES ZA ANIMATION ================= */}
      <style>
        {`
          @keyframes fadeSlideDown {
            0% { opacity: 0; transform: translateY(-40px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          @keyframes fadeSlideUp {
            0% { opacity: 0; transform: translateY(40px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          @keyframes fadeSlideInLeft {
            0% { opacity: 0; transform: translateX(-40px); }
            100% { opacity: 1; transform: translateX(0); }
          }
          @keyframes fadeSlideInRight {
            0% { opacity: 0; transform: translateX(40px); }
            100% { opacity: 1; transform: translateX(0); }
          }
          @keyframes fadeIn {
            0% { opacity: 0; }
            100% { opacity: 1; }
          }
          .animate-hero-text {
            animation: fadeSlideUp 1s ease-out forwards;
          }
          .animate-slide-down {
            animation: fadeSlideDown 1s ease-out forwards;
          }
          .animate-slide-left {
            animation: fadeSlideInLeft 1.2s ease-out forwards;
          }
          .animate-slide-right {
            animation: fadeSlideInRight 1.2s ease-out forwards;
          }
          .animate-slow-fade {
            animation: fadeIn 2s ease-out forwards;
          }
        `}
      </style>

      {/* ================= 1. HERO SECTION ================= */}
      <div className="relative w-full h-[400px] md:h-[500px] bg-[#10243A] overflow-hidden flex items-center">
        {/* Background Image */}
        <img 
          src="https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=2000&auto=format&fit=crop" 
          alt="Tanzania Safari" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#10243A]/95 via-[#10243A]/70 to-transparent"></div>
        
        <div className="relative z-10 max-w-[1200px] mx-auto px-6 md:px-12 w-full">
          <div className="max-w-2xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#F5B91B]/50 bg-[#10243A]/80 text-[#F5B91B] font-bold tracking-widest text-xs md:text-sm mb-6 backdrop-blur-sm animate-slide-down">
              <PawPrint size={14} />
              EXPLORE TANZANIA
            </div>
            
            {/* Title */}
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight animate-hero-text" style={{ fontFamily: "'Playfair Display', serif", animationDelay: '200ms' }}>
              Our <span className="text-[#F5B91B]">Safari</span> Packages
            </h1>
            
            {/* Subtitle */}
            <p className="text-gray-200 text-base md:text-lg mb-8 max-w-lg animate-hero-text" style={{ animationDelay: '400ms' }}>
              Discover the wild beauty of Tanzania with our carefully crafted safari packages.
            </p>

            {/* Search Bar */}
            <div className="relative max-w-md animate-hero-text" style={{ animationDelay: '600ms' }}>
              <input 
                type="text" 
                placeholder="Search safari packages..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-28 py-3 rounded-full bg-white text-gray-800 text-sm focus:outline-none shadow-lg"
              />
              <Search size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
              <button className="absolute right-1.5 top-1/2 -translate-y-1/2 bg-[#F5B91B] text-[#10243A] font-bold px-6 py-2 rounded-full text-sm hover:bg-yellow-500 transition-colors">
                Search
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ================= 2. TRUST BADGES BAR ================= */}
      <div className="relative z-20 max-w-[1200px] mx-auto px-4 md:px-8 -mt-8">
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-4 flex flex-wrap justify-between items-center gap-4 animate-slide-down" style={{ animationDelay: '800ms' }}>
          {[
            { icon: <PawPrint size={24} />, text: 'Big Five Safaris' },
            { icon: <ShieldCheck size={24} />, text: 'Safe & Reliable' },
            { icon: <Headset size={24} />, text: '24/7 Support' },
            { icon: <Gem size={24} />, text: 'Best Price Guarantee' },
            { icon: <UserCheck size={24} />, text: 'Expert Guides' }
          ].map((item, idx) => (
            <div key={idx} className="flex items-center gap-2 text-sm font-semibold text-[#10243A]">
              <span className="text-[#087443]">{item.icon}</span>
              <span>{item.text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ================= 3. MAIN CONTENT (Sidebar, Details, Booking) ================= */}
      <div className="max-w-[1200px] mx-auto px-4 md:px-8 mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* LEFT: Sidebar Categories (Cols 3) */}
        <div className="lg:col-span-3 space-y-6 opacity-0 animate-slide-left" style={{ animationDelay: '300ms' }}>
          
          {/* Categories Card */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="bg-[#10243A] text-white py-3 px-5 flex items-center gap-2">
              <Compass size={18} className="text-[#F5B91B]" />
              <h3 className="font-bold text-sm">Safari Categories</h3>
            </div>
            <div className="p-3 space-y-1">
              {safariCategories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`w-full flex items-center gap-3 p-2 rounded-xl transition-all duration-300 ${
                    activeCategory === cat.id 
                      ? 'bg-[#087443]/10 border border-[#087443]/20' 
                      : 'hover:bg-gray-50 border border-transparent'
                  }`}
                >
                  <img src={cat.img} alt={cat.name} className="w-10 h-10 rounded-lg object-cover" />
                  <span className={`text-sm font-semibold ${activeCategory === cat.id ? 'text-[#087443]' : 'text-gray-700'}`}>
                    {cat.name}
                  </span>
                  {activeCategory === cat.id && <ChevronRight size={16} className="ml-auto text-[#087443]" />}
                </button>
              ))}
            </div>
          </div>

          {/* CTA Card */}
          <div className="relative rounded-2xl overflow-hidden shadow-lg h-48 group cursor-pointer">
            <img src="https://images.unsplash.com/photo-1519066629447-267fffa62d4b?q=80&w=600&auto=format&fit=crop" alt="Custom Safari" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <h4 className="font-bold text-lg leading-tight mb-1" style={{ fontFamily: "'Playfair Display', serif" }}>Plan Your Dream Safari</h4>
              <p className="text-xs text-gray-300 mb-3">Let us create a tailor-made safari experience for you.</p>
              <Link to="/contact" className="inline-flex items-center gap-1 bg-[#F5B91B] text-[#10243A] font-bold px-4 py-1.5 rounded-full text-xs hover:bg-yellow-500 transition-colors">
                Contact Us <ArrowRight size={12} />
              </Link>
            </div>
          </div>
        </div>

        {/* MIDDLE: Tour Details (Cols 5) */}
        <div className="lg:col-span-5 space-y-6 opacity-0 animate-slide-right" style={{ animationDelay: '400ms' }}>
          
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
            {/* Header */}
            <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
              <MapPin size={16} className="text-[#F5B91B]" /> {tour.location}
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-[#10243A] mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
              {tour.title}
            </h2>
            
            {/* Rating & Meta */}
            <div className="flex flex-wrap items-center gap-3 text-sm text-gray-600 mb-4">
              <span className="flex items-center gap-1"><Star size={16} className="text-[#F5B91B]" fill="currentColor" /> {tour.rating} ({tour.reviews} reviews)</span>
              <span className="flex items-center gap-1"><CalendarDays size={16} className="text-[#087443]" /> {tour.duration}</span>
              <span className="flex items-center gap-1"><MapPin size={16} className="text-[#087443]" /> {tour.park}</span>
            </div>

            {/* Description */}
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              {tour.description}
            </p>

            {/* Highlights */}
            <div className="mb-6">
              <h4 className="text-lg font-bold text-[#10243A] mb-3 flex items-center gap-2">
                <Star size={18} className="text-[#F5B91B]" /> Tour Highlights
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {tour.highlights.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                    <CheckCircle2 size={16} className="text-[#087443] shrink-0" /> {item}
                  </div>
                ))}
              </div>
            </div>

            {/* Gallery Grid */}
            <div className="grid grid-cols-4 gap-2">
              {tour.images.map((img, idx) => (
                <div key={idx} className={`relative rounded-lg overflow-hidden h-20 ${idx === 0 ? 'col-span-2 row-span-2 h-auto' : ''}`}>
                  <img src={img} alt={`Gallery ${idx}`} className="w-full h-full object-cover hover:scale-110 transition-transform duration-500 cursor-pointer" />
                  {idx === 0 && (
                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center hover:bg-black/50 transition-colors cursor-pointer">
                      <span className="text-white text-xs font-bold flex items-center gap-1"><Camera size={14} /> View Gallery</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT: Booking Card (Cols 4) */}
        <div className="lg:col-span-4 opacity-0 animate-slide-right" style={{ animationDelay: '600ms' }}>
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden sticky top-24">
            
            {/* Popular Choice Badge */}
            <div className="bg-[#087443] text-white text-center py-2 text-xs font-bold flex items-center justify-center gap-1">
              <Flame size={14} className="text-[#F5B91B]" /> Popular Choice
            </div>

            <div className="p-6">
              {/* Price */}
              <div className="text-center mb-4">
                <span className="text-4xl font-bold text-[#10243A]">${tour.price.toLocaleString()}.00</span>
                <span className="text-sm text-gray-500 font-medium"> / person</span>
                <div className="flex items-center justify-center gap-1 text-xs text-gray-500 mt-1">
                  <Star size={12} className="text-[#F5B91B]" fill="currentColor" /> {tour.rating} ({tour.reviews} reviews)
                </div>
              </div>

              {/* Meta Info */}
              <div className="space-y-2 mb-6">
                <div className="flex items-center justify-between bg-gray-50 p-3 rounded-xl border border-gray-100 text-sm">
                  <span className="flex items-center gap-2 font-semibold text-gray-700"><CalendarDays size={16} className="text-[#087443]" /> Duration</span>
                  <span className="text-gray-600">{tour.duration}</span>
                </div>
                <div className="flex items-center justify-between bg-gray-50 p-3 rounded-xl border border-gray-100 text-sm">
                  <span className="flex items-center gap-2 font-semibold text-gray-700"><Users size={16} className="text-[#087443]" /> Group Size</span>
                  <span className="text-gray-600">Min 2 People</span>
                </div>
                <div className="flex items-center justify-between bg-gray-50 p-3 rounded-xl border border-gray-100 text-sm">
                  <span className="flex items-center gap-2 font-semibold text-gray-700"><ShieldCheck size={16} className="text-[#087443]" /> Cancellation</span>
                  <span className="text-gray-600">Free Cancellation</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3">
                <button 
                  onClick={() => {
                    const message = encodeURIComponent(`Hello! I am interested in the "${tour.title}" package. Please provide more details.`);
                    window.open(`https://wa.me/255789922539?text=${message}`, '_blank');
                  }}
                  className="w-full flex items-center justify-center gap-2 bg-[#25D366] text-white font-bold py-3.5 rounded-xl hover:bg-[#1eb954] transition shadow-lg"
                >
                  <MessageCircle size={20} /> Book via WhatsApp
                </button>
                
                <div className="flex items-center gap-4 my-2">
                  <div className="flex-grow h-px bg-gray-200"></div>
                  <span className="text-xs text-gray-400 font-medium">— OR —</span>
                  <div className="flex-grow h-px bg-gray-200"></div>
                </div>

                <Link to="/contact" className="w-full flex items-center justify-center gap-2 bg-[#10243A] text-white font-bold py-3.5 rounded-xl hover:bg-blue-900 transition">
                  <Mail size={18} /> Request a Quote
                </Link>
              </div>

              {/* Bottom Help */}
              <div className="mt-6 bg-[#f0f7f3] p-3 rounded-xl border border-[#087443]/10 flex items-center gap-3">
                <Headset size={24} className="text-[#087443] shrink-0" />
                <div>
                  <h5 className="text-xs font-bold text-[#10243A]">Have Questions?</h5>
                  <a href="https://wa.me/255789922539" className="text-[11px] text-[#087443] font-semibold flex items-center gap-1 hover:underline">
                    Chat with us on WhatsApp <ChevronRight size={12} />
                  </a>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
      
      {/* ================= 4. WHY CHOOSE US ================= */}
      <div className="max-w-[1200px] mx-auto px-4 md:px-8 mt-16 text-center">
         <h2 className="text-2xl font-bold text-[#10243A] mb-8" style={{ fontFamily: "'Playfair Display', serif" }}>
            Why Choose Our Safari Packages?
         </h2>
         <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: <ShieldCheck size={32} />, title: 'Safe Travel', desc: 'Your safety is our priority' },
              { icon: <UserCheck size={32} />, title: 'Expert Guides', desc: 'Local knowledge & experience' },
              { icon: <Gem size={32} />, title: 'Best Value', desc: 'Luxury at affordable prices' },
              { icon: <PawPrint size={32} />, title: 'Wildlife Focus', desc: 'Authentic animal encounters' }
            ].map((item, idx) => (
              <div key={idx} className="flex flex-col items-center p-4">
                <div className="w-14 h-14 rounded-full bg-[#087443]/10 text-[#087443] flex items-center justify-center mb-3">
                  {item.icon}
                </div>
                <h4 className="font-bold text-sm text-[#10243A] mb-1">{item.title}</h4>
                <p className="text-xs text-gray-500">{item.desc}</p>
              </div>
            ))}
         </div>
      </div>

      {/* ================= 5. RELATED TOURS (MPYA) ================= */}
      <div className="max-w-[1200px] mx-auto px-4 md:px-8 mt-20">
        <div className="flex justify-between items-end mb-8 border-b border-gray-200 pb-4">
          <div>
            <span className="text-[#087443] text-xs font-bold tracking-widest uppercase">MORE SAFARI OPTIONS</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#10243A] mt-2" style={{ fontFamily: "'Playfair Display', serif" }}>
              Related Safaris
            </h2>
          </div>
          <Link to="/safari-packages" className="hidden md:flex items-center gap-2 text-sm font-bold text-[#087443] hover:text-[#F5B91B] transition-colors">
            View All Packages <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {relatedTours.map((item, idx) => (
            <Link 
              key={item.id} 
              to={`/safari-packages/${item.id}`}
              className={`group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 opacity-0 animate-slide-right`}
              style={{ animationDelay: `${idx * 200}ms` }}
            >
              <div className="relative h-48 overflow-hidden">
                <img src={item.images[0]} alt={item.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute top-4 left-4 bg-[#F5B91B] text-[#10243A] text-xs font-bold px-3 py-1 rounded-md">
                  {item.duration}
                </div>
                <div className="absolute bottom-4 right-4 bg-black/60 backdrop-blur-sm text-white text-xs font-bold px-3 py-1 rounded-md">
                  ${item.price.toLocaleString()}
                </div>
              </div>
              <div className="p-5">
                <div className="flex items-center gap-1 text-xs text-gray-500 mb-2">
                  <MapPin size={12} className="text-[#087443]" /> {item.park}
                </div>
                <h3 className="text-lg font-bold text-[#10243A] mb-2 group-hover:text-[#087443] transition-colors line-clamp-1" style={{ fontFamily: "'Playfair Display', serif" }}>
                  {item.title}
                </h3>
                <div className="flex items-center justify-between mt-4 pt-3 border-t border-gray-100">
                  <div className="flex items-center gap-1 text-sm font-semibold text-gray-700">
                    <Star size={14} className="text-[#F5B91B]" fill="currentColor" /> {item.rating} ({item.reviews})
                  </div>
                  <span className="text-[#087443] text-sm font-bold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    View Details <ArrowRight size={14} />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
        
        {/* Mobile View All Button */}
        <div className="mt-8 text-center md:hidden">
          <Link to="/safari-packages" className="inline-flex items-center gap-2 bg-[#087443] text-white font-bold px-8 py-3 rounded-full hover:bg-green-800 transition">
            View All Packages <ArrowRight size={18} />
          </Link>
        </div>
      </div>

    </div>
  );
};

export default SafariPackages;
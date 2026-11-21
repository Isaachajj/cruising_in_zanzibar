// src/pages/TourDetails.jsx
import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { 
  MapPin, Clock, Star, Users, Calendar, 
  CheckCircle2, ChevronLeft, ChevronRight, 
  MessageCircle, Mail, Heart, ArrowRight,
  ShieldCheck, Headset, Gem, TreePalm, Handshake, Hotel,
  User, Phone
} from 'lucide-react';

// ==========================================
// 1. DATA YA TOURS ZOTE
// ==========================================
const toursData = {
  '1': {
    id: '1',
    title: 'Mnemba Island Dolphin & Snorkeling',
    location: 'Mnemba Atoll, Zanzibar', rating: 4.9, reviews: 684,
    price: 45, duration: '5 Hours', group: 'Private & Group', age: 'All Ages',
    description: 'Swim with wild dolphins and explore vibrant coral reefs in the crystal-clear waters around Mnemba Atoll.',
    features: ['Dolphin encounter', 'Snorkeling equipment', 'Fresh fruits & drinks', 'Boat transfers included'],
    images: ['/Trip/mnemba.jpeg','/Trip/kizimkazi.jpg','/Trip/paje.jpeg']
  },
  '2': {
    id: '2',
    title: 'Stone Town Heritage Tour',
    location: 'Stone Town, Zanzibar', rating: 4.8, reviews: 512,
    price: 35, duration: '3 Hours', group: 'Private & Group', age: 'All Ages',
    description: 'Discover Zanzibar history through narrow alleys, historic landmarks, lively markets and authentic cultural stories.',
    features: ['Historic sites', 'Professional local guide', 'Walking tour', 'Photo stops'],
    images: ['/Trip/stonetown.jpeg','/Trip/forodhani.jpeg','/Trip/prisonIland.jpg']
  },
  '3': {
    id: '3',
    title: 'Safari Blue Adventure',
    location: 'Menai Bay, Zanzibar', rating: 4.9, reviews: 723,
    price: 85, duration: 'Full Day', group: 'Private & Group', age: 'All Ages',
    description: 'Set sail on a traditional dhow for snorkeling, swimming, island relaxation and a fresh seafood lunch.',
    features: ['Traditional dhow sailing', 'Snorkeling', 'Seafood lunch', 'Sandbank relaxation'],
    images: ['/Trip/safari blue.jpeg','/Trip/mnemba.jpeg','/Trip/paje.jpeg']
  },
  '4': {
    id: '4',
    title: 'Jozani Forest & Red Colobus',
    location: 'Jozani Forest, Zanzibar', rating: 4.7, reviews: 345,
    price: 60, duration: '6 Hours', group: 'Private & Group', age: 'All Ages',
    description: 'Walk through Zanzibar native forest and meet the rare red colobus monkeys in their natural habitat.',
    features: ['Nature walk', 'Red colobus wildlife', 'Mangrove boardwalk', 'Professional guide'],
    images: ['/Trip/jozani.jpg','/Trip/kizimkazi.jpg','/Trip/prisonIland.jpg']
  },
  '5': {
    id: '5',
    title: 'Sunset Dhow Cruise',
    location: 'Nungwi & Kendwa, Zanzibar', rating: 5.0, reviews: 210,
    price: 120, duration: '4 Hours', group: 'Private & Group', age: 'All Ages',
    description: 'Cruise across the Indian Ocean at sunset aboard a traditional dhow, with drinks and a romantic atmosphere.',
    features: ['Sunset dhow cruise', 'Drinks included', 'Ocean photography', 'Traditional sailing'],
    images: ['/Trip/kendwa.jpeg','/Trip/paje.jpeg','/Trip/safari blue.jpeg']
  },
  '6': {
    id: '6',
    title: 'Nungwi Beach & Kitesurfing',
    location: 'Nungwi Beach, Zanzibar', rating: 4.8, reviews: 456,
    price: 95, duration: '8 Hours', group: 'Private & Group', age: 'All Ages',
    description: 'Enjoy Nungwi white sandy beaches and choose between an exciting kitesurfing lesson or a relaxing beach day.',
    features: ['Kitesurfing lesson', 'Beach relaxation', 'Water sports', 'Professional instructor'],
    images: ['/Trip/kendwa.jpeg','/Trip/paje.jpeg','/Trip/kizimkazi.jpg']
  }
};

// ==========================================
// 2. COMPONENT KUU
// ==========================================
const TourDetails = () => {
  const { id } = useParams();
  const tour = toursData[id];

  if (!tour) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center px-6 text-center">
        <h1 className="text-3xl font-bold text-[#10243A] mb-3">Tour not found</h1>
        <Link to="/card-tour" className="bg-[#087443] text-white px-6 py-3 rounded-full font-bold">View All Tours</Link>
      </div>
    );
  }

  const [currentImage, setCurrentImage] = useState(0);
  
  const [formData, setFormData] = useState({
    date: '',
    guests: '1 Person',
    fullName: '',
    email: '',
    phone: '',
    specialRequests: ''
  });

  const whatsappNumber = '255789922539';

  const nextImage = () => setCurrentImage((prev) => (prev + 1) % tour.images.length);
  const prevImage = () => setCurrentImage((prev) => (prev - 1 + tour.images.length) % tour.images.length);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleBookWhatsApp = (e) => {
    e.preventDefault();
    const message = encodeURIComponent(
      `Hello! I want to book the "${tour.title}".\n\n` +
      `📅 Date: ${formData.date || 'Not set'}\n` +
      `👥 Guests: ${formData.guests}\n` +
      `👤 Full Name: ${formData.fullName || 'Not set'}\n` +
      `📧 Email: ${formData.email || 'Not set'}\n` +
      `📱 Phone/WhatsApp: ${formData.phone || 'Not set'}\n` +
      `📝 Special Requests: ${formData.specialRequests || 'None'}\n\n` +
      `Please confirm availability and price.`
    );
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-[#fcfdfa] font-sans pb-24 overflow-x-hidden">
      
      {/* ================= CSS KEYFRAMES ZA ANIMATION ================= */}
      <style>
        {`
          @keyframes fadeSlideUp {
            0% { opacity: 0; transform: translateY(60px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          @keyframes fadeSlideInRight {
            0% { opacity: 0; transform: translateX(60px); }
            100% { opacity: 1; transform: translateX(0); }
          }
          @keyframes fadeSlideInLeft {
            0% { opacity: 0; transform: translateX(-60px); }
            100% { opacity: 1; transform: translateX(0); }
          }
          @keyframes fadeIn {
            0% { opacity: 0; }
            100% { opacity: 1; }
          }
          .animate-slow-up {
            animation: fadeSlideUp 1.5s ease-out forwards;
          }
          .animate-slow-right {
            animation: fadeSlideInRight 1.5s ease-out forwards;
          }
          .animate-slow-left {
            animation: fadeSlideInLeft 1.5s ease-out forwards;
          }
          .animate-slow-fade {
            animation: fadeIn 2s ease-out forwards;
          }
        `}
      </style>

      {/* ================= HERO HEADER ================= */}
      <div className="relative w-full h-[300px] md:h-[400px] bg-[#10243A] overflow-hidden flex items-center justify-center">
        <img 
          src={tour.images[0]} 
          alt="Zanzibar" 
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#10243A] to-transparent"></div>
        
        <div className="relative z-10 text-center px-4 mt-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#F5B91B]/50 bg-black/30 text-[#F5B91B] font-bold tracking-widest text-xs md:text-sm mb-4 backdrop-blur-sm">
            <MapPin size={14} />
            EXPLORE ZANZIBAR
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            Our <span className="text-[#F5B91B]">Tours</span>
          </h1>
          <p className="text-gray-200 text-sm md:text-base">
            Discover the best tours and experiences in Zanzibar & Tanzania
          </p>
        </div>
      </div>

      {/* ================= TOUR MAIN CARD ================= */}
      <div className="max-w-[1200px] mx-auto px-4 md:px-8 -mt-10 relative z-20">
        <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden opacity-0 animate-slow-up">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
            
            {/* LEFT: Picha & Gallery (Cols 7) */}
            <div className="lg:col-span-7 p-6 md:p-8">
              
              <div className="inline-flex items-center gap-1.5 bg-[#F5B91B] text-[#10243A] text-xs font-bold px-3 py-1.5 rounded-md mb-4">
                <Star size={12} fill="currentColor" /> Popular Tour
              </div>

              <div className="relative w-full h-[250px] md:h-[350px] rounded-xl overflow-hidden mb-4 group">
                <img 
                  src={tour.images[currentImage]} 
                  alt={tour.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <button onClick={prevImage} className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition">
                  <ChevronLeft size={20} />
                </button>
                <button onClick={nextImage} className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition">
                  <ChevronRight size={20} />
                </button>
              </div>

              <div className="grid grid-cols-4 gap-2">
                {tour.images.map((img, idx) => (
                  <div 
                    key={idx} 
                    onClick={() => setCurrentImage(idx)}
                    className={`relative h-16 md:h-20 rounded-lg overflow-hidden cursor-pointer border-2 transition-all ${currentImage === idx ? 'border-[#087443] scale-105' : 'border-transparent opacity-70 hover:opacity-100'}`}
                  >
                    <img src={img} alt={`Thumb ${idx}`} className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <h2 className="text-2xl md:text-3xl font-bold text-[#10243A] mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                  {tour.title}
                </h2>
                
                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-4">
                  <span className="flex items-center gap-1"><MapPin size={16} className="text-[#087443]" /> {tour.location}</span>
                  <span className="flex items-center gap-1"><Star size={16} className="text-[#F5B91B]" fill="currentColor" /> {tour.rating} ({tour.reviews} reviews)</span>
                </div>

                <p className="text-gray-600 leading-relaxed mb-6 text-sm md:text-base">
                  {tour.description}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                  {tour.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm font-medium text-gray-700">
                      <CheckCircle2 size={18} className="text-[#087443] shrink-0" />
                      {feature}
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap items-center gap-4 text-sm font-semibold text-gray-700 bg-gray-50 p-3 rounded-xl border border-gray-100">
                  <span className="flex items-center gap-1.5"><Clock size={16} className="text-[#087443]" /> {tour.duration}</span>
                  <span className="flex items-center gap-1.5"><Users size={16} className="text-[#087443]" /> {tour.group}</span>
                  <span className="flex items-center gap-1.5"><Heart size={16} className="text-[#087443]" /> {tour.age}</span>
                </div>
              </div>
            </div>

            {/* RIGHT: Booking Card */}
            <div className="lg:col-span-5 bg-[#f8fbf9] p-6 md:p-8 border-l border-gray-100 flex flex-col opacity-0 animate-slow-right" style={{ animationDelay: '300ms' }}>
              
              {/* Kichwa cha Booking */}
              <div className="bg-[#087443] rounded-xl p-5 text-center mb-5">
                <h3 className="text-xl font-bold text-white mb-1">Book This Tour</h3>
                <p className="text-xs text-green-100">Secure your spot today!</p>
              </div>

              {/* Muda na Bei */}
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-1.5 text-sm font-semibold text-gray-700">
                  <Clock size={16} className="text-[#087443]" /> {tour.duration}
                </div>
                <div className="text-right">
                  <span className="text-3xl font-bold text-[#087443]">${tour.price}.00</span>
                  <span className="text-xs text-gray-500 font-medium"> / person</span>
                </div>
              </div>

              {/* Vitufe vya Meta */}
              <div className="grid grid-cols-3 gap-2 mb-5">
                <div className="flex flex-col items-center justify-center bg-white border border-gray-100 rounded-lg p-2 text-center shadow-sm">
                  <ShieldCheck size={18} className="text-[#087443] mb-1" />
                  <span className="text-[10px] font-bold text-gray-700">Secure</span>
                </div>
                <div className="flex flex-col items-center justify-center bg-white border border-gray-100 rounded-lg p-2 text-center shadow-sm">
                  <Headset size={18} className="text-[#087443] mb-1" />
                  <span className="text-[10px] font-bold text-gray-700">24/7 Support</span>
                </div>
                <div className="flex flex-col items-center justify-center bg-white border border-gray-100 rounded-lg p-2 text-center shadow-sm">
                  <Gem size={18} className="text-[#087443] mb-1" />
                  <span className="text-[10px] font-bold text-gray-700">Licensed</span>
                </div>
              </div>

              {/* Accommodation Info */}
              <div className="flex items-center gap-2 bg-[#F5B91B]/10 border border-[#F5B91B]/30 p-3 rounded-lg mb-5">
                <Hotel size={20} className="text-[#F5B91B]" />
                <span className="text-xs font-semibold text-[#10243A]">Accommodation can be arranged upon request.</span>
              </div>

              {/* FOMU YA BOOKING */}
              <form onSubmit={handleBookWhatsApp} className="space-y-3 mb-5">
                
                {/* Tarehe na Idadi ya Wageni */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="relative">
                    <label className="block text-[10px] font-bold text-[#10243A] mb-1 ml-1">Select Date</label>
                    <div className="relative">
                      <input 
                        type="date" 
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        className="w-full pl-10 pr-3 py-3 rounded-xl border border-gray-200 bg-white text-sm focus:outline-none focus:border-[#087443]"
                      />
                      <Calendar size={18} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
                    </div>
                  </div>
                  <div className="relative">
                    <label className="block text-[10px] font-bold text-[#10243A] mb-1 ml-1">Guests</label>
                    <div className="relative">
                      <select 
                        name="guests"
                        value={formData.guests}
                        onChange={handleChange}
                        className="w-full pl-10 pr-3 py-3 rounded-xl border border-gray-200 bg-white text-sm focus:outline-none focus:border-[#087443] appearance-none"
                      >
                        <option>1 Person</option>
                        <option>2 People</option>
                        <option>3 People</option>
                        <option>4 People</option>
                        <option>5+ People</option>
                      </select>
                      <Users size={18} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
                    </div>
                  </div>
                </div>

                {/* Jina, Email, Simu */}
                <div className="relative">
                  <input 
                    required type="text" name="fullName" value={formData.fullName} onChange={handleChange}
                    placeholder="Full Name *" 
                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 bg-white text-sm focus:outline-none focus:border-[#087443]"
                  />
                  <User size={18} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
                </div>

                <div className="relative">
                  <input 
                    required type="email" name="email" value={formData.email} onChange={handleChange}
                    placeholder="Email Address *" 
                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 bg-white text-sm focus:outline-none focus:border-[#087443]"
                  />
                  <Mail size={18} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
                </div>

                <div className="relative">
                  <input 
                    required type="tel" name="phone" value={formData.phone} onChange={handleChange}
                    placeholder="Phone / WhatsApp *" 
                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 bg-white text-sm focus:outline-none focus:border-[#087443]"
                  />
                  <Phone size={18} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
                </div>

                {/* Special Requests */}
                <div className="relative">
                  <textarea 
                    name="specialRequests" value={formData.specialRequests} onChange={handleChange}
                    rows="2" placeholder="Special Requests (optional)" 
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-sm focus:outline-none focus:border-[#087443] resize-none"
                  />
                </div>

                <button 
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 bg-[#25D366] text-white font-bold py-3.5 rounded-full hover:bg-[#1eb954] transition shadow-lg"
                >
                  <MessageCircle size={20} /> Book via WhatsApp
                </button>
              </form>

              <div className="flex items-center gap-4 my-2">
                <div className="flex-grow h-px bg-gray-200"></div>
                <span className="text-xs text-gray-400 font-medium">— or —</span>
                <div className="flex-grow h-px bg-gray-200"></div>
              </div>

              <Link to="/contact" className="w-full flex items-center justify-center gap-2 bg-white border-2 border-[#087443] text-[#087443] font-bold py-3.5 rounded-full hover:bg-[#087443] hover:text-white transition">
                <Mail size={18} /> Request Quote
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* ================= TRUST BADGES ================= */}
      <div className="max-w-[1200px] mx-auto px-4 md:px-8 mt-12 opacity-0 animate-slow-fade" style={{ animationDelay: '600ms' }}>
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 flex flex-wrap justify-between items-center gap-6">
          {[
            { icon: <ShieldCheck size={28} />, title: 'Secure Booking', sub: 'Protected' },
            { icon: <Headset size={28} />, title: '24/7 Support', sub: 'Always Available' },
            { icon: <Gem size={28} />, title: 'Licensed Operator', sub: 'Trusted Local' },
            { icon: <TreePalm size={28} />, title: 'Authentic Zanzibar', sub: 'Experiences' },
            { icon: <Handshake size={28} />, title: 'Best Price', sub: 'Guarantee' }
          ].map((item, idx) => (
            <div key={idx} className="flex items-center gap-3">
              <div className="text-[#087443]">{item.icon}</div>
              <div>
                <h5 className="text-sm font-bold text-[#10243A]">{item.title}</h5>
                <p className="text-xs text-gray-500">{item.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ================= RELATED TOURS ================= */}
      <div className="max-w-[1200px] mx-auto px-4 md:px-8 mt-16">
        <div className="text-center mb-8">
          <span className="text-[#087443] text-xs font-bold tracking-widest uppercase">MORE AMAZING TOURS</span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#10243A] mt-2" style={{ fontFamily: "'Playfair Display', serif" }}>
            Related Tours
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { id: '6', title: 'Nungwi Beach & Kitesurfing', desc: 'Beach day & water sports', img: '/Trip/kendwa.jpeg' },
            { id: '2', title: 'Stone Town Cultural Tour', desc: 'Explore rich history', img: '/Trip/stonetown.jpeg' },
            { id: '4', title: 'Jozani Forest Adventure', desc: 'Experience wildlife', img: '/Trip/jozani.jpg' },
            { id: '3', title: 'Safari Blue Adventure', desc: 'Discover ocean beauty', img: '/Trip/safari blue.jpeg' },
          ].map((item, idx) => (
            <Link 
              to={`/tour/${item.id}`} 
              key={idx} 
              className={`group relative h-48 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 opacity-0 ${idx % 2 === 0 ? 'animate-slow-left' : 'animate-slow-right'}`}
              style={{ animationDelay: `${idx * 200}ms` }}
            >
              <img src={item.img} alt={item.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 w-full p-4 flex justify-between items-end">
                <div>
                  <h3 className="text-white font-bold text-lg leading-tight mb-1">{item.title}</h3>
                  <p className="text-gray-300 text-xs">{item.desc}</p>
                </div>
                <div className="w-8 h-8 rounded-full bg-[#087443] text-white flex items-center justify-center shrink-0 group-hover:bg-[#F5B91B] group-hover:text-[#10243A] transition-colors">
                  <ArrowRight size={16} />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

    </div>
  );
};

export default TourDetails;
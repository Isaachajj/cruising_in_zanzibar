// src/pages/Destination.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  MapPin, ArrowRight, Search, Compass, 
  TreePalm, Waves, Landmark, Sun, Utensils, ChevronLeft, ChevronRight
} from 'lucide-react';

// ==========================================
// 1. DATA YA DESTINATIONS (12 kwa jumla)
// ==========================================
const destinationsData = [
  {
    id: 'jozani-forest',
    name: 'Jozani Forest',
    subtitle: 'Home to red colobus monkeys',
    category: 'Nature',
    image: '/Trip/jozani.jpg'
  },
  {
    id: 'kendwa',
    name: 'Kendwa',
    subtitle: 'Famous for full moon parties',
    category: 'Beaches',
    image: '/Trip/kendwa.jpeg'
  },
  {
    id: 'kizimkazi',
    name: 'Kizimkazi',
    subtitle: 'Dolphin watching destination',
    category: 'Beaches',
    image: '/Trip/kizimkazi.jpg'
  },
  {
    id: 'lake-manyara',
    name: 'Lake Manyara National Park',
    subtitle: 'Tree-climbing lions',
    category: 'Safari',
    image: '/Trip/jozani.jpg'
  },
  {
    id: 'mikumi',
    name: 'Mikumi National Park',
    subtitle: 'Wildlife and savannah',
    category: 'Safari',
    image: '/Trip/kizimkazi.jpg'
  },
  {
    id: 'mnemba-island',
    name: 'Mnemba Island',
    subtitle: 'Private island with amazing marine life',
    category: 'Islands',
    image: '/Trip/mnemba.jpeg'
  },
  {
    id: 'mount-kilimanjaro',
    name: 'Mount Kilimanjaro',
    subtitle: 'The roof of Africa',
    category: 'Safari',
    image: '/Trip/mnemba.jpeg'
  },
  {
    id: 'ngorongoro-crater',
    name: 'Ngorongoro Crater',
    subtitle: 'Crater wildlife paradise',
    category: 'Safari',
    image: '/Trip/safari blue.jpeg'
  },
  {
    id: 'prison-island',
    name: 'Prison Island',
    subtitle: 'Giant Aldabra tortoises',
    category: 'Islands',
    image: '/Trip/prisonIland.jpg'
  },
  {
    id: 'stone-town',
    name: 'Stone Town',
    subtitle: 'UNESCO World Heritage Site',
    category: 'Cultural',
    image: '/Trip/stonetown.jpeg'
  },
  {
    id: 'nungwi-beach',
    name: 'Nungwi Beach',
    subtitle: 'Stunning white sands & sunsets',
    category: 'Beaches',
    image: '/Trip/kendwa.jpeg'
  },
  {
    id: 'the-rock',
    name: 'The Rock Restaurant',
    subtitle: 'Iconic ocean dining experience',
    category: 'Dining',
    image: '/Trip/forodhani.jpeg'
  }
];

// ==========================================
// 2. COMPONENT KUU (Destination)
// ==========================================
const Destination = ({ showHero = true }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [currentSlide, setCurrentSlide] = useState(0);

  const categories = ['All', 'Beaches', 'Cultural', 'Islands', 'Nature', 'Safari', 'Dining'];

  const heroSlides = [
    { image: '/slider/slider11.jpeg', title: 'Discover Zanzibar', subtitle: 'Beaches, culture and unforgettable island experiences' },
    { image: '/slider/slider22.jpeg', title: 'Explore Stone Town', subtitle: 'History, traditions and stories at every corner' },
    { image: '/slider/slider33.jpg', title: 'Meet African Wildlife', subtitle: 'Safari adventures across Tanzania' },
    { image: '/slider/slider44.jpeg', title: 'Relax at Paradise Beaches', subtitle: 'Crystal water and peaceful island sunsets' },
    { image: '/slider/lider55.webp', title: 'Experience Local Adventures', subtitle: 'Tours crafted by our local experts' }
  ];

  // Filter logic
  const filteredDestinations = destinationsData.filter(dest => {
    const matchesSearch = dest.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === 'All' || dest.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((previous) => (previous + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [heroSlides.length]);

  useEffect(() => {
    const elements = document.querySelectorAll('[data-destination-reveal]');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('destination-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, [searchTerm, activeCategory]);

  return (
    <div className="min-h-screen bg-[#fcfdfa] font-sans pb-24">
      <style>{`
        [data-destination-reveal] { opacity: 0; transform: translateY(32px); }
        [data-destination-reveal].destination-visible { opacity: 1; transform: none; transition: opacity .75s ease, transform .75s cubic-bezier(.22,.68,.22,1); }
        .destination-visible[data-delay='1'] { transition-delay: .08s; }
        .destination-visible[data-delay='2'] { transition-delay: .16s; }
        .destination-visible[data-delay='3'] { transition-delay: .24s; }
        .destination-visible[data-delay='4'] { transition-delay: .32s; }
        @keyframes destinationHeroText { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: none; } }
        .destination-hero-text { animation: destinationHeroText 1.1s ease-out both; }
        @media (prefers-reduced-motion: reduce) { [data-destination-reveal], [data-destination-reveal].destination-visible { opacity: 1 !important; transform: none !important; transition: none !important; } }
      `}</style>

      {/* ================= 1. HERO SLIDER ================= */}
      {showHero && (
        <section className="relative h-[520px] md:h-[620px] w-full overflow-hidden bg-[#10243A]">
          {heroSlides.map((slide, index) => (
            <img
              key={slide.image}
              src={slide.image}
              alt={slide.title}
              className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${currentSlide === index ? 'opacity-100 scale-100' : 'opacity-0 scale-105'}`}
            />
          ))}
          <div className="absolute inset-0 bg-gradient-to-r from-[#10243A]/80 via-[#10243A]/35 to-black/20" />
          <div key={currentSlide} className="destination-hero-text absolute inset-0 z-10 flex items-center px-6 md:px-12">
            <div className="mx-auto w-full max-w-[1440px]">
              <div className="max-w-2xl">
                <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/40 bg-black/20 px-4 py-2 text-xs font-bold tracking-[3px] text-[#F5B91B] backdrop-blur-md">
                  <Compass size={16} /> EXPLORE TANZANIA
                </div>
                <h1 className="mb-5 text-4xl font-bold leading-tight text-white md:text-6xl lg:text-7xl" style={{ fontFamily: "'Playfair Display', serif" }}>
                  {heroSlides[currentSlide].title}
                </h1>
                <p className="mb-8 max-w-xl text-base leading-7 text-white/90 md:text-xl">{heroSlides[currentSlide].subtitle}</p>
                <Link to="/card-tour" className="inline-flex items-center gap-2 rounded-full bg-[#F5B91B] px-8 py-4 font-bold text-[#10243A] shadow-xl transition hover:-translate-y-1 hover:bg-white">
                  Explore Tours <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </div>
          <button type="button" aria-label="Previous destination slide" onClick={() => setCurrentSlide((previous) => (previous - 1 + heroSlides.length) % heroSlides.length)} className="absolute left-4 top-1/2 z-20 -translate-y-1/2 rounded-full border border-white/40 bg-black/30 p-3 text-white backdrop-blur-md transition hover:bg-[#1b5e36]">
            <ChevronLeft size={22} />
          </button>
          <button type="button" aria-label="Next destination slide" onClick={() => setCurrentSlide((previous) => (previous + 1) % heroSlides.length)} className="absolute right-4 top-1/2 z-20 -translate-y-1/2 rounded-full border border-white/40 bg-black/30 p-3 text-white backdrop-blur-md transition hover:bg-[#1b5e36]">
            <ChevronRight size={22} />
          </button>
          <div className="absolute bottom-6 left-0 right-0 z-20 flex justify-center gap-2">
            {heroSlides.map((_, index) => (
              <button key={index} type="button" aria-label={`Go to destination slide ${index + 1}`} onClick={() => setCurrentSlide(index)} className={`h-2.5 rounded-full transition-all ${currentSlide === index ? 'w-10 bg-[#F5B91B]' : 'w-2.5 bg-white/70'}`} />
            ))}
          </div>
        </section>
      )}

      {/* ================= 2. KICHWA CHA UKURASA ================= */}
      <div className="text-center pt-16 pb-8 px-4">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#10243A] mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
          Our Destinations
        </h1>
        <div className="w-24 h-1 bg-[#087443] mx-auto mb-4"></div>
        <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
          From Zanzibar beaches to Serengeti plains
        </p>
      </div>

      {/* ================= 3. FILTERS & SEARCH ================= */}
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 mb-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 bg-white p-4 rounded-xl shadow-sm border border-gray-100" data-destination-reveal>
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                  activeCategory === cat
                    ? 'bg-[#087443] text-white shadow-md'
                    : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          <div className="relative w-full md:w-64">
            <input 
              type="text" 
              placeholder="Search destinations..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-full text-sm focus:outline-none focus:border-[#087443]"
            />
            <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
          </div>
        </div>
      </div>

      {/* ================= 4. DESTINATIONS GRID (4 Columns, Compact) ================= */}
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        {filteredDestinations.length === 0 ? (
          <div className="text-center py-20 text-gray-500">
            <Compass size={48} className="mx-auto mb-4 text-gray-300" />
            <p className="text-lg font-semibold">No destinations found.</p>
            <p className="text-sm">Try adjusting your search or filter.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredDestinations.map((dest, index) => (
              <Link 
                to={`/tours?destination=${dest.id}`} 
                key={dest.id}
                className="group relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 block" data-destination-reveal data-delay={(index % 4) + 1}
              >
                {/* Picha */}
                <img 
                  src={dest.image} 
                  alt={dest.name} 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Gradient Overlay (Ili maandishi yasomeke) */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent group-hover:from-black/95 transition-colors"></div>

                {/* Badge ya Kategoria (Juu Kushoto) - Ndogo */}
                <div className="absolute top-3 left-3 bg-black/50 backdrop-blur-md text-white text-[10px] font-bold px-2 py-0.5 rounded border border-white/20">
                  {dest.category}
                </div>

                {/* Maandishi (Chini) */}
                <div className="absolute bottom-0 left-0 w-full p-4">
                  <h3 className="text-lg font-bold text-white mb-1 group-hover:text-[#F5B91B] transition-colors" style={{ fontFamily: "'Playfair Display', serif" }}>
                    {dest.name}
                  </h3>
                  <p className="text-[11px] text-gray-300 line-clamp-1">
                    {dest.subtitle}
                  </p>
                </div>

                {/* Kitufe cha Arrow (Kinaonekana kwenye Hover) */}
                <div className="absolute bottom-4 right-4 w-8 h-8 bg-[#F5B91B] rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  <ArrowRight size={16} className="text-[#10243A]" />
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>

    </div>
  );
};

export default Destination;
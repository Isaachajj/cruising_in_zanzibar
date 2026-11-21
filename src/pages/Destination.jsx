// src/pages/Destination.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  MapPin, ArrowRight, Search, Compass, TreePalm, Waves, Landmark,
  Utensils, ChevronLeft, ChevronRight, MessageCircle, ShieldCheck
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
    image: 'https://images.unsplash.com/photo-1534567153574-2b12153a87f0?q=80&w=900&auto=format&fit=crop'
  },
  {
    id: 'mikumi',
    name: 'Mikumi National Park',
    subtitle: 'Wildlife and savannah',
    category: 'Safari',
    image: 'https://images.unsplash.com/photo-1456926631375-92c8ce872def?q=80&w=900&auto=format&fit=crop'
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
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=900&auto=format&fit=crop'
  },
  {
    id: 'ngorongoro-crater',
    name: 'Ngorongoro Crater',
    subtitle: 'Crater wildlife paradise',
    category: 'Safari',
    image: 'https://images.unsplash.com/photo-1519066629447-267fffa62d4b?q=80&w=900&auto=format&fit=crop'
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
  const categoryIcons = {
    All: Compass,
    Beaches: Waves,
    Cultural: Landmark,
    Islands: TreePalm,
    Nature: TreePalm,
    Safari: Compass,
    Dining: Utensils
  };

  const heroSlides = [
    { image: '/slider/slider11.jpeg', title: 'Discover Zanzibar', subtitle: 'Beaches, culture and unforgettable island experiences' },
    { image: '/utalii4.jpeg', title: 'Explore Stone Town', subtitle: 'History, traditions and stories at every corner' },
    { image: '/slider/lider55.webp', title: 'Meet African Wildlife', subtitle: 'Safari adventures across Tanzania' },
    { image: '/Trip/safari blue.jpeg', title: 'Relax at Paradise Beaches', subtitle: 'Crystal water and peaceful island sunsets' },
    { image: '/Trip/jozani.jpg', title: 'Experience Local Adventures', subtitle: 'Tours crafted by our local experts' }
  ];

  // Filter logic
  const filteredDestinations = destinationsData.filter(dest => {
    const matchesSearch = dest.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === 'All' || dest.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  useEffect(() => {
    if (!showHero) return undefined;
    const interval = setInterval(() => {
      setCurrentSlide((previous) => (previous + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [heroSlides.length, showHero]);

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
        [data-destination-reveal] { opacity: 0; transform: translateY(28px) scale(.985); }
        [data-destination-reveal].destination-visible { opacity: 1; transform: none; transition: opacity .7s ease, transform .7s cubic-bezier(.2,.75,.25,1); }
        .destination-visible[data-delay='1'] { transition-delay: .06s; }
        .destination-visible[data-delay='2'] { transition-delay: .12s; }
        .destination-visible[data-delay='3'] { transition-delay: .18s; }
        .destination-visible[data-delay='4'] { transition-delay: .24s; }
        .destination-visible[data-delay='5'] { transition-delay: .30s; }
        .destination-visible[data-delay='6'] { transition-delay: .36s; }
        @keyframes destinationHeroText { from { opacity: 0; transform: translateY(26px); filter: blur(5px); } to { opacity: 1; transform: none; filter: blur(0); } }
        @keyframes destinationDrift { from { transform: scale(1.04); } to { transform: scale(1.11); } }
        .destination-hero-text { animation: destinationHeroText .85s cubic-bezier(.2,.75,.25,1) both; }
        .destination-hero-image-active { animation: destinationDrift 7s ease-out both; }
        @media (prefers-reduced-motion: reduce) { [data-destination-reveal], [data-destination-reveal].destination-visible, .destination-hero-image-active { opacity: 1 !important; transform: none !important; transition: none !important; animation: none !important; filter: none !important; } }
      `}</style>

      {/* ================= 1. HERO SLIDER ================= */}
      {showHero && (
        <section className="relative h-[540px] w-full overflow-hidden bg-[#10243A] md:h-[660px]">
          {heroSlides.map((slide, index) => (
            <img
              key={slide.image}
              src={slide.image}
              alt={slide.title}
              className={`absolute inset-0 h-full w-full object-cover transition-all duration-[1400ms] ${currentSlide === index ? 'destination-hero-image-active opacity-100' : 'scale-105 opacity-0'}`}
            />
          ))}
          <div className="absolute inset-0 bg-gradient-to-r from-[#10243A]/80 via-[#10243A]/35 to-black/20" />
          <div key={currentSlide} className="destination-hero-text absolute inset-0 z-10 flex items-center px-6 md:px-12">
            <div className="mx-auto w-full max-w-[1440px]">
              <div className="max-w-2xl">
                <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/40 bg-black/25 px-4 py-2 text-xs font-bold tracking-[3px] text-[#F5B91B] shadow-lg backdrop-blur-md">
                  <Compass size={16} /> EXPLORE TANZANIA
                </div>
                <h1 className="mb-5 max-w-3xl text-4xl font-bold leading-[1.08] text-white drop-shadow-lg md:text-6xl lg:text-7xl" style={{ fontFamily: "'Playfair Display', serif" }}>
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

      {showHero && (
        <div className="relative z-20 mx-auto -mt-9 mb-8 grid w-[calc(100%-2rem)] max-w-4xl grid-cols-3 divide-x divide-gray-100 rounded-2xl border border-gray-100 bg-white px-3 py-5 shadow-[0_18px_50px_rgba(16,36,58,.12)] sm:px-6" data-destination-reveal>
          {[['12', 'Handpicked places'], ['6', 'Experience types'], ['2', 'Regions to explore']].map(([value, label]) => (
            <div key={label} className="px-2 text-center sm:px-4">
              <p className="text-xl font-bold text-[#087443] sm:text-2xl">{value}</p>
              <p className="mt-1 text-[10px] font-medium text-gray-500 sm:text-xs">{label}</p>
            </div>
          ))}
        </div>
      )}

      {/* ================= 2. PAGE INTRO ================= */}
      <div className="px-4 pb-9 pt-10 text-center md:pt-14" data-destination-reveal>
        <span className="mb-4 inline-flex items-center gap-2 text-xs font-bold tracking-[3px] text-[#087443]"><MapPin size={15} /> MADE FOR EXPLORING</span>
        <h2 className="mb-4 text-4xl font-bold text-[#10243A] md:text-5xl lg:text-6xl" style={{ fontFamily: "'Playfair Display', serif" }}>
          Our Destinations
        </h2>
        <div className="mx-auto mb-4 h-1 w-20 rounded-full bg-[#087443]"></div>
        <p className="mx-auto max-w-2xl text-base text-gray-600 md:text-lg">
          From Zanzibar beaches to Serengeti plains
        </p>
      </div>

      {/* ================= 3. FILTERS & SEARCH ================= */}
      <div className="mx-auto mb-10 max-w-[1320px] px-5 md:px-10">
        <div className="flex flex-col items-center justify-between gap-5 rounded-2xl border border-gray-100 bg-white p-4 shadow-[0_8px_30px_rgba(16,36,58,.06)] md:flex-row md:p-5" data-destination-reveal>
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((cat) => {
              const CategoryIcon = categoryIcons[cat];
              return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-xs font-semibold transition-all duration-300 hover:-translate-y-0.5 sm:text-sm ${
                  activeCategory === cat
                    ? 'bg-[#087443] text-white shadow-md shadow-green-900/15'
                    : 'bg-[#f5f8f4] text-gray-600 hover:bg-green-50 hover:text-[#087443]'
                }`}
              >
                <CategoryIcon size={14} />
                {cat}
              </button>
              );
            })}
          </div>
          <div className="relative w-full md:w-72">
            <input 
              type="text" 
              placeholder="Search destinations..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full rounded-full border border-gray-200 bg-gray-50 py-3 pl-11 pr-4 text-sm transition focus:border-[#087443] focus:bg-white focus:outline-none focus:ring-4 focus:ring-green-100"
            />
            <Search size={17} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
          </div>
        </div>
        <div className="mt-4 flex items-center justify-between px-1 text-xs text-gray-500">
          <span>{filteredDestinations.length} {filteredDestinations.length === 1 ? 'place' : 'places'} to explore</span>
          {(searchTerm || activeCategory !== 'All') && <button type="button" onClick={() => { setSearchTerm(''); setActiveCategory('All'); }} className="font-semibold text-[#087443] transition hover:text-green-800">Clear filters</button>}
        </div>
      </div>

      {/* ================= 4. DESTINATIONS GRID (4 Columns, Compact) ================= */}
      <div className="mx-auto max-w-[1320px] px-5 md:px-10">
        {filteredDestinations.length === 0 ? (
          <div className="rounded-3xl border border-gray-100 bg-white py-20 text-center text-gray-500 shadow-sm" data-destination-reveal>
            <Compass size={48} className="mx-auto mb-4 text-[#087443]/40" />
            <p className="text-lg font-semibold">No destinations found.</p>
            <p className="text-sm">Try adjusting your search or filter.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredDestinations.map((dest, index) => (
              <Link 
                to={dest.category === 'Safari' ? '/packages' : '/card-tour'}
                key={dest.id}
                className="group relative block h-[310px] w-full overflow-hidden rounded-2xl border border-white shadow-lg shadow-[#10243A]/10 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl sm:h-[330px]" data-destination-reveal data-delay={(index % 6) + 1}
              >
                {/* Picha */}
                <img 
                  src={dest.image} 
                  alt={dest.name} 
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
                
                {/* Gradient Overlay (Ili maandishi yasomeke) */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#081522]/95 via-[#081522]/25 to-transparent transition-colors duration-500 group-hover:from-[#081522]/85"></div>

                {/* Badge ya Kategoria (Juu Kushoto) - Ndogo */}
                <div className="absolute left-4 top-4 rounded-full border border-white/20 bg-black/35 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white shadow-sm backdrop-blur-md">
                  {dest.category}
                </div>

                {/* Maandishi (Chini) */}
                <div className="absolute bottom-0 left-0 w-full p-5 pr-14 transition-transform duration-500 group-hover:-translate-y-1">
                  <h3 className="mb-2 text-xl font-bold text-white transition-colors group-hover:text-[#F5B91B]" style={{ fontFamily: "'Playfair Display', serif" }}>
                    {dest.name}
                  </h3>
                  <p className="text-sm text-gray-200 line-clamp-2">
                    {dest.subtitle}
                  </p>
                </div>

                {/* Kitufe cha Arrow (Kinaonekana kwenye Hover) */}
                <div className="absolute bottom-5 right-5 flex h-10 w-10 translate-y-2 items-center justify-center rounded-full bg-[#F5B91B] opacity-0 shadow-lg transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  <ArrowRight size={17} className="text-[#10243A] transition-transform duration-300 group-hover:translate-x-0.5" />
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>

      {showHero && (
        <section className="mx-auto mt-20 max-w-[1320px] px-5 md:px-10" data-destination-reveal>
          <div className="relative isolate overflow-hidden rounded-[2rem] bg-[#10243A] px-7 py-12 shadow-[0_24px_70px_rgba(16,36,58,.2)] sm:px-10 md:px-14 md:py-16">
            <img
              src="/slider/slider11.jpeg"
              alt="Aerial view of a tropical Zanzibar island"
              className="absolute inset-0 -z-20 h-full w-full object-cover"
            />
            <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#10243A]/95 via-[#10243A]/85 to-[#10243A]/45" />
            <div className="absolute -right-16 -top-20 -z-10 h-72 w-72 rounded-full border border-white/15" />
            <div className="absolute -right-4 -top-8 -z-10 h-48 w-48 rounded-full border border-white/15" />

            <div className="grid items-center gap-10 lg:grid-cols-[1.4fr_.8fr]">
              <div className="max-w-2xl">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-xs font-bold tracking-[2px] text-[#F5B91B] backdrop-blur-sm">
                  <Compass size={15} /> YOUR NEXT JOURNEY
                </span>
                <h2 className="mt-5 text-3xl font-bold leading-tight text-white md:text-5xl" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Ready to explore these incredible places?
                </h2>
                <p className="mt-4 max-w-xl text-sm leading-7 text-white/80 md:text-base">
                  Let our local team help you choose the right island tour or plan a Tanzania safari around the places you want to see.
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Link to="/card-tour" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#F5B91B] px-6 py-3.5 text-sm font-bold text-[#10243A] shadow-lg transition duration-300 hover:-translate-y-1 hover:bg-white">
                    Explore Zanzibar Tours <ArrowRight size={17} />
                  </Link>
                  <Link to="/packages" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/50 bg-white/10 px-6 py-3.5 text-sm font-bold text-white backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:bg-white/20">
                    View Tanzania Safaris <ArrowRight size={17} />
                  </Link>
                </div>
              </div>

              <div className="rounded-2xl border border-white/20 bg-white/10 p-6 text-white shadow-xl backdrop-blur-md md:p-7">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#F5B91B] text-[#10243A]">
                  <ShieldCheck size={24} />
                </div>
                <h3 className="mt-5 text-xl font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>Local experts, personal trips</h3>
                <p className="mt-2 text-sm leading-6 text-white/75">Get help with your itinerary, transport and the experiences that fit your travel plans.</p>
                <a href="https://wa.me/255653924851" target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#F5B91B] transition hover:text-white">
                  <MessageCircle size={17} /> Chat with our team <ArrowRight size={15} />
                </a>
              </div>
            </div>
          </div>
        </section>
      )}

    </div>
  );
};

export default Destination;

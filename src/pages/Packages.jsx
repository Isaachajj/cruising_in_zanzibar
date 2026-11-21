// src/components/Packages.jsx
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Star, ArrowRight, Compass, ShieldCheck, 
  Map, Sun, TreePine, PawPrint, ChevronLeft, ChevronRight
} from 'lucide-react';

// ==========================================
// 1. DATA YA SAFARI PACKAGES
// ==========================================
const safariPackages = [
  {
    id: 1,
    badge: 'Premium',
    badgeColor: 'bg-[#F5B91B]', // Golden Yellow
    badgeTextColor: 'text-gray-900',
    duration: '4 Days / 3 Nights',
    image: '/Trip/jozani.jpg', // Lion
    price: '1,450',
    title: 'Serengeti Classic Migration Safari',
    description: 'Witness the Great Migration in Serengeti with millions of wildebeest, zebra and luxury tented camps.',
    tags: ['Great Migration viewing', 'Big Five sightings'],
    rating: 5.0,
    reviews: 378
  },
  {
    id: 2,
    badge: 'Epic',
    badgeColor: 'bg-green-600',
    badgeTextColor: 'text-white',
    duration: '9 Days / 8 Nights',
    image: '/Trip/kizimkazi.jpg', // Zebras
    price: '3,850',
    title: 'Ultimate Tanzania Grand Safari',
    description: 'Explore Tarangire, Serengeti, Ngorongoro & Lake Natron on this ultimate 9-day adventure.',
    tags: ['Five national parks', 'Great Migration (seasonal)'],
    rating: 5.0,
    reviews: 198
  },
  {
    id: 3,
    badge: 'Iconic',
    badgeColor: 'bg-[#04A9E8]', // Ocean Blue
    badgeTextColor: 'text-white',
    duration: '4 Days / 3 Nights',
    image: '/Trip/mnemba.jpeg', // Giraffe
    price: '1,350',
    title: 'Serengeti & Ngorongoro Crater Safari',
    description: 'Two icons in one safari – Serengeti plains and Ngorongoro Crater with the Big Five.',
    tags: ['Serengeti National Park', 'Ngorongoro Crater descent'],
    rating: 4.9,
    reviews: 312
  },
  {
    id: 4,
    badge: 'Best Seller',
    badgeColor: 'bg-[#F5B91B]',
    badgeTextColor: 'text-gray-900',
    duration: '6 Days / 5 Nights',
    image: '/Trip/paje.jpeg', // Wildebeest
    price: '2,250',
    title: 'Classic Tanzania Northern Circuit Safari',
    description: 'Tarangire, Manyara, Serengeti, and Ngorongoro in one epic 6-day journey.',
    tags: ['Four iconic parks', 'Big Five & Great Migration'],
    rating: 4.9,
    reviews: 267
  },
  {
    id: 5,
    badge: 'Romantic',
    badgeColor: 'bg-rose-500',
    badgeTextColor: 'text-white',
    duration: '3 Days / 2 Nights',
    image: '/Trip/safari blue.jpeg', // Sunset Acacia
    price: '980',
    title: 'Ngorongoro Highlands & Crater Safari',
    description: '3-day Ngorongoro adventure with crater game drive, rim walk, and authentic Maasai cultural experience.',
    tags: ['Ngorongoro Crater descent', 'Crater rim walk'],
    rating: 4.9,
    reviews: 234
  },
  {
    id: 6,
    badge: 'Wildlife',
    badgeColor: 'bg-teal-500',
    badgeTextColor: 'text-white',
    duration: '6 Days / 5 Nights',
    image: '/Trip/kendwa.jpeg', // Leopard
    price: '2,650',
    title: 'Serengeti Deep Wilderness Safari',
    description: 'Deep Serengeti immersion – 6 days exploring remote areas, walking safaris, and authentic bush camping.',
    tags: ['Remote Serengeti areas', 'Walking safari'],
    rating: 5.0,
    reviews: 156
  }
];

// ==========================================
// 2. COMPONENT KUU (PackagesSection)
// ==========================================
const Packages = ({ showHero = true }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroSlides = [
    { image: '/slider/slider33.jpg', title: 'Wildlife Safari Adventures', subtitle: 'Discover Tanzania wildlife, migration and legendary national parks' },
    { image: '/slider/slider44.jpeg', title: 'Serengeti Plains', subtitle: 'Unforgettable game drives across endless golden landscapes' },
    { image: '/slider/slider99.jpeg', title: 'Ngorongoro Crater', subtitle: 'Explore one of Africa most remarkable natural wonders' },
    { image: '/slider/lider66.jpeg', title: 'Luxury Safari Journeys', subtitle: 'Comfort, adventure and authentic African experiences' }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((previous) => (previous + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [heroSlides.length]);

  useEffect(() => {
    const elements = document.querySelectorAll('[data-safari-reveal]');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('safari-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{`
        [data-safari-reveal] { opacity: 0; transform: translateY(36px); }
        [data-safari-reveal].safari-visible { opacity: 1; transform: none; transition: opacity .8s ease, transform .8s cubic-bezier(.22,.68,.22,1); }
        .safari-visible[data-delay='1'] { transition-delay: .08s; }
        .safari-visible[data-delay='2'] { transition-delay: .16s; }
        .safari-visible[data-delay='3'] { transition-delay: .24s; }
        .safari-visible[data-delay='4'] { transition-delay: .32s; }
        .safari-visible[data-delay='5'] { transition-delay: .40s; }
        .safari-visible[data-delay='6'] { transition-delay: .48s; }
        @keyframes safariHeroText { from { opacity: 0; transform: translateY(28px); } to { opacity: 1; transform: none; } }
        .safari-hero-text { animation: safariHeroText 1.1s ease-out both; }
      `}</style>

      {showHero && (
        <section className="relative h-[520px] md:h-[620px] w-full overflow-hidden bg-[#10243A]">
          {heroSlides.map((slide, index) => (
            <img key={slide.image} src={slide.image} alt={slide.title} className={`absolute inset-0 h-full w-full object-cover transition-all duration-1000 ${currentSlide === index ? 'opacity-100 scale-100' : 'opacity-0 scale-105'}`} />
          ))}
          <div className="absolute inset-0 bg-gradient-to-r from-[#10243A]/90 via-[#10243A]/45 to-transparent" />
          <div key={currentSlide} className="absolute inset-0 z-10 flex items-center px-6 md:px-12">
            <div className="mx-auto w-full max-w-[1440px]">
              <div className="safari-hero-text max-w-2xl text-white">
                <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#F5B91B]/50 bg-black/20 px-4 py-2 text-xs font-bold tracking-[3px] text-[#F5B91B] backdrop-blur-md"><PawPrint size={16} /> WILDLIFE ADVENTURES</div>
                <h1 className="mb-5 text-4xl font-bold leading-tight md:text-6xl lg:text-7xl" style={{ fontFamily: "'Playfair Display', serif" }}>{heroSlides[currentSlide].title}</h1>
                <p className="mb-8 max-w-xl text-base leading-7 text-white/90 md:text-xl">{heroSlides[currentSlide].subtitle}</p>
                <Link to="/packages" className="inline-flex items-center gap-2 rounded-full bg-[#F5B91B] px-8 py-4 font-bold text-[#10243A] shadow-xl transition hover:-translate-y-1 hover:bg-white">View Safari Packages <ArrowRight size={18} /></Link>
              </div>
            </div>
          </div>
          <button type="button" aria-label="Previous safari slide" onClick={() => setCurrentSlide((previous) => (previous - 1 + heroSlides.length) % heroSlides.length)} className="absolute left-4 top-1/2 z-20 -translate-y-1/2 rounded-full border border-white/40 bg-black/30 p-3 text-white backdrop-blur-md transition hover:bg-[#087443]"><ChevronLeft size={22} /></button>
          <button type="button" aria-label="Next safari slide" onClick={() => setCurrentSlide((previous) => (previous + 1) % heroSlides.length)} className="absolute right-4 top-1/2 z-20 -translate-y-1/2 rounded-full border border-white/40 bg-black/30 p-3 text-white backdrop-blur-md transition hover:bg-[#087443]"><ChevronRight size={22} /></button>
          <div className="absolute bottom-6 left-0 right-0 z-20 flex justify-center gap-2">
            {heroSlides.map((_, index) => (<button key={index} type="button" aria-label={`Go to safari slide ${index + 1}`} onClick={() => setCurrentSlide(index)} className={`h-2.5 rounded-full transition-all ${currentSlide === index ? 'w-10 bg-[#F5B91B]' : 'w-2.5 bg-white/70'}`} />))}
          </div>
        </section>
      )}

      <section className="relative w-full bg-[#fffdf5] py-24 font-sans overflow-hidden">
      {/* ================= SAFARI BACKGROUND DECORATIONS ================= */}
      {/* Palm leaves juu */}
      <div 
        className="absolute top-0 left-0 w-64 h-64 md:w-96 md:h-96 opacity-20 pointer-events-none -translate-x-1/4 -translate-y-1/4"
        style={{
          backgroundImage: `url('https://www.transparentpng.com/thumb/palm-tree/palm-tree-transparent-image-2.png')`,
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          filter: 'blur(1px)'
        }}
      ></div>
      <div 
        className="absolute top-0 right-0 w-64 h-64 md:w-96 md:h-96 opacity-20 pointer-events-none translate-x-1/4 -translate-y-1/4 rotate-45"
        style={{
          backgroundImage: `url('https://www.transparentpng.com/thumb/palm-tree/palm-tree-transparent-image-2.png')`,
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          filter: 'blur(1px)'
        }}
      ></div>

      {/* Safari Sunset Background chini kabisa (kama kwenye picha) */}
      <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-orange-200/50 to-transparent pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-full h-32 flex justify-center items-end opacity-30 pointer-events-none">
         {/* Silhouette ya miti na twiga (kwa kutumia SVG rahisi) */}
         <svg viewBox="0 0 1440 200" className="w-full h-full" preserveAspectRatio="none">
            <path d="M0,200 L0,150 Q100,120 200,150 T400,140 T600,160 T800,130 T1000,150 T1200,140 T1440,160 L1440,200 Z" fill="#4a3b32" />
            {/* Twiga wawili wadogo */}
            <path d="M1000,150 L1010,110 L1015,110 L1010,150 M1020,150 L1030,100 L1035,100 L1030,150" stroke="#4a3b32" strokeWidth="4" fill="none"/>
            <path d="M1050,150 L1060,120 L1065,120 L1060,150" stroke="#4a3b32" strokeWidth="4" fill="none"/>
         </svg>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 relative z-10">
        
        {/* ================= HEADER ================= */}
        <div className="text-center mb-16" data-safari-reveal="up">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-[#F5B91B] bg-white text-[#087443] font-bold tracking-widest text-xs md:text-sm mb-6 shadow-sm">
            <PawPrint size={18} className="text-[#087443]" />
            WILDLIFE ADVENTURES
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#10243A] mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            Tanzania Safari Packages
          </h2>
          
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Experience the thrill of African wildlife with our expertly crafted safari packages
          </p>

          {/* Gold Decorative Underline (Mstari mmoja wa moja kwa moja) */}
          <div className="flex justify-center mt-6">
            <div className="w-24 h-1 bg-[#087443] rounded-full"></div>
          </div>
        </div>

        {/* ================= SAFARI CARDS GRID ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {safariPackages.map((pkg, index) => (
            <div key={pkg.id} data-safari-reveal="up" data-delay={(index % 6) + 1}><SafariCard pkg={pkg} /></div>
          ))}
        </div>

        {/* ================= VIEW ALL BUTTON ================= */}
        <div className="text-center mt-16">
          <Link 
            to="/safaris" 
            className="inline-flex items-center gap-2 bg-[#087443] text-white font-bold px-8 py-4 rounded-full hover:bg-green-800 transition-all duration-300 shadow-lg shadow-green-900/20"
          >
            <Map size={18} />
            View All Safari Packages
            <ArrowRight size={18} />
          </Link>
        </div>

      </div>
      </section>
    </>
  );
};

// ==========================================
// 3. SAFARI CARD COMPONENT (Unique Design)
// ==========================================
const SafariCard = ({ pkg }) => {
  return (
    <div className="group bg-white rounded-xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_40px_rgba(245,185,27,0.15)] transition-all duration-300 border border-gray-100 flex flex-col hover:-translate-y-2">
      
      {/* Image Area */}
      <div className="relative h-56 overflow-hidden">
        <img 
          src={pkg.image} 
          alt={pkg.title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        
        {/* Badges */}
        <div className={`absolute top-4 left-4 ${pkg.badgeColor} ${pkg.badgeTextColor} text-xs font-bold px-3 py-1.5 rounded-md flex items-center gap-1.5 shadow-md`}>
          <Star size={12} fill="currentColor" />
          {pkg.badge}
        </div>
        <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-sm text-white text-xs font-medium px-3 py-1.5 rounded-md flex items-center gap-1.5">
          <Compass size={12} />
          {pkg.duration}
        </div>

        {/* Price Box (Kubwa zaidi kuliko Tours) */}
        <div className="absolute bottom-4 right-4 bg-white rounded-lg shadow-xl p-3 px-4 text-center border-t-4 border-[#F5B91B]">
          <span className="text-[10px] text-gray-500 uppercase block leading-none mb-1 font-semibold">FROM</span>
          <span className="text-2xl font-bold text-[#10243A] leading-none">${pkg.price}</span>
          <span className="text-[10px] text-gray-500 block leading-none mt-1">/ person</span>
        </div>
      </div>

      {/* Content Area */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-[#10243A] mb-2 group-hover:text-[#087443] transition-colors line-clamp-2" style={{ fontFamily: "'Playfair Display', serif" }}>
          {pkg.title}
        </h3>
        
        <p className="text-gray-600 text-sm mb-4 line-clamp-3 leading-relaxed">
          {pkg.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {pkg.tags.map((tag, index) => (
            <span key={index} className="flex items-center gap-1.5 bg-gray-50 text-gray-700 text-[11px] font-medium px-2.5 py-1 rounded-md border border-gray-200">
              <ShieldCheck size={12} className="text-[#087443]" />
              {tag}
            </span>
          ))}
        </div>

        {/* Footer: Rating & Button */}
        <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between">
          <div className="flex items-center gap-1 text-sm font-semibold text-gray-700">
            <Star size={16} className="text-[#F5B91B]" fill="currentColor" />
            <span>{pkg.rating}</span>
            <span className="text-gray-400 font-normal text-xs">({pkg.reviews})</span>
          </div>

          <Link 
            to={`/safari/${pkg.id}`} 
            className="flex items-center gap-2 bg-[#087443] text-white text-sm font-semibold px-5 py-2 rounded-md hover:bg-green-800 transition-colors group/btn"
          >
            View Safari
            <ArrowRight size={16} className="transform group-hover/btn:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Packages;
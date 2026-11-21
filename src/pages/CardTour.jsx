// src/components/CardTour.jsx
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Clock, Star, ArrowRight, 
  Waves, Ship, MapPin, Camera, 
  Utensils, Users, TreePalm, Landmark, ChevronLeft, ChevronRight
} from 'lucide-react';
import WhyUs from './WhyUs';

// Data ya Tours (Unaweza kuibadilisha au kuipata kutoka API baadaye)
const tours = [
  {
    id: 1,
    badge: 'BEST SELLER',
    badgeColor: 'bg-green-600',
    duration: '5 Hours',
    image: '/Trip/mnemba.jpeg',
    price: 45,
    title: 'Mnemba Island Dolphin & Snorkeling',
    description: 'Swim with wild dolphins and explore vibrant coral reefs.',
    tags: [
      { icon: <Waves size={14} />, text: 'Snorkeling' },
      { icon: <Ship size={14} />, text: 'Dolphin Encounter' },
      { icon: <Camera size={14} />, text: 'Coral Reef' }
    ],
    rating: 4.9,
    reviews: 684
  },
  {
    id: 2,
    badge: 'CULTURAL PICK',
    badgeColor: 'bg-yellow-500',
    duration: '3 Hours',
    image: '/Trip/stonetown.jpeg',
    price: 35,
    title: 'Stone Town Heritage Tour',
    description: 'Explore the rich history and culture of Zanzibar\'s Stone Town.',
    tags: [
      { icon: <Landmark size={14} />, text: 'Historic Sites' },
      { icon: <Users size={14} />, text: 'Walking Tour' },
      { icon: <Camera size={14} />, text: 'Photo Stops' }
    ],
    rating: 4.8,
    reviews: 512
  },
  {
    id: 3,
    badge: 'POPULAR',
    badgeColor: 'bg-blue-600',
    duration: 'Full Day',
    image: '/Trip/safari blue.jpeg',
    price: 85,
    title: 'Safari Blue Adventure',
    description: 'Sail, snorkel and relax on a full-day ocean adventure.',
    tags: [
      { icon: <Ship size={14} />, text: 'Dhow Sailing' },
      { icon: <Waves size={14} />, text: 'Snorkeling' },
      { icon: <Utensils size={14} />, text: 'Seafood Lunch' }
    ],
    rating: 4.9,
    reviews: 723
  },
  {
    id: 4,
    badge: 'TOP RATED',
    badgeColor: 'bg-purple-600',
    duration: '6 Hours',
    image: '/Trip/jozani.jpg',
    price: 60,
    title: 'Jozani Forest & Red Colobus',
    description: 'Meet the rare red colobus monkeys in their natural habitat.',
    tags: [
      { icon: <TreePalm size={14} />, text: 'Nature Walk' },
      { icon: <Camera size={14} />, text: 'Wildlife' },
      { icon: <Users size={14} />, text: 'Guided Tour' }
    ],
    rating: 4.7,
    reviews: 345
  },
  {
    id: 5,
    badge: 'LUXURY',
    badgeColor: 'bg-rose-600',
    duration: '4 Hours',
    image: '/Trip/kendwa.jpeg',
    price: 120,
    title: 'Sunset Dhow Cruise',
    description: 'Enjoy a romantic sunset with drinks and music on a traditional dhow.',
    tags: [
      { icon: <Ship size={14} />, text: 'Sunset Cruise' },
      { icon: <Utensils size={14} />, text: 'Drinks Included' },
      { icon: <Camera size={14} />, text: 'Photography' }
    ],
    rating: 5.0,
    reviews: 210
  },
  {
    id: 6,
    badge: 'ADVENTURE',
    badgeColor: 'bg-orange-500',
    duration: '8 Hours',
    image: '/Trip/paje.jpeg',
    price: 95,
    title: 'Nungwi Beach & Kitesurfing',
    description: 'Experience the thrill of kitesurfing or relax on Nungwi\'s white sands.',
    tags: [
      { icon: <Waves size={14} />, text: 'Kitesurfing' },
      { icon: <MapPin size={14} />, text: 'Beach Day' },
      { icon: <Camera size={14} />, text: 'Water Sports' }
    ],
    rating: 4.8,
    reviews: 456
  }
];

const CardTour = ({ showHero = true }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroSlides = [
    { image: '/slider/slider11.jpeg', title: 'Zanzibar Island Adventures', subtitle: 'Snorkeling, beaches, culture and unforgettable ocean experiences' },
    { image: '/slider/slider22.jpeg', title: 'Discover Stone Town', subtitle: 'Explore historic streets and Zanzibar heritage' },
    { image: '/slider/slider33.jpg', title: 'Wildlife & Nature', subtitle: 'Experience Jozani Forest and island wildlife' },
    { image: '/slider/slider44.jpeg', title: 'Mnemba Dolphin Tours', subtitle: 'Swim in crystal-clear waters with wild dolphins' }
  ];

  useEffect(() => {
    const interval = setInterval(() => setCurrentSlide((previous) => (previous + 1) % heroSlides.length), 5000);
    return () => clearInterval(interval);
  }, [heroSlides.length]);

  useEffect(() => {
    const elements = document.querySelectorAll('[data-tour-reveal]');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('tour-visible');
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
        [data-tour-reveal] { opacity: 0; transform: translateY(36px); }
        [data-tour-reveal].tour-visible { opacity: 1; transform: none; transition: opacity .8s ease, transform .8s cubic-bezier(.22,.68,.22,1); }
        .tour-visible[data-delay='1'] { transition-delay: .08s; }
        .tour-visible[data-delay='2'] { transition-delay: .16s; }
        .tour-visible[data-delay='3'] { transition-delay: .24s; }
        .tour-visible[data-delay='4'] { transition-delay: .32s; }
        @keyframes tourHeroText { from { opacity: 0; transform: translateY(28px); } to { opacity: 1; transform: none; } }
        .tour-hero-text { animation: tourHeroText 1.1s ease-out both; }
        @media (prefers-reduced-motion: reduce) { [data-tour-reveal], [data-tour-reveal].tour-visible { opacity: 1 !important; transform: none !important; transition: none !important; } }
      `}</style>

      {showHero && (
        <section className="relative h-[520px] md:h-[620px] w-full overflow-hidden bg-[#10243A]">
          {heroSlides.map((slide, index) => (
            <img key={slide.image} src={slide.image} alt={slide.title} className={`absolute inset-0 h-full w-full object-cover transition-all duration-1000 ${currentSlide === index ? 'opacity-100 scale-100' : 'opacity-0 scale-105'}`} />
          ))}
          <div className="absolute inset-0 bg-gradient-to-r from-[#10243A]/85 via-[#10243A]/35 to-transparent" />
          <div key={currentSlide} className="tour-hero-text absolute inset-0 z-10 flex items-center px-6 md:px-12">
            <div className="mx-auto w-full max-w-[1440px]">
              <div className="max-w-2xl text-white">
                <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/40 bg-black/20 px-4 py-2 text-xs font-bold tracking-[3px] text-[#F5B91B] backdrop-blur-md"><TreePalm size={16} /> ZANZIBAR TOURS</div>
                <h1 className="mb-5 text-4xl font-bold leading-tight md:text-6xl lg:text-7xl" style={{ fontFamily: "'Playfair Display', serif" }}>{heroSlides[currentSlide].title}</h1>
                <p className="mb-8 max-w-xl text-base leading-7 text-white/90 md:text-xl">{heroSlides[currentSlide].subtitle}</p>
                <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-[#F5B91B] px-8 py-4 font-bold text-[#10243A] shadow-xl transition hover:-translate-y-1 hover:bg-white">Book Your Tour <ArrowRight size={18} /></Link>
              </div>
            </div>
          </div>
          <button type="button" aria-label="Previous Zanzibar tour slide" onClick={() => setCurrentSlide((previous) => (previous - 1 + heroSlides.length) % heroSlides.length)} className="absolute left-4 top-1/2 z-20 -translate-y-1/2 rounded-full border border-white/40 bg-black/30 p-3 text-white backdrop-blur-md transition hover:bg-[#1b5e36]"><ChevronLeft size={22} /></button>
          <button type="button" aria-label="Next Zanzibar tour slide" onClick={() => setCurrentSlide((previous) => (previous + 1) % heroSlides.length)} className="absolute right-4 top-1/2 z-20 -translate-y-1/2 rounded-full border border-white/40 bg-black/30 p-3 text-white backdrop-blur-md transition hover:bg-[#1b5e36]"><ChevronRight size={22} /></button>
          <div className="absolute bottom-6 left-0 right-0 z-20 flex justify-center gap-2">
            {heroSlides.map((_, index) => (<button key={index} type="button" aria-label={`Go to Zanzibar tour slide ${index + 1}`} onClick={() => setCurrentSlide(index)} className={`h-2.5 rounded-full transition-all ${currentSlide === index ? 'w-10 bg-[#F5B91B]' : 'w-2.5 bg-white/70'}`} />))}
          </div>
        </section>
      )}

      {/* Mapambo ya Majani (Palm Leaves) */}
      <div className="absolute top-0 left-0 w-40 h-40 bg-[url('https://www.transparentpng.com/thumb/palm-tree/palm-tree-transparent-image-2.png')] bg-no-repeat bg-contain opacity-20 -rotate-12 -translate-x-10 -translate-y-10 pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-40 h-40 bg-[url('https://www.transparentpng.com/thumb/palm-tree/palm-tree-transparent-image-2.png')] bg-no-repeat bg-contain opacity-20 rotate-12 translate-x-10 -translate-y-10 pointer-events-none"></div>

      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        
        {/* Kichwa cha Sehemu */}
        <div className="text-center mb-16 relative z-10" data-tour-reveal>
          
          {/* Badge ya Juu */}
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-yellow-200 bg-yellow-50 text-[#1b5e36] font-bold tracking-widest text-sm mb-6">
            <TreePalm size={18} className="text-[#1b5e36]" />
            EXPLORE ZANZIBAR
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-[#0f172a] mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            Unforgettable Zanzibar Experiences
          </h2>
          
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover the magic of the Spice Island with our handpicked tours
          </p>

          {/* Mstari wa Mapambo (Wavy lines) */}
          <div className="flex justify-center mt-6">
            <svg width="120" height="20" viewBox="0 0 120 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 10C20 10 20 20 40 20C60 20 60 0 80 0C100 0 100 10 120 10" stroke="#f5b014" strokeWidth="3" strokeLinecap="round"/>
            </svg>
          </div>
        </div>

        {/* Group inayoshikilia kadi na kitufe ili hover ifanye kazi kwa wote */}
        <div className="group">
          
          {/* Grid ya Kadi (Cards) - 6 kwa jumla */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tours.map((tour, index) => (
              <div data-tour-reveal data-delay={(index % 3) + 1} 
                key={tour.id} 
                className="group/card bg-white rounded-2xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.15)] transition-all duration-300 border border-gray-100 flex flex-col hover:-translate-y-2"
              >
                
                {/* Sehemu ya Picha */}
                <div className="relative h-60 overflow-hidden">
                  <img 
                    src={tour.image} 
                    alt={tour.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-110"
                  />
                  
                  {/* Badge ya Kushoto Juu */}
                  <div className={`absolute top-4 left-4 ${tour.badgeColor} text-white text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-md`}>
                    <Star size={12} fill="currentColor" />
                    {tour.badge}
                  </div>

                  {/* Muda wa Kulia Juu */}
                  <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-sm text-white text-xs font-medium px-3 py-1.5 rounded-full flex items-center gap-1.5">
                    <Clock size={12} />
                    {tour.duration}
                  </div>

                  {/* Bei (Price) */}
                  <div className="absolute bottom-4 right-4 bg-white rounded-lg shadow-lg p-2 px-3 text-center">
                    <span className="text-[10px] text-gray-500 uppercase block leading-none mb-0.5">From</span>
                    <span className="text-xl font-bold text-[#1b5e36] leading-none">${tour.price}</span>
                    <span className="text-[10px] text-gray-500 block leading-none mt-0.5">/ person</span>
                  </div>
                </div>

                {/* Sehemu ya Maudhui (Content) */}
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-[#0f172a] mb-2 group-hover/card:text-[#1b5e36] transition-colors line-clamp-1" style={{ fontFamily: "'Playfair Display', serif" }}>
                    {tour.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {tour.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {tour.tags.map((tag, index) => (
                      <span key={index} className="flex items-center gap-1 bg-green-50 text-[#1b5e36] text-[11px] font-semibold px-2.5 py-1 rounded-md border border-green-100">
                        {tag.icon}
                        {tag.text}
                      </span>
                    ))}
                  </div>

                  {/* Sehemu ya Chini: Rating na Kitufe */}
                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
                    <div className="flex items-center gap-1 text-sm font-semibold text-gray-700">
                      <Star size={16} className="text-yellow-500" fill="currentColor" />
                      <span>{tour.rating}</span>
                      <span className="text-gray-400 font-normal text-xs">({tour.reviews} reviews)</span>
                    </div>

                    <Link 
                      to={`/tour/${tour.id}`} 
                      className="flex items-center gap-1 bg-[#1b5e36] text-white text-sm font-semibold px-4 py-2 rounded-full hover:bg-green-800 transition-colors group/btn"
                    >
                      View Details
                      <ArrowRight size={16} className="transform group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>

              </div>
            ))}
          </div>

          {/* ================= KITUFE CHA "VIEW ALL" (Kinaonekana kwenye Hover) ================= */}
          <div className="flex justify-center mt-12 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
            <Link 
              to="/zanzibar-tours" 
              className="inline-flex items-center gap-2 bg-transparent border-2 border-[#1b5e36] text-[#1b5e36] font-bold px-8 py-3 rounded-full hover:bg-[#1b5e36] hover:text-white transition-all duration-300"
            >
              View All Zanzibar Tours
              <ArrowRight size={18} />
            </Link>
          </div>
          
        </div>

        {/* ================= WHERE WE TAKE YOU ================= */}
        <div className="w-full bg-[#f5f8f4] py-20 mt-20 border-y border-[#087443]/10">
          <div className="max-w-[1440px] mx-auto px-6 md:px-12">
            <div className="text-center mb-12" data-tour-reveal>
              <span className="inline-flex items-center gap-2 rounded-full bg-[#087443]/10 px-4 py-2 text-xs font-bold tracking-[3px] text-[#087443]"><MapPin size={15} /> ZANZIBAR DESTINATIONS</span>
              <h2 className="mt-5 text-3xl md:text-5xl font-bold text-[#10243A]" style={{ fontFamily: "'Playfair Display', serif" }}>Where We Take You in Zanzibar</h2>
              <p className="mt-4 text-gray-600 md:text-lg">Explore the island&apos;s most beautiful and iconic locations</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {[
                { name: 'Nungwi Beach', desc: 'Pristine white sand & crystal waters', image: '/Trip/kendwa.jpeg', icon: '🏖️' },
                { name: 'Stone Town', desc: 'UNESCO World Heritage Site', image: '/Trip/stonetown.jpeg', icon: '🏛️' },
                { name: 'Mnemba Island', desc: 'Dolphin watching & snorkeling', image: '/Trip/mnemba.jpeg', icon: '🐬' },
                { name: 'Jozani Forest', desc: 'Home to red colobus monkeys', image: '/Trip/jozani.jpg', icon: '🐒' },
                { name: 'Prison Island', desc: 'Giant tortoise sanctuary', image: '/Trip/prisonIland.jpg', icon: '🐢' },
                { name: 'Kendwa Beach', desc: 'Famous full moon parties', image: '/Trip/kendwa.jpeg', icon: '🌅' },
                { name: 'Spice Farms', desc: 'Aromatic spice tours', image: '/Trip/stonetown.jpeg', icon: '🌿' },
                { name: 'Nakupenda', desc: 'Stunning sandbank paradise', image: '/Trip/paje.jpeg', icon: '🏝️' }
              ].map((dest, index) => (
                <Link key={dest.name} to="/destination" className="group relative h-[270px] overflow-hidden rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2" data-tour-reveal data-delay={(index % 4) + 1}>
                  <img src={dest.image} alt={dest.name} className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#10243A]/95 via-[#10243A]/25 to-transparent" />
                  <div className="absolute left-4 top-4 text-2xl drop-shadow-lg">{dest.icon}</div>
                  <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                    <h3 className="text-xl font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>{dest.name}</h3>
                    <p className="text-sm text-white/80 mt-1">{dest.desc}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        <WhyUs />

      </div>
    </>
  );
};

export default CardTour;
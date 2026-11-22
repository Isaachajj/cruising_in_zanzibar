// src/components/GuestsSay.jsx
import { useState } from 'react';
import { 
  Star, ChevronLeft, ChevronRight, MessageCircle, 
  Quote, ArrowRight 
} from 'lucide-react';

const reviews = [
  {
    id: 1,
    stars: 5,
    text: "The Zanzibar Tour was simply amazing! Our guide was fantastic and the experience unforgettable.",
    name: "Sarah Mitchell",
    country: "United Kingdom",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    id: 2,
    stars: 5,
    text: "Cruising in Zanzibar provided excellent service. Highly recommended!",
    name: "James Thompson",
    country: "Australia",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    id: 3,
    stars: 5,
    text: "Beautiful beaches, wonderful people and great organization.",
    name: "Maria Gonzalez",
    country: "Spain",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg"
  },
  {
    id: 4,
    stars: 5,
    text: "An unforgettable experience in Zanzibar. We will definitely come back!",
    name: "David Wilson",
    country: "Canada",
    avatar: "https://randomuser.me/api/portraits/men/75.jpg"
  },
  {
    id: 5,
    stars: 5,
    text: "The Safari was out of this world. Our guide knew exactly where to find the Big Five!",
    name: "Emma Watson",
    country: "USA",
    avatar: "https://randomuser.me/api/portraits/women/90.jpg"
  },
  {
    id: 6,
    stars: 5,
    text: "From the moment we landed, everything was taken care of. A truly premium experience.",
    name: "Liam Neeson",
    country: "Ireland",
    avatar: "https://randomuser.me/api/portraits/men/22.jpg"
  }
];

const GuestsSay = () => {
  // Kwa sasa tunaonyesha wote, lakini unaweza kuweka slider logic baadaye.
  // Kwa muonekano wa picha, tunaonyesha 4 kwa wakati mmoja kwenye desktop.
  const [startIndex, setStartIndex] = useState(0);
  const itemsToShow = 4;

  const nextSlide = () => {
    if (startIndex + itemsToShow < reviews.length) {
      setStartIndex(startIndex + 1);
    }
  };

  const prevSlide = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  const visibleReviews = reviews.slice(startIndex, startIndex + itemsToShow);

  return (
    <section className="relative w-full bg-[#fffdf5] py-20 font-sans overflow-hidden">
      
      {/* Mapambo ya Majani (Palm Shadows) */}
      <div className="absolute top-0 left-0 w-64 h-64 opacity-10 pointer-events-none -translate-x-1/4 -translate-y-1/4" style={{ backgroundImage: `url('https://www.transparentpng.com/thumb/palm-tree/palm-tree-transparent-image-2.png')`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat' }}></div>
      <div className="absolute top-0 right-0 w-64 h-64 opacity-10 pointer-events-none translate-x-1/4 -translate-y-1/4 rotate-45" style={{ backgroundImage: `url('https://www.transparentpng.com/thumb/palm-tree/palm-tree-transparent-image-2.png')`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat' }}></div>

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 relative z-10">
        
        {/* Kichwa cha Sehemu */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-[#F5B91B] bg-white text-[#087443] font-bold tracking-widest text-xs md:text-sm mb-6 shadow-sm">
            <MessageCircle size={18} className="text-[#087443]" />
            REVIEWS
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#10243A] mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            What Our Guests Say
          </h2>
          
          {/* Takwimu za Rating */}
          <div className="flex items-center justify-center gap-8 mt-6">
            <div className="text-center">
              <div className="flex items-center justify-center gap-1 text-3xl font-bold text-[#10243A]">
                <Star size={28} className="text-[#F5B91B]" fill="currentColor" />
                4.8
              </div>
              <p className="text-sm text-gray-500 mt-1">Average Rating</p>
            </div>
            <div className="w-px h-12 bg-gray-300"></div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-1 text-3xl font-bold text-[#10243A]">
                <Star size={28} className="text-[#F5B91B]" fill="currentColor" />
                5.0
              </div>
              <p className="text-sm text-gray-500 mt-1">From 1,000+ Reviews</p>
            </div>
          </div>
        </div>

        {/* Slider ya Kadi */}
        <div className="relative">
          {/* Vishale vya Kushoto na Kulia */}
          <button 
            onClick={prevSlide} 
            disabled={startIndex === 0}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-6 z-20 bg-[#087443] text-white p-2 rounded-full shadow-lg hover:bg-green-800 transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button 
            onClick={nextSlide} 
            disabled={startIndex + itemsToShow >= reviews.length}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-6 z-20 bg-[#087443] text-white p-2 rounded-full shadow-lg hover:bg-green-800 transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronRight size={24} />
          </button>

          {/* Grid ya Maoni */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {visibleReviews.map((review) => (
              <div 
                key={review.id} 
                className="home-pop-card bg-white p-6 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.04)] border border-gray-100 flex flex-col justify-between hover:shadow-xl transition-shadow duration-300 relative"
              >
                {/* Alama ya Quote */}
                <Quote size={40} className="absolute top-4 right-4 text-green-50 z-0" />

                <div className="relative z-10">
                  {/* Stars */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(review.stars)].map((_, i) => (
                      <Star key={i} size={16} className="text-[#F5B91B]" fill="currentColor" />
                    ))}
                  </div>

                  {/* Text */}
                  <p className="text-gray-600 text-sm italic mb-6 leading-relaxed">
                    "{review.text}"
                  </p>
                </div>

                {/* Mtu (Avatar & Name) */}
                <div className="flex items-center gap-3 relative z-10 mt-auto pt-4 border-t border-gray-50">
                  <img 
                    src={review.avatar} 
                    alt={review.name} 
                    loading="lazy"
                    decoding="async"
                    className="w-10 h-10 rounded-full object-cover border-2 border-white shadow-sm"
                  />
                  <div>
                    <h4 className="text-sm font-bold text-[#10243A]">{review.name}</h4>
                    <p className="text-xs text-gray-500">{review.country}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Kitufe cha Read More */}
        <div className="text-center mt-12">
          <button className="inline-flex items-center gap-2 bg-[#087443] text-white font-bold px-8 py-3 rounded-full hover:bg-green-800 transition-all duration-300 shadow-md">
            Read More Reviews
            <ArrowRight size={18} />
          </button>
        </div>

      </div>
    </section>
  );
};

export default GuestsSay;

// src/components/WhyUs.jsx
import React from 'react';
import { 
  Star, Diamond, ShieldCheck, Lock, 
  Headphones, Zap, TreePalm 
} from 'lucide-react';

const features = [
  {
    icon: <Star size={28} className="text-[#087443]" />,
    title: 'Local Expert Guides',
    description: 'Explore Zanzibar with experienced local guides.',
    bgImage: '/Trip/jozani.jpg' // Badilisha na picha yako
  },
  {
    icon: <Diamond size={28} className="text-[#087443]" />,
    title: 'Tailor-Made Itineraries',
    description: 'Custom tours designed just for you.',
    bgImage: '/Trip/kendwa.jpeg' // Badilisha na picha yako
  },
  {
    icon: <ShieldCheck size={28} className="text-[#087443]" />,
    title: 'Best Price Guarantee',
    description: 'Get the best value for your money.',
    bgImage: '/Trip/safari blue.jpeg' // Badilisha na picha yako
  },
  {
    icon: <Lock size={28} className="text-[#087443]" />,
    title: 'Licensed & Insured',
    description: 'Travel with confidence and peace of mind.',
    bgImage: '/Trip/mnemba.jpeg' // Badilisha na picha yako
  },
  {
    icon: <Headphones size={28} className="text-[#087443]" />,
    title: '24/7 Support',
    description: 'We are always here to assist you.',
    bgImage: '/Trip/stonetown.jpeg' // Badilisha na picha yako
  },
  {
    icon: <Zap size={28} className="text-[#087443]" />,
    title: 'Fast Response',
    description: 'Quick and responsive service.',
    bgImage: '/Trip/paje.jpeg' // Badilisha na picha yako
  }
];

const WhyUs = () => {
  return (
    <section className="relative w-full bg-[#f8fbf9] py-20 font-sans overflow-hidden">
      
      {/* Mapambo ya Majani (Palm Shadows) */}
      <div className="absolute top-0 left-0 w-64 h-64 opacity-10 pointer-events-none -translate-x-1/4 -translate-y-1/4" style={{ backgroundImage: `url('https://www.transparentpng.com/thumb/palm-tree/palm-tree-transparent-image-2.png')`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat' }}></div>
      <div className="absolute top-0 right-0 w-64 h-64 opacity-10 pointer-events-none translate-x-1/4 -translate-y-1/4 rotate-45" style={{ backgroundImage: `url('https://www.transparentpng.com/thumb/palm-tree/palm-tree-transparent-image-2.png')`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat' }}></div>

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 relative z-10">
        
        {/* Kichwa cha Sehemu */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-[#F5B91B] bg-white text-[#087443] font-bold tracking-widest text-xs md:text-sm mb-6 shadow-sm">
            <TreePalm size={18} className="text-[#087443]" />
            WHY CHOOSE US
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#10243A] mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            Why Choose Cruising in Zanzibar
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            Experience the best of Zanzibar with our professional and reliable tour services.
          </p>
          <div className="flex justify-center mt-6">
             <svg width="100" height="15" viewBox="0 0 100 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 10C25 10 25 5 45 5C65 5 65 10 85 10C90 10 95 7 95 7" stroke="#F5B91B" strokeWidth="3" strokeLinecap="round"/>
             </svg>
          </div>
        </div>

        {/* Grid ya Kadi 6 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="group relative bg-white rounded-2xl p-6 shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_15px_30px_rgba(8,116,67,0.1)] transition-all duration-300 border border-gray-100 flex items-center gap-4 overflow-hidden hover:-translate-y-1"
            >
              {/* Picha ya Background inayofifia (Subtle) */}
              <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                <img src={feature.bgImage} alt="" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent"></div>
              </div>

              {/* Icon */}
              <div className="relative z-10 flex-shrink-0 w-14 h-14 rounded-full bg-green-50 flex items-center justify-center border border-green-100 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>

              {/* Text */}
              <div className="relative z-10">
                <h3 className="text-lg font-bold text-[#10243A] mb-1 group-hover:text-[#087443] transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhyUs;
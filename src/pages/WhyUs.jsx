// src/components/WhyUs.jsx
import { 
  Star, Diamond, ShieldCheck, Lock, 
  Headphones, Zap, TreePalm 
} from 'lucide-react';

const features = [
  {
    icon: <Star size={25} />,
    title: 'Local Expert Guides',
    description: 'Explore Zanzibar with experienced local guides.'
  },
  {
    icon: <Diamond size={25} />,
    title: 'Tailor-Made Itineraries',
    description: 'Custom tours designed just for you.'
  },
  {
    icon: <ShieldCheck size={25} />,
    title: 'Best Price Guarantee',
    description: 'Get the best value for your money.'
  },
  {
    icon: <Lock size={25} />,
    title: 'Licensed & Insured',
    description: 'Travel with confidence and peace of mind.'
  },
  {
    icon: <Headphones size={25} />,
    title: '24/7 Support',
    description: 'We are always here to assist you.'
  },
  {
    icon: <Zap size={25} />,
    title: 'Fast Response',
    description: 'Quick and responsive service.'
  }
];

const WhyUs = () => {
  return (
    <section className="why-choose-section relative w-full overflow-hidden bg-[#F8FBF9] py-16 font-sans md:py-20">
      <div className="why-choose-glow why-choose-glow-left" aria-hidden="true"></div>
      <div className="why-choose-glow why-choose-glow-right" aria-hidden="true"></div>

      <div className="relative z-10 mx-auto max-w-[1440px] px-6 md:px-12">
        
        {/* Kichwa cha Sehemu */}
        <div className="mb-10 text-center md:mb-12">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#F5B91B]/60 bg-white px-5 py-2 font-bold tracking-[0.16em] text-xs text-[#087443] shadow-sm md:text-sm">
            <TreePalm size={18} />
            WHY CHOOSE US
          </div>
          <h2 className="mb-4 font-serif text-3xl font-bold text-[#07566D] md:text-5xl" style={{ fontFamily: "'Playfair Display', serif" }}>
            Why Choose Cruising in Zanzibar
          </h2>
          <p className="mx-auto max-w-2xl text-sm leading-7 text-[#557078] md:text-base">
            Experience the best of Zanzibar with our professional and reliable tour services.
          </p>
          <div className="mx-auto mt-6 flex w-28 items-center gap-2">
            <span className="h-1 flex-1 rounded-full bg-[#087443]"></span>
            <span className="h-2.5 w-2.5 rotate-45 rounded-sm bg-[#F5B91B]"></span>
            <span className="h-1 flex-1 rounded-full bg-[#087443]/25"></span>
          </div>
        </div>

        {/* Grid ya Kadi 6 */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 md:gap-5">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="why-choose-card home-pop-card group relative flex items-center gap-4 overflow-hidden rounded-2xl border border-[#E4EEE8] bg-white p-5 shadow-[0_5px_18px_rgba(7,86,109,0.05)] transition-all duration-300 hover:border-[#C9E2D4] hover:shadow-[0_12px_28px_rgba(7,86,109,0.1)] sm:p-5"
            >
              <div className="why-choose-icon relative z-10 flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full border border-[#DCEFE4] bg-[#EFF8F2] text-[#087443] transition-all duration-300 group-hover:scale-105 group-hover:bg-[#087443] group-hover:text-white">
                {feature.icon}
              </div>
              <div className="relative z-10 min-w-0">
                <span className="mb-1 block text-[9px] font-bold tracking-[0.16em] text-[#B28A2B]">BENEFIT 0{index + 1}</span>
                <h3 className="mb-1 font-serif text-lg font-bold leading-snug text-[#07566D] transition-colors group-hover:text-[#087443]">
                  {feature.title}
                </h3>
                <p className="text-xs leading-relaxed text-[#557078] sm:text-[13px]">
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

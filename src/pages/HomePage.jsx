import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CardTour from './CardTour';
import Packages from './Packages';
import FullPackage from './FullPackage';
import WhyUs from './WhyUs';
import GuestsSay from './GuestsSay';
import Footer from './Footer';
import Destination from './Destination';
import { homeHeroSlides } from '../config/heroImages';
import GlobalHeader from '../Components/GlobalHeader';
import {
  MessageCircle,
  Compass,
  Anchor,
  Palmtree,
  Camera,
  ShieldCheck,
  ChevronRight,
  ChevronLeft,
} from 'lucide-react';

const HomePage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const heroSlide = homeHeroSlides[currentSlide];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((previous) => (previous + 1) % homeHeroSlides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const cards = document.querySelectorAll('.homepage-3d .home-pop-card');
    if (!('IntersectionObserver' in window)) {
      cards.forEach((card) => card.classList.add('home-pop-visible'));
      return undefined;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('home-pop-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -24px 0px' });

    cards.forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="homepage-3d flex min-h-screen w-full flex-col font-sans">

      <GlobalHeader />

      {/* ================= HERO SECTION ================= */}
      <section className="mobile-hero mobile-hero-home relative h-[calc(100vh-121px)] min-h-[600px] w-full overflow-hidden bg-gray-900 md:h-[calc(100vh-121px)] md:min-h-[600px]">
        <img
          key={heroSlide.image}
          src={heroSlide.image}
          alt=""
          className="mobile-hero-image mobile-home-image absolute inset-0 h-full w-full object-cover object-center"
        />

        <div className="mobile-hero-overlay absolute inset-0 bg-gradient-to-r from-black/45 via-black/10 to-transparent" />

        {/* Kulia kumeongezwa gap kubwa zaidi kuliko kushoto */}
        <div key={currentSlide} className="mobile-hero-content container relative z-10 mx-auto flex h-full flex-col justify-center pb-20 pl-12 pr-20 sm:pl-20 sm:pr-32 md:pl-32 md:pr-48 lg:pl-44 lg:pr-72 xl:pl-52 xl:pr-80">
          <div className="max-w-2xl text-white">
            <div className="mb-[-15px] flex items-center">
              <h2
                className="mobile-hero-kicker text-[50px] leading-none text-[#FFC107] md:text-[75px]"
                style={{ fontFamily: "'Pacifico', cursive" }}
              >
                {heroSlide.kicker}
              </h2>

              <div className="ml-3 mt-6 flex flex-col space-y-1">
                <div className="h-1 w-5 rotate-12 rounded-full bg-[#FFC107]" />
                <div className="h-1 w-7 -rotate-12 rounded-full bg-[#FFC107]" />
              </div>
            </div>

            <h1
              className="mobile-hero-title mb-4 text-[60px] font-bold leading-none tracking-wide md:text-[90px]"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              {heroSlide.title}
            </h1>

            <p className="mobile-hero-copy mb-8 max-w-md text-[18px] font-light leading-relaxed md:text-[22px]">
              {heroSlide.subtitle}
            </p>

            <div className="mobile-hero-actions mt-4 flex flex-col gap-5 sm:flex-row">
              <Link
                to="/contact"
                className="flex items-center justify-center gap-2 rounded-full bg-[#f5b014] px-10 py-3 text-[16px] font-bold text-gray-900 shadow-lg transition hover:bg-yellow-500"
              >
                <span>Book Now</span>
                <ChevronRight size={18} />
              </Link>

              <Link
                to="/packages"
                className="flex items-center justify-center gap-2 rounded-full border-2 border-white bg-black/20 px-8 py-3 text-[16px] font-bold text-white backdrop-blur-sm transition hover:bg-white hover:text-gray-900"
              >
                <MessageCircle size={18} />
                <span>Our Packages</span>
              </Link>
            </div>
          </div>
        </div>

        <button
          type="button"
          aria-label="Previous slide"
          onClick={() => setCurrentSlide((previous) => (previous - 1 + homeHeroSlides.length) % homeHeroSlides.length)}
          className="mobile-hero-arrow absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-[#1b5e36]/80 p-2 text-white shadow-md backdrop-blur-sm hover:bg-[#1b5e36]"
        >
          <ChevronLeft size={24} />
        </button>

        <button
          type="button"
          aria-label="Next slide"
          onClick={() => setCurrentSlide((previous) => (previous + 1) % homeHeroSlides.length)}
          className="mobile-hero-arrow absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-[#1b5e36]/80 p-2 text-white shadow-md backdrop-blur-sm hover:bg-[#1b5e36]"
        >
          <ChevronRight size={24} />
        </button>
      </section>

      {/* ================= QUICK FEATURES BAR ================= */}
      <section className="relative z-20 mx-auto -mt-16 w-full max-w-5xl px-6">
        <div className="home-pop-card flex flex-wrap items-center justify-center gap-4 rounded-2xl border border-gray-100 bg-white p-5 shadow-[0_10px_40px_rgba(0,0,0,0.1)] md:gap-6">
          <div className="flex items-center gap-3">
            <div className="rounded-full bg-green-50 p-2 text-[#1b5e36]">
              <Compass size={24} />
            </div>
            <div>
              <h4 className="text-[14px] font-bold text-gray-800">Snorkeling</h4>
              <p className="text-[12px] text-gray-500">Adventures</p>
            </div>
          </div>

          <div className="hidden h-12 w-px bg-gray-200 md:block" />

          <div className="flex items-center gap-3">
            <Anchor size={26} className="text-[#1b5e36]" />
            <h4 className="text-[14px] font-bold text-gray-800">Dhow Cruises</h4>
          </div>

          <div className="hidden h-12 w-px bg-gray-200 md:block" />

          <div className="flex items-center gap-3">
            <Palmtree size={26} className="text-[#1b5e36]" />
            <h4 className="text-[14px] font-bold text-gray-800">Beautiful Beaches</h4>
          </div>

          <div className="hidden h-12 w-px bg-gray-200 md:block" />

          <div className="flex items-center gap-3">
            <Camera size={26} className="text-[#1b5e36]" />
            <h4 className="text-[14px] font-bold text-gray-800">Safari Experiences</h4>
          </div>

          <div className="hidden h-12 w-px bg-gray-200 md:block" />

          <div className="flex items-center gap-3">
            <ShieldCheck size={26} className="text-[#1b5e36]" />
            <h4 className="text-[14px] font-bold text-gray-800">Trusted &amp; Reliable</h4>
          </div>
        </div>
      </section>

      {/* ================= TOUR CARDS SECTION ================= */}
      <CardTour showHero={false} showAll={false} />

      {/* ================= SAFARI PACKAGES SECTION ================= */}
      <Packages showHero={false} showDestinations={false} />

      {/* ================= FULL PACKAGE SECTION ================= */}
      <FullPackage />

      {/* ================= DESTINATION SECTION ================= */}
      <Destination showHero={false} />

      {/* ================= WHY US SECTION ================= */}
      <WhyUs />

      {/* ================= GUESTS SAY SECTION ================= */}
      <GuestsSay />

      <div className="h-20 bg-transparent" />

      {/* ================= FOOTER SECTION ================= */}
      <Footer />
    </div>
  );
};

export default HomePage;

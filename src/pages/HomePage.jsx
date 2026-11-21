import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logoT from '../assets/LogoT.jpeg';
import CardTour from './CardTour';
import Packages from './Packages';
import FullPackage from './FullPackage';
import WhyUs from './WhyUs';
import GuestsSay from './GuestsSay';
import Footer from './Footer';
import Destination from './Destination';
import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  Compass,
  Anchor,
  Palmtree,
  Camera,
  ShieldCheck,
  ChevronRight,
  ChevronLeft,
  Menu,
  X,
  Globe,
} from 'lucide-react';

const WHATSAPP_URL = 'https://wa.me/255789922539';

const HomePage = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [language, setLanguage] = useState('English');
  const heroSlides = [
    '/slider/slider11.jpeg',
    '/slider/slider22.jpeg',
    '/slider/slider33.jpg',
    '/slider/slider44.jpeg',
    '/slider/lider55.webp',
    '/slider/lider66.jpeg',
    '/slider/slider99.jpeg'
  ];

  const closeMobileMenu = () => setMobileMenuOpen(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((previous) => (previous + 1) % heroSlides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [heroSlides.length]);

  return (
    <div className="flex min-h-screen w-full flex-col overflow-x-hidden font-sans">

      {/* ================= TOP CONTACT BAR ================= */}
      <div className="relative z-50 w-full bg-[#1b5e36] py-2.5 text-[12px] text-white md:text-[13px]">
        {/* Kushoto kimeachwa; kulia kimeongezwa gap kubwa zaidi */}
        <div className="mx-auto flex w-full max-w-[1440px] items-center justify-between gap-4 pl-12 pr-20 sm:pl-20 sm:pr-32 md:pl-32 md:pr-48 lg:pl-44 lg:pr-72 xl:pl-52 xl:pr-80">
          
          {/* Kushoto: Mawasiliano */}
          <div className="flex min-w-0 items-center gap-4">
            <a href="tel:+255789922539" className="flex shrink-0 items-center gap-2 whitespace-nowrap hover:text-green-200">
              <Phone size={14} />
              <span>+255 789 922 539</span>
            </a>

            <span className="hidden text-white/40 sm:inline">|</span>

            <a href="mailto:info@cruisinginzanzibar.co.tz" className="hidden items-center gap-2 whitespace-nowrap hover:text-green-200 sm:flex">
              <Mail size={14} />
              <span>info@cruisinginzanzibar.co.tz</span>
            </a>

            <span className="hidden text-white/40 lg:inline">|</span>

            <span className="hidden items-center gap-2 whitespace-nowrap lg:flex">
              <MapPin size={14} />
              <span>Nungwi Beach, Zanzibar, Tanzania</span>
            </span>
          </div>

          {/* Kulia: Mitandao ya Kijamii na Support */}
          <div className="flex shrink-0 items-center gap-3 md:gap-4">
            <div className="hidden h-4 items-center gap-3 leading-none sm:flex">
              <a href="#" aria-label="Facebook" className="flex h-4 w-4 items-center justify-center transition-transform duration-200 hover:scale-105">
                <svg width="16" height="16" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="12" fill="#1877F2" />
                  <path d="M16.7 12.7h-2.9v7h-3.2v-7H8.7v-3h1.9V7.9c0-2.3 1.1-3.7 4-3.7.7 0 1.7.1 2.1.2v2.8h-1.4c-1 0-1.5.5-1.5 1.5v1h2.9l-.5 3z" fill="#fff" />
                </svg>
              </a>

              <a href="#" aria-label="Instagram" className="flex h-4 w-4 items-center justify-center transition-transform duration-200 hover:scale-105">
                <svg width="16" height="16" viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5.5" fill="#C13584" />
                  <circle cx="12" cy="12" r="4.2" fill="none" stroke="#fff" strokeWidth="2" />
                  <circle cx="17.2" cy="6.8" r="1.2" fill="#fff" />
                </svg>
              </a>

              <a href="#" aria-label="YouTube" className="flex h-4 w-4 items-center justify-center transition-transform duration-200 hover:scale-105">
                <svg width="17" height="17" viewBox="0 0 24 24">
                  <rect x="1.5" y="5" width="21" height="14" rx="4" fill="#FF0000" />
                  <path d="M10 9l5 3-5 3V9z" fill="#fff" />
                </svg>
              </a>

              <a href="#" aria-label="TikTok" className="flex h-4 w-4 items-center justify-center transition-transform duration-200 hover:scale-105">
                <svg width="16" height="16" viewBox="0 0 24 24">
                  <path d="M14.2 3c.2 2.1 1.4 3.4 3.5 3.5v3.1c-1.2.1-2.3-.3-3.5-.8v6.1c0 6.2-6.8 8.1-9.5 3.6-1.7-2.8-.7-7.7 6-8v3.2c-.5.1-1.1.2-1.6.4-1.5.5-2.2 1.7-1.9 3.1.5 2.4 5.1 3.1 4.7-2V3h2.3z" fill="#fff" />
                </svg>
              </a>
            </div>

            <span className="text-white/40">|</span>

            <div className="flex items-center gap-2 whitespace-nowrap">
              <ShieldCheck size={14} />
              <span>24/7 Support</span>
            </div>

            {/* Language Selector */}
            <div className="flex items-center gap-1.5">
              <Globe size={14} className="shrink-0" />
              <select
                value={language}
                onChange={(event) => setLanguage(event.target.value)}
                aria-label="Choose language"
                className="cursor-pointer border-0 bg-transparent py-1 text-[12px] font-medium text-white outline-none md:text-[13px] [&>option]:text-gray-900"
              >
                <option>English</option>
                <option>French</option>
                <option>Italian</option>
                <option>German</option>
                <option>Russian</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* ================= MAIN NAVBAR ================= */}
      <nav className="sticky top-0 z-40 h-[85px] w-full bg-white shadow-sm">
        {/* Kulia kumeongezwa gap kubwa zaidi kuliko kushoto */}
        <div className="mx-auto flex h-full w-full max-w-[1440px] items-center justify-between gap-2 pl-12 pr-20 sm:pl-20 sm:pr-32 md:pl-32 md:pr-48 lg:pl-44 lg:pr-72 xl:pl-52 xl:pr-80">

          {/* LOGO & BRAND TEXT */}
          <Link to="/" onClick={closeMobileMenu} className="flex shrink-0 items-center">
            <img
              src={logoT}
              alt="Cruising in Zanzibar Logo"
              className="h-[66px] w-[66px] rounded-full object-contain sm:h-[70px] sm:w-[70px]"
            />

            <div className="ml-3 hidden flex-col justify-center border-l-2 border-gray-200 pl-4 sm:flex">
              <span className="whitespace-nowrap font-serif text-[18px] font-bold leading-tight text-[#1b5e36] md:text-[20px]">
                Cruising in Zanzibar
              </span>
              <span className="whitespace-nowrap font-serif text-[14px] font-semibold italic text-[#1d4ed8] md:text-[15px]">
                Tours &amp; Safaris
              </span>
            </div>
          </Link>

          {/* NAVIGATION LINKS */}
          <div className="hidden items-center justify-center gap-2 whitespace-nowrap text-[13px] font-medium text-[#333] lg:flex xl:gap-3.5 xl:text-[14px]">
            <Link to="/" className="rounded-md bg-[#1b5e36] px-3 py-1.5 text-white transition hover:bg-green-800">
              Home
            </Link>

            <Link to="/about" className="transition hover:text-[#1b5e36]">
              About Us
            </Link>

            <Link to="/card-tour" onClick={closeMobileMenu} className="flex cursor-pointer items-center gap-1 transition hover:text-[#1b5e36]">
              Zanzibar Tours
              <ChevronRight size={14} className="rotate-90" />
            </Link>

            <div className="flex cursor-pointer items-center gap-1 transition hover:text-[#1b5e36]">
              Experience Safaris
              <ChevronRight size={14} className="rotate-90" />
            </div>

            <div className="flex cursor-pointer items-center gap-1 transition hover:text-[#1b5e36]">
              Destinations
              <ChevronRight size={14} className="rotate-90" />
            </div>

            <Link to="/contact" className="transition hover:text-[#1b5e36]">
              Contact
            </Link>
          </div>

          {/* ACTION BUTTONS */}
          <div className="hidden shrink-0 items-center gap-2 lg:flex">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="flex shrink-0 items-center justify-center gap-1.5 whitespace-nowrap rounded-full bg-[#2e8b57] px-3 py-1.5 text-[12px] font-semibold text-white transition hover:bg-green-700 xl:px-3.5 xl:text-[12.5px]"
            >
              <MessageCircle size={14} />
              <span>WhatsApp</span>
            </a>

            <Link
              to="/contact"
              className="flex shrink-0 items-center justify-center gap-1.5 whitespace-nowrap rounded-full bg-[#1a365d] px-3 py-1.5 text-[12px] font-semibold text-white transition hover:bg-blue-900 xl:px-3.5 xl:text-[12.5px]"
            >
              <Mail size={14} />
              <span>Request Quote</span>
            </Link>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            type="button"
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gray-200 text-[#1b5e36] lg:hidden"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* RESPONSIVE MENU */}
        {mobileMenuOpen && (
          <div className="absolute left-0 top-full z-50 w-full border-t border-gray-100 bg-white px-6 py-5 text-[#333] shadow-lg lg:hidden">
            <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-4 font-medium">
              <Link to="/" onClick={closeMobileMenu}>Home</Link>
              <Link to="/about" onClick={closeMobileMenu}>About Us</Link>
              <Link to="/card-tour" onClick={closeMobileMenu}>Zanzibar Tours</Link>
              <span>Experience Safaris</span>
              <span>Destinations</span>
              <Link to="/contact" onClick={closeMobileMenu}>Contact</Link>

              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 rounded-full bg-[#2e8b57] px-4 py-3 text-white"
              >
                <MessageCircle size={17} />
                WhatsApp
              </a>

              <Link
                to="/contact"
                onClick={closeMobileMenu}
                className="flex items-center justify-center gap-2 rounded-full bg-[#1a365d] px-4 py-3 text-white"
              >
                <Mail size={17} />
                Request Quote
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* ================= HERO SECTION ================= */}
      <section className="relative h-[calc(100vh-121px)] min-h-[600px] w-full overflow-hidden bg-gray-900 md:h-[calc(100vh-121px)] md:min-h-[600px]">
        <img
          src={heroSlides[currentSlide]}
          alt="Swim with Dolphins"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/45 via-black/10 to-transparent" />

        {/* Kulia kumeongezwa gap kubwa zaidi kuliko kushoto */}
        <div className="container relative z-10 mx-auto flex h-full flex-col justify-center pb-20 pl-12 pr-20 sm:pl-20 sm:pr-32 md:pl-32 md:pr-48 lg:pl-44 lg:pr-72 xl:pl-52 xl:pr-80">
          <div className="max-w-2xl text-white">
            <div className="mb-[-15px] flex items-center">
              <h2
                className="text-[50px] leading-none text-[#FFC107] md:text-[75px]"
                style={{ fontFamily: "'Pacifico', cursive" }}
              >
                Swim with
              </h2>

              <div className="ml-3 mt-6 flex flex-col space-y-1">
                <div className="h-1 w-5 rotate-12 rounded-full bg-[#FFC107]" />
                <div className="h-1 w-7 -rotate-12 rounded-full bg-[#FFC107]" />
              </div>
            </div>

            <h1
              className="mb-4 text-[60px] font-bold leading-none tracking-wide md:text-[90px]"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Wild Dolphins
            </h1>

            <p className="mb-8 max-w-md text-[18px] font-light leading-relaxed md:text-[22px]">
              Mnemba Atoll snorkeling, dhow cruises &amp; unforgettable sunsets
            </p>

            <div className="mt-4 flex flex-col gap-5 sm:flex-row">
              <Link
                to="/contact"
                className="flex items-center justify-center gap-2 rounded-full bg-[#f5b014] px-10 py-3 text-[16px] font-bold text-gray-900 shadow-lg transition hover:bg-yellow-500"
              >
                <span>Book Now</span>
                <ChevronRight size={18} />
              </Link>

              <Link
                to="/contact"
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
          onClick={() => setCurrentSlide((previous) => (previous - 1 + heroSlides.length) % heroSlides.length)}
          className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-[#1b5e36]/80 p-2 text-white shadow-md backdrop-blur-sm hover:bg-[#1b5e36]"
        >
          <ChevronLeft size={24} />
        </button>

        <button
          type="button"
          aria-label="Next slide"
          onClick={() => setCurrentSlide((previous) => (previous + 1) % heroSlides.length)}
          className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-[#1b5e36]/80 p-2 text-white shadow-md backdrop-blur-sm hover:bg-[#1b5e36]"
        >
          <ChevronRight size={24} />
        </button>
      </section>

      {/* ================= QUICK FEATURES BAR ================= */}
      <section className="relative z-20 mx-auto -mt-16 w-full max-w-5xl px-6">
        <div className="flex flex-wrap items-center justify-center gap-4 rounded-2xl border border-gray-100 bg-white p-5 shadow-[0_10px_40px_rgba(0,0,0,0.1)] md:gap-6">
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
      <CardTour showHero={false} />

      {/* ================= SAFARI PACKAGES SECTION ================= */}
      <Packages showHero={false} />

      {/* ================= FULL PACKAGE SECTION ================= */}
      <FullPackage />

      {/* ================= WHY US SECTION ================= */}
      <WhyUs />

      {/* ================= DESTINATION SECTION ================= */}
      <Destination showHero={false} />

      {/* ================= GUESTS SAY SECTION ================= */}
      <GuestsSay />

      {/* FLOATING WHATSAPP BUTTON */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat with us on WhatsApp"
        className="fixed bottom-6 right-6 z-50 flex items-center justify-center rounded-full bg-[#25D366] p-3 text-white shadow-lg transition hover:bg-green-500"
      >
        <MessageCircle size={32} />
      </a>

      <div className="h-20 bg-transparent" />

      {/* ================= FOOTER SECTION ================= */}
      <Footer />
    </div>
  );
};

export default HomePage;
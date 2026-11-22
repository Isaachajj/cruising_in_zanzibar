import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logoT from '../assets/LogoT.webp';
import { useLanguage } from '../i18n/LanguageContext';
import {
  Phone, Mail, MapPin, MessageCircle, ShieldCheck, ChevronRight,
  Menu, X, Globe,
} from 'lucide-react';

const WHATSAPP_URL = 'https://wa.me/255653924851';

const GlobalHeader = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { language, setLanguage } = useLanguage();
  const { pathname } = useLocation();
  const closeMobileMenu = () => setMobileMenuOpen(false);
  const isActive = (path) => {
    if (path === '/') return pathname === '/';
    if (path === '/card-tour') return pathname === path || pathname.startsWith('/tour/') || pathname.startsWith('/full-day-trip/');
    if (path === '/packages') return pathname === path || pathname.startsWith('/safari/') || pathname.startsWith('/full-package');
    return pathname === path;
  };
  const navClass = (path) => `group relative rounded-md px-3 py-1.5 transition-colors duration-200 after:absolute after:bottom-0 after:left-3 after:right-3 after:h-[2px] after:origin-left after:scale-x-0 after:bg-[#2e8b57] after:transition-transform after:duration-300 hover:after:scale-x-100 ${isActive(path) ? 'bg-[#1b5e36] text-white' : 'text-[#333] hover:text-[#1b5e36]'}`;

  useEffect(() => {
    let frameId = null;
    const updateScrolledState = () => {
      frameId = null;
      setIsScrolled(window.scrollY > 12);
    };
    const handleScroll = () => {
      if (frameId === null) frameId = window.requestAnimationFrame(updateScrolledState);
    };

    updateScrolledState();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (frameId !== null) window.cancelAnimationFrame(frameId);
    };
  }, []);

  return (
    <>
      {/* ================= TOP CONTACT BAR ================= */}
      <div className="relative z-50 w-full bg-[#1b5e36] py-2.5 text-[12px] text-white md:text-[13px]">
        <div className="mx-auto flex w-full max-w-[1200px] flex-col items-center justify-center gap-y-2 px-4 sm:px-6 md:flex-row md:flex-wrap md:gap-x-4 lg:flex-nowrap lg:justify-center lg:gap-x-3 lg:px-6 xl:gap-x-4">
          
          {/* Kushoto: Mawasiliano */}
          <div className="flex w-full flex-wrap items-center justify-center gap-x-3 gap-y-1 md:w-auto md:flex-nowrap md:gap-x-3 lg:flex-none lg:justify-center lg:gap-x-2 xl:gap-x-4">
            <a href="tel:+255653924851" className="flex shrink-0 items-center gap-1.5 whitespace-nowrap hover:text-green-200">
              <Phone size={14} />
              <span>+255 653 924 851</span>
            </a>

            <span className="hidden h-4 w-px shrink-0 bg-white/30 md:block" />

            <a href="mailto:cruisinginzanzibar@gmail.com" className="flex shrink-0 items-center gap-1.5 whitespace-nowrap hover:text-green-200">
              <Mail size={14} />
              <span>cruisinginzanzibar@gmail.com</span>
            </a>

            <span className="hidden h-4 w-px shrink-0 bg-white/30 lg:block" />

            <a href="https://maps.google.com/?q=Nungwi,Zanzibar,Tanzania" target="_blank" rel="noreferrer" className="flex shrink-0 items-center gap-1.5 whitespace-nowrap transition-colors hover:text-green-200">
              <MapPin size={14} />
              <span>Nungwi, Zanzibar, Tanzania</span>
            </a>
          </div>

          {/* Kulia: Mitandao ya Kijamii na Support */}
          <div className="flex w-full flex-wrap items-center justify-center gap-x-3 gap-y-1 md:w-auto md:flex-nowrap md:gap-x-3 lg:gap-x-2 xl:gap-x-3">
            <span className="hidden h-4 w-px shrink-0 bg-white/30 lg:block" />
            <div className="flex h-4 shrink-0 items-center gap-2 leading-none">
              <a href="https://www.facebook.com/cruisinginzanzibartours" target="_blank" rel="noreferrer" aria-label="Facebook" className="flex h-4 w-4 items-center justify-center transition-transform duration-200 hover:scale-105">
                <svg width="16" height="16" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="12" fill="#1877F2" />
                  <path d="M16.7 12.7h-2.9v7h-3.2v-7H8.7v-3h1.9V7.9c0-2.3 1.1-3.7 4-3.7.7 0 1.7.1 2.1.2v2.8h-1.4c-1 0-1.5.5-1.5 1.5v1h2.9l-.5 3z" fill="#fff" />
                </svg>
              </a>

              <a href="https://www.instagram.com/cruising_in_zanzibar_tours_saf/" target="_blank" rel="noreferrer" aria-label="Instagram" className="flex h-4 w-4 items-center justify-center transition-transform duration-200 hover:scale-105">
                <svg width="16" height="16" viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5.5" fill="#C13584" />
                  <circle cx="12" cy="12" r="4.2" fill="none" stroke="#fff" strokeWidth="2" />
                  <circle cx="17.2" cy="6.8" r="1.2" fill="#fff" />
                </svg>
              </a>

              <a href="https://www.youtube.com/@cruisinginzanzibar/shorts" target="_blank" rel="noreferrer" aria-label="YouTube" className="flex h-4 w-4 items-center justify-center transition-transform duration-200 hover:scale-105">
                <svg width="17" height="17" viewBox="0 0 24 24">
                  <rect x="1.5" y="5" width="21" height="14" rx="4" fill="#FF0000" />
                  <path d="M10 9l5 3-5 3V9z" fill="#fff" />
                </svg>
              </a>

              <a href="https://www.tiktok.com/@cruisinginzanzibar" target="_blank" rel="noreferrer" aria-label="TikTok" className="flex h-4 w-4 items-center justify-center transition-transform duration-200 hover:scale-105">
                <svg width="16" height="16" viewBox="0 0 24 24">
                  <path d="M14.2 3c.2 2.1 1.4 3.4 3.5 3.5v3.1c-1.2.1-2.3-.3-3.5-.8v6.1c0 6.2-6.8 8.1-9.5 3.6-1.7-2.8-.7-7.7 6-8v3.2c-.5.1-1.1.2-1.6.4-1.5.5-2.2 1.7-1.9 3.1.5 2.4 5.1 3.1 4.7-2V3h2.3z" fill="#fff" />
                </svg>
              </a>
            </div>

            <span className="h-4 w-px shrink-0 bg-white/30" />

            <div className="flex shrink-0 items-center gap-1.5 whitespace-nowrap">
              <ShieldCheck size={14} />
              <span>24/7 Support</span>
            </div>

            <span className="h-4 w-px shrink-0 bg-white/30" />

            {/* Language Selector */}
            <div className="flex items-center gap-1.5">
              <Globe size={14} className="shrink-0" />
              <select
                value={language}
                onChange={(event) => setLanguage(event.target.value)}
                aria-label="Choose language"
                className="cursor-pointer border-0 bg-transparent py-1 text-[12px] font-medium text-white outline-none md:text-[13px] [&>option]:text-gray-900"
              >
                <option value="en">🇬🇧 English</option>
                <option value="ru">🇷🇺 Russian</option>
                <option value="fr">🇫🇷 Français</option>
                <option value="de">🇩🇪 Deutsch</option>
                <option value="it">🇮🇹 Italiano</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* ================= MAIN NAVBAR ================= */}
      <nav
        className={`sticky top-0 z-40 w-full border-b transition-[height,background-color,border-color,box-shadow,backdrop-filter] duration-300 ease-out ${isScrolled ? 'h-[64px] border-emerald-900/15 shadow-[0_8px_28px_rgba(12,74,48,0.10)] sm:h-[74px]' : 'h-[72px] border-transparent bg-white shadow-sm sm:h-[85px]'}`}
        style={isScrolled ? { backgroundColor: 'rgba(255, 255, 255, 0.82)', backdropFilter: 'blur(18px)', WebkitBackdropFilter: 'blur(18px)' } : undefined}
      >
        {/* Kulia kumeongezwa gap kubwa zaidi kuliko kushoto */}
        <div className="desktop-navbar-container mx-auto flex h-full w-full max-w-[1200px] items-center justify-between gap-2 pl-12 pr-20 sm:pl-20 sm:pr-32 md:pl-32 md:pr-48 lg:pl-44 lg:pr-72 xl:pl-52 xl:pr-80 max-[1600px]:!px-6 min-[1024px]:!px-3">

          {/* LOGO & BRAND TEXT */}
          <Link to="/" onClick={closeMobileMenu} className="flex shrink-0 items-center">
            <img
              src={logoT}
              alt="Cruising in Zanzibar Logo"
              width="70"
              height="70"
              fetchPriority="high"
              className={`w-[52px] rounded-full object-contain transition-[height,width] duration-300 sm:w-[70px] lg:w-[54px] xl:w-[70px] ${isScrolled ? 'h-[48px] sm:h-[60px] lg:h-[48px] xl:h-[60px]' : 'h-[52px] sm:h-[70px] lg:h-[54px] xl:h-[70px]'}`}
            />

            <div className="desktop-navbar-brand-copy ml-2 flex min-w-0 flex-col justify-center sm:ml-3 sm:border-l-2 sm:border-gray-200 sm:pl-4">
              <span className="whitespace-nowrap font-serif text-[13px] font-bold leading-tight text-[#1b5e36] sm:text-[18px] md:text-[20px]">
                Cruising in Zanzibar
              </span>
              <span className="whitespace-nowrap font-serif text-[10px] font-semibold italic text-[#1d4ed8] sm:text-[14px] md:text-[15px]">
                Tours &amp; Safaris
              </span>
            </div>
          </Link>

          {/* NAVIGATION LINKS */}
          <div className="desktop-navbar-links hidden items-center justify-center gap-2 whitespace-nowrap text-[13px] font-medium text-[#333] lg:flex xl:gap-3.5 xl:text-[14px]">
            <Link to="/" aria-current={isActive('/') ? 'page' : undefined} className={navClass('/')}>
              Home
            </Link>

            <Link to="/about" aria-current={isActive('/about') ? 'page' : undefined} className={navClass('/about')}>
              About Us
            </Link>

            <Link to="/card-tour" aria-current={isActive('/card-tour') ? 'page' : undefined} onClick={closeMobileMenu} className={`${navClass('/card-tour')} flex cursor-pointer items-center gap-1`}>
              Zanzibar Tours
              <ChevronRight size={14} className="rotate-90" />
            </Link>

            <Link to="/packages" aria-current={isActive('/packages') ? 'page' : undefined} className={`${navClass('/packages')} flex items-center gap-1`}>
              Experience Safaris
              <ChevronRight size={14} className="rotate-90" />
            </Link>

            <Link to="/destination" aria-current={isActive('/destination') ? 'page' : undefined} className={`${navClass('/destination')} flex cursor-pointer items-center gap-1`}>
              Destinations
              <ChevronRight size={14} className="rotate-90" />
            </Link>

            <Link to="/contact" aria-current={isActive('/contact') ? 'page' : undefined} className={navClass('/contact')}>
              Contact
            </Link>
          </div>

          {/* ACTION BUTTONS */}
          <div className="desktop-navbar-actions hidden shrink-0 items-center gap-2 lg:flex">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="flex shrink-0 items-center justify-center gap-1.5 whitespace-nowrap rounded-full bg-[#2e8b57] px-3 py-1.5 text-[12px] font-semibold text-white transition hover:bg-green-700 xl:px-3.5 xl:text-[12.5px]"
            >
              <MessageCircle size={14} />
              <span>WhatsApp</span>
            </a>

            <a
              href="mailto:cruisinginzanzibar@gmail.com?subject=Tour%20or%20Safari%20Quote%20Request"
              className="flex shrink-0 items-center justify-center gap-1.5 whitespace-nowrap rounded-full bg-[#006B8F] px-3 py-1.5 text-[12px] font-semibold text-white shadow-sm transition duration-200 hover:-translate-y-0.5 hover:bg-[#005B78] hover:shadow-md xl:px-3.5 xl:text-[12.5px]"
            >
              <Mail size={14} />
              <span>Request Quote</span>
            </a>
          </div>

          {/* MOBILE ACTIONS */}
          <div className="flex shrink-0 items-center gap-2 lg:hidden">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              aria-label="Chat on WhatsApp"
              className="flex h-10 items-center justify-center gap-1.5 rounded-full bg-[#25D366] px-3 text-[13px] font-bold text-white shadow-sm"
            >
              <MessageCircle size={17} />
              <span>WhatsApp</span>
            </a>

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
        </div>

        {/* RESPONSIVE MENU */}
        {mobileMenuOpen && (
          <div className="absolute left-0 top-full z-50 w-full border-t border-gray-100 bg-white px-6 py-5 text-[#333] shadow-lg lg:hidden">
            <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-4 font-medium">
              <Link to="/" onClick={closeMobileMenu} className={isActive('/') ? 'rounded-md bg-[#1b5e36] px-3 py-2 text-white' : ''}>Home</Link>
              <Link to="/about" onClick={closeMobileMenu} className={isActive('/about') ? 'rounded-md bg-[#1b5e36] px-3 py-2 text-white' : ''}>About Us</Link>
              <Link to="/card-tour" onClick={closeMobileMenu} className={isActive('/card-tour') ? 'rounded-md bg-[#1b5e36] px-3 py-2 text-white' : ''}>Zanzibar Tours</Link>
              <Link to="/packages" onClick={closeMobileMenu} className={isActive('/packages') ? 'rounded-md bg-[#1b5e36] px-3 py-2 text-white' : ''}>Experience Safaris</Link>
              <Link to="/destination" onClick={closeMobileMenu} className={isActive('/destination') ? 'rounded-md bg-[#1b5e36] px-3 py-2 text-white' : ''}>Destinations</Link>
              <Link to="/contact" onClick={closeMobileMenu} className={isActive('/contact') ? 'rounded-md bg-[#1b5e36] px-3 py-2 text-white' : ''}>Contact</Link>

              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 rounded-full bg-[#2e8b57] px-4 py-3 text-white"
              >
                <MessageCircle size={17} />
                WhatsApp
              </a>

              <a
                href="mailto:cruisinginzanzibar@gmail.com?subject=Tour%20or%20Safari%20Quote%20Request"
                onClick={closeMobileMenu}
                className="flex items-center justify-center gap-2 rounded-full bg-[#006B8F] px-4 py-3 text-white transition-colors hover:bg-[#005B78]"
              >
                <Mail size={17} />
                Request Quote
              </a>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default GlobalHeader;

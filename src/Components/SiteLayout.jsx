import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Phone, Mail, MapPin, ShieldCheck, MessageCircle,
  ChevronRight, Menu, X, Globe,
} from 'lucide-react';
import logoT from '../assets/LogoT.jpeg';
import Footer from '../pages/Footer';
import { useLanguage } from '../i18n/LanguageContext';

const WHATSAPP_URL = 'https://wa.me/255653924851';

export const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { language, setLanguage } = useLanguage();
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  React.useEffect(() => {
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

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <>
      <div className="relative z-50 w-full bg-[#1b5e36] py-2.5 text-[12px] text-white md:text-[13px]">
        <div className="mx-auto flex w-full max-w-[1440px] items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
          <div className="flex min-w-0 flex-1 items-center gap-4">
            <a href="tel:+255653924851" className="flex shrink-0 items-center gap-2 whitespace-nowrap hover:text-green-200">
              <Phone size={14} /><span>+255 653 924 851</span>
            </a>
            <span className="hidden text-white/40 sm:inline">|</span>
            <a href="mailto:cruisinginzanzibar@gmail.com" className="hidden items-center gap-2 whitespace-nowrap hover:text-green-200 sm:flex">
              <Mail size={14} /><span>cruisinginzanzibar@gmail.com</span>
            </a>
            <span className="hidden text-white/40 lg:inline">|</span>
            <a href="https://maps.google.com/?q=Nungwi,Zanzibar,Tanzania" target="_blank" rel="noreferrer" className="hidden items-center gap-2 whitespace-nowrap transition-colors hover:text-green-200 lg:flex">
              <MapPin size={14} /><span>Nungwi, Zanzibar, Tanzania</span>
            </a>
          </div>

          <div className="flex shrink-0 items-center gap-3 md:gap-4">
            <div className="hidden h-4 items-center gap-3 leading-none xl:flex">
              <a href="https://www.facebook.com/cruisinginzanzibartours" target="_blank" rel="noreferrer" aria-label="Facebook" className="flex h-4 w-4 items-center justify-center transition-transform duration-200 hover:scale-105"><svg width="16" height="16" viewBox="0 0 24 24"><circle cx="12" cy="12" r="12" fill="#1877F2"/><path d="M16.7 12.7h-2.9v7h-3.2v-7H8.7v-3h1.9V7.9c0-2.3 1.1-3.7 4-3.7.7 0 1.7.1 2.1.2v2.8h-1.4c-1 0-1.5.5-1.5 1.5v1h2.9l-.5 3z" fill="#fff"/></svg></a>
              <a href="https://www.instagram.com/cruising_in_zanzibar_tours_saf/" target="_blank" rel="noreferrer" aria-label="Instagram" className="flex h-4 w-4 items-center justify-center transition-transform duration-200 hover:scale-105"><svg width="16" height="16" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5.5" fill="#C13584"/><circle cx="12" cy="12" r="4.2" fill="none" stroke="#fff" strokeWidth="2"/><circle cx="17.2" cy="6.8" r="1.2" fill="#fff"/></svg></a>
              <a href="https://www.youtube.com/@cruisinginzanzibar/shorts" target="_blank" rel="noreferrer" aria-label="YouTube" className="flex h-4 w-4 items-center justify-center transition-transform duration-200 hover:scale-105"><svg width="17" height="17" viewBox="0 0 24 24"><rect x="1.5" y="5" width="21" height="14" rx="4" fill="#FF0000"/><path d="M10 9l5 3-5 3V9z" fill="#fff"/></svg></a>
              <a href="https://www.tiktok.com/@cruisinginzanzibar" target="_blank" rel="noreferrer" aria-label="TikTok" className="flex h-4 w-4 items-center justify-center transition-transform duration-200 hover:scale-105"><svg width="16" height="16" viewBox="0 0 24 24"><path d="M14.2 3c.2 2.1 1.4 3.4 3.5 3.5v3.1c-1.2.1-2.3-.3-3.5-.8v6.1c0 6.2-6.8 8.1-9.5 3.6-1.7-2.8-.7-7.7 6-8v3.2c-.5.1-1.1.2-1.6.4-1.5.5-2.2 1.7-1.9 3.1.5 2.4 5.1 3.1 4.7-2V3h2.3z" fill="#fff"/></svg></a>
            </div>
            <span className="text-white/40">|</span>
            <div className="flex items-center gap-2 whitespace-nowrap"><ShieldCheck size={14} /><span>24/7 Support</span></div>
            <span className="text-white/40">|</span>
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
            <span className="text-white/40">|</span>
          </div>
        </div>
      </div>

      <nav
        className={`sticky top-0 z-40 w-full border-b transition-[height,background-color,border-color,box-shadow,backdrop-filter] duration-300 ease-out ${isScrolled ? 'h-[74px] border-emerald-900/15 shadow-[0_8px_28px_rgba(12,74,48,0.10)]' : 'h-[85px] border-transparent bg-white shadow-sm'}`}
        style={isScrolled ? { backgroundColor: 'rgba(255, 255, 255, 0.82)', backdropFilter: 'blur(18px)', WebkitBackdropFilter: 'blur(18px)' } : undefined}
      >
        <div className="mx-auto flex h-full w-full max-w-[1440px] items-center justify-between gap-2 pl-12 pr-20 sm:pl-20 sm:pr-32 md:pl-32 md:pr-48 lg:pl-44 lg:pr-72 xl:pl-52 xl:pr-80 max-[1600px]:!px-6">
          <Link to="/" onClick={closeMobileMenu} className="flex shrink-0 items-center">
            <img src={logoT} alt="Cruising in Zanzibar Logo" className={`w-[66px] rounded-full object-contain transition-[height] duration-300 sm:w-[70px] ${isScrolled ? 'h-[58px] sm:h-[60px]' : 'h-[66px] sm:h-[70px]'}`} />
            <div className="ml-3 hidden flex-col justify-center border-l-2 border-gray-200 pl-4 sm:flex">
              <span className="whitespace-nowrap font-serif text-[18px] font-bold leading-tight text-[#1b5e36] md:text-[20px]">Cruising in Zanzibar</span>
              <span className="whitespace-nowrap font-serif text-[14px] font-semibold italic text-[#1d4ed8] md:text-[15px]">Tours &amp; Safaris</span>
            </div>
          </Link>

          <div className="hidden items-center justify-center gap-2 whitespace-nowrap text-[13px] font-medium text-[#333] lg:flex xl:gap-3.5 xl:text-[14px]">
            <Link to="/" className={`group relative rounded-md px-3 py-1.5 transition-colors duration-200 after:absolute after:bottom-0 after:left-3 after:right-3 after:h-[2px] after:origin-left after:scale-x-0 after:bg-[#2e8b57] after:transition-transform after:duration-300 hover:after:scale-x-100 ${isActive('/') ? 'bg-[#1b5e36] text-white' : 'text-[#333] hover:text-[#1b5e36]'}`}>Home</Link>
            <Link to="/about" className={`group relative rounded-md px-3 py-1.5 transition-colors duration-200 after:absolute after:bottom-0 after:left-3 after:right-3 after:h-[2px] after:origin-left after:scale-x-0 after:bg-[#2e8b57] after:transition-transform after:duration-300 hover:after:scale-x-100 ${isActive('/about') ? 'bg-[#1b5e36] text-white' : 'hover:text-[#1b5e36]'}`}>About Us</Link>
            <Link to="/card-tour" className={`group relative flex cursor-pointer items-center gap-1 rounded-md px-3 py-1.5 transition-colors duration-200 after:absolute after:bottom-0 after:left-3 after:right-3 after:h-[2px] after:origin-left after:scale-x-0 after:bg-[#2e8b57] after:transition-transform after:duration-300 hover:after:scale-x-100 ${isActive('/card-tour') ? 'bg-[#1b5e36] text-white' : 'hover:text-[#1b5e36]'}`}>Zanzibar Tours <ChevronRight size={14} className="rotate-90" /></Link>
            <Link to="/packages" className={`group relative flex cursor-pointer items-center gap-1 rounded-md px-3 py-1.5 transition-colors duration-200 after:absolute after:bottom-0 after:left-3 after:right-3 after:h-[2px] after:origin-left after:scale-x-0 after:bg-[#2e8b57] after:transition-transform after:duration-300 hover:after:scale-x-100 ${isActive('/packages') ? 'bg-[#1b5e36] text-white' : 'hover:text-[#1b5e36]'}`}>Experience Safaris <ChevronRight size={14} className="rotate-90" /></Link>
            <Link to="/destination" className={`group relative flex cursor-pointer items-center gap-1 rounded-md px-3 py-1.5 transition-colors duration-200 after:absolute after:bottom-0 after:left-3 after:right-3 after:h-[2px] after:origin-left after:scale-x-0 after:bg-[#2e8b57] after:transition-transform after:duration-300 hover:after:scale-x-100 ${isActive('/destination') ? 'bg-[#1b5e36] text-white' : 'hover:text-[#1b5e36]'}`}>Destinations <ChevronRight size={14} className="rotate-90" /></Link>
            <Link to="/contact" className={`group relative rounded-md px-3 py-1.5 transition-colors duration-200 after:absolute after:bottom-0 after:left-3 after:right-3 after:h-[2px] after:origin-left after:scale-x-0 after:bg-[#2e8b57] after:transition-transform after:duration-300 hover:after:scale-x-100 ${isActive('/contact') ? 'bg-[#1b5e36] text-white' : 'hover:text-[#1b5e36]'}`}>Contact</Link>
          </div>

          <div className="hidden shrink-0 items-center gap-2 lg:flex">
            <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="flex shrink-0 items-center justify-center gap-1.5 whitespace-nowrap rounded-full bg-[#2e8b57] px-3 py-1.5 text-[12px] font-semibold text-white transition hover:bg-green-700 xl:px-3.5 xl:text-[12.5px]"><MessageCircle size={14} /><span>WhatsApp</span></a>
            <a href="mailto:cruisinginzanzibar@gmail.com?subject=Tour%20or%20Safari%20Quote%20Request" className="flex shrink-0 items-center justify-center gap-1.5 whitespace-nowrap rounded-full bg-[#1a365d] px-3 py-1.5 text-[12px] font-semibold text-white transition hover:bg-blue-900 xl:px-3.5 xl:text-[12.5px]"><Mail size={14} /><span>Request Quote</span></a>
          </div>

          <button type="button" aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'} aria-expanded={mobileMenuOpen} onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gray-200 text-[#1b5e36] lg:hidden">
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="absolute left-0 top-full z-50 w-full border-t border-gray-100 bg-white px-6 py-5 text-[#333] shadow-lg lg:hidden">
            <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-4 font-medium">
              <Link to="/" onClick={closeMobileMenu} className={isActive('/') ? 'rounded-md bg-[#1b5e36] px-3 py-2 text-white' : ''}>Home</Link>
              <Link to="/about" onClick={closeMobileMenu} className={isActive('/about') ? 'rounded-md bg-[#1b5e36] px-3 py-2 text-white' : ''}>About Us</Link>
              <Link to="/card-tour" onClick={closeMobileMenu} className={isActive('/card-tour') ? 'rounded-md bg-[#1b5e36] px-3 py-2 text-white' : ''}>Zanzibar Tours</Link>
              <Link to="/packages" onClick={closeMobileMenu} className={isActive('/packages') ? 'rounded-md bg-[#1b5e36] px-3 py-2 text-white' : ''}>Experience Safaris</Link>
              <Link to="/destination" onClick={closeMobileMenu} className={isActive('/destination') ? 'rounded-md bg-[#1b5e36] px-3 py-2 text-white' : ''}>Destinations</Link>
              <Link to="/contact" onClick={closeMobileMenu} className={isActive('/contact') ? 'rounded-md bg-[#1b5e36] px-3 py-2 text-white' : ''}>Contact</Link>
              <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 rounded-full bg-[#2e8b57] px-4 py-3 text-white"><MessageCircle size={17} />WhatsApp</a>
              <a href="mailto:cruisinginzanzibar@gmail.com?subject=Tour%20or%20Safari%20Quote%20Request" onClick={closeMobileMenu} className="flex items-center justify-center gap-2 rounded-full bg-[#1a365d] px-4 py-3 text-white"><Mail size={17} />Request Quote</a>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

const SiteLayout = ({ children }) => {
  const location = useLocation();

  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  return (
    <div className="min-h-screen w-full bg-gray-50 font-sans">
      <Navbar />
      <main key={location.pathname} className="animate-[pageFade_.45s_ease-out]">{children}</main>
      <Footer />
    </div>
  );
};

export default SiteLayout;

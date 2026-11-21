// src/components/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Phone, Mail, MapPin, Clock,
  MessageCircle, Send, ArrowRight, 
  CheckCircle2, Award, TreePalm, Handshake, ShieldCheck
} from 'lucide-react';
import logoT from '../assets/LogoT.jpeg'; // Hakikisha path hii ni sahihi

const Footer = () => {
  return (
    <footer className="w-full font-sans">
      
      {/* ================= 1. CTA SECTION (Ready for Your Adventure?) ================= */}
      <div className="relative w-full bg-[#10243A] py-16 overflow-hidden">
        {/* Background Image yenye giza */}
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#10243A] via-[#10243A]/80 to-transparent"></div>
        
        <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-12 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            Ready for Your Adventure?
          </h2>
          <p className="text-gray-300 text-base md:text-lg mb-8 max-w-2xl mx-auto">
            Let our local experts craft your perfect Zanzibar tour or Tanzania safari.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/card-tour" className="flex items-center justify-center gap-2 bg-[#1b5e36] text-white font-bold px-8 py-3 rounded-full hover:bg-green-800 transition-colors w-full sm:w-auto shadow-lg">
              Zanzibar Tours <ArrowRight size={18} />
            </Link>
            <Link to="/packages" className="flex items-center justify-center gap-2 bg-[#F5B91B] text-[#10243A] font-bold px-8 py-3 rounded-full hover:bg-yellow-500 transition-colors w-full sm:w-auto shadow-lg">
              Tanzania Safaris <ArrowRight size={18} />
            </Link>
            <a href="https://wa.me/255653924851" target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 bg-[#25D366] text-white font-bold px-8 py-3 rounded-full hover:bg-green-600 transition-colors w-full sm:w-auto shadow-lg">
              <MessageCircle size={18} /> WhatsApp Us
            </a>
          </div>
        </div>
      </div>

      {/* ================= 2. MAIN FOOTER CONTENT ================= */}
      <div className="relative w-full bg-[#10243A] text-white pt-16 pb-12 border-t-4 border-[#1b5e36]">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12">
          
          {/* Grid Kuu (Cols 4) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
            
            {/* Column 1: Logo & Brand */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-16 h-16 bg-white rounded-full p-1">
                  <img src={logoT} alt="Cruising in Zanzibar Logo" className="w-full h-full object-contain rounded-full" />
                </div>
                <div>
                  <h3 className="text-xl font-bold leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
                    Cruising in Zanzibar
                  </h3>
                  <p className="text-xs text-[#F5B91B] font-semibold tracking-widest uppercase mt-1">Tours &amp; Safaris</p>
                </div>
              </div>
              
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                Premium Zanzibar Tours & Tanzania Safari Adventures. Custom Safaris, Kilimanjaro Treks & Zanzibar Holidays designed by local experts based in Nungwi.
              </p>
              
              {/* Social Icons */}
              <div className="flex items-center gap-3 mb-6">
                <a href="#" className="w-9 h-9 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-[#1b5e36] transition-colors font-bold text-sm" aria-label="Facebook">f</a>
                <a href="#" className="w-9 h-9 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-[#1b5e36] transition-colors font-bold text-xs" aria-label="Instagram">ig</a>
                <a href="#" className="w-9 h-9 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-[#1b5e36] transition-colors font-bold text-xs" aria-label="YouTube">▶</a>
                <a href="#" className="w-9 h-9 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-[#1b5e36] transition-colors font-bold text-xs" aria-label="LinkedIn">in</a>
              </div>

              {/* Badges */}
              <div className="flex flex-wrap gap-2">
                <span className="inline-flex items-center gap-1.5 bg-[#087443]/20 text-[#1b5e36] text-xs font-bold px-3 py-1.5 rounded-md border border-[#087443]/30">
                  <ShieldCheck size={14} /> Licensed Tour Operator
                </span>
                <span className="inline-flex items-center gap-1.5 bg-[#F5B91B]/20 text-[#F5B91B] text-xs font-bold px-3 py-1.5 rounded-md border border-[#F5B91B]/30">
                  <CheckCircle2 size={14} /> 5.0 Rating
                </span>
              </div>
            </div>

            {/* Column 2: Quick Links */}
            <div>
              <h4 className="text-lg font-bold mb-6 text-white pb-2 border-b-2 border-[#1b5e36] inline-block" style={{ fontFamily: "'Playfair Display', serif" }}>
                Quick Links
              </h4>
              <ul className="space-y-3 text-sm text-gray-400 mt-2">
                {['Home', 'About Us', 'Zanzibar Tours', 'Tanzania Safaris', 'Destinations', 'Blog', 'Contact'].map((item, i) => (
                  <li key={i}>
                    <Link to="#" className="flex items-center gap-2 hover:text-white transition-colors group">
                      <span className="text-[#1b5e36] font-bold group-hover:translate-x-1 transition-transform">»</span> {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Zanzibar Tours */}
            <div>
              <h4 className="text-lg font-bold mb-6 text-white pb-2 border-b-2 border-[#1b5e36] inline-block" style={{ fontFamily: "'Playfair Display', serif" }}>
                Zanzibar Tours
              </h4>
              <ul className="space-y-3 text-sm text-gray-400 mt-2">
                {['Stone Town Tour', 'Dolphin Snorkeling', 'Spice Farm Tour', 'Safari Blue', 'Sunset Dhow Cruise', 'Prison Island'].map((item, i) => (
                  <li key={i}>
                    <Link to="#" className="flex items-center gap-2 hover:text-white transition-colors group">
                      <span className="text-[#1b5e36] font-bold group-hover:translate-x-1 transition-transform">»</span> {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4: Contact Us */}
            <div>
              <h4 className="text-lg font-bold mb-6 text-white pb-2 border-b-2 border-[#1b5e36] inline-block" style={{ fontFamily: "'Playfair Display', serif" }}>
                Contact Us
              </h4>
              <ul className="space-y-4 text-sm text-gray-400 mb-6 mt-2">
                <li className="flex items-start gap-3">
                  <MapPin size={16} className="text-[#1b5e36] shrink-0 mt-1" />
                  <span>Nungwi Beach, Zanzibar, Tanzania</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone size={16} className="text-[#1b5e36] shrink-0" />
                  <a href="tel:+255653924851" className="hover:text-white">+255 653 924 851</a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail size={16} className="text-[#1b5e36] shrink-0" />
                  <a href="mailto:cruisinginzanzibar@gmail.com" className="hover:text-white">cruisinginzanzibar@gmail.com</a>
                </li>
                <li className="flex items-center gap-3">
                  <MessageCircle size={16} className="text-[#25D366] shrink-0" />
                  <a href="https://wa.me/255653924851" target="_blank" rel="noreferrer" className="hover:text-white">+255 653 924 851</a>
                </li>
                <li className="flex items-center gap-3">
                  <Clock size={16} className="text-[#1b5e36] shrink-0" />
                  <span>Mon - Sun: 7:00 AM – 9:00 PM</span>
                </li>
              </ul>

              {/* Newsletter */}
              <form className="flex items-center bg-white/10 rounded-full overflow-hidden p-1 border border-white/10 focus-within:border-[#1b5e36] transition-colors">
                <input type="email" placeholder="Your email for deals" className="w-full bg-transparent text-white text-sm px-4 py-2 focus:outline-none placeholder-gray-500" required />
                <button type="submit" className="bg-[#1b5e36] text-white w-8 h-8 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors shrink-0">
                  <Send size={14} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* ================= 3. TRUST BADGES (Mstari wa Chini) ================= */}
      <div className="relative z-10 border-t border-white/10 bg-[#10243A]">
        <div className="max-w-[1440px] mx-auto px-6 py-6 flex flex-wrap justify-center lg:justify-between items-center gap-6">
          
          <div className="flex items-center gap-3">
            <CheckCircle2 size={28} className="text-[#1b5e36]" />
            <div>
              <h5 className="text-sm font-bold text-white">Safe & Secure</h5>
              <p className="text-xs text-gray-400">Bookings</p>
            </div>
          </div>

          <div className="hidden lg:block w-px h-10 bg-white/10"></div>

          <div className="flex items-center gap-3">
            <Award size={28} className="text-[#1b5e36]" />
            <div>
              <h5 className="text-sm font-bold text-white">Trusted Travel</h5>
              <p className="text-xs text-gray-400">Partner</p>
            </div>
          </div>

          <div className="hidden lg:block w-px h-10 bg-white/10"></div>

          <div className="flex items-center gap-3">
            <TreePalm size={28} className="text-[#1b5e36]" />
            <div>
              <h5 className="text-sm font-bold text-white">Explore Zanzibar</h5>
              <p className="text-xs text-gray-400">with Confidence</p>
            </div>
          </div>

          <div className="hidden lg:block w-px h-10 bg-white/10"></div>

          <div className="flex items-center gap-3">
            <Handshake size={28} className="text-[#1b5e36]" />
            <div>
              <h5 className="text-sm font-bold text-white">Your Satisfaction</h5>
              <p className="text-xs text-gray-400">Our Priority</p>
            </div>
          </div>
        </div>
      </div>

      {/* ================= 4. BOTTOM COPYRIGHT ================= */}
      <div className="w-full bg-[#10243A] border-t border-white/10">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <div className="text-center md:text-left">
            <p>© 2026 Cruising in Zanzibar Tours &amp; Safaris. All rights reserved. | Licensed Tour Operator - Zanzibar, Tanzania</p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-3 md:gap-5">
            <Link to="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="#" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link to="#" className="hover:text-white transition-colors">Booking Terms</Link>
          </div>

          <p className="text-center md:text-right flex items-center gap-1">
            Proudly based in Nungwi, Zanzibar — The Spice Island of Tanzania 🌴
          </p>
        </div>
      </div>

    </footer>
  );
};

export default Footer;

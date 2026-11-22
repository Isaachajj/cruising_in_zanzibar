
import { Link } from 'react-router-dom';
import {
  Phone, Mail, MapPin, Clock,
  MessageCircle, Send, ArrowRight,
  CheckCircle2, Award, TreePalm, Handshake, ShieldCheck
} from 'lucide-react';

import logoT from '../assets/LogoT.webp';

const socialLinks = [
  { label: 'Facebook', shortLabel: 'f', href: 'https://www.facebook.com/cruisinginzanzibartours' },
  { label: 'Instagram', shortLabel: 'ig', href: 'https://www.instagram.com/cruising_in_zanzibar_tours_saf/' },
  { label: 'YouTube', shortLabel: '▶', href: 'https://www.youtube.com/@cruisinginzanzibar/shorts' },
  { label: 'TikTok', shortLabel: '♪', href: 'https://www.tiktok.com/@cruisinginzanzibar' }
];

const quickLinks = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  { label: 'Zanzibar Tours', to: '/card-tour' },
  { label: 'Tanzania Safaris', to: '/packages' },
  { label: 'Destinations', to: '/destination' },
  { label: 'Contact', to: '/contact' }
];

const tourLinks = [
  { label: 'Stone Town Tour', to: '/tour/2' },
  { label: 'Dolphin Snorkeling', to: '/tour/1' },
  { label: 'Spice Farm Tour', to: '/tour/8' },
  { label: 'Safari Blue', to: '/tour/3' },
  { label: 'Sunset Dhow Cruise', to: '/tour/5' },
  { label: 'Prison Island', to: '/tour/7' }
];

const Footer = () => {
  return (
    <footer className="w-full font-sans overflow-hidden">

      {/* ================= 1. CTA SECTION ================= */}

      <div className="footer-cta relative w-full bg-[#005B78] py-16 overflow-hidden">

        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage: "url('/slider/footer.png')"
          }}
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#005B78]/95 via-[#005B78]/85 to-[#005B78]/65" />

        <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-12 text-center">

          <h2
            className="text-3xl md:text-5xl font-bold text-white mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Ready for Your Adventure?
          </h2>

          <p className="text-gray-200 text-base md:text-lg mb-8 max-w-2xl mx-auto">
            Let our local experts craft your perfect Zanzibar tour or Tanzania safari.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">

            <Link
              to="/card-tour"
              className="flex items-center justify-center gap-2 bg-[#1b5e36] text-white font-bold px-8 py-3 rounded-full hover:bg-green-800 transition-all duration-300 hover:-translate-y-1 w-full sm:w-auto shadow-lg"
            >
              Zanzibar Tours <ArrowRight size={18} />
            </Link>

            <Link
              to="/packages"
              className="flex items-center justify-center gap-2 bg-[#F5B91B] text-[#005B78] font-bold px-8 py-3 rounded-full hover:bg-yellow-500 transition-all duration-300 hover:-translate-y-1 w-full sm:w-auto shadow-lg"
            >
              Tanzania Safaris <ArrowRight size={18} />
            </Link>

            <a
              href="https://wa.me/255653924851"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 bg-[#25D366] text-white font-bold px-8 py-3 rounded-full hover:bg-green-600 transition-all duration-300 hover:-translate-y-1 w-full sm:w-auto shadow-lg"
            >
              <MessageCircle size={18} /> WhatsApp Us
            </a>

          </div>
        </div>
      </div>


      {/* ================= 2. MAIN FOOTER CONTENT ================= */}

      <div
        className="footer-main relative w-full overflow-hidden border-t-4 border-[#087443] bg-cover bg-center pt-16 pb-12 text-white"
        style={{
          backgroundImage: "url('/slider/footer.png')",
          backgroundPosition: 'center 55%',
          backgroundSize: 'cover'
        }}
      >

        {/* Main dark blue overlay - reduced opacity */}
        <div className="absolute inset-0 bg-[#003B55]/45" />

        {/* Ocean blue gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#003B55]/75 via-[#005B78]/40 to-[#003B55]/65" />

        {/* Bottom ocean depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#003B55]/45" />

        <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-12">

          {/* Main Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">

            {/* Column 1: Logo & Brand */}

            <div>

              <div className="flex items-center gap-3 mb-6">

                <div className="w-16 h-16 bg-white rounded-full p-1 shrink-0 shadow-lg">
                  <img
                    src={logoT}
                    alt="Cruising in Zanzibar Logo"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-contain rounded-full"
                  />
                </div>

                <div>
                  <h3
                    className="text-xl font-bold leading-tight"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    Cruising in Zanzibar
                  </h3>

                  <p className="text-xs text-[#F5B91B] font-semibold tracking-widest uppercase mt-1">
                    Tours &amp; Safaris
                  </p>
                </div>

              </div>

              <p className="text-white/95 text-sm leading-relaxed mb-6">
                Premium Zanzibar Tours & Tanzania Safari Adventures. Custom Safaris, Kilimanjaro Treks & Zanzibar Holidays designed by local experts based in Nungwi.
              </p>

              {/* Social Icons */}

              <div className="flex items-center gap-3 mb-6">

                {socialLinks.map(({ label, shortLabel, href }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={label}
                    className="w-9 h-9 rounded-full bg-white/15 border border-white/15 text-white flex items-center justify-center hover:bg-[#087443] hover:-translate-y-1 transition-all duration-300 font-bold text-sm shadow-md"
                  >
                    {shortLabel}
                  </a>
                ))}

              </div>

              {/* Badges */}

              <div className="flex flex-wrap gap-2">

                <span className="inline-flex items-center gap-1.5 bg-[#005B78]/60 backdrop-blur-sm text-[#A7E9C1] text-xs font-bold px-3 py-1.5 rounded-md border border-[#A7E9C1]/40">
                  <ShieldCheck size={14} /> Licensed Tour Operator
                </span>

                <span className="inline-flex items-center gap-1.5 bg-[#F5B91B]/20 backdrop-blur-sm text-[#FFD54F] text-xs font-bold px-3 py-1.5 rounded-md border border-[#F5B91B]/50">
                  <CheckCircle2 size={14} /> 5.0 Rating
                </span>

              </div>

            </div>


            {/* Column 2: Quick Links */}

            <div>

              <h4
                className="text-lg font-bold mb-6 text-white pb-2 border-b-2 border-[#F5B91B] inline-block"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Quick Links
              </h4>

              <ul className="space-y-3 text-sm text-white/95 mt-2">

                {quickLinks.map(({ label, to }) => (
                  <li key={label}>
                    <Link
                      to={to}
                      className="flex items-center gap-2 hover:text-[#F5B91B] transition-colors group"
                    >
                      <span className="text-[#A7E9C1] font-bold group-hover:translate-x-1 transition-transform">
                        »
                      </span>
                      {label}
                    </Link>
                  </li>
                ))}

              </ul>

            </div>


            {/* Column 3: Zanzibar Tours */}

            <div>

              <h4
                className="text-lg font-bold mb-6 text-white pb-2 border-b-2 border-[#F5B91B] inline-block"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Zanzibar Tours
              </h4>

              <ul className="space-y-3 text-sm text-white/95 mt-2">

                {tourLinks.map(({ label, to }) => (
                  <li key={label}>
                    <Link
                      to={to}
                      className="flex items-center gap-2 hover:text-[#F5B91B] transition-colors group"
                    >
                      <span className="text-[#A7E9C1] font-bold group-hover:translate-x-1 transition-transform">
                        »
                      </span>
                      {label}
                    </Link>
                  </li>
                ))}

              </ul>

            </div>


            {/* Column 4: Contact Us */}

            <div>

              <h4
                className="text-lg font-bold mb-6 text-white pb-2 border-b-2 border-[#F5B91B] inline-block"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Contact Us
              </h4>

              <ul className="space-y-4 text-sm text-white/95 mb-6 mt-2">

                <li className="flex items-start gap-3">
                  <MapPin size={16} className="text-[#A7E9C1] shrink-0 mt-1" />
                  <a
                    href="https://maps.google.com/?q=Nungwi,Zanzibar,Tanzania"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-[#F5B91B] transition-colors"
                  >
                    Nungwi, Zanzibar, Tanzania
                  </a>
                </li>

                <li className="flex items-center gap-3">
                  <Phone size={16} className="text-[#A7E9C1] shrink-0" />
                  <a href="tel:+255653924851" className="hover:text-[#F5B91B] transition-colors">
                    +255 653 924 851
                  </a>
                </li>

                <li className="flex items-center gap-3">
                  <Mail size={16} className="text-[#A7E9C1] shrink-0" />
                  <a
                    href="mailto:cruisinginzanzibar@gmail.com"
                    className="hover:text-[#F5B91B] transition-colors break-all"
                  >
                    cruisinginzanzibar@gmail.com
                  </a>
                </li>

                <li className="flex items-center gap-3">
                  <MessageCircle size={16} className="text-[#25D366] shrink-0" />
                  <a
                    href="https://wa.me/255653924851"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-[#F5B91B] transition-colors"
                  >
                    +255 653 924 851
                  </a>
                </li>

                <li className="flex items-center gap-3">
                  <Clock size={16} className="text-[#A7E9C1] shrink-0" />
                  <span>Mon - Sun: 7:00 AM – 9:00 PM</span>
                </li>

              </ul>


              {/* Newsletter */}

              <form
                className="flex items-center bg-[#003B55]/50 backdrop-blur-md rounded-full overflow-hidden p-1 border border-white/40 focus-within:border-[#F5B91B] transition-colors"
                onSubmit={(e) => e.preventDefault()}
              >

                <input
                  type="email"
                  aria-label="Email address for deals"
                  placeholder="Your email for deals"
                  className="w-full min-w-0 bg-transparent text-white text-sm px-4 py-2 focus:outline-none placeholder-white/80"
                  required
                />

                <button
                  type="submit"
                  aria-label="Subscribe"
                  className="bg-[#087443] text-white w-8 h-8 rounded-full flex items-center justify-center hover:bg-[#F5B91B] hover:text-[#003B55] transition-colors shrink-0"
                >
                  <Send size={14} />
                </button>

              </form>

            </div>

          </div>
        </div>
      </div>


      {/* ================= 3. TRUST BADGES ================= */}

      <div className="relative z-10 border-t border-white/20 bg-[#005B78]/95">

        <div className="max-w-[1440px] mx-auto px-6 py-6 grid grid-cols-2 lg:grid-cols-4 gap-6 items-center">

          <div className="flex items-center justify-center lg:justify-start gap-3">
            <CheckCircle2 size={28} className="text-[#A7E9C1] shrink-0" />
            <div>
              <h5 className="text-sm font-bold text-white">Safe & Secure</h5>
              <p className="text-xs text-white/80">Bookings</p>
            </div>
          </div>

          <div className="flex items-center justify-center lg:justify-start gap-3 lg:border-l lg:border-white/15 lg:pl-8">
            <Award size={28} className="text-[#A7E9C1] shrink-0" />
            <div>
              <h5 className="text-sm font-bold text-white">Trusted Travel</h5>
              <p className="text-xs text-white/80">Partner</p>
            </div>
          </div>

          <div className="flex items-center justify-center lg:justify-start gap-3 lg:border-l lg:border-white/15 lg:pl-8">
            <TreePalm size={28} className="text-[#A7E9C1] shrink-0" />
            <div>
              <h5 className="text-sm font-bold text-white">Explore Zanzibar</h5>
              <p className="text-xs text-white/80">with Confidence</p>
            </div>
          </div>

          <div className="flex items-center justify-center lg:justify-start gap-3 lg:border-l lg:border-white/15 lg:pl-8">
            <Handshake size={28} className="text-[#A7E9C1] shrink-0" />
            <div>
              <h5 className="text-sm font-bold text-white">Your Satisfaction</h5>
              <p className="text-xs text-white/80">Our Priority</p>
            </div>
          </div>

        </div>
      </div>


      {/* ================= 4. BOTTOM COPYRIGHT ================= */}

      <div className="w-full bg-[#003F56] border-t border-white/15">

        <div className="max-w-[1440px] mx-auto px-6 md:px-12 py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-200">

          <div className="text-center md:text-left">
            <p>
              © 2026 Cruising in Zanzibar Tours &amp; Safaris. All rights reserved. | Licensed Tour Operator - Zanzibar, Tanzania
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 md:gap-5">

            <a
              href="mailto:cruisinginzanzibar@gmail.com?subject=Privacy%20Policy%20Request"
              className="hover:text-[#F5B91B] transition-colors"
            >
              Privacy Policy
            </a>

            <a
              href="mailto:cruisinginzanzibar@gmail.com?subject=Terms%20of%20Service%20Request"
              className="hover:text-[#F5B91B] transition-colors"
            >
              Terms of Service
            </a>

            <a
              href="mailto:cruisinginzanzibar@gmail.com?subject=Booking%20Terms%20Request"
              className="hover:text-[#F5B91B] transition-colors"
            >
              Booking Terms
            </a>

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

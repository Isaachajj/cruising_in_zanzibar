// src/pages/ContactUs.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageCircle,
  Send,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Headset,
  Globe,
  CheckCircle2
} from 'lucide-react';

const slides = [
  {
    image: '/utalii3.jpeg',
    title: 'We Are Here For You',
    highlight: 'Every Step of Your Journey',
    subtitle: 'Have a question or need help planning your Zanzibar adventure? Our friendly team is ready to assist you.'
  }
];

const ContactUs = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'General Inquiry',
    message: ''
  });

  const WHATSAPP_NUMBER = '255653924851';
  const BUSINESS_EMAIL = 'cruisinginzanzibar@gmail.com';

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const previousSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const message = `Hello Cruising in Zanzibar Tours & Safaris!

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Subject: ${formData.subject}

Message:
${formData.message}`;

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  useEffect(() => {
    const elements = document.querySelectorAll('[data-contact-reveal]');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('contact-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.14, rootMargin: '0px 0px -35px 0px' });

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return (
    <main className="min-h-screen bg-[#FCFBF8] overflow-x-hidden">
      <style>{`
        [data-contact-reveal] { opacity: 0; }
        [data-contact-reveal='up'] { transform: translateY(42px); }
        [data-contact-reveal='left'] { transform: translateX(-48px); }
        [data-contact-reveal='right'] { transform: translateX(48px); }
        [data-contact-reveal='zoom'] { transform: scale(.94); }
        [data-contact-reveal].contact-visible { opacity: 1; transform: none; transition: opacity .85s ease, transform .85s cubic-bezier(.22,.68,.22,1); }
        .contact-visible[data-delay='1'] { transition-delay: .10s; }
        .contact-visible[data-delay='2'] { transition-delay: .20s; }
        .contact-visible[data-delay='3'] { transition-delay: .30s; }
        .contact-visible[data-delay='4'] { transition-delay: .40s; }
        @keyframes contactHeroIn { from { opacity: 0; transform: translateY(32px) scale(.98); } to { opacity: 1; transform: none; } }
        .contact-hero-in { animation: contactHeroIn 1.15s cubic-bezier(.22,.68,.22,1) both; }
        @keyframes contactImageZoom { from { transform: scale(1.10); } to { transform: scale(1); } }
        .contact-hero-image { animation: contactImageZoom 2.4s cubic-bezier(.22,.68,.22,1) both; }
        @media (prefers-reduced-motion: reduce) {
          [data-contact-reveal], [data-contact-reveal].contact-visible, .contact-hero-in, .contact-hero-image { animation: none !important; transition: none !important; opacity: 1 !important; transform: none !important; }
        }
      `}</style>

      {/* ================= HERO IMAGE SLIDER ================= */}
      <section className="relative h-[650px] md:h-[740px] w-full overflow-hidden bg-[#10243A]">

        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              currentSlide === index ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={slide.image}
              alt="Beautiful Zanzibar scenery"
              className="w-full h-full object-cover contact-hero-image"
            />

            <div className="absolute inset-0 bg-gradient-to-b from-[#071727]/45 via-[#071727]/40 to-[#071727]/75" />
          </div>
        ))}

        {/* Hero Content */}
        <div className="absolute inset-0 z-10 flex items-center justify-center px-5 text-center">
          <div className="max-w-4xl mx-auto text-white contact-hero-in">

            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-[#F5B91B]/60 bg-black/20 backdrop-blur-md text-[#F5B91B] text-xs md:text-sm font-bold tracking-[3px] mb-7">
              <MessageCircle size={15} />
              GET IN TOUCH
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold leading-tight mb-6"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              {slides[currentSlide].title}
              <span className="block text-[#F5B91B] mt-2">
                {slides[currentSlide].highlight}
              </span>
            </h1>

            <p className="max-w-2xl mx-auto text-base md:text-xl text-white/90 leading-relaxed mb-9">
              {slides[currentSlide].subtitle}
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="#contact-form"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#F5B91B] text-[#10243A] font-bold hover:bg-white transition-all duration-300 shadow-xl hover:-translate-y-1"
              >
                Send Us a Message
                <ArrowRight size={18} />
              </a>

              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-white/70 bg-white/10 backdrop-blur-md text-white font-bold hover:bg-white hover:text-[#10243A] transition-all duration-300"
              >
                <MessageCircle size={19} />
                Chat on WhatsApp
              </a>
            </div>

            <div className="mt-10 text-sm text-white/80">
              Zanzibar, Tanzania
              <span className="mx-3 text-[#F5B91B]">•</span>
              Island & Safari Adventures
            </div>
          </div>
        </div>

        {/* Previous / Next */}
        <button
          onClick={previousSlide}
          aria-label="Previous slide"
          className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 w-11 h-11 md:w-14 md:h-14 rounded-full border border-white/40 bg-black/25 backdrop-blur-md text-white flex items-center justify-center hover:bg-[#F5B91B] hover:text-[#10243A] transition-all"
        >
          <ChevronLeft size={28} />
        </button>

        <button
          onClick={nextSlide}
          aria-label="Next slide"
          className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 w-11 h-11 md:w-14 md:h-14 rounded-full border border-white/40 bg-black/25 backdrop-blur-md text-white flex items-center justify-center hover:bg-[#F5B91B] hover:text-[#10243A] transition-all"
        >
          <ChevronRight size={28} />
        </button>

        {/* Slider Dots */}
        <div className="absolute bottom-9 left-0 right-0 z-20 flex justify-center gap-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
              className={`h-2.5 rounded-full transition-all duration-500 ${
                currentSlide === index
                  ? 'w-10 bg-[#F5B91B]'
                  : 'w-2.5 bg-white/60 hover:bg-white'
              }`}
            />
          ))}
        </div>
      </section>

      {/* ================= INTRODUCTION ================= */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center" data-contact-reveal="up">
          <span className="text-[#087443] text-xs font-bold tracking-[3px] uppercase">
            We'd Love To Hear From You
          </span>

          <h2
            className="text-3xl md:text-5xl font-bold text-[#10243A] mt-4 mb-5"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Let's Start Your <span className="text-[#087443]">Adventure</span>
          </h2>

          <div className="w-20 h-1 bg-[#F5B91B] mx-auto mb-6 rounded-full" />

          <p className="text-gray-600 leading-8 text-base md:text-lg">
            Whether you are planning a relaxing beach holiday, an exciting
            island excursion or a Tanzania wildlife safari, our team is ready
            to help you plan an unforgettable experience.
          </p>
        </div>
      </section>

      {/* ================= CONTACT INFORMATION ================= */}
      <section className="pb-20 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">

          {[
            {
              icon: <Phone size={26} />,
              title: 'Call Us',
              detail: 'Speak directly with our team',
              value: '+255 653 924 851',
              href: 'tel:+255653924851'
            },
            {
              icon: <Mail size={26} />,
              title: 'Email Us',
              detail: 'Send us your questions',
              value: BUSINESS_EMAIL,
              href: `mailto:${BUSINESS_EMAIL}`
            },
            {
              icon: <MapPin size={26} />,
              title: 'Our Location',
              detail: 'Visit our local team',
              value: 'Nungwi Beach, Zanzibar',
              href: null
            },
            {
              icon: <Clock size={26} />,
              title: 'Working Hours',
              detail: 'We are ready to assist',
              value: 'Mon - Sun: 7AM - 9PM',
              href: null
            }
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white p-7 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 text-center group" data-contact-reveal="up" data-delay={(index % 4) + 1}
            >
              <div className="w-16 h-16 mx-auto rounded-full bg-[#087443]/10 text-[#087443] flex items-center justify-center mb-5 group-hover:bg-[#087443] group-hover:text-white transition-all">
                {item.icon}
              </div>

              <h3 className="text-lg font-bold text-[#10243A] mb-2">
                {item.title}
              </h3>

              <p className="text-gray-500 text-sm mb-3">
                {item.detail}
              </p>

              {item.href ? (
                <a href={item.href} className="text-[#087443] font-semibold text-sm break-all hover:text-[#F5B91B]">
                  {item.value}
                </a>
              ) : (
                <p className="text-[#087443] font-semibold text-sm">
                  {item.value}
                </p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ================= CONTACT FORM & IMAGE ================= */}
      <section id="contact-form" className="py-20 px-6 bg-[#F3F7F3]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left Content */}
          <div data-contact-reveal="left">
            <span className="inline-block text-[#087443] font-bold tracking-[3px] text-xs uppercase mb-4">
              CONTACT OUR TEAM
            </span>

            <h2
              className="text-3xl md:text-5xl font-bold text-[#10243A] leading-tight mb-6"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Tell Us About Your
              <span className="block text-[#087443]">Dream Adventure</span>
            </h2>

            <p className="text-gray-600 leading-8 mb-8">
              Have a question about our tours or need a personalized travel
              package? Send us a message and our team will get back to you.
            </p>

            <div className="relative rounded-3xl overflow-hidden h-[300px] md:h-[390px] shadow-xl">
              <img
                src="/Trip/mnemba.jpeg"
                alt="Zanzibar ocean adventure"
                className="w-full h-full object-cover"
                loading="lazy"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#10243A]/80 to-transparent" />

              <div className="absolute bottom-7 left-7 right-7 text-white">
                <div className="flex items-center gap-2 text-[#F5B91B] mb-2">
                  <Headset size={20} />
                  <span className="font-bold text-sm tracking-wider">PERSONAL SUPPORT</span>
                </div>

                <h3 className="text-2xl font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Your Journey Matters To Us
                </h3>

                <p className="text-white/80 text-sm mt-2">
                  Local knowledge. Personal attention. Unforgettable experiences.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 mt-7 text-gray-600 text-sm">
              <CheckCircle2 className="text-[#087443]" size={20} />
              Friendly local travel assistance
            </div>
            <div className="flex items-center gap-3 mt-3 text-gray-600 text-sm">
              <CheckCircle2 className="text-[#087443]" size={20} />
              Personalized tour recommendations
            </div>
            <div className="flex items-center gap-3 mt-3 text-gray-600 text-sm">
              <CheckCircle2 className="text-[#087443]" size={20} />
              Support with your travel arrangements
            </div>
          </div>

          {/* Right Form */}
          <div className="bg-white rounded-3xl p-7 md:p-10 shadow-xl border border-gray-100 hover:shadow-2xl transition-shadow duration-500" data-contact-reveal="right">
            <h3
              className="text-2xl md:text-3xl font-bold text-[#10243A] mb-2"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Send Us a Message
            </h3>

            <p className="text-gray-500 text-sm mb-8">
              Fill in the form below and we'll connect with you through WhatsApp.
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">

              <div>
                <label className="block text-sm font-semibold text-[#10243A] mb-2">
                  Your Full Name *
                </label>
                <input
                  required
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  type="text"
                  placeholder="Enter your full name"
                  className="w-full px-4 py-3.5 rounded-xl border border-gray-200 bg-[#FCFBF8] outline-none focus:border-[#087443] focus:ring-2 focus:ring-[#087443]/10 transition-all"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-semibold text-[#10243A] mb-2">
                    Email Address *
                  </label>
                  <input
                    required
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    type="email"
                    placeholder="your@email.com"
                    className="w-full px-4 py-3.5 rounded-xl border border-gray-200 bg-[#FCFBF8] outline-none focus:border-[#087443] focus:ring-2 focus:ring-[#087443]/10 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#10243A] mb-2">
                    Phone Number
                  </label>
                  <input
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    type="tel"
                    placeholder="+255..."
                    className="w-full px-4 py-3.5 rounded-xl border border-gray-200 bg-[#FCFBF8] outline-none focus:border-[#087443] focus:ring-2 focus:ring-[#087443]/10 transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-[#10243A] mb-2">
                  Subject
                </label>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3.5 rounded-xl border border-gray-200 bg-[#FCFBF8] outline-none focus:border-[#087443] transition-all"
                >
                  <option>General Inquiry</option>
                  <option>Zanzibar Tours</option>
                  <option>Island Excursions</option>
                  <option>Tanzania Safari</option>
                  <option>Airport Transfers</option>
                  <option>Custom Tour Package</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-[#10243A] mb-2">
                  Your Message *
                </label>
                <textarea
                  required
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  placeholder="Tell us how we can help you..."
                  className="w-full px-4 py-3.5 rounded-xl border border-gray-200 bg-[#FCFBF8] outline-none focus:border-[#087443] focus:ring-2 focus:ring-[#087443]/10 transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-3 bg-[#087443] hover:bg-[#064F30] text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                Send Message via WhatsApp
                <Send size={18} />
              </button>

              <p className="text-xs text-center text-gray-400">
                Your message will open in WhatsApp for you to send.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* ================= MAP / LOCATION (FULL WIDTH & TALLER) ================= */}
      <section className="w-full pt-16 pb-0">
        <div className="text-center mb-8 px-6" data-contact-reveal="up">
          <span className="text-[#087443] text-xs font-bold tracking-[3px] uppercase">
            FIND US
          </span>
          <h2
            className="text-3xl md:text-4xl font-bold text-[#10243A] mt-3"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Explore Zanzibar With Us
          </h2>
          <p className="text-gray-500 mt-3">
            We are ready to welcome you to the beautiful Spice Island.
          </p>
        </div>

        {/* Ramani imejaa upana wote na ni ndefu zaidi */}
        <div className="w-full h-[500px] md:h-[600px] overflow-hidden" data-contact-reveal="zoom">
          <iframe
            title="Map of Zanzibar"
            src="https://www.google.com/maps?q=Zanzibar,Tanzania&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>

      {/* ================= FINAL CTA (Inagusa Ramani) ================= */}
      <section className="relative py-20 px-6 overflow-hidden bg-[#10243A]">
        <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full border border-white/10" />
        <div className="absolute -bottom-32 -left-20 w-96 h-96 rounded-full border border-white/10" />

        <div className="relative max-w-4xl mx-auto text-center" data-contact-reveal="zoom">
          <Globe className="text-[#F5B91B] mx-auto mb-5" size={42} />

          <h2
            className="text-3xl md:text-5xl font-bold text-white mb-5"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Your Zanzibar Story Starts Here
          </h2>

          <p className="text-white/70 max-w-2xl mx-auto mb-8 leading-7">
            Let us turn your travel dreams into beautiful memories.
            Discover the magic of Zanzibar and Tanzania with us.
          </p>

          <Link
            to="/tours"
            className="inline-flex items-center gap-3 bg-[#F5B91B] text-[#10243A] px-9 py-4 rounded-full font-bold hover:bg-white transition-all shadow-lg"
          >
            Explore Our Tours
            <ArrowRight size={19} />
          </Link>
        </div>
      </section>

    </main>
  );
};

export default ContactUs;

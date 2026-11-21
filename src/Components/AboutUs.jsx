import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  CheckCircle2,
  Compass,
  Heart,
  Shield,
  Users,
  MapPin,
  Star,
  MessageCircle,
  Globe,
  Sun,
  Waves,
  ChevronDown,
  Palmtree,
  Award
} from 'lucide-react';

// Badilisha namba hii iwe WhatsApp ya biashara yako
const WHATSAPP_NUMBER = '255XXXXXXXXX';

const AboutUs = () => {
  useEffect(() => {
    const elements = document.querySelectorAll('[data-about-reveal]');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('about-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.16, rootMargin: '0px 0px -40px 0px' });

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-[#FCFBF8] font-sans">

      {/* ================= 1. HERO SECTION ================= */}
      <section className="relative min-h-[680px] h-[85vh] max-h-[900px] w-full flex items-center justify-center overflow-hidden">

        {/* Background Beach Image */}
        <img
          src="/utalii2.jpeg"
          alt="Beautiful tropical beach in Zanzibar"
          className="absolute inset-0 w-full h-full object-cover object-center about-hero-image"
          fetchPriority="high"
        />

        {/* Soft Overlay - No background behind text */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#061C27]/45 via-[#061C27]/30 to-[#061C27]/65"></div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-5 text-center about-hero-in">

          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-white/50 bg-white/10 backdrop-blur-md text-white text-xs md:text-sm font-bold tracking-[0.25em] uppercase mb-8">
            <Palmtree size={16} className="text-[#F5B91B]" />
            Get to Know Us
          </div>

          <h1
            className="text-5xl sm:text-6xl md:text-7xl lg:text-[82px] font-bold text-white leading-[1.08] mb-7 drop-shadow-lg"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Discover the
            <br />
            <span className="text-[#F5C451] italic">
              Spirit of Zanzibar
            </span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-white/95 leading-relaxed max-w-3xl mx-auto mb-10 drop-shadow-md">
            We bring you closer to the beauty, culture and unforgettable
            adventures of Zanzibar and Tanzania. Your journey begins with us.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">

            <Link
              to="/tours"
              className="group inline-flex items-center justify-center gap-3 bg-[#F5B91B] hover:bg-[#e7a900] text-[#10243A] font-bold px-9 py-4 rounded-full transition-all duration-300 hover:-translate-y-1 shadow-xl w-full sm:w-auto"
            >
              Explore Our Tours
              <ArrowRight size={19} className="group-hover:translate-x-1 transition-transform" />
            </Link>

            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-3 border-2 border-white text-white hover:bg-white hover:text-[#08633A] font-bold px-9 py-4 rounded-full transition-all duration-300 hover:-translate-y-1 backdrop-blur-sm w-full sm:w-auto"
            >
              <MessageCircle size={19} />
              Talk to Our Team
            </a>

          </div>

          <div className="mt-12 flex items-center justify-center gap-3 text-white/90 text-sm">
            <MapPin size={17} className="text-[#F5C451]" />
            Zanzibar, Tanzania
            <span className="w-1 h-1 rounded-full bg-[#F5C451]"></span>
            Island & Safari Adventures
          </div>

        </div>

        {/* Scroll Indicator */}
        <a
          href="#our-story"
          className="absolute bottom-7 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-white/80 hover:text-[#F5C451] transition-colors"
        >
          <span className="text-xs tracking-wider">Scroll to explore</span>
          <ChevronDown size={25} className="animate-bounce" />
        </a>

      </section>


      {/* ================= 2. OUR STORY ================= */}
      <section
        id="our-story"
        className="relative py-20 md:py-28 px-6 md:px-12 max-w-[1440px] mx-auto"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

          {/* Photo Collage */}
          <div className="relative h-[430px] md:h-[530px]" data-about-reveal="left">

            <img
              src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=85&w=1000&auto=format&fit=crop"
              alt="Zanzibar marine adventure"
              className="absolute top-0 left-0 w-[78%] h-[75%] object-cover rounded-[28px] shadow-2xl"
              loading="lazy"
            />

            <img
              src="https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?q=85&w=800&auto=format&fit=crop"
              alt="Tropical Zanzibar beach"
              className="absolute bottom-0 right-0 w-[65%] h-[62%] object-cover rounded-[28px] border-[7px] border-white shadow-2xl"
              loading="lazy"
            />

            <div className="absolute top-[43%] left-[57%] -translate-x-1/2 -translate-y-1/2 bg-[#08633A] text-white rounded-2xl p-5 md:p-6 shadow-xl z-20 text-center">
              <Award size={30} className="mx-auto mb-2 text-[#F5B91B]" />
              <p className="text-2xl font-bold">Local</p>
              <p className="text-xs text-white/80">Island Experts</p>
            </div>

          </div>

          {/* Story Text */}
          <div data-about-reveal="right">

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#087443]/10 text-[#087443] font-bold tracking-widest text-xs mb-5">
              <Compass size={15} />
              OUR STORY
            </div>

            <h2
              className="text-3xl md:text-5xl font-bold text-[#10243A] mb-7 leading-tight"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              A Journey of Passion & Adventure
            </h2>

            <div className="space-y-5 text-gray-600 leading-8">
              <p>
                Cruising in Zanzibar Tours & Safaris was born from a deep love
                for our beautiful island. Our mission is simple: to share the
                magic of Zanzibar and Tanzania with travelers from around
                the world.
              </p>

              <p>
                Our team is made up of passionate local experts who know
                the beauty of our destinations, from the historic streets
                of Stone Town to the beautiful waters around Mnemba Island.
              </p>

              <p>
                Whether you are looking for a relaxing beach escape,
                a cultural experience or an exciting wildlife safari,
                we are here to help you create unforgettable memories.
              </p>
            </div>

            <Link
              to="/tours"
              className="inline-flex items-center gap-3 bg-[#087443] hover:bg-[#064f30] text-white font-bold px-8 py-4 rounded-full mt-9 transition-all duration-300 shadow-lg hover:-translate-y-1"
            >
              Discover Our Tours
              <ArrowRight size={18} />
            </Link>

          </div>
        </div>
      </section>


      {/* ================= 3. COMPANY HIGHLIGHTS ================= */}
      <section className="relative bg-[#10243A] py-14 md:py-16 overflow-hidden">

        <div className="absolute -top-20 -left-20 w-72 h-72 bg-[#087443]/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-[#F5B91B]/10 rounded-full blur-3xl"></div>

        <div className="relative max-w-[1300px] mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-10 text-center">

          {[
            { number: 'Local', label: 'Island Expertise' },
            { number: 'Unique', label: 'Travel Experiences' },
            { number: '24/7', label: 'Booking Assistance' },
            { number: '1:1', label: 'Personal Attention' }
          ].map((item, index) => (
            <div key={index} data-about-reveal="up" data-delay={index + 1}>
              <h3 className="text-3xl md:text-4xl font-bold text-[#F5B91B] mb-2">
                {item.number}
              </h3>
              <p className="text-gray-300 text-sm md:text-base">
                {item.label}
              </p>
            </div>
          ))}

        </div>
      </section>


      {/* ================= 4. MISSION, VISION & VALUES ================= */}
      <section className="py-20 md:py-28 px-6 md:px-12 max-w-[1440px] mx-auto">

        <div className="text-center max-w-3xl mx-auto mb-16">

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#087443]/10 text-[#087443] font-bold tracking-widest text-xs mb-5">
            <Heart size={15} />
            WHAT DRIVES US
          </div>

          <h2
            className="text-3xl md:text-5xl font-bold text-[#10243A] mb-5"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Our Mission, Vision & Values
          </h2>

          <div className="w-24 h-1 bg-[#F5B91B] mx-auto rounded-full"></div>

          <p className="text-gray-600 mt-6">
            Guided by our commitment to authentic experiences,
            responsible tourism and exceptional hospitality.
          </p>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">

          {/* Mission */}
          <div className="bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group" data-about-reveal="up" data-delay="1">
            <div className="w-16 h-16 rounded-2xl bg-[#087443]/10 text-[#087443] flex items-center justify-center mb-7 group-hover:bg-[#087443] group-hover:text-white transition-colors">
              <Heart size={30} />
            </div>

            <h3 className="text-2xl font-bold text-[#10243A] mb-4">
              Our Mission
            </h3>

            <p className="text-gray-600 leading-7">
              To provide authentic, memorable and enjoyable travel
              experiences across Zanzibar and Tanzania through
              personalized service and local knowledge.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group" data-about-reveal="up" data-delay="2">
            <div className="w-16 h-16 rounded-2xl bg-[#087443]/10 text-[#087443] flex items-center justify-center mb-7 group-hover:bg-[#087443] group-hover:text-white transition-colors">
              <Globe size={30} />
            </div>

            <h3 className="text-2xl font-bold text-[#10243A] mb-4">
              Our Vision
            </h3>

            <p className="text-gray-600 leading-7">
              To become a trusted travel partner for visitors
              discovering the beauty, culture and natural wonders
              of East Africa.
            </p>
          </div>

          {/* Values */}
          <div className="bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group" data-about-reveal="up" data-delay="3">
            <div className="w-16 h-16 rounded-2xl bg-[#087443]/10 text-[#087443] flex items-center justify-center mb-7 group-hover:bg-[#087443] group-hover:text-white transition-colors">
              <Shield size={30} />
            </div>

            <h3 className="text-2xl font-bold text-[#10243A] mb-4">
              Our Values
            </h3>

            <ul className="space-y-3 text-gray-600">
              {[
                'Authenticity',
                'Customer First',
                'Professionalism',
                'Safety and Trust',
                'Respect for Local Culture',
                'Responsible Tourism'
              ].map((value, index) => (
                <li key={index} className="flex items-center gap-3">
                  <CheckCircle2 size={18} className="text-[#087443] shrink-0" />
                  {value}
                </li>
              ))}
            </ul>
          </div>

        </div>
      </section>


      {/* ================= 5. WHY TRAVEL WITH US ================= */}
      <section className="bg-[#F5F8F4] py-20 md:py-28 px-6 md:px-12">

        <div className="max-w-[1440px] mx-auto">

          <div className="text-center mb-16">

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#087443]/10 text-[#087443] font-bold tracking-widest text-xs mb-5">
              <Star size={15} />
              THE DIFFERENCE
            </div>

            <h2
              className="text-3xl md:text-5xl font-bold text-[#10243A] mb-5"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Why Travel With Us
            </h2>

            <p className="text-gray-600 max-w-2xl mx-auto leading-7">
              Discover the difference of exploring Zanzibar and Tanzania
              with a team that cares about your journey.
            </p>

          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">

            {[
              {
                icon: <MapPin size={25} />,
                title: 'Local Knowledge',
                desc: 'Discover beautiful places and hidden gems with local destination knowledge.'
              },
              {
                icon: <Users size={25} />,
                title: 'Friendly Guides',
                desc: 'Enjoy your journey with welcoming guides who make your experience special.'
              },
              {
                icon: <Star size={25} />,
                title: 'Personalized Trips',
                desc: 'Choose experiences that match your interests, schedule and travel style.'
              },
              {
                icon: <MessageCircle size={25} />,
                title: 'Booking Assistance',
                desc: 'Get help with your questions and travel arrangements before your journey.'
              },
              {
                icon: <Waves size={25} />,
                title: 'Authentic Experiences',
                desc: 'Experience the beauty, culture and traditions of Zanzibar.'
              },
              {
                icon: <Sun size={25} />,
                title: 'Island & Safari Adventures',
                desc: 'Combine tropical island experiences with unforgettable mainland adventures.'
              }
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group" data-about-reveal="up" data-delay={(index % 6) + 1}
              >

                <div className="w-14 h-14 rounded-2xl bg-[#087443]/10 text-[#087443] flex items-center justify-center mb-6 group-hover:bg-[#087443] group-hover:text-white transition-all duration-300">
                  {item.icon}
                </div>

                <h3 className="text-xl font-bold text-[#10243A] mb-3">
                  {item.title}
                </h3>

                <p className="text-gray-600 leading-7 text-sm">
                  {item.desc}
                </p>

              </div>
            ))}

          </div>
        </div>
      </section>


      {/* ================= 6. FINAL CALL TO ACTION ================= */}
      <section className="relative py-24 md:py-32 overflow-hidden">

        <img
          src="https://images.unsplash.com/photo-1519046904884-53103b34b206?q=85&w=2000&auto=format&fit=crop"
          alt="Beautiful tropical island beach"
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
        />

        <div className="absolute inset-0 bg-[#10243A]/75"></div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center" data-about-reveal="zoom">

          <div className="inline-flex items-center gap-2 text-[#F5B91B] font-bold tracking-widest text-xs mb-6">
            <Palmtree size={17} />
            YOUR ADVENTURE STARTS HERE
          </div>

          <h2
            className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Ready to Discover the
            <span className="block text-[#F5C451] italic">
              Magic of Zanzibar?
            </span>
          </h2>

          <p className="text-gray-200 text-base md:text-lg leading-8 max-w-2xl mx-auto mb-10">
            Let us help you plan an unforgettable journey filled
            with beautiful beaches, amazing culture and exciting adventures.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">

            <Link
              to="/tours"
              className="inline-flex items-center justify-center gap-3 bg-[#F5B91B] hover:bg-yellow-500 text-[#10243A] font-bold px-9 py-4 rounded-full transition-all duration-300 hover:-translate-y-1 shadow-xl w-full sm:w-auto"
            >
              Explore Our Tours
              <ArrowRight size={19} />
            </Link>

            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-[#087443] hover:bg-[#065b34] text-white font-bold px-9 py-4 rounded-full transition-all duration-300 hover:-translate-y-1 shadow-xl w-full sm:w-auto"
            >
              <MessageCircle size={19} />
              Talk to Our Team
            </a>

          </div>
        </div>
      </section>

      <style>{`
        [data-about-reveal] { opacity: 0; }
        [data-about-reveal='up'] { transform: translateY(42px); }
        [data-about-reveal='left'] { transform: translateX(-48px); }
        [data-about-reveal='right'] { transform: translateX(48px); }
        [data-about-reveal='zoom'] { transform: scale(.94); }
        [data-about-reveal].about-visible { opacity: 1; transform: none; transition: opacity .85s ease, transform .85s cubic-bezier(.22,.68,.22,1); }
        .about-visible[data-delay='1'] { transition-delay: .12s; }
        .about-visible[data-delay='2'] { transition-delay: .24s; }
        .about-visible[data-delay='3'] { transition-delay: .36s; }
        .about-visible[data-delay='4'] { transition-delay: .48s; }
        .about-visible[data-delay='5'] { transition-delay: .60s; }
        .about-visible[data-delay='6'] { transition-delay: .72s; }
        @keyframes aboutHeroIn { from { opacity: 0; transform: translateY(28px) scale(.98); } to { opacity: 1; transform: none; } }
        .about-hero-in { animation: aboutHeroIn 1.1s cubic-bezier(.22,.68,.22,1) both; }
        @keyframes aboutHeroImage { from { transform: scale(1.08); } to { transform: scale(1); } }
        .about-hero-image { animation: aboutHeroImage 2.2s cubic-bezier(.22,.68,.22,1) both; }
        @media (prefers-reduced-motion: reduce) {
          [data-about-reveal], [data-about-reveal].about-visible, .about-hero-in, .about-hero-image { animation: none !important; transition: none !important; opacity: 1 !important; transform: none !important; }
        }
      `}</style>
    </div>
  );
};

export default AboutUs;

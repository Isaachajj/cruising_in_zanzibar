import { useEffect } from 'react';
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
const WHATSAPP_NUMBER = '255653924851';

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
              to="/card-tour"
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
              to="/card-tour"
              className="inline-flex items-center gap-3 bg-[#087443] hover:bg-[#064f30] text-white font-bold px-8 py-4 rounded-full mt-9 transition-all duration-300 shadow-lg hover:-translate-y-1"
            >
              Discover Our Tours
              <ArrowRight size={18} />
            </Link>

          </div>
        </div>
      </section>


      {/* ================= 3. COMPANY HIGHLIGHTS ================= */}
      <section className="about-highlights relative overflow-hidden bg-gradient-to-br from-[#EAF8F5] via-[#F7FBF7] to-[#FFF7E5] py-16 md:py-24">
        <div aria-hidden="true" className="about-orbit about-orbit-one"></div>
        <div aria-hidden="true" className="about-orbit about-orbit-two"></div>

        <div className="relative z-10 mx-auto max-w-[1300px] px-6">
          <div className="mb-10 text-center md:mb-14" data-about-reveal="up">
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#087443]/15 bg-white/80 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[#087443] shadow-sm">
              <Palmtree size={15} /> Your journey, our care
            </span>
            <h2 className="font-serif text-3xl font-bold text-[#07566D] md:text-5xl">The Zanzibar Difference</h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-[#42616A] md:text-base">
              Thoughtful local service makes every step of your island adventure feel easy and personal.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 md:gap-5">
            {[
              { number: 'Local', label: 'Island Expertise', detail: 'Know the island with local guides', icon: <Compass size={22} /> },
              { number: 'Unique', label: 'Travel Experiences', detail: 'Made for your kind of adventure', icon: <Waves size={22} /> },
              { number: '24/7', label: 'Booking Assistance', detail: 'A helpful team, whenever you need us', icon: <MessageCircle size={22} /> },
              { number: '1:1', label: 'Personal Attention', detail: 'Your plans, cared for personally', icon: <Heart size={22} /> }
            ].map((item, index) => (
              <article key={item.label} className="about-highlight-card group" data-about-reveal="up" data-delay={index + 1}>
                <span className="about-highlight-icon">{item.icon}</span>
                <h3 className="about-highlight-value">{item.number}</h3>
                <p className="about-highlight-label">{item.label}</p>
                <span className="about-highlight-rule"></span>
                <p className="about-highlight-detail">{item.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>


      {/* ================= 4. MISSION, VISION & VALUES ================= */}
      <section className="about-purpose relative overflow-hidden bg-gradient-to-br from-[#F4FBF8] via-white to-[#FFF8E9] px-6 py-20 md:px-12 md:py-28">
        <div className="about-purpose-glow about-purpose-glow-left" aria-hidden="true"></div>
        <div className="about-purpose-glow about-purpose-glow-right" aria-hidden="true"></div>
        <div className="relative z-10 mx-auto max-w-[1440px]">
          <div className="mx-auto mb-12 max-w-3xl text-center md:mb-16" data-about-reveal="up">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#087443]/15 bg-white/85 px-4 py-2 text-xs font-bold tracking-[0.2em] text-[#087443] shadow-sm">
              <Heart size={15} /> WHAT DRIVES US
            </div>
            <h2 className="mb-5 font-serif text-3xl font-bold leading-tight text-[#07566D] md:text-5xl">
              Our Mission, Vision <span className="text-[#087443]">&amp; Values</span>
            </h2>
            <div className="mx-auto flex w-28 items-center gap-2">
              <span className="h-1 flex-1 rounded-full bg-[#087443]"></span>
              <span className="h-2.5 w-2.5 rotate-45 rounded-sm bg-[#F5B91B]"></span>
              <span className="h-1 flex-1 rounded-full bg-[#087443]/25"></span>
            </div>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-[#557078] md:text-lg">
              Guided by our commitment to authentic experiences, responsible tourism and exceptional hospitality.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-7">
            <article className="about-purpose-card" data-about-reveal="up" data-delay="1">
              <div className="about-purpose-card-top">
                <span className="about-purpose-icon"><Heart size={25} /></span>
                <span className="about-purpose-index">01</span>
              </div>
              <p className="about-purpose-eyebrow">WHAT WE DO</p>
              <h3 className="about-purpose-title">Our Mission</h3>
              <p className="about-purpose-copy">
                To provide authentic, memorable and enjoyable travel experiences across Zanzibar and Tanzania through personalized service and local knowledge.
              </p>
              <span className="about-purpose-card-accent"></span>
            </article>

            <article className="about-purpose-card" data-about-reveal="up" data-delay="2">
              <div className="about-purpose-card-top">
                <span className="about-purpose-icon about-purpose-icon-gold"><Globe size={25} /></span>
                <span className="about-purpose-index">02</span>
              </div>
              <p className="about-purpose-eyebrow">WHERE WE’RE GOING</p>
              <h3 className="about-purpose-title">Our Vision</h3>
              <p className="about-purpose-copy">
                To become a trusted travel partner for visitors discovering the beauty, culture and natural wonders of East Africa.
              </p>
              <span className="about-purpose-card-accent"></span>
            </article>

            <article className="about-purpose-card about-values-card" data-about-reveal="up" data-delay="3">
              <div className="about-purpose-card-top">
                <span className="about-purpose-icon"><Shield size={25} /></span>
                <span className="about-purpose-index">03</span>
              </div>
              <p className="about-purpose-eyebrow">HOW WE CARE</p>
              <h3 className="about-purpose-title">Our Values</h3>
              <ul className="about-values-list">
                {[
                  'Authenticity',
                  'Customer First',
                  'Professionalism',
                  'Safety and Trust',
                  'Respect for Local Culture',
                  'Responsible Tourism'
                ].map((value, index) => (
                  <li key={value} style={{ '--value-index': index }}>
                    <CheckCircle2 size={17} /> <span>{value}</span>
                  </li>
                ))}
              </ul>
              <span className="about-purpose-card-accent"></span>
            </article>
          </div>
        </div>
      </section>


      {/* ================= 5. WHY TRAVEL WITH US ================= */}
      <section className="about-why relative overflow-hidden bg-gradient-to-br from-[#EAF8F5] via-[#F8FBF7] to-[#FFF7E5] px-6 py-20 md:px-12 md:py-28">
        <div className="about-why-wash" aria-hidden="true"></div>
        <div className="relative z-10 mx-auto max-w-[1440px]">
          <div className="mb-12 text-center md:mb-16" data-about-reveal="up">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#087443]/15 bg-white/85 px-4 py-2 text-xs font-bold tracking-[0.2em] text-[#087443] shadow-sm">
              <Star size={15} /> THE DIFFERENCE
            </div>
            <h2 className="mb-5 font-serif text-3xl font-bold text-[#07566D] md:text-5xl">Why Travel With Us</h2>
            <div className="mx-auto flex w-28 items-center gap-2">
              <span className="h-1 flex-1 rounded-full bg-[#087443]"></span>
              <span className="h-2.5 w-2.5 rotate-45 rounded-sm bg-[#F5B91B]"></span>
              <span className="h-1 flex-1 rounded-full bg-[#087443]/25"></span>
            </div>
            <p className="mx-auto mt-6 max-w-2xl leading-7 text-[#557078] md:text-lg">
              Discover the difference of exploring Zanzibar and Tanzania with a team that cares about your journey.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 md:gap-6">

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
                className="about-why-card group" data-about-reveal="up" data-delay={(index % 6) + 1}
                style={{ '--why-index': index }}
              >
                <div className="about-why-card-head">
                  <span className="about-why-icon">{item.icon}</span>
                  <span className="about-why-number">0{index + 1}</span>
                </div>
                <h3 className="about-why-title">{item.title}</h3>
                <p className="about-why-copy">{item.desc}</p>
                <span className="about-why-accent"></span>
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
              to="/card-tour"
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
        .about-highlights { isolation: isolate; }
        .about-orbit { position: absolute; z-index: 0; width: 23rem; height: 23rem; border: 1px solid rgb(8 116 67 / 9%); border-radius: 50%; pointer-events: none; }
        .about-orbit::before, .about-orbit::after { position: absolute; content: ''; border: 1px solid rgb(8 116 67 / 8%); border-radius: 50%; inset: 1.5rem; }
        .about-orbit::after { inset: 3rem; }
        .about-orbit-one { top: -13rem; left: -8rem; animation: about-orbit-drift 20s ease-in-out infinite alternate; }
        .about-orbit-two { right: -10rem; bottom: -17rem; border-color: rgb(245 185 27 / 18%); animation: about-orbit-drift 24s ease-in-out infinite alternate-reverse; }
        .about-highlight-card { position: relative; min-height: 17rem; overflow: hidden; border: 1px solid rgb(8 116 67 / 12%); border-radius: 1.4rem; background: rgb(255 255 255 / 92%); padding: 1.5rem; text-align: center; box-shadow: 0 10px 35px rgb(7 86 109 / 6%); transition: transform .35s ease, box-shadow .35s ease, border-color .35s ease; }
        .about-highlight-card::before { position: absolute; top: 0; left: 18%; right: 18%; height: 3px; border-radius: 0 0 999px 999px; content: ''; background: linear-gradient(90deg, #087443, #F5B91B); transform: scaleX(.35); transition: transform .35s ease; }
        .about-highlight-card:hover { transform: translateY(-7px); border-color: rgb(8 116 67 / 28%); box-shadow: 0 20px 45px rgb(7 86 109 / 13%); }
        .about-highlight-card:hover::before { transform: scaleX(1); }
        .about-highlight-icon { display: inline-flex; width: 3.25rem; height: 3.25rem; align-items: center; justify-content: center; border-radius: 1.1rem; background: #EAF8F0; color: #087443; transition: transform .35s ease, background-color .35s ease, color .35s ease; }
        .about-highlight-card:hover .about-highlight-icon { transform: rotate(-7deg) scale(1.08); background: #087443; color: #fff; }
        .about-highlight-value { margin-top: 1rem; color: #07566D; font-family: 'Playfair Display', serif; font-size: 2rem; font-weight: 700; line-height: 1.15; }
        .about-highlight-label { margin-top: .4rem; color: #174B3A; font-size: 1rem; font-weight: 700; }
        .about-highlight-rule { display: block; width: 2.5rem; height: 2px; margin: .9rem auto; border-radius: 999px; background: #F5B91B; transition: width .35s ease; }
        .about-highlight-card:hover .about-highlight-rule { width: 4rem; }
        .about-highlight-detail { color: #557078; font-size: .82rem; line-height: 1.5; }
        .about-visible .about-highlight-icon { animation: about-text-arrive .65s .12s both; }
        .about-visible .about-highlight-value { animation: about-text-arrive .7s .2s both; }
        .about-visible .about-highlight-label { animation: about-text-arrive .7s .32s both; }
        .about-visible .about-highlight-detail { animation: about-text-arrive .7s .43s both; }
        .about-purpose { isolation: isolate; }
        .about-purpose-glow { position: absolute; z-index: 0; width: 22rem; height: 22rem; border-radius: 50%; filter: blur(65px); opacity: .42; pointer-events: none; }
        .about-purpose-glow-left { top: 8%; left: -13rem; background: #C8EFE0; animation: about-orbit-drift 18s ease-in-out infinite alternate; }
        .about-purpose-glow-right { right: -12rem; bottom: 0; background: #FFE9AE; animation: about-orbit-drift 22s ease-in-out infinite alternate-reverse; }
        .about-purpose-card { position: relative; display: flex; min-height: 22rem; flex-direction: column; overflow: hidden; border: 1px solid rgb(8 116 67 / 12%); border-radius: 1.6rem; background: rgb(255 255 255 / 92%); padding: 1.75rem; box-shadow: 0 12px 40px rgb(7 86 109 / 7%); transition: transform .4s cubic-bezier(.2,.75,.25,1), box-shadow .4s ease, border-color .4s ease; }
        .about-purpose-card:hover { transform: translateY(-8px); border-color: rgb(8 116 67 / 28%); box-shadow: 0 24px 50px rgb(7 86 109 / 13%); }
        .about-purpose-card-top { display: flex; align-items: center; justify-content: space-between; margin-bottom: 1.5rem; }
        .about-purpose-icon { display: inline-flex; width: 3.5rem; height: 3.5rem; align-items: center; justify-content: center; border-radius: 1.2rem; background: #EAF8F0; color: #087443; transition: transform .4s ease, background-color .35s ease, color .35s ease; }
        .about-purpose-icon-gold { background: #FFF5D9; color: #A77500; }
        .about-purpose-card:hover .about-purpose-icon { transform: rotate(-8deg) scale(1.08); background: #087443; color: #fff; }
        .about-purpose-card:hover .about-purpose-icon-gold { background: #F5B91B; color: #07566D; }
        .about-purpose-index { color: #087443; font-family: 'Playfair Display', serif; font-size: 2.5rem; font-weight: 700; opacity: .13; transition: opacity .3s ease, transform .3s ease; }
        .about-purpose-card:hover .about-purpose-index { opacity: .35; transform: translateX(-3px); }
        .about-purpose-eyebrow { margin-bottom: .45rem; color: #A77500; font-size: .68rem; font-weight: 800; letter-spacing: .18em; }
        .about-purpose-title { margin-bottom: .8rem; color: #07566D; font-family: 'Playfair Display', serif; font-size: 1.7rem; font-weight: 700; }
        .about-purpose-copy { max-width: 34rem; color: #557078; font-size: .96rem; line-height: 1.8; }
        .about-purpose-card-accent { width: 2.7rem; height: 3px; margin-top: auto; padding-top: 1.6rem; box-sizing: content-box; border-radius: 999px; background: linear-gradient(90deg, #087443, #F5B91B); transition: width .4s ease; }
        .about-purpose-card:hover .about-purpose-card-accent { width: 5rem; }
        .about-values-list { display: grid; gap: .63rem; color: #42616A; font-size: .88rem; }
        .about-values-list li { display: flex; align-items: center; gap: .65rem; }
        .about-values-list svg { flex: 0 0 auto; color: #087443; }
        .about-visible .about-purpose-card-top { animation: about-text-arrive .65s .12s both; }
        .about-visible .about-purpose-eyebrow { animation: about-text-arrive .65s .2s both; }
        .about-visible .about-purpose-title { animation: about-text-arrive .65s .28s both; }
        .about-visible .about-purpose-copy { animation: about-text-arrive .7s .38s both; }
        .about-visible .about-values-list li { animation: about-text-arrive .55s calc(.12s + var(--value-index) * .08s) both; }
        .about-why { isolation: isolate; }
        .about-why-wash { position: absolute; z-index: 0; inset: 0; pointer-events: none; background: radial-gradient(circle at 8% 20%, rgb(8 116 67 / 9%), transparent 25%), radial-gradient(circle at 94% 82%, rgb(245 185 27 / 15%), transparent 24%); }
        .about-why-card { position: relative; display: flex; min-height: 17rem; flex-direction: column; overflow: hidden; border: 1px solid rgb(8 116 67 / 12%); border-radius: 1.45rem; background: rgb(255 255 255 / 94%); padding: 1.6rem; box-shadow: 0 10px 34px rgb(7 86 109 / 6%); transition: transform .38s cubic-bezier(.2,.75,.25,1), box-shadow .38s ease, border-color .38s ease; }
        .about-why-card::before { position: absolute; top: 0; left: 0; width: 100%; height: 3px; content: ''; background: linear-gradient(90deg, #087443, #32AFA0, #F5B91B); transform: scaleX(0); transform-origin: left; transition: transform .45s ease; }
        .about-why-card:hover { transform: translateY(-7px); border-color: rgb(8 116 67 / 25%); box-shadow: 0 22px 48px rgb(7 86 109 / 12%); }
        .about-why-card:hover::before { transform: scaleX(1); }
        .about-why-card-head { display: flex; align-items: center; justify-content: space-between; margin-bottom: 1.45rem; }
        .about-why-icon { display: inline-flex; width: 3.4rem; height: 3.4rem; align-items: center; justify-content: center; border-radius: 1.15rem; background: #EAF8F0; color: #087443; transition: transform .38s ease, color .3s ease, background .3s ease; }
        .about-why-card:nth-child(3n + 2) .about-why-icon { background: #FFF5D9; color: #A77500; }
        .about-why-card:nth-child(3n) .about-why-icon { background: #E8F6FA; color: #087A99; }
        .about-why-card:hover .about-why-icon { transform: rotate(-8deg) scale(1.08); background: #087443; color: white; }
        .about-why-card:nth-child(3n + 2):hover .about-why-icon { background: #F5B91B; color: #07566D; }
        .about-why-number { color: #087443; font-family: 'Playfair Display', serif; font-size: 2.25rem; font-weight: 700; opacity: .13; transition: opacity .3s ease, transform .3s ease; }
        .about-why-card:hover .about-why-number { opacity: .35; transform: translateX(-3px); }
        .about-why-title { margin-bottom: .65rem; color: #07566D; font-family: 'Playfair Display', serif; font-size: 1.28rem; font-weight: 700; }
        .about-why-copy { color: #557078; font-size: .92rem; line-height: 1.75; }
        .about-why-accent { width: 2.3rem; height: 3px; margin-top: auto; padding-top: 1.35rem; box-sizing: content-box; border-radius: 999px; background: linear-gradient(90deg, #087443, #F5B91B); transition: width .38s ease; }
        .about-why-card:hover .about-why-accent { width: 4.4rem; }
        .about-visible .about-why-card-head { animation: about-text-arrive .6s .12s both; }
        .about-visible .about-why-title { animation: about-text-arrive .65s .22s both; }
        .about-visible .about-why-copy { animation: about-text-arrive .7s .34s both; }
        @keyframes about-text-arrive { from { opacity: 0; transform: translateY(14px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes about-orbit-drift { from { transform: translate3d(0, 0, 0) rotate(0); } to { transform: translate3d(16px, -12px, 0) rotate(8deg); } }
        @keyframes aboutHeroIn { from { opacity: 0; transform: translateY(28px) scale(.98); } to { opacity: 1; transform: none; } }
        .about-hero-in { animation: aboutHeroIn 1.1s cubic-bezier(.22,.68,.22,1) both; }
        @keyframes aboutHeroImage { from { transform: scale(1.08); } to { transform: scale(1); } }
        .about-hero-image { animation: aboutHeroImage 2.2s cubic-bezier(.22,.68,.22,1) both; }
        @media (prefers-reduced-motion: reduce) {
          [data-about-reveal], [data-about-reveal].about-visible, .about-hero-in, .about-hero-image, .about-orbit, .about-purpose-glow { animation: none !important; transition: none !important; opacity: 1 !important; transform: none !important; }
          .about-highlight-card, .about-highlight-card:hover, .about-purpose-card, .about-purpose-card:hover, .about-why-card, .about-why-card:hover { transform: none; transition: none; }
          .about-visible .about-highlight-icon, .about-visible .about-highlight-value, .about-visible .about-highlight-label, .about-visible .about-highlight-detail { animation: none; opacity: 1; transform: none; }
          .about-purpose-card-top, .about-purpose-eyebrow, .about-purpose-title, .about-purpose-copy, .about-values-list li, .about-why-card-head, .about-why-title, .about-why-copy { animation: none !important; opacity: 1 !important; transform: none !important; }
        }
      `}</style>
    </div>
  );
};

export default AboutUs;

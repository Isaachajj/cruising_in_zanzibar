// src/pages/FullPackageDetails.jsx
import { useCallback, useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import BookingReceipt from '../Components/BookingReceipt';
import { createBookingReference, formatBookingReceiptMessage } from '../Components/bookingReceiptUtils';
import { 
  ChevronLeft, ChevronRight, Play, Pause, MapPin, Clock, Star, 
  ArrowLeft, CheckCircle2, XCircle, CalendarDays,
  Users, Camera, Ship, Waves, Sun, Landmark, Utensils, Info, Store, User, Mail, Phone
} from 'lucide-react';

// ==========================================
// 1. DATA YA FULL-DAY TRIPS ZOTE
// ==========================================
const allTripsData = {
  'mnemba-stone-town-forodhani': {
    id: 'mnemba-stone-town-forodhani',
    title: 'Mnemba, Stone Town & Forodhani Trip',
    duration: 'Full Day',
    price: 70,
    groupType: 'Private / Group',
    bestSeason: 'Jun - Oct',
    startingLocation: 'Nungwi Beach',
    description: 'Experience an unforgettable snorkeling adventure at Mnemba Island, one of Zanzibar\'s most beautiful marine reserves. Swim with colorful fish, explore coral reefs and relax on pristine beaches.',
    heroImages: ['/Trip/mnemba.jpeg','/Trip/stonetown.jpeg','/Trip/forodhani.jpeg'],
    destinations: [
      {
        id: 1,
        name: 'Snorkeling & Coral Reefs',
        location: 'Mnemba Atoll',
        description: 'Explore vibrant coral reefs with tropical fish in the crystal-clear waters of Mnemba Atoll.',
        highlights: ['Colorful fish', 'Coral gardens', 'Crystal clear water'],
        image: '/Trip/mnemba.jpeg',
        timeSpent: '2 Hours'
      },
      {
        id: 2,
        name: 'Mnemba Island',
        location: 'Mnemba Island',
        description: 'Relax on a stunning white sand beach and enjoy the peaceful island atmosphere.',
        highlights: ['White sand beach', 'Relaxation', 'Sunbathing'],
        image: '/Trip/mnemba.jpeg',
        timeSpent: '1.5 Hours'
      },
      {
        id: 3,
        name: 'Stone Town Heritage',
        location: 'Stone Town',
        description: 'Discover the rich history and culture of Zanzibar\'s UNESCO World Heritage Site.',
        highlights: ['Old Fort', 'House of Wonders', 'Local markets'],
        image: '/Trip/stonetown.jpeg',
        timeSpent: '2 Hours'
      },
      {
        id: 4,
        name: 'Forodhani Gardens',
        location: 'Forodhani, Stone Town',
        description: 'End your day at the famous waterfront food market with stunning sunset views.',
        highlights: ['Street food', 'Sunset views', 'Local atmosphere'],
        image: '/Trip/forodhani.jpeg',
        timeSpent: '1.5 Hours'
      }
    ],
    itinerary: [
      { time: '08:00 AM', title: 'Hotel Pickup', desc: 'Pick up from your hotel and transfer to Mnemba Island.', icon: <Ship size={18} /> },
      { time: '09:00 AM', title: 'Snorkeling & Exploring', desc: 'Snorkeling and exploring the coral reefs.', icon: <Waves size={18} /> },
      { time: '12:00 PM', title: 'Lunch', desc: 'Delicious seafood lunch on the beach.', icon: <Utensils size={18} /> },
      { time: '01:30 PM', title: 'Relaxation', desc: 'Relax on the sand and enjoy the ocean.', icon: <Sun size={18} /> },
      { time: '03:30 PM', title: 'Return', desc: 'Return journey to your hotel.', icon: <Ship size={18} /> }
    ],
    included: ['Boat trip to Mnemba Island', 'Snorkeling equipment', 'Seafood lunch', 'Professional guide', 'Hotel pickup & drop-off'],
    notIncluded: ['Personal expenses', 'Tips and gratuities', 'Travel insurance', 'Alcoholic drinks'],
    gallery: ['/Trip/mnemba.jpeg','/Trip/stonetown.jpeg','/Trip/forodhani.jpeg','/Trip/kizimkazi.jpg','/Trip/paje.jpeg','/Trip/prisonIland.jpg']
  },
  'safari-blue': {
    id: 'safari-blue',
    title: 'Safari Blue Adventure',
    duration: 'Full Day',
    price: 65,
    groupType: 'Group Tour',
    bestSeason: 'All Year',
    startingLocation: 'Fumba Village',
    description: 'Sail, snorkel and relax on a stunning sandbank. A full-day ocean adventure on a traditional dhow.',
    heroImages: ['/Trip/safari blue.jpeg','/Trip/mnemba.jpeg','/Trip/paje.jpeg'],
    destinations: [
      {
        id: 1,
        name: 'Dhow Sailing',
        location: 'Menai Bay',
        description: 'Sail on a traditional wooden dhow through the beautiful Menai Bay.',
        highlights: ['Traditional dhow', 'Scenic views', 'Ocean breeze'],
        image: '/Trip/safari blue.jpeg',
        timeSpent: '1 Hour'
      },
      {
        id: 2,
        name: 'Snorkeling',
        location: 'Menai Bay',
        description: 'Discover vibrant coral reefs and tropical fish in the clear waters.',
        highlights: ['Coral reefs', 'Tropical fish', 'Clear water'],
        image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=1000&auto=format&fit=crop',
        timeSpent: '1.5 Hours'
      },
      {
        id: 3,
        name: 'Sandbank Relaxation',
        location: 'Kwale Island',
        description: 'Relax on a pristine white sandbank and enjoy a seafood BBQ.',
        highlights: ['White sand', 'Seafood BBQ', 'Swimming'],
        image: '/Trip/paje.jpeg',
        timeSpent: '2 Hours'
      }
    ],
    itinerary: [
      { time: '08:30 AM', title: 'Pickup', desc: 'Pick up from your hotel and transfer to Fumba.', icon: <Ship size={18} /> },
      { time: '09:30 AM', title: 'Set Sail', desc: 'Board the dhow and start sailing.', icon: <Ship size={18} /> },
      { time: '11:00 AM', title: 'Snorkeling', desc: 'Snorkeling at the coral reefs.', icon: <Waves size={18} /> },
      { time: '01:00 PM', title: 'Seafood BBQ', desc: 'Enjoy a delicious seafood lunch on the sandbank.', icon: <Utensils size={18} /> },
      { time: '03:00 PM', title: 'Return', desc: 'Sail back and return to your hotel.', icon: <Ship size={18} /> }
    ],
    included: ['Dhow cruise', 'Snorkeling gear', 'Seafood BBQ lunch', 'Drinks', 'Hotel pickup & drop-off'],
    notIncluded: ['Personal expenses', 'Tips', 'Travel insurance'],
    gallery: ['/Trip/safari blue.jpeg','/Trip/mnemba.jpeg','/Trip/paje.jpeg','/Trip/kendwa.jpeg','/Trip/forodhani.jpeg']
  },
  'stone-town-heritage': {
    id: 'stone-town-heritage',
    title: 'Stone Town Heritage Tour',
    duration: 'Full Day', price: 35, groupType: 'Private / Group',
    bestSeason: 'All Year', startingLocation: 'Stone Town',
    description: 'Explore Zanzibar rich history, architecture and culture through the UNESCO World Heritage streets of Stone Town.',
    heroImages: [
      'https://images.unsplash.com/photo-1582558881720-435b3f8b16a5?q=80&w=2000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1590077428535-a84d2a5c1b3c?q=80&w=2000&auto=format&fit=crop'
    ],
    destinations: [
      { id: 1, name: 'Old Fort', location: 'Stone Town', description: 'Visit Zanzibar oldest building and learn its history.', highlights: ['Historic landmark', 'Architecture', 'City views'], image: '/Trip/stonetown.jpeg', timeSpent: '1 Hour' },
      { id: 2, name: 'Forodhani Gardens', location: 'Stone Town Waterfront', description: 'Experience local food, culture and sunset views.', highlights: ['Local market', 'Sunset', 'Street food'], image: '/Trip/forodhani.jpeg', timeSpent: '1 Hour' }
    ],
    itinerary: [
      { time: '09:00 AM', title: 'Stone Town Pickup', desc: 'Meet your guide in Stone Town.', icon: <Landmark size={18} /> },
      { time: '10:00 AM', title: 'Walking Heritage Tour', desc: 'Explore historic streets and landmarks.', icon: <Camera size={18} /> },
      { time: '12:30 PM', title: 'Local Lunch', desc: 'Enjoy Zanzibar cuisine.', icon: <Utensils size={18} /> },
      { time: '03:00 PM', title: 'Market Visit', desc: 'Visit Darajani and local markets.', icon: <Store size={18} /> },
      { time: '05:30 PM', title: 'Sunset at Forodhani', desc: 'End the day at the waterfront.', icon: <Sun size={18} /> }
    ],
    included: ['Professional guide', 'Walking tour', 'Hotel pickup', 'Entrance assistance'],
    notIncluded: ['Personal expenses', 'Food and drinks', 'Tips'],
    gallery: ['/Trip/stonetown.jpeg','/Trip/forodhani.jpeg','/Trip/prisonIland.jpg','/Trip/kizimkazi.jpg']
  },
};

// ==========================================
// 2. COMPONENT KUU (FullPackageDetails)
// ==========================================
const FullPackageDetails = () => {
  const { id } = useParams();
  const trip = allTripsData[id] || allTripsData['mnemba-stone-town-forodhani'];

  // Slideshow State
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const timerRef = useRef(null);

  // Hero Slider State
  const [heroIndex, setHeroIndex] = useState(0);

  // Booking Form State
  const [formData, setFormData] = useState({
    date: '',
    adults: 1,
    children: 0,
    pickup: '',
    requests: '',
    fullName: '',
    email: '',
    phone: ''
  });
  const [bookingReference] = useState(() => createBookingReference());
  const [receiptOpen, setReceiptOpen] = useState(false);
  const bookingFormRef = useRef(null);

  const totalSlides = trip.destinations.length;
  const currentDestination = trip.destinations[currentIndex];
  const heroImages = trip.heroImages || [];

  // Slideshow logic
  const nextSlide = useCallback(() => setCurrentIndex((prev) => (prev + 1) % totalSlides), [totalSlides]);
  const prevSlide = useCallback(() => setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides), [totalSlides]);

  // Hero Slider logic
  const nextHero = useCallback(() => setHeroIndex((prev) => (prev + 1) % heroImages.length), [heroImages.length]);
  const prevHero = useCallback(() => setHeroIndex((prev) => (prev - 1 + heroImages.length) % heroImages.length), [heroImages.length]);

  useEffect(() => {
    if (isPlaying) {
      timerRef.current = setInterval(nextSlide, 5000);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPlaying, nextSlide]);

  // Hero Slider Auto-play
  useEffect(() => {
    const heroTimer = setInterval(nextHero, 6000);
    return () => clearInterval(heroTimer);
  }, [nextHero]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
    setIsPlaying(false);
  };

  const whatsappNumber = '255653924851';
  const adultCount = Number(formData.adults) || 0;
  const childCount = Number(formData.children) || 0;
  const receiptData = {
    reference: bookingReference,
    bookingDate: new Intl.DateTimeFormat('en-GB', { dateStyle: 'medium' }).format(new Date()),
    category: 'Full-Day Trip',
    productName: trip.title,
    duration: trip.duration,
    destination: [...new Set(trip.destinations.map((destination) => destination.location))].join(' · '),
    travelDate: formData.date || 'Flexible / To be confirmed',
    travelers: `${adultCount} adult(s), ${childCount} child(ren)`,
    adults: adultCount,
    children: childCount,
    pricePerPerson: trip.price,
    pricePerPersonLabel: 'Starting price per person',
    totalEstimated: childCount === 0 ? trip.price * adultCount : null,
    totalLabel: childCount === 0 ? 'Estimated starting total' : 'Total with child pricing',
    customer: {
      fullName: formData.fullName,
      email: formData.email,
      phone: formData.phone,
      pickup: formData.pickup || 'Not provided',
      requests: formData.requests || 'None'
    }
  };

  const handleReviewBooking = (event) => {
    event.preventDefault();
    if (!bookingFormRef.current?.reportValidity()) return;
    setReceiptOpen(true);
  };

  const handleWhatsAppBooking = () => {
    const message = encodeURIComponent(formatBookingReceiptMessage(receiptData));
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank', 'noopener,noreferrer');
  };

  const handleEmailQuote = () => {
    const subject = encodeURIComponent(`Booking Request ${bookingReference} – ${trip.title}`);
    const body = encodeURIComponent(formatBookingReceiptMessage(receiptData));
    window.location.href = `mailto:cruisinginzanzibar@gmail.com?subject=${subject}&body=${body}`;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="min-h-screen bg-[#fcfdfa] font-sans pb-24 overflow-x-hidden">
      
      {/* ================= HERO SLIDER ================= */}
      <div className="relative w-full h-[400px] md:h-[500px] bg-[#10243A] overflow-hidden">
        {/* Slides */}
        {heroImages.map((img, index) => (
          <div 
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === heroIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
          >
            <img src={img} alt={`Hero ${index}`} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#10243A] via-[#10243A]/40 to-transparent"></div>
          </div>
        ))}

        {/* Hero Content */}
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#F5B91B]/50 bg-black/30 backdrop-blur-sm text-[#F5B91B] font-bold tracking-widest text-xs md:text-sm mb-4 animate-[fadeSlideUp_0.8s_ease-out_forwards]">
            <MapPin size={14} />
            {trip.startingLocation}
          </div>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight max-w-4xl" style={{ fontFamily: "'Playfair Display', serif" }}>
            {trip.title}
          </h1>
          <p className="text-gray-200 text-sm md:text-base max-w-2xl mb-6">
            {trip.description}
          </p>
          <div className="flex items-center gap-4 text-sm font-semibold text-white">
            <span className="flex items-center gap-1.5 bg-white/10 px-3 py-1 rounded-full backdrop-blur-sm"><Clock size={16} className="text-[#F5B91B]" /> {trip.duration}</span>
            <span className="flex items-center gap-1.5 bg-white/10 px-3 py-1 rounded-full backdrop-blur-sm"><Star size={16} className="text-[#F5B91B]" fill="currentColor" /> {trip.price} / person</span>
          </div>
        </div>

        {/* Arrows */}
        <button onClick={prevHero} className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-black/40 backdrop-blur-sm text-white p-2 md:p-3 rounded-full hover:bg-black/60 transition">
          <ChevronLeft size={24} />
        </button>
        <button onClick={nextHero} className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-black/40 backdrop-blur-sm text-white p-2 md:p-3 rounded-full hover:bg-black/60 transition">
          <ChevronRight size={24} />
        </button>

        {/* Dots */}
        <div className="absolute bottom-6 left-0 right-0 z-30 flex justify-center gap-2">
          {heroImages.map((_, idx) => (
            <button key={idx} onClick={() => setHeroIndex(idx)} className={`h-2 rounded-full transition-all duration-300 ${idx === heroIndex ? 'w-8 bg-[#F5B91B]' : 'w-2 bg-white/50 hover:bg-white'}`} />
          ))}
        </div>
      </div>

      {/* ================= BACK NAVIGATION ================= */}
      <div className="max-w-[1440px] mx-auto px-6 pt-6 relative z-20">
        <Link to="/" className="inline-flex items-center gap-2 text-gray-500 hover:text-[#087443] font-medium transition">
          <ArrowLeft size={18} /> Back to Home
        </Link>
      </div>

      {/* ================= 1. TRIP INTRODUCTION ================= */}
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 mt-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
          
          {/* Left: Overview */}
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100">
            <div className="flex items-center gap-2 mb-4">
              <Info size={20} className="text-[#087443]" />
              <h2 className="text-xl font-bold text-[#10243A]" style={{ fontFamily: "'Playfair Display', serif" }}>Package Overview</h2>
            </div>
            <p className="text-gray-600 mb-6 leading-relaxed">{trip.description}</p>
            
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2 text-gray-700"><Clock size={16} className="text-[#087443]" /> <span className="font-semibold">Duration:</span> {trip.duration}</li>
              <li className="flex items-center gap-2 text-gray-700"><MapPin size={16} className="text-[#087443]" /> <span className="font-semibold">Destinations:</span> {trip.destinations.map(d => d.name).join(', ')}</li>
              <li className="flex items-center gap-2 text-gray-700"><Users size={16} className="text-[#087443]" /> <span className="font-semibold">Tour Type:</span> {trip.groupType}</li>
              <li className="flex items-center gap-2 text-gray-700"><Sun size={16} className="text-[#087443]" /> <span className="font-semibold">Best Season:</span> {trip.bestSeason}</li>
              <li className="flex items-center gap-2 text-gray-700"><Star size={16} className="text-[#087443]" /> <span className="font-semibold">Starting From:</span> ${trip.price} per person</li>
            </ul>
          </div>

          {/* Right: Booking Card */}
          <div className="bg-[#10243A] text-white rounded-2xl p-6 md:p-8 shadow-lg relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#F5B91B] rounded-full mix-blend-overlay opacity-20 -translate-y-1/2 translate-x-1/2"></div>
            
            <div className="flex items-center gap-2 mb-6">
              <CalendarDays size={20} className="text-[#F5B91B]" />
              <h2 className="text-xl font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>Book Your Adventure</h2>
            </div>

            <form ref={bookingFormRef} onSubmit={handleReviewBooking} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold mb-1 text-gray-300">Travel Date</label>
                <input type="date" name="date" value={formData.date} onChange={handleInputChange} className="w-full bg-white/10 border border-white/20 rounded-lg p-2.5 text-sm text-white placeholder-gray-400 focus:outline-none focus:border-[#F5B91B]" />
              </div>
              
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold mb-1 text-gray-300">Adults</label>
                  <input required type="number" min="1" name="adults" value={formData.adults} onChange={handleInputChange} className="w-full bg-white/10 border border-white/20 rounded-lg p-2.5 text-sm text-white focus:outline-none focus:border-[#F5B91B]" />
                </div>
                <div>
                  <label className="block text-xs font-semibold mb-1 text-gray-300">Children</label>
                  <input required type="number" min="0" name="children" value={formData.children} onChange={handleInputChange} className="w-full bg-white/10 border border-white/20 rounded-lg p-2.5 text-sm text-white focus:outline-none focus:border-[#F5B91B]" />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold mb-1 text-gray-300">Pickup Location</label>
                <input type="text" name="pickup" placeholder="Your hotel name..." value={formData.pickup} onChange={handleInputChange} className="w-full bg-white/10 border border-white/20 rounded-lg p-2.5 text-sm text-white placeholder-gray-400 focus:outline-none focus:border-[#F5B91B]" />
              </div>

              <div>
                <label className="block text-xs font-semibold mb-1 text-gray-300">Full Name *</label>
                <div className="relative"><User size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-white/50" /><input required autoComplete="name" type="text" name="fullName" placeholder="Your full name" value={formData.fullName} onChange={handleInputChange} className="w-full rounded-lg border border-white/20 bg-white/10 p-2.5 pl-9 text-sm text-white placeholder-gray-400 focus:border-[#F5B91B] focus:outline-none" /></div>
              </div>
              <div>
                <label className="block text-xs font-semibold mb-1 text-gray-300">Email Address *</label>
                <div className="relative"><Mail size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-white/50" /><input required autoComplete="email" type="email" name="email" placeholder="you@example.com" value={formData.email} onChange={handleInputChange} className="w-full rounded-lg border border-white/20 bg-white/10 p-2.5 pl-9 text-sm text-white placeholder-gray-400 focus:border-[#F5B91B] focus:outline-none" /></div>
              </div>
              <div>
                <label className="block text-xs font-semibold mb-1 text-gray-300">WhatsApp / Phone *</label>
                <div className="relative"><Phone size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-white/50" /><input required autoComplete="tel" type="tel" name="phone" placeholder="+255..." value={formData.phone} onChange={handleInputChange} className="w-full rounded-lg border border-white/20 bg-white/10 p-2.5 pl-9 text-sm text-white placeholder-gray-400 focus:border-[#F5B91B] focus:outline-none" /></div>
              </div>

              <div>
                <label className="block text-xs font-semibold mb-1 text-gray-300">Special Requests</label>
                <textarea name="requests" placeholder="Any special requests..." value={formData.requests} onChange={handleInputChange} rows="2" className="w-full bg-white/10 border border-white/20 rounded-lg p-2.5 text-sm text-white placeholder-gray-400 focus:outline-none focus:border-[#F5B91B]"></textarea>
              </div>

              <div className="bg-white/10 rounded-xl p-3 text-center border border-white/10">
                <span className="text-xs text-gray-300 block">Total Starting From</span>
                <span className="text-2xl font-bold text-[#F5B91B]">${trip.price}</span>
                <span className="text-xs text-gray-300"> per person</span>
              </div>

              <button type="submit" className="w-full flex items-center justify-center gap-2 bg-[#087443] text-white font-bold py-3 rounded-full hover:bg-green-800 transition shadow-md">
                <CheckCircle2 size={18} /> Review Booking Receipt
              </button>
              
              <div className="text-center text-[10px] text-gray-400 mt-2 flex items-center justify-center gap-1">
                <CheckCircle2 size={12} /> Secure & Easy Booking
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* ================= 2. DESTINATIONS SLIDESHOW ================= */}
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 mt-12">
        <div className="flex items-center gap-2 mb-6">
          <MapPin size={20} className="text-[#087443]" />
          <h2 className="text-2xl font-bold text-[#10243A]" style={{ fontFamily: "'Playfair Display', serif" }}>Destinations You Will Explore</h2>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden flex flex-col md:flex-row">
          
          {/* LEFT: Picha */}
          <div className="relative w-full md:w-1/2 h-[300px] md:h-[400px]">
            {trip.destinations.map((dest, index) => (
              <div 
                key={dest.id} 
                className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
              >
                <img src={dest.image} alt={dest.name} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
            ))}
            
            <div className="absolute top-4 right-4 z-20 bg-black/50 backdrop-blur-md text-white px-3 py-1 rounded-full text-xs font-semibold border border-white/20">
              {String(currentIndex + 1).padStart(2, '0')} / {String(totalSlides).padStart(2, '0')}
            </div>

            <button onClick={() => setIsPlaying(!isPlaying)} className="absolute top-4 left-4 z-20 bg-black/50 backdrop-blur-md text-white p-2 rounded-full border border-white/20 hover:bg-black/70 transition">
              {isPlaying ? <Pause size={14} /> : <Play size={14} />}
            </button>

            <button onClick={() => { prevSlide(); setIsPlaying(false); }} className="absolute left-2 top-1/2 -translate-y-1/2 z-20 bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/40 transition">
              <ChevronLeft size={20} />
            </button>
            <button onClick={() => { nextSlide(); setIsPlaying(false); }} className="absolute right-2 top-1/2 -translate-y-1/2 z-20 bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/40 transition">
              <ChevronRight size={20} />
            </button>

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2">
              {trip.destinations.map((_, idx) => (
                <button key={idx} onClick={() => goToSlide(idx)} className={`w-2.5 h-2.5 rounded-full transition-all ${idx === currentIndex ? 'bg-[#F5B91B] w-6' : 'bg-white/50 hover:bg-white'}`} />
              ))}
            </div>
          </div>

          {/* RIGHT: Maelezo */}
          <div className="w-full md:w-1/2 p-6 md:p-10 flex flex-col justify-center relative">
            <div className="mb-4">
              <span className="inline-block bg-[#087443]/10 text-[#087443] text-xs font-bold px-3 py-1 rounded-full mb-3">{currentDestination.location}</span>
              <h3 className="text-3xl font-bold text-[#10243A] mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>{currentDestination.name}</h3>
              <p className="text-gray-600 leading-relaxed mb-6">{currentDestination.description}</p>
            </div>

            <div className="mb-6">
              <h4 className="text-sm font-bold text-[#10243A] mb-3 flex items-center gap-2"><Star size={16} className="text-[#F5B91B]" /> Experience Highlights</h4>
              <div className="flex flex-wrap gap-2">
                {currentDestination.highlights.map((h, i) => (
                  <span key={i} className="bg-gray-50 text-gray-700 text-xs font-medium px-3 py-1.5 rounded-md border border-gray-200">{h}</span>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-2 text-sm font-semibold text-gray-500 bg-gray-50 p-3 rounded-lg w-fit">
              <Clock size={16} className="text-[#087443]" /> Approx. Time Spent: {currentDestination.timeSpent}
            </div>
          </div>
        </div>
      </div>

      {/* ================= 3. ITINERARY & 4. INCLUSIONS ================= */}
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        <div className="lg:col-span-2 bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100">
          <div className="flex items-center gap-2 mb-6">
            <Clock size={20} className="text-[#087443]" />
            <h2 className="text-xl font-bold text-[#10243A]" style={{ fontFamily: "'Playfair Display', serif" }}>Full Day Itinerary</h2>
          </div>
          
          <div className="relative border-l-2 border-[#F5B91B]/30 ml-3 space-y-8 pb-4">
            {trip.itinerary.map((item, index) => (
              <div key={index} className="relative pl-8">
                <div className="absolute -left-[17px] top-0 w-8 h-8 rounded-full bg-[#087443] text-white flex items-center justify-center border-4 border-white shadow-sm z-10">
                  {item.icon}
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-1">
                  <span className="text-sm font-bold text-[#F5B91B] bg-[#F5B91B]/10 px-2 py-0.5 rounded">{item.time}</span>
                  <h4 className="font-bold text-[#10243A]">{item.title}</h4>
                </div>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <h3 className="text-lg font-bold text-[#087443] mb-4 flex items-center gap-2"><CheckCircle2 size={20} /> What's Included</h3>
            <ul className="space-y-3">
              {trip.included.map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                  <CheckCircle2 size={16} className="text-[#087443] shrink-0 mt-0.5" /> {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <h3 className="text-lg font-bold text-rose-600 mb-4 flex items-center gap-2"><XCircle size={20} /> What's Not Included</h3>
            <ul className="space-y-3">
              {trip.notIncluded.map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                  <XCircle size={16} className="text-rose-500 shrink-0 mt-0.5" /> {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* ================= GALLERY ================= */}
      {trip.gallery && trip.gallery.length > 0 && (
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 mt-12">
          <h2 className="text-2xl font-bold text-[#10243A] mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
            Photo Gallery
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {trip.gallery.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`${trip.title} gallery ${index + 1}`}
                className="w-full h-48 md:h-64 rounded-xl object-cover"
              />
            ))}
          </div>
        </div>
      )}
      <BookingReceipt open={receiptOpen} receipt={receiptData} onClose={() => setReceiptOpen(false)} onWhatsApp={handleWhatsAppBooking} onEmail={handleEmailQuote} />
    </div>
  );
};

export default FullPackageDetails;

// src/pages/SafariPackages.jsx
import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import BookingReceipt from './BookingReceipt';
import { createBookingReference, formatBookingReceiptMessage } from './bookingReceiptUtils';
import TravelDateInput from './TravelDateInput';
import { useLanguage, translatePhrase } from '../i18n/LanguageContext';
import { 
  Search, MapPin, Star, Users, CheckCircle2,
  PawPrint, ShieldCheck, Headset, Gem,
  Mail, ArrowRight, CalendarDays, Calendar, User, Phone, Hotel,
  ChevronRight, Camera, UserCheck, Compass
} from 'lucide-react';

// ==========================================
// 1. DATA YA SAFARI PACKAGES
// ==========================================
const safariCategories = [
  { id: 'serengeti', name: 'Serengeti Safaris', img: 'https://images.unsplash.com/photo-1546182990-dffeafbe841d?q=80&w=200&auto=format&fit=crop' },
  { id: 'ngorongoro', name: 'Ngorongoro Crater', img: 'https://images.unsplash.com/photo-1519066629447-267fffa62d4b?q=80&w=200&auto=format&fit=crop' },
  { id: 'tarangire', name: 'Tarangire Safari', img: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=200&auto=format&fit=crop' },
  { id: 'manyara', name: 'Lake Manyara Safari', img: 'https://images.unsplash.com/photo-1534567153574-2b12153a87f0?q=80&w=200&auto=format&fit=crop' },
  { id: 'selous', name: 'Selous Game Reserve', img: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=200&auto=format&fit=crop' },
  { id: 'custom', name: 'Custom Safaris', img: 'https://images.unsplash.com/photo-1521651201144-634f700b36ef?q=80&w=200&auto=format&fit=crop' },
];

const safariData = {
  'serengeti': {
    id: 'serengeti',
    title: 'Serengeti Classic Migration Safari',
    location: 'Tanzania',
    rating: 5.0,
    reviews: 124,
    price: 1450,
    duration: '5 Days / 4 Nights',
    group: '4x4 Safari Jeep',
    park: 'Serengeti National Park',
    description: 'Witness the world-famous Great Migration in the Serengeti! Millions of wildebeest and zebras crossing the endless plains, followed by Africa\'s top predators. This 5-day safari takes you to the heart of the action with luxury tented camp accommodation.',
    highlights: [
      'Great Migration viewing', 'Stunning landscapes',
      'Big Five sightings', 'Professional safari guide',
      'Luxury tented camp', 'Unforgettable experience'
    ],
    images: [
      'https://images.unsplash.com/photo-1546182990-dffeafbe841d?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1534567153574-2b12153a87f0?q=80&w=600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1521651201144-634f700b36ef?q=80&w=600&auto=format&fit=crop'
    ]
  },
  '1': {
    id: '1', title: 'Serengeti Classic Migration Safari', location: 'Serengeti, Tanzania', rating: 5.0, reviews: 378,
    price: 1450, duration: '4 Days / 3 Nights', group: '4x4 Safari Jeep', park: 'Serengeti National Park',
    description: 'Witness the Great Migration in the Serengeti with millions of wildebeest, zebra and luxury tented camps.',
    highlights: ['Great Migration viewing', 'Big Five sightings', 'Luxury tented camp', 'Professional safari guide'],
    images: ['https://images.unsplash.com/photo-1546182990-dffeafbe841d?q=80&w=1000&auto=format&fit=crop','https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=1000&auto=format&fit=crop','https://images.unsplash.com/photo-1534567153574-2b12153a87f0?q=80&w=1000&auto=format&fit=crop']
  },
  '2': {
    id: '2', title: 'Ultimate Tanzania Grand Safari', location: 'Northern Tanzania', rating: 5.0, reviews: 198,
    price: 3850, duration: '9 Days / 8 Nights', group: '4x4 Safari Jeep', park: 'Five National Parks',
    description: 'Explore Tarangire, Serengeti, Ngorongoro and Lake Natron on this ultimate Tanzania adventure.',
    highlights: ['Five national parks', 'Great Migration', 'Lake Natron', 'Luxury lodges'],
    images: ['https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=1000&auto=format&fit=crop','https://images.unsplash.com/photo-1521651201144-634f700b36ef?q=80&w=1000&auto=format&fit=crop','https://images.unsplash.com/photo-1546182990-dffeafbe841d?q=80&w=1000&auto=format&fit=crop']
  },
  '3': {
    id: '3', title: 'Serengeti & Ngorongoro Crater Safari', location: 'Northern Tanzania', rating: 4.9, reviews: 312,
    price: 1350, duration: '4 Days / 3 Nights', group: '4x4 Safari Jeep', park: 'Serengeti & Ngorongoro',
    description: 'Visit the iconic Serengeti plains and descend into the Ngorongoro Crater to experience the Big Five.',
    highlights: ['Serengeti National Park', 'Ngorongoro Crater descent', 'Big Five sightings', 'Private guide'],
    images: ['https://images.unsplash.com/photo-1534567153574-2b12153a87f0?q=80&w=1000&auto=format&fit=crop','https://images.unsplash.com/photo-1519066629447-267fffa62d4b?q=80&w=1000&auto=format&fit=crop','https://images.unsplash.com/photo-1546182990-dffeafbe841d?q=80&w=1000&auto=format&fit=crop']
  },
  '4': {
    id: '4', title: 'Classic Tanzania Northern Circuit Safari', location: 'Northern Tanzania', rating: 4.9, reviews: 267,
    price: 2250, duration: '6 Days / 5 Nights', group: '4x4 Safari Jeep', park: 'Northern Circuit',
    description: 'Explore Tarangire, Manyara, Serengeti and Ngorongoro in one unforgettable northern circuit journey.',
    highlights: ['Four iconic parks', 'Big Five', 'Great Migration', 'Comfortable lodges'],
    images: ['https://images.unsplash.com/photo-1521651201144-634f700b36ef?q=80&w=1000&auto=format&fit=crop','https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=1000&auto=format&fit=crop','https://images.unsplash.com/photo-1534567153574-2b12153a87f0?q=80&w=1000&auto=format&fit=crop']
  },
  '5': {
    id: '5', title: 'Ngorongoro Highlands & Crater Safari', location: 'Ngorongoro, Tanzania', rating: 4.9, reviews: 234,
    price: 980, duration: '3 Days / 2 Nights', group: '4x4 Safari Jeep', park: 'Ngorongoro Highlands',
    description: 'Enjoy a crater game drive, rim walk and authentic Maasai cultural experience in the Ngorongoro Highlands.',
    highlights: ['Crater game drive', 'Crater rim walk', 'Maasai culture', 'Wildlife viewing'],
    images: ['https://images.unsplash.com/photo-1519066629447-267fffa62d4b?q=80&w=1000&auto=format&fit=crop','https://images.unsplash.com/photo-1534567153574-2b12153a87f0?q=80&w=1000&auto=format&fit=crop','https://images.unsplash.com/photo-1521651201144-634f700b36ef?q=80&w=1000&auto=format&fit=crop']
  },
  '6': {
    id: '6', title: 'Serengeti Deep Wilderness Safari', location: 'Remote Serengeti, Tanzania', rating: 5.0, reviews: 156,
    price: 2650, duration: '6 Days / 5 Nights', group: '4x4 Safari Jeep', park: 'Remote Serengeti',
    description: 'Immerse yourself in remote Serengeti areas with walking safaris and authentic bush camping.',
    highlights: ['Remote Serengeti areas', 'Walking safari', 'Bush camping', 'Wildlife photography'],
    images: ['https://images.unsplash.com/photo-1456926631375-92c8ce872def?q=80&w=1000&auto=format&fit=crop','https://images.unsplash.com/photo-1546182990-dffeafbe841d?q=80&w=1000&auto=format&fit=crop','https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=1000&auto=format&fit=crop']
  },
  '7': {
    id: '7', title: 'Tarangire Elephants & Baobabs Safari', location: 'Tarangire, Tanzania', rating: 4.9, reviews: 143,
    price: 890, duration: '3 Days / 2 Nights', group: '4x4 Safari Jeep', park: 'Tarangire National Park',
    description: 'Explore Tarangire’s baobab-dotted savannah and follow its large elephant herds on guided game drives.',
    highlights: ['Massive elephant herds', 'Ancient baobab trees', 'Tarangire River game drives', 'Professional local guide'],
    images: ['https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=1000&auto=format&fit=crop','https://images.unsplash.com/photo-1546182990-dffeafbe841d?q=80&w=1000&auto=format&fit=crop','https://images.unsplash.com/photo-1534567153574-2b12153a87f0?q=80&w=1000&auto=format&fit=crop']
  },
  '8': {
    id: '8', title: 'Lake Manyara Wildlife Safari', location: 'Lake Manyara, Tanzania', rating: 4.8, reviews: 118,
    price: 920, duration: '3 Days / 2 Nights', group: '4x4 Safari Jeep', park: 'Lake Manyara National Park',
    description: 'Discover Lake Manyara’s forest and lakeshore, with chances to spot tree-climbing lions and flamingos.',
    highlights: ['Tree-climbing lions', 'Flamingos and lake views', 'Rift Valley escarpment', 'Forest and savannah game drives'],
    images: ['https://images.unsplash.com/photo-1534567153574-2b12153a87f0?q=80&w=1000&auto=format&fit=crop','https://images.unsplash.com/photo-1519066629447-267fffa62d4b?q=80&w=1000&auto=format&fit=crop','https://images.unsplash.com/photo-1546182990-dffeafbe841d?q=80&w=1000&auto=format&fit=crop']
  },
  '9': {
    id: '9', title: 'Mikumi Short Safari from Zanzibar', location: 'Mikumi, Tanzania', rating: 4.9, reviews: 96,
    price: 780, duration: '2 Days / 1 Night', group: 'Flight & 4x4 Safari Jeep', park: 'Mikumi National Park',
    description: 'Take a quick flight from Zanzibar for game drives across Mikumi’s open plains and wildlife-rich waterholes.',
    highlights: ['Return flights from Zanzibar', 'Mikumi game drives', 'Wildlife-rich Mkata Floodplain', 'Overnight safari lodge'],
    images: ['https://images.unsplash.com/photo-1456926631375-92c8ce872def?q=80&w=1000&auto=format&fit=crop','https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=1000&auto=format&fit=crop','https://images.unsplash.com/photo-1546182990-dffeafbe841d?q=80&w=1000&auto=format&fit=crop']
  },
  '10': {
    id: '10', title: 'Udzungwa Waterfalls & Forest Trek', location: 'Udzungwa Mountains, Tanzania', rating: 4.8, reviews: 74,
    price: 1050, duration: '3 Days / 2 Nights', group: 'Guided Hiking Tour', park: 'Udzungwa Mountains National Park',
    description: 'Hike through lush mountain forest to scenic waterfalls and look for Udzungwa’s endemic primates.',
    highlights: ['Guided forest hiking', 'San je Waterfall', 'Endemic primates', 'Mountain forest scenery'],
    images: ['https://images.unsplash.com/photo-1521651201144-634f700b36ef?q=80&w=1000&auto=format&fit=crop','https://images.unsplash.com/photo-1534567153574-2b12153a87f0?q=80&w=1000&auto=format&fit=crop','https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=1000&auto=format&fit=crop']
  },
};

const SAFARI_BOOKING_WHATSAPP = '255653924851';

// ==========================================
// 2. COMPONENT KUU
// ==========================================
const SafariPackages = () => {
  const { language } = useLanguage();
  const { id } = useParams();
  const [activeCategory, setActiveCategory] = useState(id || '1');
  const tour = safariData[id || activeCategory] || safariData['1'];

  const [searchTerm, setSearchTerm] = useState('');
  const [bookingReference] = useState(() => createBookingReference());
  const [receiptOpen, setReceiptOpen] = useState(false);
  const [bookingData, setBookingData] = useState({
    date: '',
    travelers: '1 Person',
    fullName: '',
    email: '',
    phone: '',
    pickup: '',
    specialRequests: ''
  });

  const handleBookingChange = (event) => {
    setBookingData((current) => ({ ...current, [event.target.name]: event.target.value }));
  };

  const travelerCount = bookingData.travelers === '5+ People' ? null : Number.parseInt(bookingData.travelers, 10);
  const receiptData = {
    reference: bookingReference,
    bookingDate: new Intl.DateTimeFormat(language === 'ru' ? 'ru-RU' : language === 'fr' ? 'fr-FR' : language === 'de' ? 'de-DE' : language === 'it' ? 'it-IT' : 'en-GB', { dateStyle: 'medium' }).format(new Date()),
    category: 'Tanzania Safari',
    productName: tour.title,
    duration: tour.duration,
    destination: tour.park,
    travelDate: bookingData.date || 'Flexible / To be confirmed',
    travelers: bookingData.travelers,
    pricePerPerson: tour.price,
    pricePerPersonLabel: 'Starting price per person',
    totalEstimated: travelerCount ? tour.price * travelerCount : null,
    totalLabel: travelerCount ? 'Estimated starting total' : 'Total for 5+ travelers',
    customer: {
      fullName: bookingData.fullName,
      email: bookingData.email,
      phone: bookingData.phone,
      pickup: bookingData.pickup || 'Not provided',
      requests: bookingData.specialRequests || 'None'
    }
  };

  const handleReviewBooking = (event) => {
    event.preventDefault();
    setReceiptOpen(true);
  };

  const handleWhatsAppBooking = () => {
    const message = encodeURIComponent(formatBookingReceiptMessage(receiptData, language));
    window.open(`https://wa.me/${SAFARI_BOOKING_WHATSAPP}?text=${message}`, '_blank', 'noopener,noreferrer');
  };

  const handleEmailQuote = () => {
    const subjectLabel = language === 'ru' ? 'Запрос на бронирование' : language === 'fr' ? 'Demande de réservation' : language === 'de' ? 'Buchungsanfrage' : language === 'it' ? 'Richiesta di prenotazione' : 'Booking Request';
    const subject = encodeURIComponent(`${subjectLabel} ${bookingReference} – ${language === 'en' ? tour.title : translatePhrase(tour.title, language)}`);
    const body = encodeURIComponent(formatBookingReceiptMessage(receiptData, language));
    window.location.href = `mailto:cruisinginzanzibar@gmail.com?subject=${subject}&body=${body}`;
  };

  // Pata related tours (zote isipokuwa hii ya sasa)
  const relatedTours = Object.values(safariData).filter(t => t.id !== (id || activeCategory)).slice(0, 3);

  return (
    <div className="min-h-screen bg-[#fcfdfa] font-sans pb-24 overflow-x-hidden">
      
      {/* ================= CSS KEYFRAMES ZA ANIMATION ================= */}
      <style>
        {`
          @keyframes fadeSlideDown {
            0% { opacity: 0; transform: translateY(-40px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          @keyframes fadeSlideUp {
            0% { opacity: 0; transform: translateY(40px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          @keyframes fadeSlideInLeft {
            0% { opacity: 0; transform: translateX(-40px); }
            100% { opacity: 1; transform: translateX(0); }
          }
          @keyframes fadeSlideInRight {
            0% { opacity: 0; transform: translateX(40px); }
            100% { opacity: 1; transform: translateX(0); }
          }
          @keyframes fadeIn {
            0% { opacity: 0; }
            100% { opacity: 1; }
          }
          .animate-hero-text {
            animation: fadeSlideUp 1s ease-out forwards;
          }
          .animate-slide-down {
            animation: fadeSlideDown 1s ease-out forwards;
          }
          .animate-slide-left {
            animation: fadeSlideInLeft 1.2s ease-out forwards;
          }
          .animate-slide-right {
            animation: fadeSlideInRight 1.2s ease-out forwards;
          }
          .animate-slow-fade {
            animation: fadeIn 2s ease-out forwards;
          }
        `}
      </style>

      {/* ================= 1. HERO SECTION ================= */}
      <div className="relative w-full h-[400px] md:h-[500px] bg-[#10243A] overflow-hidden flex items-center">
        {/* Background Image */}
        <img 
          src="https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=2000&auto=format&fit=crop" 
          alt="Tanzania Safari" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#10243A]/95 via-[#10243A]/70 to-transparent"></div>
        
        <div className="relative z-10 max-w-[1200px] mx-auto px-6 md:px-12 w-full">
          <div className="max-w-2xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#F5B91B]/50 bg-[#10243A]/80 text-[#F5B91B] font-bold tracking-widest text-xs md:text-sm mb-6 backdrop-blur-sm animate-slide-down">
              <PawPrint size={14} />
              EXPLORE TANZANIA
            </div>
            
            {/* Title */}
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight animate-hero-text" style={{ fontFamily: "'Playfair Display', serif", animationDelay: '200ms' }}>
              Our <span className="text-[#F5B91B]">Safari</span> Packages
            </h1>
            
            {/* Subtitle */}
            <p className="text-gray-200 text-base md:text-lg mb-8 max-w-lg animate-hero-text" style={{ animationDelay: '400ms' }}>
              Discover the wild beauty of Tanzania with our carefully crafted safari packages.
            </p>

            {/* Search Bar */}
            <div className="relative max-w-md animate-hero-text" style={{ animationDelay: '600ms' }}>
              <input 
                type="text" 
                placeholder="Search safari packages..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-28 py-3 rounded-full bg-white text-gray-800 text-sm focus:outline-none shadow-lg"
              />
              <Search size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
              <button className="absolute right-1.5 top-1/2 -translate-y-1/2 bg-[#F5B91B] text-[#10243A] font-bold px-6 py-2 rounded-full text-sm hover:bg-yellow-500 transition-colors">
                Search
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ================= 2. TRUST BADGES BAR ================= */}
      <div className="relative z-20 max-w-[1200px] mx-auto px-4 md:px-8 -mt-8">
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-4 flex flex-wrap justify-between items-center gap-4 animate-slide-down" style={{ animationDelay: '800ms' }}>
          {[
            { icon: <PawPrint size={24} />, text: 'Big Five Safaris' },
            { icon: <ShieldCheck size={24} />, text: 'Safe & Reliable' },
            { icon: <Headset size={24} />, text: '24/7 Support' },
            { icon: <Gem size={24} />, text: 'Best Price Guarantee' },
            { icon: <UserCheck size={24} />, text: 'Expert Guides' }
          ].map((item, idx) => (
            <div key={idx} className="flex items-center gap-2 text-sm font-semibold text-[#10243A]">
              <span className="text-[#087443]">{item.icon}</span>
              <span>{item.text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ================= 3. MAIN CONTENT (Sidebar, Details, Booking) ================= */}
      <div className="max-w-[1200px] mx-auto px-4 md:px-8 mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* LEFT: Sidebar Categories (Cols 3) */}
        <div className="lg:col-span-3 space-y-6 opacity-0 animate-slide-left" style={{ animationDelay: '300ms' }}>
          
          {/* Categories Card */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="bg-[#10243A] text-white py-3 px-5 flex items-center gap-2">
              <Compass size={18} className="text-[#F5B91B]" />
              <h3 className="font-bold text-sm">Safari Categories</h3>
            </div>
            <div className="p-3 space-y-1">
              {safariCategories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`w-full flex items-center gap-3 p-2 rounded-xl transition-all duration-300 ${
                    activeCategory === cat.id 
                      ? 'bg-[#087443]/10 border border-[#087443]/20' 
                      : 'hover:bg-gray-50 border border-transparent'
                  }`}
                >
                  <img src={cat.img} alt={cat.name} loading="lazy" decoding="async" className="w-10 h-10 rounded-lg object-cover" />
                  <span className={`text-sm font-semibold ${activeCategory === cat.id ? 'text-[#087443]' : 'text-gray-700'}`}>
                    {cat.name}
                  </span>
                  {activeCategory === cat.id && <ChevronRight size={16} className="ml-auto text-[#087443]" />}
                </button>
              ))}
            </div>
          </div>

          {/* CTA Card */}
          <div className="relative rounded-2xl overflow-hidden shadow-lg h-48 group cursor-pointer">
            <img src="https://images.unsplash.com/photo-1519066629447-267fffa62d4b?q=80&w=600&auto=format&fit=crop" alt="Custom Safari" loading="lazy" decoding="async" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <h4 className="font-bold text-lg leading-tight mb-1" style={{ fontFamily: "'Playfair Display', serif" }}>Plan Your Dream Safari</h4>
              <p className="text-xs text-gray-300 mb-3">Let us create a tailor-made safari experience for you.</p>
              <Link to="/contact" className="inline-flex items-center gap-1 bg-[#F5B91B] text-[#10243A] font-bold px-4 py-1.5 rounded-full text-xs hover:bg-yellow-500 transition-colors">
                Contact Us <ArrowRight size={12} />
              </Link>
            </div>
          </div>
        </div>

        {/* MIDDLE: Tour Details (Cols 5) */}
        <div className="lg:col-span-5 space-y-6 opacity-0 animate-slide-right" style={{ animationDelay: '400ms' }}>
          
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
            {/* Header */}
            <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
              <MapPin size={16} className="text-[#F5B91B]" /> {tour.location}
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-[#10243A] mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
              {tour.title}
            </h2>
            
            {/* Rating & Meta */}
            <div className="flex flex-wrap items-center gap-3 text-sm text-gray-600 mb-4">
              <span className="flex items-center gap-1"><Star size={16} className="text-[#F5B91B]" fill="currentColor" /> {tour.rating} ({tour.reviews} reviews)</span>
              <span className="flex items-center gap-1"><CalendarDays size={16} className="text-[#087443]" /> {tour.duration}</span>
              <span className="flex items-center gap-1"><MapPin size={16} className="text-[#087443]" /> {tour.park}</span>
            </div>

            {/* Description */}
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              {tour.description}
            </p>

            {/* Highlights */}
            <div className="mb-6">
              <h4 className="text-lg font-bold text-[#10243A] mb-3 flex items-center gap-2">
                <Star size={18} className="text-[#F5B91B]" /> Tour Highlights
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {tour.highlights.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                    <CheckCircle2 size={16} className="text-[#087443] shrink-0" /> {item}
                  </div>
                ))}
              </div>
            </div>

            {/* Gallery Grid */}
            <div className="grid grid-cols-4 gap-2">
              {tour.images.map((img, idx) => (
                <div key={idx} className={`relative rounded-lg overflow-hidden h-20 ${idx === 0 ? 'col-span-2 row-span-2 h-auto' : ''}`}>
                  <img src={img} alt={`${tour.title} gallery photo ${idx + 1}`} loading="lazy" decoding="async" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500 cursor-pointer" />
                  {idx === 0 && (
                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center hover:bg-black/50 transition-colors cursor-pointer">
                      <span className="text-white text-xs font-bold flex items-center gap-1"><Camera size={14} /> View Gallery</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT: Booking Card (Cols 4) */}
        <div className="lg:col-span-4 opacity-0 animate-slide-right" style={{ animationDelay: '600ms' }}>
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden sticky top-24">
            
            {/* Booking Card Heading */}
            <div className="bg-[#087443] px-5 py-4 text-center text-white">
              <h3 className="text-lg font-bold">Book This Tour</h3>
              <p className="mt-0.5 text-xs text-green-100">Secure your safari booking</p>
            </div>

            <div className="p-6">
              {/* Price */}
              <div className="text-center mb-4">
                <span className="text-4xl font-bold text-[#10243A]">${tour.price.toLocaleString()}.00</span>
                <span className="text-sm text-gray-500 font-medium"> / person</span>
                <div className="flex items-center justify-center gap-1 text-xs text-gray-500 mt-1">
                  <Star size={12} className="text-[#F5B91B]" fill="currentColor" /> {tour.rating} ({tour.reviews} reviews)
                </div>
              </div>

              {/* Meta Info */}
              <div className="mb-5 grid grid-cols-2 gap-2">
                <div className="flex items-center gap-2 rounded-xl border border-gray-100 bg-gray-50 p-3">
                  <CalendarDays size={17} className="shrink-0 text-[#087443]" />
                  <div><p className="text-[10px] font-semibold uppercase tracking-wide text-gray-400">Duration</p><p className="text-xs font-bold text-gray-700">{tour.duration}</p></div>
                </div>
                <div className="flex items-center gap-2 rounded-xl border border-gray-100 bg-gray-50 p-3">
                  <Star size={17} className="shrink-0 text-[#F5B91B]" fill="currentColor" />
                  <div><p className="text-[10px] font-semibold uppercase tracking-wide text-gray-400">Rating</p><p className="text-xs font-bold text-gray-700">{tour.rating}/5</p></div>
                </div>
                <div className="flex items-center gap-2 rounded-xl border border-gray-100 bg-gray-50 p-3">
                  <Users size={17} className="shrink-0 text-[#087443]" />
                  <div><p className="text-[10px] font-semibold uppercase tracking-wide text-gray-400">Travel style</p><p className="text-xs font-bold text-gray-700">Private / Group</p></div>
                </div>
                <div className="flex items-center gap-2 rounded-xl border border-gray-100 bg-gray-50 p-3">
                  <Hotel size={17} className="shrink-0 text-[#087443]" />
                  <div><p className="text-[10px] font-semibold uppercase tracking-wide text-gray-400">Accommodation</p><p className="text-xs font-bold text-gray-700">On request</p></div>
                </div>
              </div>

              {/* Booking Form */}
              <form onSubmit={handleReviewBooking} className="space-y-3">
                <div>
                  <label htmlFor="safari-travelers" className="mb-1 ml-1 block text-xs font-bold text-[#10243A]">Travelers</label>
                  <div className="relative">
                    <select id="safari-travelers" name="travelers" value={bookingData.travelers} onChange={handleBookingChange} className="w-full appearance-none rounded-xl border border-gray-200 bg-white py-3 pl-10 pr-4 text-sm focus:border-[#087443] focus:outline-none focus:ring-4 focus:ring-green-100">
                      <option value="1 Person">1 Person</option>
                      <option value="2 People">2 People</option>
                      <option value="3 People">3 People</option>
                      <option value="4 People">4 People</option>
                      <option value="5+ People">5+ People</option>
                    </select>
                    <Users size={17} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
                  </div>
                </div>

                <div className="relative">
                  <input required autoComplete="name" type="text" name="fullName" value={bookingData.fullName} onChange={handleBookingChange} placeholder="Full Name *" aria-label="Full Name" className="w-full rounded-xl border border-gray-200 bg-white py-3 pl-10 pr-4 text-sm focus:border-[#087443] focus:outline-none focus:ring-4 focus:ring-green-100" />
                  <User size={17} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
                </div>
                <div className="relative">
                  <input required autoComplete="email" type="email" name="email" value={bookingData.email} onChange={handleBookingChange} placeholder="Email Address *" aria-label="Email Address" className="w-full rounded-xl border border-gray-200 bg-white py-3 pl-10 pr-4 text-sm focus:border-[#087443] focus:outline-none focus:ring-4 focus:ring-green-100" />
                  <Mail size={17} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
                </div>
                <div className="relative">
                  <input required autoComplete="tel" type="tel" name="phone" value={bookingData.phone} onChange={handleBookingChange} placeholder="Phone / WhatsApp *" aria-label="Phone / WhatsApp" className="w-full rounded-xl border border-gray-200 bg-white py-3 pl-10 pr-4 text-sm focus:border-[#087443] focus:outline-none focus:ring-4 focus:ring-green-100" />
                  <Phone size={17} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
                </div>
                <div className="relative">
                  <input type="text" name="pickup" value={bookingData.pickup} onChange={handleBookingChange} placeholder="Hotel / Pickup Location (optional)" aria-label="Hotel / Pickup Location (optional)" className="w-full rounded-xl border border-gray-200 bg-white py-3 pl-10 pr-4 text-sm focus:border-[#087443] focus:outline-none focus:ring-4 focus:ring-green-100" />
                  <MapPin size={17} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
                </div>
                <div className="relative">
                  <TravelDateInput id="safari-travel-date" value={bookingData.date} onDateChange={(date) => setBookingData((current) => ({ ...current, date }))} />
                  <Calendar size={17} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
                </div>
                <textarea name="specialRequests" value={bookingData.specialRequests} onChange={handleBookingChange} rows="2" placeholder="Special requests (optional)" aria-label="Special requests (optional)" className="w-full resize-none rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm focus:border-[#087443] focus:outline-none focus:ring-4 focus:ring-green-100" />

                <button type="submit" className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#087443] py-3.5 font-bold text-white shadow-lg transition hover:bg-green-800">
                  <CheckCircle2 size={20} /> Review Booking Receipt
                </button>
              </form>

              {/* Bottom Help */}
              <div className="mt-6 bg-[#f0f7f3] p-3 rounded-xl border border-[#087443]/10 flex items-center gap-3">
                <Headset size={24} className="text-[#087443] shrink-0" />
                <div>
                  <h5 className="text-xs font-bold text-[#10243A]">Have Questions?</h5>
                  <a href="https://wa.me/255653924851" className="text-[11px] text-[#087443] font-semibold flex items-center gap-1 hover:underline">
                    Chat with us on WhatsApp <ChevronRight size={12} />
                  </a>
      </div>
              </div>

            </div>
          </div>
        </div>

      </div>
      
      {/* ================= 4. WHY CHOOSE US ================= */}
      <div className="max-w-[1200px] mx-auto px-4 md:px-8 mt-16 text-center">
         <h2 className="text-2xl font-bold text-[#10243A] mb-8" style={{ fontFamily: "'Playfair Display', serif" }}>
            Why Choose Our Safari Packages?
         </h2>
         <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: <ShieldCheck size={32} />, title: 'Safe Travel', desc: 'Your safety is our priority' },
              { icon: <UserCheck size={32} />, title: 'Expert Guides', desc: 'Local knowledge & experience' },
              { icon: <Gem size={32} />, title: 'Best Value', desc: 'Luxury at affordable prices' },
              { icon: <PawPrint size={32} />, title: 'Wildlife Focus', desc: 'Authentic animal encounters' }
            ].map((item, idx) => (
              <div key={idx} className="flex flex-col items-center p-4">
                <div className="w-14 h-14 rounded-full bg-[#087443]/10 text-[#087443] flex items-center justify-center mb-3">
                  {item.icon}
                </div>
                <h4 className="font-bold text-sm text-[#10243A] mb-1">{item.title}</h4>
                <p className="text-xs text-gray-500">{item.desc}</p>
              </div>
            ))}
         </div>
      </div>

      {/* ================= 5. RELATED TOURS (MPYA) ================= */}
      <div className="max-w-[1200px] mx-auto px-4 md:px-8 mt-20">
        <div className="flex justify-between items-end mb-8 border-b border-gray-200 pb-4">
          <div>
            <span className="text-[#087443] text-xs font-bold tracking-widest uppercase">MORE SAFARI OPTIONS</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#10243A] mt-2" style={{ fontFamily: "'Playfair Display', serif" }}>
              Related Safaris
            </h2>
          </div>
          <Link to="/packages" className="hidden md:flex items-center gap-2 text-sm font-bold text-[#087443] hover:text-[#F5B91B] transition-colors">
            View All Packages <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {relatedTours.map((item, idx) => (
            <Link 
              key={item.id} 
              to={`/safari/${item.id}`}
              className={`group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 opacity-0 animate-slide-right`}
              style={{ animationDelay: `${idx * 200}ms` }}
            >
              <div className="relative h-48 overflow-hidden">
                <img src={item.images[0]} alt={item.title} loading="lazy" decoding="async" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute top-4 left-4 bg-[#F5B91B] text-[#10243A] text-xs font-bold px-3 py-1 rounded-md">
                  {item.duration}
                </div>
                <div className="absolute bottom-4 right-4 bg-black/60 backdrop-blur-sm text-white text-xs font-bold px-3 py-1 rounded-md">
                  ${item.price.toLocaleString()}
                </div>
              </div>
              <div className="p-5">
                <div className="flex items-center gap-1 text-xs text-gray-500 mb-2">
                  <MapPin size={12} className="text-[#087443]" /> {item.park}
                </div>
                <h3 className="text-lg font-bold text-[#10243A] mb-2 group-hover:text-[#087443] transition-colors line-clamp-1" style={{ fontFamily: "'Playfair Display', serif" }}>
                  {item.title}
                </h3>
                <div className="flex items-center justify-between mt-4 pt-3 border-t border-gray-100">
                  <div className="flex items-center gap-1 text-sm font-semibold text-gray-700">
                    <Star size={14} className="text-[#F5B91B]" fill="currentColor" /> {item.rating} ({item.reviews})
                  </div>
                  <span className="text-[#087443] text-sm font-bold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    View Details <ArrowRight size={14} />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
        
        {/* Mobile View All Button */}
        <div className="mt-8 text-center md:hidden">
          <Link to="/packages" className="inline-flex items-center gap-2 bg-[#087443] text-white font-bold px-8 py-3 rounded-full hover:bg-green-800 transition">
            View All Packages <ArrowRight size={18} />
          </Link>
        </div>
      </div>

      <BookingReceipt open={receiptOpen} receipt={receiptData} onClose={() => setReceiptOpen(false)} onWhatsApp={handleWhatsAppBooking} onEmail={handleEmailQuote} />
    </div>
  );
};

export default SafariPackages;

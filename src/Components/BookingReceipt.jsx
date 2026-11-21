import { useEffect } from 'react';
import { ArrowLeft, CalendarDays, CheckCircle2, Clock3, Mail, MapPin, MessageCircle, ShieldCheck, UserRound, Users } from 'lucide-react';
import logoT from '../assets/LogoT.webp';
import { formatBookingCurrency } from './bookingReceiptUtils';
import { useLanguage } from '../i18n/LanguageContext';

const ReceiptRow = ({ icon: Icon, label, value }) => (
  <div className="flex items-start gap-3 border-b border-gray-100 py-3 last:border-0">
    <Icon size={17} className="mt-0.5 shrink-0 text-[#087443]" />
    <div className="min-w-0 flex-1">
      <p className="text-[10px] font-bold uppercase tracking-[1.5px] text-gray-400">{label}</p>
      <p className="mt-0.5 break-words text-sm font-semibold text-[#10243A]">{value || '—'}</p>
    </div>
  </div>
);

const BookingReceipt = ({ open, receipt, onClose, onWhatsApp, onEmail }) => {
  const { language } = useLanguage();
  useEffect(() => {
    if (!open) return undefined;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const handleKeyDown = (event) => { if (event.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [open, onClose]);

  if (!open || !receipt) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-end justify-center bg-[#071522]/70 p-0 backdrop-blur-sm sm:items-center sm:p-5" onMouseDown={(event) => { if (event.target === event.currentTarget) onClose(); }}>
      <section role="dialog" aria-modal="true" aria-labelledby="booking-receipt-title" className="flex max-h-[96vh] w-full max-w-2xl flex-col overflow-hidden rounded-t-3xl bg-[#f7f9f7] shadow-2xl sm:rounded-3xl">
        <header className="relative overflow-hidden bg-[#10243A] px-5 py-5 text-white sm:px-8">
          <div className="absolute -right-8 -top-16 h-40 w-40 rounded-full border border-white/10" />
          <div className="relative flex items-center gap-3">
            <img src={logoT} alt="Cruising in Zanzibar logo" className="h-12 w-12 rounded-full border-2 border-white/70 bg-white object-cover" />
            <div className="min-w-0 flex-1">
              <p className="text-[10px] font-bold uppercase tracking-[2px] text-[#F5B91B]">Cruising in Zanzibar</p>
              <h2 id="booking-receipt-title" className="font-serif text-lg font-bold leading-tight sm:text-xl">Review your booking</h2>
              <p className="mt-0.5 text-xs text-white/70">Tours &amp; Safaris · Zanzibar, Tanzania</p>
            </div>
            <div className="hidden items-center gap-1.5 rounded-full border border-amber-300/30 bg-amber-300/10 px-3 py-2 text-[10px] font-bold uppercase tracking-wide text-amber-200 sm:flex">
              <Clock3 size={13} /> Pending confirmation
            </div>
          </div>
          <div className="relative mt-4 flex items-center justify-between gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3">
            <div><p className="text-[10px] font-semibold uppercase tracking-[1.5px] text-white/55">Booking reference</p><p className="mt-0.5 font-mono text-lg font-bold tracking-wider text-white">{receipt.reference}</p></div>
            <div className="text-right"><p className="text-[10px] font-semibold uppercase tracking-[1.5px] text-white/55">Requested on</p><p className="mt-1 text-xs font-semibold text-white">{receipt.bookingDate}</p></div>
          </div>
        </header>

        <div className="overflow-y-auto px-4 py-4 sm:px-8 sm:py-6">
          <div className="mb-4 flex items-center gap-2 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-xs leading-5 text-amber-900">
            <ShieldCheck size={18} className="shrink-0 text-amber-600" />
            <span><strong>Pending confirmation.</strong> This is a booking request, not a confirmed or paid reservation. The team will confirm availability and final pricing.</span>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <section className="rounded-2xl border border-gray-100 bg-white px-4 shadow-sm sm:px-5">
              <h3 className="flex items-center gap-2 border-b border-gray-100 py-3 text-xs font-extrabold uppercase tracking-[1.5px] text-[#087443]"><MapPin size={15} /> Trip details</h3>
              <ReceiptRow icon={MapPin} label={`${receipt.category} package`} value={receipt.productName} />
              <ReceiptRow icon={Clock3} label="Duration" value={receipt.duration} />
              <ReceiptRow icon={MapPin} label="Destination" value={receipt.destination} />
              <ReceiptRow icon={CalendarDays} label="Travel date" value={receipt.travelDate || 'Flexible / To be confirmed'} />
              {receipt.adults !== undefined ? (
                <>
                  <ReceiptRow icon={Users} label="Adults" value={receipt.adults} />
                  <ReceiptRow icon={Users} label="Children" value={receipt.children} />
                </>
              ) : <ReceiptRow icon={Users} label="Travelers" value={receipt.travelers} />}
            </section>

            <section className="rounded-2xl border border-gray-100 bg-white px-4 shadow-sm sm:px-5">
              <h3 className="flex items-center gap-2 border-b border-gray-100 py-3 text-xs font-extrabold uppercase tracking-[1.5px] text-[#087443]"><UserRound size={15} /> Customer details</h3>
              <ReceiptRow icon={UserRound} label="Full name" value={receipt.customer.fullName} />
              <ReceiptRow icon={Mail} label="Email address" value={receipt.customer.email} />
              <ReceiptRow icon={MessageCircle} label="WhatsApp / phone" value={receipt.customer.phone} />
              <ReceiptRow icon={MapPin} label="Hotel / pickup" value={receipt.customer.pickup || 'Not provided'} />
              <ReceiptRow icon={CheckCircle2} label="Special requests" value={receipt.customer.requests || 'None'} />
            </section>
          </div>

          <section className="mt-4 rounded-2xl border border-emerald-100 bg-emerald-50/70 p-4 sm:p-5">
            <h3 className="text-xs font-extrabold uppercase tracking-[1.5px] text-[#087443]">Price summary</h3>
            <div className="mt-3 flex items-center justify-between gap-4 text-sm text-gray-600"><span>{receipt.pricePerPersonLabel || 'Price per person'}</span><span className="font-semibold text-[#10243A]">{formatBookingCurrency(receipt.pricePerPerson, language)}</span></div>
            <div className="mt-2 flex items-end justify-between gap-4 border-t border-emerald-100 pt-3">
              <div><p className="text-sm font-bold text-[#10243A]">{receipt.totalLabel || 'Estimated total'}</p><p className="mt-1 text-[10px] leading-4 text-gray-500">Final price and availability are confirmed by our team.</p></div>
              <p className="text-2xl font-extrabold text-[#087443]">{formatBookingCurrency(receipt.totalEstimated, language)}</p>
            </div>
          </section>

          <p className="mt-4 text-center text-[11px] leading-5 text-gray-500">Thank you for choosing Cruising in Zanzibar Tours &amp; Safaris. We will contact you shortly to confirm your request.<br /><a className="font-semibold text-[#087443]" href="mailto:cruisinginzanzibar@gmail.com">cruisinginzanzibar@gmail.com</a> · +255 653 924 851</p>
        </div>

        <footer className="border-t border-gray-200 bg-white px-4 py-4 sm:px-8">
          <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
            <button type="button" onClick={onClose} className="inline-flex items-center justify-center gap-2 rounded-xl border border-gray-200 px-4 py-3 text-sm font-bold text-gray-600 transition hover:bg-gray-50"><ArrowLeft size={16} /> Edit details</button>
            <button type="button" onClick={onWhatsApp} className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#25D366] px-4 py-3 text-sm font-bold text-white transition hover:bg-[#1eb954]"><MessageCircle size={17} /> Continue to WhatsApp</button>
            <button type="button" onClick={onEmail} className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#087443] px-4 py-3 text-sm font-bold text-white transition hover:bg-green-800"><Mail size={17} /> Open Email Draft</button>
          </div>
        </footer>
      </section>
    </div>
  );
};

export default BookingReceipt;

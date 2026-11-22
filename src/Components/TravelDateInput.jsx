import { useRef } from 'react';
import { CalendarDays } from 'lucide-react';
import { getTodayDateInputValue } from './bookingReceiptUtils';

const TravelDateInput = ({ value, onDateChange, dark = false, id = 'travel-date' }) => {
  const inputRef = useRef(null);
  const inputClass = `w-full rounded-xl border py-3 pl-4 pr-12 text-sm outline-none focus:ring-2 focus:ring-[#F5B91B]/70 ${dark ? 'border-white/30 bg-white/10 text-white [color-scheme:dark]' : 'border-gray-200 bg-white text-gray-700'}`;

  const openCalendar = () => {
    if (typeof inputRef.current?.showPicker === 'function') inputRef.current.showPicker();
    else inputRef.current?.focus();
  };

  return (
    <div className="relative">
      <input
        ref={inputRef}
        id={id}
        type="date"
        lang="en-GB"
        min={getTodayDateInputValue()}
        value={value}
        onChange={(event) => onDateChange(event.target.value)}
        aria-label="Preferred travel date"
        className={inputClass}
      />
      <button
        type="button"
        onClick={openCalendar}
        aria-label="Open date picker"
        className={`absolute right-2 top-1/2 -translate-y-1/2 rounded-lg p-2 transition-colors ${dark ? 'text-white/90 hover:bg-white/15' : 'text-[#087443] hover:bg-emerald-50'}`}
      >
        <CalendarDays size={18} />
      </button>
    </div>
  );
};

export default TravelDateInput;

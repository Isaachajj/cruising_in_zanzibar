import { Link } from 'react-router-dom';
import { ArrowLeft, Compass } from 'lucide-react';

const NotFound = () => (
  <section className="flex min-h-[60vh] items-center justify-center bg-[#FCFBF8] px-6 py-20 text-center">
    <div className="max-w-xl">
      <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-50 text-[#087443]">
        <Compass size={30} aria-hidden="true" />
      </div>
      <p className="text-sm font-bold uppercase tracking-[0.24em] text-[#087443]">404</p>
      <h1 className="mt-3 text-3xl font-bold text-[#10243A] md:text-5xl" style={{ fontFamily: "'Playfair Display', serif" }}>
        Page not found
      </h1>
      <p className="mt-4 text-base leading-7 text-gray-600">
        Sorry, we couldn&apos;t find that page.
      </p>
      <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
        <Link to="/" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#1b5e36] px-6 py-3 font-semibold text-white transition hover:bg-green-800">
          <ArrowLeft size={17} aria-hidden="true" /> Back to homepage
        </Link>
        <Link to="/card-tour" className="inline-flex items-center justify-center rounded-full border border-[#1b5e36] px-6 py-3 font-semibold text-[#1b5e36] transition hover:bg-emerald-50">
          Explore Zanzibar Tours
        </Link>
      </div>
    </div>
  </section>
);

export default NotFound;

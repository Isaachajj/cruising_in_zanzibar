import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Footer from '../pages/Footer';
import GlobalHeader from './GlobalHeader';

const SiteLayout = ({ children }) => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  return (
    <div className="min-h-screen w-full bg-gray-50 font-sans">
      <GlobalHeader />
      <main key={location.pathname} className="animate-[pageFade_.45s_ease-out]">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default SiteLayout;

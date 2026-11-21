import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SiteLayout from './Components/SiteLayout';
import { LanguageProvider } from './i18n/LanguageContext';

const HomePage = lazy(() => import('./pages/HomePage'));
const CardTour = lazy(() => import('./pages/CardTour'));
const Packages = lazy(() => import('./pages/Packages'));
const FullPackage = lazy(() => import('./pages/FullPackage'));
const FullPackageDetails = lazy(() => import('./pages/FullPackageDetails'));
const Destination = lazy(() => import('./pages/Destination'));
const AboutUs = lazy(() => import('./Components/AboutUs'));
const ContactUs = lazy(() => import('./Components/ContactUs'));
const TourDetails = lazy(() => import('./Components/TourDetails'));
const SafariPackages = lazy(() => import('./Components/SafariPackages'));
const NotFound = lazy(() => import('./pages/NotFound'));

function App() {
  return (
    <Router>
      <LanguageProvider>
        <div className="min-h-screen overflow-x-clip bg-gray-50 font-sans">
          <Suspense
            fallback={(
              <div role="status" className="flex min-h-[60vh] items-center justify-center bg-[#FCFBF8]">
                <span className="sr-only">Loading...</span>
                <span aria-hidden="true" className="h-10 w-10 animate-spin rounded-full border-4 border-emerald-100 border-t-[#087443]" />
              </div>
            )}
          >
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/card-tour" element={<SiteLayout><CardTour /></SiteLayout>} />
              <Route path="/packages" element={<SiteLayout><Packages /></SiteLayout>} />
              <Route path="/full-package" element={<SiteLayout><FullPackage /></SiteLayout>} />
              <Route path="/full-package/:id" element={<SiteLayout><FullPackage /></SiteLayout>} />
              <Route path="/tour/:id" element={<SiteLayout><TourDetails /></SiteLayout>} />
              <Route path="/safari/:id" element={<SiteLayout><SafariPackages /></SiteLayout>} />
              <Route path="/destination" element={<SiteLayout><Destination /></SiteLayout>} />
              <Route path="/about" element={<SiteLayout><AboutUs /></SiteLayout>} />
              <Route path="/contact" element={<SiteLayout><ContactUs /></SiteLayout>} />
              <Route path="/full-day-trip/:id" element={<SiteLayout><FullPackageDetails /></SiteLayout>} />
              <Route path="*" element={<SiteLayout><NotFound /></SiteLayout>} />
            </Routes>
          </Suspense>
        </div>
      </LanguageProvider>
    </Router>
  );
}

export default App;

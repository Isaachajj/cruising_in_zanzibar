// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CardTour from './pages/CardTour';
import Packages from './pages/Packages'; // Hii ni kurasa ya mfano ya CardTour
import FullPackage from './pages/FullPackage';
import FullPackageDetails from './pages/FullPackageDetails';
import Destination from './pages/Destination';
import AboutUs from './Components/AboutUs';
import ContactUs from './Components/ContactUs';
import SiteLayout from './Components/SiteLayout';
import TourDetails from './Components/TourDetails';
import SafariPackages from './Components/SafariPackages';
// Baadae uta-import kurasa zingine hapa kama:
// import ZanzibarTours from './pages/ZanzibarTours';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 font-sans">
        <Routes>
          {/* Ukurasa wa mwanzo kabisa */}
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
          {/* Hapa baadae tutaongeza kurasa zingine kulingana na picha ulizotuma */}
          {/* <Route path="/zanzibar-tours" element={<ZanzibarTours />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
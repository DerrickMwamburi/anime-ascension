import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import LandingPage from './pages/LandingPage';
import MerchPage from './pages/MerchPage';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/merch" element={<MerchPage />} />
          <Route path="/streaming" element={<div>Streaming Page (TBD)</div>} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>
      <footer className="bg-gray-900 text-white text-center py-4">
        <p>© 2025 Anime Ascension</p>
      </footer>
    </div>
  );
}

export default App;
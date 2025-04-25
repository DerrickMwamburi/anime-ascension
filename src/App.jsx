import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import LandingPage from './pages/LandingPage';
import MerchPage from './pages/MerchPage';
import ContactPage from './pages/ContactPage';
import StreamingPage from './pages/StreamingPage';
import CartPage from './pages/CartPage';
import backgroundImage from './assets/background.jpg';

function App() {
  return (
    <div
      className="flex flex-col min-h-screen bg-gray-100 bg-cover bg-center"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/merch" element={<MerchPage />} />
          <Route path="/streaming" element={<StreamingPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </main>
      <footer className="bg-gray-900 bg-opacity-90 text-white text-center py-4">
        <p>© 2025 Anime Ascension</p>
      </footer>
    </div>
  );
}

export default App;
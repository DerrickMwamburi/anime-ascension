import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import LandingPage from './pages/LandingPage';
import MerchPage from './pages/MerchPage';
import ContactPage from './pages/ContactPage';
import StreamingPage from './pages/StreamingPage';
import CartPage from './pages/CartPage';

function App() {
  return (
    <div
      className="flex flex-col min-h-screen bg-gray-100 bg-cover bg-center"
      style={{
        backgroundImage: `url('https://i.pinimg.com/736x/cf/1a/a5/cf1aa5b3923c79755ba9ae68896e3aeb.jpg')`,
      }}
    >
      <Header />
      <main className="flex-grow">s
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
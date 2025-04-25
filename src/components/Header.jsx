import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useCart } from '../context/CartContext';
import { signOut } from 'firebase/auth';
import { auth } from '../services/firebase';
import Login from './Login';

function Header() {
  const { user, loading } = useAuth();
  const { cart } = useCart();
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  const cartItemCount = cart.reduce((total, item) => total + item.quantity, 0);

  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (err) {
      console.error('Logout failed:', err);
    }
  };

  if (loading) {
    return <div className="bg-anime-purple text-white p-4">Loading...</div>;
  }

  return (
    <>
      <header className="bg-anime-purple bg-opacity-90 text-white p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Anime Ascension</h1>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? 'text-anime-pink underline' : 'hover:text-anime-pink'
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/merch"
                  className={({ isActive }) =>
                    isActive ? 'text-anime-pink underline' : 'hover:text-anime-pink'
                  }
                >
                  Merch
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/streaming"
                  className={({ isActive }) =>
                    isActive ? 'text-anime-pink underline' : 'hover:text-anime-pink'
                  }
                >
                  Streaming
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    isActive ? 'text-anime-pink underline' : 'hover:text-anime-pink'
                  }
                >
                  Contact
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/cart"
                  className={({ isActive }) =>
                    isActive ? 'text-anime-pink underline' : 'hover:text-anime-pink'
                  }
                >
                  Cart ({cartItemCount})
                </NavLink>
              </li>
              <li>
                {user ? (
                  <div className="flex space-x-2">
                    <span className="text-anime-teal">Hi, {user.email}</span>
                    <button
                      onClick={handleLogout}
                      className="hover:text-anime-pink"
                    >
                      Logout
                    </button>
                  </div>
                ) : (
                  <button
                    onClick={() => setIsLoginOpen(true)}
                    className="hover:text-anime-pink"
                  >
                    Login
                  </button>
                )}
              </li>
            </ul>
          </nav>
        </div>
      </header>
      {isLoginOpen && <Login onClose={() => setIsLoginOpen(false)} />}
    </>
  );
}

export default Header;
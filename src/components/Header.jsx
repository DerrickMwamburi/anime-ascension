import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { signOut } from 'firebase/auth';
import { auth } from '../services/firebase';
import Login from './Login';

function Header() {
  const { user, loading } = useAuth();
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (err) {
      console.error('Logout failed:', err);
    }
  };

  if (loading) {
    return <div className="bg-gray-900 text-white p-4">Loading...</div>;
  }

  return (
    <>
      <header className="bg-gray-900 text-white p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Anime Ascension</h1>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? 'text-blue-400 underline' : 'hover:text-blue-400'
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/merch"
                  className={({ isActive }) =>
                    isActive ? 'text-blue-400 underline' : 'hover:text-blue-400'
                  }
                >
                  Merch
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/streaming"
                  className={({ isActive }) =>
                    isActive ? 'text-blue-400 underline' : 'hover:text-blue-400'
                  }
                >
                  Streaming
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    isActive ? 'text-blue-400 underline' : 'hover:text-blue-400'
                  }
                >
                  Contact
                </NavLink>
              </li>
              <li>
                {user ? (
                  <div className="flex space-x-2">
                    <span className="text-gray-300">Hi, {user.email}</span>
                    <button
                      onClick={handleLogout}
                      className="hover:text-blue-400"
                    >
                      Logout
                    </button>
                  </div>
                ) : (
                  <button
                    onClick={() => setIsLoginOpen(true)}
                    className="hover:text-blue-400"
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
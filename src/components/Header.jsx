import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <header className="bg-gray-900 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">ANIME ASCENSION</h1>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <NavLink 
                to="/" 
                className={({ isActive }) => 
                  isActive ? "text-blue-400 underline" : "hover:text-blue-400"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/merch" 
                className={({ isActive }) => 
                  isActive ? "text-blue-400 underline" : "hover:text-blue-400"
                }
              >
                Merch
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/streaming" 
                className={({ isActive }) => 
                  isActive ? "text-blue-400 underline" : "hover:text-blue-400"
                }
              >
                Streaming
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/contact" 
                className={({ isActive }) => 
                  isActive ? "text-blue-400 underline" : "hover:text-blue-400"
                }
              >
                Contact
              </NavLink>
            </li>
            <li>
              <button className="hover:text-blue-400">Login</button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
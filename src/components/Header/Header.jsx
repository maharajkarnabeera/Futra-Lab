import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X, User } from "lucide-react";
import useAuthStore from "../../utilities/authStore";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const { user, clearAuth } = useAuthStore.getState(); // Zustand store to manage auth state
  const navigate = useNavigate();

  const closeMenu = () => setIsMenuOpen(false);

  const handleLogout = () => {
    clearAuth(); // Clear user and token from Zustand
    navigate("/signin"); // Redirect to SignIn page
  };

  return (
    <header className="bg-[#030303] px-6 py-4 text-white flex items-center justify-between">
      <img src="logo.png" alt="Logo" className="h-10 w-auto" />

      <button
        className="block lg:hidden text-white"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      <nav
        className={`${
          isMenuOpen ? "block" : "hidden"
        } absolute top-16 left-0 w-full bg-[#030303] lg:static lg:block lg:w-auto`}
      >
        <ul className="flex flex-col lg:flex-row lg:items-center lg:space-x-6">
          <li className="py-2 px-4 lg:p-0">
            <Link to="/" className="hover:text-gray-300" onClick={closeMenu}>
              Home
            </Link>
          </li>
          <li className="py-2 px-4 lg:p-0">
            <Link
              to="/about"
              className="hover:text-gray-300"
              onClick={closeMenu}
            >
              About
            </Link>
          </li>
          <li className="py-2 px-4 lg:p-0">
            <Link
              to="/contact"
              className="hover:text-gray-300"
              onClick={closeMenu}
            >
              Contact
            </Link>
          </li>
          <li className="py-2 px-4 lg:p-0">
            <Link
              to="/features"
              className="hover:text-gray-300"
              onClick={closeMenu}
            >
              Features
            </Link>
          </li>
          <li className="py-2 px-4 lg:p-0">
            <Link
              to="/predict"
              className="hover:text-gray-300"
              onClick={closeMenu}
            >
              Predict
            </Link>
          </li>
          {user && (
            <li className="py-2 px-4 lg:p-0">
              <Link
                to="/history"
                className="hover:text-gray-300"
                onClick={closeMenu}
              >
                History
              </Link>
            </li>
          )}
        </ul>
      </nav>

      {user ? (
        <div className="relative">
          <button
            className="flex items-center space-x-2"
            onClick={() => setIsProfileMenuOpen((prev) => !prev)}
          >
            <User size={24} className="text-white" />
            <span className="hidden lg:block">
              {user.firstName + " " + user.lastName || "Profile"}
            </span>
          </button>

          {isProfileMenuOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-50">
              <button
                onClick={handleLogout}
                className="block w-full text-left px-4 py-2 text-sm text-black hover:bg-gray-100"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      ) : (
        <Link
          to="/signin"
          className="text-sm text-white hover:underline lg:ml-4"
        >
          Sign In
        </Link>
      )}
    </header>
  );
};

export default Header;

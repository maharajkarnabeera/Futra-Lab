import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Menu, X, User } from "lucide-react";
import useAuthStore from "../../utilities/authStore";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const { user, clearAuth, logoutUser } = useAuthStore();
  const navigate = useNavigate();

  const closeMenu = () => setIsMenuOpen(false);

  const handleLogout = async () => {
    clearAuth();
    await logoutUser();
    navigate("/signin");
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
          {/* Updated from Link to NavLink */}
          <li className="py-2 px-4 lg:p-0">
            <NavLink
              to="/"
              onClick={closeMenu}
              className={({ isActive }) =>
                isActive
                  ? "text-yellow-400 font-semibold" // ACTIVE STATE color
                  : "hover:text-gray-300"
              }
            >
              Home
            </NavLink>
          </li>
          <li className="py-2 px-4 lg:p-0">
            <NavLink
              to="/about"
              onClick={closeMenu}
              className={({ isActive }) =>
                isActive
                  ? "text-yellow-400 font-semibold"
                  : "hover:text-gray-300"
              }
            >
              About
            </NavLink>
          </li>
          <li className="py-2 px-4 lg:p-0">
            <NavLink
              to="/contact"
              onClick={closeMenu}
              className={({ isActive }) =>
                isActive
                  ? "text-yellow-400 font-semibold"
                  : "hover:text-gray-300"
              }
            >
              Contact
            </NavLink>
          </li>
          <li className="py-2 px-4 lg:p-0">
            <NavLink
              to="/features"
              onClick={closeMenu}
              className={({ isActive }) =>
                isActive
                  ? "text-yellow-400 font-semibold"
                  : "hover:text-gray-300"
              }
            >
              Features
            </NavLink>
          </li>
          <li className="py-2 px-4 lg:p-0">
            <NavLink
              to="/predict"
              onClick={closeMenu}
              className={({ isActive }) =>
                isActive
                  ? "text-yellow-400 font-semibold"
                  : "hover:text-gray-300"
              }
            >
              Predict
            </NavLink>
          </li>
          {user && (
            <li className="py-2 px-4 lg:p-0">
              <NavLink
                to="/history"
                onClick={closeMenu}
                className={({ isActive }) =>
                  isActive
                    ? "text-yellow-400 font-semibold"
                    : "hover:text-gray-300"
                }
              >
                User Submitted Results
              </NavLink>
            </li>
          )}
          <li className="py-2 px-4 lg:p-0">
            <NavLink
              to="/pagination"
              onClick={closeMenu}
              className={({ isActive }) =>
                isActive
                  ? "text-yellow-400 font-semibold"
                  : "hover:text-gray-300"
              }
            >
              Model Insights
            </NavLink>
          </li>
        </ul>
      </nav>

      {/* Profile / Sign In */}
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
        <NavLink
          to="/signin"
          className={({ isActive }) =>
            isActive
              ? "text-yellow-400 font-semibold text-sm lg:ml-4"
              : "text-white hover:underline text-sm lg:ml-4"
          }
        >
          Sign In
        </NavLink>
      )}
    </header>
  );
};

export default Header;

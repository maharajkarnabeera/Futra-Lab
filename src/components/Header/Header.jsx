import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="bg-[#030303] px-6 py-4 text-white flex items-center justify-between ">
      <img src="logo.png" alt="Logo" className="h-10 w-auto " />

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
            <Link to="/about" className="hover:text-gray-300" onClick={closeMenu}>
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
        </ul>
      </nav>
    </header>
  );
};

export default Header;
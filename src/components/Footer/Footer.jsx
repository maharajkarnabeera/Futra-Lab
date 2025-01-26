import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-6">
      <div className="container mx-auto flex flex-col items-center justify-between md:flex-row">
        <div className="text-sm text-center md:text-left">
          &copy; 2023 SiteDesign. All rights reserved.
        </div>
        <div className="mt-4 md:mt-0 flex space-x-6 text-sm">
          <Link to="/" className="hover:text-gray-300">
            Privacy Policy
          </Link>
          <Link to="/" className="hover:text-gray-300">
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

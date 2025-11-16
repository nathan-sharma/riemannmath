import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white py-6 px-8 w-full sticky top-0 shadow-md">
      <div className="flex items-center justify-between w-full">
        {/* Logo + Title */}
        <div className="flex items-center space-x-2">
          <Link to="/">
            <img
              src="riemann-math-logo.png"
              alt="Riemann Math Logo"
              className="h-10"
            />
          </Link>
          <Link to="/" className="text-black font-bold text-2xl">
            Riemann Math
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex md:items-center md:space-x-10">
          <Link to="/" className="text-black font-semibold text-xl">
            Home
          </Link>
          <Link to="/about" className="text-black font-semibold text-xl">
            About
          </Link>
          <Link to="/registration" className="text-black font-semibold text-xl">
            Register
          </Link>
          <Link to = "/resources" className="text-black font-semibold text-xl">
           Lectures & Resources
          </Link>
        </div>

        {/* Hamburger for Mobile */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-700 hover:text-gray-900 focus:outline-none"
          >
            <svg
              className="h-8 w-8 fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.829-4.828 4.829a1 1 0 0 1-1.414-1.414l4.829-4.828-4.829-4.828a1 1 0 1 1 1.414-1.414l4.828 4.828 4.829-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.828 4.828 4.829z"
                />
              ) : (
                <path
                  fillRule="evenodd"
                  d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2z"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="flex flex-col items-center mt-3 space-y-2 md:hidden">
          <Link
            to="/"
            onClick={() => setIsOpen(false)}
            className="text-black font-semibold text-lg"
          >
            Home
          </Link>
          <Link
            to="/about"
            onClick={() => setIsOpen(false)}
            className="text-black font-semibold text-lg"
          >
            About
          </Link>
          <Link
            to="/registration"
            onClick={() => setIsOpen(false)}
            className="text-black font-semibold text-lg"
          >
            Register
          </Link>
          <Link
          to = "/resources"
            onClick={() => setIsOpen(false)}
            className="text-black font-semibold text-lg"
          >
            Lectures & Resources
          </Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;

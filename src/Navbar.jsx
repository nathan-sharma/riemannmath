import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white py-6 px-8 w-full sticky top-0 shadow-md">
      <div className="flex flex-col md:flex-row md:justify-between items-center">
        {/* Logo and title */}
        <div className={`flex items-center justify-center md:justify-start space-x-2`}>
          <Link to="/">
            <img
              src="/riemann-math-logo.png"
              alt="Riemann Math Logo"
              className="h-10" // slightly bigger logo
            />
          </Link>
          <Link to="/" className="text-black font-bold text-2xl">
            Riemann Math
          </Link>
        </div>

        {/* Hamburger button for mobile */}
        <div className="md:hidden mt-2">
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

        {/* Navigation links */}
        <div
          className={`${
            isOpen ? 'block' : 'hidden'
          } md:flex md:items-center md:space-x-3 w-full md:w-auto mt-2 md:mt-0 justify-center`}
        >
          <Link
            to="/"
            className="text-black font-semibold hover:text-gray-700 py-2 px-3 text-xl"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/info-and-about"
            className="text-black font-semibold hover:text-gray-700 py-2 px-3 text-xl"
            onClick={() => setIsOpen(false)}
          >
            Info & About
          </Link>
          <Link
            to="/registration"
            className="text-black font-semibold hover:text-gray-700 py-2 px-3 text-xl"
            onClick={() => setIsOpen(false)}
          >
            Register
          </Link>
          <Link
            className="text-black font-semibold hover:text-gray-700 py-2 px-3 text-xl"
            onClick={() => setIsOpen(false)}
          >
            Video Lectures
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

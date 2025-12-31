import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // Mobile menu state
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // Dropdown state
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const closeMenus = () => {
    setIsOpen(false);
    setIsDropdownOpen(false);
  };

  return (
    <nav className="bg-white py-6 px-8 w-full sticky top-0 shadow-md z-50">
      <div className="flex items-center justify-between w-full">
        {/* Logo + Title */}
        <div className="flex items-center space-x-2">
          <Link to="/" onClick={closeMenus}>
            <img src="riemann-math-logo.png" alt="Riemann Math Logo" className="h-10" />
          </Link>
          <Link to="/" onClick={closeMenus} className="text-black font-bold text-2xl">
            Riemann Math
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex md:items-center md:space-x-10">
          <Link to="/" className="text-black font-semibold text-xl hover:text-gray-600 transition">
            Home
          </Link>

          {/* Free Classes Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex items-center text-black font-semibold text-xl hover:text-gray-600 transition focus:outline-none"
            >
              Free Classes
              <svg className={`ml-2 h-5 w-5 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {isDropdownOpen && (
              <div className="absolute left-0 mt-2 w-48 bg-white border border-gray-100 rounded-md shadow-lg py-2">
                <Link
                  to="/about"
                  onClick={closeMenus}
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-100 font-medium"
                >
                  About
                </Link>
                <Link
                  to="/registration"
                  onClick={closeMenus}
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-100 font-medium"
                >
                  Register
                </Link>
              </div>
            )}
          </div>

          <Link to="/resources" className="text-black font-semibold text-xl hover:text-gray-600 transition">
            Resources
          </Link>
        </div>

        {/* Hamburger for Mobile */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 focus:outline-none">
            <svg className="h-8 w-8 fill-current" viewBox="0 0 24 24">
              {isOpen ? (
                <path fillRule="evenodd" clipRule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.829-4.828 4.829a1 1 0 0 1-1.414-1.414l4.829-4.828-4.829-4.828a1 1 0 1 1 1.414-1.414l4.828 4.828 4.829-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.828 4.828 4.829z" />
              ) : (
                <path fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2z" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="flex flex-col items-center mt-3 pb-4 space-y-4 md:hidden border-t pt-4">
          <Link to="/" onClick={closeMenus} className="text-black font-semibold text-lg">Home</Link>
          
          <div className="flex flex-col items-center space-y-2">
            <span className="text-gray-400 text-sm font-bold uppercase tracking-widest">Free Classes</span>
            <Link to="/about" onClick={closeMenus} className="text-black font-semibold text-lg">About</Link>
            <Link to="/registration" onClick={closeMenus} className="text-black font-semibold text-lg">Register</Link>
          </div>

          <Link to="/resources" onClick={closeMenus} className="text-black font-semibold text-lg">Resources</Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
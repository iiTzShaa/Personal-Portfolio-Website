import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa'; // Importing the icons
import logo from '../assets/logo.png';
import { NAVIGATION_LINKS } from '../constants';

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const offset = -85;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY + offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }

    setIsMobileMenuOpen(false); // Close mobile menu after link click
  };

  return (
    <div>
      <nav className="fixed left-0 right-0 top-4 z-50 w-full">
        {/* Desktop Menu */}
        <div className="max-auto hidden lg:flex justify-center items-center max-w-2xl mx-auto bg-black/30 py-2 rounded-lg border-2 border-gray-400">
          <div className="flex justify-between items-center w-full px-4">
            <div className="flex justify-start">
              <a href="#">
                <img src={logo} width={100} alt="logo" />
              </a>
            </div>
            <div className="flex justify-center flex-grow">
              <ul className="flex items-center gap-6">
                {NAVIGATION_LINKS.map((item, index) => (
                  <li key={index}>
                    <a
                      className="text-sm hover:text-yellow-400"
                      href={item.href}
                      onClick={(e) => handleLinkClick(e, item.href)}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className="lg:hidden">
          <div className="flex items-center justify-between py-2">
            <div>
              <a href="#">
                <img src={logo} width={80} alt="logo" className="m-2" />
              </a>
            </div>
            <div className="flex items-center">
              <button
                className="focus:outline-none"
                onClick={toggleMobileMenu}
              >
                {isMobileMenuOpen ? (
                  <FaTimes className="m-2 h-6 w-5" />
                ) : (
                  <FaBars className="m-2 h-6 w-5" />
                )}
              </button>
            </div>
          </div>
          {isMobileMenuOpen && (
            <ul
              className="absolute top-full left-0 right-0 bg-black/20 rounded-b-lg p-4 mt-1 flex flex-col gap-4"
            >
              {NAVIGATION_LINKS.map((item, index) => (
                <li key={index}>
                  <a
                    className="block text-white text-lg hover:text-yellow-400"
                    href={item.href}
                    onClick={(e) => handleLinkClick(e, item.href)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      </nav>
    </div>
  );
}

export default Navbar;

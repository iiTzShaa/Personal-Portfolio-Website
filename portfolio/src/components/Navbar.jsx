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
        <div className="max-auto hidden lg:flex justify-center items-center max-w-2xl mx-auto bg-black/30 backdrop-blur-md py-2 rounded-lg border-2 border-gray-400"> {/* Reduced padding */}
          <div className="flex justify-between items-center w-full px-4"> {/* Reduced padding */}
            <div className="flex justify-start">
              <a href="#">
                <img src={logo} width={100} alt="logo" /> {/* Smaller logo */}
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
            <div className="flex justify-end">
              {/* Empty space or other elements can go here */}
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className="lg:hidden rounded-lg backdrop-blur-md mb-12 border-2 border-gray-400"> {/* Reduced bottom margin */}
          <div className="flex items-center justify-between py-2"> {/* Reduced padding */}
            <div>
              <a href="#">
                <img src={logo} width={80} alt="logo" className="m-2" /> {/* Smaller logo */}
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
            <ul className="ml-4 mt-4 flex flex-col gap-4 backdrop-blur-md">
              {NAVIGATION_LINKS.map((item, index) => (
                <li key={index}>
                  <a
                    className="block w-full text-lg"
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

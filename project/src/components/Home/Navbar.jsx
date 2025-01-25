import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      setHasScrolled(currentScrollY > 0);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <nav
      className={`fixed top-0 left-0 w-full flex items-center justify-between px-4 md:px-20 py-4 z-50 transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      } ${hasScrolled ? "bg-gray-900 bg-opacity-90 shadow-lg" : "bg-transparent"}`}
    >
      <div>
        <img
          src="file:///C:/Users/ayush/AppData/Local/Microsoft/Windows/INetCache/IE/4W5JOCDI/b3269d44-e6da-42bb-a621-7d1ebac844a6[1].webp"
          alt="Aimers Global Logo"
          className="h-12 w-auto md:h-16"
        />
      </div>
      <ul className="flex-grow flex justify-center space-x-5 md:space-x-10 text-white font-semibold text-sm md:text-lg">
        <li>
          <Link to="/" className="hover:text-orange-600">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className="hover:text-orange-600">
            About
          </Link>
        </li>
        <li>
          <Link to="/services" className="hover:text-orange-600">
            Services
          </Link>
        </li>
        <li>
          <Link to="/contact" className="hover:text-orange-600">
            Contact
          </Link>
        </li>
        <li>
          <Link to="/team" className="hover:text-orange-600">
            Team
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;

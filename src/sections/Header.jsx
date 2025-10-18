import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaSearch, FaHeart, FaShoppingCart, FaUser, FaBars, FaTimes } from "react-icons/fa";
import Logo from "../assets/logo2.png";

const Header = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  // 🔽 Smooth scroll for About section
  const handleScrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false); // close menu after click
    }
  };

  return (
    <nav className="w-full shadow-md bg-white fixed top-0 left-0 z-50 site-nav">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 h-16">
        
        {/* 🔹 Left - Logo */}
        <div
          className="flex items-center space-x-2 cursor-pointer"
          onClick={() => navigate("/")}
        >
          <img src={Logo} alt="SnP Logo" className="h-12 w-auto object-contain" />
          <span className="text-2xl font-bold tracking-wide">SnP</span>
        </div>

        {/* 🔹 Middle - Nav Links (Desktop Only) */}
        <ul className="hidden md:flex space-x-8 text-gray-700 font-medium text-lg">
          <li>
            <Link
              to="/"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="hover:text-black transition"
            >
              Home
            </Link>
          </li>
          <li>
            <Link to="/shop" className="hover:text-black transition">
              Shop
            </Link>
          </li>
          <li>
            <button
              onClick={() => handleScrollToSection("about")}
              className="hover:text-black transition bg-transparent"
            >
              About Us
            </button>
          </li>
          <li>
            <a href="#blog" className="hover:text-black transition">
              Blog
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-black transition">
              Contact
            </a>
          </li>
        </ul>

        {/* 🔹 Right - Icons */}
        <div className="flex items-center space-x-5 text-gray-600 text-xl relative">
          {/* 🔍 Search */}
          <div
            className="relative flex items-center"
            onMouseEnter={() => setShowSearch(true)}
            onMouseLeave={() => setShowSearch(false)}
          >
            <FaSearch className="cursor-pointer hover:text-black transition" />
            {showSearch && (
              <input
                type="text"
                placeholder="Search..."
                className="ml-2 px-3 py-1 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-black transition-all duration-300 w-36 sm:w-40"
                autoFocus
              />
            )}
          </div>

          {/* ❤️ Favorites */}
          <FaHeart className="cursor-pointer hover:text-red-500 transition hidden sm:block" />

          {/* 🛒 Cart */}
          <div
            className="relative cursor-pointer"
            onClick={() => navigate("/cart")}
          >
            <FaShoppingCart className="hover:text-black transition" />
          </div>

          {/* 👤 Profile */}
          <FaUser className="cursor-pointer hover:text-black transition hidden sm:block" />

          {/* 🍔 Mobile Menu Icon */}
          <button
            className="md:hidden focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <FaTimes size={24} className="text-gray-700" />
            ) : (
              <FaBars size={24} className="text-gray-700" />
            )}
          </button>
        </div>
      </div>

      {/* 🔹 Mobile Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-3/4 sm:w-1/2 bg-white shadow-lg z-40 transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center px-6 py-4 border-b">
          <h2 className="text-xl font-semibold">Menu</h2>
          <FaTimes
            size={24}
            className="cursor-pointer"
            onClick={() => setIsMenuOpen(false)}
          />
        </div>

        <ul className="flex flex-col items-start p-6 space-y-6 text-lg font-medium">
          <li>
            <Link
              to="/"
              onClick={() => {
                setIsMenuOpen(false);
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              Home
            </Link>
          </li>
          <li>
            <Link to="/shop" onClick={() => setIsMenuOpen(false)}>
              Shop
            </Link>
          </li>
          <li>
            <button
              onClick={() => handleScrollToSection("about")}
              className="bg-transparent"
            >
              About Us
            </button>
          </li>
          <li>
            <a href="#blog" onClick={() => setIsMenuOpen(false)}>
              Blog
            </a>
          </li>
          <li>
            <a href="#contact" onClick={() => setIsMenuOpen(false)}>
              Contact
            </a>
          </li>
        </ul>
      </div>

      {/* 🔹 Overlay when sidebar is open */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-30"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </nav>
  );
};

export default Header;

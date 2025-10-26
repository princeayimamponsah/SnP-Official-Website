import React from "react";
import { FaWhatsapp, FaInstagram, FaFacebook, FaSnapchatGhost } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";
import { FaCheckCircle } from "react-icons/fa";
import Logo from "../assets/logo2.png";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* LEFT: Brand Info */}
        <div>
          <img src={Logo} alt="Brand Logo" className="h-20 w-auto object-contain" />
          <p className="mb-4 text-sm leading-relaxed">
            SnP – Quality slippers & fashion wear that keep you stylish and comfortable. 
            We believe in affordable luxury for everyone.
          </p>

          <div className="flex space-x-4 text-xl">
            <a href="https://wa.me/1234567890" target="_blank" rel="noreferrer">
              <FaWhatsapp className="hover:text-green-400 transition-colors" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              <FaInstagram className="hover:text-pink-400 transition-colors" />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              <FaFacebook className="hover:text-blue-400 transition-colors" />
            </a>
            <a href="https://snapchat.com" target="_blank" rel="noreferrer">
              <FaSnapchatGhost className="hover:text-yellow-400 transition-colors" />
            </a>
          </div>
        </div>

        {/* MIDDLE: Assistance */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Assistance</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center space-x-2">
              <FiPhone className="text-xl" />
              <span>Need help? Call: <strong>+233 58 208 713</strong></span>
            </li>
            <li className="flex items-center space-x-2">
              <FaCheckCircle className="text-green-400" />
              <span className="text-green-400">
                Refund within 48hrs if you are not satisfied
              </span>
            </li>
            <li className="flex items-center space-x-2">
              <FaCheckCircle className="text-green-400" />
              <span className="text-green-400">
                Preorder takes 7-14 days
              </span>
            </li>
          </ul>
        </div>

        {/* ACCOUNT */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Account</h3>
          <ul className="space-y-3 text-sm">
            <li><a href="/login" className="hover:underline">Login</a></li>
            <li><a href="/signup" className="hover:underline">Register</a></li>
            <li><a href="/wishlist" className="hover:underline">Favorites</a></li>
            <li><a href="/cart" className="hover:underline">Cart</a></li>
          </ul>
        </div>

        {/* NEWSLETTER SUBSCRIPTION */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Subscribe to our newsletter</h3>
          <p className="text-sm text-gray-300 mb-3">
            Stay updated on new drops, deals, and exclusive SnP offers.
          </p>
          <form className="flex flex-col space-y-3">
            <input
              type="email"
              name="newsletterEmail"
              placeholder="e-mail"
              className="px-4 py-2 rounded-full text-black focus:outline-none focus:ring-2 focus:ring-green-400"
            />
            <button
              type="submit"
              className="bg-green-500 hover:bg-green-600 transition-colors text-white py-2 rounded-full font-semibold"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom small text */}
      <div className="mt-8 text-center text-xs text-gray-300">
        © {new Date().getFullYear()} SnP. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

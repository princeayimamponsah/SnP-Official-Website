import React from "react";
import { FaWhatsapp, FaInstagram, FaFacebook, FaSnapchatGhost } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";
import { FaCheckCircle } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* LEFT: Brand Info */}
        <div>
          <img src="/logo.png" alt="Brand Logo" className="w-32 mb-4" />
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

        {/* MIDDLE: Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Assistance</h3>
          
          <ul className="space-y-3 text-sm">
            <li className="flex items-center space-x-2">
              <FiPhone className="text-xl" />
              <span>Need help? Call: <strong>+233 54 123 4567</strong></span>
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

        {/* RIGHT: Account */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Account</h3>
          <ul className="space-y-3 text-sm">
            <li><a href="/login" className="hover:underline">Login</a></li>
            <li><a href="/register" className="hover:underline">Register</a></li>
            <li><a href="/cart" className="hover:underline">Favorites</a></li>
            <li><a href="/cart" className="hover:underline">Cart</a></li>
          </ul>
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

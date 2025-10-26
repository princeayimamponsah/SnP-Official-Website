import React, { useState } from "react";
import { motion as Motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock, FaPaperPlane } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill out all required fields!");
      return;
    }

    // Simulate sending message
    setTimeout(() => {
      toast.success("Your message has been sent successfully!");
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 500);
  };

  return (
    <div className="min-h-screen bg-[#f9f9f9] flex flex-col items-center py-16 px-6">
      <ToastContainer position="top-center" autoClose={3000} />

  <Motion.h1
        className="text-4xl font-bold text-gray-800 mb-4"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Contact Us
  </Motion.h1>

  <Motion.p
        className="text-gray-600 text-center mb-12 max-w-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        Get in touch with us. We'd love to hear from you and answer any questions about SnP.
  </Motion.p>

      <div className="grid md:grid-cols-2 gap-12 max-w-6xl w-full">
        {/* Left Section */}
  <Motion.div
          className="bg-white rounded-2xl p-8 shadow-lg"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Get In Touch</h2>

          <div className="space-y-5 text-gray-600">
            <div className="flex items-center gap-3 hover:text-black transition">
              <FaPhoneAlt className="text-yellow-600" />
              <p>+233 535 257 601</p>
            </div>

            <div className="flex items-center gap-3 hover:text-black transition">
              <FaEnvelope className="text-yellow-600" />
              <p>snpslides@gmail.com</p>
            </div>

            <div className="flex items-center gap-3 hover:text-black transition">
              <FaMapMarkerAlt className="text-yellow-600" />
              <p>12.3 Fashion Street, Style City, SC 12345</p>
            </div>

            <div className="flex items-center gap-3 hover:text-black transition">
              <FaClock className="text-yellow-600" />
              <p>Mon–Fri: 9AM–6PM, Sat: 10AM–4PM, Sun: Closed</p>
            </div>
          </div>

          {/* Optional Google Map preview */}
          <div className="mt-8 rounded-lg overflow-hidden shadow-md">
            <iframe
              title="SnP Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434508383!2d144.95373531550483!3d-37.8162797420217!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf5778e0aa3c2c8e1!2sFashion%20Street!5e0!3m2!1sen!2sgh!4v1696423955286!5m2!1sen!2sgh"
              width="100%"
              height="250"
              allowFullScreen
              loading="lazy"
            />
          </div>
  </Motion.div>

        {/* Right Section (Form) */}
  <Motion.div
          className="bg-white rounded-2xl p-8 shadow-lg"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Send Us A Message</h2>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="text"
                name="name"
                placeholder="Your name"
                value={formData.name}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:border-yellow-600"
              />
              <input
                type="email"
                name="email"
                placeholder="your@email.com"
                value={formData.email}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:border-yellow-600"
              />
            </div>

            <input
              type="text"
              name="subject"
              placeholder="What's this about?"
              value={formData.subject}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:border-yellow-600"
            />

            <textarea
              name="message"
              placeholder="Your message here..."
              value={formData.message}
              onChange={handleChange}
              rows={5}
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:border-yellow-600"
            />

            <button
              type="submit"
              className="w-full bg-yellow-600 text-white py-3 rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-yellow-700 transition-all duration-200"
            >
              <FaPaperPlane /> SEND MESSAGE
            </button>
          </form>
  </Motion.div>
      </div>
    </div>
  );
};

export default Contact;

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion as Motion } from "framer-motion";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";
import toast from "react-hot-toast";

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Basic password match check
    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match!");
      return;
    }
    // Simulate signup logic
    console.log("User signed up:", formData);
    navigate("/login");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-yellow-900 text-white p-4 relative overflow-hidden">
      {/* 🔮 Animated Background */}
  <Motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.15, scale: [1, 1.1, 1] }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.2),transparent)]"
      />

      {/* 🔹 Signup Card */}
  <Motion.div
        initial={{ y: 60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="bg-black/60 backdrop-blur-lg p-8 rounded-2xl shadow-2xl w-full max-w-md border border-yellow-400/30"
      >
        <h2 className="text-3xl font-bold mb-6 text-center text-yellow-300 tracking-wide">
          Create Your SnP Account
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Full Name */}
          <div className="relative">
            <FaUser className="absolute left-3 top-3 text-yellow-300" />
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Full Name"
              required
              className="w-full pl-10 pr-4 py-3 bg-gray-900 text-white border border-yellow-400/40 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 placeholder-gray-400"
            />
          </div>

          {/* Email */}
          <div className="relative">
            <FaEnvelope className="absolute left-3 top-3 text-yellow-300" />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Address"
              required
              className="w-full pl-10 pr-4 py-3 bg-gray-900 text-white border border-yellow-400/40 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 placeholder-gray-400"
            />
          </div>

          {/* Password */}
          <div className="relative">
            <FaLock className="absolute left-3 top-3 text-yellow-300" />
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
              required
              className="w-full pl-10 pr-4 py-3 bg-gray-900 text-white border border-yellow-400/40 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 placeholder-gray-400"
            />
          </div>

          {/* Confirm Password */}
          <div className="relative">
            <FaLock className="absolute left-3 top-3 text-yellow-300" />
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm Password"
              required
              className="w-full pl-10 pr-4 py-3 bg-gray-900 text-white border border-yellow-400/40 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 placeholder-gray-400"
            />
          </div>

          {/* Submit Button */}
          <Motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 0 20px #facc15" }}
            whileTap={{ scale: 0.97 }}
            type="submit"
            className="w-full py-3 mt-4 bg-yellow-400 text-black font-semibold rounded-lg transition-all duration-300 hover:bg-yellow-300 hover:shadow-lg"
          >
            Sign Up
          </Motion.button>
        </form>

        {/* Link to Login */}
        <p className="text-sm text-center text-gray-400 mt-6">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-yellow-300 hover:text-yellow-200 transition font-medium"
          >
            Log in
          </Link>
        </p>
  </Motion.div>
    </div>
  );
};

export default Signup;

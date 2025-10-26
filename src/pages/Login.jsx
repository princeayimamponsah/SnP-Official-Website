import React, { useState } from "react";
import { motion as Motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../assets/logo2.png";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Temporary test login
    if (email === "test@snp.com" && password === "123456") {
      localStorage.setItem("user", JSON.stringify({ email }));
      navigate("/");
    } else {
      setError("Invalid email or password. Try again 👀");
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-black via-gray-900 to-yellow-800">
      {/* 🌀 Animated background light */}
  <Motion.div
        initial={{ scale: 0 }}
        animate={{ scale: [0.8, 1.2, 1], opacity: [0.4, 0.6, 0.3] }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
        className="absolute w-[500px] h-[500px] bg-yellow-400/20 rounded-full blur-3xl -top-20 -left-20"
      />

      {/* 🌀 Another background glow */}
  <Motion.div
        initial={{ scale: 0 }}
        animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.5, 0.2] }}
        transition={{ repeat: Infinity, duration: 7, ease: "easeInOut" }}
        className="absolute w-[400px] h-[400px] bg-yellow-500/30 rounded-full blur-3xl bottom-0 right-0"
      />

      {/* 🔹 Login Card */}
  <Motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative bg-white/10 backdrop-blur-lg border border-white/20 shadow-2xl rounded-3xl p-8 sm:p-10 w-[90%] max-w-md text-center text-white"
      >
        {/* Logo */}
  <Motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex items-center justify-center mb-6 cursor-pointer"
          onClick={() => navigate("/")}
        >
          <img src={Logo} alt="SnP Logo" className="h-16 w-auto object-contain" />
          <span className="ml-2 text-3xl font-extrabold text-yellow-400 tracking-wider">
            SnP
          </span>
  </Motion.div>

        <h2 className="text-2xl font-bold mb-4">Welcome Back 👋🏽</h2>
        <p className="text-gray-300 text-sm mb-6">
          Login to continue shopping and managing your SnP wishlist
        </p>

        {error && (
          <Motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-red-400 text-sm mb-3"
          >
            {error}
          </Motion.p>
        )}

        {/* 🧾 Login Form */}
        <form onSubmit={handleLogin} className="space-y-5">
          {/* Email */}
          <div className="text-left">
            <label className="block text-sm font-medium mb-1 text-yellow-400">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400 outline-none text-white placeholder-gray-300"
              required
            />
          </div>

          {/* Password */}
          <div className="text-left">
            <label className="block text-sm font-medium mb-1 text-yellow-400">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400 outline-none text-white placeholder-gray-300"
                required
              />
              <span
                className="absolute right-3 top-3 cursor-pointer text-gray-400 hover:text-yellow-300 text-sm"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "Hide" : "Show"}
              </span>
            </div>
          </div>

          {/* Login Button */}
          <Motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            type="submit"
            className="w-full bg-gradient-to-r from-yellow-500 to-yellow-700 py-3 rounded-lg text-black font-semibold shadow-md hover:shadow-lg transition duration-300"
          >
            Log In
          </Motion.button>
        </form>

        {/* Forgot Password */}
        <div className="text-right mt-3">
          <Link
            to="/forgot-password"
            className="text-yellow-300 text-sm hover:underline"
          >
            Forgot Password?
          </Link>
        </div>

        {/* Divider */}
        <div className="flex items-center my-6">
          <span className="flex-grow border-t border-white/20"></span>
          <span className="px-3 text-gray-400 text-sm">or</span>
          <span className="flex-grow border-t border-white/20"></span>
        </div>

        {/* Social Logins */}
        <div className="flex flex-col space-y-3">
          <Motion.button
            whileHover={{ scale: 1.03 }}
            className="w-full bg-white/10 py-2 rounded-lg flex items-center justify-center space-x-2 hover:bg-white/20 transition"
          >
            <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" className="w-5 h-5" />
            <span>Login with Google</span>
          </Motion.button>
          <Motion.button
            whileHover={{ scale: 1.03 }}
            className="w-full bg-white/10 py-2 rounded-lg flex items-center justify-center space-x-2 hover:bg-white/20 transition"
          >
            <img src="https://www.svgrepo.com/show/448234/facebook.svg" alt="Facebook" className="w-5 h-5" />
            <span>Login with Facebook</span>
          </Motion.button>
        </div>

        {/* Sign Up Link */}
        <p className="mt-6 text-gray-300 text-sm">
          Don’t have an account?{" "}
          <Link to="/signup" className="text-yellow-400 hover:text-yellow-300">
  Create one
</Link>
        </p>
  </Motion.div>
    </div>
  );
};

export default Login;

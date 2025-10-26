import React from "react";
import { FaShoppingCart, FaCreditCard, FaTruck, FaClipboardList, FaBoxOpen, FaCheckCircle } from "react-icons/fa";
import { motion as Motion } from "framer-motion";

const Services = () => {
  const steps = [
    {
      title: "Browse & Add to Cart",
      desc: "Explore our premium collection and add your favorites to your cart.",
      icon: <FaShoppingCart className="text-4xl text-blue-500 mb-3" />,
    },
    {
      title: "Proceed to Checkout",
      desc: "Review your cart, confirm items, and proceed to checkout with ease.",
      icon: <FaClipboardList className="text-4xl text-violet-800 mb-3" />,
    },
    {
      title: "Input Your Details",
      desc: "Fill in your shipping and contact details accurately for delivery.",
      icon: <FaCreditCard className="text-4xl text-yellow-500 mb-3" />,
    },
    {
      title: "Make Payment",
      desc: "Choose your preferred payment method and complete your order securely.",
      icon: <FaCheckCircle className="text-4xl text-green-900 mb-3" />,
    },
    {
      title: "Receive Your Order",
      desc: "Sit back and relax while we deliver your order within 24–48 hours.",
      icon: <FaTruck className="text-4xl text-black mb-3" />,
    },
  ];

  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Header */}
        <h2
          data-aos="fade-up"
          className="text-3xl md:text-4xl font-bold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-900"
        >
          How to Place an Order
        </h2>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-16">
          {steps.map((step, index) => (
            <Motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="bg-white shadow-md rounded-2xl p-6 flex flex-col items-center justify-center border border-gray-200 hover:shadow-xl transition-all"
            >
              {step.icon}
              <h3 className="text-lg font-semibold text-gray-800 mb-2">{step.title}</h3>
              <p className="text-gray-500 text-sm">{step.desc}</p>
            </Motion.div>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex justify-center gap-6">
          <a
            href="/gallery"
            className="px-6 py-3 bg-gradient-to-r from-yellow-300 to-yellow-700 text-white font-medium rounded-full shadow-md hover:shadow-lg hover:opacity-90 transition-all"
          >
            Gallery
          </a>
          <a
            href="/shop"
            className="px-6 py-3 bg-black text-white font-medium rounded-full shadow-md hover:bg-gray-800 transition-all"
          >
            Shop Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;

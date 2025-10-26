// src/pages/Wishlist.jsx
import React from "react";
import { useWishlist } from "../hooks/useWishlist";
import { motion as Motion } from "framer-motion";
import { useCart } from "../hooks/useCart";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

const Wishlist = () => {
  const { wishlist, removeFromWishlist, clearWishlist } = useWishlist();
  const { addToCart, toggleCart } = useCart();

  const addAllToCart = () => {
    if (!wishlist || wishlist.length === 0) return;
    const count = wishlist.length;
    wishlist.forEach((item) => {
      const cartItem = {
        ...item,
        quantity: item.quantity ?? 1,
        size: item.size ?? null,
      };
      addToCart(cartItem);
    });
    // clear wishlist after adding all and open cart for user
  clearWishlist();
  try { toggleCart(); } catch { /* toggle may be unavailable in some contexts */ }
    toast.success(`${count} item(s) added to cart`);
  };

  if (wishlist.length === 0) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center">
        <h2 className="text-2xl font-semibold mb-4">Your Wishlist is Empty 💔</h2>
        <Link
          to="/shop"
          className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition-all"
        >
          Go Shopping
        </Link>
      </div>
    );
  }

  return (
    <Motion.div
      className="max-w-5xl mx-auto p-6"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold">Your Wishlist ❤️</h1>
        <div className="flex items-center gap-4">
          <button
            onClick={clearWishlist}
            className="text-red-500 hover:underline"
          >
            Clear Wishlist
          </button>
          <button
            onClick={addAllToCart}
            className="bg-yellow-500 text-black px-4 py-1 rounded-full text-sm hover:opacity-90"
          >
            Add all to Cart
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {wishlist.map((item) => (
          <Motion.div
            key={item.id}
            className="bg-white shadow-lg rounded-xl p-4 flex flex-col justify-between"
            whileHover={{ scale: 1.03 }}
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <div className="flex flex-col gap-2">
              <h3 className="text-lg font-semibold">{item.name}</h3>
              <p className="text-gray-600">GHS {item.price}</p>
            </div>

            <div className="flex justify-between mt-4">
              <button
                onClick={() => removeFromWishlist(item.id)}
                className="text-sm text-red-500 hover:underline"
              >
                Remove
              </button>
              <Link
                to="/shop"
                className="bg-black text-white px-4 py-1 rounded-full text-sm hover:bg-gray-800"
              >
                Shop Now
              </Link>
            </div>
      </Motion.div>
        ))}
      </div>
  </Motion.div>
  );
};

export default Wishlist;

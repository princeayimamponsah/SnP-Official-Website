import React, { useEffect, useRef, useState } from "react";
import { motion as Motion, AnimatePresence } from "framer-motion";
import { useCart } from "../hooks/useCart";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const CartSidebar = () => {
  const { cart, isCartOpen, toggleCart, removeFromCart, updateQuantity } = useCart();

  const containerRef = useRef(null);
  const [highlightKey, setHighlightKey] = useState(null);
  const navigate = useNavigate();

  // ✅ Totals
  const subtotal = cart.reduce(
    (sum, item) => sum + Number(item.price) * item.quantity,
    0
  );
  const transactionCharge = +(subtotal * 0.02).toFixed(2); // 2% transaction fee
  const total = +(subtotal + transactionCharge).toFixed(2);

  const handleCheckout = () => {
    toggleCart();
    toast.success("Proceeding to checkout...");
    navigate("/checkout");
  };

  useEffect(() => {
    if (!isCartOpen || !containerRef.current) return;
    const el = containerRef.current;
    el.scrollTo({ top: el.scrollHeight, behavior: "smooth" });

    if (cart.length > 0) {
      const last = cart[cart.length - 1];
      const key = `${last.id}-${last.size}`;
      setHighlightKey(key);
      const t = setTimeout(() => setHighlightKey(null), 1500);
      return () => clearTimeout(t);
    }
  }, [cart, isCartOpen]);

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          {/* Overlay */}
          <Motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            onClick={toggleCart}
            className="fixed inset-0 bg-black z-40"
          />

          {/* Sidebar */}
          <Motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className="fixed right-0 top-0 w-96 h-full bg-white shadow-2xl z-50 p-6 flex flex-col"
            style={{ width: 420 }}
          >
            {/* Header */}
            <div className="flex justify-between items-center mb-4 border-b pb-2">
              <h2 className="text-xl font-bold text-gray-800">Your Cart</h2>

              <div className="flex items-center gap-3">
                {/* Clear Cart removed per request */}
                <button
                  onClick={toggleCart}
                  className="text-gray-500 text-2xl hover:text-gray-700"
                >
                  ✕
                </button>
              </div>
            </div>

            {/* Cart Items */}
            <div
              ref={containerRef}
              className="flex-1 overflow-y-auto space-y-4 scrollbar-thin scrollbar-thumb-gray-300"
            >
              {cart.length === 0 ? (
                <p className="text-gray-500 text-center mt-10">
                  Your cart is empty 🛍️
                </p>
              ) : (
                cart.map((item) => {
                  const key = `${item.id}-${item.size}`;
                  const isHighlighted = highlightKey === key;
                  return (
                    <div
                      key={key}
                      className={`flex items-center justify-between border rounded-lg p-2 transition-all ${
                        isHighlighted ? "ring-4 ring-yellow-200" : ""
                      }`}
                    >
                      <img
                        src={item.img}
                        alt={item.name}
                        className="w-20 h-20 object-contain"
                      />
                      <div className="flex-1 px-2">
                        <h3 className="text-sm font-semibold">{item.name}</h3>
                        <p className="text-xs text-gray-500">Size: {item.size}</p>
                        <p className="text-yellow-600 font-bold">
                          ₵{item.price}
                        </p>
                      </div>
                      <div className="flex flex-col items-center">
                        <button
                          className="text-gray-600 font-bold"
                          onClick={() =>
                            updateQuantity(
                              item.id,
                              item.size,
                              item.quantity + 1
                            )
                          }
                        >
                          +
                        </button>
                        <span>{item.quantity}</span>
                        <button
                          className="text-gray-600 font-bold"
                          onClick={() =>
                            updateQuantity(
                              item.id,
                              item.size,
                              Math.max(1, item.quantity - 1)
                            )
                          }
                        >
                          -
                        </button>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.id, item.size)}
                        className="text-red-500 ml-2 hover:text-red-600"
                      >
                        ✕
                      </button>
                    </div>
                  );
                })
              )}
            </div>

            {/* ✅ Totals Section */}
            {cart.length > 0 && (
              <div className="mt-6 border-t pt-4 text-sm text-gray-700 space-y-2">
                <div className="flex justify-between">
                  <p>Subtotal:</p>
                  <p className="font-medium">₵{subtotal.toFixed(2)}</p>
                </div>
                <div className="flex justify-between">
                  <p>Transaction Fee:</p>
                  <p className="font-medium text-gray-600">
                    ₵{transactionCharge.toFixed(2)}
                  </p>
                </div>
                <div className="flex justify-between text-base font-semibold border-t pt-2">
                  <p>Total:</p>
                  <p className="text-yellow-600">₵{total.toFixed(2)}</p>
                </div>

                {/* Checkout Button */}
                <button
                  className="w-full py-2 mt-4 bg-gradient-to-r from-yellow-500 to-yellow-800 text-white font-semibold rounded-lg hover:opacity-90 transition"
                  onClick={handleCheckout}
                >
                  Proceed to Checkout
                </button>
              </div>
            )}
          </Motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CartSidebar;

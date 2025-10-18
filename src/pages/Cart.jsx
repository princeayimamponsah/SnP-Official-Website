import React from "react";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const navigate = useNavigate();

  // 🧺 Temporary empty cart (no CartContext used)
  const cart = [];

  // 💵 Temporary subtotal (0 since no items)
  const subtotal = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="pt-32 max-w-4xl mx-auto px-4">
      <h1 className="text-3xl font-bold mb-6">Your Shopping Cart</h1>

      {cart.length === 0 ? (
        <p className="text-gray-500">Your cart is empty 😢</p>
      ) : (
        <>
          <div className="space-y-4">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-center border-b py-3"
              >
                <p>
                  {item.name} (x{item.quantity})
                </p>
                <div className="flex items-center space-x-4">
                  <p>${(item.price * item.quantity).toFixed(2)}</p>
                  <button
                    className="text-red-500 text-sm hover:underline"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 flex justify-between text-lg font-semibold">
            <span>Subtotal:</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>

          <div className="flex justify-between mt-6">
            <button
              className="bg-gray-200 text-gray-800 py-3 px-6 rounded-lg hover:bg-gray-300 transition"
            >
              Clear Cart
            </button>
            <button
              onClick={() => navigate("/checkout")}
              className="bg-black text-white py-3 px-6 rounded-lg hover:bg-gray-800 transition"
            >
              Proceed to Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;

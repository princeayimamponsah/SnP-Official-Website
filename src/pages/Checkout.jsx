import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const navigate = useNavigate();

  const subtotal = 135; // sample
  const transactionFee = subtotal * 0.01;
  const total = subtotal + transactionFee;

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePayment = () => {
    navigate("/payment");
  };

  return (
    <div className="pt-32 max-w-3xl mx-auto px-4">
      <h1 className="text-3xl font-bold mb-6">Checkout</h1>

      <div className="space-y-4">
        <input
          name="fullName"
          placeholder="Full Name"
          className="w-full border px-4 py-2 rounded-lg"
          onChange={handleChange}
        />
        <input
          name="email"
          placeholder="Email"
          className="w-full border px-4 py-2 rounded-lg"
          onChange={handleChange}
        />
        <input
          name="phone"
          placeholder="Phone Number"
          className="w-full border px-4 py-2 rounded-lg"
          onChange={handleChange}
        />
        <textarea
          name="address"
          placeholder="Delivery Address"
          className="w-full border px-4 py-2 rounded-lg"
          onChange={handleChange}
        />
      </div>

      <div className="mt-6 border-t pt-4">
        <div className="flex justify-between mb-2">
          <span>Subtotal:</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between mb-2">
          <span>Transaction Fee (1%):</span>
          <span>${transactionFee.toFixed(2)}</span>
        </div>
        <div className="flex justify-between font-bold text-lg">
          <span>Total:</span>
          <span>${total.toFixed(2)}</span>
        </div>
      </div>

      <button
        onClick={handlePayment}
        className="mt-6 w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition"
      >
        Make Payment
      </button>
    </div>
  );
};

export default Checkout;

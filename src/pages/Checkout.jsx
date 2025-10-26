import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useCart } from "../hooks/useCart";
import toast from "react-hot-toast";

// 🧩 Helper function to generate order number
const generateOrderNumber = () => {
  const prefix = "SNP";
  const date = new Date().toISOString().slice(0, 10).replace(/-/g, "");
  const random = Math.floor(1000 + Math.random() * 9000); // 4-digit random
  return `${prefix}-${date}-${random}`;
};

const Checkout = () => {
  const navigate = useNavigate();
  const { cart } = useCart();

  // compute totals dynamically from cart
  const subtotal =
    cart?.reduce((s, it) => s + (Number(it.price) || 0) * (it.quantity || 1), 0) || 0;
  const transactionFee = +(subtotal * 0.01).toFixed(2);
  const total = +(subtotal + transactionFee).toFixed(2);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    region: "",
    note: "",
  });
  const [agreed, setAgreed] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePayment = (e) => {
    e.preventDefault();

    if (!cart || cart.length === 0) {
      toast.error("Your cart is empty. Add items before proceeding to payment.");
      return;
    }

    if (!agreed) {
      toast.error("Please agree to the terms and conditions before placing your order.");
      return;
    }

    // ✅ Generate order number
    const orderNumber = generateOrderNumber();

    // ✅ Save order details to localStorage
    const orderDetails = {
      orderNumber,
      ...formData,
      subtotal,
      transactionFee,
      total,
      cart,
      date: new Date().toLocaleString(),
    };

    localStorage.setItem("snpOrder", JSON.stringify(orderDetails));

    toast.success("Order placed successfully!");
    navigate("/order-confirmation"); // redirect to confirmation page
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-28 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* LEFT SECTION - BILLING FORM */}
        <div className="lg:col-span-2 bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">
            Billing Details
          </h2>

          <form onSubmit={handlePayment} className="space-y-6">
            {/* Name Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  First Name
                </label>
                <input
                  name="firstName"
                  type="text"
                  placeholder="John"
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-black focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Last Name
                </label>
                <input
                  name="lastName"
                  type="text"
                  placeholder="Doe"
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-black focus:outline-none"
                />
              </div>
            </div>

            {/* Email & Phone */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  name="email"
                  type="email"
                  placeholder="example@gmail.com"
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-black focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number
                </label>
                <input
                  name="phone"
                  type="text"
                  placeholder="+233 58 208 713"
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-black focus:outline-none"
                />
              </div>
            </div>

            {/* Address */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Street Address
              </label>
              <input
                name="address"
                type="text"
                placeholder="House number and street name"
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-black focus:outline-none"
              />
            </div>

            {/* City / Region */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Town / City
                </label>
                <input
                  name="city"
                  type="text"
                  placeholder="Accra"
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-black focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Region
                </label>
                <input
                  name="region"
                  type="text"
                  placeholder="Greater Accra"
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-black focus:outline-none"
                />
              </div>
            </div>

            {/* Order Note */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Order Notes (Optional)
              </label>
              <textarea
                name="note"
                rows="3"
                placeholder="Any special request for delivery..."
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-black focus:outline-none resize-none"
              />
            </div>
          </form>
        </div>

        {/* RIGHT SECTION - ORDER SUMMARY */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 h-fit">
          <h2 className="text-xl font-bold mb-4 text-gray-800">Your Order</h2>

          <div className="border-b border-gray-200 pb-4 mb-4">
            {(!cart || cart.length === 0) ? (
              <p className="text-gray-500">Your cart is empty.</p>
            ) : (
              cart.map((item) => (
                <div
                  key={`${item.id}-${item.size || 'n/a'}`}
                  className="flex justify-between text-sm mb-2"
                >
                  <div className="flex flex-col">
                    <span className="font-medium text-gray-900">
                      {item.name || item.title || "Product"}
                    </span>
                    {item.size && (
                      <span className="text-xs text-gray-600">Size: {item.size}</span>
                    )}
                    <span className="text-xs text-gray-600">
                      Qty: {item.quantity || 1}
                    </span>
                  </div>
                  <div className="text-gray-900">
                    GHC {(Number(item.price) * (item.quantity || 1)).toFixed(2)}
                  </div>
                </div>
              ))
            )}
          </div>

          <div className="text-sm text-gray-700 space-y-2 border-b border-gray-200 pb-4 mb-4">
            <div className="flex justify-between">
              <span>Subtotal:</span>
              <span>GHC {subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>Transaction Fee (1%):</span>
              <span>GHC {transactionFee.toFixed(2)}</span>
            </div>
            <div className="flex justify-between font-semibold text-lg text-gray-900">
              <span>Total:</span>
              <span>GHC {total.toFixed(2)}</span>
            </div>
          </div>

          <div className="text-sm text-gray-600 mb-4">
            <p>Payment Method:</p>
            <div className="mt-2 flex flex-col space-y-1">
              <label className="flex items-center space-x-2">
                <input type="radio" name="payment" defaultChecked />
                <span>Cash on Delivery</span>
              </label>
              <label className="flex items-center space-x-2">
                <input type="radio" name="payment" />
                <span>Pay with Mobile Money</span>
              </label>
            </div>
          </div>

          <div className="mb-3 text-xs text-gray-600">
            Your personal data will be used to process your order, support your
            experience throughout this website, and for other purposes described
            in our privacy policy.
          </div>

          <div className="flex items-center mb-4">
            <input
              type="checkbox"
              className="mr-2"
              checked={agreed}
              onChange={(e) => setAgreed(e.target.checked)}
            />
            <p className="text-xs text-gray-600">
              I have read and agree to the website{" "}
              <Link to="/policy" className="font-bold text-gray-900">
                terms and conditions
              </Link>.
            </p>
          </div>

          <button
            onClick={handlePayment}
            disabled={!agreed}
            className={`w-full py-3 rounded-lg font-semibold transition ${
              agreed
                ? "bg-black hover:bg-gray-900 text-white"
                : "bg-gray-200 text-gray-500 cursor-not-allowed"
            }`}
          >
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;

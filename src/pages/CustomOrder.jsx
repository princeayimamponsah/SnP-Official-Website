import React, { useState } from "react";  
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { UploadCloud } from "lucide-react";
import { useCart } from "../hooks/useCart";

const categories = [
  { id: 1, name: "Zip-up Shirt", price: 250 },
  { id: 2, name: "Cross Slipper(Male)", price: 200 },
  { id: 2, name: "Cross Slipper(Female)", price: 180 },
  { id: 3, name: "2-Piece Full Outfit", price: 420 },
];

const CustomOrder = () => {
  const [file, setFile] = useState(null);
  const [details, setDetails] = useState("");
  const [selectedItems, setSelectedItems] = useState([]);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const navigate = useNavigate();
  const { addToCart } = useCart();

  // Handle file upload
  const handleFileChange = (e) => {
    const uploaded = e.target.files[0];
    if (uploaded && uploaded.type.startsWith("image/")) {
      setFile(uploaded);
    } else {
      toast.error("Please upload a valid image file.");
    }
  };

  // Handle checkbox select/unselect
  const handleCheckboxChange = (id) => {
    setSelectedItems((prev) =>
      prev.includes(id)
        ? prev.filter((item) => item !== id)
        : [...prev, id]
    );
  };

  // Add all selected items to cart
  const handleAddToCart = () => {
    if (!file) {
      toast.error("Please upload an image first!");
      return;
    }

    if (selectedItems.length === 0) {
      toast.error("Please select at least one category.");
      return;
    }

    const imgUrl = URL.createObjectURL(file);
    selectedItems.forEach((id) => {
      const item = categories.find((cat) => cat.id === id);
      if (item) {
        const newItem = {
          id: item.id,
          name: item.name,
          category: "custom",
          price: item.price,
          img: imgUrl,
          size: "Custom",
          quantity: 1,
          details,
        };
        addToCart(newItem);
      }
    });

    toast.success("All selected custom items added to cart!");
    navigate("/shop");
  };

  // Submit custom order form
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!file) {
      toast.error("Please upload an image.");
      return;
    }

    if (!details.trim()) {
      toast.error("Please describe your custom order.");
      return;
    }

    if (selectedItems.length === 0) {
      toast.error("Please select at least one category.");
      return;
    }

    toast.success("Your custom order has been submitted!");
    setIsSubmitted(true); // ✅ Enable Add to Cart button
  };

  return (
    <div className="pt-28 pb-16 px-6 min-h-screen bg-gray-50 flex justify-center items-start">
      <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-lg">
        <h1 className="text-3xl font-bold text-center mb-6 text-gray-900">
          Custom Order
        </h1>
        <p className="text-center text-gray-600 mb-8">
          Upload a photo or design of the product you want made specially for you.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Upload Section */}
          <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 text-center hover:border-gray-500 transition">
            {file ? (
              <div>
                <img
                  src={URL.createObjectURL(file)}
                  alt="Preview"
                  className="w-full h-56 object-cover rounded-lg mb-3"
                />
                <p className="text-sm text-gray-600">{file.name}</p>
              </div>
            ) : (
              <label className="flex flex-col items-center cursor-pointer">
                <UploadCloud className="w-10 h-10 text-gray-400 mb-2" />
                <span className="text-sm text-gray-600">
                  Click to upload or drag and drop
                </span>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  className="hidden"
                />
              </label>
            )}
          </div>

          {/* Details Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Describe Your Custom Order
            </label>
            <textarea
              value={details}
              onChange={(e) => setDetails(e.target.value)}
              placeholder="Describe the colors, style, or any special details you want..."
              rows="4"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-black focus:outline-none resize-none"
            ></textarea>
          </div>

          {/* 🟢 Category Selection */}
          <div className="border-t pt-4">
            <h2 className="text-lg font-semibold text-gray-800 mb-3">
              Choose a Category
            </h2>
            <div className="space-y-3">
              {categories.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center gap-3 bg-gray-100 p-3 rounded-lg"
                >
                  <input
                    type="checkbox"
                    checked={selectedItems.includes(item.id)}
                    onChange={() => handleCheckboxChange(item.id)}
                    className="w-5 h-5 accent-yellow-500"
                  />
                  <span className="text-gray-800 font-medium">
                    {item.name} - ₵{item.price}
                  </span>
                </div>
              ))}
            </div>

            {/* ⚠️ Note Section */}
            <div className="mt-4 bg-yellow-50 border-l-4 border-yellow-400 p-3 rounded-md text-sm text-gray-700">
              <strong>NB:</strong> This is a <span className="font-semibold">pre-order</span> and takes approximately <span className="font-semibold">7–10 days</span> for your order to be ready.
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 mt-6 bg-black text-white rounded-lg font-semibold hover:bg-gray-800 transition"
          >
            Submit Custom Order
          </button>
        </form>

        {/* 🟡 Add to Cart Button (Disabled until submission) */}
        <button
          onClick={handleAddToCart}
          disabled={!isSubmitted}
          className={`w-full py-3 mt-4 rounded-lg font-semibold transition ${
            isSubmitted
              ? "bg-gradient-to-r from-yellow-500 to-yellow-300 text-white hover:opacity-90"
              : "bg-gray-300 text-gray-500 cursor-not-allowed"
          }`}
        >
          {isSubmitted ? "Add Selected Items to Cart" : "Submit Order to Enable Add to Cart"}
        </button>
      </div>
    </div>
  );
};

export default CustomOrder;

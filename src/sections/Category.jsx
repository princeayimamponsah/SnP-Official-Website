import React, { useState } from "react";
import { FaHeart } from "react-icons/fa";
import { motion as Motion, AnimatePresence } from "framer-motion";

const allProducts = [
  { id: 1, name: "Men's Slippers 1", category: "slippers", gender: "men", image: "/slipper1.jpg", hoverImage: "/slipper1-hover.jpg", isNew: true, price: 150, description: "Comfortable men's slippers made for everyday wear." },
  { id: 2, name: "Women's Slippers 2", category: "slippers", gender: "women", image: "/slipper2.jpg", hoverImage: "/slipper2-hover.jpg", isNew: false, price: 140, description: "Elegant women's slippers that combine style and comfort." },
  { id: 3, name: "Men's Shirt 1", category: "shirts", gender: "men", image: "/shirt1.jpg", hoverImage: "/shirt1-hover.jpg", isNew: true, price: 180, description: "Trendy men's shirt with a perfect modern fit." },
  { id: 4, name: "Women's Shirt 2", category: "shirts", gender: "women", image: "/shirt2.jpg", hoverImage: "/shirt2-hover.jpg", isNew: false, price: 170, description: "Stylish women's shirt for both casual and formal looks." },
  { id: 5, name: "Men's Slippers 3", category: "slippers", gender: "men", image: "/slipper3.jpg", hoverImage: "/slipper3-hover.jpg", isNew: false, price: 160, description: "Classic slippers with soft texture for men." },
  { id: 6, name: "Women's Shirt 3", category: "shirts", gender: "women", image: "/shirt3.jpg", hoverImage: "/shirt3-hover.jpg", isNew: true, price: 200, description: "Comfortable and breathable cotton women's shirt." },
];

const Category = () => {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [visibleCount, setVisibleCount] = useState(12);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedSize, setSelectedSize] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [showFilters, setShowFilters] = useState(false);

  const handleCategoryChange = (category) => {
    if (category === "all") {
      setSelectedCategories(["all"]);
    } else {
      const newSelected = selectedCategories.includes(category)
        ? selectedCategories.filter((c) => c !== category)
        : [...selectedCategories.filter((c) => c !== "all"), category];
      setSelectedCategories(newSelected);
    }
  };

  const filteredProducts = allProducts.filter((product) => {
    if (selectedCategories.includes("all") || selectedCategories.length === 0) return true;
    if (selectedCategories.includes("new") && product.isNew) return true;
    if (selectedCategories.includes(product.category)) return true;
    if (selectedCategories.includes(product.gender)) return true;
    return false;
  });

  const sortedProducts = [...filteredProducts];

  const sizes = selectedProduct?.category === "slippers"
    ? ["39", "40", "41", "42", "43", "44", "45"]
    : ["S", "M", "L", "XL", "2XL"];

  return (
    <div className="flex flex-col md:flex-row w-full px-4 sm:px-6 md:px-10 py-10 bg-gray-100 relative">
      {/* Sidebar (filters) */}
      <div className="md:w-1/5 md:pr-6 border-b md:border-b-0 md:border-r border-gray-300 pb-4 md:pb-0">
        {/* Mobile Filter Button */}
        <div className="flex justify-between items-center md:hidden mb-4">
          <h2 className="text-xl font-bold">Filters</h2>
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="px-4 py-2 bg-black text-white rounded-lg"
          >
            {showFilters ? "Hide" : "Show"}
          </button>
        </div>

        {/* Filter Options */}
        <div className={`${showFilters ? "block" : "hidden"} md:block`}>
          <h2 className="text-lg font-bold mb-4 hidden md:block">Category</h2>
          {["all", "new", "slippers", "shirts"].map((cat) => (
            <div className="mb-3" key={cat}>
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  onChange={() => handleCategoryChange(cat)}
                  checked={selectedCategories.includes(cat)}
                />
                <span className="font-medium capitalize">
                  {cat === "all" ? "All Products" : cat === "new" ? "New Arrivals" : cat}
                </span>
              </label>
            </div>
          ))}
          <div className="ml-4 mt-2">
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                onChange={() => handleCategoryChange("men")}
                checked={selectedCategories.includes("men")}
              />
              <span>Men</span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                onChange={() => handleCategoryChange("women")}
                checked={selectedCategories.includes("women")}
              />
              <span>Women</span>
            </label>
          </div>
        </div>
      </div>

      {/* Product Grid */}
      <div className="md:w-4/5 mt-6 md:mt-0">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {sortedProducts.slice(0, visibleCount).map((product) => (
            <Motion.div
              key={product.id}
              onClick={() => {
                setSelectedProduct(product);
                setSelectedSize("");
                setQuantity(1);
              }}
              className="cursor-pointer group relative bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-transform transform hover:scale-105 duration-300"
            >
              <div className="relative w-full h-48 sm:h-56 md:h-64 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0"
                />
                <img
                  src={product.hoverImage}
                  alt={`${product.name} hover`}
                  className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                />
                <button className="absolute top-3 right-3 bg-white/80 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-pink-500 hover:text-white">
                  <FaHeart size={18} />
                </button>
                {product.isNew && (
                  <span className="absolute top-3 left-3 bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                    NEW
                  </span>
                )}
              </div>

              <div className="p-4 text-center relative">
                <h3 className="font-semibold mb-1 text-sm sm:text-base">{product.name}</h3>
                <p className="text-xs sm:text-sm text-gray-500 mb-1">{product.description.slice(0, 40)}...</p>
                <p className="font-bold text-base sm:text-lg text-gray-800 mb-3">₵{product.price}</p>
                <button className="absolute bottom-0 left-0 right-0 bg-black text-white py-2 text-sm sm:text-base opacity-0 group-hover:opacity-100 translate-y-6 group-hover:translate-y-0 transition-all duration-300">
                  View Details
                </button>
              </div>
            </Motion.div>
          ))}
        </div>

        {visibleCount < sortedProducts.length && (
          <div className="flex justify-center mt-8">
            <button
              onClick={() => setVisibleCount(visibleCount + 12)}
              className="px-6 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition"
            >
              Load More
            </button>
          </div>
        )}
      </div>

      {/* Product Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <Motion.div
            className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <Motion.div
              className="bg-white rounded-2xl p-4 sm:p-6 max-w-3xl w-full flex flex-col md:flex-row relative shadow-2xl"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <button
                onClick={() => setSelectedProduct(null)}
                className="absolute top-3 right-3 text-gray-600 hover:text-black text-2xl"
              >
                ❌
              </button>

              {/* Image */}
              <div className="w-full md:w-1/2 flex items-center justify-center">
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  className="w-full rounded-xl object-cover"
                />
              </div>

              {/* Details */}
              <div className="w-full md:w-1/2 md:pl-6 mt-4 md:mt-0">
                <h2 className="text-xl sm:text-2xl font-bold mb-2">{selectedProduct.name}</h2>
                <p className="text-gray-600 mb-3 sm:mb-4 text-sm sm:text-base">{selectedProduct.description}</p>
                <p className="text-lg sm:text-xl font-semibold text-gray-800 mb-4">
                  ₵{selectedProduct.price}
                </p>

                {/* Sizes */}
                <div className="mb-4">
                  <h4 className="font-semibold mb-2">Select Size:</h4>
                  <div className="flex flex-wrap gap-2">
                    {sizes.map((size) => (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`px-3 py-1 rounded border text-sm sm:text-base ${
                          selectedSize === size
                            ? "bg-black text-white border-black"
                            : "border-gray-400 hover:bg-gray-100"
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Quantity */}
                <div className="mb-4 flex items-center space-x-4">
                  <h4 className="font-semibold">Quantity:</h4>
                  <div className="flex items-center border rounded">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="px-3 py-1 text-lg font-bold"
                    >
                      -
                    </button>
                    <span className="px-4">{quantity}</span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="px-3 py-1 text-lg font-bold"
                    >
                      +
                    </button>
                  </div>
                </div>

                <button className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition text-sm sm:text-base">
                  Add to Cart
                </button>
              </div>
            </Motion.div>
          </Motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Category;

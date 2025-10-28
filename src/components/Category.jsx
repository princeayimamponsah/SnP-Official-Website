import React, { useState, useMemo } from "react";
import { FaHeart, FaStar, FaRegStar } from "react-icons/fa";
import { useWishlist } from "../hooks/useWishlist";
import { useCart } from "../hooks/useCart";
import toast from "react-hot-toast";
import { motion as Motion, AnimatePresence } from "framer-motion";

// ✅ Optimized image imports (convert heavy jpg to webp if possible)
import AshClose from "../assets/images/Ash_close.webp";
import BlueWavesClose from "../assets/images/blue_waves_close.webp";
import Cat1 from "../assets/images/cat1.webp";
import RedClose from "../assets/images/red_close.webp";
import Woven from "../assets/images/Woven.webp";
import BlackClose from "../assets/images/black_close.webp";
import RegBlue from "../assets/images/blue2_close.webp";
import Cream from "../assets/images/cream.webp";
import Green from "../assets/images/Green.webp";
import Navy from "../assets/images/Navy.webp";
import Navyclose from "../assets/images/Navyclose.webp";
import Brown from "../assets/images/browncroc.webp";

const allProducts = [
  { id: 1, name: "Beige Woven", category: "slippers", gender: "men", image: Woven, hoverImage: Cat1, isNew: true, price: 150, description: "Comfortable men's slippers made for everyday wear.", ratedBy: 120, rating: 4.5 },
  { id: 2, name: "Brown Croc", category: "slippers", gender: "men", image: Brown, hoverImage: Navyclose, isNew: false, price: 140, description: "Elegant slippers combining style and comfort.", ratedBy: 110, rating: 4.2 },
  { id: 3, name: "SnP-Red", category: "shirts", gender: "men", image: RedClose, hoverImage: RedClose, isNew: true, price: 180, description: "Trendy men's shirt with a perfect modern fit.", ratedBy: 130, rating: 4.7 },
  { id: 4, name: "Blue-Waves", category: "shirts", gender: "men", image: BlueWavesClose, hoverImage: BlueWavesClose, isNew: false, price: 170, description: "Stylish shirt for casual and formal looks.", ratedBy: 98, rating: 4.4 },
  { id: 5, name: "Sea Blue", category: "shirt", gender: "men", image: RegBlue, hoverImage: RegBlue, isNew: false, price: 160, description: "Classic soft texture slippers for men.", ratedBy: 150, rating: 4.5 },
  { id: 6, name: "SnP-Black", category: "shirts", gender: "men", image: BlackClose, hoverImage: BlackClose, isNew: true, price: 200, description: "Comfortable and breathable cotton shirt.", ratedBy: 190, rating: 4.8 },
  { id: 7, name: "SnP-Ash", category: "shirts", gender: "women", image: AshClose, hoverImage: AshClose, isNew: true, price: 200, description: "Soft, breathable women’s cotton shirt.", ratedBy: 120, rating: 4.6 },
  { id: 8, name: "Cream", category: "slippers", gender: "men", image: Cream, hoverImage: Cream, isNew: false, price: 140, description: "Comfortable elegant slippers for men.", ratedBy: 95, rating: 4.3 },
  { id: 9, name: "Green Croc", category: "slippers", gender: "men", image: Green, hoverImage: Green, isNew: false, price: 140, description: "Elegant green croc slippers.", ratedBy: 75, rating: 4.1 },
  { id: 10, name: "Navy Croc", category: "slippers", gender: "men", image: Navy, hoverImage: Navyclose, isNew: false, price: 140, description: "Navy croc design for men.", ratedBy: 102, rating: 4.4 },
];

const Category = () => {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [visibleCount, setVisibleCount] = useState(12);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedSize, setSelectedSize] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [showFilters, setShowFilters] = useState(false);
  const { addToWishlist, isInWishlist } = useWishlist();
  const { addToCart, toggleCart } = useCart();

  // ✅ Memoized filtered products (improves performance)
  const filteredProducts = useMemo(() => {
    return allProducts.filter((product) => {
      if (selectedCategories.includes("all") || selectedCategories.length === 0) return true;
      if (selectedCategories.includes("new") && product.isNew) return true;
      if (selectedCategories.includes(product.category)) return true;
      if (selectedCategories.includes(product.gender)) return true;
      return false;
    });
  }, [selectedCategories]);

  const handleAddToCart = () => {
    if (!selectedProduct) return;
    const needsSize = ["slippers", "shirts"].includes(selectedProduct.category);

    if (needsSize && !selectedSize) {
      toast.error("Please select a size before adding to cart.");
      return;
    }

    const cartItem = {
      id: selectedProduct.id,
      name: selectedProduct.name,
      price: selectedProduct.price,
      img: selectedProduct.image,
      quantity,
      size: selectedSize || null,
    };

    addToCart(cartItem);
    toggleCart();
    setSelectedProduct(null);
    toast.success(`${cartItem.name} added to cart`);
  };

  const sizes = selectedProduct?.category === "slippers"
    ? ["39", "40", "41", "42", "43", "44", "45"]
    : ["S", "M", "L", "XL", "2XL"];

  return (
    <div className="flex flex-col md:flex-row w-full px-4 sm:px-6 md:px-10 py-10 bg-gray-100 relative">
      {/* Sidebar */}
      <div className="md:w-1/5 md:pr-6 border-b md:border-b-0 md:border-r border-gray-300 pb-4 md:pb-0">
        <div className="flex justify-between items-center md:hidden mb-4">
          <h2 className="text-xl font-bold">Filters</h2>
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="px-4 py-2 bg-black text-white rounded-lg"
          >
            {showFilters ? "Hide" : "Show"}
          </button>
        </div>

        <div className={`${showFilters ? "block" : "hidden"} md:block`}>
          <h2 className="text-lg font-bold mb-4 hidden md:block">Category</h2>
          {["all", "new", "slippers", "shirts"].map((cat) => (
            <label key={cat} className="flex items-center space-x-2 mb-2 cursor-pointer">
              <input
                type="checkbox"
                onChange={() =>
                  setSelectedCategories((prev) =>
                    prev.includes(cat)
                      ? prev.filter((c) => c !== cat)
                      : [...prev.filter((c) => c !== "all"), cat]
                  )
                }
                checked={selectedCategories.includes(cat)}
              />
              <span className="capitalize">
                {cat === "all" ? "All Products" : cat === "new" ? "New Arrivals" : cat}
              </span>
            </label>
          ))}
          <div className="ml-4 mt-2">
            {["men", "women"].map((gender) => (
              <label key={gender} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  onChange={() =>
                    setSelectedCategories((prev) =>
                      prev.includes(gender)
                        ? prev.filter((c) => c !== gender)
                        : [...prev, gender]
                    )
                  }
                  checked={selectedCategories.includes(gender)}
                />
                <span className="capitalize">{gender}</span>
              </label>
            ))}
          </div>
        </div>
      </div>

      {/* Product Grid */}
      <div className="md:w-4/5 mt-6 md:mt-0">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 sm:gap-6">
          {filteredProducts.slice(0, visibleCount).map((product) => (
            <Motion.div
              key={product.id}
              onClick={() => {
                setSelectedProduct(product);
                setSelectedSize("");
                setQuantity(1);
              }}
              whileHover={{ scale: 1.04 }}
              transition={{ type: "spring", stiffness: 250 }}
              className="cursor-pointer bg-white rounded-xl shadow-md overflow-hidden hover:shadow-2xl"
            >
              <div className="relative w-full h-56 sm:h-60 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  loading="lazy"
                  className="w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0"
                />
                <img
                  src={product.hoverImage}
                  alt={`${product.name} hover`}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 hover:opacity-100"
                />
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    addToWishlist(product);
                  }}
                  className={`absolute top-3 right-3 p-2 rounded-full ${
                    isInWishlist(product.id)
                      ? "bg-pink-500 text-white"
                      : "bg-white/80 hover:bg-pink-500 hover:text-white"
                  } transition-all duration-300`}
                >
                  <FaHeart size={18} />
                </button>
                {product.isNew && (
                  <span className="absolute top-3 left-3 bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                    NEW
                  </span>
                )}
              </div>
              <div className="p-4 text-center">
                <h3 className="font-semibold mb-1 text-sm sm:text-base">{product.name}</h3>
                <p className="text-xs sm:text-sm text-gray-500 mb-2">{product.description.slice(0, 45)}...</p>
                <p className="font-bold text-base sm:text-lg text-gray-800">₵{product.price}</p>
              </div>
            </Motion.div>
          ))}
        </div>

        {visibleCount < filteredProducts.length && (
          <div className="flex justify-center mt-8">
            <button
              onClick={() => setVisibleCount(visibleCount + 4)}
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
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <Motion.div
              className="bg-white rounded-2xl p-4 sm:p-6 max-w-3xl w-full flex flex-col md:flex-row relative shadow-2xl"
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <button
                onClick={() => setSelectedProduct(null)}
                className="absolute top-3 right-3 text-gray-600 hover:text-black text-2xl"
              >
                ❌
              </button>

              {/* Left Image */}
              <div className="w-full md:w-1/2 flex items-center justify-center">
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  loading="lazy"
                  className="w-full rounded-xl object-cover"
                />
              </div>

              {/* Right Details */}
              <div className="w-full md:w-1/2 md:pl-6 mt-4 md:mt-0">
                <h2 className="text-xl sm:text-2xl font-bold mb-2">{selectedProduct.name}</h2>
                <div className="flex items-center mb-2">
                  {[...Array(5)].map((_, i) =>
                    i < Math.floor(selectedProduct.rating) ? (
                      <FaStar key={i} className="text-yellow-400" />
                    ) : (
                      <FaRegStar key={i} className="text-gray-300" />
                    )
                  )}
                  <span className="ml-2 text-sm text-gray-500">
                    ({selectedProduct.ratedBy})
                  </span>
                </div>
                <p className="text-gray-600 mb-3 text-sm sm:text-base">{selectedProduct.description}</p>
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
                        className={`px-3 py-1 rounded border text-sm ${
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

                {/* Add to Cart */}
                <button
                  onClick={handleAddToCart}
                  disabled={["slippers", "shirts"].includes(selectedProduct.category) && !selectedSize}
                  className={`w-full py-3 rounded-lg transition ${
                    ["slippers", "shirts"].includes(selectedProduct.category) && !selectedSize
                      ? "bg-gray-300 text-gray-600 cursor-not-allowed"
                      : "bg-black text-white hover:bg-gray-800"
                  }`}
                >
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

export default React.memo(Category);

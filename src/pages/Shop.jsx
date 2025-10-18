import React, { useState, useEffect } from "react";
import { motion as Motion, AnimatePresence } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";;

const products = [
  { id: 1, name: "Sea Blue Cross", category: "shirt", gender: "male", price: 250, img: "/images/shirt1.png" },
  { id: 2, name: "Comfy Sandal", category: "slippers", gender: "female", price: 220, img: "/images/slipper2.png" },
  { id: 3, name: "Classic Tee", category: "shirt", gender: "male", price: 300, img: "/images/shirt1.png" },
  { id: 4, name: "Fashion Top", category: "shirt", gender: "female", price: 280, img: "/images/shirt2.png" },
];

const Shop = () => {
  const [filter, setFilter] = useState("all");
  const [gender, setGender] = useState("all");
  const [selectedSize, setSelectedSize] = useState({});
  const [quantity, setQuantity] = useState({});
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [addedMessage, setAddedMessage] = useState("");

  useEffect(() => {
    AOS.init({ duration: 800, easing: "ease-in-out", once: true });
  }, []);

  useEffect(() => {
    AOS.refresh();
  }, [filter, gender]);

  useEffect(() => {
    document.body.style.overflow = selectedProduct ? "hidden" : "auto";
  }, [selectedProduct]);

  const filteredProducts = products.filter((product) => {
    const categoryMatch = filter === "all" || product.category === filter;
    const genderMatch = gender === "all" || product.gender === gender;
    return categoryMatch && genderMatch;
  });

  const getSizes = (category) => {
    if (category === "slippers") return ["39", "40", "41", "42", "43", "44", "45"];
    if (category === "shirt") return ["S", "M", "L", "XL", "2XL"];
    return [];
  };

  const handleQuantityChange = (id, type) => {
    setQuantity((prev) => {
      const newQty = prev[id] || 1;
      if (type === "increment") return { ...prev, [id]: newQty + 1 };
      if (type === "decrement") return { ...prev, [id]: Math.max(1, newQty - 1) };
      return prev;
    });
  };

  const handleAddToCart = (product) => {
    const size = selectedSize[product.id];
    const Qty = quantity[product.id] || 1;

    if (!size) {
      setAddedMessage("⚠️ Please select a size before adding to cart!");
      setTimeout(() => setAddedMessage(""), 2000);
      return;
    }

    setAddedMessage(`✅ ${product.name} added successfully!`);
    setTimeout(() => setAddedMessage(""), 2000);
  };

  return (
    <section className="pt-28 pb-20 px-6 bg-gray-50 min-h-screen relative">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div data-aos="fade-down" className="text-center mb-10">
          <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 via-yellow-400 to-yellow-200">
            Shop Our Collection
          </h1>
          <p className="text-gray-600 mt-2">Browse through our finest pieces</p>
        </div>

        {/* Filters */}
        <div className="flex flex-col items-center space-y-4 mb-10">
          <div className="flex flex-wrap justify-center gap-3">
            {["all", "slippers", "shirt"].map((item) => (
              <Motion.button
                key={item}
                whileTap={{ scale: 0.95 }}
                onClick={() => setFilter(item)}
                className={`px-5 py-2 rounded-full border text-sm transition-all duration-300 ${
                  filter === item
                    ? "bg-gradient-to-r from-yellow-500 to-yellow-300 text-white"
                    : "bg-white text-gray-700 border-gray-300 hover:bg-yellow-100"
                }`}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </Motion.button>
            ))}
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {["all", "male", "female"].map((item) => (
              <Motion.button
                key={item}
                whileTap={{ scale: 0.95 }}
                onClick={() => setGender(item)}
                className={`px-5 py-2 rounded-full border text-sm transition-all duration-300 ${
                  gender === item
                    ? "bg-gradient-to-r from-yellow-500 to-yellow-300 text-white"
                    : "bg-white text-gray-700 border-gray-300 hover:bg-yellow-100"
                }`}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </Motion.button>
            ))}
          </div>
        </div>

        {/* Added Message */}
        <AnimatePresence>
          {addedMessage && (
            <Motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="fixed top-10 left-1/2 transform -translate-x-1/2 bg-black text-white text-sm px-4 py-2 rounded-full shadow-md z-50"
            >
              {addedMessage}
            </Motion.div>
          )}
        </AnimatePresence>

        {/* Product Grid */}
        <Motion.div layout className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          <AnimatePresence>
            {filteredProducts.map((product) => (
              <Motion.div
                key={product.id}
                layout
                whileHover={{ scale: 1.03 }}
                data-aos="fade-up"
                onClick={() => setSelectedProduct(product)}
                className="bg-white p-5 rounded-2xl shadow-md hover:shadow-xl transition-all cursor-pointer"
              >
                <img src={product.img} alt={product.name} className="w-full h-56 object-contain mb-4" />
                <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
                <p className="text-sm text-gray-500 mb-1">
                  {product.category === "slippers" ? "Premium handcrafted slides" : "Stylish cotton shirt"}
                </p>
                <p className="text-yellow-600 font-bold mb-2">₵{product.price}</p>
              </Motion.div>
            ))}
          </AnimatePresence>
        </Motion.div>
      </div>

      {/* Product Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <Motion.div
            key="modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm flex justify-center items-center z-50 px-4"
          >
            <Motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-white max-w-4xl w-full rounded-2xl shadow-2xl overflow-hidden p-6 relative grid md:grid-cols-2 gap-6"
            >
              <button
                onClick={() => setSelectedProduct(null)}
                className="absolute top-4 right-4 text-gray-600 hover:text-red-500 text-2xl font-bold"
              >
                ✕
              </button>

              <div className="flex justify-center items-center">
                <img src={selectedProduct.img} alt={selectedProduct.name} className="w-full h-80 object-contain" />
              </div>

              <div className="flex flex-col justify-center">
                <h2 className="text-2xl font-bold text-gray-800 mb-2">{selectedProduct.name}</h2>
                <p className="text-gray-600 mb-2">
                  {selectedProduct.category === "slippers"
                    ? "High-quality handcrafted slippers perfect for comfort and style."
                    : "Trendy shirt designed for modern fashion and everyday wear."}
                </p>
                <p className="text-yellow-600 font-bold text-lg mb-4">₵{selectedProduct.price}</p>

                <div className="mb-4">
                  <p className="text-sm text-gray-600 font-medium mb-2">Select Size:</p>
                  <div className="flex flex-wrap gap-2">
                    {getSizes(selectedProduct.category).map((size) => (
                      <Motion.button
                        key={size}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => setSelectedSize((prev) => ({ ...prev, [selectedProduct.id]: size }))}
                        className={`px-3 py-1 rounded-md border text-sm transition-all ${
                          selectedSize[selectedProduct.id] === size
                            ? "bg-gradient-to-r from-yellow-500 to-yellow-300 text-white border-transparent"
                            : "bg-white border-gray-300 text-gray-700 hover:bg-yellow-100"
                        }`}
                      >
                        {size}
                      </Motion.button>
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-3 mb-4">
                  <p className="text-sm text-gray-600 font-medium">Quantity:</p>
                  <div className="flex items-center border rounded-lg">
                    <Motion.button
                      whileTap={{ scale: 0.8 }}
                      onClick={() => handleQuantityChange(selectedProduct.id, "decrement")}
                      className="px-3 py-1 text-lg font-bold text-gray-600"
                    >
                      -
                    </Motion.button>
                    <span className="px-3 text-gray-700 font-medium">{quantity[selectedProduct.id] || 1}</span>
                    <Motion.button
                      whileTap={{ scale: 0.8 }}
                      onClick={() => handleQuantityChange(selectedProduct.id, "increment")}
                      className="px-3 py-1 text-lg font-bold text-gray-600"
                    >
                      +
                    </Motion.button>
                  </div>
                </div>

                <Motion.button
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleAddToCart(selectedProduct)}
                  className="w-full py-2 mt-3 rounded-lg bg-gradient-to-r from-yellow-500 to-yellow-300 text-white font-semibold hover:opacity-90"
                >
                  Add to Cart
                </Motion.button>
              </div>
            </Motion.div>
          </Motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Shop;

// src/context/CartContext.jsx
/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existing = prevCart.find(
        (item) => item.id === product.id && item.size === product.size
      );
      if (existing) {
        // If product already exists, increase its quantity
        return prevCart.map((item) =>
          item.id === product.id && item.size === product.size
            ? { ...item, quantity: item.quantity + product.quantity }
            : item
        );
      } else {
        return [...prevCart, product];
      }
    });
  };

  const removeFromCart = (id, size) => {
    setCart((prev) => prev.filter((item) => !(item.id === id && item.size === size)));
  };

  const updateQuantity = (id, size, qty) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id && item.size === size ? { ...item, quantity: qty } : item
      )
    );
  };

  const toggleCart = () => setIsCartOpen((prev) => !prev);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        toggleCart,
        isCartOpen,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

// Note: hook `useCart` is implemented in `src/hooks/useCart.js` to keep
// the context file exporting only React components (avoids react-refresh warnings).

import { create } from "zustand";

export const useCartStore = create((set, get) => ({
  items: [],

  addToCart: (product) => {
    const items = get().items;
    const existingItem = items.find((item) => item.id === product.id);

    if (existingItem) {
      // increase quantity if already exists
      const updatedItems = items.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      set({ items: updatedItems });
    } else {
      // add new product
      set({ items: [...items, { ...product, quantity: 1 }] });
    }
  },

  removeFromCart: (id) => {
    set({ items: get().items.filter((item) => item.id !== id) });
  },

  updateQuantity: (id, amount) => {
    const items = get().items.map((item) =>
      item.id === id
        ? { ...item, quantity: Math.max(1, item.quantity + amount) }
        : item
    );
    set({ items });
  },

  clearCart: () => set({ items: [] }),

  cartCount: () => get().items.reduce((acc, item) => acc + item.quantity, 0),
}));

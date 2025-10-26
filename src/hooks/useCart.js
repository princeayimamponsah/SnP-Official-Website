// Implement the `useCart` hook here so the Context file exports only components.
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export const useCart = () => {
	const context = useContext(CartContext);
	if (!context) {
		throw new Error("useCart must be used inside a CartProvider");
	}
	return context;
};

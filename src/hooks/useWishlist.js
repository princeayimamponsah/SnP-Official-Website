// Implement the `useWishlist` hook here so the Context file exports only components.
import { useContext } from "react";
import { WishlistContext } from "../context/WishlistContext";

export const useWishlist = () => {
	const context = useContext(WishlistContext);
	if (!context) {
		throw new Error("useWishlist must be used inside a WishlistProvider");
	}
	return context;
};

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { CartProvider } from "./context/CartContext"; // ✅ import provider
import { Toaster } from "react-hot-toast";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CartProvider>
      <App />
      <Toaster
        position="top-center"
        toastOptions={{
          // Default options
          duration: 3000,
          style: {
            fontFamily: 'Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial',
          },
          success: {
            duration: 2500,
            style: { background: '#16a34a', color: '#fff' },
          },
          error: {
            duration: 4000,
            style: { background: '#ef4444', color: '#fff' },
          },
        }}
      />
    </CartProvider>
  </React.StrictMode>
);

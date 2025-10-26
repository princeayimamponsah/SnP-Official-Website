import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Context
import { WishlistProvider } from "./context/WishlistContext";

// Components & Pages
import Header from "./components/Header";
import CartSidebar from "./components/CartSidebar";
import ErrorBoundary from "./components/ErrorBoundary";
import Hero from "./components/Hero";
import Category from "./components/Category";
import Services from "./components/Services";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import About from "./components/About";
import Shop from "./pages/Shop";
import CartPage from "./pages/Cart";
import Contact from "./pages/Contact";
import Wishlist from "./pages/Wishlist";
import Login from "./pages/Login"; // ✅ Added Login page import
import Signup from "./pages/Signup"; // ✅ Add Signup import
import Checkout from "./pages/Checkout";
import Policy from "./pages/Policy";
import OrderConfirmation from "./pages/OrderConfirmation";
import CustomOrder from "./pages/CustomOrder";

const App = () => {
  return (
    <WishlistProvider>
      <Router>
        {/* Cart sidebar (always mounted so it can be toggled) */}
        <CartSidebar />
        {/* Header always visible */}
        <Header />

        {/* Main content area */}
        <main className="site-main pt-[100px]">
          <ErrorBoundary>
          <Routes>
            {/* 🏠 Home Page */}
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <Category />
                  <Gallery />
                  <Services />
                  <About />
                  <Footer />
                </>
              }
            />

            {/* 🛍 Shop Page */}
            <Route
              path="/shop"
              element={
                <>
                  <Shop />
                  <Footer />
                </>
              }
            />

            {/* 🛒 Cart Page */}
            <Route
              path="/cart"
              element={
                <>
                  <CartPage />
                  <Footer />
                </>
              }
            />

            {/* ❤️ Wishlist Page */}
            <Route
              path="/wishlist"
              element={
                <>
                  <Wishlist />
                  <Footer />
                </>
              }
            />

            {/* ☎️ Contact Page */}
            <Route
              path="/contact"
              element={
                <>
                  <Contact />
                  <Footer />
                </>
              }
            />

            {/* 🔐 Login Page */}
            <Route
              path="/login"
              element={
                <>
                  <Login />
                  <Footer />
                </>
              }
            />
            <Route path="/signup" element={<Signup />} />
             <Route path="/order-confirmation" element={<OrderConfirmation />} /> 
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/custom-order" element={<CustomOrder />} />
            <Route
              path="/policy"
              element={
                <>
                  <Policy />
                  
                  <Footer />
                </>
              }
            />

          </Routes>
          </ErrorBoundary>
        </main>
      </Router>
    </WishlistProvider>
  );
};

export default App;

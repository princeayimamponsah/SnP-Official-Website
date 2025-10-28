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
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Checkout from "./pages/Checkout";
import Policy from "./pages/Policy";
import OrderConfirmation from "./pages/OrderConfirmation";
import CustomOrder from "./pages/CustomOrder";
import FloatingChat from "./components/FloatingChat"; // ✅ Import Floating Chat

const App = () => {
  return (
    <WishlistProvider>
      <Router>
        {/* 🛒 Cart sidebar (always mounted so it can be toggled) */}
        <CartSidebar />

        {/* 🧭 Header always visible */}
        <Header />

        {/* 🌍 Main content area */}
        <main className="site-main pt-[100px] relative">
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
                    {/* 💬 Floating chat visible on Home page */}
                    <FloatingChat />
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
                    <FloatingChat />
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
                    <FloatingChat />
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
                    <FloatingChat />
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
                    <FloatingChat />
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

              {/* 📜 Policy Page */}
              <Route
                path="/policy"
                element={
                  <>
                    <Policy />
                    <Footer />
                    <FloatingChat />
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

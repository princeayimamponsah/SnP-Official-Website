import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components & Pages
import Header from "./sections/Header";
import Hero from "./sections/Hero";
import Category from "./sections/Category";
import Services from "./sections/Services";
import Footer from "./sections/Footer";
import Gallery from "./sections/Gallery";
import About from "./sections/About";
import Shop from "./pages/Shop";
import CartPage from "./pages/Cart";

const App = () => {
  return (
    <Router>
      {/* Header is fixed on top, outside Routes */}
      <Header />

      {/* Main content */}
      <main className="site-main pt-[100px]">
        {/* Added padding-top so content isn’t hidden behind fixed header */}
        <Routes>
          {/* Home Page */}
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

          {/* Shop Page */}
          <Route
            path="/shop"
            element={
              <>
                <Shop />
                <Footer />
              </>
            }
          />

          {/* Cart Page */}
          <Route
            path="/cart"
            element={
              <>
                <CartPage />
                <Footer />
              </>
            }
          />
        </Routes>
      </main>
    </Router>
  );
};

export default App;

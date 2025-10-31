import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Collection from "../assets/images/Slipper Collection-2.webp";
import Product2 from "../assets/images/Product2.webp";

const Gallery = () => {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <section className="py-12 sm:py-16 bg-gray-50" data-aos="fade-up">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* 🖼️ Curated Styles */}
        <div className="mb-12 sm:mb-16 text-center" data-aos="fade-up">
          <h2
            className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2"
            data-aos="fade-down"
          >
            Curated Styles
          </h2>
          <p
            className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base"
            data-aos="fade-up"
            data-aos-delay="150"
          >
            Discover carefully selected styles from SnP that reflect your fashion taste.
          </p>

          {/* 🔸 Big Image */}
          <div
            className="relative w-full h-[220px] sm:h-[350px] md:h-[400px] rounded-lg overflow-hidden shadow-md group"
            data-aos="zoom-in"
            data-aos-delay="300"
          >
            <img
              src="/images/curated.jpg"
              alt="Curated Style"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              data-aos="fade-in"
            />
            <div
              className="absolute inset-0 bg-black/30 flex items-center justify-center"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <a
                href="/gallery"
                className="px-5 py-2 sm:px-6 sm:py-3 bg-white text-gray-900 font-semibold rounded-full shadow-md hover:bg-gray-800 hover:text-white transition text-sm sm:text-base"
                data-aos="zoom-in"
                data-aos-delay="500"
              >
                Explore
              </a>
            </div>
          </div>
        </div>

        {/* 🛍️ Featured Products */}
        <div className="text-center" data-aos="fade-up">
          <h2
            className="text-xl sm:text-2xl font-bold text-gray-800 mb-2"
            data-aos="fade-down"
          >
            Featured Products
          </h2>
          <p
            className="text-gray-600 mb-6 sm:mb-8 text-sm sm:text-base"
            data-aos="fade-up"
            data-aos-delay="150"
          >
            Our best picks hand-selected to keep you stylish every season.
          </p>

          {/* 🧱 Responsive Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6" data-aos="fade-up">
            {/* Left Image */}
            <div
              className="relative rounded-lg overflow-hidden shadow-md group"
              data-aos="fade-right"
              data-aos-delay="200"
            >
              <img
                src={Collection}
                alt="Featured Left"
                className="w-full h-[220px] sm:h-[300px] object-cover transition-transform duration-500 group-hover:scale-105"
                data-aos="zoom-in"
              />
              <div
                className="absolute inset-0 bg-black/30 flex items-center justify-center"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <a
                  href="/shop"
                  className="px-4 py-2 sm:px-5 sm:py-2 bg-white text-gray-900 rounded-lg font-medium shadow hover:bg-gray-800 hover:text-white transition text-sm sm:text-base"
                  data-aos="zoom-in"
                  data-aos-delay="400"
                >
                  View Product
                </a>
              </div>
            </div>

            {/* Right Image */}
            <div
              className="relative rounded-lg overflow-hidden shadow-md group"
              data-aos="fade-left"
              data-aos-delay="200"
            >
              <img
                src={Product2}
                alt="Featured Right"
                className="w-full h-[220px] sm:h-[300px] object-cover transition-transform duration-500 group-hover:scale-105"
                data-aos="zoom-in"
              />
              <div
                className="absolute inset-0 bg-black/30 flex items-center justify-center"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <a
                  href="/shop"
                  className="px-4 py-2 sm:px-5 sm:py-2 bg-white text-gray-900 rounded-lg font-medium shadow hover:bg-gray-800 hover:text-white transition text-sm sm:text-base"
                  data-aos="zoom-in"
                  data-aos-delay="400"
                >
                  View Product
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Gallery;

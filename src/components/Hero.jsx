import React, { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Blue from "../assets/Blue.png"; // ✅ use webp version if possible
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// Custom Prev/Next Arrows
const PrevArrow = ({ className, style, onClick }) => (
  <button
    type="button"
    className={`${className} flex items-center justify-center bg-black/30 hover:bg-black transition-all duration-300 p-2 sm:p-3 rounded-full group z-50`}
    style={{ ...style, display: "flex" }}
    onClick={onClick}
    aria-label="Previous"
  >
    <FaChevronLeft
      className="text-white transition-all duration-300 group-hover:scale-125 group-hover:-rotate-6 group-hover:text-yellow-400"
      size={18}
    />
  </button>
);

const NextArrow = ({ className, style, onClick }) => (
  <button
    type="button"
    className={`${className} flex items-center justify-center bg-black/30 hover:bg-black transition-all duration-300 p-2 sm:p-3 rounded-full group z-50`}
    style={{ ...style, display: "flex" }}
    onClick={onClick}
    aria-label="Next"
  >
    <FaChevronRight
      className="text-white transition-all duration-300 group-hover:scale-125 group-hover:rotate-6 group-hover:text-yellow-400"
      size={18}
    />
  </button>
);

const Hero = () => {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    adaptiveHeight: true,
    lazyLoad: "ondemand",
    responsive: [
      {
        breakpoint: 768, // tablets and below
        settings: {
          arrows: false,
        },
      },
    ],
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  const slides = [
    {
      title: "SnP Cross Slippers",
      subtitle: "Get up to 25% Discounts",
      text: "100% Trusted Fashion Store",
      button: "Shop Now!",
    },
    {
      title: "SnP Signature Shirts",
      subtitle: "Get up to 25% Discounts",
      text: "Be Elegant... Look Fly",
      button: "Available Now",
    },
    {
      title: "SnP 2-Piece Outfit",
      subtitle: "Get up to 25% Discounts",
      text: "Be Part of the SnP Family",
      button: "Available Now!",
    },
  ];

  return (
    <section id="hero" className="relative w-full overflow-hidden">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="w-screen">
            <div
              className="relative w-full h-[400px] sm:h-[550px] md:h-[650px] lg:h-[700px] flex flex-col justify-center items-start px-4 sm:px-10 md:px-16 bg-cover bg-center"
              style={{
                backgroundImage: `url(${Blue})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              {/* Overlay for better text visibility */}
              <div className="absolute inset-0 bg-black/40"></div>

              <div className="relative z-10">
                <motion.h1
                  variants={fadeUp}
                  initial="hidden"
                  animate="show"
                  className="text-primary border border-primary rounded-lg px-3 sm:px-5 py-1 sm:py-2 text-sm sm:text-lg md:text-2xl"
                >
                  {slide.subtitle}
                </motion.h1>

                <motion.h1
                  variants={fadeUp}
                  initial="hidden"
                  animate="show"
                  transition={{ delay: 0.2 }}
                  className="text-white font-bold uppercase text-[30px] sm:text-[45px] md:text-[70px] lg:text-[90px] leading-tight mt-3"
                >
                  {slide.title.split(" ").map((word, i) => (
                    <span key={i} className="block">
                      {word}
                    </span>
                  ))}
                </motion.h1>

                <motion.p
                  variants={fadeUp}
                  initial="hidden"
                  animate="show"
                  transition={{ delay: 0.4 }}
                  className="text-white text-sm sm:text-lg md:text-xl mt-2"
                >
                  {slide.text.includes("Fashion") ? (
                    <>
                      100% Trusted{" "}
                      <span className="text-primary font-bold">
                        Fashion Store
                      </span>
                    </>
                  ) : (
                    slide.text
                  )}
                </motion.p>

                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 200 }}
                  className="mt-4 bg-primary px-4 sm:px-6 py-2 sm:py-3 rounded-lg text-black font-semibold text-sm sm:text-base hover:scale-105 transition-all duration-300"
                >
                  {slide.button}
                </motion.button>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Hero;

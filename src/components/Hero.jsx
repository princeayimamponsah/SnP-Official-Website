import React, { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Blue from "../assets/Blue.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const PrevArrow = ({ className, style, onClick }) => (
  <button
    type="button"
    className={`${className} flex items-center justify-center bg-black/30 hover:bg-black transition-all duration-300 p-3 sm:p-4 rounded-full group z-50`}
    style={{ ...style, display: "flex" }}
    onClick={onClick}
    aria-label="Previous"
  >
    <FaChevronLeft
      className="text-white transition-all duration-300 group-hover:scale-125 group-hover:-rotate-6 group-hover:text-yellow-400"
      size={24}
    />
  </button>
);

const NextArrow = ({ className, style, onClick }) => (
  <button
    type="button"
    className={`${className} flex items-center justify-center bg-black/30 hover:bg-black transition-all duration-300 p-3 sm:p-4 rounded-full group z-50`}
    style={{ ...style, display: "flex" }}
    onClick={onClick}
    aria-label="Next"
  >
    <FaChevronRight
      className="text-white transition-all duration-300 group-hover:scale-125 group-hover:rotate-6 group-hover:text-yellow-400"
      size={24}
    />
  </button>
);

const Hero = () => {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-out",
      once: false,
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
    adaptiveHeight: true, // adjust height automatically
  };

  return (
  <section id="hero" className="relative w-full overflow-visible ">
      <Slider {...settings}>
        {/* Slide 1 */}
        <div className="w-screen">
          <div
            className="w-full h-[520px] sm:h-[650px] lg:h-[700px] flex flex-col justify-center items-start px-5 sm:px-10 lg:px-20 bg-cover bg-center"
            style={{ backgroundImage: `url(${Blue})` }}
          >
            <h1 className="text-primary border border-primary rounded-lg px-4 sm:px-6 py-1 sm:py-2 text-base sm:text-xl lg:text-2xl">
              Get up to 25% Discounts
            </h1>

            <h1 className="text-white font-bold uppercase text-[36px] sm:text-[55px] md:text-[80px] lg:text-[100px] leading-[45px] sm:leading-[60px] md:leading-[85px] lg:leading-[100px] mt-3">
              SnP <br /> Cross <br /> Slippers
            </h1>

            <p className="text-white text-base sm:text-lg md:text-xl mt-2">
              100% Trusted{" "}
              <span className="text-primary font-bold">Fashion Store</span>
            </p>

            <button className="mt-4 bg-primary px-5 sm:px-6 py-2 sm:py-3 rounded-lg text-black font-semibold text-sm sm:text-base hover:scale-105 transition-all duration-300">
              Shop Now!
            </button>
          </div>
        </div>

        {/* Slide 2 */}
        <div className="w-screen">
          <div
            className="w-full h-[420px] sm:h-[550px] lg:h-[700px] flex flex-col justify-center items-start px-5 sm:px-10 lg:px-20 bg-cover bg-center"
            style={{ backgroundImage: `url(${Blue})` }}
          >
            <h1 className="text-primary border border-primary rounded-lg px-4 sm:px-6 py-1 sm:py-2 text-base sm:text-xl lg:text-2xl">
              Get up to 25% Discounts
            </h1>

            <h1 className="text-white font-bold uppercase text-[36px] sm:text-[55px] md:text-[80px] lg:text-[100px] leading-[45px] sm:leading-[60px] md:leading-[85px] lg:leading-[100px] mt-3">
              SnP <br /> Signature <br /> Shirts
            </h1>

            <p className="text-white text-base sm:text-lg md:text-xl mt-2">
              Be Elegant... <span className="text-primary font-bold">Look Fly</span>
            </p>

            <button className="mt-4 bg-primary px-5 sm:px-6 py-2 sm:py-3 rounded-lg text-black font-semibold text-sm sm:text-base hover:scale-105 transition-all duration-300">
              Available Now
            </button>
          </div>
        </div>

        {/* Slide 3 */}
        <div className="w-screen">
          <div
            className="w-full h-[420px] sm:h-[550px] lg:h-[700px] flex flex-col justify-center items-start px-5 sm:px-10 lg:px-20 bg-cover bg-center"
            style={{ backgroundImage: `url(${Blue})` }}
          >
            <h1 className="text-primary border border-primary rounded-lg px-4 sm:px-6 py-1 sm:py-2 text-base sm:text-xl lg:text-2xl">
              Get up to 25% Discounts
            </h1>

            <h1 className="text-white font-bold uppercase text-[36px] sm:text-[55px] md:text-[80px] lg:text-[100px] leading-[45px] sm:leading-[60px] md:leading-[85px] lg:leading-[100px] mt-3">
              SnP <br /> 2-Piece <br /> Outfit
            </h1>

            <p className="text-white text-base sm:text-lg md:text-xl mt-2">
              Be Part of the <span className="text-primary font-bold">SnP Family</span>
            </p>

            <button className="mt-4 bg-primary px-5 sm:px-6 py-2 sm:py-3 rounded-lg text-black font-semibold text-sm sm:text-base hover:scale-105 transition-all duration-300">
              Available Now!
            </button>
          </div>
        </div>
      </Slider>
    </section>
  );
};

export default Hero;

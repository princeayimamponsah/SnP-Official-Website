import React from "react";
import { FaCheckCircle, FaBoxOpen, FaSmileBeam, FaHeadset } from "react-icons/fa";

const About = () => {
  return (
    <section id="about" className="min-h-screen bg-gray-100 py-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Top Title */}
        <div className="text-center mb-12">
          <h2
            className="text-3xl font-bold mb-4"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            About Us
          </h2>
          <p
            className="text-gray-700 max-w-2xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            At SnP, we are committed to redefining fashion with a mix of style,
            comfort, and originality.
          </p>
        </div>

        {/* 2 Grid Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Image + Description */}
          <div
            className="flex flex-col items-center md:items-start"
            data-aos="fade-right"
          >
            <img
              src="/about-image.jpg"
              alt="About SnP"
              className="rounded-lg shadow-lg mb-6 w-full object-cover"
              data-aos="zoom-in"
              data-aos-delay="300"
            />
            <p
              className="text-gray-600 leading-relaxed text-center md:text-left"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              Our journey started with a vision to create stylish slippers and
              fashion pieces that bring confidence and comfort to everyone.
            </p>
          </div>

          {/* Right: Checkmark Descriptions */}
          <div className="space-y-6">
            <div
              className="flex items-start space-x-4"
              data-aos="fade-left"
              data-aos-delay="100"
            >
              <FaCheckCircle className="text-green-500 text-2xl mt-1" />
              <p className="text-gray-700">
                High-quality fashion products designed with passion.
              </p>
            </div>
            <div
              className="flex items-start space-x-4"
              data-aos="fade-left"
              data-aos-delay="200"
            >
              <FaCheckCircle className="text-green-500 text-2xl mt-1" />
              <p className="text-gray-700">
                Affordable pricing without compromising on style.
              </p>
            </div>
            <div
              className="flex items-start space-x-4"
              data-aos="fade-left"
              data-aos-delay="300"
            >
              <FaCheckCircle className="text-green-500 text-2xl mt-1" />
              <p className="text-gray-700">
                Trusted by hundreds of buyers who love SnP.
              </p>
            </div>
          </div>
        </div>

        {/* Stats Bar */}
        <div
          className="mt-16 bg-white shadow-lg rounded-lg p-8 grid md:grid-cols-3 gap-6 text-center"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div
            className="flex flex-col items-center"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            <FaBoxOpen className="text-4xl text-blue-600 mb-3" />
            <h3 className="text-3xl font-bold text-gray-900">5K+</h3>
            <p className="text-gray-600">Products Sold</p>
          </div>
          <div
            className="flex flex-col items-center"
            data-aos="zoom-in"
            data-aos-delay="300"
          >
            <FaSmileBeam className="text-4xl text-yellow-500 mb-3" />
            <h3 className="text-3xl font-bold text-gray-900">3K+</h3>
            <p className="text-gray-600">Happy Buyers</p>
          </div>
          <div
            className="flex flex-col items-center"
            data-aos="zoom-in"
            data-aos-delay="400"
          >
            <FaHeadset className="text-4xl text-green-600 mb-3" />
            <h3 className="text-3xl font-bold text-gray-900">24/7</h3>
            <p className="text-gray-600">Customer Support</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

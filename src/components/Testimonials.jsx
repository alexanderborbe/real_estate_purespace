import React from "react";
import { assets, testimonialsData } from "../assets/assets";

const Testimonials = () => {
  return (
    <div
      className="container mx-auto py-20 px-6 lg:px-32 w-full"
      id="Testimonials"
    >
      <h1 className="text-2xl sm:text-4xl font-bold mb-3 text-center">
        Customer Testimonials
      </h1>
      <p className="text-center text-gray-500 mb-14 max-w-xl mx-auto">
        Real Stories from Those Who Found Home with Us
      </p>

      {/* Scrollable Quote Carousel (responsive) */}
      <div className="flex overflow-x-auto gap-6 snap-x snap-mandatory scrollbar-hide pb-4">
        {testimonialsData.map((testimonial, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-[95%] sm:w-[60%] md:w-[45%] lg:w-[32%] snap-center bg-white shadow-md rounded-2xl p-10 relative text-center h-auto min-h-[320px] flex flex-col justify-between"
          >
            {/* Decorative Quote Mark */}
            <span className="absolute top-6 left-6 text-6xl text-gray-200 font-serif">
              “
            </span>

            {/* Quote Text */}
            <p className="text-gray-700 italic mb-8 relative z-10 leading-relaxed">
              {testimonial.text}
            </p>

            {/* Author Info */}
            <div className="mt-auto">
              <img
                src={testimonial.image}
                alt={testimonial.alt}
                className="w-14 h-14 rounded-full mx-auto mb-3 object-cover border-2 border-red-400"
              />
              <h2 className="text-lg font-semibold text-gray-800">
                {testimonial.name}
              </h2>
              <p className="text-sm text-gray-500">{testimonial.title}</p>
              <div className="flex justify-center gap-1 text-red-500 mt-2">
                {Array.from({ length: testimonial.rating }, (_, i) => (
                  <img
                    key={i}
                    src={assets.star_icon}
                    alt="star"
                    className="w-4 h-4"
                  />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;

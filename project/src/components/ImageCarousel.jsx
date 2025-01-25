import React, { useState } from "react";

function ImageCarousel() {
  const images = [
    "https://www.ethiopianimporter.com/contentimageexport/Petroleum-Products.png",
    "https://www.umaexports.net/images/pulses.jpg",
    "https://5.imimg.com/data5/KM/WC/BI/SELLER-25247797/en-24-500x500.jpeg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZV6cnBdieKWqCLl0VIyqCSGztIH_dpvX_CA&s",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const getPreviousImageIndex = () => {
    return currentImageIndex === 0 ? images.length - 1 : currentImageIndex - 1;
  };

  const getNextImageIndex = () => {
    return currentImageIndex === images.length - 1 ? 0 : currentImageIndex + 1;
  };

  return (
    <section className="relative py-12 bg-gray-800 overflow-hidden">
      <div className="max-w-full mx-auto">
        {/* Text above the carousel */}
        <div className="text-center mb-14">
          <h3 className="text-6xl font-semibold text-white">Latest Consignment</h3>
          <p className="text-2xl text-gray-300 mt-4">Consignment to explore</p>
        </div>

        <div className="relative flex items-center justify-center">
          {/* Previous Image */}
          <img
            src={images[getPreviousImageIndex()]}
            alt="Previous"
            className="w-1/5 sm:w-1/4 h-auto object-cover rounded-lg shadow-lg opacity-50 transform -translate-x-1/3"
          />
          {/* Current Image */}
          <img
            src={images[currentImageIndex]}
            alt="Current"
            className="w-3/5 sm:w-2/5 h-auto object-cover rounded-lg shadow-lg z-10"
          />
          {/* Next Image */}
          <img
            src={images[getNextImageIndex()]}
            alt="Next"
            className="w-1/5 sm:w-1/4 h-auto object-cover rounded-lg shadow-lg opacity-50 transform translate-x-1/3"
          />
        </div>

        {/* Indicator Dots */}
        <div className="flex justify-center mt-4">
          {images.map((_, index) => (
            <div
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`w-3 h-3 mx-2 rounded-full cursor-pointer ${
                currentImageIndex === index ? "bg-teal-500" : "bg-gray-400"
              }`}
            ></div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ImageCarousel;

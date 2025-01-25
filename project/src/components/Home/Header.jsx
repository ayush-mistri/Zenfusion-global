import React from "react";

function Header() {
  return (
    <header
      className="relative bg-cover bg-center bg-no-repeat h-screen"
      style={{
        backgroundImage:
          "linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.7) 100%), url('https://static.vecteezy.com/system/resources/previews/032/974/784/non_2x/a-cargo-ship-is-docked-at-a-port-with-containers-ai-generative-free-photo.jpeg')",
      }}
    >

      {/* Overlay for background dimming */}
      <div className="absolute inset-0 bg-black opacity-20"></div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4 sm:px-6 lg:px-10 z-10">
        {/* Heading with animation */}
        <h1 className="mt-20 text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight animate-fade-in-up">
          Where Elegance Meets Global Trade
        </h1>

        {/* Subheading with animation */}
        <p className="mt-4 sm:mt-6 text-sm sm:text-lg lg:text-xl max-w-2xl animate-fade-in-up animation-delay-200">
          We deliver the best problem-solving solutions for our clients and
          provide the finest finishing product in the present and upcoming
          future.
        </p>

        {/* Call-to-Action Button */}
        <div className="mt-6 sm:mt-8 animate-fade-in-up animation-delay-400">
          <button className="px-6 py-3 sm:px-8 sm:py-4 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition">
            Get a Quote
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;

import React from "react";

function About_image() {
  return (
    <header
      className="relative bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.7) 100%), url('https://cdn.prod.website-files.com/647080d46194e83c48c58dcf/649eb4ff8a9449db93141604_2500-view-of-a-loaded-container-vessel-in-the-ocean-wide.webp')",
        height: "85vh", // Set height to 85% of the viewport height
      }}
    >
      {/* Overlay for background dimming */}
      <div className="absolute inset-0 bg-black opacity-30"></div>

      {/* Page name and description centered on the image */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center space-y-4">
        <span className="text-5xl font-bold">About Us</span>
        <p className="text-xl font-light">
          Learn more about our mission, vision, and values that drive us forward.
        </p>
      </div>
    </header>
  );
}

export default About_image;

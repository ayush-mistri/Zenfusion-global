import React from "react";

function Team_image() {
  return (
    <header
      className="relative bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.7) 100%), url('https://wallpaperbat.com/img/8608081-logistic-wallpaper.jpg')",
        height: "85vh", // Set height to 85% of the viewport height
      }}
    >
      {/* Overlay for background dimming */}
      <div className="absolute inset-0 bg-black opacity-30"></div>

      {/* Page name and description centered on the image */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center space-y-4">
        <span className="text-5xl font-bold">Our Team</span>
        <p className="text-xl font-light">
          Meet the passionate individuals driving our success and innovation.
        </p>
      </div>
    </header>
  );
}

export default Team_image;

import React from "react";

function Contact_image() {
  return (
    <header
      className="relative bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.8) 100%), url('https://images8.alphacoders.com/100/1005447.jpg')",
        height: "85vh", // Set height to 85% of the viewport height
      }}
    >
      {/* Overlay for background dimming */}
      <div className="absolute inset-0 bg-black opacity-40"></div>

      {/* Page name and description centered on the image */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center space-y-4">
        <span className="text-5xl font-bold">Contact Us</span>
        <p className="text-xl font-light">
          Get in touch with us for any inquiries or support. We're here to help.
        </p>
      </div>
    </header>
  );
}

export default Contact_image;

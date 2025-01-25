import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 px-5">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Logo and Social Icons */}
        <div className="flex flex-col items-start">
          <img
            src="https://aimersglobal.in/logo.png"
            alt="Aimers Global"
            className="w-32 mb-3"
          />
          <p className="text-sm">Where Elegance Meets Global Trade</p>
          <div className="flex mt-4 space-x-4">
            <a href="#" aria-label="LinkedIn" className="text-gray-400">
              <i className="fab fa-linkedin text-xl"></i>
            </a>
            <a href="#" aria-label="Twitter" className="text-gray-400">
              <i className="fab fa-twitter text-xl"></i>
            </a>
            <a href="#" aria-label="Facebook" className="text-gray-400">
              <i className="fab fa-facebook text-xl"></i>
            </a>
            <a href="#" aria-label="Instagram" className="text-gray-400">
              <i className="fab fa-instagram text-xl"></i>
            </a>
          </div>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Services</h3>
          <ul className="space-y-2 text-sm">
            <li>Import / Export</li>
            <li>Metal</li>
            <li>Aluminium</li>
            <li>Agro Product</li>
          </ul>
        </div>

        {/* Contact Us */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          <ul className="space-y-2 text-sm">
            <li>Surat, Gujarat 395004</li>
            <li>+91 94094 22097</li>
            <li>admin.consultant@aimersglobal.in</li>
            <li>Contact@aimersglobal.in</li>
          </ul>
        </div>

        {/* Subscribe */}
        {/* Subscribe */}
<div>
  <h3 className="text-lg font-semibold mb-4">Subscribe</h3>
  <form className="flex flex-wrap space-y-2 sm:space-y-0 sm:space-x-2">
    <input
      type="email"
      placeholder="example@gmail.com"
      className="flex-1 min-w-0 px-4 py-2 rounded bg-gray-800 text-sm text-gray-400"
    />
    <button className="flex-shrink-0 bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded text-sm text-white">
      Send
    </button>
  </form>
</div>

      </div>
      <div className="border-t border-gray-700 mt-10 pt-5 text-sm flex flex-col md:flex-row justify-between items-center">
        <p>Copyright © 2024 Aimers Group.</p>
        <div className="flex space-x-5 mt-2 md:mt-0">
          <a href="#" className="hover:underline">
            Terms of Use
          </a>
          <a href="#" className="hover:underline">
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

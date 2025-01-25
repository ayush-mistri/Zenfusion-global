import React from "react";

const PricingCard = ({ title, price, duration, features, buttonText, buttonAction }) => {
  return (
    <div className="bg-gradient-to-r from-gray-600 to-gray-800 text-white rounded-lg p-6 shadow-md hover:shadow-lg transform hover:scale-105 transition-transform">
      <h2 className="text-2xl font-bold text-orange-500 mb-4">{title}</h2>
      <p className="text-4xl font-semibold">
        ${price}
        <span className="text-lg text-orange-400">/{duration}</span>
      </p>
      <ul className="mt-4 space-y-3">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center space-x-2">
            <span className="text-orange-500">•</span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <button
        className="mt-6 bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded-full font-medium transition-colors"
        onClick={buttonAction}
      >
        {buttonText}
      </button>
    </div>
  );
};

export default PricingCard;

import React, { useState } from "react";

const HeaderSection = ({ onToggle }) => {
  const [isMonthly, setIsMonthly] = useState(true);

  const handleToggle = () => {
    setIsMonthly(!isMonthly);
    onToggle(isMonthly ? "Yearly" : "Monthly");
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-between text-white mb-12 max-w-6xl mx-auto space-y-6 md:space-y-0 pt-12">
      {/* Left Section */}
      <div className="text-center md:text-left space-y-4">
        <h3 className="text-lg text-orange-400 uppercase tracking-widest mb-2">
          Pricing & Packaging
        </h3>
        <h1 className="text-6xl md:text-5xl font-bold mb-4">
          Providing best pricing for client
        </h1>
      </div>

      {/* Right Section */}
      <div className="flex space-x-4 mt-4 md:mt-0">
        <button
          className={`py-2 px-6 rounded-full font-semibold ${
            isMonthly
              ? "bg-orange-500 text-white"
              : "bg-black text-white border border-orange-500"
          }`}
          onClick={handleToggle}
        >
          Monthly
        </button>
        <button
          className={`py-2 px-6 rounded-full font-semibold ${
            !isMonthly
              ? "bg-orange-500 text-white"
              : "bg-black text-white border border-orange-500"
          }`}
          onClick={handleToggle}
        >
          Yearly
        </button>
      </div>
    </div>
  );
};

export default HeaderSection;

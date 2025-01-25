import React from "react";
import { Link } from 'react-router-dom';


const DiscussionBanner = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-800">
      <div className="flex flex-col lg:flex-row items-center justify-between w-full max-w-[1100px] px-4"> 
        
        {/* Image */}
        <div className="relative lg:right-20 lg:pr-10 w-full mb-6 lg:mb-0">
          <img
            src="https://wallpapercave.com/wp/wp6324222.png" // Replace with actual image URL
            alt="Discussing people"
            className="object-cover rounded-lg w-full h-[250px] sm:h-[350px] lg:h-full" // Adjust the height for different screen sizes
          />
        </div>

        {/* Text and Button */}
        <div className="relative lg:left-15 rounded-lg text-center text-white p-6 flex flex-col justify-start items-center w-full lg:w-[50%]">
  <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
    Let’s <span className="text-red-500">discuss</span> make <br />
    something <span className="italic text-red-500">cool</span>/together
  </h1>
  <Link to="/contact">
    <button className="mt-8 inline-flex items-center text-white px-8 py-4 rounded-lg text-xl font-medium hover:text-orange-600 transition">
      Apply For Meeting
      <span className="ml-2">&rarr;</span>
    </button>
  </Link>
</div>
        
      </div>
    </div>
  );
};

export default DiscussionBanner;

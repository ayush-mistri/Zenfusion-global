import React from "react";

function AboutSection() {
  return (
    <section className="relative bg-gray-800 text-white py-16 px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="flex flex-col justify-center">
            <h2 className="text-4xl font-bold mb-4">
              Innovating International Trade
            </h2>
            <p className="text-gray-400">
              At Aimers Global, we lead in the import and export industry,
              connecting businesses worldwide with seamless trade solutions.
              With our commitment to quality and extensive network, we help you
              thrive in global commerce and unlock new opportunities.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6 text-center">
            <div className="p-8 bg-gray-700 rounded-lg shadow-lg transition-shadow duration-300 hover:shadow-xl">
              <h3 className="text-4xl font-bold">
                10<span className="text-teal-500">+</span>
              </h3>
              <p className="mt-2 text-gray-400">Global Happy Clients</p>
            </div>
            <div className="p-8 bg-gray-700 rounded-lg shadow-lg transition-shadow duration-300 hover:shadow-xl">
              <h3 className="text-4xl font-bold">
                50<span className="text-teal-500">+</span>
              </h3>
              <p className="mt-2 text-gray-400">Projects Completed</p>
            </div>
            <div className="p-8 bg-gray-700 rounded-lg shadow-lg transition-shadow duration-300 hover:shadow-xl">
              <h3 className="text-4xl font-bold">
                5<span className="text-teal-500">+</span>
              </h3>
              <p className="mt-2 text-gray-400">Team Members</p>
            </div>
            <div className="p-8 bg-gray-700 rounded-lg shadow-lg transition-shadow duration-300 hover:shadow-xl">
              <h3 className="text-4xl font-bold">
                4<span className="text-teal-500">+</span>
              </h3>
              <p className="mt-2 text-gray-400">Digital Products</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;

import React from "react";

function ServicesSection() {
  return (
    <section className="relative bg-gray-800 py-20">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="text-6xl text-white font-bold mb-8">What Can We Do</h2>
        <p className="text-gray-300 text-xl mb-12">
          Services we can help you with.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="flex flex-col items-center">
            <img
              src="https://aimersglobal.in/assets/img/service_3.jpeg"
              alt="Service 1"
              className="h-48 w-full object-cover rounded-lg"
            />
            <p className="text-white mt-6 text-center">Service 1</p>
          </div>
          <div className="flex flex-col items-center justify-end">
            <p className="text-white mb-4 text-center">Service 2</p>
            <img
              src="https://aimersglobal.in/assets/img/service_1.jpeg"
              alt="Service 2"
              className="h-48 w-full object-cover rounded-lg"
            />
          </div>
          <div className="flex flex-col items-center">
            <img
              src="https://aimersglobal.in/assets/img/service_4.jpeg"
              alt="Service 3"
              className="h-48 w-full object-cover rounded-lg"
            />
            <p className="text-white mt-6 text-center">Service 3</p>
          </div>
          <div className="flex flex-col items-center justify-end">
            <p className="text-white mb-4 text-center">Service 4</p>
            <img
              src="https://aimersglobal.in/assets/img/service_2.jpeg"
              alt="Service 4"
              className="h-48 w-full object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;

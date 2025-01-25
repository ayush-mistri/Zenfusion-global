import React from 'react';

const AboutUs = () => {
  return (
    <div className="bg-gray-800 text-white py-16 px-6 md:px-20">
      {/* Our Mission and Vision Section */}
      <section className="flex flex-col md:flex-row justify-between items-center gap-16 mb-16">
        <div className="flex-1">
          <h3 className="text-orange-500 uppercase text-sm mb-2">About Aimers Global</h3>
          <h2 className="text-5xl font-bold mb-4">Our Mission</h2>
          <p className="text-xl text-gray-400 mb-6">
            At Aimers Global, we simplify international trade by offering efficient and reliable import-export services. Our mission is to ensure smooth, compliant, and high-quality cross-border transactions. We focus on building trust with personalized solutions, transparent operations, and timely information. Whether navigating regulations or ensuring safe delivery, we are dedicated to being your trusted partner in global trade.
          </p>
          <div className="h-1 w-12 bg-orange-500"></div>
        </div>
        <img
          src="https://aimersglobal.in/assets/img/about_img_12.jpeg"
          alt="Our Mission"
          className="rounded-lg shadow-lg max-w-full md:w-1/3"
        />
      </section>

      <section className="flex flex-col md:flex-row justify-between items-center gap-16 mb-16">
        <img
          src="https://aimersglobal.in/assets/img/about_img_1.jpeg"
          alt="Our Vision"
          className="rounded-lg shadow-lg max-w-full md:w-1/3"
        />
        <div className="flex-1">
          <h2 className="text-5xl font-bold mb-4">Our Vision</h2>
          <p className="text-xl text-gray-400 mb-6">
            At Aimers Global, we aim to be a leading force in import-export, known for excellence, trust, and sustainability. Our vision is to expand our network globally, setting standards in reliability and professionalism. By embracing innovation and continuous improvement, we strive to help businesses access new markets and thrive. We are committed to ethical practices and environmental responsibility, aiming to positively impact global trade and the communities we serve.
          </p>
          <div className="h-1 w-12 bg-orange-500"></div>
        </div>
      </section>

      {/* Our Awards Section */}
      <section className="relative bg-gray-800 text-white py-16">
        <div className="relative flex flex-col md:flex-row items-start md:items-center">
          {/* Left Content */}
          <div className="flex-1 md:pr-16">
            <h3 className="text-gray-500 uppercase text-lg mb-2">Our Awards</h3>
            <h2 className="text-6xl font-bold">We get multiple awards</h2>
          </div>
          {/* Right Content: Grid */}
          <div className="grid grid-cols-2 md:grid-cols-2 gap-8 flex-1 mt-8 md:mt-0">
            <div>
              <h4 className="text-orange-500 text-3xl font-bold">2019</h4>
              <p>Global Trade Titan</p>
            </div>
            <div>
              <h4 className="text-orange-500 text-3xl font-bold">2020</h4>
              <p>International Business Icon</p>
            </div>
            <div>
              <h4 className="text-orange-500 text-3xl font-bold">2021</h4>
              <p>Export Excellence Award</p>
            </div>
            <div>
              <h4 className="text-orange-500 text-3xl font-bold">2022</h4>
              <p>Global Market Champion</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;

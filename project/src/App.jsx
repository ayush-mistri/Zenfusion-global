import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Home/Navbar";
import Footer from "./components/Home/Footer";
import Header from "./components/Home/Header";
import AboutSection from "./components/About Us/AboutSection";
import AboutUs from "./components/About Us/AboutUs";
import ServicesSection from "./components/Services/ServicesSection";
import ImageCarousel from "./components/ImageCarousel";
import CursorEffects from "./components/CursorEffects";
import Team from "./components/Team/Team";
import Contact from "./components/Contact/Contact"; 
import Contact_image from "./components/Contact/Contact_image";
import DiscussionBanner from "./components/Team/DiscussionBanner";
import Team_image from "./components/Team/Team_image";
import About_image from "./components/About Us/About_image";
import PricingPage from "./components/Services/PricingPage";
import Services_image from "./components/Services/Services_image";

function App() {
  return (
    <Router>
      <div className="App relative">
        <CursorEffects />
        <Navbar />  {/* Navbar is visible on all pages */}

        <Routes>
          {/* Define the routes for each page */}
          <Route path="/" element={<MainPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/Services" element={<ServicesPage />} />
        </Routes>

        <Footer />  {/* Footer is visible on all pages */}
      </div>
    </Router>
  );
}

function MainPage() {
  return (
    <>
      <Header />
      <AboutSection />
      <ServicesSection />
      <ImageCarousel />
      <Team />
    </>
  );
}

function ContactPage() {
  return (
    <>
      <Contact_image/>
      <Contact />  {/* Only Contact component on the /contact page */}
    </>
  );
}

function TeamPage() {
  return (
    <>
      <Team_image/>
      <Team /> 
      <DiscussionBanner/>
    </>
  );
}

function AboutPage() {
  return (
    <>
      <About_image/>
      <AboutUs /> 
    </>
  );
}

function ServicesPage() {
  return (
    <>
      <Services_image/>
      <ServicesSection /> 
      <PricingPage/>
    </>
  );
}

export default App;

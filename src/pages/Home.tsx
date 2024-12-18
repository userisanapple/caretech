import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import AboutUs from '../components/AboutUs';
import Events from '../components/Events';
import Footer from '../components/Footer';
import DetectScroll from "../components/DetectScroll";

const Home: React.FC = () => {
  return (
    <div>
      <DetectScroll />
      <Navbar />
      <HeroSection />
      <AboutUs />
      <Events />
      <Footer />
    </div>
  );
};

export default Home;
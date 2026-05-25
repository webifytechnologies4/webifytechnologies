import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import HeroSection from "./HeroSection";

import ServicesSection from "./ServicesSection";
import CTASection from "./CTASection";
import Roadmap from "./RodeMap";

const Services = () => {
  return (
    <>
      <Navbar />
      <div className="bg-white text-black overflow-hidden">
        <HeroSection />
        <Roadmap/>
        <ServicesSection />
        <CTASection />
      </div>
      <Footer />
    </>
  );
};

export default Services;
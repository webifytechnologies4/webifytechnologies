import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import HeroSection from "./HeroSection";
// import TechMarquee from "./TechMarquee";
import ServicesSection from "./ServicesSection";
import AboutSection from "./AboutSection";
import FeaturesSection from "./FeaturesSection";
import IndustriesSection from "./IndustriesSection";
import ProjectsSection from "./ProjectsSection";
import CTASection from "./CTASection";
import ClientsSection from "./ClientsSection";
import TestimonialSection from "./TestimonialSection";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="bg-white text-black overflow-hidden">
        <HeroSection />
        {/* <TechMarquee /> */}
        <ServicesSection />
        <AboutSection />
        <FeaturesSection />
        <IndustriesSection />
        <ProjectsSection />
        <CTASection />
        <ClientsSection />
        <TestimonialSection/>
      </div>
      <Footer />
    </>
  );
};

export default Home;

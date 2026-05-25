import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import HeroSection from "./HeroSection";
import CompanyStorySection from "./CompanyStorySection";
import MissionVisionSection from "./MissionVisionSection";
import TechStackSection from "./TechStackSection";
import WhyChooseUsSection from "./WhyChooseUsSection";
import ProcessSection from "./ProcessSection";
import CTASection from "./CTASection";

const About = () => {
  return (
    <>
      <Navbar />
      <div className="bg-white text-black overflow-hidden">
        <HeroSection />
        <CompanyStorySection />
        <MissionVisionSection />
        <TechStackSection />
        <WhyChooseUsSection />
        <ProcessSection />
        <CTASection />
      </div>
      <Footer />
    </>
  );
};

export default About;
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import HeroSection from "./HeroSection";
import CompanyStorySection from "./CompanyStorySection";
import MissionVisionSection from "./MissionVisionSection";
import TechStackSection from "./TechStackSection";
import WhyChooseUsSection from "./WhyChooseUsSection";
import ProcessSection from "./ProcessSection";
import CTASection from "./CTASection";
import SEO from "../../components/SEO";

const About = () => {
  return (
    <>
      <SEO 
        title="About Us | Webify Technologies" 
        description="Learn about Webify Technologies, our core values, mission, development processes, tech stack, and why we are a trusted IT partner."
        keywords="about Webify Technologies, IT company, software agency, tech stack, mission and vision"
      />
      <Navbar />
      <main className="bg-brand-white text-gray-900 overflow-x-hidden w-full">
        <HeroSection />
        <CompanyStorySection />
        <MissionVisionSection />
        <TechStackSection />
        <WhyChooseUsSection />
        <ProcessSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
};

export default About;
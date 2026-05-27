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
import SEO from "../../components/SEO";

const Home = () => {
  return (
    <>
      <SEO 
        title="Webify Technologies | Modern Website, Software & IT Solutions" 
        description="Webify Technologies builds modern, responsive websites, mobile applications, customized software, and high-performance digital solutions to scale your business."
        keywords="web development, mobile app development, customized software, IT services, UI UX design, responsive website, Ahmedabad IT company"
      />
      <Navbar />
      <main className="bg-brand-white text-gray-900 overflow-x-hidden w-full">
        <HeroSection />
        <ServicesSection />
        <AboutSection />
        <FeaturesSection />
        <IndustriesSection />
        <ProjectsSection />
        <CTASection />
        <ClientsSection />
        <TestimonialSection />
      </main>
      <Footer />
    </>
  );
};

export default Home;

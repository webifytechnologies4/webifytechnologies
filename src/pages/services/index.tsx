import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import HeroSection from "./HeroSection";
import ServicesSection from "./ServicesSection";
import CTASection from "./CTASection";
import Roadmap from "./RodeMap";
import SEO from "../../components/SEO";

const Services = () => {
  return (
    <>
      <SEO 
        title="Our Services | Webify Technologies" 
        description="Explore our professional web development, mobile app development, e-commerce development, custom software, UI/UX design, and IT consulting services."
        keywords="web development, app development, e-commerce solutions, UI UX design, custom software, digital consulting"
      />
      <Navbar />
      <main className="bg-brand-white text-gray-900 overflow-x-hidden w-full">
        <HeroSection />
        <Roadmap />
        <ServicesSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
};

export default Services;
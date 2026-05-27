import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ProjectsHero from "./ProjectsHero";
import ProjectGrid from "./ProjectGrid";
import StatsSection from "./StatsSection";
import SEO from "../../components/SEO";

const Projects = () => {
  return (
    <>
      <SEO 
        title="Our Projects | Webify Technologies Portfolio" 
        description="Explore our diverse portfolio of custom websites, mobile apps, SaaS applications, and premium digital platforms built by Webify Technologies."
        keywords="software engineering projects, mobile apps, web development portfolio, SaaS products, Webify portfolio"
      />
      <div className="sticky top-0 z-50 backdrop-blur-xl bg-white/80 border-b border-gray-200">
        <Navbar />
      </div>

      <main className="bg-brand-white text-gray-900 overflow-x-hidden w-full">
        <ProjectsHero />
        <StatsSection />
        <ProjectGrid />
      </main>

      <Footer />
    </>
  );
};

export default Projects;

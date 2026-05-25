import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ProjectsHero from "./ProjectsHero";
import ProjectGrid from "./ProjectGrid";
import StatsSection from "./StatsSection";

const Projects = () => {
  return (
    <>
      <div className="sticky top-0 z-50 backdrop-blur-xl bg-white/80 border-b border-gray-200">
        <Navbar />
      </div>

      <div className="bg-white text-black overflow-hidden">
        <ProjectsHero />
        <ProjectGrid />
        <StatsSection />
      </div>

      <Footer />
    </>
  );
};

export default Projects;

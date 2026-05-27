import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight,
  Globe,
  ShoppingCart,
} from "lucide-react";

const categories = ["All", "Websites", "E-Commerce"];

const projectsList = [
  {
    icon: <ShoppingCart size={34} />,
    title: "Viaan Enterprise",
    desc: "Custom industrial e-commerce and trading platform for valves, flanges, and piping solutions.",
    category: "E-Commerce",
    tags: ["React", "Tailwind CSS", "Vite"],
    image:
      "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=1200&auto=format&fit=crop",
    link: "http://viaanenterprise.com/",
  },
  {
    icon: <Globe size={34} />,
    title: "Sky Pathology Lab",
    desc: "Advanced clinical diagnostic management system and patient booking portal built for seamless medical reporting.",
    category: "Websites",
    tags: ["React", "Node.js", "Tailwind CSS"],
    image:
      "https://elements-resized.envatousercontent.com/elements-cover-images/7da34393-02d2-4a0b-a8ab-12f24fc354c3?w=433&cf_fit=scale-down&q=85&format=auto&s=003fd70daea501a3fff8ade24a590d2b8fc41cb96df8550b1461eb007cd0f186",
 link:"https://skypathologylab.in/"
    },
];

const ProjectGrid = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projectsList
      : projectsList.filter(
        (project) => project.category === activeCategory
      );

  return (
    <section id="portfolio-grid" aria-label="Our Creative Projects" className="relative bg-brand-white py-8 md:py-16 overflow-hidden w-full">
      {/* TOP HEADING */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-brand-light border border-brand-cyan/15 mb-6">
            <div className="w-2 h-2 rounded-full bg-brand-cyan animate-pulse" />

            <span className="text-sm font-semibold tracking-[3px] uppercase text-brand-blue">
              Webify Technologies
            </span>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold text-brand-darkBlue leading-tight">
            Our Latest
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-cyan">
              Creative Projects
            </span>
          </h2>

          <p className="max-w-3xl mx-auto mt-6 text-gray-600 text-sm md:text-lg leading-relaxed">
            We build modern websites, mobile apps and scalable software
            solutions with premium UI/UX and high performance.
          </p>
        </motion.div>

        {/* FILTERS */}
        <div className="flex flex-wrap justify-center gap-3 mt-12 mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 min-h-[48px] flex items-center justify-center
                ${activeCategory === cat
                  ? "bg-gradient-to-r from-brand-blue to-brand-cyan text-white shadow-md shadow-brand-blue/15 border-none"
                  : "bg-white border border-brand-cyan/15 text-gray-600 hover:bg-brand-light hover:text-brand-blue"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* PROJECT GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <AnimatePresence>
            {filteredProjects.map((project, i) => (
              <a
                key={project.title}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block group cursor-pointer no-underline"
              >
                <motion.div
                  layout
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10 }}
                  className="relative rounded-[30px] overflow-hidden border border-brand-cyan/10 bg-white shadow-lg shadow-brand-blue/5 hover:border-brand-cyan/35 transition-colors duration-300 h-full flex flex-col"
                >
                  {/* IMAGE */}
                  <div className="relative h-[260px] overflow-hidden">
                    <img
                      src={project.image}
                      alt={`${project.title} showcase project by Webify Technologies`}
                      className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                    {/* CATEGORY */}
                    <div className="absolute top-5 left-5 px-4 py-1 rounded-full bg-brand-light/95 backdrop-blur text-xs font-semibold text-brand-blue border border-brand-cyan/10">
                      {project.category}
                    </div>

                    {/* ICON */}
                    <div className="absolute bottom-5 left-5 w-14 h-14 rounded-2xl bg-white/15 backdrop-blur-xl border border-white/20 flex items-center justify-center text-white">
                      {project.icon}
                    </div>
                  </div>

                  {/* CONTENT */}
                  <div className="p-6 sm:p-7 flex flex-col flex-grow justify-between">
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-brand-darkBlue group-hover:text-brand-cyan transition-colors duration-300">
                        {project.title}
                      </h3>

                      <p className="mt-3 text-gray-600 leading-relaxed text-sm md:text-base">
                        {project.desc}
                      </p>
                    </div>

                    <div>
                      {/* TAGS */}
                      <div className="flex flex-wrap gap-2 mt-5">
                        {project.tags.map((tag, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 rounded-full bg-gray-100 text-gray-600 text-xs font-medium"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* ACTION LINK */}
                      <div
                        className="mt-7 flex items-center gap-2 text-brand-blue group-hover:text-brand-cyan font-semibold min-h-[48px]"
                      >
                        View Website

                        <ArrowUpRight
                          size={18}
                          className="transition duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                        />
                      </div>
                    </div>
                  </div>

                  {/* HOVER GLOW */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none bg-gradient-to-tr from-brand-blue/5 via-transparent to-brand-cyan/10" />
                </motion.div>
              </a>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default ProjectGrid;
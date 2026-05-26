import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight,
  Globe,
  Smartphone,
  LayoutDashboard,
  Rocket,
  ShoppingCart,
  Building2,
} from "lucide-react";

const categories = ["All", "Websites", "Mobile Apps", "Software", "E-Commerce"];

const projectsList = [
  {
    icon: <Globe size={34} />,
    title: "E-Commerce Website",
    desc: "Modern online shopping platform with premium UI and smooth performance.",
    category: "E-Commerce",
    tags: ["React", "Node.js", "MongoDB"],
    image:
      "https://images.unsplash.com/photo-1556740749-887f6717d7e4?q=80&w=1200&auto=format&fit=crop",
  },
  {
    icon: <LayoutDashboard size={34} />,
    title: "Business Dashboard",
    desc: "Advanced analytics dashboard with real-time data and automation.",
    category: "Software",
    tags: ["Next.js", "TypeScript", "Prisma"],
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
  },
  {
    icon: <Rocket size={34} />,
    title: "Portfolio Website",
    desc: "Creative portfolio website with smooth animations and modern UI.",
    category: "Web",
    tags: ["React", "GSAP", "Framer Motion"],
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop",
  },
  {
    icon: <Smartphone size={34} />,
    title: "Mobile App UI",
    desc: "Beautiful mobile application designs with premium user experience.",
    category: "Mobile",
    tags: ["React Native", "Expo", "Figma"],
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1200&auto=format&fit=crop",
  },
  {
    icon: <Building2 size={34} />,
    title: "Real Estate Platform",
    desc: "Property management platform with elegant design and scalability.",
    category: "Web",
    tags: ["Next.js", "Supabase", "Mapbox"],
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1200&auto=format&fit=crop",
  },
  {
    icon: <ShoppingCart size={34} />,
    title: "ERP Software",
    desc: "Enterprise software with secure and scalable architecture.",
    category: "Software",
    tags: ["React", "Django", "PostgreSQL"],
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200&auto=format&fit=crop",
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
    <section className="relative bg-white py-20 sm:py-24 overflow-hidden">
      {/* TOP HEADING */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-blue-50 border border-blue-100 mb-6">
            <div className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />

            <span className="text-sm font-semibold tracking-[3px] uppercase text-blue-700">
              Webify Technologies
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 leading-tight">
            Our Latest
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-cyan-500">
              Creative Projects
            </span>
          </h2>

          <p className="max-w-3xl mx-auto mt-6 text-gray-500 text-sm sm:text-base md:text-lg leading-relaxed">
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
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300
                ${activeCategory === cat
                  ? "bg-gradient-to-r from-blue-700 to-cyan-500 text-white shadow-lg"
                  : "bg-gray-100 text-gray-600 hover:bg-blue-50 hover:text-blue-700"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* PROJECT GRID */}
        <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-7">
          <AnimatePresence>
            {filteredProjects.map((project, i) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="group relative rounded-[30px] overflow-hidden border border-gray-200 bg-white shadow-[0_10px_40px_rgba(0,0,0,0.06)]"
              >
                {/* IMAGE */}
                <div className="relative h-[260px] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                  {/* CATEGORY */}
                  <div className="absolute top-5 left-5 px-4 py-1 rounded-full bg-white/90 backdrop-blur text-xs font-semibold text-blue-700">
                    {project.category}
                  </div>

                  {/* ICON */}
                  <div className="absolute bottom-5 left-5 w-14 h-14 rounded-2xl bg-white/15 backdrop-blur-xl border border-white/20 flex items-center justify-center text-white">
                    {project.icon}
                  </div>
                </div>

                {/* CONTENT */}
                <div className="p-6 sm:p-7">
                  <h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-700 transition">
                    {project.title}
                  </h3>

                  <p className="mt-3 text-gray-500 leading-relaxed text-sm sm:text-base">
                    {project.desc}
                  </p>

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

                  {/* BUTTON */}
                  <motion.button
                    whileHover={{ x: 5 }}
                    className="mt-7 flex items-center gap-2 text-blue-700 font-semibold"
                  >
                    View Project

                    <ArrowUpRight
                      size={18}
                      className="transition duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                    />
                  </motion.button>
                </div>

                {/* HOVER GLOW */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none bg-gradient-to-tr from-blue-500/5 via-transparent to-cyan-400/10" />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default ProjectGrid;
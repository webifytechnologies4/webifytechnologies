import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Globe, Smartphone, LayoutDashboard, Rocket, ShoppingCart, Building2 } from "lucide-react";

const categories = ["All", "Web", "Mobile", "SaaS", "E-Commerce"];

const projectsList = [
  { icon: <Globe size={42} />, title: "E-Commerce Website", desc: "Modern online store with premium UI and scalable architecture.", category: "E-Commerce", tags: ["React", "Node.js", "MongoDB"], gradient: "from-blue-200 via-sky-100 to-white" },
  { icon: <LayoutDashboard size={42} />, title: "Business Dashboard", desc: "Analytics dashboard with clean design and real-time systems.", category: "SaaS", tags: ["Next.js", "TypeScript", "Prisma"], gradient: "from-indigo-200 via-blue-100 to-white" },
  { icon: <Rocket size={42} />, title: "Portfolio Website", desc: "Modern animated portfolio website with premium interactions.", category: "Web", tags: ["React", "GSAP", "Framer Motion"], gradient: "from-sky-200 via-blue-100 to-white" },
  { icon: <Smartphone size={42} />, title: "Mobile App UI", desc: "Beautiful mobile application interfaces with smooth UX.", category: "Mobile", tags: ["React Native", "Expo", "Figma"], gradient: "from-blue-200 via-indigo-100 to-white" },
  { icon: <Building2 size={42} />, title: "Real Estate Platform", desc: "High-converting property listing and management platform.", category: "Web", tags: ["Next.js", "Supabase", "Mapbox"], gradient: "from-sky-200 via-blue-50 to-white" },
  { icon: <ShoppingCart size={42} />, title: "SaaS B2B Platform", desc: "Enterprise SaaS with role-based access and analytics.", category: "SaaS", tags: ["React", "Django", "PostgreSQL"], gradient: "from-blue-200 via-sky-100 to-white" },
];

const ProjectGrid = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const filtered = activeCategory === "All" ? projectsList : projectsList.filter((p) => p.category === activeCategory);

  return (
    <section className="px-6 md:px-20 py-16">
      <div className="text-center mb-12">
        <h2 className="text-5xl font-black">
          Featured <span className="text-blue-700">Projects</span>
        </h2>
        <p className="text-gray-500 mt-5 max-w-2xl mx-auto">
          Premium digital products crafted using modern technologies and futuristic user experiences.
        </p>
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-3 mb-14">
        {categories.map((cat) => (
          <motion.button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`px-6 py-2 rounded-full font-semibold text-sm transition-all duration-300 ${
              activeCategory === cat
                ? "bg-gradient-to-r from-blue-700 to-sky-500 text-white shadow-lg shadow-blue-300/40"
                : "bg-gray-100 text-gray-600 hover:bg-blue-50 hover:text-blue-700"
            }`}
          >
            {cat}
          </motion.button>
        ))}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <AnimatePresence>
          {filtered.map((project, i) => (
            <motion.div
              key={project.title}
              layout
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -15, scale: 1.02 }}
              className="group relative rounded-[35px] bg-white border border-blue-100 shadow-xl overflow-hidden"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-blue-500/8" />

              <div className="h-56 relative overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} group-hover:scale-110 transition duration-700`} />
                <div className="absolute inset-0 m-auto flex items-center justify-center text-blue-600 opacity-80">
                  {project.icon}
                </div>
                <div className="absolute top-5 left-5 bg-white/80 backdrop-blur px-4 py-1 rounded-full text-xs font-semibold text-blue-700 border border-blue-100">
                  {project.category}
                </div>
              </div>

              <div className="p-8">
                <h3 className="text-xl font-bold group-hover:text-blue-700 transition">{project.title}</h3>
                <p className="text-gray-500 mt-3 leading-relaxed text-sm">{project.desc}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tags.map((tag, j) => (
                    <span key={j} className="text-xs font-medium text-gray-500 bg-gray-100 px-3 py-1 rounded-full">{tag}</span>
                  ))}
                </div>
                <div className="mt-6 flex items-center gap-2 text-blue-700 font-semibold cursor-pointer text-sm">
                  View Project
                  <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition" />
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ProjectGrid;

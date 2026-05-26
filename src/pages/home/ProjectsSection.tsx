import { motion } from "framer-motion";
import {
  ArrowRight,
  Sparkles,
  Globe,
  MonitorSmartphone,
  Layers3,
} from "lucide-react";

const projects = [
  {
    title: "Business Growth Platform",
    desc: "Modern enterprise platform with automation, analytics & cloud integration.",
    image:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1200&auto=format&fit=crop",
    icon: Globe,
  },
  {
    title: "Mobile App Experience",
    desc: "Premium mobile UI/UX designed for speed, engagement and scalability.",
    image:
      "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?q=80&w=1200&auto=format&fit=crop",
    icon: MonitorSmartphone,
  },
  {
    title: "SaaS Dashboard System",
    desc: "Powerful dashboard with real-time insights and futuristic interactions.",
    image:
      "https://images.unsplash.com/photo-1558655146-9f40138edfeb?q=80&w=1200&auto=format&fit=crop",
    icon: Layers3,
  },
];

const ProjectsSection = () => {
  return (
    <section className="relative overflow-hidden bg-white py-8 md:py-12">
      {/* Background Glow */}
      <div className="absolute top-0 left-0 h-[260px] w-[260px] md:h-[450px] md:w-[450px] rounded-full bg-blue-100 blur-3xl opacity-70" />

      <div className="absolute bottom-0 right-0 h-[220px] w-[220px] md:h-[400px] md:w-[400px] rounded-full bg-sky-100 blur-3xl opacity-70" />

      {/* Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 md:px-0">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="mb-12 md:mb-14 text-center"
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 md:px-5">
            <Sparkles size={14} className="text-blue-600" />

            <span className="text-[11px] md:text-sm font-semibold uppercase tracking-[3px] md:tracking-widest text-blue-700">
              Featured Works
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-7xl font-black leading-tight text-gray-900">
            Creative Digital

            <span className="block bg-gradient-to-r from-blue-600 via-sky-500 to-cyan-500 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>

          <p className="mx-auto mt-5 md:mt-6 max-w-6xl text-base md:text-lg leading-relaxed text-gray-900 px-1">
            We design modern digital experiences with premium UI, powerful
            development and immersive user interactions.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">

          {projects.map((project, i) => {
            const Icon = project.icon;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: i * 0.2,
                }}
                viewport={{ once: true }}
                whileHover={{ y: -14 }}
                className="group relative overflow-hidden rounded-lg border border-gray-300 bg-white shadow-xl shadow-black/10 md:shadow-black/50 transition duration-500"
              >

                {/* Hover Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-sky-400/0 to-cyan-400/0 opacity-0 transition duration-700 group-hover:opacity-100 group-hover:from-blue-500/5 group-hover:via-sky-400/10 group-hover:to-cyan-400/5" />

                {/* Image */}
                <div className="relative h-60 sm:h-72 overflow-hidden">

                  <motion.img
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.7 }}
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

                  {/* Floating Glass Icon */}
                  <motion.div
                    animate={{
                      y: [0, -10, 0],
                    }}
                    transition={{
                      repeat: Infinity,
                      duration: 4,
                    }}
                    className="absolute bottom-4 left-4 md:bottom-6 md:left-6 flex h-14 w-14 md:h-16 md:w-16 items-center justify-center rounded-2xl border border-white/20 bg-white/20 backdrop-blur-xl"
                  >
                    <Icon size={24} className="text-white md:w-[30px] md:h-[30px]" />
                  </motion.div>

                  {/* Tag */}
                  <div className="absolute top-4 right-4 md:top-5 md:right-5 rounded-full bg-white/80 px-4 py-1.5 md:px-6 md:py-2 text-[10px] md:text-xs font-bold uppercase tracking-wider text-blue-700 backdrop-blur-xl">
                    Premium
                  </div>
                </div>

                {/* Content */}
                <div className="relative p-5 md:p-8">

                  <h3 className="text-xl md:text-2xl font-black text-gray-900 transition duration-300 group-hover:text-blue-700">
                    {project.title}
                  </h3>

                  <p className="mt-3 md:mt-4 leading-relaxed text-sm md:text-base text-gray-500">
                    {project.desc}
                  </p>

                  {/* Button */}
                  <motion.button
                    whileHover={{ x: 5 }}
                    className="mt-6 md:mt-7 flex items-center gap-3 font-semibold text-blue-700 text-sm md:text-base"
                  >
                    View Project

                    <ArrowRight
                      size={18}
                      className="transition duration-300 group-hover:translate-x-2"
                    />
                  </motion.button>
                </div>

                {/* Shine Animation */}
                <div className="absolute -left-32 top-0 h-full w-24 rotate-12 bg-white/40 blur-2xl transition-all duration-1000 group-hover:left-[120%]" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
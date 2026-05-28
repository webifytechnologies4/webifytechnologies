import { motion } from "framer-motion";
import {
  ArrowRight,
  Sparkles,
  ShoppingCart,
  Microscope,
  HeartPulse,
} from "lucide-react";

import pethoLogo from "../../assets/homeclients/client3.webp";
import viaanLogo from "../../assets/homeclients/client2.png";
import medilifeLogo from "../../assets/homeclients/client1.jpg";


const projects = [
  {
    title: "Viaan Enterprise",
    desc: "Online grocery marketplace offering fresh vegetables, fruits, grains, and daily essential products with seamless shopping experience.",
    image: viaanLogo,
    icon: ShoppingCart,
    link: "http://viaanenterprise.com/",
    category: "Grocery Marketplace",
    tags: ["React", "Tailwind CSS", "Vite"],
  },
  {
    title: "Sky Pathology Lab",
    desc: "Advanced clinical diagnostic management system and patient booking portal built for seamless medical reporting.",
    image: pethoLogo,
    icon: Microscope,
    link: "https://skypathologylab.in/",
    category: "Pathology Lab Website",
    tags: ["React", "Node.js", "Tailwind CSS"],
  },
  {
    title: "Life-Made",
    desc: "Modern medical healthcare platform designed for patient care, health services, and seamless medical management experience.",
    image: medilifeLogo,
    icon: HeartPulse,
    link: "https://life-made.vercel.app/",
    category: "Medical Website",
    tags: ["React", "Tailwind CSS", "Python", "Django"],
  },
];

const ProjectsSection = () => {
  return (
    <section
      id="projects-section"
      aria-label="Our Featured Projects"
      className="relative overflow-hidden bg-brand-white py-12 md:py-20"
    >
      {/* Background Glow */}
      <div className="absolute top-0 left-0 h-[260px] w-[260px] md:h-[450px] md:w-[450px] rounded-full bg-brand-blue/10 blur-3xl opacity-70" />

      <div className="absolute bottom-0 right-0 h-[220px] w-[220px] md:h-[400px] md:w-[400px] rounded-full bg-brand-cyan/10 blur-3xl opacity-70" />

      {/* Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-8 lg:px-16">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="mb-14 text-center"
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-brand-cyan/30 bg-brand-light px-4 py-2 md:px-5">
            <Sparkles size={14} className="text-brand-blue" />

            <span className="text-[11px] md:text-sm font-semibold uppercase tracking-[3px] md:tracking-widest text-brand-blue">
              Featured Works
            </span>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold leading-tight text-brand-darkBlue">
            Creative Digital
            <span className="block bg-gradient-to-r from-brand-darkBlue via-brand-blue to-brand-cyan bg-clip-text text-transparent">
              Projects
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-sm md:text-lg leading-relaxed text-gray-600">
            We design modern digital experiences with premium UI, powerful
            development and immersive user interactions.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

          {projects.map((project, i) => {
            const Icon = project.icon;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.7,
                  delay: i * 0.15,
                }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="group relative overflow-hidden rounded-[24px] border border-gray-200 bg-white shadow-[0_10px_40px_rgba(0,0,0,0.06)] hover:shadow-[0_18px_60px_rgba(0,0,0,0.10)] transition-all duration-500"
              >

                {/* Hover Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/0 via-brand-cyan/0 to-brand-cyan/0 opacity-0 transition duration-700 group-hover:opacity-100 group-hover:from-brand-blue/5 group-hover:via-brand-cyan/10 group-hover:to-brand-cyan/5" />

                {/* Image */}
                <div className="relative h-[220px] md:h-[240px] overflow-hidden">

                  <motion.img
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 0.7 }}
                    src={project.image}
                    alt={`${project.title} representation image`}
                    className="h-full w-full object-cover"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

                  {/* Floating Icon */}
                  <motion.div
                    animate={{
                      y: [0, -8, 0],
                    }}
                    transition={{
                      repeat: Infinity,
                      duration: 4,
                    }}
                    className="absolute bottom-5 left-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/20 bg-white/20 backdrop-blur-xl"
                  >
                    <Icon
                      size={24}
                      className="text-white"
                    />
                  </motion.div>

                  {/* Category */}
                  <div className="absolute top-5 right-5 rounded-full bg-white/80 px-4 py-1.5 text-[10px] font-bold uppercase tracking-wider text-brand-blue backdrop-blur-xl">
                    {project.category}
                  </div>
                </div>

                {/* Content */}
                <div className="relative px-5 py-5 md:px-6 md:py-6">

                  <h3 className="text-lg md:text-[22px] font-bold text-brand-darkBlue transition duration-300 group-hover:text-brand-blue">
                    {project.title}
                  </h3>

                  <p className="mt-3 leading-relaxed text-sm text-gray-600">
                    {project.desc}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mt-5">
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 rounded-full bg-brand-light text-brand-blue text-[11px] font-semibold border border-brand-cyan/10"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Button */}
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <motion.button
                      whileHover={{ x: 4 }}
                      className="mt-5 flex items-center gap-2 font-semibold text-brand-blue text-sm md:text-base focus:outline-none"
                    >
                      View Website

                      <ArrowRight
                        size={18}
                        className="transition duration-300 group-hover:translate-x-1"
                      />
                    </motion.button>
                  </a>
                </div>

                {/* Shine Animation */}
                <div className="absolute -left-32 top-0 h-full w-20 rotate-12 bg-white/40 blur-2xl transition-all duration-1000 group-hover:left-[120%]" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const bgImages = [
  "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop",
];

const services = [
  { name: "Website", desc: "Modern & Fast" },
  { name: "Software", desc: "Scalable Systems" },
  { name: "Mobile Apps", desc: "iOS & Android" },
  { name: "UI/UX", desc: "Clean Design" },
];

const ProjectsHero = () => {
  const [currentBg, setCurrentBg] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % bgImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden bg-black flex items-center px-4 sm:px-6 md:px-20 py-8 md:py-16">

      {/* BACKGROUND */}
      <div className="absolute inset-0">
        <AnimatePresence mode="wait">
          <motion.img
            key={currentBg}
            src={bgImages[currentBg]}
            alt="Webify Technologies showcase projects slide background image"
            initial={{ opacity: 0, scale: 1.2 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 1.8 }}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </AnimatePresence>
      </div>

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/80 z-10" />

      {/* GLOW */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-cyan/20 blur-[120px] rounded-full z-10"
      />

      {/* MAIN GRID */}
      <div className="relative z-30 w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-16">

        {/* LEFT SIDE */}
        <div className="text-left max-w-2xl w-full">

          {/* BADGE */}
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-brand-cyan tracking-[3px] md:tracking-[6px] uppercase text-[10px] md:text-xs font-semibold mb-5 sm:mb-6"
          >
            DESIGN • DEVELOP • DELIVER
          </motion.p>

          {/* TITLE */}
          <motion.h1
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-4xl md:text-6xl font-bold leading-[1.05] text-white"
          >
            Turning Ideas Into
            <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan via-brand-white to-brand-cyan">
              Digital Reality
            </span>
          </motion.h1>

          {/* DESCRIPTION */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-5 sm:mt-6 text-gray-200 text-sm md:text-lg"
          >
            We design and build high-performance websites, apps, and software
            solutions that help businesses grow faster with modern technology.
          </motion.p>

          {/* BUTTONS */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            className="mt-7 sm:mt-8 flex flex-col sm:flex-row gap-4"
          >
            <Link to="/projects" className="w-full sm:w-auto">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-7 sm:px-8 py-3.5 sm:py-4 rounded-full bg-gradient-to-r from-brand-blue to-brand-cyan text-white font-semibold shadow-lg w-full sm:w-auto min-h-[48px] flex items-center justify-center border-none"
              >
                Explore Projects
              </motion.button>
            </Link>

            <Link to="/contact" className="w-full sm:w-auto">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-7 sm:px-8 py-3.5 sm:py-4 rounded-full border border-white/40 bg-white/10 text-white backdrop-blur-md w-full sm:w-auto min-h-[48px] flex items-center justify-center"
              >
                Start Your Project
              </motion.button>
            </Link>
          </motion.div>
        </div>

        {/* RIGHT SIDE FLOATING SERVICES */}
        <div className="w-full max-w-md grid grid-cols-2 gap-4 sm:gap-6 mt-10 lg:mt-0">

          {services.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={{
                opacity: 1,
                y: [0, -8, 0],
              }}
              transition={{
                duration: 3 + i,
                repeat: Infinity,
              }}
              className="rounded-2xl border border-brand-cyan/15 bg-white/5 backdrop-blur-xl p-4 sm:p-6 text-center shadow-xl hover:border-brand-cyan/35 transition-colors duration-300"
            >
              <h3 className="text-white font-bold text-sm md:text-base">
                {item.name}
              </h3>
              <p className="text-gray-300 text-[10px] sm:text-xs mt-2">
                {item.desc}
              </p>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default ProjectsHero;
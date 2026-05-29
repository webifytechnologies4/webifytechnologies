import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import bgImage from "../../assets/serviceshero/hero1.jpeg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen py-30 flex items-center justify-center overflow-hidden">

      {/* BACKGROUND IMAGE */}
      <motion.img
        src={bgImage}
        alt="Webify Technologies collaborative IT services team background"
        initial={{ scale: 1.2, opacity: 0 }}
        animate={{ scale: 1.05, opacity: 1 }}
        transition={{ duration: 1.8, ease: "easeOut" }}
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/70" />

      {/* SOFT GLOW */}
      <div className="absolute w-[500px] h-[500px] bg-brand-cyan/20 blur-[140px] rounded-full top-10 left-10" />
      <div className="absolute w-[400px] h-[400px] bg-brand-blue/20 blur-[140px] rounded-full bottom-10 right-10" />

      {/* CONTENT */}
      <div className="relative z-10 text-center max-w-6xl px-4 ">

        {/* BADGE */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="inline-flex items-center gap-2 mt-13 md:mt-0 px-5 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-xl mb-6"
        >
          <div className="w-2 h-2 bg-brand-cyan rounded-full animate-pulse" />

          {/*  FIX: force single line on mobile */}
          <span className="text-brand-cyan text-[10px] sm:text-sm uppercase tracking-[3px] font-semibold whitespace-nowrap">
            Services • Solutions • Support
          </span>
        </motion.div>

        {/* TITLE */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold text-white leading-tight"
        >
          We Build & Scale
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan via-brand-white to-brand-cyan">
            Digital Services
          </span>
        </motion.h1>

        {/* DESCRIPTION */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-3 text-gray-200 text-sm md:text-lg"
        >
          From websites to mobile apps and enterprise solutions — we deliver
          high-quality digital services tailored for your business growth.
        </motion.p>

        {/* BUTTONS (RESPONSIVE FIX) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
          className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4 w-full"
        >

          <Link to="/services" className="w-full sm:w-auto">
            <motion.button
              onClick={() => {
                document.getElementById("services-list")?.scrollIntoView({
                  behavior: "smooth",
                });
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-brand-blue to-brand-cyan text-white font-semibold shadow-lg min-h-[48px] flex items-center justify-center"
            >
              Explore Services
            </motion.button>
          </Link>

          <Link to="/contact" className="w-full sm:w-auto">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto px-8 py-4 rounded-full border border-white/40 text-white backdrop-blur-md min-h-[48px] flex items-center justify-center bg-transparent"
            >
              Talk to Expert
            </motion.button>
          </Link>

        </motion.div>

      </div>
    </section>
  );
};

export default HeroSection;
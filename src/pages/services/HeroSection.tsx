import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const bgImage =
  "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2070&auto=format&fit=crop";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden  ">

      {/* BACKGROUND IMAGE */}
      <motion.img
        src={bgImage}
        initial={{ scale: 1.2, opacity: 0 }}
        animate={{ scale: 1.05, opacity: 1 }}
        transition={{ duration: 1.8, ease: "easeOut" }}
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/70" />

      {/* SOFT GLOW */}
      <div className="absolute w-[500px] h-[500px] bg-cyan-500/20 blur-[140px] rounded-full top-10 left-10" />
      <div className="absolute w-[400px] h-[400px] bg-blue-500/20 blur-[140px] rounded-full bottom-10 right-10" />

      {/* CONTENT */}
      <div className="relative z-10 text-center max-w-4xl px-4">

        {/* BADGE */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-xl mb-6"
        >
          <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />

          {/*  FIX: force single line on mobile */}
          <span className="text-cyan-200 text-[10px] sm:text-sm uppercase tracking-[3px] font-semibold whitespace-nowrap">
            Services • Solutions • Support
          </span>
        </motion.div>

        {/* TITLE */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-5xl md:text-6xl font-black text-white leading-tight"
        >
          We Build & Scale
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-500">
            Digital Services
          </span>
        </motion.h1>

        {/* DESCRIPTION */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-6 text-gray-300 text-sm sm:text-base md:text-lg"
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
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-cyan-400 to-blue-600 text-black font-semibold shadow-lg"
            >
              Explore Services
            </motion.button>
          </Link>

          <Link to="/contact" className="w-full sm:w-auto">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto px-8 py-4 rounded-full border border-white/30 text-white backdrop-blur-md"
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
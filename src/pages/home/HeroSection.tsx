import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useMotionValue, useTransform } from "framer-motion";
import gsap from "gsap";
import { Link } from "react-router-dom";

const bgImages = [
  "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1484417894907-623942c8ee29?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=2070&auto=format&fit=crop",
];

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const [currentBg, setCurrentBg] = useState(0);

  // Mouse Parallax
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useTransform(mouseY, [-300, 300], [10, -10]);
  const rotateY = useTransform(mouseX, [-300, 300], [-10, 10]);

  useEffect(() => {
    gsap.fromTo(
      heroRef.current,
      { opacity: 0, y: 120 },
      {
        opacity: 1,
        y: 0,
        duration: 1.4,
        ease: "power4.out",
      }
    );
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % bgImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    const x = e.clientX - window.innerWidth / 2;
    const y = e.clientY - window.innerHeight / 2;

    mouseX.set(x);
    mouseY.set(y);
  };

  return (
    <section
      onMouseMove={handleMouseMove}
      className="relative min-h-screen overflow-hidden flex items-center justify-center bg-black pt-20 sm:pt-24 md:pt-0"
    >
      {/* BACKGROUND SLIDER */}
      <div className="absolute inset-0">
        <AnimatePresence mode="wait">
          <motion.img
            key={currentBg}
            src={bgImages[currentBg]}
            alt=""
            initial={{ opacity: 0, scale: 1.15 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.08 }}
            transition={{ duration: 2, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </AnimatePresence>
      </div>

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/70 z-10" />

      {/* GRID OVERLAY */}
      <div className="absolute inset-0 z-10 opacity-20">
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* GLOW ORBS */}
      <motion.div
        animate={{ x: [0, 80, -40, 0], y: [0, -50, 50, 0] }}
        transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }}
        className="absolute top-20 left-20 w-[400px] h-[400px] bg-sky-500/20 rounded-full blur-[120px] z-10"
      />

      <motion.div
        animate={{ x: [0, -50, 40, 0], y: [0, 60, -40, 0] }}
        transition={{ repeat: Infinity, duration: 14, ease: "easeInOut" }}
        className="absolute bottom-10 right-10 w-[350px] h-[350px] bg-blue-700/20 rounded-full blur-[120px] z-10"
      />

      {/* MOUSE GLOW */}
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full bg-sky-400/10 blur-[120px] pointer-events-none z-20"
        animate={{
          x: mouseX.get(),
          y: mouseY.get(),
        }}
        transition={{ type: "spring", stiffness: 50, damping: 20 }}
      />

      {/* HERO CONTENT */}
      <motion.div
        ref={heroRef}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className="relative z-30 max-w-7xl text-center px-4 sm:px-6 md:px-0"
      >
        {/* BADGE */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 rounded-full border border-sky-400/40 bg-white/10 backdrop-blur-xl mb-6 sm:mb-8"
        >
          <div className="w-2 h-2 bg-sky-400 rounded-full animate-ping" />
          <span className="text-sky-300 text-sm sm:text-base font-medium tracking-wide">
            Webify Technologies
          </span>
        </motion.div>

        {/* HEADING */}
        <motion.h1
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight text-white"
        >
          Build Future Ready
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-sky-300 via-blue-400 to-sky-500 animate-pulse">
            Digital Products
          </span>
        </motion.h1>

        {/* TEXT */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="max-w-3xl mx-auto mt-6 sm:mt-8 text-sm sm:text-lg md:text-xl text-gray-300 leading-relaxed"
        >
          We craft high-performance websites, applications and immersive
          digital experiences with premium UI/UX and futuristic development.
        </motion.p>

        {/* BUTTONS */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
          className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4 sm:gap-6 mt-8 sm:mt-12 w-full"
        >
          <Link to="/contact" className="w-full sm:w-auto">
            <motion.button
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-blue-700 to-sky-500 text-white font-semibold shadow-lg"
            >
              Start Project
            </motion.button>
          </Link>

          <Link to="/services" className="w-full sm:w-auto">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto px-8 py-4 rounded-full border border-sky-400/60 text-sky-300 font-semibold backdrop-blur-md"
            >
              Explore Services
            </motion.button>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
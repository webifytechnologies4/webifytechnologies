import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useMotionValue, useTransform } from "framer-motion";
import gsap from "gsap";
import { Link } from "react-router-dom";

import hero1 from "../../assets/homehero/hero1.avif";
import hero2 from "../../assets/homehero/hero2.jpeg";
import hero3 from "../../assets/homehero/hero3.avif";


const bgImages = [hero1, hero2, hero3];

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
      aria-label="Introduction Hero"
      className="relative min-h-screen overflow-hidden flex items-center justify-center bg-brand-darkBlue pt-20 sm:pt-24 md:pt-10"
    >
      {/* BACKGROUND SLIDER */}
      <div className="absolute inset-0">
        <AnimatePresence mode="wait">
          <motion.img
            key={currentBg}
            src={bgImages[currentBg]}
            alt="Futuristic software development environment and code lines"
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
      <div className="absolute inset-0 z-10 opacity-50">
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
        className="absolute top-20 left-20 w-[400px] h-[400px] bg-brand-cyan/20 rounded-full blur-[120px] z-10"
      />

      <motion.div
        animate={{ x: [0, -50, 40, 0], y: [0, 60, -40, 0] }}
        transition={{ repeat: Infinity, duration: 14, ease: "easeInOut" }}
        className="absolute bottom-10 right-10 w-[350px] h-[350px] bg-brand-blue/20 rounded-full blur-[120px] z-10"
      />

      {/* MOUSE GLOW */}
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full bg-brand-cyan/10 blur-[120px] pointer-events-none z-20"
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
        className="relative z-30 max-w-7xl text-center px-4 md:px-8 lg:px-16"
      >
        {/* BADGE */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 rounded-full border border-brand-cyan/40 bg-white/10 backdrop-blur-xl mb-6 sm:mb-4"
        >
          <div className="w-2 h-2 bg-brand-cyan rounded-full animate-ping" />
          <span className="text-brand-cyan text-sm sm:text-base font-medium tracking-wide">
            Webify Technologies
          </span>
        </motion.div>

        {/* HEADING */}
        <motion.h1
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl font-bold leading-tight text-white"
        >
          Build Future Ready
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan via-brand-white to-brand-cyan animate-pulse">
            Digital Products
          </span>
        </motion.h1>

        {/* TEXT */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="max-w-3xl mx-auto mt-6 sm:mt-8 text-sm md:text-lg text-gray-300 leading-relaxed"
        >
          We craft high-performance websites, applications and immersive
          digital experiences with premium UI/UX and futuristic development.
        </motion.p>

        {/* BUTTONS */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
          className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 mt-8 sm:mt-12 w-full px-4 md:px-0"
        >
          <Link to="/contact" className="w-full md:w-auto">
            <motion.button
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.95 }}
              className="w-full md:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-brand-blue to-brand-cyan hover:from-brand-darkBlue hover:to-brand-blue text-white font-semibold shadow-lg min-h-[48px]"
            >
              Start Project
            </motion.button>
          </Link>

          <Link to="/services" className="w-full md:w-auto">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full md:w-auto px-8 py-4 rounded-full border border-brand-cyan/60 text-brand-cyan font-semibold backdrop-blur-md min-h-[48px]"
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
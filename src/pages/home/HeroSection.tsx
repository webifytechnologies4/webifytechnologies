import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useMotionValue, useTransform } from "framer-motion";
import gsap from "gsap";

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
      className="relative min-h-screen overflow-hidden flex items-center justify-center bg-black"
    >
      {/* BACKGROUND SLIDER */}
      <div className="absolute inset-0">
        <AnimatePresence mode="wait">
          <motion.img
            key={currentBg}
            src={bgImages[currentBg]}
            alt=""
            initial={{ opacity: 0, scale: 1.15 }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              scale: 1.08,
            }}
            transition={{
              duration: 2,
              ease: "easeInOut",
            }}
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
        animate={{
          x: [0, 80, -40, 0],
          y: [0, -50, 50, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 12,
          ease: "easeInOut",
        }}
        className="absolute top-20 left-20 w-[400px] h-[400px] bg-sky-500/20 rounded-full blur-[120px] z-10"
      />

      <motion.div
        animate={{
          x: [0, -50, 40, 0],
          y: [0, 60, -40, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 14,
          ease: "easeInOut",
        }}
        className="absolute bottom-10 right-10 w-[350px] h-[350px] bg-blue-700/20 rounded-full blur-[120px] z-10"
      />

      {/* MOUSE GLOW */}
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full bg-sky-400/10 blur-[120px] pointer-events-none z-20"
        animate={{
          x: mouseX.get(),
          y: mouseY.get(),
        }}
        transition={{
          type: "spring",
          stiffness: 50,
          damping: 20,
        }}
      />



  

      {/* HERO CONTENT */}
      <motion.div
        ref={heroRef}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className="relative z-30 max-w-7xl text-center px-6 md:px-0"
      >
        {/* BADGE */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          whileHover={{
            scale: 1.08,
          }}
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-sky-400/40 bg-white/10 backdrop-blur-xl mb-8"
        >
          <div className="w-2 h-2 bg-sky-400 rounded-full animate-ping" />

          <span className="text-sky-300 font-medium tracking-wide">
            Webify Technologies
          </span>
        </motion.div>

        {/* HEADING */}
        <motion.h1
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            ease: "easeOut",
          }}
          className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight text-white"
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
          className="max-w-3xl mx-auto mt-8 text-lg md:text-xl text-gray-300 leading-relaxed"
        >
          We craft high-performance websites, applications and immersive
          digital experiences with premium UI/UX and futuristic development.
        </motion.p>

        {/* BUTTONS */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
          className="flex flex-col md:flex-row items-center justify-center gap-6 mt-12"
        >
          <motion.button
            whileHover={{
              scale: 1.08,
              boxShadow: "0px 0px 40px rgba(56,189,248,0.7)",
            }}
            whileTap={{ scale: 0.95 }}
            className="relative overflow-hidden bg-gradient-to-r from-blue-700 to-sky-500 text-white px-9 py-4 rounded-full font-semibold"
          >
            <span className="relative z-10">Start Project</span>

            <motion.div
              animate={{
                x: ["-100%", "200%"],
              }}
              transition={{
                repeat: Infinity,
                duration: 2,
                ease: "linear",
              }}
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
            />
          </motion.button>

          <motion.button
            whileHover={{
              scale: 1.05,
              backgroundColor: "rgba(56,189,248,0.1)",
            }}
            whileTap={{ scale: 0.95 }}
            className="border border-sky-400/60 text-sky-300 px-9 py-4 rounded-full font-semibold backdrop-blur-md"
          >
            Explore Services
          </motion.button>
        </motion.div>

      </motion.div>
    </section>
  );
};

export default HeroSection;
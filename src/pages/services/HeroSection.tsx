import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const heroSlides = [
  {
    title: "Modern Website Development",
    desc: "Premium responsive websites designed to grow your business with modern UI/UX and high performance architecture.",
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1600&auto=format&fit=crop",
  },
  {
    title: "Scalable E-Commerce Solutions",
    desc: "High-converting online stores with secure payment integration, fast performance and premium shopping experience.",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1600&auto=format&fit=crop",
  },
  {
    title: "Powerful Web & Mobile Apps",
    desc: "Custom web applications and mobile apps built with scalable technologies for startups and businesses.",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1600&auto=format&fit=crop",
  },
];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* BACKGROUND IMAGE */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          <img
            src={heroSlides[currentSlide].image}
            className="w-full h-full object-cover"
            alt="Hero Background"
          />
        </motion.div>
      </AnimatePresence>

      {/* DARK PREMIUM OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/30" />

      {/* CONTENT */}
      <div className="relative z-10 px-6 md:px-20 w-full max-w-5xl text-white">
        {/* BADGE */}
        <div className="inline-block mb-6 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-md text-sm text-white/80">
          🚀 We Build Digital Products That Scale
        </div>

        {/* TITLE */}
        <motion.h1
          key={heroSlides[currentSlide].title}
          className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {heroSlides[currentSlide].title}
        </motion.h1>

        {/* DESCRIPTION */}
        <motion.p
          key={heroSlides[currentSlide].desc}
          className="mt-6 text-white/80 text-base md:text-lg max-w-2xl leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          {heroSlides[currentSlide].desc}
        </motion.p>

        {/* BUTTONS */}
        <div className="flex flex-wrap gap-5 mt-10">
          <button className="px-8 py-4 rounded-full bg-cyan-500 text-black font-semibold hover:scale-105 transition">
            Start Project
          </button>

          <button className="px-8 py-4 rounded-full bg-white/10 border border-white/30 backdrop-blur-md text-white hover:bg-white/20 transition">
            Free Consultation
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

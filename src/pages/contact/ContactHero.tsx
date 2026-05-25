import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const heroImages = [
  "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=2000&q=80",

  "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=2000&q=80",

  "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=2000&q=80",
];

const Typewriter = ({ text }: { text: string }) => {
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let i = 0;

    const interval = setInterval(() => {
      setDisplayText(text.slice(0, i));
      i++;

      if (i > text.length) clearInterval(interval);
    }, 120);

    return () => clearInterval(interval);
  }, [text]);

  return (
    <h1 className="text-5xl md:text-7xl font-black tracking-tight text-white leading-tight">
      {displayText}
      <span className="animate-pulse text-cyan-400">|</span>
    </h1>
  );
};

const ContactHero = () => {
  const [currentImage, setCurrentImage] = useState(0);

  // AUTO IMAGE CHANGE
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) =>
        prev === heroImages.length - 1 ? 0 : prev + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-120 flex items-center justify-center text-center overflow-hidden">

      {/* BACKGROUND IMAGES */}
      <AnimatePresence mode="wait">
        <motion.img
          key={currentImage}
          src={heroImages[currentImage]}
          className="absolute inset-0 w-full h-full object-cover"
          initial={{
            opacity: 0,
            scale: 1.2,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          exit={{
            opacity: 0,
            scale: 1.1,
          }}
          transition={{
            duration: 1.2,
            ease: "easeInOut",
          }}
        />
      </AnimatePresence>

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />

      {/* GLOW EFFECTS */}
      <div className="absolute top-[-100px] left-[-100px] w-[400px] h-[400px] bg-cyan-500/20 blur-[120px] rounded-full" />

      <div className="absolute bottom-[-120px] right-[-120px] w-[450px] h-[450px] bg-blue-500/20 blur-[140px] rounded-full" />

      {/* ANIMATED GRID */}
      <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:70px_70px]" />

      {/* CONTENT */}
      <div className="relative pt-16 z-10 px-6">

        {/* BADGE */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/10 border border-white/20 backdrop-blur-xl mb-4"
        >
          <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />

          <span className="text-white/80 uppercase tracking-[4px] text-xs md:text-sm font-medium">
            Webify Technologies
          </span>
        </motion.div>

        {/* TITLE */}
        <Typewriter text="Contact Us" />

        {/* DESCRIPTION */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="text-white mt-4 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed"
        >
          Let’s discuss your ideas, build modern digital experiences,
          and create powerful solutions that help your business grow online.
        </motion.p>

        {/* BUTTONS */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3 }}
          className="flex flex-wrap justify-center gap-5 mt-10"
        >
          <button className="px-8 py-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold shadow-[0_10px_40px_rgba(34,211,238,0.35)] hover:scale-105 transition-all duration-300">
            Start Project
          </button>

          <button className="px-8 py-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-xl text-white hover:bg-white/20 transition-all duration-300">
            Free Consultation
          </button>
        </motion.div>

        {/* IMAGE INDICATORS */}
        <div className="flex justify-center gap-3 mt-6">
          {heroImages.map((_, i) => (
            <motion.div
              key={i}
              animate={{
                width: currentImage === i ? 40 : 10,
                backgroundColor:
                  currentImage === i
                    ? "rgb(34 211 238)"
                    : "rgba(255,255,255,0.4)",
              }}
              transition={{ duration: 0.4 }}
              className="h-[10px] rounded-full"
            />
          ))}
        </div>
      </div>

      {/* BOTTOM LIGHT BEAM */}
      <motion.div
        animate={{
          x: ["-100%", "250%"],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute bottom-0 left-0 w-[40%] h-[3px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
      />
    </section>
  );
};

export default ContactHero;
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

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
    <h1 className="text-5xl md:text-7xl font-black tracking-tight text-gray-900 leading-tight">
      {displayText}
      <span className="animate-pulse text-cyan-500">|</span>
    </h1>
  );
};

const ContactHero = () => {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">

      {/* BACKGROUND IMAGE */}
      <motion.img
        src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2000&auto=format&fit=crop"
        alt="Webify Technologies"
        className="absolute inset-0 w-full h-full object-cover"
        animate={{
          scale: [1, 1.08],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-white/75 backdrop-blur-sm" />

      {/* PREMIUM GLOW */}
      <div className="absolute top-[-150px] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-cyan-400/20 blur-[150px]" />

      {/* ANIMATED GRID */}
      <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#000000_1px,transparent_1px),linear-gradient(to_bottom,#000000_1px,transparent_1px)] bg-[size:70px_70px]" />

      {/* CONTENT */}
      <div className="relative z-10 px-6 text-center max-w-5xl mx-auto">

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
          }}
        >

          {/* BADGE */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/60 border border-white/40 backdrop-blur-xl mb-6 shadow-lg"
          >
            <div className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />

            <span className="text-gray-700 uppercase tracking-[4px] text-xs md:text-sm font-semibold">
              Webify Technologies
            </span>
          </motion.div>

          {/* TITLE */}
          <Typewriter text="Let’s Build Something Extraordinary" />

          {/* DESCRIPTION */}
          <motion.p
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              delay: 1,
            }}
            className="text-gray-600 text-lg md:text-xl mt-8 leading-relaxed max-w-3xl mx-auto"
          >
            We create modern websites, scalable applications,
            and premium digital experiences that help businesses
            grow online.
          </motion.p>

          {/* BUTTONS */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3 }}
            className="flex flex-wrap justify-center gap-5 mt-10"
          >
            <button className="px-8 py-3 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold shadow-[0_10px_40px_rgba(34,211,238,0.35)] hover:scale-105 transition-all duration-300">
              Start Project
            </button>

            <button className="px-8 py-3 rounded-full border border-gray-300 bg-white/70 backdrop-blur-xl text-gray-700 hover:bg-white transition-all duration-300">
              Free Consultation
            </button>
          </motion.div>

        </motion.div>
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
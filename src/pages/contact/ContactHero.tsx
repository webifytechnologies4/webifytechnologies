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
    <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-gray-900 leading-tight">
      {displayText}
      <span className="animate-pulse text-brand-cyan">|</span>
    </h1>
  );
};

const ContactHero = () => {
  return (
    <section className="relative min-h-[85vh] md:min-h-screen flex items-center justify-center overflow-hidden py-8 md:py-16">

      {/* BACKGROUND IMAGE */}
      <motion.img
        src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2000&auto=format&fit=crop"
        alt="Webify Technologies customer support and tech consulting team"
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
      <div className="absolute inset-0 bg-white/80 md:bg-white/75 backdrop-blur-[2px] md:backdrop-blur-sm" />

      {/* PREMIUM GLOW */}
      <div className="absolute top-[-120px] md:top-[-150px] left-1/2 -translate-x-1/2 w-[320px] h-[320px] md:w-[600px] md:h-[600px] bg-brand-cyan/20 blur-[100px] md:blur-[150px]" />

      {/* ANIMATED GRID */}
      <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#000000_1px,transparent_1px),linear-gradient(to_bottom,#000000_1px,transparent_1px)] bg-[size:40px_40px] md:bg-[size:70px_70px]" />

      {/* CONTENT */}
      <div className="relative z-10 w-full px-4 md:px-8 lg:px-16 text-center max-w-6xl mx-auto pt-26 md:pt-0">

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
            className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2.5 sm:py-3 rounded-full bg-white/70 border border-white/40 backdrop-blur-xl mb-5 md:mb-6 shadow-lg"
          >
            <div className="w-2 h-2 rounded-full bg-brand-cyan animate-pulse shrink-0" />

            <span className="text-gray-700 uppercase tracking-[2px] sm:tracking-[4px] text-[10px] sm:text-xs md:text-sm font-semibold whitespace-nowrap">
              Webify Technologies
            </span>
          </motion.div>

          {/* TITLE */}
          <div className="px-1 sm:px-0">
            <Typewriter text="Let’s Build Something Extraordinary" />
          </div>

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
            className="text-gray-700 text-sm md:text-lg mt-6 md:mt-8 leading-relaxed max-w-3xl mx-auto px-2 sm:px-0"
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
            className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-4 sm:gap-5 mt-8 md:mt-10 w-full"
          >
            <button
              onClick={() => {
                const section = document.getElementById("contact-section");
                section?.scrollIntoView({ behavior: "smooth" });
              }}
              className="w-full sm:w-auto px-6 sm:px-8 py-3 rounded-full bg-gradient-to-r from-brand-blue to-brand-cyan text-white font-semibold shadow-md shadow-brand-blue/15 hover:scale-105 active:scale-95 transition-all duration-300 text-sm sm:text-base min-h-[48px] flex items-center justify-center border-none"
            >
              Start Project
            </button>

            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=webifytechnologies4@gmail.com&su=Free%20Consultation&body=Hello%20Webify%20Technologies,%20I%20want%20a%20free%20consultation%20for%20my%20project."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
              <motion.button
                whileHover={{
                  scale: 1.05,
                  y: -2,
                }}
                whileTap={{ scale: 0.96 }}
                className="w-full sm:w-auto px-6 sm:px-8 py-3 rounded-full border border-gray-300 bg-white/70 backdrop-blur-xl text-gray-700 hover:bg-white hover:border-gray-400 hover:shadow-lg active:scale-95 transition-all duration-300 text-sm sm:text-base font-medium min-h-[48px] flex items-center justify-center"
              >
                Free Consultation
              </motion.button>
            </a>
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
        className="absolute bottom-0 left-0 w-[60%] md:w-[40%] h-[2px] md:h-[3px] bg-gradient-to-r from-transparent via-brand-cyan to-transparent"
      />
    </section>
  );
};

export default ContactHero;
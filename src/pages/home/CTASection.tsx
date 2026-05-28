import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";

import { Link } from "react-router-dom";
import { useRef } from "react";

import ctaImg from "../../assets/homecta/homecta.jpeg";

const CTASection = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Smooth Scroll Effects
  const textY = useTransform(
    scrollYProgress,
    [0, 1],
    [60, -30]
  );

  const opacity = useTransform(
    scrollYProgress,
    [0, 0.3, 1],
    [0, 1, 1]
  );

  const imageScale = useTransform(
    scrollYProgress,
    [0, 1],
    [1.1, 1]
  );

  return (
    <section
      ref={ref}
      className="relative w-full overflow-hidden bg-[#020817]"
    >
      {/* Background Image */}
      <motion.div
        style={{ scale: imageScale }}
        className="absolute inset-0"
      >
        <img
          src={ctaImg}
          alt="CTA Background"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#020817]/95 via-[#041B34]/85 to-cyan-900/50" />

      {/* Grid */}
      <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(to_right,#ffffff22_1px,transparent_1px),linear-gradient(to_bottom,#ffffff22_1px,transparent_1px)] bg-[size:60px_60px]" />

      {/* Glow */}
      <div className="absolute -top-24 -left-24 w-[320px] h-[320px] bg-cyan-400/20 blur-[120px] rounded-full" />

      <div className="absolute -bottom-24 -right-24 w-[320px] h-[320px] bg-blue-500/20 blur-[120px] rounded-full" />

      {/* Floating Animated Lines */}
      <motion.div
        animate={{
          x: [0, 30, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
        }}
        className="absolute top-20 left-10 w-32 h-[1px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-60"
      />

      <motion.div
        animate={{
          x: [0, -40, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
        className="absolute bottom-24 right-10 w-40 h-[1px] bg-gradient-to-r from-transparent via-white to-transparent opacity-10"
      />

      {/* Main Content */}
      <motion.div
        style={{
          y: textY,
          opacity,
        }}
        className="relative z-10 min-h-[65vh] sm:min-h-[72vh] flex items-center justify-center px-5 sm:px-8 lg:px-16 py-10"
      >
        <div className="max-w-6xl mx-auto text-center">

          {/* Animated Mini Text */}
          <motion.div
            initial={{
              opacity: 0,
              y: 25,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.7,
            }}
            className="mb-7 overflow-hidden"
          >
            <motion.div
              animate={{
                x: ["-10%", "10%", "-10%"],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear",
              }}
              className="inline-block"
            >
              <span className="text-sm sm:text-base uppercase tracking-[6px] text-cyan-300 font-semibold">
                Premium Digital Agency
              </span>
            </motion.div>
          </motion.div>

          {/* Heading */}
          <motion.h2
            initial={{
              opacity: 0,
              y: 60,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.9,
            }}
            className="text-3xl sm:text-5xl lg:text-6xl font-black leading-[0.95] text-white"
          >
            Build Something
            <motion.span
              animate={{
                backgroundPosition: [
                  "0% 50%",
                  "100% 50%",
                  "0% 50%",
                ],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "linear",
              }}
              className="block mt-3 bg-[linear-gradient(90deg,#67e8f9,#ffffff,#22d3ee,#ffffff)] bg-[length:300%_300%] bg-clip-text text-transparent"
            >
              Extraordinary
            </motion.span>
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{
              opacity: 0,
              y: 40,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              delay: 0.15,
            }}
            className="max-w-6xl mx-auto mt-7 text-sm sm:text-lg lg:text-xl leading-relaxed text-white"
          >
            We craft premium websites, scalable software,
            high-performance applications, and modern
            digital experiences that help businesses grow
            faster and stand out online.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{
              opacity: 0,
              y: 40,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              delay: 0.25,
            }}
            className="mt-10 sm:mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 w-full"
          >
            {/* Primary */}
            <Link
              to="/contact"
              className="w-full sm:w-auto"
            >
              <motion.button
                whileHover={{
                  scale: 1.04,
                  y: -4,
                }}
                whileTap={{
                  scale: 0.95,
                }}
                className="relative overflow-hidden w-full sm:w-auto min-w-[220px] rounded-full bg-white px-6 sm:px-9 py-3.5 sm:py-4 text-sm sm:text-base font-bold text-[#041B34] shadow-[0_20px_60px_rgba(255,255,255,0.18)]"
              >
                <span className="relative z-10">
                  Start Your Project
                </span>

                {/* Shine */}
                <motion.div
                  animate={{
                    x: ["-150%", "250%"],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-200/50 to-transparent skew-x-12"
                />
              </motion.button>
            </Link>

            {/* Secondary */}
            <Link
              to="/contact"
              className="w-full sm:w-auto"
            >
              <motion.button
                whileHover={{
                  scale: 1.04,
                  borderColor:
                    "rgba(255,255,255,0.5)",
                }}
                whileTap={{
                  scale: 0.95,
                }}
                className="w-full sm:w-auto min-w-[220px] rounded-full border border-white/20 bg-white/10 backdrop-blur-xl px-6 sm:px-9 py-3.5 sm:py-4 text-sm sm:text-base font-semibold text-white transition-all duration-300 hover:bg-white/15"
              >
                Discuss Your Project
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default CTASection;
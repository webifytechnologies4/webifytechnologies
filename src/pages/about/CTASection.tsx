import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const ctaStats = [
  { title: "Projects", value: "7+" },
  { title: "Clients", value: "5+" },
  { title: "Support", value: "24/7" },
  { title: "Satisfaction", value: "99%" },
];

// Motion Variants for Heading Text Staggering
const headingContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
};

const wordVariants = {
  hidden: { opacity: 0, y: 30, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.6, ease: [0.215, 0.61, 0.355, 1] as const },
  },
};

const CTASection = () => {
  return (
    <section className="relative py-14 sm:py-16 px-4 sm:px-6 md:px-6 overflow-hidden bg-white">

      {/* CLEAN WHITE BACKGROUND */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">

        {/* KEEP DESKTOP SAME */}
        <div className="absolute top-[-220px] left-[-120px] w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] bg-cyan-100/60 blur-[120px] sm:blur-[160px] rounded-full" />

        <div className="absolute bottom-[-250px] right-[-120px] w-[320px] h-[320px] sm:w-[550px] sm:h-[550px] bg-blue-100/60 blur-[130px] sm:blur-[180px] rounded-full" />

        <motion.div
          animate={{ x: ["-20%", "120%"] }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-20 w-[220px] sm:w-[300px] h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* KEEP LAPTOP SAME */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 md:gap-20 items-center">

          {/* LEFT CONTENT */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">

            {/* TAG */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 rounded-full border border-cyan-100 bg-cyan-50"
            >
              <div className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />

              <span className="text-cyan-600 text-[11px] sm:text-sm tracking-[2px] sm:tracking-[3px] uppercase font-semibold">
                Let's Work Together
              </span>
            </motion.div>

            {/* HEADING */}
            <motion.h2
              variants={headingContainerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-[2.2rem] sm:text-5xl md:text-6xl font-black leading-[1.15] text-gray-900 mt-6 sm:mt-8 flex flex-wrap justify-center lg:justify-start gap-x-2 sm:gap-x-3 gap-y-1"
            >
              <motion.span variants={wordVariants} className="inline-block">
                Let's
              </motion.span>

              <motion.span variants={wordVariants} className="inline-block">
                Build
              </motion.span>

              <motion.span variants={wordVariants} className="inline-block">
                Something
              </motion.span>

              {/* ANIMATED GRADIENT */}
              <motion.span
                variants={wordVariants}
                className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 via-blue-500 to-cyan-400 bg-[length:200%_auto] animate-[pulse_6s_ease-in-out_infinite]"
              >
                Amazing Together
              </motion.span>
            </motion.h2>

            {/* DESCRIPTION */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: 0.6,
              }}
              className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed mt-6 sm:mt-8 max-w-2xl px-1 sm:px-0"
            >
              Whether you need a modern business website, a powerful
              e-commerce platform, or a custom digital solution —
              Webify Technologies is ready to help your business grow.
            </motion.p>

            {/* BUTTONS */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: 0.8,
              }}
              className="flex flex-col sm:flex-row flex-wrap w-full sm:w-auto gap-4 sm:gap-5 mt-8 sm:mt-10"
            >

              <Link to="/contact" className="w-full sm:w-auto">
                <motion.button
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0px 0px 40px rgba(34,211,238,0.35)",
                  }}
                  whileTap={{ scale: 0.96 }}
                  className="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold text-sm sm:text-base"
                >
                  Contact Us
                </motion.button>
              </Link>

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
                  className="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 rounded-full border border-cyan-100 bg-white text-gray-900 font-semibold hover:border-cyan-300 hover:bg-cyan-50 hover:shadow-xl hover:shadow-cyan-100 transition-all duration-300 text-sm sm:text-base"
                >
                  Get Free Consultation
                </motion.button>
              </a>
            </motion.div>
          </div>

          {/* RIGHT VISUAL */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            className="relative flex justify-center"
          >

            {/* KEEP DESKTOP SAME */}
            <div className="relative w-full max-w-[520px] bg-white overflow-hidden p-5 sm:p-7 md:p-10">

              <div className="absolute top-[-120px] right-[-120px] w-[180px] h-[180px] sm:w-[250px] sm:h-[250px] bg-cyan-200/30 blur-[80px] sm:blur-[100px] rounded-full" />

              <div className="relative z-10">

                <p className="text-cyan-500 uppercase tracking-[3px] sm:tracking-[4px] text-[10px] sm:text-xs font-semibold">
                  Webify Technologies
                </p>

                <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900 leading-tight mt-4 sm:mt-5">
                  Your Vision.
                  <br />
                  Our Technology.
                </h3>

                <p className="text-gray-500 mt-5 sm:mt-6 leading-relaxed text-sm sm:text-base">
                  Transforming ideas into premium digital experiences
                  with modern technologies and scalable architecture.
                </p>
              </div>

              {/* STATS */}
              <div className="grid grid-cols-2 gap-4 sm:gap-6 mt-8 sm:mt-12 relative z-10">

                {ctaStats.map((item, i) => (
                  <motion.div
                    key={i}
                    whileHover={{
                      y: -6,
                      scale: 1.03,
                    }}
                    className="rounded-2xl sm:rounded-3xl border border-cyan-100 bg-cyan-50/70 p-4 sm:p-6 transition-all duration-300"
                  >
                    <h4 className="text-2xl sm:text-3xl font-black text-gray-900">
                      {item.value}
                    </h4>

                    <p className="text-gray-500 mt-2 text-xs sm:text-sm leading-relaxed">
                      {item.title}
                    </p>
                  </motion.div>
                ))}
              </div>

              {/* BOTTOM BEAM */}
              <motion.div
                animate={{ x: ["-100%", "250%"] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute bottom-0 left-0 w-[40%] h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
import { motion } from "framer-motion";
import { Globe, CheckCircle2, ArrowRight, Code2 } from "lucide-react";
import { Link } from "react-router-dom";

import teamImg from "../../assets/aboutcompany/company1.jpeg";
import Img1 from "../../assets/abouthero/aboutright.avif";

const CompanyStorySection = () => {
  return (
    <section id="company-story" aria-label="Our Company Story" className="relative py-8 md:py-16 px-4 md:px-8 lg:px-16 overflow-hidden bg-brand-white">

      {/* SOFT BACKGROUND */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-80px] left-[-80px] w-[260px] sm:w-[400px] h-[260px] sm:h-[400px] bg-brand-cyan/10 blur-[100px] sm:blur-[120px] rounded-full" />
        <div className="absolute bottom-[-80px] right-[-80px] w-[240px] sm:w-[350px] h-[240px] sm:h-[350px] bg-brand-blue/10 blur-[100px] sm:blur-[120px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-10 items-center">

        {/* ── LEFT: STACKED IMAGE BLOCK ── */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="relative flex justify-center items-center min-h-[320px] sm:min-h-[420px]"
        >

          {/* BACK IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: -3 }}
            whileInView={{ opacity: 1, scale: 1, rotate: -4 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            className="absolute top-0 left-2 sm:left-0 w-[68%] sm:w-[58%] h-[220px] sm:h-[280px] rounded-2xl md:rounded-lg overflow-hidden shadow-xl shadow-black border-2 border-white"
          >
            <img
              src={teamImg}
              alt="Webify Technologies professional software engineering team working collaboratively"
              className="w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-br from-brand-cyan/10 to-transparent" />
          </motion.div>

          {/* FRONT IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.25 }}
            viewport={{ once: true }}
            className="relative mt-20 sm:mt-28 ml-12 sm:ml-20 w-[78%] sm:w-[65%] h-[250px] sm:h-[320px] rounded-2xl md:rounded-lg overflow-hidden shadow-2xl border-4 border-white z-10"
          >
            <img
              src={Img1}
              alt="Webify Technologies software engineer writing clean code on a workstation"
              className="w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
          </motion.div>

          {/* FLOATING BADGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0, rotate: -20 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.5,
              type: "spring",
              stiffness: 200
            }}
            viewport={{ once: true }}
            animate={{ y: [0, -8, 0] }}
            className="absolute top-14 sm:top-22 right-4 sm:right-12 z-20 w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-white shadow-xl flex items-center justify-center border border-brand-cyan/20"
          >
            <Code2
              size={22}
              className="text-brand-cyan sm:w-[28px] sm:h-[28px]"
            />
          </motion.div>
        </motion.div>

        {/* ── RIGHT: TEXT CONTENT ── */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          viewport={{ once: true }}
          className="space-y-4 text-center lg:text-left"
        >

          {/* TAG */}
          <div className="inline-flex items-center justify-center lg:justify-start gap-2 px-5 sm:px-10 py-1.5 rounded-full border border-brand-cyan/30 bg-brand-light text-brand-blue text-xs sm:text-sm font-semibold">
            <Globe size={14} />
            About Webify Technologies
          </div>

          {/* HEADING */}
          <h2 className="text-3xl md:text-5xl font-bold leading-[1.2] text-brand-darkBlue">
            <span className="text-brand-cyan">Every Website</span>
            <br />
            Has A Vision Behind It
          </h2>

          {/* DESCRIPTION */}
          <p className="text-gray-600 leading-relaxed text-sm md:text-lg max-w-xl mx-auto lg:mx-0">
            What you see is a finished product. What we see is months of
            planning, designing, and engineering. At{" "}
            <span className="font-bold text-brand-darkBlue">
              Webify Technologies
            </span>,
            we work behind the scenes — crafting scalable web apps,
            mobile applications, and software solutions so your business
            stands out in the digital world.
          </p>

          {/* BULLET POINTS */}
          <div className="space-y-3 pt-1">
            {[
              "Web development isn't just code — it's your brand's digital identity.",
              "We build scalable apps that grow with your business.",
              "From UI design to deployment — full-cycle development.",
            ].map((point, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start gap-3 text-left animate-fade-in"
              >
                <CheckCircle2
                  size={18}
                  className="text-brand-blue flex-shrink-0 mt-0.5"
                />

                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                  {point}
                </p>
              </motion.div>
            ))}
          </div>

          {/* CTA BUTTON */}
          <div className="pt-2 flex justify-center lg:justify-start">
            <Link to="/contact" className="w-full sm:w-auto">
              <motion.button
                whileHover={{
                  scale: 1.04,
                  boxShadow: "0 0 30px rgba(21,101,192,0.3)",
                }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center justify-center gap-3 px-7 sm:px-10 py-3 rounded-full bg-gradient-to-r from-brand-blue to-brand-cyan text-white font-bold shadow-lg text-sm sm:text-base w-full sm:w-auto min-h-[48px]"
              >
                Get Started

                <span className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
                  <ArrowRight size={14} />
                </span>
              </motion.button>
            </Link>
          </div>

        </motion.div>
      </div>
    </section>
  );
};

export default CompanyStorySection;

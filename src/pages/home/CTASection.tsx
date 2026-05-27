import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const CTASection = () => {
  return (
    <section id="cta-section" aria-label="Call To Action" className="relative overflow-hidden px-4 md:px-8 lg:px-16 py-8 md:py-16 bg-brand-white">
      <motion.div
        animate={{
          boxShadow: [
            "0 0 30px rgba(21,101,192,0.25)",
            "0 0 80px rgba(21,101,192,0.45)",
            "0 0 30px rgba(21,101,192,0.25)",
          ],
          y: [0, -6, 0],
        }}
        transition={{ repeat: Infinity, duration: 3 }}
        whileHover={{ scale: 1.02 }}
        className="relative overflow-hidden rounded-[24px] md:rounded-[40px] bg-gradient-to-br from-brand-darkBlue via-brand-blue to-brand-cyan px-5 sm:px-8 md:px-14 py-12 md:py-16 text-center text-white"
      >
        {/* Particles */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-3 h-3 bg-white rounded-full animate-ping" />
          <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-brand-gold rounded-full animate-pulse" />
          <div className="absolute bottom-10 right-20 w-3 h-3 bg-white rounded-full animate-bounce" />
        </div>

        {/* Glow */}
        <div className="absolute -top-20 -left-20 w-[250px] md:w-[400px] h-[250px] md:h-[400px] bg-white/10 blur-3xl rounded-full" />

        <div className="absolute -bottom-24 -right-20 w-[250px] md:w-[400px] h-[250px] md:h-[400px] bg-brand-cyan/10 blur-3xl rounded-full" />

        {/* Content */}
        <div className="relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold leading-tight">
            Ready To Build Your
            <span className="block mt-2">
              Next Big Project?
            </span>
          </h2>

          <p className="max-w-3xl mx-auto mt-6 md:mt-8 text-sm md:text-lg text-white/90 leading-relaxed px-2">
            Let's create powerful digital experiences together with modern
            technologies, stunning UI and scalable architecture.
          </p>

          {/* Buttons */}
          <div className="mt-8 md:mt-10 flex flex-col sm:flex-row gap-4 md:gap-5 justify-center items-center">
            <Link to="/contact" className="w-full sm:w-auto">
              <button className="w-full sm:w-auto bg-white text-brand-blue px-8 md:px-10 py-3 rounded-full font-bold hover:scale-105 hover:shadow-xl transition-all duration-300 min-h-[48px] flex items-center justify-center">
                Start Your Project
              </button>
            </Link>

            <Link to="/contact" className="w-full sm:w-auto">
              <button className="w-full sm:w-auto border border-white/60 px-8 md:px-10 py-3 rounded-full font-semibold hover:bg-white/10 transition-all duration-300 min-h-[48px] flex items-center justify-center">
                Discuss Your Project
              </button>
            </Link>
          </div>
        </div>

        {/* Border */}
        <div className="absolute inset-0 rounded-[24px] md:rounded-[40px] border border-white/20" />
      </motion.div>
    </section>
  );
};

export default CTASection;

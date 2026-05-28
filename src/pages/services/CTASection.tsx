import { motion } from "framer-motion";
import { ArrowRight, Code2, BarChart3 } from "lucide-react";
import { Link } from "react-router-dom";

import softwareImg from "../../assets/servicescta/cta1.jpeg";
import programmingImg from "../../assets/servicescta/cta2.jpeg";

const CTASection = () => {
  return (
    <section id="services-cta" aria-label="Start Your Project" className="relative py-8 md:py-16 bg-brand-white flex justify-center overflow-hidden w-full">

      {/* Background Soft Glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute w-[280px] h-[280px] md:w-[500px] md:h-[500px] bg-brand-blue/15 rounded-full blur-3xl -top-16 md:-top-20 -left-16 md:-left-20" />
      </div>

      <div className="relative px-4 md:px-8 lg:px-16 w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">

        {/* LEFT CONTENT */}
        <div className="flex flex-col justify-center text-center md:text-left">

          <p className="text-[11px] sm:text-xs md:text-sm text-gray-600 uppercase tracking-[3px] md:tracking-[4px] font-bold mb-3">
            BUILDING DIGITAL EXCELLENCE
          </p>

          <h2 className="text-3xl md:text-5xl font-bold text-brand-darkBlue leading-[1.15]">
            Transform Your Ideas Into{" "}
            <span className="text-brand-blue">
              Powerful Digital Solutions
            </span>
          </h2>

          <p className="text-gray-600 mt-5 md:mt-6 text-sm md:text-lg max-w-xl leading-relaxed mx-auto md:mx-0">
            Webify Technologies delivers modern software development, scalable web applications,
            and innovative programming solutions tailored to help businesses grow
            faster in the digital world.
          </p>

          {/* BUTTONS */}
          <div className="flex flex-col sm:flex-row sm:flex-wrap items-center md:items-start gap-4 sm:gap-5 mt-8">

            <Link to="/contact" className="w-full sm:w-auto">
              <button className="w-full sm:w-auto px-6 sm:px-8 py-3.5 bg-gradient-to-r from-brand-blue to-brand-cyan text-white rounded-xl font-semibold shadow-lg shadow-brand-blue/10 min-h-[48px] flex items-center justify-center active:scale-[0.98] transition-all text-sm sm:text-base border-none">
                Start Your Project
              </button>
            </Link>

            <Link to="/services">
              <button
                onClick={() => {
                  document.getElementById("services-list")?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                }}
                className="flex items-center justify-center gap-2 px-4 py-3 text-brand-darkBlue font-bold hover:text-brand-cyan transition-colors group text-sm sm:text-base bg-transparent border-none min-h-[48px]"
              >
                Explore Services

                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </button>
            </Link>
          </div>
        </div>

        {/* RIGHT VISUAL */}
        <div className="relative h-[420px] sm:h-[500px] md:h-[500px] w-full flex items-center justify-center">

          {/* CARD 1 */}
          <motion.div
            initial={{ opacity: 0, y: -150 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
            className="absolute top-2 sm:top-4 right-0 sm:right-4 md:right-8 w-[92%] sm:w-[85%] md:w-[75%] bg-white border border-brand-cyan/10 shadow-2xl shadow-brand-blue/5 rounded-2xl md:rounded-3xl p-4 sm:p-5 z-10"
          >

            <div className="flex justify-between items-start sm:items-center gap-3 mb-4">

              <div className="flex items-center gap-2">

                <div className="p-2 bg-brand-light text-brand-blue rounded-lg shrink-0">
                  <BarChart3 size={16} />
                </div>

                <h3 className="font-bold text-brand-darkBlue text-base md:text-lg capitalize leading-snug">
                  software development
                </h3>
              </div>

              <span className="text-[10px] sm:text-xs bg-brand-light text-brand-blue font-medium px-2 py-1 rounded-md flex items-center gap-1 whitespace-nowrap cursor-pointer">
                <BarChart3 size={10} />
                Read More
              </span>
            </div>

            <p className="text-xs md:text-sm text-gray-600 mb-4 leading-relaxed">
              Websites & media that move users to action. Plans and creatives that scale.
            </p>

            <div className="rounded-xl overflow-hidden h-36 sm:h-40 md:h-48">
              <img
                src={softwareImg}
                alt="Webify Technologies premium custom software development representation"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* CARD 2 */}
          <motion.div
            initial={{ opacity: 0, y: -200 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.9,
              delay: 0.2,
              ease: "easeOut",
            }}
            className="absolute bottom-2 sm:bottom-4 left-0 w-[88%] sm:w-[82%] md:w-[72%] bg-white border border-brand-cyan/10 shadow-2xl shadow-brand-blue/10 rounded-2xl md:rounded-3xl p-4 sm:p-5 z-20"
          >

            <div className="flex justify-between items-start sm:items-center gap-3 mb-3">

              <div className="flex items-center gap-2">

                <div className="p-2 bg-brand-light text-brand-cyan rounded-lg shrink-0">
                  <Code2 size={16} />
                </div>

                <h3 className="font-bold text-brand-darkBlue text-base md:text-lg capitalize">
                  Programming
                </h3>
              </div>

              <span className="text-[10px] sm:text-xs bg-brand-light text-brand-cyan font-medium px-2 py-1 rounded-md flex items-center gap-1 whitespace-nowrap cursor-pointer">
                &lt;&gt; Read More
              </span>
            </div>

            <p className="text-xs md:text-sm text-gray-600 mb-4 leading-relaxed">
              Modern stacks, clean patterns & scalable codebase.
            </p>

            <div className="rounded-xl overflow-hidden h-24 sm:h-28 md:h-32">
              <img
                src={programmingImg}
                alt="Scalable coding and software programming at Webify Technologies"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;

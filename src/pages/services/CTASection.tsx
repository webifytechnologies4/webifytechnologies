import { motion } from "framer-motion";
import { ArrowRight, Code2, BarChart3 } from "lucide-react";

const CTASection = () => {
  return (
    <section className="relative py-10 md:py-18 bg-[#fdfeff] flex justify-center overflow-hidden">
      {/* Background Soft Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-[500px] h-[500px] bg-blue-50/50 rounded-full blur-3xl -top-20 -left-20" />
      </div>

      <div className="relative px-6 w-full max-w-7xl grid md:grid-cols-2 gap-12 md:gap-16 items-center">
        {/* LEFT CONTENT */}
        <div className="flex flex-col justify-center">
          <p className="text-xs md:text-sm text-gray-500 uppercase tracking-[4px] font-bold mb-3">
            BUILDING DIGITAL EXCELLENCE
          </p>

          <h2 className="text-3xl md:text-5xl font-black text-[#1e1b4b] leading-[1.15]">
            Transform Your Ideas Into 
            <span className="text-[#facc15]"> Powerful Digital Solutions</span>
          </h2>

          <p className="text-gray-500 mt-6 text-base md:text-lg max-w-xl leading-relaxed">
            EXOCHOS delivers modern software development, scalable web applications,
            and innovative programming solutions tailored to help businesses grow
            faster in the digital world.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-5 mt-8">
            <button className="px-8 py-3.5 bg-[#1e1b4b] text-white rounded-xl font-semibold shadow-lg shadow-indigo-950/20 hover:bg-[#2e2a78] transition-all">
              Start Your Project
            </button>

            <button className="flex items-center gap-2 px-4 py-3 text-[#1e1b4b] font-bold hover:text-indigo-700 transition-colors group">
              Explore Services
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </button>
          </div>
        </div>

        {/* RIGHT VISUAL */}
        <div className="relative h-[450px] md:h-[500px] w-full flex items-center justify-center">
          {/* 1. Software Development Card  */}
          <motion.div
            initial={{ opacity: 0, y: -150 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="absolute top-4 right-4 md:right-8 w-[80%] md:w-[75%] bg-white border border-gray-100 shadow-2xl shadow-indigo-950/5 rounded-3xl p-5 z-10"
          >
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center gap-2">
                <div className="p-2 bg-emerald-50 text-emerald-600 rounded-lg">
                  <BarChart3 size={18} />
                </div>
                <h3 className="font-bold text-[#1e1b4b] text-base md:text-lg capitalize">
                  software development
                </h3>
              </div>
              <span className="text-xs bg-emerald-50 text-emerald-700 font-medium px-2.5 py-1 rounded-md flex items-center gap-1 cursor-pointer">
                <BarChart3 size={12} /> Read More
              </span>
            </div>

            <p className="text-xs md:text-sm text-gray-500 mb-4">
              Websites & media that move users to action. Plans and creatives that scale.
            </p>

            {/* Mock Code/Laptop Image */}
            <div className="rounded-xl overflow-hidden h-40 md:h-48">
              <img
                src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop"
                alt="Software Development"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* 2. Programming Card */}
          <motion.div
            initial={{ opacity: 0, y: -200 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
            className="absolute bottom-4 left-0 w-[78%] md:w-[72%] bg-white border border-gray-100 shadow-2xl shadow-indigo-950/10 rounded-3xl p-5 z-20"
          >
            <div className="flex justify-between items-center mb-3">
              <div className="flex items-center gap-2">
                <div className="p-2 bg-blue-50 text-blue-600 rounded-lg">
                  <Code2 size={18} />
                </div>
                <h3 className="font-bold text-[#1e1b4b] text-base md:text-lg capitalize">
                  Programming
                </h3>
              </div>
              <span className="text-xs bg-blue-50 text-blue-700 font-medium px-2.5 py-1 rounded-md flex items-center gap-1 cursor-pointer">
                &lt;&gt; Read More
              </span>
            </div>

            <p className="text-xs md:text-sm text-gray-500 mb-4">
              Modern stacks, clean patterns & scalable codebase.
            </p>

            {/* Mock Developer Image */}
            <div className="rounded-xl overflow-hidden h-28 md:h-32">
              <img
                src="https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=800&auto=format&fit=crop"
                alt="Programming"
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

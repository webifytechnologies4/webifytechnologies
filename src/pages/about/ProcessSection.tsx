import { motion } from "framer-motion";
import { Search, ClipboardList, Code2, ShieldCheck, Rocket } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Requirement Analysis",
    desc: "Understanding client goals and business needs.",
  },
  {
    icon: ClipboardList,
    title: "Planning & Strategy",
    desc: "Creating structure and project roadmap.",
  },
  {
    icon: Code2,
    title: "Design & Development",
    desc: "Building modern UI and scalable systems.",
  },
  {
    icon: ShieldCheck,
    title: "Testing & Optimization",
    desc: "Ensuring performance and security.",
  },
  {
    icon: Rocket,
    title: "Launch & Support",
    desc: "Deployment with continuous support.",
  },
];

const ProcessSection = () => {
  return (
    <section className="relative py-14 sm:py-16 px-4 sm:px-6 md:px-6 overflow-hidden bg-white">

      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">

        {/* KEEP DESKTOP SAME */}
        <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[320px] h-[320px] sm:w-[700px] sm:h-[700px] bg-cyan-200/40 blur-[90px] sm:blur-[140px] rounded-full" />
      </div>

      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="relative z-10 text-center max-w-3xl mx-auto"
      >

        <p className="text-cyan-500 uppercase tracking-[3px] sm:tracking-[6px] text-[11px] sm:text-sm font-semibold">
          Our Process
        </p>

        <h2 className="text-[2.2rem] sm:text-5xl md:text-6xl font-black mt-4 leading-[1.15] text-gray-900 px-1">
          How We Build
          <span className="text-cyan-500">
            {" "}Digital Products
          </span>
        </h2>

        <p className="text-gray-500 mt-5 sm:mt-6 text-sm sm:text-base md:text-lg leading-relaxed px-2 sm:px-0">
          A streamlined workflow focused on innovation, scalability,
          performance and long-term business growth.
        </p>
      </motion.div>

      {/* PROCESS LAYOUT */}
      <div className="relative mt-14 sm:mt-18 max-w-7xl mx-auto">

        {/* DESKTOP CENTER LINE */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
          className="absolute top-10 left-0 origin-left w-full h-[2px] bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400 hidden lg:block"
        />

        {/* KEEP LAPTOP SAME */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 sm:gap-12 lg:gap-8 relative z-10">

          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: i * 0.12,
              }}
              viewport={{ once: true }}
              className="group relative text-center"
            >

              {/* TOP CIRCLE */}
              <motion.div
                whileHover={{
                  scale: 1.08,
                  y: -5,
                }}
                className="relative mx-auto w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white border border-cyan-100 shadow-xl flex items-center justify-center"
              >

                <div className="absolute inset-0 rounded-full bg-cyan-300/20 blur-2xl opacity-0 group-hover:opacity-100 transition duration-500" />

                <step.icon
                  size={window.innerWidth < 640 ? 28 : 34}
                  className="relative text-cyan-500"
                />
              </motion.div>

              {/* CONTENT */}
              <div className="mt-7 sm:mt-10">

                <h3 className="text-2xl sm:text-3xl md:text-[32px] font-black text-gray-900 group-hover:text-cyan-500 transition duration-300 leading-snug">
                  {step.title}
                </h3>

                <p className="text-gray-600 leading-relaxed mt-4 sm:mt-5 text-sm sm:text-base md:text-lg font-medium px-2 sm:px-0">
                  {step.desc}
                </p>
              </div>

              {/* ANIMATED BOTTOM LINE */}
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: 70 }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.15,
                }}
                viewport={{ once: true }}
                className="h-[3px] bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mx-auto mt-6 sm:mt-8"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;

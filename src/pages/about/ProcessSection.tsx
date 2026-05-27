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
    <section id="process-section" aria-label="Our Process" className="relative py-8 md:py-16 px-4 md:px-8 lg:px-16 overflow-hidden bg-brand-white">

      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">

        {/* KEEP DESKTOP SAME */}
        <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[320px] h-[320px] sm:w-[700px] sm:h-[700px] bg-brand-cyan/15 blur-[90px] sm:blur-[140px] rounded-full" />
      </div>

      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="relative z-10 text-center max-w-3xl mx-auto"
      >

        <p className="text-brand-blue uppercase tracking-[3px] sm:tracking-[6px] text-[11px] sm:text-sm font-semibold">
          Our Process
        </p>

        <h2 className="text-3xl md:text-5xl font-bold mt-4 leading-[1.15] text-brand-darkBlue px-1">
          How We Build
          <span className="text-brand-blue">
            {" "}Digital Products
          </span>
        </h2>

        <p className="text-gray-600 mt-5 sm:mt-6 text-sm md:text-lg leading-relaxed px-2 sm:px-0">
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
          className="absolute top-10 left-0 origin-left w-full h-[2px] bg-gradient-to-r from-brand-cyan via-brand-blue to-brand-cyan hidden lg:block"
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
                className="relative mx-auto w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white border border-brand-cyan/20 shadow-xl flex items-center justify-center"
              >

                <div className="absolute inset-0 rounded-full bg-brand-cyan/20 blur-2xl opacity-0 group-hover:opacity-100 transition duration-500" />

                <step.icon
                  size={32}
                  className="relative text-brand-cyan"
                />
              </motion.div>

              {/* CONTENT */}
              <div className="mt-7 sm:mt-10">

                <h3 className="text-lg md:text-xl font-bold text-brand-darkBlue group-hover:text-brand-cyan transition duration-300 leading-snug">
                  {step.title}
                </h3>

                <p className="text-gray-600 leading-relaxed mt-3 sm:mt-4 text-sm md:text-base px-2 sm:px-0">
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
                className="h-[3px] bg-gradient-to-r from-brand-blue to-brand-cyan rounded-full mx-auto mt-6 sm:mt-8"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;

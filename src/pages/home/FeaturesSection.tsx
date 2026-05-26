import { motion } from "framer-motion";
import {
  Sparkles,
  ShieldCheck,
  Rocket,
  Gauge,
  Layers3,
  Wand2,
} from "lucide-react";

const features = [
  {
    icon: <Sparkles size={30} />,
    title: "Modern UI/UX",
    desc: "Clean, intuitive and conversion-focused interfaces designed for premium user experiences.",
    gradient: "from-cyan-400 to-blue-600",
  },
  {
    icon: <Wand2 size={30} />,
    title: "Premium Animations",
    desc: "Smooth interactions powered by Framer Motion and GSAP with immersive effects.",
    gradient: "from-violet-400 to-fuchsia-600",
  },
  {
    icon: <Rocket size={30} />,
    title: "SEO Optimized",
    desc: "Built with modern SEO strategies to improve ranking and online visibility.",
    gradient: "from-orange-400 to-red-500",
  },
  {
    icon: <ShieldCheck size={30} />,
    title: "High Security",
    desc: "Secure architecture with advanced protection layers and best security practices.",
    gradient: "from-emerald-400 to-green-600",
  },
  {
    icon: <Gauge size={30} />,
    title: "Fast Performance",
    desc: "Optimized code structure for ultra-fast speed and seamless experiences.",
    gradient: "from-sky-400 to-cyan-600",
  },
  {
    icon: <Layers3 size={30} />,
    title: "Scalable Architecture",
    desc: "Built to scale with your business and handle high traffic effortlessly.",
    gradient: "from-indigo-400 to-blue-700",
  },
];

const FeaturesSection = () => {
  return (
    <section className="relative py-10 md:py-12 px-4 sm:px-6 md:px-10 overflow-hidden bg-[#050816]">

      {/* BACKGROUND GLOW */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] md:w-[900px] h-[350px] md:h-[500px] bg-cyan-500/10 blur-[120px] md:blur-[140px] rounded-full" />
      <div className="absolute bottom-0 right-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-blue-600/10 blur-[100px] md:blur-[120px] rounded-full" />

      {/* GRID */}
      <div className="absolute inset-0 opacity-[0.05]">
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* HEADER */}
      <div className="relative z-10 text-center mb-12 md:mb-20 px-2">

        <motion.span
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-4 md:px-5 py-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 text-cyan-300 text-xs md:text-sm font-semibold tracking-[2px] md:tracking-[3px] uppercase"
        >
          ✦ Why Choose Us
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mt-5 md:mt-6 text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black text-white leading-tight"
        >
          Powerful Digital
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-cyan-400 to-yellow-300">
            Features & Benefits
          </span>
        </motion.h2>

        <p className="max-w-3xl md:max-w-6xl mx-auto mt-5 md:mt-6 text-sm sm:text-base md:text-lg leading-relaxed text-white/80">
          We combine modern technologies, premium interfaces and high performance systems.
        </p>

      </div>

      {/* FEATURE GRID */}
      <div className="relative z-20 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">

        {features.map((feature, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            whileHover={{ y: -8, scale: 1.01 }}
            className="group relative overflow-hidden rounded-lg border border-white/10 bg-white/10 backdrop-blur-xl p-5 sm:p-6 md:p-8 cursor-pointer"
          >

            {/* ICON */}
            <motion.div
              whileHover={{ rotate: 6, scale: 1.05 }}
              className={`relative z-10 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center text-white`}
            >
              {feature.icon}
            </motion.div>

            {/* CONTENT */}
            <div className="relative z-10 mt-6 md:mt-8">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-white group-hover:text-cyan-300 transition">
                {feature.title}
              </h3>

              <p className="mt-3 md:mt-5 text-white/80 leading-relaxed text-sm sm:text-base md:text-lg">
                {feature.desc}
              </p>
            </div>

            {/* BIG NUMBER (FIXED MOBILE OVERFLOW) */}
            <div className="absolute bottom-1 right-3 text-[60px] sm:text-[80px] md:text-[90px] font-black text-white/[0.10] group-hover:text-white/[0.22] transition">
              0{i + 1}
            </div>

            {/* DOT */}
            <div className={`absolute top-4 right-4 w-2.5 h-2.5 rounded-full bg-gradient-to-r ${feature.gradient}`} />

          </motion.div>
        ))}

      </div>

    </section>
  );
};

export default FeaturesSection;
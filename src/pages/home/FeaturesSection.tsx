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
    <section className="relative py-12 px-6 md:px-10 overflow-hidden bg-[#050816]">
      {/* BACKGROUND GLOW */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-cyan-500/10 blur-[140px] rounded-full" />

      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-600/10 blur-[120px] rounded-full" />

      {/* GRID */}
      <div className="absolute inset-0 opacity-[0.05]">
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)",
            backgroundSize: "55px 55px",
          }}
        />
      </div>

      {/* HEADER */}
      <div className="relative z-10 text-center mb-20">
        <motion.span
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 text-cyan-300 text-sm font-semibold tracking-[3px] uppercase"
        >
          ✦ Why Choose Us
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mt-6 text-5xl md:text-7xl font-black text-white"
        >
          Powerful Digital
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-cyan-400 to-yellow-300">
            Features & Benefits
          </span>
        </motion.h2>

        <p className="max-w-6xl mx-auto mt-6 text-lg leading-relaxed text-white/90">
          We combine modern technologies, premium interfaces and high
          performance systems to create future-ready digital products.
        </p>
      </div>

      {/* FEATURE GRID */}
      <div className="relative z-20 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
        {features.map((feature, i) => (
          <motion.div
            key={i}
            initial={{
              opacity: 0,
              y: 60,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.5,
              delay: i * 0.08,
            }}
            whileHover={{
              y: -12,
              scale: 1.02,
            }}
            className="group relative overflow-hidden rounded-lg border border-white/10 bg-white/10 backdrop-blur-xl p-8 cursor-pointer"
          >
            {/* HOVER LIGHT */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700 bg-gradient-to-br from-cyan-500/10 via-blue-500/5 to-transparent" />

            {/* MOVING LIGHT */}
            <motion.div
              animate={{
                x: ["-120%", "220%"],
              }}
              transition={{
                repeat: Infinity,
                duration: 5,
                ease: "linear",
              }}
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12"
            />

            {/* TOP BORDER */}
            <div
              className={`absolute top-0 left-0 h-[3px] w-0 group-hover:w-full transition-all duration-700 bg-gradient-to-r ${feature.gradient}`}
            />

            {/* ICON */}
            <motion.div
              whileHover={{
                rotate: 8,
                scale: 1.08,
              }}
              className={`relative z-10 w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center text-white shadow-[0_10px_30px_rgba(0,0,0,0.25)]`}
            >
              {feature.icon}
            </motion.div>

            {/* CONTENT */}
            <div className="relative z-10 mt-8">
              <h3 className="text-3xl font-black text-white group-hover:text-cyan-300 transition duration-500">
                {feature.title}
              </h3>

              <p className="mt-5 text-white/90 leading-relaxed text-lg">
                {feature.desc}
              </p>
            </div>

            {/* BIG NUMBER */}
            <div className="absolute bottom-2 right-5 text-[90px] font-black text-white/[0.14] group-hover:text-white/[0.28] transition duration-500">
              0{i + 1}
            </div>

            {/* FLOATING DOT */}
            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 3,
              }}
              className={`absolute top-6 right-6 w-3 h-3 rounded-full bg-gradient-to-r ${feature.gradient}`}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
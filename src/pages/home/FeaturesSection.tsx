import { motion, useAnimationFrame, useMotionValue, useTransform } from "framer-motion";
import { useState, useEffect } from "react";
import {
  Sparkles,
  ShieldCheck,
  Rocket,
  Gauge,
  Layers3,
  Wand2,
} from "lucide-react";

/* ─── Feature Data ─── */
const features = [
  {
    icon: <Sparkles size={28} />,
    title: "Modern UI/UX",
    desc: "Clean, intuitive and conversion-focused interfaces designed for premium user experiences.",
    gradient: "from-[#00d4ff] to-[#0057ff]",
    glowColor: "rgba(0,212,255,0.35)",
    dotColor: "#00d4ff",
  },
  {
    icon: <Wand2 size={28} />,
    title: "Premium Animations",
    desc: "Smooth interactions powered by Framer Motion and GSAP with immersive effects.",
    gradient: "from-[#00d4ff] to-[#f0b429]",
    glowColor: "rgba(240,180,41,0.30)",
    dotColor: "#f0b429",
  },
  {
    icon: <Rocket size={28} />,
    title: "SEO Optimized",
    desc: "Built with modern SEO strategies to improve ranking and online visibility.",
    gradient: "from-[#0057ff] to-[#00d4ff]",
    glowColor: "rgba(0,87,255,0.35)",
    dotColor: "#00d4ff",
  },
  {
    icon: <ShieldCheck size={28} />,
    title: "High Security",
    desc: "Secure architecture with advanced protection layers and best security practices.",
    gradient: "from-[#0057ff] to-[#001a5e]",
    glowColor: "rgba(0,87,255,0.30)",
    dotColor: "#0057ff",
  },
  {
    icon: <Gauge size={28} />,
    title: "Fast Performance",
    desc: "Optimized code structure for ultra-fast speed and seamless experiences.",
    gradient: "from-[#00d4ff] to-[#0057ff]",
    glowColor: "rgba(0,212,255,0.30)",
    dotColor: "#00d4ff",
  },
  {
    icon: <Layers3 size={28} />,
    title: "Scalable Architecture",
    desc: "Built to scale with your business and handle high traffic effortlessly.",
    gradient: "from-[#00d4ff] to-[#001a5e]",
    glowColor: "rgba(0,212,255,0.25)",
    dotColor: "#00d4ff",
  },
];

/* ─── Floating Particle ─── */
interface ParticleProps {
  x: number;
  y: number;
  size: number;
  delay: number;
  duration: number;
}
const FloatingParticle = ({ x, y, size, delay, duration }: ParticleProps) => (
  <motion.div
    className="absolute rounded-full bg-white pointer-events-none"
    style={{ left: `${x}%`, top: `${y}%`, width: size, height: size }}
    animate={{
      opacity: [0, 0.9, 0],
      scale: [0.5, 1.4, 0.5],
      y: [0, -30, 0],
    }}
    transition={{
      duration,
      delay,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  />
);

/* ─── Animated Grid (perspective) ─── */
const PerspectiveGrid = () => {
  const progress = useMotionValue(0);
  useAnimationFrame((t) => {
    progress.set((t / 4000) % 1);
  });
  const translateY = useTransform(progress, [0, 1], ["0%", "100%"]);

  return (
    <div
      className="absolute inset-0 overflow-hidden pointer-events-none"
      style={{
        perspective: "800px",
        perspectiveOrigin: "50% 0%",
      }}
    >
      <motion.div
        className="absolute inset-x-0"
        style={{
          height: "200%",
          top: "-50%",
          transformStyle: "preserve-3d",
          rotateX: "55deg",
          translateY,
        }}
      >
        {/* Horizontal lines */}
        {Array.from({ length: 28 }).map((_, i) => (
          <div
            key={`h-${i}`}
            className="absolute w-full border-t"
            style={{
              top: `${(i / 27) * 100}%`,
              borderColor: "rgba(0,212,255,0.10)",
            }}
          />
        ))}
        {/* Vertical lines */}
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={`v-${i}`}
            className="absolute h-full border-l"
            style={{
              left: `${(i / 19) * 100}%`,
              borderColor: "rgba(0,212,255,0.10)",
            }}
          />
        ))}
      </motion.div>
    </div>
  );
};

/* ─── Glowing Orb ─── */
interface OrbProps {
  style: React.CSSProperties;
  color: string;
  delay?: number;
}
const GlowOrb = ({ style, color, delay = 0 }: OrbProps) => (
  <motion.div
    className="absolute rounded-full pointer-events-none"
    style={{
      ...style,
      background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,
      filter: "blur(40px)",
    }}
    animate={{
      scale: [1, 1.15, 1],
      opacity: [0.55, 0.85, 0.55],
    }}
    transition={{
      duration: 5,
      delay,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  />
);

/* ─── Feature Card ─── */
interface FeatureCardProps {
  feature: (typeof features)[0];
  index: number;
}
const FeatureCard = ({ feature, index }: FeatureCardProps) => {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 60, scale: 0.93 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay: index * 0.09, ease: "easeOut" }}
      whileHover={{ y: -10, scale: 1.025 }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className="group relative overflow-hidden rounded-2xl cursor-pointer"
      style={{
        background:
          "linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.03) 100%)",
        border: "1px solid rgba(255,255,255,0.10)",
        backdropFilter: "blur(18px)",
        WebkitBackdropFilter: "blur(18px)",
      }}
    >
      {/* Animated border glow on hover */}
      <motion.div
        className="absolute inset-0 rounded-2xl pointer-events-none"
        animate={{
          boxShadow: hovered
            ? `0 0 0 1.5px ${feature.dotColor}88, 0 0 40px ${feature.glowColor}, inset 0 0 30px ${feature.glowColor}`
            : "0 0 0 1px rgba(255,255,255,0.08)",
        }}
        transition={{ duration: 0.35 }}
      />

      {/* Top-right pulsing dot */}
      <div className="absolute top-4 right-4 z-20">
        <motion.div
          className="w-2.5 h-2.5 rounded-full"
          style={{ backgroundColor: feature.dotColor }}
          animate={{
            boxShadow: [
              `0 0 0 0px ${feature.dotColor}55`,
              `0 0 0 6px ${feature.dotColor}00`,
            ],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Inner card shine sweep */}
      <motion.div
        className="absolute inset-0 pointer-events-none rounded-2xl"
        style={{
          background:
            "linear-gradient(120deg, transparent 30%, rgba(255,255,255,0.06) 50%, transparent 70%)",
          backgroundSize: "200% 100%",
        }}
        animate={{ backgroundPosition: hovered ? "200% 0" : "-200% 0" }}
        transition={{ duration: 0.7 }}
      />

      {/* Card content */}
      <div className="relative z-10 p-6 sm:p-7 md:p-8">
        {/* Icon box */}
        <motion.div
          className={`relative w-14 h-14 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center text-white shadow-lg`}
          animate={hovered ? { rotate: [0, -6, 6, 0], scale: 1.08 } : { rotate: 0, scale: 1 }}
          transition={{ duration: 0.45 }}
          style={{
            boxShadow: hovered ? `0 8px 30px ${feature.glowColor}` : "none",
          }}
        >
          {/* Icon inner glow */}
          <div
            className="absolute inset-0 rounded-xl sm:rounded-2xl opacity-40"
            style={{
              background: `radial-gradient(circle at 30% 30%, rgba(255,255,255,0.4), transparent 60%)`,
            }}
          />
          <span className="relative z-10">{feature.icon}</span>
        </motion.div>

        {/* Title + Desc */}
        <div className="mt-6 sm:mt-7">
          <motion.h3
            className="text-lg sm:text-xl md:text-2xl font-bold text-white transition-colors"
            animate={{ color: hovered ? feature.dotColor : "#ffffff" }}
            transition={{ duration: 0.25 }}
          >
            {feature.title}
          </motion.h3>
          <p className="mt-3 text-sm sm:text-base text-white/65 leading-relaxed">
            {feature.desc}
          </p>
        </div>

        {/* Big background number */}
        <motion.div
          className="absolute bottom-2 right-3 font-black select-none pointer-events-none"
          style={{
            fontSize: "clamp(56px, 8vw, 96px)",
            lineHeight: 1,
            color: "rgba(255,255,255,0.07)",
          }}
          animate={{ color: hovered ? `${feature.dotColor}28` : "rgba(255,255,255,0.07)" }}
          transition={{ duration: 0.3 }}
        >
          0{index + 1}
        </motion.div>
      </div>
    </motion.div>
  );
};

/* ─── Main Section ─── */
const FeaturesSection = () => {
  const [particles, setParticles] = useState<ParticleProps[]>([]);

  useEffect(() => {
    setParticles(
      Array.from({ length: 55 }, (_) => ({
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 2.5 + 0.8,
        delay: Math.random() * 6,
        duration: Math.random() * 4 + 3,
      }))
    );
  }, []);

  return (
    <section
      id="features-section"
      aria-label="Our Core Features"
      className="relative py-10 md:py-10 px-4 md:px-8 lg:px-10 overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #020d1a 0%, #030f20 60%, #020d1a 100%)",
      }}
    >
      {/* ── Animated perspective grid ── */}
      <PerspectiveGrid />

      {/* ── Floating star particles ── */}
      {particles.map((p, i) => (
        <FloatingParticle key={i} {...p} />
      ))}

      {/* ── Glowing orbs (matching the reference screenshot) ── */}
      <GlowOrb
        color="rgba(0,200,255,0.55)"
        style={{ top: "-80px", left: "-60px", width: 380, height: 380 }}
        delay={0}
      />
      <GlowOrb
        color="rgba(0,200,255,0.45)"
        style={{ top: "-60px", right: "-40px", width: 320, height: 320 }}
        delay={1.5}
      />
      <GlowOrb
        color="rgba(0,80,255,0.30)"
        style={{ bottom: "0px", left: "10%", width: 400, height: 350 }}
        delay={2}
      />
      <GlowOrb
        color="rgba(0,200,255,0.25)"
        style={{ bottom: "0px", right: "5%", width: 350, height: 300 }}
        delay={3}
      />

      {/* ── Top-center large cyan glow ── */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 pointer-events-none"
        style={{
          width: 900,
          height: 400,
          background:
            "radial-gradient(ellipse, rgba(0,212,255,0.12) 0%, transparent 70%)",
          filter: "blur(30px)",
        }}
      />

      {/* ── HEADER ── */}
      <div className="relative z-10 text-center mb-12 md:mb-10 px-2">
        {/* Badge */}
        <motion.span
          initial={{ opacity: 0, y: -24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-[#00d4ff] text-xs sm:text-sm font-semibold tracking-widest uppercase"
          style={{
            background: "rgba(0,212,255,0.08)",
            border: "1px solid rgba(0,212,255,0.25)",
          }}
        >
          <motion.span
            animate={{ rotate: 360 }}
            transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
            className="inline-block"
          >
            ✦
          </motion.span>
          Why Choose Us
        </motion.span>

        {/* H2 */}
        <motion.h2
          initial={{ opacity: 0, y: 44 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-5 md:mt-6 text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight"
        >
          Powerful Digital
          <span
            className="block bg-clip-text text-transparent"
            style={{
              backgroundImage:
                "linear-gradient(90deg, #00d4ff 0%, #ffffff 40%, #f0b429 70%, #00d4ff 100%)",
              backgroundSize: "200% auto",
              animation: "gradientShift 4s linear infinite",
            }}
          >
            Features &amp; Benefits
          </span>
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.22 }}
          className="max-w-2xl mx-auto mt-4 md:mt-6 text-sm sm:text-base md:text-lg text-white/60 leading-relaxed"
        >
          We combine modern technologies, premium interfaces
          <br className="hidden sm:block" /> and high performance systems.
        </motion.p>
      </div>

      {/* ── FEATURE GRID ── */}
      <div className="relative z-20 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 md:gap-7">
        {features.map((feature, i) => (
          <FeatureCard key={i} feature={feature} index={i} />
        ))}
      </div>

      {/* ── Gradient shift keyframe ── */}
      <style>{`
        @keyframes gradientShift {
          0%   { background-position: 0% center; }
          100% { background-position: 200% center; }
        }
      `}</style>
    </section>
  );
};

export default FeaturesSection;
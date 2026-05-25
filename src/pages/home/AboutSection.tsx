import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {  Zap, Layout, Lock } from "lucide-react";
import Stack from "../../components/Stack/Stack";

// ── Each topic has its own icon, label, description & hero image ──────────
const topics = [
  {
    icon: <Layout size={18} />,
    label: "Premium UI/UX",
    desc: "Pixel-perfect interfaces crafted for maximum visual impact and intuitive usability.",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=600&auto=format&fit=crop",
  },
  {
    icon: <Zap size={18} />,
    label: "Fast Performance",
    desc: "Blazing-fast load times and smooth 60fps animations optimised across all devices.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600&auto=format&fit=crop",
  },
  {
    icon: <Layout size={18} />,
    label: "Responsive Design",
    desc: "Fluid layouts that look flawless from mobile phones to ultra-wide desktop monitors.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=600&auto=format&fit=crop",
  },
  {
    icon: <Lock size={18} />,
    label: "Secure Systems",
    desc: "Enterprise-grade security baked in from day one — protecting your data and users.",
    image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=600&auto=format&fit=crop",
  },
];

const AboutSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // ── Auto-cycle active topic every 3 s ─────────────────────────────────
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % topics.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  // ── Build ordered card array: active image always on top (last in array) ─
  // Stack renders last-item on top; rotate so activeIndex card is last.
  const orderedCards = topics.map((_, i) => {
    const offset = (i - activeIndex + topics.length) % topics.length;
    return { offset, topic: topics[i] };
  });
  orderedCards.sort((a, b) => a.offset - b.offset); // 0 = active → put it last

  const stackCards = orderedCards.map(({ topic }) => (
    <img
      src={topic.image}
      alt={topic.label}
      style={{ width: "100%", height: "100%", objectFit: "cover" }}
    />
  ));

  return (
    <section className="px-6 md:px-20 py-28">
      <div className="grid md:grid-cols-2 gap-16 items-center">

        {/* ── LEFT: HEADING + TOPICS ───────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl font-serif font-black leading-tight">
            Why Choose
            <span className="text-blue-900"> Webify?</span>
          </h2>
          <p className="text-gray-500 text-lg mt-6 leading-relaxed">
            We combine modern technologies, futuristic UI/UX and scalable
            architecture to create next-generation digital products.
          </p>

          {/* TOPIC LIST */}
          <div className="flex flex-col gap-3 mt-10">
            {topics.map((topic, i) => {
              const isActive = i === activeIndex;
              return (
                <motion.div
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  animate={{
                    backgroundColor: isActive
                      ? "rgba(219,234,254,1)"   // blue-100
                      : "rgba(239,246,255,0.6)", // blue-50/60
                    borderColor: isActive
                      ? "rgba(147,197,253,1)"   // blue-300
                      : "rgba(219,234,254,0.6)",
                  }}
                  transition={{ duration: 0.4 }}
                  className="flex items-start gap-4 px-5 py-4 rounded-lg shadow-md shadow-black/60 border cursor-pointer group"
                >
                  {/* ICON */}
                  <div
                    className={`mt-0.5 flex-shrink-0 w-8 h-8 rounded-xl flex items-center justify-center transition-colors duration-300 ${
                      isActive
                        ? "bg-blue-800 text-white"
                        : "bg-blue-100 text-blue-600"
                    }`}
                  >
                    {topic.icon}
                  </div>

                  {/* TEXT */}
                  <div>
                    <p
                      className={`font-semibold text-md transition-colors duration-300 ${
                        isActive ? "text-blue-800" : "text-slate-700"
                      }`}
                    >
                      {topic.label}
                    </p>

                    <AnimatePresence>
                      {isActive && (
                        <motion.p
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.35 }}
                          className="text-sm text-blue-600/80 mt-1 leading-relaxed overflow-hidden"
                        >
                          {topic.desc}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* ACTIVE DOT */}
                  {isActive && (
                    <motion.div
                      layoutId="topic-dot"
                      className="ml-auto mt-1 w-2.5 h-2.5 rounded-full bg-blue-600 flex-shrink-0"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* ── RIGHT: STACK COMPONENT ───────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative flex items-center justify-center"
        >
          {/* GLOW */}
          <div className="absolute inset-0 bg-blue-400/20 blur-[80px] rounded-full" />

          {/* STACK WRAPPER — fixed size so cards render correctly */}
          <div
            style={{ width: 460, height: 480 }}
            className="relative"
          >
            <Stack
              cards={stackCards}
              randomRotation={true}
              sensitivity={180}
              sendToBackOnClick={true}
              animationConfig={{ stiffness: 220, damping: 22 }}
            />
          </div>

          {/* FLOATING LABEL under stack */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.35 }}
              className="absolute -bottom-10 left-1/2 -translate-x-1/2 px-10 py-2 rounded-full bg-blue-700 text-white text-sm font-semibold shadow-lg whitespace-nowrap"
            >
              {topics[activeIndex].label}
            </motion.div>
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
};

export default AboutSection;

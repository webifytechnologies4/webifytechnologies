import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Zap, Layout, Lock } from "lucide-react";
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
      alt={`${topic.label} preview image`}
      style={{ width: "100%", height: "100%", objectFit: "cover" }}
    />
  ));

  return (
    <section id="why-choose-us" aria-label="Why Choose Us" className="px-4 md:px-8 lg:px-16 py-8 md:py-16 overflow-hidden bg-brand-white">
      <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-start md:items-center">

        {/* ── LEFT ── */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center md:text-left"
        >
          <h2 className="text-3xl md:text-5xl font-bold leading-tight text-brand-darkBlue">
            Why Choose
            <span className="text-brand-blue"> Webify?</span>
          </h2>

          <p className="text-gray-600 text-sm md:text-lg mt-4 md:mt-6 leading-relaxed">
            We combine modern technologies, futuristic UI/UX and scalable
            architecture to create next-generation digital products.
          </p>

          {/* TOPIC LIST */}
          <div className="flex flex-col gap-3 mt-8 md:mt-10">
            {topics.map((topic, i) => {
              const isActive = i === activeIndex;

              return (
                <motion.div
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  animate={{
                    backgroundColor: isActive
                      ? "rgba(227,242,253,1)"
                      : "rgba(227,242,253,0.3)",
                    borderColor: isActive
                      ? "rgba(21,101,192,1)"
                      : "rgba(227,242,253,0.4)",
                  }}
                  transition={{ duration: 0.3 }}
                  className="flex items-start gap-3 md:gap-4 px-4 md:px-5 py-3 md:py-4 rounded-lg shadow-md border cursor-pointer"
                >
                  {/* ICON */}
                  <div
                    className={`mt-0.5 flex-shrink-0 w-7 h-7 md:w-8 md:h-8 rounded-xl flex items-center justify-center ${isActive
                        ? "bg-brand-blue text-white"
                        : "bg-brand-light text-brand-blue"
                      }`}
                  >
                    {topic.icon}
                  </div>

                  {/* TEXT */}
                  <div className="text-left">
                    <p
                      className={`font-bold text-sm md:text-lg ${isActive ? "text-brand-darkBlue" : "text-slate-700"
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
                          className="text-xs md:text-sm text-brand-blue/90 mt-1 leading-relaxed"
                        >
                          {topic.desc}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* DOT */}
                  {isActive && (
                    <motion.div
                      layoutId="topic-dot"
                      className="ml-auto mt-1 w-2 h-2 rounded-full bg-brand-blue"
                    />
                  )}
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* ── RIGHT ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative flex items-center justify-center mt-10 md:mt-0"
        >
          {/* GLOW */}
          <div className="absolute inset-0 bg-brand-cyan/20 blur-[80px] rounded-full" />

          {/* RESPONSIVE STACK WRAPPER (FIX MAIN ISSUE) */}
          <div className="relative w-full max-w-[320px] sm:max-w-[380px] md:w-[460px] md:h-[480px] h-[380px]">
            <Stack
              cards={stackCards}
              randomRotation={true}
              sensitivity={180}
              sendToBackOnClick={true}
              animationConfig={{ stiffness: 220, damping: 22 }}
            />
          </div>

          {/* LABEL */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              className="absolute -bottom-8 md:-bottom-10 left-1/2 -translate-x-1/2 px-6 md:px-10 py-2 rounded-full bg-brand-blue text-white text-xs md:text-sm font-semibold shadow-lg whitespace-nowrap"
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

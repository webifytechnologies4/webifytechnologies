import { motion } from "framer-motion";
import {
  Globe,
  ShoppingCart,
  Smartphone,
  Server,
  PenTool,
  Video,
} from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Website Development",
    desc: "Modern responsive websites with premium UI/UX and high performance.",
    image:
      "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?q=80&w=1600&auto=format&fit=crop",
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce Solutions",
    desc: "Scalable online stores with secure payment integration and automation.",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1600&auto=format&fit=crop",
  },
  {
    icon: Server,
    title: "Software Development",
    desc: "Custom SaaS platforms, dashboards and enterprise-grade systems.",
    image:
      "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=1600&auto=format&fit=crop",
  },
  {
    icon: Smartphone,
    title: "App Development",
    desc: "Android & iOS apps built with modern technologies and clean UI.",
    image:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=1600&auto=format&fit=crop",
  },
  {
    icon: PenTool,
    title: "UI/UX Design",
    desc: "Creative and user-focused interfaces for modern digital products.",
    image:
      "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?q=80&w=1600&auto=format&fit=crop",
  },
  {
    icon: Video,
    title: "Video Editing",
    desc: "Professional editing for reels, branding videos and promotions.",
    image:
      "https://images.unsplash.com/photo-1492724441997-5dc865305da7?q=80&w=1600&auto=format&fit=crop",
  },
];

// Motion container variants for smooth content cascading
const cardVariants = {
  hidden: (isEven: any) => ({
    opacity: 0,
    x: isEven ? -60 : 60,
    y: 40,
  }),
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 1, 0.5, 1] as const, // Premium cubic-bezier ease out
    },
  },
};

const ServicesSection = () => {
  return (
    <section className="py-24 bg-slate-50/50 flex justify-center overflow-hidden">
      <div className="w-[95%] md:w-[85%] max-w-7xl">
        {/* HEADER */}
        <div className="text-center mb-16 md:mb-24">
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-cyan-600 uppercase tracking-[4px] md:tracking-[6px] text-xs md:text-sm font-semibold"
          >
            What We Offer
          </motion.p>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-3xl md:text-5xl font-black mt-4 text-[#0B1B3F]"
          >
            Our Premium Services
          </motion.h2>
        </div>

        {/* SERVICES LIST */}
        <div className="space-y-6 md:space-y-14">
          {services.map((service, i) => {
            const Icon = service.icon;
            const isEven = i % 2 === 0;

            return (
              <motion.div
                key={i}
                custom={isEven}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className={`flex ${isEven ? "justify-start pr-6 md:pr-16" : "justify-end pl-6 md:pl-16"}`}
              >
                {/* CARD */}
                <motion.div
                  whileHover={{ 
                    y: -6,
                    transition: { duration: 0.3, ease: "easeOut" }
                  }}
                  className={`group relative w-full md:w-[88%] bg-white border border-slate-100 
                    shadow-xl shadow-black/40
                    hover:shadow-[0_25px_60px_rgba(11,27,95,0.12)] 
                    transition-shadow duration-500 px-6 md:px-12 py-10 md:py-12 
                    ${
                      isEven
                        ? "rounded-[32px] md:rounded-r-full md:rounded-l-[32px]"
                        : "rounded-[32px] md:rounded-l-full md:rounded-r-[32px]"
                    }`}
                >
                  {/* FLOATING ICON COMPONENT */}
                  <div
                    className={`absolute top-1/2 -translate-y-1/2 z-[10] ${
                      isEven 
                        ? "right-[-32px] md:right-[-64px]" 
                        : "left-[-32px] md:left-[-64px]"
                    }`}
                  >
                    {/* OUTER CIRCLE SHADOW EFFECT */}
                    <motion.div 
                      whileHover={{ scale: 1.05, rotate: isEven ? 5 : -5 }}
                      className="w-20 h-20 md:w-32 md:h-32 rounded-full bg-[#f4f0e6] shadow-[0_12px_35px_rgba(11,27,95,0.15)] group-hover:shadow-[0_20px_45px_rgba(11,27,95,0.25)] transition-all duration-500 flex items-center justify-center"
                    >
                      {/* INNER GRADIENT */}
                      <div className="w-14 h-14 md:w-24 md:h-24 rounded-full bg-gradient-to-b from-[#d4af37] via-[#5c5c5c] to-[#0B1B5F] flex items-center justify-center shadow-inner">
                        <motion.div
                          whileHover={{ scale: 1.1 }}
                          transition={{ type: "spring", stiffness: 300, damping: 15 }}
                        >
                          <Icon className="text-white" size={window.innerWidth < 768 ? 24 : 36} />
                        </motion.div>
                      </div>
                    </motion.div>
                  </div>

                  {/* TYPOGRAPHY CONTENT */}
                  <div className={`${isEven ? "pr-12 md:pr-24 lg:pr-32" : "pl-12 md:pl-24 lg:pl-32"}`}>
                    <h3 className="text-2xl md:text-3xl font-black text-[#071739] leading-tight transition-colors duration-300 group-hover:text-cyan-600">
                      {service.title}
                    </h3>

                    <p className="mt-3 md:mt-4 text-[#31496b] text-base md:text-lg leading-relaxed font-semibold">
                      {service.desc}
                    </p>

                    <p className="mt-2 text-slate-400 text-xs md:text-sm leading-relaxed font-medium tracking-wide">
                      We create modern and scalable digital solutions with premium design and seamless experience.
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
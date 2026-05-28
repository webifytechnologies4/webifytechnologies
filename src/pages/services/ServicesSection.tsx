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
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce Solutions",
    desc: "Scalable online stores with secure payment integration and automation.",
  },
  {
    icon: Server,
    title: "Software Development",
    desc: "Custom SaaS platforms, dashboards and enterprise-grade systems.",
  },
  {
    icon: Smartphone,
    title: "App Development",
    desc: "Android & iOS apps built with modern technologies and clean UI.",
  },
  {
    icon: PenTool,
    title: "UI/UX Design",
    desc: "Creative and user-focused interfaces for modern digital products.",
  },
  {
    icon: Video,
    title: "Video Editing",
    desc: "Professional editing for reels, branding videos and promotions.",
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
      ease: [0.25, 1, 0.5, 1] as const,
    },
  },
};

const ServicesSection = () => {
  return (
    <section id="services-list" aria-label="Our Premium Services" className="py-8 md:py-16 bg-brand-white flex justify-center overflow-hidden w-full">
      <div className="w-[95%] md:w-[85%] max-w-7xl">
        {/* HEADER */}
        <div className="text-center mb-16 md:mb-24">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-brand-blue uppercase tracking-[4px] md:tracking-[6px] text-xs md:text-sm font-semibold"
          >
            What We Offer
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-3xl md:text-5xl font-bold mt-4 text-brand-darkBlue"
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
                  className={`group relative w-full md:w-[88%] bg-white border border-brand-cyan/15 
                    shadow-lg shadow-brand-blue/5
                    hover:shadow-[0_25px_60px_rgba(21,101,192,0.08)] 
                    transition-shadow duration-500 px-6 md:px-12 py-10 md:py-12 
                    ${isEven
                      ? "rounded-[32px] md:rounded-r-full md:rounded-l-[32px]"
                      : "rounded-[32px] md:rounded-l-full md:rounded-r-[32px]"
                    }`}
                >
                  {/* FLOATING ICON COMPONENT */}
                  <div
                    className={`absolute top-1/2 -translate-y-1/2 z-[10] ${isEven
                        ? "right-[-32px] md:right-[-64px]"
                        : "left-[-32px] md:left-[-64px]"
                      }`}
                  >
                    {/* OUTER CIRCLE SHADOW EFFECT */}
                    <motion.div
                      whileHover={{ scale: 1.05, rotate: isEven ? 5 : -5 }}
                      className="w-20 h-20 md:w-32 md:h-32 rounded-full bg-brand-light shadow-[0_12px_35px_rgba(21,101,192,0.1)] group-hover:shadow-[0_20px_45px_rgba(21,101,192,0.15)] transition-all duration-500 flex items-center justify-center"
                    >
                      {/* INNER GRADIENT */}
                      <div className="w-14 h-14 md:w-24 md:h-24 rounded-full bg-gradient-to-b from-brand-cyan to-brand-blue flex items-center justify-center shadow-inner">
                        <motion.div
                          whileHover={{ scale: 1.1 }}
                          transition={{ type: "spring", stiffness: 300, damping: 15 }}
                        >
                          <Icon className="text-white" size={32} />
                        </motion.div>
                      </div>
                    </motion.div>
                  </div>

                  {/* TYPOGRAPHY CONTENT */}
                  <div className={`${isEven ? "pr-12 md:pr-24 lg:pr-32" : "pl-12 md:pl-24 lg:pl-32"}`}>
                    <h3 className="text-xl md:text-2xl font-bold text-brand-darkBlue leading-tight transition-colors duration-300 group-hover:text-brand-cyan">
                      {service.title}
                    </h3>

                    <p className="mt-3 md:mt-4 text-gray-600 text-sm md:text-base leading-relaxed">
                      {service.desc}
                    </p>

                    <p className="mt-2 text-gray-400 text-xs md:text-sm leading-relaxed">
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
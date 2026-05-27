import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Globe, Smartphone, Code2, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    icon: <Globe size={42} />,
    title: "Web Development",
    desc: "Modern responsive websites with premium UI/UX and high performance development.",
    bgImage:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop",
  },
  {
    icon: <Smartphone size={42} />,
    title: "App Development",
    desc: "Scalable Android & iOS applications with smooth animations and modern architecture.",
    bgImage:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2070&auto=format&fit=crop",
  },
  {
    icon: <Code2 size={42} />,
    title: "Software Solutions",
    desc: "Custom software systems and automation tools built for startups and enterprises.",
    bgImage:
      "https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=2070&auto=format&fit=crop",
  },
];

const ServicesSection = () => {
  const [active, setActive] = useState(0);

  // AUTO CHANGE ACTIVE CARD
  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % services.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="services-section" aria-label="Our Digital Services" className="relative py-8 md:py-16 max-w-7xl mx-auto px-4 md:px-8 lg:px-16 overflow-hidden bg-brand-white">

      {/* HEADING */}
      <div className="relative z-10 text-center mb-10">

        <motion.h2
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mt-6 text-3xl md:text-5xl font-bold text-brand-darkBlue"
        >
          Our Premium
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-brand-darkBlue via-brand-blue to-brand-cyan">
            Digital Services
          </span>
        </motion.h2>

        <p className="max-w-5xl mx-auto mt-6 text-sm md:text-lg leading-relaxed text-gray-600">
          We build next-generation digital experiences using modern
          technologies, smooth animations and scalable architectures.
        </p>
      </div>

      {/* SERVICE CARDS */}
      <div className="relative z-20 flex flex-col md:flex-row gap-6 h-auto md:h-[460px]">

        {services.map((service, index) => {
          const isActive = active === index;

          return (
            <motion.div
              key={index}
              onMouseEnter={() => setActive(index)}

              /*  MOBILE FIX: no width animation on mobile */
              animate={{
                width: typeof window !== "undefined" && window.innerWidth >= 768
                  ? (isActive ? "50%" : "25%")
                  : "100%",
              }}

              transition={{
                duration: 0.8,
                ease: "easeInOut",
              }}

              className="group relative overflow-hidden rounded-lg cursor-pointer min-h-[320px] w-full md:min-h-[340px]"
              style={{
                boxShadow: isActive
                  ? "0 25px 80px rgba(21,101,192,0.25)"
                  : "0 10px 30px rgba(0,0,0,0.35)",
              }}
            >

              {/* BACKGROUND IMAGE */}
              <motion.div
                animate={{
                  scale: isActive ? 1.08 : 1,
                }}
                transition={{
                  duration: 1.2,
                  ease: "easeOut",
                }}
                className="absolute inset-0"
              >
                <img
                  src={service.bgImage}
                  alt={`${service.title} illustration image`}
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-black/50" />

              <div className="absolute inset-0 opacity-80 bg-black/40" />

              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700 bg-black/40" />

              {/* LIGHT SWEEP */}
              <motion.div
                animate={{ x: ["-120%", "180%"] }}
                transition={{
                  repeat: Infinity,
                  duration: 5,
                  ease: "linear",
                }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12"
              />

              {/* TOP BORDER */}
              {isActive && (
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.5 }}
                  className="absolute top-0 left-0 right-0 h-[3px] origin-left bg-gradient-to-r from-brand-cyan via-brand-blue to-brand-cyan"
                />
              )}

              {/* ORB */}
              <div className="absolute -top-40 -right-40 w-[320px] h-[320px] bg-brand-cyan/10 rounded-full blur-3xl" />

              {/* CONTENT */}
              <div className="relative z-10 h-full flex flex-col justify-between p-6 md:p-10 text-white">

                <div>
                  {/* ICON */}
                  <div className="w-16 md:w-20 h-16 md:h-20 rounded-3xl bg-white/10 backdrop-blur-xl border border-brand-cyan/20 flex items-center justify-center">
                    {service.icon}
                  </div>

                  {/* TITLE */}
                  <h3 className={`font-bold mt-6 leading-tight ${isActive ? "text-2xl md:text-3xl" : "text-xl md:text-2xl"
                    }`}>
                    {service.title}
                  </h3>

                  {/* DESCRIPTION */}
                  <div className="mt-5">
                    <p className="text-sm md:text-lg text-white/75">
                      {service.desc}
                    </p>

                    {/* BUTTON (ALWAYS VISIBLE ON MOBILE) */}
                    <Link to="/services">
                      <button className="mt-6 flex items-center gap-3 px-5 py-3 rounded-full font-semibold bg-gradient-to-r from-brand-blue to-brand-cyan text-white hover:scale-105 transition duration-300 min-h-[48px]">
                        Explore Service
                        <ArrowUpRight size={18} />
                      </button>
                    </Link>
                  </div>
                </div>

                {/* NUMBER */}
                <div className="absolute bottom-2 right-4 text-7xl md:text-[160px] font-black opacity-10">
                  0{index + 1}
                </div>

                {/* BADGE */}
                {isActive && (
                  <div className="absolute top-6 right-6 px-3 py-1 rounded-full text-xs bg-brand-gold/15 text-brand-gold border border-brand-gold/30">
                    ✦ Premium
                  </div>
                )}

              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default ServicesSection;
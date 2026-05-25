import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Globe, Smartphone, Code2, ArrowUpRight } from "lucide-react";

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
    <section className="relative py-8 max-w-7xl mx-auto px-4 overflow-hidden ">


      {/* HEADING */}
      <div className="relative z-10 text-center mb-10">


        <motion.h2
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mt-6 text-5xl md:text-5xl font-black text-black"
        >
          Our Premium
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-cyan-400 to-yellow-300">
            Digital Services
          </span>
        </motion.h2>

        <p className="max-w-5xl mx-auto mt-6 text-lg leading-relaxed text-gray-600">
          We build next-generation digital experiences using modern
          technologies, smooth animations and scalable architectures.
        </p>
      </div>

      {/* SERVICE CARDS */}
      <div className="relative z-20 flex flex-col md:flex-row gap-6 h-auto  md:h-[460px]">
        {services.map((service, index) => {
          const isActive = active === index;

          return (
            <motion.div
              key={index}
              onMouseEnter={() => setActive(index)}
              animate={{
                width: isActive ? "50%" : "25%",
              }}
              transition={{
                duration: 0.8,
                ease: "easeInOut",
              }}
              className="group relative overflow-hidden rounded-lg cursor-pointer min-h-[340px]"
              style={{
                boxShadow: isActive
                  ? "0 25px 80px rgba(0,180,216,0.25)"
                  : "0 10px 30px rgba(0,0,0,0.35)",
              }}
            >
              {/* BACKGROUND IMAGE */}2              <motion.div
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
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* DARK OVERLAY */}
              <div
                className="absolute inset-0 bg-black/50"
               
              />

              {/* BRAND OVERLAY */}
              <div
                className="absolute inset-0 opacity-80 bg-black/50"
 
              />

              {/* HOVER GLOW */}
              <div
                className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition duration-700"
           
              />

              {/* MOVING LIGHT */}
              <motion.div
                animate={{
                  x: ["-120%", "180%"],
                }}
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
                  className="absolute top-0 left-0 right-0 h-[3px] origin-left bg-gradient-to-r from-cyan-400 via-blue-500 to-yellow-300"
                />
              )}

              {/* ORB LIGHT */}
              <motion.div
                animate={{
                  rotate: 360,
                }}
                transition={{
                  repeat: Infinity,
                  duration: 18,
                  ease: "linear",
                }}
                className="absolute -top-40 -right-40 w-[320px] h-[320px] bg-cyan-400/10 rounded-full blur-3xl"
              />

              {/* CONTENT */}
              <div className="relative z-10 h-full flex flex-col justify-between p-8 md:p-10 text-white">
                <div>
                  {/* ICON */}
                  <motion.div
                    animate={{
                      y: [0, -8, 0],
                    }}
                    transition={{
                      repeat: Infinity,
                      duration: 3,
                    }}
                    className="w-20 h-20 rounded-3xl bg-white/10 backdrop-blur-xl border border-cyan-400/20 flex items-center justify-center shadow-2xl"
                  >
                    {service.icon}
                  </motion.div>

                  {/* TITLE */}
                  <motion.h3
                    layout
                    className={`font-black mt-8 leading-tight transition-all duration-500 ${
                      isActive
                        ? "text-4xl md:text-5xl"
                        : "text-2xl md:text-3xl"
                    }`}
                  >
                    {service.title}
                  </motion.h3>

                  {/* DETAILS */}
                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{
                          opacity: 0,
                          y: 30,
                        }}
                        animate={{
                          opacity: 1,
                          y: 0,
                        }}
                        exit={{
                          opacity: 0,
                          y: 20,
                        }}
                        transition={{
                          duration: 0.5,
                        }}
                        className="overflow-hidden"
                      >
                        <p className="mt-6 text-lg leading-relaxed text-white/75 max-w-md">
                          {service.desc}
                        </p>

                        {/* BUTTON */}
                        <motion.button
                          whileHover={{
                            scale: 1.05,
                          }}
                          whileTap={{
                            scale: 0.95,
                          }}
                          className="mt-8 flex items-center gap-3 px-6 py-3 rounded-full font-semibold bg-gradient-to-r from-cyan-400 to-blue-600 shadow-[0_10px_30px_rgba(0,180,216,0.4)]"
                        >
                          Explore Service
                          <ArrowUpRight size={18} />
                        </motion.button>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* WATERMARK NUMBER */}
                <motion.div
                  animate={{
                    opacity: isActive ? 0.5 : 0.1,
                  }}
                  className="absolute bottom-2 right-6 font-black leading-none select-none"
                  style={{
                    fontSize: "clamp(100px,14vw,180px)",
                  }}
                >
                  0{index + 1}
                </motion.div>

                {/* PREMIUM BADGE */}
                {isActive && (
                  <motion.div
                    initial={{
                      opacity: 0,
                      scale: 0.8,
                    }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                    }}
                    className="absolute top-8 right-8 px-4 py-2 rounded-full text-sm font-semibold bg-yellow-400/15 border border-yellow-300/30 text-yellow-300 backdrop-blur-xl"
                  >
                    ✦ Premium
                  </motion.div>
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
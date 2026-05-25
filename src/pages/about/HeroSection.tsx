import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { motion } from "framer-motion";

import Img1 from "../../assets/aboutfrist.avif";

// Background image URLs (use strings directly — cannot import from HTTP URLs in Vite)
const backgrounds: string[] = [
  "https://plus.unsplash.com/premium_photo-1661877737564-3dfd7282efcb?fm=jpg&q=60&w=3000&auto=format&fit=crop",
  "https://static.vecteezy.com/system/resources/thumbnails/071/061/766/small/person-coding-on-computer-at-night-software-development-free-photo.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSDoCAUt49OLYBYMLsZg7S76To8DpOLqutFQ&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoiBiON9sFYQDE-zQALxHcP6R0pb7_Mj2nSA&s",
  "https://static.toiimg.com/thumb/msid-122002709,imgsize-269008,width-400,resizemode-4/122002709.jpg",
];

const stats = [
  { label: "Projects", value: 7 },
  { label: "Clients", value: 5 },
  { label: "Experience", value: 1 },
  { label: "Satisfaction", value: 100 },
];

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  const [, setCount] = useState(stats.map(() => 0));
  const [activeBg, setActiveBg] = useState(0);

  // Counter Animation
  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) =>
        prev.map((c, i) => {
          const target = stats[i].value;
          if (c < target) return c + Math.ceil(target / 20);
          return target;
        })
      );
    }, 60);

    return () => clearInterval(interval);
  }, []);

  // Background Slider Auto Change
  useEffect(() => {
    const bgInterval = setInterval(() => {
      setActiveBg((prev) => (prev + 1) % backgrounds.length);
    }, 5000);

    return () => clearInterval(bgInterval);
  }, []);

  // Main Animation
  useEffect(() => {
    gsap.fromTo(
      heroRef.current,
      {
        opacity: 0,
        y: 80,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1.4,
        ease: "power4.out",
      }
    );
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden flex items-center">
      {/* BACKGROUND IMAGES */}
      <div className="absolute inset-0">
        {backgrounds.map((bg, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 1.2 }}
            animate={{
              opacity: activeBg === index ? 1 : 0,
              scale: activeBg === index ? 1 : 1.15,
            }}
            transition={{
              duration: 2,
              ease: "easeInOut",
            }}
            className="absolute inset-0"
            style={{
              backgroundImage: `url(${bg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        ))}
      </div>

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/80 z-[1]" />

      {/* GRADIENT LIGHTS */}
     

      {/* CONTENT */}
      <div
        ref={heroRef}
        className="relative z-10 w-full px-6 md:px-20 py-32"
      >
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <p className="text-cyan-400 tracking-[6px] uppercase text-xs md:text-sm font-semibold">
              INNOVATE • DEVELOP • GROW
            </p>

            <h1 className="text-4xl md:text-6xl lg:text-5xl font-black leading-tight text-white mt-6">
              Building Digital Experiences
              <br />

              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-400">
                That Grow Businesses
              </span>
            </h1>

            <p className="text-gray-100 mt-6 text-lg leading-relaxed max-w-xl">
              At Webify Technologies, we create modern websites, scalable
              e-commerce platforms, and powerful digital solutions that help
              brands succeed online with innovation, performance, and clean
              UI/UX.
            </p>

            {/* BUTTONS */}
            <div className="flex flex-wrap gap-4 mt-10">
              <motion.button
                whileHover={{
                  scale: 1.08,
                  boxShadow: "0px 0px 30px rgba(34,211,238,0.5)",
                }}
                className="px-8 py-3 rounded-full bg-cyan-500 text-black font-semibold"
              >
                Explore Services
              </motion.button>

              <motion.button
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "rgba(255,255,255,0.1)",
                }}
                className="px-8 py-3 rounded-full border border-white/20 text-white"
              >
                Start Your Project
              </motion.button>
            </div>

  
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="relative flex justify-center"
          >
            <motion.div
              animate={{
                y: [0, -15, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 4,
              }}
              className="relative w-[320px] md:w-[500px] h-[380px] md:h-[450px] rounded-lg overflow-hidden border border-white/10 backdrop-blur-2xl bg-white/5 shadow-[0_20px_80px_rgba(0,0,0,0.5)]"
            >
              <img
                src={Img1}
                alt="hero"
                className="w-full h-full object-cover hover:scale-110 transition duration-700"
              />

              {/* GLASS TAGS */}
              <div className="absolute top-6 left-6 bg-cyan-500/20 px-4 py-2 rounded-full text-cyan-300 text-xs backdrop-blur-md border border-cyan-400/20">
                UI/UX Design
              </div>

              <div className="absolute bottom-6 right-6 bg-blue-500/20 px-4 py-2 rounded-full text-blue-300 text-xs backdrop-blur-md border border-blue-400/20">
                Scalable Systems
              </div>
            </motion.div>

            {/* GLOW */}
            <div className="absolute -z-10 w-[550px] h-[550px] bg-cyan-400/20 blur-[140px] rounded-full" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
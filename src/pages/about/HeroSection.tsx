import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import bg1 from "../../assets/abouthero/abouthero1.jpeg";
import bg2 from "../../assets/abouthero/abouthero2.jpg";
import bg3 from "../../assets/abouthero/abouthero3.jpeg";
import bg4 from "../../assets/abouthero/abouthero4.jpeg";
import bg5 from "../../assets/abouthero/abouthero5.avif";
import Img1 from "../../assets/abouthero/aboutright.avif";

const backgrounds: string[] = [
  bg1,
  bg2,
  bg3,
  bg4,
  bg5,
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
    <section className="relative min-h-screen overflow-hidden flex items-center pt-22 sm:pt-16 md:pt-0">
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

      {/* CONTENT */}
      <div
        ref={heroRef}
        className="relative z-10 w-full px-4 md:px-8 lg:px-16 py-12 md:py-24"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="text-center lg:text-left"
          >
            <p className="text-brand-cyan tracking-[4px] md:tracking-[6px] uppercase text-[10px] mt-3 sm:mt-0 md:text-xs font-semibold">
              INNOVATE • DEVELOP • GROW
            </p>

            <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white mt-2">
              Building Digital Experiences
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan via-brand-white to-brand-cyan">
                That Grow Businesses
              </span>
            </h1>

            <p className="text-gray-200 mt-6 text-sm md:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
              At Webify Technologies, we create modern websites, scalable
              e-commerce platforms, and powerful digital solutions that help
              brands succeed online with innovation, performance, and clean UI/UX.
            </p>

            {/* BUTTONS */}
            <div className="flex flex-col sm:flex-row gap-4 mt-10 justify-center lg:justify-start">
              <Link to="/services" className="w-full sm:w-auto">
                <motion.button
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0px 0px 30px rgba(0,180,216,0.5)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 rounded-full bg-gradient-to-r from-brand-blue to-brand-cyan text-white font-bold w-full sm:w-auto min-h-[48px] flex items-center justify-center"
                >
                  Explore Services
                </motion.button>
              </Link>

              <Link to="/contact" className="w-full sm:w-auto">
                <motion.button
                  whileHover={{
                    scale: 1.05,
                    backgroundColor: "rgba(255,255,255,0.1)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 rounded-full border border-white/40 text-white w-full sm:w-auto min-h-[48px] flex items-center justify-center bg-transparent"
                >
                  Start Your Project
                </motion.button>
              </Link>
            </div>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="relative flex justify-center mt-10 lg:mt-0"
          >
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ repeat: Infinity, duration: 4 }}
              className="relative w-full max-w-[320px] md:max-w-[500px] h-[340px] md:h-[450px] rounded-lg overflow-hidden border border-white/10 backdrop-blur-2xl bg-white/5 shadow-[0_20px_80px_rgba(0,0,0,0.5)]"
            >
              <img
                src={Img1}
                alt="Webify Technologies digital agency team working scene"
                className="w-full h-full object-cover hover:scale-110 transition duration-700"
              />

              <div className="absolute top-6 left-6 bg-brand-cyan/20 px-4 py-2 rounded-full text-brand-cyan text-xs backdrop-blur-md border border-brand-cyan/30">
                UI/UX Design
              </div>

              <div className="absolute bottom-6 right-6 bg-brand-blue/20 px-4 py-2 rounded-full text-brand-light text-xs backdrop-blur-md border border-brand-blue/30">
                Scalable Systems
              </div>
            </motion.div>

            <div className="absolute -z-10 w-[450px] h-[450px] bg-brand-cyan/20 blur-[140px] rounded-full" />
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
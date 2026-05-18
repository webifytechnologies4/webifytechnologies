import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";

import {
  ShieldCheck,
  Rocket,
  Layers3,
  ArrowRight,
  Star,
  CheckCircle2,
  Sparkles,
  Workflow,
  Globe,
  Code2,
  Smartphone,
} from "lucide-react";


import Navbar from "../components/Navbar";


const process = [
  "Research & Planning",
  "UI/UX Design",
  "Development",
  "Testing & Launch",
];

const features = [
  {
    icon: <Code2 size={40} />,
    title: "Modern Development",
  },
  {
    icon: <Globe size={40} />,
    title: "Global Ready",
  },
  {
    icon: <Smartphone size={40} />,
    title: "Responsive Design",
  },
];

const About = () => {
  const heroRef = useRef<HTMLDivElement>(null);

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
        duration: 1.2,
        ease: "power4.out",
      }
    );
  }, []);

  return (
    <>
      {/* NAVBAR */}
      <div className="sticky top-0 z-50 backdrop-blur-xl bg-white/80 border-b border-gray-200">
        <Navbar />
      </div>

      <div className="bg-white text-black overflow-hidden">

        {/* HERO SECTION */}
        <section className="relative min-h-screen flex items-center justify-center px-6 md:px-20">

          <div className="absolute inset-0 bg-white" />

          {/* GRADIENT GLOW */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-cyan-400/20 blur-[150px] rounded-full" />

          <div
            ref={heroRef}
            className="relative z-10 text-center max-w-6xl"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-cyan-200 bg-cyan-50 mb-8"
            >
              <Sparkles size={18} className="text-cyan-500" />

              <span className="text-cyan-600 font-medium">
                Premium Digital Innovation
              </span>
            </motion.div>

            <h1 className="text-5xl md:text-8xl font-black leading-tight">
              About
              <span className="text-cyan-500">
                {" "}Webify Technologies
              </span>
            </h1>

            <p className="text-lg md:text-xl text-gray-600 mt-8 leading-relaxed max-w-3xl mx-auto">
              We build futuristic websites, scalable software systems and
              premium digital experiences for startups and businesses.
            </p>

            <div className="flex flex-col md:flex-row items-center justify-center gap-5 mt-12">

              <button className="flex items-center gap-2 bg-gradient-to-r from-cyan-400 to-cyan-600 text-white hover:scale-105 transition-all px-8 py-4 rounded-full font-semibold shadow-xl">
                Start Project
                <ArrowRight size={20} />
              </button>

              <button className="border border-gray-300 bg-white px-8 py-4 rounded-full hover:bg-gray-100 transition-all">
                Explore More
              </button>
            </div>
          </div>
        </section>

        {/* COMPANY STORY */}
        <section className="px-6 md:px-20 py-32">

          <div className="grid md:grid-cols-2 gap-16 items-center">

            <motion.div
              initial={{ opacity: 0, x: -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-cyan-400/20 blur-[100px]" />

              <div className="relative overflow-hidden rounded-[40px] border border-gray-200 shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop"
                  alt=""
                  className="w-full h-[550px] object-cover hover:scale-110 transition-all duration-700"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

                <div className="absolute bottom-10 left-10">
                  <h2 className="text-4xl font-black text-white">
                    Modern Innovation
                  </h2>

                  <p className="text-gray-200 mt-4 max-w-md">
                    Building next-generation digital experiences.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-cyan-500 font-semibold tracking-[4px] uppercase">
                Company Story
              </p>

              <h2 className="text-5xl font-black leading-tight mt-5">
                We Create
                <span className="text-cyan-500">
                  {" "}Future Ready
                </span>
                <br />
                Digital Products
              </h2>

              <p className="text-gray-600 text-lg mt-8 leading-relaxed">
                Webify Technologies is a modern startup focused on premium UI,
                scalable systems and futuristic digital solutions.
              </p>

              <div className="grid grid-cols-2 gap-5 mt-10">

                {[
                  "Modern UI/UX",
                  "Fast Performance",
                  "Secure Systems",
                  "Responsive Design",
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 bg-gray-50 border border-gray-200 rounded-2xl px-5 py-4"
                  >
                    <CheckCircle2
                      size={20}
                      className="text-cyan-500"
                    />

                    <span className="font-medium">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* MISSION & VISION */}
        <section className="px-6 md:px-20 py-28 bg-gray-50">

          <div className="grid md:grid-cols-2 gap-8">

            <motion.div
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="bg-white border border-gray-200 rounded-[40px] p-12 shadow-xl"
            >
              <Rocket size={60} className="text-cyan-500 mb-8" />

              <h2 className="text-4xl font-black mb-8">
                Our Mission
              </h2>

              <p className="text-gray-600 leading-relaxed text-lg">
                Empower startups and businesses with modern scalable digital
                products and futuristic user experiences.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-gradient-to-br from-cyan-500 to-cyan-700 rounded-[40px] p-12 text-white shadow-xl"
            >
              <Layers3 size={60} className="mb-8" />

              <h2 className="text-4xl font-black mb-8">
                Our Vision
              </h2>

              <p className="leading-relaxed text-lg text-cyan-50">
                Become a leading technology company delivering premium
                innovation globally.
              </p>
            </motion.div>
          </div>
        </section>

        {/* WHY CHOOSE US */}
        <section className="px-6 md:px-20 py-28">

          <div className="text-center mb-20">
            <h2 className="text-5xl font-black">
              Why Choose
              <span className="text-cyan-500">
                {" "}Us
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">

            {[
              {
                icon: <ShieldCheck size={40} />,
                title: "Premium Quality",
              },
              {
                icon: <Workflow size={40} />,
                title: "Modern Workflow",
              },
              {
                icon: <Star size={40} />,
                title: "Future Ready",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{
                  y: -15,
                  scale: 1.03,
                }}
                className="bg-white border border-gray-200 rounded-[35px] p-10 shadow-xl hover:border-cyan-300 transition-all"
              >
                <div className="text-cyan-500 mb-6">
                  {item.icon}
                </div>

                <h3 className="text-3xl font-bold">
                  {item.title}
                </h3>

                <p className="text-gray-600 mt-5 leading-relaxed">
                  Premium scalable solutions with futuristic design.
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CORE FEATURES */}
        <section className="px-6 md:px-20 py-28 bg-gray-50">

          <div className="text-center mb-20">
            <h2 className="text-5xl font-black">
              Core
              <span className="text-cyan-500">
                {" "}Features
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">

            {features.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="bg-white border border-gray-200 rounded-[30px] p-10 shadow-lg"
              >
                <div className="text-cyan-500 mb-6">
                  {item.icon}
                </div>

                <h3 className="text-2xl font-bold">
                  {item.title}
                </h3>
              </motion.div>
            ))}
          </div>
        </section>

        {/* TECHNOLOGY MARQUEE */}
        {/* <section className="py-16 overflow-hidden border-y border-gray-200">

          <motion.div
            animate={{ x: ["0%", "-100%"] }}
            transition={{
              repeat: Infinity,
              duration: 20,
              ease: "linear",
            }}
            className="flex gap-16 whitespace-nowrap"
          >
            {[...technologies, ...technologies].map((tech, i) => (
              <div
                key={i}
                className="flex items-center gap-4 bg-gray-50 border border-gray-200 px-8 py-4 rounded-2xl min-w-fit"
              >
                <div className="text-4xl text-cyan-500">
                  {tech.icon}
                </div>

                <h2 className="text-2xl font-bold text-cyan-500">
                  {tech.name}
                </h2>
              </div>
            ))}
          </motion.div>
        </section> */}

        {/* PROCESS */}
        <section className="px-6 md:px-20 py-28">

          <div className="text-center mb-20">
            <h2 className="text-5xl font-black">
              Our
              <span className="text-cyan-500">
                {" "}Process
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">

            {process.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                className="bg-white border border-gray-200 rounded-[30px] p-10 text-center shadow-lg"
              >
                <div className="w-16 h-16 rounded-full bg-cyan-500 flex items-center justify-center mx-auto text-2xl font-black text-white">
                  {i + 1}
                </div>

                <h3 className="text-2xl font-bold mt-8">
                  {item}
                </h3>
              </motion.div>
            ))}
          </div>
        </section>

      </div>
    </>
  );
};

export default About;
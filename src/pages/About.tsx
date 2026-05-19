import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";

import {
  Rocket,
  Layers3,
  CheckCircle2,
} from "lucide-react";


import Navbar from "../components/Navbar";
import Img1 from "../assets/aboutfrist.avif";
import Img2 from "../assets/aboutsecond.avif";
import vission from "../assets/vission.jpeg";
import mission from "../assets/mission.jpeg";
import companystory from "../assets/companystory.avif";


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
        <section className="relative min-h-screen overflow-hidden bg-black flex items-center">

          {/* BACKGROUND IMAGE SLIDER */}
          <div className="absolute inset-0">

            {/* IMAGE 1 */}
            <motion.img
              animate={{
                scale: [1, 1.08],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
              src={Img1}
              className="absolute inset-0 w-full h-full object-cover animate-[fade1_14s_infinite]"
            />

            {/* IMAGE 2 */}
            <motion.img
              animate={{
                scale: [1, 1.12],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
              src={Img2}
              className="absolute inset-0 w-full h-full object-cover animate-[fade2_14s_infinite]"
            />

            {/* OVERLAY */}
            <div className="absolute inset-0 bg-black/55" />

            {/* GLOW */}
            <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-cyan-500/20 blur-[180px] rounded-full" />

          </div>

          {/* CUSTOM ANIMATION */}
          <style>
            {`
      @keyframes fade1 {
        0% { opacity: 1; }
        45% { opacity: 1; }
        55% { opacity: 0; }
        100% { opacity: 0; }
      }

      @keyframes fade2 {
        0% { opacity: 0; }
        45% { opacity: 0; }
        55% { opacity: 1; }
        100% { opacity: 1; }
      }
    `}
          </style>

          {/* CONTENT */}
          <div
            ref={heroRef}
            className="relative z-10 w-full px-6 md:px-20"
          >

            <div className="max-w-4xl">

              {/* HEADING */}
              <motion.h1
                initial={{ opacity: 0, y: 80 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight text-white"
              >
                Clarity in Thinking
                <br />

                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-cyan-400 to-blue-500">
                  Confidence in Execution
                </span>
              </motion.h1>

              {/* DESCRIPTION */}
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-lg md:text-xl text-gray-300 mt-8 leading-relaxed max-w-2xl"
              >
                Webify Technologies builds premium websites, scalable software
                systems and futuristic digital experiences for startups and
                modern businesses.
              </motion.p>

              {/* BUTTON */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mt-12"
              >
                <button className="border border-white/20 bg-white/10 backdrop-blur-xl text-white px-9 py-4 rounded-full hover:bg-white/20 transition-all duration-300">
                  Explore More
                </button>
              </motion.div>

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

              <div className="relative overflow-hidden rounded-[25px] border border-gray-200 shadow-2xl">
                <img
                  src={companystory}
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
                    className="group flex items-center gap-3 bg-gray-50 border border-gray-200 rounded-2xl px-5 py-4 transition-all duration-300 hover:border-cyan-400 hover:shadow-lg hover:-translate-y-1"
                  >

                    {/* ICON */}
                    <CheckCircle2
                      size={20}
                      className="text-cyan-500 transition-transform duration-300 group-hover:scale-110"
                    />

                    {/* TEXT */}
                    <span className="font-medium text-gray-800 group-hover:text-cyan-600 transition-colors duration-300">
                      {item}
                    </span>

                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* MISSION & VISION */}
        <section className="px-6 md:px-20 py-28 bg-gray-50 overflow-hidden">

          {/* HEADING */}
          <div className="text-center mb-16">
            <p className="text-cyan-500 uppercase tracking-[5px] font-semibold mb-4">
              The Foundation
            </p>

            <h2 className="text-5xl md:text-6xl font-black leading-tight">
              What Drives
              <span className="text-cyan-500"> Webify</span>
            </h2>

            <p className="text-gray-600 max-w-2xl mx-auto mt-6 leading-relaxed text-lg">
              Innovation, creativity and futuristic thinking are at the core
              of everything we build for modern businesses.
            </p>
          </div>

          {/* CARDS */}
          <div className="grid md:grid-cols-2 gap-10 perspective-[2000px]">

            {/* VISION CARD */}
            <motion.div
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="group h-[420px]"
            >

              <div className="relative w-full h-full duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">

                {/* FRONT */}
                <div className="absolute inset-0 [backface-visibility:hidden] overflow-hidden rounded-[18px] shadow-2xl">

                  <img
                    src={vission}
                    alt="Vision"
                    className="w-full h-full object-cover"
                  />

                  {/* overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                  {/* content */}
                  <div className="absolute bottom-8 left-8">
                    <p className="text-cyan-300 uppercase tracking-[4px] text-sm font-semibold mb-3">
                      Future Innovation
                    </p>

                    <h2 className="text-5xl font-black text-white leading-tight">
                      Our Vision
                    </h2>
                  </div>

                </div>

                {/* BACK */}
                <div className="absolute inset-0 rounded-[18px] overflow-hidden shadow-2xl bg-gradient-to-br from-cyan-500 via-cyan-600 to-blue-700 text-white [transform:rotateY(180deg)] [backface-visibility:hidden] flex flex-col justify-center px-10">

                  <Layers3 size={55} className="mb-6 text-cyan-100" />

                  <h2 className="text-4xl font-black">
                    Future Ready Innovation
                  </h2>

                  <p className="text-cyan-100 text-lg leading-relaxed mt-6">
                    Our vision is to become a globally recognized technology company
                    delivering futuristic digital experiences with innovation,
                    creativity and scalable solutions.
                  </p>

                </div>

              </div>
            </motion.div>

            {/* MISSION CARD */}
            <motion.div
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="group h-[420px]"
            >

              <div className="relative w-full h-full duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">

                {/* FRONT */}
                <div className="absolute inset-0 [backface-visibility:hidden] overflow-hidden rounded-[18px] shadow-2xl">

                  <img
                    src={mission}
                    alt="Mission"
                    className="w-full h-full object-cover"
                  />

                  {/* overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                  {/* content */}
                  <div className="absolute bottom-8 left-8">
                    <p className="text-cyan-300 uppercase tracking-[4px] text-sm font-semibold mb-3">
                      Digital Excellence
                    </p>

                    <h2 className="text-5xl font-black text-white leading-tight">
                      Our Mission
                    </h2>
                  </div>

                </div>

                {/* BACK */}
                <div className="absolute inset-0 rounded-[18px] overflow-hidden shadow-2xl bg-gradient-to-br from-black via-cyan-900 to-cyan-700 text-white [transform:rotateY(180deg)] [backface-visibility:hidden] flex flex-col justify-center px-10">

                  <Rocket size={55} className="mb-6 text-cyan-200" />

                  <h2 className="text-4xl font-black">
                    Building Digital Excellence
                  </h2>

                  <p className="text-cyan-100 text-lg leading-relaxed mt-6">
                    Our mission is to empower startups and businesses with premium
                    UI/UX, scalable systems and modern digital products that help
                    brands grow faster in the digital world.
                  </p>

                </div>

              </div>
            </motion.div>

          </div>
        </section>

      </div>
    </>
  );
};

export default About;
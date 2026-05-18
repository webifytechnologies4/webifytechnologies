import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";

import {
  ArrowRight,
  Globe,
  Smartphone,
  Code2,
  ShieldCheck,
  Rocket,
  Building2,
} from "lucide-react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
const technologies = [
  {
    name: "React",
    icon: (
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
        alt="React"
        className="w-12 h-12"
      />
    ),
  },
  {
    name: "TypeScript",
    icon: (
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
        alt="TypeScript"
        className="w-12 h-12"
      />
    ),
  },
  {
    name: "Tailwind CSS",
    icon: (
      <img
        src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg"
        alt="Tailwind"
        className="w-12 h-12"
      />
    ),
  },
  {
    name: "Node.js",
    icon: (
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
        alt="Node"
        className="w-12 h-12"
      />
    ),
  },
  {
    name: "MongoDB",
    icon: (
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
        alt="MongoDB"
        className="w-12 h-12"
      />
    ),
  },
  {
    name: "Express.js",
    icon: (
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"
        alt="Express"
        className="w-12 h-12"
      />
    ),
  },
  {
    name: "Next.js",
    icon: (
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"
        alt="Next"
        className="w-12 h-12"
      />
    ),
  },
  {
    name: "Firebase",
    icon: (
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg"
        alt="Firebase"
        className="w-12 h-12"
      />
    ),
  },
  {
    name: "HTML5",
    icon: (
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
        alt="HTML"
        className="w-12 h-12"
      />
    ),
  },
  {
    name: "CSS3",
    icon: (
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
        alt="CSS"
        className="w-12 h-12"
      />
    ),
  },
  {
    name: "JavaScript",
    icon: (
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
        alt="JS"
        className="w-12 h-12"
      />
    ),
  },
  {
    name: "GitHub",
    icon: (
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
        alt="GitHub"
        className="w-12 h-12"
      />
    ),
  },
];

const services = [
  {
    icon: <Globe size={40} />,
    title: "Web Development",
    desc: "Modern responsive websites with futuristic user experience.",
  },
  {
    icon: <Smartphone size={40} />,
    title: "App Development",
    desc: "Scalable mobile apps with premium modern UI.",
  },
  {
    icon: <Code2 size={40} />,
    title: "Software Solutions",
    desc: "Custom software systems for businesses and startups.",
  },
];

const industries = [
  {
    title: "Healthcare",
    desc: "Secure healthcare software systems with modern UI.",
    icon: "🏥",
    image:
      "https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg",
  },
  {
    title: "Finance",
    desc: "Premium fintech platforms with scalable architecture.",
    icon: "💳",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1600&auto=format&fit=crop",
  },
  {
    title: "Education",
    desc: "Modern learning platforms and LMS systems.",
    icon: "📚",
    image:
      "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?q=80&w=1600&auto=format&fit=crop",
  },
  {
    title: "Real Estate",
    desc: "High converting property platforms.",
    icon: "🏢",
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1600&auto=format&fit=crop",
  },
  {
    title: "E-Commerce",
    desc: "Scalable online shopping platforms.",
    icon: "🛒",
    image:
      "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?q=80&w=1600&auto=format&fit=crop",
  },
  {
    title: "Technology",
    desc: "Futuristic SaaS and startup products.",
    icon: "🚀",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1600&auto=format&fit=crop",
  },
];

const Home = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const [activeIndustry, setActiveIndustry] = useState(industries[0]);

  useEffect(() => {
    gsap.fromTo(
      heroRef.current,
      {
        opacity: 0,
        y: 100,
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
      <Navbar />

      <div className="bg-white text-black overflow-hidden">

        {/* HERO */}
        <section className="relative min-h-screen flex items-center justify-center px-6 md:px-20 pt-28 overflow-hidden">

          {/* Glow background */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-cyan-400/20 blur-[150px] rounded-full animate-pulse" />

          {/* Floating small particles effect */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute w-2 h-2 bg-cyan-400 rounded-full top-20 left-10 animate-ping" />
            <div className="absolute w-2 h-2 bg-cyan-400 rounded-full bottom-40 right-20 animate-pulse" />
            <div className="absolute w-1.5 h-1.5 bg-cyan-300 rounded-full top-1/3 right-1/3 animate-bounce" />
          </div>

          <div
            ref={heroRef}
            className="relative z-10 text-center max-w-6xl"
          >

            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-cyan-200 bg-cyan-50 mb-8 backdrop-blur-md"
            >
              <span className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse"></span>

              <span className="text-cyan-600 font-medium tracking-wide text-sm md:text-base">
                Webify Technologies
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight tracking-tight"
            >
              Build Powerful
              <span className="text-cyan-500 block md:inline">
                {" "}Digital Experiences
              </span>
            </motion.h1>

            {/* Paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto mt-6 leading-relaxed"
            >
              Webify Technologies creates premium websites, applications and scalable software solutions with futuristic design and smooth user experiences.
            </motion.p>

            {/* Buttons */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-5 mt-10">

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white px-7 py-3 rounded-full font-semibold shadow-lg hover:shadow-cyan-300 transition-all"
              >
                Start Project
              </motion.button>

              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0px 0px 25px rgba(6,182,212,0.3)"
                }}
                whileTap={{ scale: 0.95 }}
                className="border border-cyan-500 text-cyan-500 px-7 py-3 rounded-full hover:bg-cyan-50 transition-all"
              >
                Explore Services
              </motion.button>

            </div>

            {/* Scroll Indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="mt-14 flex justify-center"
            >
              <div className="w-6 h-10 border-2 border-cyan-400 rounded-full flex justify-center relative">
                <div className="w-1 h-2 bg-cyan-500 rounded-full mt-2 animate-bounce" />

                {/* extra smooth scroll glow */}
                <div className="absolute inset-0 rounded-full border border-cyan-300 opacity-30 animate-pulse"></div>
              </div>
            </motion.div>

          </div>
        </section>

        {/* TECHNOLOGY MARQUEE */}
        <section className="py-16 border-y border-gray-200 bg-cyan-50 overflow-hidden">

          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              duration: 25,
              ease: "linear",
            }}
            className="flex gap-16 whitespace-nowrap"
          >
            {[...technologies, ...technologies, ...technologies.slice(0, 3)].map((tech, i) => (

              <motion.div
                key={i}
                whileHover={{ scale: 1.08 }}
                transition={{ duration: 0.2 }}
                className="group flex items-center gap-4 bg-white border border-cyan-100 px-8 py-4 rounded-2xl shadow-lg min-w-fit cursor-pointer hover:shadow-cyan-200 transition-all"
              >
                <div className="transition-transform duration-300 group-hover:scale-110">
                  {tech.icon}
                </div>

                <h2 className="text-2xl font-bold text-cyan-500">
                  {tech.name}
                </h2>
              </motion.div>

            ))}
          </motion.div>

        </section>

        {/* SERVICES */}
        <section className="px-6 md:px-20 py-32 relative overflow-hidden">

          {/* background glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-cyan-400/20 blur-[140px] rounded-full" />

          {/* heading */}
          <div className="text-center mb-20 relative z-10">
            <h2 className="text-5xl md:text-6xl font-black">
              Our <span className="text-cyan-500">Services</span>
            </h2>

            <p className="text-gray-500 max-w-2xl mx-auto mt-5">
              Premium digital services crafted using modern technologies, designed to scale your business and boost performance.
            </p>
          </div>

          {/* grid */}
          <div className="grid md:grid-cols-3 gap-10 relative z-10">

            {services.map((service, i) => (

              <motion.div
                key={i}
                whileHover={{ y: -15, scale: 1.04 }}
                transition={{ duration: 0.3 }}
                className="group relative bg-white rounded-[35px] p-10 overflow-hidden cursor-pointer shadow-xl border border-cyan-100"
              >

                {/* animated border glow */}
                <div className="absolute inset-0 rounded-[35px] opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-r from-cyan-400/10 via-blue-400/10 to-cyan-400/10" />

                {/* top glow line */}
                <div className="absolute top-0 left-0 w-0 h-[3px] bg-cyan-400 group-hover:w-full transition-all duration-500" />

                {/* icon */}
                <div className="text-cyan-500 mb-6 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>

                {/* title */}
                <h3 className="text-3xl font-bold mb-4 group-hover:text-cyan-600 transition">
                  {service.title}
                </h3>

                {/* description */}
                <p className="text-gray-500 leading-relaxed group-hover:text-gray-600 transition">
                  {service.desc}
                </p>

                {/* hover badge */}
                <div className="absolute top-6 right-6 text-xs font-semibold text-cyan-500 bg-cyan-50 px-3 py-1 rounded-full border border-cyan-100 opacity-0 group-hover:opacity-100 transition">
                  Premium
                </div>

              </motion.div>

            ))}
          </div>
        </section>

        {/* ABOUT */}
        <section className="px-6 md:px-20 py-28">

          <div className="grid md:grid-cols-2 gap-16 items-center">

            <motion.div
              initial={{ opacity: 0, x: -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-5xl font-black leading-tight">
                Why Choose
                <span className="text-cyan-500"> Webify?</span>
              </h2>

              <p className="text-gray-500 text-lg mt-8 leading-relaxed">
                We combine modern technologies, futuristic UI/UX and scalable
                architecture to create next-generation digital products.
              </p>

              <div className="grid grid-cols-2 gap-5 mt-10">

                {[
                  "Premium UI/UX",
                  "Fast Performance",
                  "Responsive Design",
                  "Secure Systems",
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 bg-cyan-50 border border-cyan-100 rounded-2xl px-5 py-4"
                  >
                    <ShieldCheck
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

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-cyan-400/20 blur-[100px]" />

              <div className="relative overflow-hidden rounded-[40px] border border-cyan-100 shadow-2xl shadow-cyan-100">

                <img
                  src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop"
                  alt=""
                  className="w-full h-[600px] object-cover hover:scale-110 transition-all duration-700"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-cyan-900/40 to-transparent" />

                <div className="absolute bottom-10 left-10">
                  <h3 className="text-4xl font-black text-white">
                    Modern Technology
                  </h3>

                  <p className="text-cyan-50 mt-4 max-w-md leading-relaxed">
                    Premium scalable digital experiences with futuristic
                    innovation and smooth user interactions.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* FEATURES */}
        <section className="px-6 md:px-20 py-32 relative overflow-hidden bg-gradient-to-b from-cyan-50 via-white to-cyan-50">

          {/* background glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-cyan-400/20 blur-[140px] rounded-full" />

          {/* heading */}
          <div className="text-center mb-20 relative z-10">
            <h2 className="text-5xl md:text-6xl font-black">
              Powerful <span className="text-cyan-500">Features</span>
            </h2>
            <p className="text-gray-500 mt-5 max-w-2xl mx-auto">
              Everything you need to build modern, scalable and high-performance digital products.
            </p>
          </div>

          {/* grid */}
          <div className="grid md:grid-cols-3 gap-10 relative z-10">

            {[
              {
                title: "Modern UI/UX",
                desc: "Clean, intuitive and conversion-focused interfaces designed for users.",
              },
              {
                title: "Premium Animations",
                desc: "Smooth interactions powered by Framer Motion and GSAP.",
              },
              {
                title: "SEO Optimized",
                desc: "Built with best practices to improve search ranking and visibility.",
              },
              {
                title: "High Security",
                desc: "Secure architecture with best practices and protection layers.",
              },
              {
                title: "Fast Performance",
                desc: "Optimized code structure for lightning-fast load speed.",
              },
              {
                title: "Scalable Architecture",
                desc: "Built to grow with your business and handle high traffic easily.",
              },
            ].map((feature, i) => (

              <motion.div
                key={i}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -12, scale: 1.03 }}
                transition={{ duration: 0.4 }}
                className="group relative bg-white border border-cyan-100 rounded-[30px] p-10 shadow-xl overflow-hidden cursor-pointer"
              >

                {/* hover glow */}
                <div className="absolute inset-0 bg-cyan-400/10 opacity-0 group-hover:opacity-100 transition duration-500" />

                {/* title */}
                <h3 className="text-2xl font-bold text-cyan-600 group-hover:text-cyan-500 transition">
                  {feature.title}
                </h3>

                {/* description */}
                <p className="text-gray-500 mt-4 leading-relaxed">
                  {feature.desc}
                </p>

                {/* bottom animation line */}
                <div className="absolute bottom-0 left-0 w-0 h-[3px] bg-cyan-400 group-hover:w-full transition-all duration-500" />
              </motion.div>

            ))}
          </div>
        </section>

        {/* INDUSTRIES */}
        <section className="px-6 md:px-20 py-28">
          <h2 className="text-5xl font-black text-center mb-16">
            Industries We <span className="text-cyan-500">Serve</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-12">

            {/* LEFT */}
            <div className="space-y-4">
              {industries.map((ind, i) => (
                <motion.div
                  key={i}
                  onMouseEnter={() => setActiveIndustry(ind)}
                  whileHover={{ x: 6, scale: 1.02 }}
                  className="
            flex justify-between items-center p-6 
            border border-gray-200 rounded-2xl cursor-pointer
            transition-all duration-300
            hover:bg-cyan-50
            hover:border-cyan-300
            hover:shadow-[0_0_25px_rgba(6,182,212,0.25)]
          "
                >
                  <div className="flex items-center gap-4">
                    <span className="text-3xl">{ind.icon}</span>
                    <div>
                      <h3 className="font-bold hover:text-cyan-600 transition">
                        {ind.title}
                      </h3>
                      <p className="text-sm text-gray-500">{ind.desc}</p>
                    </div>
                  </div>

                  <ArrowRight className="text-gray-400 group-hover:text-cyan-500 transition" />
                </motion.div>
              ))}
            </div>

            {/* RIGHT */}
            <motion.div
              key={activeIndustry.title}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="rounded-3xl overflow-hidden relative shadow-2xl"
            >
              <img
                src={activeIndustry.image}
                className="w-full h-[500px] object-cover"
              />

              {/* overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-cyan-900/60 to-black/20" />

              <div className="absolute bottom-10 left-10 text-white">
                <h3 className="text-3xl font-black">
                  {activeIndustry.title}
                </h3>
                <p className="text-gray-200">
                  {activeIndustry.desc}
                </p>
              </div>
            </motion.div>

          </div>
        </section>

        {/* PROJECTS */}
        <section className="relative py-32 bg-gradient-to-b from-white via-cyan-50 to-white overflow-hidden">

          {/* background glow */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(6,182,212,0.18),transparent_60%)]" />

          <div className="relative z-10 px-6 md:px-20">

            {/* heading */}
            <div className="text-center mb-20">
              <h2 className="text-5xl md:text-6xl font-black tracking-tight">
                Featured <span className="text-cyan-500">Projects</span>
              </h2>
              <p className="text-gray-500 mt-5 max-w-2xl mx-auto">
                A glimpse of premium digital experiences we design and develop for modern businesses.
              </p>
            </div>

            {/* cards */}
            <div className="grid md:grid-cols-3 gap-10">

              {[
                {
                  title: "Business Platform",
                  desc: "Enterprise-grade scalable dashboard with analytics & automation.",
                },
                {
                  title: "Mobile Experience",
                  desc: "High-performance cross-platform mobile application UI.",
                },
                {
                  title: "SaaS Dashboard",
                  desc: "Modern SaaS control panel with real-time insights.",
                },
              ].map((project, i) => (

                <motion.div
                  key={i}
                  whileHover={{ y: -18, scale: 1.03 }}
                  transition={{ duration: 0.3 }}
                  className="group relative rounded-[35px] bg-white border border-cyan-100 shadow-xl overflow-hidden"
                >

                  {/* glow hover effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-cyan-400/10" />

                  {/* top image block */}
                  <div className="h-64 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-200 via-cyan-100 to-white group-hover:scale-110 transition duration-700" />

                    <Building2
                      size={70}
                      className="absolute inset-0 m-auto text-cyan-500 opacity-80"
                    />

                    {/* floating badge */}
                    <div className="absolute top-5 left-5 bg-white/80 backdrop-blur px-4 py-1 rounded-full text-xs font-semibold text-cyan-600 border border-cyan-100">
                      Case Study
                    </div>
                  </div>

                  {/* content */}
                  <div className="p-8">
                    <h3 className="text-2xl font-bold group-hover:text-cyan-500 transition">
                      {project.title}
                    </h3>

                    <p className="text-gray-500 mt-3 leading-relaxed">
                      {project.desc}
                    </p>

                    {/* CTA */}
                    <div className="mt-6 flex items-center gap-2 text-cyan-500 font-semibold cursor-pointer">
                      View Details
                      <ArrowRight size={18} className="group-hover:translate-x-2 transition" />
                    </div>
                  </div>

                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="px-6 md:px-20 py-32 relative overflow-hidden">

          {/* animated background blobs */}
          <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-cyan-400/20 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-blue-400/20 rounded-full blur-[120px] animate-pulse" />

          <motion.div
            animate={{
              boxShadow: [
                "0 0 30px rgba(6,182,212,0.25)",
                "0 0 80px rgba(6,182,212,0.45)",
                "0 0 30px rgba(6,182,212,0.25)",
              ],
              y: [0, -6, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 3,
            }}
            whileHover={{ scale: 1.02 }}
            className="relative bg-gradient-to-br from-cyan-500 via-cyan-400 to-blue-500 rounded-[45px] p-16 text-center text-white overflow-hidden"
          >

            {/* floating particles */}
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-10 left-10 w-3 h-3 bg-white rounded-full animate-ping" />
              <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-white rounded-full animate-pulse" />
              <div className="absolute bottom-10 right-20 w-3 h-3 bg-white rounded-full animate-bounce" />
            </div>

            {/* icon with float */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="mb-8"
            >
              <Rocket size={80} className="mx-auto" />
            </motion.div>

            {/* heading */}
            <h2 className="text-5xl md:text-6xl font-black leading-tight">
              Ready To Build Your
              <br />
              Next Big Project?
            </h2>

            {/* description */}
            <p className="max-w-2xl mx-auto mt-8 text-lg text-cyan-50">
              Let’s create powerful digital experiences together with modern
              technologies, stunning UI and scalable architecture.
            </p>

            {/* buttons */}
            <div className="mt-10 flex flex-col md:flex-row gap-5 justify-center items-center">

              <button className="bg-white text-cyan-600 px-10 py-5 rounded-full font-bold hover:scale-105 hover:shadow-xl transition-all duration-300">
                Start Your Project
              </button>

              <button className="border border-white/60 px-10 py-5 rounded-full font-semibold hover:bg-white/10 transition-all duration-300">
                Talk to Expert
              </button>

            </div>

            {/* glowing ring */}
            <div className="absolute inset-0 rounded-[45px] border border-white/20" />
          </motion.div>
        </section>

      </div>
      <Footer />
    </>
  );
};

export default Home;
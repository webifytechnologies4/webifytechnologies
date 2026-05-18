// import { useEffect, useRef } from "react";
// import { motion } from "framer-motion";
// import gsap from "gsap";

// import Navbar from "../components/Navbar";

// import {
//   Globe,
//   Smartphone,
//   LayoutDashboard,
//   Rocket,
//   Layers3,
//   CheckCircle2,
//   ArrowUpRight,
// } from "lucide-react";

// import {
//   FaReact,
//   FaNodeJs,
//   FaHtml5,
//   FaCss3Alt,
//   FaJs,
// } from "react-icons/fa";

// import {
//   SiTypescript,
//   SiTailwindcss,
//   SiMongodb,
//   SiExpress,
//   SiNextdotjs,
// } from "react-icons/si";

// const projects = [
//   {
//     icon: <Globe size={42} />,
//     title: "E-Commerce Website",
//     desc: "Modern online store with premium UI and scalable architecture.",
//   },
//   {
//     icon: <LayoutDashboard size={42} />,
//     title: "Business Dashboard",
//     desc: "Analytics dashboard with clean design and real-time systems.",
//   },
//   {
//     icon: <Rocket size={42} />,
//     title: "Portfolio Website",
//     desc: "Modern animated portfolio website with premium interactions.",
//   },
//   {
//     icon: <Smartphone size={42} />,
//     title: "Mobile App UI",
//     desc: "Beautiful mobile application interfaces with smooth UX.",
//   },
// ];

// const technologies = [
//   {
//     name: "React",
//     icon: <FaReact />,
//   },
//   {
//     name: "TypeScript",
//     icon: <SiTypescript />,
//   },
//   {
//     name: "Tailwind CSS",
//     icon: <SiTailwindcss />,
//   },
//   {
//     name: "Node.js",
//     icon: <FaNodeJs />,
//   },
//   {
//     name: "MongoDB",
//     icon: <SiMongodb />,
//   },
//   {
//     name: "Express.js",
//     icon: <SiExpress />,
//   },
//   {
//     name: "Next.js",
//     icon: <SiNextdotjs />,
//   },
//   {
//     name: "HTML5",
//     icon: <FaHtml5 />,
//   },
//   {
//     name: "CSS3",
//     icon: <FaCss3Alt />,
//   },
//   {
//     name: "JavaScript",
//     icon: <FaJs />,
//   },
// ];

// const features = [
//   "Responsive Design",
//   "Modern UI/UX",
//   "API Integration",
//   "Secure Backend",
//   "Fast Performance",
//   "Scalable Systems",
// ];

// const Projects = () => {
//   const heroRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     gsap.fromTo(
//       heroRef.current,
//       {
//         opacity: 0,
//         y: 80,
//       },
//       {
//         opacity: 1,
//         y: 0,
//         duration: 1.2,
//         ease: "power4.out",
//       }
//     );
//   }, []);

//   return (
//     <>
//       <Navbar />

//       <div className="bg-white text-black overflow-hidden">

//         {/* HERO SECTION */}
//         <section className="relative min-h-screen flex items-center justify-center px-6 md:px-20">

//           {/* GLOW */}
//           <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-cyan-400/20 blur-[150px] rounded-full" />

//           <div
//             ref={heroRef}
//             className="relative z-10 text-center max-w-5xl"
//           >
//             <motion.h1 className="text-5xl md:text-8xl font-black leading-tight">
//               Our Premium
//               <span className="text-cyan-500">
//                 {" "}Projects
//               </span>
//             </motion.h1>

//             <p className="text-lg md:text-xl text-gray-600 mt-8 leading-relaxed max-w-3xl mx-auto">
//               Explore futuristic websites, applications and scalable software
//               systems built by Webify Technologies.
//             </p>
//           </div>
//         </section>

//         {/* PROJECTS SECTION */}
//         <section className="px-6 md:px-20 py-28">

//           <div className="text-center mb-20">
//             <h2 className="text-5xl font-black">
//               Featured <span className="text-cyan-500">Projects</span>
//             </h2>

//             <p className="text-gray-500 mt-6 max-w-2xl mx-auto">
//               Premium digital products crafted using modern technologies and
//               futuristic user experiences.
//             </p>
//           </div>

//           <div className="grid md:grid-cols-2 gap-8">

//             {projects.map((project, i) => (
//               <motion.div
//                 key={i}
//                 initial={{
//                   opacity: 0,
//                   y: 50,
//                 }}
//                 whileInView={{
//                   opacity: 1,
//                   y: 0,
//                 }}
//                 transition={{
//                   delay: i * 0.2,
//                 }}
//                 whileHover={{
//                   y: -15,
//                   scale: 1.02,
//                 }}
//                 className="relative overflow-hidden rounded-[35px] bg-cyan-50 border border-cyan-100 p-10 shadow-2xl shadow-cyan-100"
//               >
//                 {/* BG GLOW */}
//                 <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-cyan-400/10 blur-[100px]" />

//                 <div className="relative z-10">

//                   <div className="text-cyan-500 mb-6">
//                     {project.icon}
//                   </div>

//                   <h2 className="text-3xl font-bold mb-5">
//                     {project.title}
//                   </h2>

//                   <p className="text-gray-500 text-lg leading-relaxed">
//                     {project.desc}
//                   </p>

//                   <button className="mt-8 flex items-center gap-2 text-cyan-500 font-semibold hover:gap-4 transition-all">
//                     View Project
//                     <ArrowUpRight size={20} />
//                   </button>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </section>

//         {/* SHOWCASE SECTION */}
//         <section className="px-6 md:px-20 py-28 bg-cyan-50">

//           <div className="grid md:grid-cols-2 gap-16 items-center">

//             {/* LEFT */}
//             <motion.div
//               initial={{
//                 opacity: 0,
//                 x: -80,
//               }}
//               whileInView={{
//                 opacity: 1,
//                 x: 0,
//               }}
//               className="relative"
//             >
//               <div className="absolute inset-0 bg-cyan-400/20 blur-[100px]" />

//               <div className="relative bg-white border border-cyan-100 rounded-[40px] p-14 shadow-2xl shadow-cyan-100">

//                 <Rocket
//                   size={130}
//                   className="mx-auto text-cyan-500"
//                 />

//                 <h2 className="text-3xl font-black text-center mt-8">
//                   Modern Project Showcase
//                 </h2>

//                 <p className="text-gray-500 text-center mt-5 leading-relaxed">
//                   Futuristic UI design, scalable architecture and premium user
//                   experience.
//                 </p>
//               </div>
//             </motion.div>

//             {/* RIGHT */}
//             <motion.div
//               initial={{
//                 opacity: 0,
//                 x: 80,
//               }}
//               whileInView={{
//                 opacity: 1,
//                 x: 0,
//               }}
//             >
//               <h2 className="text-5xl font-black leading-tight">
//                 Building Next Generation
//                 <span className="text-cyan-500">
//                   {" "}Digital Products
//                 </span>
//               </h2>

//               <p className="text-gray-600 text-lg mt-8 leading-relaxed">
//                 Webify Technologies creates high-performance websites, apps and
//                 software systems with modern technologies.
//               </p>

//               <div className="grid grid-cols-2 gap-5 mt-10">

//                 {[
//                   "Premium UI/UX",
//                   "Responsive Design",
//                   "Fast Performance",
//                   "Secure Systems",
//                 ].map((item, i) => (
//                   <div
//                     key={i}
//                     className="flex items-center gap-3 bg-white border border-cyan-100 rounded-2xl px-5 py-4"
//                   >
//                     <CheckCircle2
//                       size={20}
//                       className="text-cyan-500"
//                     />

//                     <span className="font-medium">
//                       {item}
//                     </span>
//                   </div>
//                 ))}
//               </div>
//             </motion.div>
//           </div>
//         </section>

//         {/* TECHNOLOGY MARQUEE */}
//         <section className="py-16 border-y border-gray-200 overflow-hidden bg-white">

//           <motion.div
//             animate={{
//               x: ["0%", "-100%"],
//             }}
//             transition={{
//               repeat: Infinity,
//               duration: 20,
//               ease: "linear",
//             }}
//             className="flex gap-16 whitespace-nowrap"
//           >
//             {[...technologies, ...technologies].map((tech, i) => (
//               <div
//                 key={i}
//                 className="flex items-center gap-4 bg-cyan-50 border border-cyan-100 px-8 py-4 rounded-2xl shadow-lg min-w-fit"
//               >
//                 <div className="text-4xl text-cyan-500">
//                   {tech.icon}
//                 </div>

//                 <h2 className="text-2xl font-bold text-cyan-500">
//                   {tech.name}
//                 </h2>
//               </div>
//             ))}
//           </motion.div>
//         </section>

//         {/* PROJECT FEATURES */}
//         <section className="px-6 md:px-20 py-28 bg-cyan-50">

//           <div className="text-center mb-20">
//             <h2 className="text-5xl font-black">
//               Project <span className="text-cyan-500">Features</span>
//             </h2>
//           </div>

//           <div className="grid md:grid-cols-3 gap-8">

//             {features.map((feature, i) => (
//               <motion.div
//                 key={i}
//                 initial={{
//                   opacity: 0,
//                   y: 50,
//                 }}
//                 whileInView={{
//                   opacity: 1,
//                   y: 0,
//                 }}
//                 transition={{
//                   delay: i * 0.1,
//                 }}
//                 whileHover={{
//                   scale: 1.03,
//                 }}
//                 className="bg-white border border-cyan-100 rounded-[30px] p-10 shadow-xl"
//               >
//                 <CheckCircle2
//                   size={40}
//                   className="text-cyan-500 mb-6"
//                 />

//                 <h2 className="text-2xl font-bold">
//                   {feature}
//                 </h2>

//                 <p className="text-gray-500 mt-4 leading-relaxed">
//                   Premium scalable systems designed for modern businesses and
//                   startups.
//                 </p>
//               </motion.div>
//             ))}
//           </div>
//         </section>

//         {/* STATS */}
//         <section className="px-6 md:px-20 py-28">

//           <div className="grid md:grid-cols-4 gap-8">

//             {[
//               {
//                 number: "10+",
//                 text: "Projects Completed",
//               },
//               {
//                 number: "5+",
//                 text: "Technologies",
//               },
//               {
//                 number: "100%",
//                 text: "Client Focus",
//               },
//               {
//                 number: "24/7",
//                 text: "Support",
//               },
//             ].map((item, i) => (
//               <motion.div
//                 key={i}
//                 whileHover={{
//                   y: -10,
//                 }}
//                 className="bg-cyan-50 border border-cyan-100 rounded-[30px] p-10 text-center shadow-xl"
//               >
//                 <h2 className="text-5xl font-black text-cyan-500">
//                   {item.number}
//                 </h2>

//                 <p className="text-gray-500 mt-4">
//                   {item.text}
//                 </p>
//               </motion.div>
//             ))}
//           </div>
//         </section>

//         {/* CTA */}
//         <section className="px-6 md:px-20 py-32">

//           <motion.div
//             animate={{
//               boxShadow: [
//                 "0 0 20px rgba(6,182,212,0.2)",
//                 "0 0 60px rgba(6,182,212,0.4)",
//                 "0 0 20px rgba(6,182,212,0.2)",
//               ],
//             }}
//             transition={{
//               repeat: Infinity,
//               duration: 2,
//             }}
//             className="bg-gradient-to-br from-cyan-500 to-cyan-400 rounded-[40px] p-16 text-center text-white"
//           >
//             <Layers3
//               size={70}
//               className="mx-auto mb-8"
//             />

//             <h2 className="text-5xl md:text-6xl font-black leading-tight">
//               Let’s Build Your
//               <br />
//               Next Big Project
//             </h2>

//             <p className="max-w-2xl mx-auto mt-8 text-lg text-cyan-50">
//               Webify Technologies creates premium digital products with modern
//               technologies and futuristic innovation.
//             </p>

//             <button className="mt-10 bg-white text-cyan-500 px-10 py-5 rounded-full font-bold hover:scale-105 transition-all">
//               Start Your Project
//             </button>
//           </motion.div>
//         </section>

//         {/* FOOTER */}
//         <footer className="border-t border-gray-200 px-6 md:px-20 py-14">

//           <motion.div
//             initial={{
//               opacity: 0,
//             }}
//             whileInView={{
//               opacity: 1,
//             }}
//             transition={{
//               duration: 1,
//             }}
//             className="flex flex-col md:flex-row items-center justify-between gap-6"
//           >
//             <div>
//               <h2 className="text-3xl font-black">
//                 WEBIFY
//               </h2>

//               <p className="text-gray-500 mt-2">
//                 Modern Digital Innovation
//               </p>
//             </div>

//             <div className="flex items-center gap-8 text-gray-500">
//               <a href="#">Home</a>
//               <a href="#">About</a>
//               <a href="#">Services</a>
//               <a href="#">Projects</a>
//               <a href="#">Contact</a>
//             </div>
//           </motion.div>
//         </footer>
//       </div>
//     </>
//   );
// };

// export default Projects;

import { motion } from "framer-motion";
import { Rocket, Sparkles, Clock } from "lucide-react";

const WorkInProgress = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-cyan-950 to-black text-white overflow-hidden relative">

      {/* Background Glow */}
      <div className="absolute w-[600px] h-[600px] bg-cyan-500/20 blur-[160px] rounded-full top-[-200px] left-1/2 -translate-x-1/2 animate-pulse" />
      <div className="absolute w-[400px] h-[400px] bg-blue-500/20 blur-[140px] rounded-full bottom-[-150px] right-[-100px] animate-pulse" />

      {/* Content */}
      <div className="text-center z-10 max-w-2xl px-6">

        {/* Icon Animation */}
        <motion.div
          animate={{ y: [0, -15, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="flex justify-center mb-6"
        >
          <div className="p-5 rounded-full bg-cyan-500/10 border border-cyan-400">
            <Rocket size={50} className="text-cyan-400" />
          </div>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-black leading-tight"
        >
          Work In <span className="text-cyan-400">Progress</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-gray-300 mt-6 text-base md:text-lg"
        >
          We are building something <span className="text-cyan-400 font-semibold">powerful & futuristic</span>.
          Stay tuned for an amazing digital experience.
        </motion.p>

        {/* Progress Bar */}
        <div className="mt-10">

          <div className="flex justify-between text-sm text-gray-400 mb-2">
            <span>Progress</span>
            <span>65%</span>
          </div>

          <div className="w-full h-3 bg-white/10 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "65%" }}
              transition={{ duration: 1.5 }}
              className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"
            />
          </div>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-12">

          <div className="p-4 rounded-xl bg-white/5 border border-white/10">
            <Sparkles className="text-cyan-400 mx-auto mb-2" />
            <p className="text-sm text-gray-300">Modern UI</p>
          </div>

          <div className="p-4 rounded-xl bg-white/5 border border-white/10">
            <Rocket className="text-cyan-400 mx-auto mb-2" />
            <p className="text-sm text-gray-300">Fast Performance</p>
          </div>

          <div className="p-4 rounded-xl bg-white/5 border border-white/10">
            <Clock className="text-cyan-400 mx-auto mb-2" />
            <p className="text-sm text-gray-300">Launching Soon</p>
          </div>

        </div>

        {/* Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-12 px-8 py-3 rounded-full bg-cyan-500 hover:bg-cyan-400 text-black font-semibold shadow-lg shadow-cyan-500/30"
        >
          Notify Me
        </motion.button>

        <p className="text-gray-500 text-xs mt-6">
          © Webify Technologies — Building the future
        </p>
      </div>
    </div>
  );
};

export default WorkInProgress;
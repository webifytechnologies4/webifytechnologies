import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";

import Navbar from "../components/Navbar";

import {
  Globe,
  Smartphone,
  Code2,
  PenTool,
  ShieldCheck,
  Rocket,
  Layers3,
  CheckCircle2,
} from "lucide-react";

import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaJs,
} from "react-icons/fa";

import {
  SiTypescript,
  SiTailwindcss,
  SiMongodb,
  SiExpress,
  SiNextdotjs,
} from "react-icons/si";

const services = [
  {
    icon: <Globe size={42} />,
    title: "Web Development",
    desc: "Modern responsive websites with premium UI/UX and smooth performance.",
  },
  {
    icon: <Smartphone size={42} />,
    title: "App Development",
    desc: "High-performance Android & iOS applications with scalable architecture.",
  },
  {
    icon: <Code2 size={42} />,
    title: "Software Development",
    desc: "Custom scalable business software solutions for modern companies.",
  },
  {
    icon: <PenTool size={42} />,
    title: "UI/UX Design",
    desc: "Beautiful modern user experiences and futuristic interfaces.",
  },
];

const technologies = [
  {
    name: "React",
    icon: <FaReact />,
  },
  {
    name: "TypeScript",
    icon: <SiTypescript />,
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss />,
  },
  {
    name: "Node.js",
    icon: <FaNodeJs />,
  },
  {
    name: "MongoDB",
    icon: <SiMongodb />,
  },
  {
    name: "Express.js",
    icon: <SiExpress />,
  },
  {
    name: "Next.js",
    icon: <SiNextdotjs />,
  },
  {
    name: "HTML5",
    icon: <FaHtml5 />,
  },
  {
    name: "CSS3",
    icon: <FaCss3Alt />,
  },
  {
    name: "JavaScript",
    icon: <FaJs />,
  },
];

const process = [
  "Research",
  "Planning",
  "UI/UX Design",
  "Development",
  "Testing",
  "Deployment",
];

const features = [
  "Responsive Design",
  "Premium UI/UX",
  "Fast Performance",
  "SEO Friendly",
  "API Integration",
  "Secure Systems",
];

const Services = () => {
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
      <Navbar />

      <div className="bg-white text-black overflow-hidden">

        {/* HERO SECTION */}
        <section className="relative min-h-screen flex items-center justify-center px-6 md:px-20">

          {/* GLOW */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-cyan-400/20 blur-[150px] rounded-full" />

          <div
            ref={heroRef}
            className="relative z-10 text-center max-w-5xl"
          >
            <motion.h1 className="text-5xl md:text-8xl font-black leading-tight">
              Premium
              <span className="text-cyan-500">
                {" "}Digital Services
              </span>
            </motion.h1>

            <p className="text-lg md:text-xl text-gray-600 mt-8 leading-relaxed max-w-3xl mx-auto">
              Webify Technologies delivers scalable websites, applications and
              modern software solutions with futuristic innovation.
            </p>
          </div>
        </section>

        {/* SERVICES CARDS */}
        <section className="px-6 md:px-20 py-28">

          <div className="text-center mb-20">
            <h2 className="text-5xl font-black">
              Our <span className="text-cyan-500">Services</span>
            </h2>

            <p className="text-gray-500 mt-6 max-w-2xl mx-auto">
              We create high-performance digital products using modern
              technologies and premium user experience.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">

            {services.map((service, i) => (
              <motion.div
                key={i}
                initial={{
                  opacity: 0,
                  y: 50,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: i * 0.2,
                }}
                whileHover={{
                  y: -15,
                  scale: 1.02,
                }}
                className="bg-cyan-50 border border-cyan-100 rounded-[35px] p-10 shadow-2xl shadow-cyan-100"
              >
                <div className="text-cyan-500 mb-6">
                  {service.icon}
                </div>

                <h2 className="text-3xl font-bold mb-5">
                  {service.title}
                </h2>

                <p className="text-gray-500 text-lg leading-relaxed">
                  {service.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* WHY CHOOSE US */}
        <section className="px-6 md:px-20 py-28 bg-cyan-50">

          <div className="grid md:grid-cols-2 gap-16 items-center">

            <motion.div
              initial={{
                opacity: 0,
                x: -80,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
            >
              <h2 className="text-5xl font-black leading-tight">
                Why Choose
                <span className="text-cyan-500">
                  {" "}Webify
                </span>
              </h2>

              <p className="text-gray-600 text-lg mt-8 leading-relaxed">
                We combine premium design, scalable architecture and modern
                technologies to create futuristic digital experiences.
              </p>

              <div className="grid grid-cols-2 gap-5 mt-10">

                {[
                  "Modern UI/UX",
                  "Fast Performance",
                  "SEO Friendly",
                  "Secure Systems",
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 bg-white border border-cyan-100 rounded-2xl px-5 py-4"
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
              initial={{
                opacity: 0,
                x: 80,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              className="relative"
            >
              <div className="absolute inset-0 bg-cyan-400/20 blur-[100px]" />

              <div className="relative bg-white border border-cyan-100 rounded-[40px] p-14 shadow-2xl shadow-cyan-100">

                <Rocket
                  size={130}
                  className="mx-auto text-cyan-500"
                />

                <h2 className="text-3xl font-black text-center mt-8">
                  Modern Innovation
                </h2>

                <p className="text-gray-500 text-center mt-5 leading-relaxed">
                  Premium digital services crafted using futuristic technologies
                  and scalable systems.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* PROCESS SECTION */}
        <section className="px-6 md:px-20 py-28">

          <div className="text-center mb-20">
            <h2 className="text-5xl font-black">
              Our <span className="text-cyan-500">Process</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">

            {process.map((step, i) => (
              <motion.div
                key={i}
                whileHover={{
                  y: -10,
                }}
                className="relative bg-cyan-50 border border-cyan-100 rounded-[30px] p-10 shadow-xl"
              >
                <div className="absolute -top-5 left-8 w-12 h-12 rounded-full bg-cyan-500 text-white flex items-center justify-center font-bold text-xl">
                  {i + 1}
                </div>

                <h2 className="text-3xl font-bold mt-6">
                  {step}
                </h2>

                <p className="text-gray-500 mt-5 leading-relaxed">
                  Premium modern workflow focused on quality, scalability and
                  innovation.
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* TECHNOLOGY MARQUEE */}
        <section className="py-16 border-y border-gray-200 overflow-hidden bg-white">

          <motion.div
            animate={{
              x: ["0%", "-100%"],
            }}
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
                className="flex items-center gap-4 bg-cyan-50 border border-cyan-100 px-8 py-4 rounded-2xl shadow-lg min-w-fit"
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
        </section>

        {/* FEATURES */}
        <section className="px-6 md:px-20 py-28 bg-cyan-50">

          <div className="text-center mb-20">
            <h2 className="text-5xl font-black">
              Service <span className="text-cyan-500">Features</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">

            {features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{
                  opacity: 0,
                  y: 50,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: i * 0.1,
                }}
                whileHover={{
                  scale: 1.03,
                }}
                className="bg-white border border-cyan-100 rounded-[30px] p-10 shadow-xl"
              >
                <CheckCircle2
                  size={40}
                  className="text-cyan-500 mb-6"
                />

                <h2 className="text-2xl font-bold">
                  {feature}
                </h2>

                <p className="text-gray-500 mt-4 leading-relaxed">
                  Modern premium feature designed for scalability and smooth
                  user experience.
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="px-6 md:px-20 py-32">

          <motion.div
            animate={{
              boxShadow: [
                "0 0 20px rgba(6,182,212,0.2)",
                "0 0 60px rgba(6,182,212,0.4)",
                "0 0 20px rgba(6,182,212,0.2)",
              ],
            }}
            transition={{
              repeat: Infinity,
              duration: 2,
            }}
            className="bg-gradient-to-br from-cyan-500 to-cyan-400 rounded-[40px] p-16 text-center text-white"
          >
            <Layers3
              size={70}
              className="mx-auto mb-8"
            />

            <h2 className="text-5xl md:text-6xl font-black leading-tight">
              Ready To Transform
              <br />
              Your Digital Presence?
            </h2>

            <p className="max-w-2xl mx-auto mt-8 text-lg text-cyan-50">
              Let’s build premium scalable digital experiences together with
              modern technologies and futuristic innovation.
            </p>

            <button className="mt-10 bg-white text-cyan-500 px-10 py-5 rounded-full font-bold hover:scale-105 transition-all">
              Start Your Project
            </button>
          </motion.div>
        </section>

        {/* FOOTER */}
        <footer className="border-t border-gray-200 px-6 md:px-20 py-14">

          <motion.div
            initial={{
              opacity: 0,
            }}
            whileInView={{
              opacity: 1,
            }}
            transition={{
              duration: 1,
            }}
            className="flex flex-col md:flex-row items-center justify-between gap-6"
          >
            <div>
              <h2 className="text-3xl font-black">
                WEBIFY
              </h2>

              <p className="text-gray-500 mt-2">
                Modern Digital Innovation
              </p>
            </div>

            <div className="flex items-center gap-8 text-gray-500">
              <a href="#">Home</a>
              <a href="#">About</a>
              <a href="#">Services</a>
              <a href="#">Projects</a>
              <a href="#">Contact</a>
            </div>
          </motion.div>
        </footer>
      </div>
    </>
  );
};

export default Services;
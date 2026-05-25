import { motion } from "framer-motion";

const technologies = [
  {
    name: "React",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "TypeScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },
  {
    name: "Tailwind CSS",
    icon: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg",
  },
  {
    name: "Node.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "MongoDB",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  },
  {
    name: "Express.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  },
  {
    name: "Next.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  },
  {
    name: "Firebase",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
  },
  {
    name: "HTML5",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  {
    name: "CSS3",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  {
    name: "JavaScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    name: "GitHub",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  },
];

const TechMarquee = () => {
  return (
    <section className="relative pt-10 overflow-hidden bg-white">
      {/* BACKGROUND GLOW */}
      <div className="absolute top-0 left-1/4 w-[300px] h-[300px] bg-sky-100 rounded-full blur-[120px] opacity-70" />
      <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] bg-blue-100 rounded-full blur-[120px] opacity-70" />

      {/* GRID EFFECT */}
      <div className="absolute inset-0 opacity-[0.04]">
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,0,0,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.08) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* MARQUEE */}
      <div className="relative flex overflow-hidden">
        <motion.div
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            repeat: Infinity,
            duration: 22,
            ease: "linear",
          }}
          className="flex gap-7 min-w-max"
        >
          {[...technologies, ...technologies].map((tech, i) => (
            <motion.div
              key={i}
              whileHover={{
                y: -8,
                scale: 1.06,
              }}
              transition={{
                duration: 0.3,
              }}
              className="group relative flex items-center gap-4 px-7 py-4  min-w-fit overflow-hidden"
            >
              {/* HOVER LIGHT */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-r from-sky-100/60 via-blue-100/50 to-cyan-100/60" />

              {/* SHINE EFFECT */}
              <motion.div
                animate={{
                  x: ["-150%", "250%"],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 3,
                  ease: "linear",
                }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/70 to-transparent skew-x-12"
              />

              {/* ICON */}
              <motion.div
                animate={{
                  y: [0, -4, 0],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 2.5,
                }}
                className="relative z-10"
              >
                <img
                  src={tech.icon}
                  alt={tech.name}
                  className="w-12 h-12 drop-shadow-[0_0_10px_rgba(56,189,248,0.3)]"
                />
              </motion.div>

              {/* TEXT */}
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-slate-800 group-hover:text-sky-600 transition duration-300">
                  {tech.name}
                </h3>

                <p className="text-sm text-slate-500">
                  Modern Technology
                </p>
              </div>

              {/* BORDER GLOW */}
              <div className="absolute inset-0 rounded-3xl border border-transparent group-hover:border-sky-300 transition duration-500" />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* SIDE FADE */}
      <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-white to-transparent z-20" />
      <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-white to-transparent z-20" />
    </section>
  );
};

export default TechMarquee;
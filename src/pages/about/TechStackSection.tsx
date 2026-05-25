import { motion } from "framer-motion";

// Devicon SVG URLs — fully transparent icons, no background boxes
const techItems = [
  { image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg", text: "React.js" },
  { image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg", text: "Next.js" },
  { image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angularjs/angularjs-original.svg", text: "Angular" },
  { image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg", text: "Tailwind CSS" },
  { image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg", text: "Node.js" },
  { image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg", text: "PHP" },
  { image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg", text: "Python" },
  { image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg", text: "MongoDB" },
  { image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg", text: "MySQL" },
  { image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg", text: "PostgreSQL" },
  { image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg", text: "Flutter" },
  { image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-plain.svg", text: "TypeScript" },
  { image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-plain.svg", text: "JavaScript" },
  { image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg", text: "Docker" },
  { image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg", text: "AWS" },
  { image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azure/azure-original.svg", text: "Azure" },
  { image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/wordpress/wordpress-plain.svg", text: "WordPress" },
  { image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg", text: "Figma" },
  { image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg", text: "Git" },
  { image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg", text: "Linux" },
];

// Duplicate for seamless infinite loop
const allItems = [...techItems, ...techItems];

const TechStackSection = () => {
  return (
    <section className="relative py-20 overflow-hidden bg-white">

      {/* BACKGROUND BLOBS */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.2, 1], x: [0, 40, 0] }}
          transition={{ repeat: Infinity, duration: 8 }}
          className="absolute top-[-200px] left-[-100px] w-[500px] h-[500px] bg-cyan-200/40 blur-[120px] rounded-full"
        />
        <motion.div
          animate={{ scale: [1, 1.3, 1], y: [0, -40, 0] }}
          transition={{ repeat: Infinity, duration: 10 }}
          className="absolute bottom-[-200px] right-[-80px] w-[400px] h-[400px] bg-blue-200/40 blur-[120px] rounded-full"
        />
      </div>

      {/* DOT GRID */}
      <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:24px_24px]" />

      {/* HEADING */}
      <div className="relative z-10 text-center mb-12 px-6">
        <motion.p
          initial={{ opacity: 0, letterSpacing: "20px" }}
          whileInView={{ opacity: 1, letterSpacing: "6px" }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-cyan-500 uppercase tracking-[6px] text-sm font-semibold"
        >
          Technologies
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-black mt-4 leading-tight text-gray-900"
        >
          Technologies We
          <span className="text-cyan-500"> Work With</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.9 }}
          viewport={{ once: true }}
          className="text-gray-500 mt-4 max-w-2xl mx-auto text-lg"
        >
          We use modern technologies to create high-performance websites,
          scalable applications and premium digital experiences.
        </motion.p>
      </div>

      {/* MARQUEE ROWS */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
        className="relative z-10 flex flex-col gap-10 overflow-hidden"
      >
        {/* Row 1 — scrolls left */}
        <div className="tech-marquee-track tech-marquee-left">
          {allItems.map((item, i) => (
            <div key={`row1-${i}`} className="tech-icon-item">
              <img
                src={item.image}
                alt={item.text}
                className="tech-icon-img"
                loading="lazy"
              />
              <span className="tech-icon-label">{item.text}</span>
            </div>
          ))}
        </div>

      </motion.div>

      {/* EDGE FADE MASKS */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-32 z-20 bg-gradient-to-r from-white to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-32 z-20 bg-gradient-to-l from-white to-transparent" />

      <style>{`
        .tech-marquee-track {
          display: flex;
          gap: 3rem;
          width: max-content;
          will-change: transform;
        }
        .tech-marquee-left {
          animation: marquee-left 35s linear infinite;
        }
        .tech-marquee-right {
          animation: marquee-right 40s linear infinite;
        }
        .tech-marquee-track:hover {
          animation-play-state: paused;
        }
        @keyframes marquee-left {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-right {
          0%   { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .tech-icon-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
          flex-shrink: 0;
          transition: transform 0.3s ease;
        }
        .tech-icon-img {
          width: 90px;
          height: 90px;
          object-fit: contain;
          filter: drop-shadow(0 4px 20px rgba(6,182,212,0.2));
          transition: filter 0.3s ease, transform 0.3s ease;
        }
        .tech-icon-item:hover .tech-icon-img {
          filter: drop-shadow(0 8px 32px rgba(6,182,212,0.5));
        }
        .tech-icon-label {
          font-size: 0.75rem;
          font-weight: 700;
          color: #0891b2;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          white-space: nowrap;
        }
      `}</style>

    </section>
  );
};

export default TechStackSection;
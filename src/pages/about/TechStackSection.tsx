import { motion } from "framer-motion";
import reactImg from "../../assets/abouttechnologies/react.svg";
import nextImg from "../../assets/abouttechnologies/next.svg";
import angularImg from "../../assets/abouttechnologies/angular.svg";
import tailwindImg from "../../assets/abouttechnologies/tailwind.svg";
import nodeImg from "../../assets/abouttechnologies/node.svg";
import phpImg from "../../assets/abouttechnologies/php.svg";
import pythonImg from "../../assets/abouttechnologies/python.svg";
import mongodbImg from "../../assets/abouttechnologies/mongo.svg";
import mysqlImg from "../../assets/abouttechnologies/mysql.svg";
import postgresqlImg from "../../assets/abouttechnologies/postgresql.svg";
import flutterImg from "../../assets/abouttechnologies/flutter.svg";
import typescriptImg from "../../assets/abouttechnologies/typescript.svg";
import javascriptImg from "../../assets/abouttechnologies/javascript.svg";
import dockerImg from "../../assets/abouttechnologies/docker.svg";
import awsImg from "../../assets/abouttechnologies/aws.svg";
import azureImg from "../../assets/abouttechnologies/azure.svg";
import wordpressImg from "../../assets/abouttechnologies/wordpress.svg";
import figmaImg from "../../assets/abouttechnologies/figma.svg";
import gitImg from "../../assets/abouttechnologies/git.svg";
import linuxImg from "../../assets/abouttechnologies/linux.svg";

const techItems = [
  { image: reactImg, text: "React.js" },
  { image: nextImg, text: "Next.js" },
  { image: angularImg, text: "Angular" },
  { image: tailwindImg, text: "Tailwind CSS" },
  { image: nodeImg, text: "Node.js" },
  { image: phpImg, text: "PHP" },
  { image: pythonImg, text: "Python" },
  { image: mongodbImg, text: "MongoDB" },
  { image: mysqlImg, text: "MySQL" },
  { image: postgresqlImg, text: "PostgreSQL" },
  { image: flutterImg, text: "Flutter" },
  { image: typescriptImg, text: "TypeScript" },
  { image: javascriptImg, text: "JavaScript" },
  { image: dockerImg, text: "Docker" },
  { image: awsImg, text: "AWS" },
  { image: azureImg, text: "Azure" },
  { image: wordpressImg, text: "WordPress" },
  { image: figmaImg, text: "Figma" },
  { image: gitImg, text: "Git" },
  { image: linuxImg, text: "Linux" },
];

// Duplicate for seamless infinite loop
const allItems = [...techItems, ...techItems];

const TechStackSection = () => {
  return (
    <section id="tech-stack" aria-label="Our Tech Stack" className="relative py-8 md:py-16 overflow-hidden bg-brand-white">

      {/* BACKGROUND BLOBS */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">

        {/* KEEP DESKTOP SAME */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 40, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 8,
          }}
          className="absolute top-[-120px] sm:top-[-200px] left-[-80px] sm:left-[-100px] w-[260px] h-[260px] sm:w-[500px] sm:h-[500px] bg-brand-cyan/15 blur-[70px] sm:blur-[120px] rounded-full"
        />

        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            y: [0, -40, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 10,
          }}
          className="absolute bottom-[-120px] sm:bottom-[-200px] right-[-60px] sm:right-[-80px] w-[220px] h-[220px] sm:w-[400px] sm:h-[400px] bg-brand-blue/15 blur-[70px] sm:blur-[120px] rounded-full"
        />
      </div>

      {/* DOT GRID */}
      <div className="absolute inset-0 opacity-[0.03] sm:opacity-[0.04] bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:18px_18px] sm:[background-size:24px_24px]" />

      {/* HEADING */}
      <div className="relative z-10 text-center mb-10 sm:mb-12 px-4 sm:px-6">

        <motion.p
          initial={{
            opacity: 0,
            letterSpacing: "20px",
          }}
          whileInView={{
            opacity: 1,
            letterSpacing: "6px",
          }}
          transition={{
            duration: 1,
          }}
          viewport={{ once: true }}
          className="text-brand-blue uppercase tracking-[3px] sm:tracking-[6px] text-[11px] sm:text-sm font-semibold"
        >
          Technologies
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold mt-4 leading-[1.15] text-brand-darkBlue"
        >
          Technologies We
          <span className="text-brand-blue">
            {" "}Work With
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{
            delay: 0.3,
            duration: 0.9,
          }}
          viewport={{ once: true }}
          className="text-gray-600 mt-4 max-w-2xl mx-auto text-sm md:text-lg leading-relaxed px-2 sm:px-0"
        >
          We use modern technologies to create high-performance websites,
          scalable applications and premium digital experiences.
        </motion.p>
      </div>

      {/* MARQUEE ROWS */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.2,
        }}
        viewport={{ once: true }}
        className="relative z-10 flex flex-col gap-6 sm:gap-10 overflow-hidden"
      >

        {/* ROW 1 */}
        <div className="tech-marquee-track tech-marquee-left">
          {allItems.map((item, i) => (
            <div
              key={`row1-${i}`}
              className="tech-icon-item"
            >

              <img
                src={item.image}
                alt={`${item.text} technology icon logo`}
                className="tech-icon-img"
                loading="lazy"
              />

              <span className="tech-icon-label">
                {item.text}
              </span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* EDGE FADE MASKS */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-10 sm:w-32 z-20 bg-gradient-to-r from-white to-transparent" />

      <div className="pointer-events-none absolute inset-y-0 right-0 w-10 sm:w-32 z-20 bg-gradient-to-l from-white to-transparent" />

      <style>{`
    .tech-marquee-track {
      display: flex;
      gap: 1.4rem;
      width: max-content;
      will-change: transform;
      padding-inline: 1rem;
    }

    @media (min-width: 640px) {
      .tech-marquee-track {
        gap: 3rem;
        padding-inline: 0;
      }
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
      0% {
        transform: translateX(0);
      }

      100% {
        transform: translateX(-50%);
      }
    }

    @keyframes marquee-right {
      0% {
        transform: translateX(-50%);
      }

      100% {
        transform: translateX(0);
      }
    }

    .tech-icon-item {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0.45rem;
      flex-shrink: 0;
      transition: transform 0.3s ease;
    }

    .tech-icon-img {
      width: 60px;
      height: 60px;
      object-fit: contain;
      filter: drop-shadow(0 4px 20px rgba(0,180,216,0.2));
      transition: filter 0.3s ease, transform 0.3s ease;
    }

    @media (min-width: 640px) {
      .tech-icon-img {
        width: 90px;
        height: 90px;
      }
    }

    .tech-icon-item:hover .tech-icon-img {
      filter: drop-shadow(0 8px 32px rgba(0,180,216,0.5));
    }

    .tech-icon-label {
      font-size: 0.65rem;
      font-weight: 700;
      color: #1565c0;
      letter-spacing: 0.05em;
      text-transform: uppercase;
      white-space: nowrap;
      text-align: center;
    }

    @media (min-width: 640px) {
      .tech-icon-label {
        font-size: 0.75rem;
        letter-spacing: 0.06em;
      }
    }
  `}</style>
    </section>
  );
};

export default TechStackSection;
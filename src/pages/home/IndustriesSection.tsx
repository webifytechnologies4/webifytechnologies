import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const industries = [
  {
    title: "Healthcare Ecosystems",
    stage: "Phase 01",
    desc: "Engineered high-security software infrastructures meeting strict HIPAA standards.",
    icon: "🏥",
    image:
      "https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg",
  },
  {
    title: "Fintech & Fiscal Ledgers",
    stage: "Phase 02",
    desc: "Scalable transaction engines and predictive financial management systems.",
    icon: "💳",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1600&auto=format&fit=crop",
  },
  {
    title: "Distributed Education",
    stage: "Phase 03",
    desc: "Cloud-synced LMS ecosystems and modern streaming infrastructures.",
    icon: "📚",
    image:
      "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?q=80&w=1600&auto=format&fit=crop",
  },
  {
    title: "Enterprise Real Estate",
    stage: "Phase 04",
    desc: "Interactive dashboards and intelligent real-estate management systems.",
    icon: "🏢",
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1600&auto=format&fit=crop",
  },
  {
    title: "High-Volume E-Commerce",
    stage: "Phase 05",
    desc: "Scalable storefront systems built for extreme seasonal traffic spikes.",
    icon: "🛒",
    image:
      "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?q=80&w=1600&auto=format&fit=crop",
  },
  {
    title: "Next-Gen Technology",
    stage: "Phase 06",
    desc: "AI-powered SaaS ecosystems and futuristic scalable architectures.",
    icon: "🚀",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1600&auto=format&fit=crop",
  },
];

const IndustriesSection = () => {
  const sectionRef = useRef(null);

  useGSAP(
    () => {
      // TIMELINE LINE
      gsap.fromTo(
        ".timeline-line-fill",
        {
          height: "0%",
        },
        {
          height: "100%",
          ease: "none",
          scrollTrigger: {
            trigger: ".timeline-wrapper",
            start: "top 20%",
            end: "bottom bottom",
            scrub: true,
          },
        }
      );

      // ITEMS ANIMATION
      gsap.utils.toArray<HTMLElement>(".timeline-item").forEach((item) => {
        const card = item.querySelector(".timeline-card");
        const image = item.querySelector(".timeline-image");
        const dot = item.querySelector(".timeline-dot");

        gsap.from(card, {
          opacity: 0,
          x: -80,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: item,
            start: "top 80%",
          },
        });

        gsap.from(image, {
          opacity: 0,
          x: 80,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: item,
            start: "top 80%",
          },
        });

        gsap.from(dot, {
          scale: 0,
          duration: 0.5,
          ease: "back.out(2)",
          scrollTrigger: {
            trigger: item,
            start: "top 80%",
          },
        });
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      className="relative py-12 px-6 md:px-16 overflow-hidden bg-white"
    >
      {/* BACKGROUND LIGHT */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-sky-200/40 blur-[140px] rounded-full" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-100/40 blur-[120px] rounded-full" />

      {/* GRID */}
      <div className="absolute inset-0 opacity-[0.04]">
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,0,0,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.08) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* HEADER */}
      <div className="relative z-10 text-center mb-28">
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-sky-200 bg-sky-50 text-sky-700 text-sm font-semibold tracking-[3px] uppercase">
          ✦ Industries
        </div>

        <h2 className="mt-6 text-5xl md:text-7xl font-black text-slate-900">
          Industries We
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-sky-500 to-cyan-400">
            Serve & Scale
          </span>
        </h2>

        <p className="max-w-7xl mx-auto mt-6 text-lg text-slate-900 leading-relaxed">
          We craft scalable digital ecosystems for modern industries using
          advanced technologies and premium user experiences.
        </p>
      </div>

      {/* TIMELINE */}
      <div className="timeline-wrapper relative max-w-7xl mx-auto">

        {/* LINE */}
        <div className="absolute left-[18px] md:left-1/2 top-0 w-[2px] h-full bg-slate-200 -translate-x-1/2" />

        {/* ANIMATED LINE */}
        <div className="timeline-line-fill absolute left-[18px] md:left-1/2 top-0 w-[3px] h-0 bg-gradient-to-b from-blue-700 via-sky-500 to-cyan-400 -translate-x-1/2 origin-top" />

        <div className="space-y-12 md:space-y-18">

          {industries.map((ind, i) => {
            const reverse = i % 2 === 0;

            return (
              <div
                key={i}
                className={`timeline-item relative flex flex-col md:flex-row gap-6 md:gap-10 items-center ${reverse ? "md:flex-row-reverse" : ""
                  }`}
              >
                {/* DOT */}
                <div className="timeline-dot absolute left-[18px] md:left-1/2 top-10 w-5 h-5 rounded-full bg-sky-500 border-4 border-white shadow-[0_0_20px_rgba(14,165,233,0.45)] -translate-x-1/2 z-20" />

                {/* CONTENT */}
                <div className="w-full md:w-1/2 pl-10 md:pl-0">
                  <div className="timeline-card relative overflow-hidden rounded-lg border border-slate-300 bg-white/80 backdrop-blur-xl p-5 md:p-8 shadow-xl">

                    <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-sky-50 border border-sky-100 text-sky-700 text-xs font-bold tracking-[2px] uppercase">
                      {ind.stage}
                    </div>

                    <h3 className="mt-5 text-2xl md:text-3xl font-black text-slate-900">
                      {ind.title}
                    </h3>

                    <p className="mt-4 text-slate-500 leading-relaxed text-sm md:text-lg">
                      {ind.desc}
                    </p>

                    <div className="absolute top-5 right-5 text-3xl md:text-4xl opacity-90">
                      {ind.icon}
                    </div>
                  </div>
                </div>

                {/* IMAGE */}
                <div className="w-full md:w-1/2 pl-10 md:pl-0">
                  <div className="relative overflow-hidden rounded-lg h-[180px] md:h-[220px] border border-slate-200 group shadow-[0_10px_40px_rgba(0,0,0,0.06)]">

                    <img
                      src={ind.image}
                      alt={ind.title}
                      className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent" />

                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 translate-x-[-150%] group-hover:translate-x-[180%]" />
                  </div>
                </div>

              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
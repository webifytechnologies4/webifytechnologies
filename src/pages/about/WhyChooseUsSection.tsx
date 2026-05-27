import { motion } from "framer-motion";

const whyCards = [
  {
    title: "Innovative Solutions",
    desc: "Future-ready digital products designed for modern businesses.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Performance Driven",
    desc: "Fast, scalable and optimized systems built for growth.",
    image: "https://images.unsplash.com/photo-1556155092-490a1ba16284?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Client Focused",
    desc: "Every project is crafted around business success.",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Affordable Pricing",
    desc: "Premium quality services within your budget.",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Secure Development",
    desc: "Reliable technologies with enterprise-grade security.",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "On-Time Delivery",
    desc: "Professional workflows ensuring timely execution.",
    image: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1200&auto=format&fit=crop",
  },
];

const WhyChooseUsSection = () => {
  return (
    <section id="why-choose-us" aria-label="Why Choose Us" className="relative py-8 md:py-16 px-4 md:px-8 lg:px-16 overflow-hidden bg-[#030712]">

      {/* PREMIUM BACKGROUND */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">

        {/* KEEP DESKTOP SAME */}
        <div className="absolute top-[-220px] left-[-120px] w-[260px] h-[260px] sm:w-[550px] sm:h-[550px] bg-brand-cyan/15 blur-[90px] sm:blur-[180px] rounded-full" />

        <div className="absolute bottom-[-250px] right-[-120px] w-[300px] h-[300px] sm:w-[600px] sm:h-[600px] bg-brand-blue/15 blur-[100px] sm:blur-[180px] rounded-full" />

        {/* GRID */}
        <div
          className="absolute inset-0 opacity-[0.04] sm:opacity-[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
            backgroundSize: "70px 70px",
          }}
        />

        {/* ANIMATED BEAM */}
        <motion.div
          animate={{ x: ["-20%", "120%"] }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-20 sm:top-24 w-[180px] sm:w-[320px] h-[2px] bg-gradient-to-r from-transparent via-brand-cyan to-transparent"
        />
      </div>

      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative z-10 text-center max-w-4xl mx-auto"
      >

        {/* BADGE */}
        <div className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 rounded-full border border-brand-cyan/30 bg-white/5 backdrop-blur-xl">

          <div className="w-2 h-2 rounded-full bg-brand-cyan animate-pulse" />

          <span className="text-brand-cyan text-[10px] sm:text-xs tracking-[2px] sm:tracking-[4px] uppercase font-bold">
            Why Choose Webify
          </span>
        </div>

        {/* TITLE */}
        <h2 className="text-3xl md:text-5xl font-bold mt-6 sm:mt-8 leading-[1.15] text-white px-1">
          Engineering
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan via-brand-white to-brand-cyan">
            {" "}Digital Excellence
          </span>
        </h2>

        {/* DESCRIPTION */}
        <p className="text-gray-300 mt-5 sm:mt-8 text-sm md:text-lg leading-relaxed max-w-3xl mx-auto px-2 sm:px-0">
          We combine innovation, performance and modern technologies
          to create premium digital experiences that help businesses
          scale faster in the digital world.
        </p>
      </motion.div>

      {/* CARDS */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8 mt-14 sm:mt-24">

        {whyCards.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: i * 0.08,
            }}
            viewport={{ once: true }}
            whileHover={{ y: -12 }}
            className="group relative overflow-hidden rounded-2xl sm:rounded-lg"
          >

            {/* GLOW BORDER */}
            <div className="absolute -inset-[1px] rounded-2xl sm:rounded-lg bg-gradient-to-br from-brand-cyan/40 via-brand-blue/30 to-brand-cyan/40 opacity-0 group-hover:opacity-100 blur-sm transition duration-500" />

            {/* CARD */}
            <div className="relative h-full rounded-2xl sm:rounded-lg border border-white/10 bg-white/5 backdrop-blur-2xl overflow-hidden">

              {/* IMAGE */}
              <div className="relative h-52 sm:h-64 overflow-hidden">

                <img
                  src={item.image}
                  alt={`${item.title} feature illustration for Webify Technologies`}
                  className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
              </div>

              {/* CONTENT */}
              <div className="relative p-5 sm:p-8">

                <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-brand-cyan transition duration-300 leading-snug">
                  {item.title}
                </h3>

                <p className="text-gray-300 leading-relaxed mt-4 sm:mt-5 text-sm md:text-base">
                  {item.desc}
                </p>

                <div className="flex items-center gap-3 mt-7 sm:mt-10">

                  <motion.div
                    whileHover={{ width: 90 }}
                    className="h-[4px] w-12 sm:w-14 rounded-full bg-gradient-to-r from-brand-blue to-brand-cyan transition-all duration-500"
                  />

                  <div className="w-2 h-2 rounded-full bg-brand-cyan" />
                </div>
              </div>

              {/* HOVER SHINE */}
              <motion.div
                initial={{ x: "-120%" }}
                whileHover={{ x: "220%" }}
                transition={{ duration: 1 }}
                className="absolute top-0 left-0 w-[40%] h-full bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUsSection;

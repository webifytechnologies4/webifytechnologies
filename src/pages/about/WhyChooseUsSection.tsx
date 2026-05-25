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
    <section className="relative py-16 px-6 md:px-6 overflow-hidden bg-black">

      {/* PREMIUM BACKGROUND */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-220px] left-[-120px] w-[550px] h-[550px] bg-cyan-500/20 blur-[180px] rounded-full" />
        <div className="absolute bottom-[-250px] right-[-120px] w-[600px] h-[600px] bg-blue-500/20 blur-[180px] rounded-full" />

        {/* grid */}
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
            backgroundSize: "70px 70px",
          }}
        />

        {/* animated beam */}
        <motion.div
          animate={{ x: ["-20%", "120%"] }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          className="absolute top-24 w-[320px] h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
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
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-cyan-500/20 bg-white/5 backdrop-blur-xl">
          <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
          <span className="text-cyan-300 text-xs tracking-[4px] uppercase font-bold">
            Why Choose Webify
          </span>
        </div>

        <h2 className="text-4xl md:text-6xl font-black mt-8 leading-tight text-white">
          Engineering
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400">
            {" "}Digital Excellence
          </span>
        </h2>

        <p className="text-gray-400 mt-8 text-lg leading-relaxed max-w-3xl mx-auto">
          We combine innovation, performance and modern technologies
          to create premium digital experiences that help businesses
          scale faster in the digital world.
        </p>
      </motion.div>

      {/* CARDS */}
      <div className="relative z-10 grid md:grid-cols-2 xl:grid-cols-3 gap-8 mt-24">
        {whyCards.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: i * 0.08 }}
            viewport={{ once: true }}
            whileHover={{ y: -12 }}
            className="group relative overflow-hidden rounded-lg"
          >
            {/* glow border */}
            <div className="absolute -inset-[1px] rounded-lg bg-gradient-to-br from-cyan-400/40 via-blue-500/30 to-purple-500/40 opacity-0 group-hover:opacity-100 blur-sm transition duration-500" />

            {/* card */}
            <div className="relative h-full rounded-lg border border-white/10 bg-white/5 backdrop-blur-2xl overflow-hidden">

              {/* image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
              </div>

              {/* content */}
              <div className="relative p-8">
                <h3 className="text-3xl font-black text-white group-hover:text-cyan-300 transition duration-300">
                  {item.title}
                </h3>
                <p className="text-gray-400 leading-relaxed mt-5 text-[16px]">
                  {item.desc}
                </p>
                <div className="flex items-center gap-3 mt-10">
                  <motion.div
                    whileHover={{ width: 90 }}
                    className="h-[4px] w-14 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 transition-all duration-500"
                  />
                  <div className="w-2 h-2 rounded-full bg-cyan-400" />
                </div>
              </div>

              {/* hover shine */}
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

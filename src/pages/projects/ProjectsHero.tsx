import { motion } from "framer-motion";

const ProjectsHero = () => {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center px-6 md:px-20 pt-32 pb-20 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-cyan-400/20 blur-[150px] rounded-full" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-400/15 blur-[120px] rounded-full" />

      <div className="relative z-10 text-center max-w-5xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-cyan-200 bg-cyan-50 mb-8"
        >
          <span className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse"></span>
          <span className="text-cyan-600 font-medium tracking-wide text-sm">Our Portfolio</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="text-5xl md:text-7xl lg:text-8xl font-black leading-tight"
        >
          Our Premium
          <span className="text-cyan-500"> Projects</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-lg md:text-xl text-gray-600 mt-8 leading-relaxed max-w-3xl mx-auto"
        >
          Explore futuristic websites, applications and scalable software systems built by Webify
          Technologies.
        </motion.p>
      </div>
    </section>
  );
};

export default ProjectsHero;

import { motion } from "framer-motion";

const logos = [
  "https://skypathologylab.in/assets/Petho_Logo-VkAX8ME5.png",
  "https://www.viaanenterprise.com/static/media/6.dac8c41b2a198c840dfa.png",

];

const ClientsSection = () => {
  return (
    <section id="clients-section" aria-label="Our Clients" className="relative overflow-hidden bg-brand-white py-8 md:py-16">
      {/* Background Glow */}
      <div className="absolute top-0 left-0 h-56 w-56 md:h-72 md:w-72 rounded-full bg-brand-light/35 blur-3xl opacity-50" />
      <div className="absolute bottom-0 right-0 h-56 w-56 md:h-72 md:w-72 rounded-full bg-brand-light/35 blur-3xl opacity-50" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-8 lg:px-16">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-10 md:mb-16 text-center"
        >
          <span className="inline-block rounded-full bg-brand-light px-4 md:px-5 py-2 text-xs md:text-sm font-semibold uppercase tracking-[3px] text-brand-blue">
            Trusted By Brands
          </span>

          <h2 className="mt-5 md:mt-6 text-3xl md:text-5xl font-bold leading-tight text-brand-darkBlue">
            Our Happy Clients
          </h2>

          <p className="mx-auto mt-4 md:mt-5 max-w-3xl text-sm md:text-lg leading-relaxed text-gray-700">
            We collaborate with startups, enterprises, and innovative brands
            worldwide to create impactful digital experiences.
          </p>
        </motion.div>

        {/* Logo Slider */}
        <div className="relative overflow-hidden">
          {/* Fade Left */}
          <div className="absolute left-0 top-0 z-20 h-full w-10 md:w-32 bg-gradient-to-r from-white to-transparent" />

          {/* Fade Right */}
          <div className="absolute right-0 top-0 z-20 h-full w-10 md:w-32 bg-gradient-to-l from-white to-transparent" />

          <motion.div
            animate={{
              x: ["0%", "-50%"],
            }}
            transition={{
              repeat: Infinity,
              duration: 20,
              ease: "linear",
            }}
            className="flex w-max gap-4 sm:gap-6 md:gap-10"
          >
            {[...logos, ...logos].map((logo, index) => (
              <motion.div
                key={index}
                whileHover={{
                  y: -8,
                  scale: 1.05,
                }}
                className="group flex h-24 w-40 sm:h-28 sm:w-48 md:h-32 md:w-56 flex-shrink-0 items-center justify-center rounded-2xl md:rounded-3xl border border-gray-200 bg-white px-4 sm:px-6 md:px-8 shadow-lg transition duration-500 hover:border-brand-blue/30 hover:shadow-brand-blue/10"
              >
                <img
                  src={logo}
                  alt="Client brand logo"
                  className="h-8 sm:h-10 md:h-22 w-auto object-contain transition duration-500 "
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
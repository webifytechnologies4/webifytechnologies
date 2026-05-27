import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
 
  {
    id: 5,
    name: "viaan patel",
    country: "CEO, Viaan Enterprise",
    image: "https://www.viaanenterprise.com/static/media/6.dac8c41b2a198c840dfa.png",
    text: `Webify Technologies transformed our online presence with a stunning, high-performance platform. Their expertise in web development and dedication to excellence helped us scale our digital operations seamlessly.`,
  },
  {
    id: 6,
    name: "deep patel",
    country: "Director, Sky Pathology Lab",
    image: "https://skypathologylab.in/assets/Petho_Logo-VkAX8ME5.png",
    text: `The team at Webify delivered an exceptional digital management portal for our pathology lab. It is responsive, highly secure, and extremely user-friendly. Their support is top-notch!`,
  },
];

const TestimonialSection = () => {
  const [active, setActive] = useState(0);

  // Auto Slide
  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="testimonials-section" aria-label="Testimonials" className="relative w-full overflow-hidden bg-brand-light/20 py-8 md:py-16">
      {/* Background Blur */}
      <div className="absolute top-20 left-10 w-52 h-52 md:w-72 md:h-72 bg-brand-light/40 blur-3xl rounded-full" />
      <div className="absolute bottom-10 right-10 w-56 h-56 md:w-80 md:h-80 bg-brand-gold/10 blur-3xl rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center mb-10 md:mb-14"
        >
          <p className="uppercase tracking-[3px] md:tracking-[5px] text-brand-gold font-semibold mb-3 md:mb-4 text-xs sm:text-sm">
            Client Stories
          </p>

          <h2 className="text-3xl md:text-5xl font-bold leading-tight text-brand-darkBlue">
            Real stories.
            <span className="block md:inline text-brand-gold">
              {" "}Real trust.
            </span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 md:gap-14 items-center">
          {/* Left Images */}
          <div className="flex items-center justify-center lg:justify-start gap-4 md:gap-5 flex-wrap">
            {testimonials.map((item, index) => (
              <motion.div
                key={item.id}
                onClick={() => setActive(index)}
                whileHover={{
                  scale: 1.08,
                  rotate: index === active ? 0 : 4,
                }}
                transition={{ duration: 0.4 }}
                className={`relative cursor-pointer rounded-full p-[4px] ${index === active
                    ? "bg-brand-blue"
                    : "bg-gray-300"
                  }`}
              >
                {/* Pulse Ring */}
                {index === active && (
                  <motion.div
                    initial={{ scale: 1, opacity: 0.7 }}
                    animate={{ scale: 1.3, opacity: 0 }}
                    transition={{
                      repeat: Infinity,
                      duration: 1.8,
                    }}
                    className="absolute inset-0 rounded-full border-2 border-brand-blue"
                  />
                )}

                <img
                  src={item.image}
                  alt={`${item.name} testimonial profile`}
                  className={`w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 rounded-full object-cover border-4 transition-all duration-500 bg-white ${index === active
                      ? "border-white grayscale-0 shadow-lg"
                      : "border-white grayscale opacity-70"
                    }`}
                />
              </motion.div>
            ))}
          </div>

          {/* Right Content */}
          <div className="relative min-h-[260px] md:min-h-[320px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, x: 80 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -80 }}
                transition={{ duration: 0.7 }}
                className="absolute w-full"
              >
                <p className="text-xl md:text-2xl italic text-brand-darkBlue leading-relaxed font-medium">
                  "{testimonials[active].text}"
                </p>

                <div className="mt-8 md:mt-10">
                  <h3 className="text-xl md:text-2xl font-bold text-brand-darkBlue">
                    — {testimonials[active].name}
                  </h3>

                  <p className="text-sm md:text-lg text-gray-600 mt-2">
                    {testimonials[active].country}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Bottom Progress */}
        <div className="flex justify-center gap-3 mt-8 md:mt-4">
          {testimonials.map((_, index) => (
            <motion.div
              key={index}
              onClick={() => setActive(index)}
              className={`h-2 rounded-full cursor-pointer transition-all duration-500 ${active === index
                  ? "w-12 md:w-14 bg-brand-blue"
                  : "w-3 bg-gray-300"
                }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    id: 1,
    name: "Rhythm Benara",
    country: "Studying in New Zealand",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400",
    text: `Honestly the best decision I made! I was so stressed about applications and visas, but they handled everything smoothly. The team is super friendly and explains every small detail. Totally worth it!`,
  },
  {
    id: 2,
    name: "Sarah Williams",
    country: "Studying in Canada",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400",
    text: `Their guidance made my dream come true. From university selection to visa process, everything was organized perfectly.`,
  },
  {
    id: 3,
    name: "Aarav Patel",
    country: "Studying in Australia",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=400",
    text: `Very professional team with amazing support. They answered all my questions patiently and helped me at every step.`,
  },
  {
    id: 4,
    name: "Emily Watson",
    country: "Studying in UK",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=400",
    text: `I highly recommend them to anyone planning to study abroad. Their process is smooth, transparent, and stress-free.`,
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
    <section className="relative w-full overflow-hidden bg-[#f5f5f5] py-10 md:py-14">
      {/* Background Blur */}
      <div className="absolute top-20 left-10 w-52 h-52 md:w-72 md:h-72 bg-blue-200/20 blur-3xl rounded-full" />

      <div className="absolute bottom-10 right-10 w-56 h-56 md:w-80 md:h-80 bg-yellow-200/20 blur-3xl rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-0">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center mb-10 md:mb-14"
        >
          <p className="uppercase tracking-[3px] md:tracking-[5px] text-yellow-600 font-semibold mb-3 md:mb-4 text-xs sm:text-sm">
            Student Voices
          </p>

          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight text-[#16235a]">
            Real stories.
            <span className="block md:inline text-yellow-600">
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
                    ? "bg-blue-600"
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
                    className="absolute inset-0 rounded-full border-2 border-blue-500"
                  />
                )}

                <img
                  src={item.image}
                  alt={item.name}
                  className={`w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 rounded-full object-cover border-4 transition-all duration-500 ${index === active
                      ? "border-white grayscale-0"
                      : "border-white grayscale"
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
                <p className="text-lg sm:text-xl md:text-2xl italic text-[#1b274d] leading-relaxed font-medium">
                  {testimonials[active].text}
                </p>

                <div className="mt-8 md:mt-10">
                  <h4 className="text-lg sm:text-xl font-bold text-[#16235a]">
                    — {testimonials[active].name}
                  </h4>

                  <p className="text-sm sm:text-base md:text-lg text-slate-900 mt-2">
                    {testimonials[active].country}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Bottom Progress */}
        <div className="flex justify-center gap-3 mt-4 md:mt-0">
          {testimonials.map((_, index) => (
            <motion.div
              key={index}
              onClick={() => setActive(index)}
              className={`h-2 rounded-full cursor-pointer transition-all duration-500 ${active === index
                  ? "w-12 md:w-14 bg-blue-600"
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
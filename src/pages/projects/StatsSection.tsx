import { motion } from "framer-motion";

const stats = [
  { number: "7+", text: "Projects Completed" },
  { number: "5+", text: "Technologies" },
  { number: "99%", text: "Client Satisfaction" },
  { number: "24/7", text: "Support" },
];

const StatsSection = () => {
  return (
    <section aria-label="Our Achievements Stats" className="px-4 md:px-8 lg:px-16 py-8 md:py-16 bg-brand-white">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-5xl font-bold text-brand-darkBlue">
          Our <span className="text-brand-blue">Numbers</span>
        </h2>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
          Results that speak for themselves — proven by the work we deliver.
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {stats.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ y: -8, scale: 1.03 }}
            className="bg-white border border-brand-cyan/10 rounded-[30px] p-6 md:p-8 text-center shadow-lg shadow-brand-blue/5 hover:border-brand-cyan/35 transition-colors duration-300"
          >
            <h3 className="text-4xl md:text-5xl font-bold text-brand-cyan">{item.number}</h3>
            <p className="text-gray-600 mt-4 text-sm md:text-base font-medium">{item.text}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default StatsSection;

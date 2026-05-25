import { motion } from "framer-motion";

const stats = [
  { number: "10+", text: "Projects Completed" },
  { number: "5+", text: "Technologies" },
  { number: "100%", text: "Client Satisfaction" },
  { number: "24/7", text: "Support" },
];

const StatsSection = () => {
  return (
    <section className="px-6 md:px-20 py-28 bg-gradient-to-b from-blue-50 to-white">
      <div className="text-center mb-16">
        <h2 className="text-5xl font-black">
          Our <span className="text-blue-700">Numbers</span>
        </h2>
        <p className="text-gray-500 mt-5 max-w-2xl mx-auto">
          Results that speak for themselves — proven by the work we deliver.
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ y: -10, scale: 1.03 }}
            className="bg-white border border-blue-100 rounded-[30px] p-10 text-center shadow-xl"
          >
            <h2 className="text-5xl font-black text-blue-700">{item.number}</h2>
            <p className="text-gray-500 mt-4 font-medium">{item.text}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default StatsSection;

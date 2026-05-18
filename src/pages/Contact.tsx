import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="min-h-screen bg-[#050816] text-white px-6 md:px-20 py-24 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-3xl bg-white/5 border border-white/10 rounded-3xl p-10 backdrop-blur-xl"
      >
        <h1 className="text-5xl font-bold mb-10 text-center">
          Contact Us
        </h1>

        <form className="space-y-6">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full bg-black/30 border border-white/10 rounded-xl px-5 py-4 outline-none"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="w-full bg-black/30 border border-white/10 rounded-xl px-5 py-4 outline-none"
          />

          <textarea
            placeholder="Your Message"
            rows={6}
            className="w-full bg-black/30 border border-white/10 rounded-xl px-5 py-4 outline-none"
          />

          <button className="w-full bg-cyan-500 hover:bg-cyan-400 text-black font-semibold py-4 rounded-xl transition-all">
            Send Message
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default Contact;
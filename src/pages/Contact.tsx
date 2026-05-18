// import { motion } from "framer-motion";

// const Contact = () => {
//   return (
//     <div className="min-h-screen bg-[#050816] text-white px-6 md:px-20 py-24 flex items-center justify-center">
//       <motion.div
//         initial={{ opacity: 0, y: 40 }}
//         animate={{ opacity: 1, y: 0 }}
//         className="w-full max-w-3xl bg-white/5 border border-white/10 rounded-3xl p-10 backdrop-blur-xl"
//       >
//         <h1 className="text-5xl font-bold mb-10 text-center">
//           Contact Us
//         </h1>

//         <form className="space-y-6">
//           <input
//             type="text"
//             placeholder="Your Name"
//             className="w-full bg-black/30 border border-white/10 rounded-xl px-5 py-4 outline-none"
//           />

//           <input
//             type="email"
//             placeholder="Your Email"
//             className="w-full bg-black/30 border border-white/10 rounded-xl px-5 py-4 outline-none"
//           />

//           <textarea
//             placeholder="Your Message"
//             rows={6}
//             className="w-full bg-black/30 border border-white/10 rounded-xl px-5 py-4 outline-none"
//           />

//           <button className="w-full bg-cyan-500 hover:bg-cyan-400 text-black font-semibold py-4 rounded-xl transition-all">
//             Send Message
//           </button>
//         </form>
//       </motion.div>
//     </div>
//   );
// };

// export default Contact;

import { motion } from "framer-motion";
import { Rocket, Sparkles, Clock } from "lucide-react";

const WorkInProgress = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-cyan-950 to-black text-white overflow-hidden relative">

      {/* Background Glow */}
      <div className="absolute w-[600px] h-[600px] bg-cyan-500/20 blur-[160px] rounded-full top-[-200px] left-1/2 -translate-x-1/2 animate-pulse" />
      <div className="absolute w-[400px] h-[400px] bg-blue-500/20 blur-[140px] rounded-full bottom-[-150px] right-[-100px] animate-pulse" />

      {/* Content */}
      <div className="text-center z-10 max-w-2xl px-6">

        {/* Icon Animation */}
        <motion.div
          animate={{ y: [0, -15, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="flex justify-center mb-6"
        >
          <div className="p-5 rounded-full bg-cyan-500/10 border border-cyan-400">
            <Rocket size={50} className="text-cyan-400" />
          </div>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-black leading-tight"
        >
          Work In <span className="text-cyan-400">Progress</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-gray-300 mt-6 text-base md:text-lg"
        >
          We are building something <span className="text-cyan-400 font-semibold">powerful & futuristic</span>.
          Stay tuned for an amazing digital experience.
        </motion.p>

        {/* Progress Bar */}
        <div className="mt-10">

          <div className="flex justify-between text-sm text-gray-400 mb-2">
            <span>Progress</span>
            <span>65%</span>
          </div>

          <div className="w-full h-3 bg-white/10 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "65%" }}
              transition={{ duration: 1.5 }}
              className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"
            />
          </div>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-12">

          <div className="p-4 rounded-xl bg-white/5 border border-white/10">
            <Sparkles className="text-cyan-400 mx-auto mb-2" />
            <p className="text-sm text-gray-300">Modern UI</p>
          </div>

          <div className="p-4 rounded-xl bg-white/5 border border-white/10">
            <Rocket className="text-cyan-400 mx-auto mb-2" />
            <p className="text-sm text-gray-300">Fast Performance</p>
          </div>

          <div className="p-4 rounded-xl bg-white/5 border border-white/10">
            <Clock className="text-cyan-400 mx-auto mb-2" />
            <p className="text-sm text-gray-300">Launching Soon</p>
          </div>

        </div>

        {/* Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-12 px-8 py-3 rounded-full bg-cyan-500 hover:bg-cyan-400 text-black font-semibold shadow-lg shadow-cyan-500/30"
        >
          Notify Me
        </motion.button>

        <p className="text-gray-500 text-xs mt-6">
          © Webify Technologies — Building the future
        </p>
      </div>
    </div>
  );
};

export default WorkInProgress;
import { motion } from "framer-motion";
import { Globe, CheckCircle2, ArrowRight, Code2 } from "lucide-react";

const CompanyStorySection = () => {
  return (
    <section className="relative py-14 px-6 md:px-0 overflow-hidden bg-[#f8fafc]">

      {/* SOFT BACKGROUND */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-80px] left-[-80px] w-[400px] h-[400px] bg-cyan-100/60 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-80px] right-[-80px] w-[350px] h-[350px] bg-blue-100/60 blur-[120px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 items-center">

        {/* ── LEFT: STACKED IMAGE BLOCK ── */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="relative flex justify-center items-center min-h-[420px]"
        >

          {/* BACK IMAGE — slightly offset, rotated, smaller */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: -3 }}
            whileInView={{ opacity: 1, scale: 1, rotate: -4 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            className="absolute top-0 left-0 w-[58%] h-[280px] rounded-lg overflow-hidden shadow-xl shadow-black border-2 border-white"
          >
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&fit=crop"
              alt="Web development team"
              className="w-full h-full object-cover"
            />
            {/* subtle overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-transparent" />
          </motion.div>

          {/* FRONT IMAGE — larger, front */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.25 }}
            viewport={{ once: true }}
            className="relative mt-28 ml-20 w-[65%] h-[320px] rounded-lg overflow-hidden shadow-2xl border-4 border-white z-10"
          >
            <img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=900&auto=format&fit=crop"
              alt="Software developer coding"
              className="w-full h-full object-cover"
            />
            {/* overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
          </motion.div>

          {/* FLOATING BADGE — top right of front image */}
          <motion.div
            initial={{ opacity: 0, scale: 0, rotate: -20 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.6, delay: 0.5, type: "spring", stiffness: 200 }}
            viewport={{ once: true }}
            animate={{ y: [0, -8, 0] }}
            className="absolute top-22 right-12 z-20 w-14 h-14 rounded-2xl bg-white shadow-xl flex items-center justify-center border border-cyan-100"
          >
            <Code2 size={28} className="text-cyan-500" />
          </motion.div>

        

        </motion.div>

        {/* ── RIGHT: TEXT CONTENT ── */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          viewport={{ once: true }}
          className="space-y-3"
        >

          {/* TAG */}
          <div className="inline-flex items-center gap-2 px-10 py-1.5 rounded-full border border-cyan-800 bg-cyan-50 text-cyan-600 text-sm font-semibold">
            <Globe size={14} />
            About Webify Technologies
          </div>

          {/* HEADING */}
          <h2 className="text-4xl md:text-5xl font-black leading-snug text-gray-900">
            <span className="text-cyan-500">Every Website</span>
            <br />
            Has A Vision Behind It
          </h2>

          {/* DESCRIPTION */}
          <p className="text-gray-600 leading-relaxed text-[16px] max-w-xl">
            What you see is a finished product. What we see is months of
            planning, designing, and engineering. At <span className="font-semibold text-gray-900">Webify Technologies</span>,
            we work behind the scenes — crafting scalable web apps, mobile
            applications, and software solutions so your business stands out
            in the digital world.
          </p>


          {/* BULLET POINTS */}
          <div className="space-y-3 pt-1">
            {[
              "Web development isn't just code — it's your brand's digital identity.",
              "We build scalable apps that grow with your business.",
              "From UI design to deployment — full-cycle development.",
            ].map((point, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start gap-3"
              >
                <CheckCircle2 size={18} className="text-cyan-500 flex-shrink-0 mt-0.5" />
                <p className="text-gray-600 text-[15px]">{point}</p>
              </motion.div>
            ))}
          </div>

          {/* CTA BUTTON */}
          <motion.button
            whileHover={{ scale: 1.04, boxShadow: "0 0 30px rgba(6,182,212,0.3)" }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-3 mt-4 px-10 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold shadow-lg"
          >
            Get Started
            <span className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
              <ArrowRight size={14} />
            </span>
          </motion.button>

        </motion.div>
      </div>
    </section>
  );
};

export default CompanyStorySection;

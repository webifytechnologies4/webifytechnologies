import { motion } from "framer-motion";
import { Layers3, Rocket } from "lucide-react";
import vission from "../../assets/vission.jpeg";
import mission from "../../assets/mission.jpeg";

const MissionVisionSection = () => {
  return (
    <section className="px-6 md:px-0 max-w-7xl mx-auto py-6 bg-gray-50 overflow-hidden">

      {/* HEADING */}
      <div className="text-center mb-10 ">
        <p className="text-cyan-500 uppercase tracking-[5px] font-semibold mb-4">
          The Foundation
        </p>

        <h2 className="text-5xl md:text-6xl font-black leading-tight">
          What Drives
          <span className="text-cyan-500"> Webify</span>
        </h2>

        <p className="text-gray-900 max-w-7xl mx-auto mt-6 leading-relaxed text-lg">
          At Webify Technologies, we build innovative and scalable digital solutions
          that help modern businesses grow, perform better, and succeed online.
        </p>
      </div>

      {/* CARDS */}
      <div className="grid md:grid-cols-2 gap-10 perspective-[2000px]">

        {/* VISION CARD */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="group h-[320px] md:h-[420px]"
        >
          <div className="relative w-full h-full duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">

            {/* FRONT */}
            <div className="absolute inset-0 [backface-visibility:hidden] overflow-hidden rounded-lg shadow-2xl">
              <img src={vission} alt="Vision" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-8 left-8">
                <p className="text-cyan-300 uppercase tracking-[4px] text-sm font-semibold mb-3">
                  Future Innovation
                </p>
                <h2 className="text-5xl font-black text-white leading-tight">Our Vision</h2>
              </div>
            </div>

            {/* BACK */}
            <div className="absolute inset-0 rounded-[18px] overflow-hidden shadow-2xl bg-gradient-to-br from-cyan-500 via-cyan-600 to-blue-700 text-white [transform:rotateY(180deg)] [backface-visibility:hidden] flex flex-col justify-center px-10">
              <Layers3 size={55} className="mb-6 text-cyan-100" />
              <h2 className="text-4xl font-black">Future Ready Innovation</h2>
              <p className="text-cyan-100 text-lg leading-relaxed mt-6">
                Our vision is to become a globally trusted technology partner,
                delivering next-generation digital solutions that redefine user
                experiences, accelerate business growth, and set new standards in
                innovation and design excellence.
              </p>
            </div>
          </div>
        </motion.div>

        {/* MISSION CARD */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="group h-[420px]"
        >
          <div className="relative w-full h-full duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">

            {/* FRONT */}
            <div className="absolute inset-0 [backface-visibility:hidden] overflow-hidden rounded-lg shadow-2xl">
              <img src={mission} alt="Mission" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-8 left-8">
                <p className="text-cyan-300 uppercase tracking-[4px] text-sm font-semibold mb-3">
                  Digital Excellence
                </p>
                <h2 className="text-5xl font-black text-white leading-tight">Our Mission</h2>
              </div>
            </div>

            {/* BACK */}
            <div className="absolute inset-0 rounded-[18px] overflow-hidden shadow-2xl bg-gradient-to-br from-black via-cyan-900 to-cyan-700 text-white [transform:rotateY(180deg)] [backface-visibility:hidden] flex flex-col justify-center px-10">
              <Rocket size={55} className="mb-6 text-cyan-200" />
              <h2 className="text-4xl font-black">Building Digital Excellence</h2>
              <p className="text-cyan-100 text-lg leading-relaxed mt-6">
                Our mission is to empower startups and enterprises with
                high-performance, scalable and secure digital solutions. We focus on
                delivering impactful products that combine modern UI/UX, clean
                architecture and long-term business value.
              </p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default MissionVisionSection;

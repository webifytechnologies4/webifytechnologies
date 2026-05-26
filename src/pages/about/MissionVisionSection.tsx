import { motion } from "framer-motion";
import { Layers3, Rocket } from "lucide-react";
import vission from "../../assets/vission.jpeg";
import mission from "../../assets/mission.jpeg";

const MissionVisionSection = () => {
  return (
    <section className="px-4 sm:px-6 md:px-0 max-w-7xl mx-auto py-10 md:py-6 bg-gray-50 overflow-hidden">

      {/* HEADING */}
      <div className="text-center mb-10 md:mb-14">

        <p className="text-cyan-500 uppercase tracking-[3px] md:tracking-[5px] font-semibold mb-3 md:mb-4 text-xs sm:text-sm">
          The Foundation
        </p>

        <h2 className="text-3xl sm:text-4xl md:text-6xl font-black leading-[1.15] text-gray-900">
          What Drives
          <span className="text-cyan-500"> Webify</span>
        </h2>

        <p className="text-gray-700 max-w-4xl mx-auto mt-5 md:mt-6 leading-relaxed text-sm sm:text-base md:text-lg px-2">
          At Webify Technologies, we build innovative and scalable digital
          solutions that help modern businesses grow, perform better,
          and succeed online.
        </p>
      </div>

      {/* CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 perspective-[2000px]">

        {/* ========================= */}
        {/* VISION CARD */}
        {/* ========================= */}

        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="group"
        >

          {/* DESKTOP FLIP CARD */}
          <div className="hidden md:block h-[420px]">

            <div className="relative w-full h-full duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">

              {/* FRONT */}
              <div className="absolute inset-0 [backface-visibility:hidden] overflow-hidden rounded-lg shadow-2xl">

                <img
                  src={vission}
                  alt="Vision"
                  className="w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                <div className="absolute bottom-8 left-8">
                  <p className="text-cyan-300 uppercase tracking-[4px] text-sm font-semibold mb-3">
                    Future Innovation
                  </p>

                  <h2 className="text-5xl font-black text-white leading-tight">
                    Our Vision
                  </h2>
                </div>
              </div>

              {/* BACK */}
              <div className="absolute inset-0 rounded-[18px] overflow-hidden shadow-2xl bg-gradient-to-br from-cyan-500 via-cyan-600 to-blue-700 text-white [transform:rotateY(180deg)] [backface-visibility:hidden] flex flex-col justify-center px-10">

                <Layers3 size={55} className="mb-6 text-cyan-100" />

                <h2 className="text-4xl font-black">
                  Future Ready Innovation
                </h2>

                <p className="text-cyan-100 text-lg leading-relaxed mt-6">
                  Our vision is to become a globally trusted technology
                  partner, delivering next-generation digital solutions
                  that redefine user experiences, accelerate business
                  growth, and set new standards in innovation and
                  design excellence.
                </p>
              </div>
            </div>
          </div>

          {/* MOBILE CARD */}
          <div className="md:hidden rounded-3xl overflow-hidden shadow-2xl bg-white">

            {/* IMAGE */}
            <div className="relative h-[250px] sm:h-[280px]">

              <img
                src={vission}
                alt="Vision"
                className="w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              <div className="absolute bottom-5 left-5">
                <p className="text-cyan-300 uppercase tracking-[3px] text-[11px] font-semibold mb-2">
                  Future Innovation
                </p>

                <h2 className="text-3xl font-black text-white">
                  Our Vision
                </h2>
              </div>
            </div>

            {/* CONTENT */}
            <div className="bg-gradient-to-br from-cyan-500 via-cyan-600 to-blue-700 text-white p-6">

              <Layers3 size={40} className="mb-4 text-cyan-100" />

              <h2 className="text-2xl font-black">
                Future Ready Innovation
              </h2>

              <p className="text-cyan-100 text-sm leading-relaxed mt-4">
                Our vision is to become a globally trusted technology
                partner, delivering next-generation digital solutions
                that redefine user experiences, accelerate business
                growth, and set new standards in innovation and
                design excellence.
              </p>
            </div>
          </div>
        </motion.div>

        {/* ========================= */}
        {/* MISSION CARD */}
        {/* ========================= */}

        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="group"
        >

          {/* DESKTOP FLIP CARD */}
          <div className="hidden md:block h-[420px]">

            <div className="relative w-full h-full duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">

              {/* FRONT */}
              <div className="absolute inset-0 [backface-visibility:hidden] overflow-hidden rounded-lg shadow-2xl">

                <img
                  src={mission}
                  alt="Mission"
                  className="w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                <div className="absolute bottom-8 left-8">
                  <p className="text-cyan-300 uppercase tracking-[4px] text-sm font-semibold mb-3">
                    Digital Excellence
                  </p>

                  <h2 className="text-5xl font-black text-white leading-tight">
                    Our Mission
                  </h2>
                </div>
              </div>

              {/* BACK */}
              <div className="absolute inset-0 rounded-[18px] overflow-hidden shadow-2xl bg-gradient-to-br from-black via-cyan-900 to-cyan-700 text-white [transform:rotateY(180deg)] [backface-visibility:hidden] flex flex-col justify-center px-10">

                <Rocket size={55} className="mb-6 text-cyan-200" />

                <h2 className="text-4xl font-black">
                  Building Digital Excellence
                </h2>

                <p className="text-cyan-100 text-lg leading-relaxed mt-6">
                  Our mission is to empower startups and enterprises
                  with high-performance, scalable and secure digital
                  solutions. We focus on delivering impactful products
                  that combine modern UI/UX, clean architecture and
                  long-term business value.
                </p>
              </div>
            </div>
          </div>

          {/* MOBILE CARD */}
          <div className="md:hidden rounded-3xl overflow-hidden shadow-2xl bg-white">

            {/* IMAGE */}
            <div className="relative h-[250px] sm:h-[280px]">

              <img
                src={mission}
                alt="Mission"
                className="w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              <div className="absolute bottom-5 left-5">
                <p className="text-cyan-300 uppercase tracking-[3px] text-[11px] font-semibold mb-2">
                  Digital Excellence
                </p>

                <h2 className="text-3xl font-black text-white">
                  Our Mission
                </h2>
              </div>
            </div>

            {/* CONTENT */}
            <div className="bg-gradient-to-br from-black via-cyan-900 to-cyan-700 text-white p-6">

              <Rocket size={40} className="mb-4 text-cyan-200" />

              <h2 className="text-2xl font-black">
                Building Digital Excellence
              </h2>

              <p className="text-cyan-100 text-sm leading-relaxed mt-4">
                Our mission is to empower startups and enterprises
                with high-performance, scalable and secure digital
                solutions. We focus on delivering impactful products
                that combine modern UI/UX, clean architecture and
                long-term business value.
              </p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default MissionVisionSection;

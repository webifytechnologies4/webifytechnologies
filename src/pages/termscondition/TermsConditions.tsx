import { motion } from "framer-motion";
import {
  ShieldCheck,
  FileText,
  Lock,
  BadgeCheck,
  Globe,
  Mail,
  Sparkles,
} from "lucide-react";

import Navbar from "../../components/Navbar";

const termsData = [
  {
    icon: <BadgeCheck size={22} />,
    title: "Acceptance of Terms",
    desc: "By accessing or using Webify Technologies services, you agree to comply with these Terms & Conditions and all applicable policies.",
  },
  {
    icon: <Globe size={22} />,
    title: "Digital Services",
    desc: "We provide modern web development, mobile app development, branding, UI/UX, and software solutions tailored for businesses.",
  },
  {
    icon: <FileText size={22} />,
    title: "Projects & Payments",
    desc: "Project execution begins after approval of scope, timeline, and payment milestones agreed between both parties.",
  },
  {
    icon: <ShieldCheck size={22} />,
    title: "Intellectual Property",
    desc: "All source code, designs, assets, and deliverables remain company property until full payment completion.",
  },
  {
    icon: <Lock size={22} />,
    title: "Client Responsibility",
    desc: "Clients are responsible for providing correct details, timely approvals, and required content for project completion.",
  },
  {
    icon: <ShieldCheck size={22} />,
    title: "Liability Limitation",
    desc: "Webify Technologies is not liable for indirect damages, third-party failures, hosting issues, or unexpected downtime.",
  },
];

const TermsConditions = () => {
  return (
    <>
      <Navbar />
      <section className="relative overflow-hidden bg-[#f8fbff] pt-28 sm:pt-32 lg:pt-40 pb-16 sm:pb-24">

        {/* Premium Background */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,#cffafe,transparent_28%),radial-gradient(circle_at_bottom_right,#dbeafe,transparent_30%)]" />

        <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(circle,#000_1px,transparent_1px)] bg-[size:24px_24px]" />

        {/* Glow */}
        <div className="absolute top-0 left-0 w-[280px] sm:w-[450px] h-[280px] sm:h-[450px] bg-cyan-300/30 blur-[120px] rounded-full" />

        <div className="absolute bottom-0 right-0 w-[250px] sm:w-[400px] h-[250px] sm:h-[400px] bg-blue-300/30 blur-[120px] rounded-full" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">

          {/* HERO */}
          <motion.div
            initial={{ opacity: 0, y: 45 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center max-w-5xl mx-auto"
          >

            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-200 bg-white/80 backdrop-blur-xl shadow-lg mb-6">
              <Sparkles className="text-cyan-600" size={16} />

              <span className="text-[11px] sm:text-xs font-semibold tracking-[3px] uppercase text-cyan-700">
                Webify Technologies
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.05] text-gray-900">
              Terms &{" "}
              <span className="bg-gradient-to-r from-cyan-500 via-blue-500 to-cyan-500 bg-clip-text text-transparent">
                Conditions
              </span>
            </h1>

            {/* Subtitle */}
            <p className="mt-6 text-gray-500 text-sm sm:text-base lg:text-lg leading-relaxed max-w-3xl mx-auto px-2">
              These Terms & Conditions outline the rules, responsibilities,
              and agreements governing the use of Webify Technologies services.
            </p>

            {/* Last Updated */}
            <div className="mt-7 inline-flex items-center gap-2 text-sm text-gray-500">
              <div className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />

              Last updated: January 2026
            </div>
          </motion.div>

          {/* MAIN CONTAINER */}
          <motion.div
            initial={{ opacity: 0, y: 55 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative mt-12 sm:mt-16 rounded-[28px] sm:rounded-[38px] border border-white/60 bg-white/70 backdrop-blur-2xl shadow-[0_30px_80px_rgba(15,23,42,0.08)] overflow-hidden"
          >

            {/* Border Glow */}
            <div className="absolute inset-0 rounded-[38px] border border-cyan-100 pointer-events-none" />

            <div className="p-5 sm:p-8 lg:p-14">

              {/* GRID */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-7">

                {termsData.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 35 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.08 }}
                    className="group relative overflow-hidden rounded-3xl border border-gray-200/70 bg-white/80 backdrop-blur-xl p-6 sm:p-7 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(34,211,238,0.14)]"
                  >

                    {/* Hover Gradient */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-cyan-50 via-transparent to-blue-50" />

                    {/* Top Glow Line */}
                    <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400 opacity-0 group-hover:opacity-100 transition duration-500" />

                    <div className="relative">

                      {/* Icon */}
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-100 to-blue-100 border border-cyan-200 flex items-center justify-center text-cyan-700 shadow-sm mb-5">
                        {item.icon}
                      </div>

                      {/* Title */}
                      <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
                        {item.title}
                      </h3>

                      {/* Description */}
                      <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}

              </div>

              {/* CONTACT CARD */}
              <motion.div
                initial={{ opacity: 0, y: 35 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="relative overflow-hidden mt-8 sm:mt-10 rounded-[30px] border border-cyan-200 bg-gradient-to-r from-cyan-50 via-white to-blue-50 p-6 sm:p-8 lg:p-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6"
              >

                {/* Background Glow */}
                <div className="absolute right-0 top-0 w-[200px] h-[200px] bg-cyan-200/30 blur-3xl rounded-full" />

                <div className="relative">
                  <h3 className="text-2xl sm:text-3xl font-black text-gray-900">
                    Need More Information?
                  </h3>

                  <p className="text-gray-600 mt-3 text-sm sm:text-base leading-relaxed max-w-2xl">
                    Contact Webify Technologies for questions regarding our
                    policies, agreements, and project-related terms.
                  </p>
                </div>

                {/* Button */}
                <div className="relative z-50 w-full lg:w-auto">
                  <a
                    href="mailto:webifytechnologies4@gmail.com"
                    className="inline-flex w-full lg:w-auto items-center justify-center gap-3 px-5 sm:px-7 py-4 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold text-xs sm:text-sm lg:text-base transition-all duration-300 hover:scale-[1.03] active:scale-95 shadow-[0_15px_40px_rgba(34,211,238,0.25)] whitespace-nowrap cursor-pointer"
                  >
                    <Mail size={18} className="min-w-[18px]" />

                    <span>
                      webifytechnologies4@gmail.com
                    </span>
                  </a>
                </div>
              </motion.div>

            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default TermsConditions;
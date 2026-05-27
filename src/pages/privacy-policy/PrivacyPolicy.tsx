import { motion } from "framer-motion";
import {
  Shield,
  Lock,
  Database,
  Globe,
  Eye,
  Mail,
} from "lucide-react";

import Navbar from "../../components/Navbar";

const privacyData = [
  {
    icon: <Database size={22} />,
    title: "Information We Collect",
    desc: "We may collect your name, email address, phone number, company details, and project-related information when you contact us or use our services.",
  },
  {
    icon: <Shield size={22} />,
    title: "How We Use Information",
    desc: "Collected information is used to communicate with clients, provide services, improve user experience, and manage projects efficiently.",
  },
  {
    icon: <Lock size={22} />,
    title: "Data Protection",
    desc: "We implement strong security measures and best practices to protect your personal information from unauthorized access or misuse.",
  },
  {
    icon: <Globe size={22} />,
    title: "Third-Party Services",
    desc: "Trusted third-party services such as hosting, analytics, and communication platforms may be used to improve our services securely.",
  },
  {
    icon: <Eye size={22} />,
    title: "Your Rights",
    desc: "You may request access, correction, or deletion of your personal information anytime by contacting Webify Technologies.",
  },
];

const PrivacyPolicy = () => {
  return (
    <>
      <Navbar />

      <section className="relative overflow-hidden bg-white pt-28 sm:pt-32 lg:pt-36 pb-16 sm:pb-20 lg:pb-28">

        {/* Background Glow */}
        <div className="absolute top-0 left-0 w-[220px] sm:w-[320px] h-[220px] sm:h-[320px] bg-cyan-100 blur-3xl opacity-60 rounded-full" />

        <div className="absolute bottom-0 right-0 w-[220px] sm:w-[320px] h-[220px] sm:h-[320px] bg-blue-100 blur-3xl opacity-60 rounded-full" />

        <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(circle_at_center,#000_1px,transparent_1px)] bg-[size:22px_22px]" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">

          {/* HERO */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center max-w-4xl mx-auto"
          >

            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full border border-cyan-200 bg-cyan-50 mb-5 sm:mb-6">
              <Shield className="text-cyan-600" size={15} />

              <span className="text-[10px] sm:text-xs tracking-[2px] sm:tracking-[3px] uppercase text-cyan-700 font-semibold">
                Webify Technologies
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-gray-900 tracking-tight leading-tight">
              Privacy <span className="text-cyan-600">Policy</span>
            </h1>

            <p className="mt-5 sm:mt-6 text-gray-500 text-sm sm:text-base lg:text-lg leading-relaxed max-w-3xl mx-auto px-2">
              Your privacy matters to us. This Privacy Policy explains how
              Webify Technologies collects, uses, and protects your personal
              information.
            </p>

            <div className="mt-6 sm:mt-8 inline-flex items-center gap-2 text-xs sm:text-sm text-gray-500">
              <div className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />

              Last updated: January 2026
            </div>
          </motion.div>

          {/* MAIN CARD */}
          <motion.div
            initial={{ opacity: 0, y: 45 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative mt-10 sm:mt-16 rounded-[24px] sm:rounded-[32px] border border-gray-200 bg-white shadow-[0_25px_80px_rgba(0,0,0,0.06)] overflow-hidden"
          >

            <div className="p-4 sm:p-8 lg:p-14">

              {/* GRID */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">

                {privacyData.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 35 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.08 }}
                    className="group relative overflow-hidden rounded-2xl sm:rounded-3xl border border-gray-200 bg-gradient-to-br from-white to-cyan-50/40 p-5 sm:p-6 transition-all duration-500 hover:-translate-y-1 sm:hover:-translate-y-2 hover:shadow-[0_15px_45px_rgba(34,211,238,0.12)]"
                  >

                    {/* Hover Glow */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-cyan-100/40 to-blue-100/30" />

                    <div className="relative">

                      <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-cyan-100 border border-cyan-200 flex items-center justify-center text-cyan-600 mb-4 sm:mb-5">
                        {item.icon}
                      </div>

                      <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">
                        {item.title}
                      </h3>

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
                className="mt-8 sm:mt-10 rounded-2xl sm:rounded-3xl border border-cyan-200 bg-gradient-to-r from-cyan-50 to-blue-50 p-5 sm:p-7 lg:p-8 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5 sm:gap-6"
              >

                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                    Questions About Privacy?
                  </h3>

                  <p className="text-gray-600 mt-2 text-sm sm:text-base leading-relaxed">
                    Contact Webify Technologies for any privacy or data-related
                    concerns regarding our services.
                  </p>
                </div>

                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=webifytechnologies4@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center gap-3 px-5 sm:px-6 py-3.5 sm:py-4 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold text-sm sm:text-base hover:scale-[1.02] active:scale-95 transition-all duration-300 shadow-[0_15px_40px_rgba(34,211,238,0.25)] break-all text-center cursor-pointer"
                >
                  <Mail size={18} />

                  webifytechnologies4@gmail.com
                </a>
              </motion.div>

            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default PrivacyPolicy;
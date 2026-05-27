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
import Footer from "../../components/Footer";
import SEO from "../../components/SEO";

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
      <SEO 
        title="Privacy Policy | Webify Technologies" 
        description="Read the Privacy Policy of Webify Technologies to understand how we collect, use, protect, and handle your personal data and information."
        keywords="privacy policy, data protection, client information security, Webify policies"
      />
      <div className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-gray-200">
        <Navbar />
      </div>

      <main className="bg-brand-white text-gray-900 overflow-x-hidden w-full">
        <section className="relative overflow-hidden py-8 md:py-16">

          {/* Background Glow */}
          <div className="absolute top-0 left-0 w-[220px] sm:w-[320px] h-[220px] sm:h-[320px] bg-brand-cyan/10 blur-3xl opacity-60 rounded-full" />

          <div className="absolute bottom-0 right-0 w-[220px] sm:w-[320px] h-[220px] sm:h-[320px] bg-brand-blue/10 blur-3xl opacity-60 rounded-full" />

          <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(circle_at_center,#000_1px,transparent_1px)] bg-[size:22px_22px]" />

          <div className="relative max-w-7xl mx-auto px-4 md:px-8 lg:px-16">

            {/* HERO */}
            <motion.div
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-center max-w-4xl mx-auto"
            >

              <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full border border-brand-cyan/20 bg-brand-light mb-5 sm:mb-6">
                <Shield className="text-brand-blue" size={15} />

                <span className="text-[10px] sm:text-xs tracking-[2px] sm:tracking-[3px] uppercase text-brand-blue font-semibold">
                  Webify Technologies
                </span>
              </div>

              <h1 className="text-4xl md:text-6xl font-bold text-brand-darkBlue tracking-tight leading-tight">
                Privacy <span className="text-brand-cyan">Policy</span>
              </h1>

              <p className="mt-5 sm:mt-6 text-gray-600 text-sm md:text-lg leading-relaxed max-w-3xl mx-auto px-2">
                Your privacy matters to us. This Privacy Policy explains how
                Webify Technologies collects, uses, and protects your personal
                information.
              </p>

              <div className="mt-6 sm:mt-8 inline-flex items-center gap-2 text-xs sm:text-sm text-gray-600">
                <div className="w-2 h-2 rounded-full bg-brand-cyan animate-pulse" />

                Last updated: January 2026
              </div>
            </motion.div>

            {/* MAIN CARD */}
            <motion.div
              initial={{ opacity: 0, y: 45 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="relative mt-10 sm:mt-16 rounded-[24px] sm:rounded-[32px] border border-brand-cyan/10 bg-white shadow-lg shadow-brand-blue/5 overflow-hidden"
            >

              <div className="p-6 md:p-10 lg:p-12">

                {/* GRID */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">

                  {privacyData.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 35 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.08 }}
                      className="group relative overflow-hidden rounded-2xl sm:rounded-3xl border border-brand-cyan/10 bg-gradient-to-br from-white to-brand-light/20 p-5 sm:p-6 transition-all duration-500 hover:-translate-y-1 sm:hover:-translate-y-2 hover:border-brand-cyan/35 hover:shadow-lg shadow-brand-cyan/5"
                    >

                      {/* Hover Glow */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-brand-cyan/5 to-brand-blue/5" />

                      <div className="relative">

                        <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-brand-light border border-brand-cyan/15 flex items-center justify-center text-brand-blue mb-4 sm:mb-5">
                          {item.icon}
                        </div>

                        <h3 className="text-xl font-bold text-brand-darkBlue mb-2 sm:mb-3 group-hover:text-brand-cyan transition-colors duration-300">
                          {item.title}
                        </h3>

                        <p className="text-gray-600 text-sm md:text-base leading-relaxed">
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
                  className="mt-8 sm:mt-10 rounded-2xl sm:rounded-3xl border border-brand-cyan/20 bg-gradient-to-r from-brand-light to-white p-5 sm:p-7 lg:p-8 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5 sm:gap-6"
                >

                  <div>
                    <h3 className="text-2xl font-bold text-brand-darkBlue">
                      Questions About Privacy?
                    </h3>

                    <p className="text-gray-600 mt-2 text-sm md:text-base leading-relaxed">
                      Contact Webify Technologies for any privacy or data-related
                      concerns regarding our services.
                    </p>
                  </div>

                  <a
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=webifytechnologies4@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center justify-center gap-3 px-5 sm:px-6 py-3.5 sm:py-4 rounded-2xl bg-gradient-to-r from-brand-blue to-brand-cyan text-white font-semibold text-sm sm:text-base hover:scale-[1.02] active:scale-95 transition-all duration-300 shadow-md shadow-brand-blue/15 break-all text-center cursor-pointer min-h-[48px] border-none"
                  >
                    <Mail size={18} />

                    webifytechnologies4@gmail.com
                  </a>
                </motion.div>

              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default PrivacyPolicy;
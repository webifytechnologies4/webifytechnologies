import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import Navbar from "../components/Navbar";

/* TYPEWRITER */
const Typewriter = ({ text }: { text: string }) => {
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayText(text.slice(0, i));
      i++;
      if (i > text.length) clearInterval(interval);
    }, 120);

    return () => clearInterval(interval);
  }, [text]);

  return (
    <h1 className="text-4xl md:text-6xl font-black tracking-tight text-gray-900">
      {displayText}
      <span className="animate-pulse">|</span>
    </h1>
  );
};

const Contact = () => {
  return (
    <div className="bg-white text-black min-h-screen">

      {/* NAVBAR */}
      <div className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-gray-200">
        <Navbar />
      </div>

      {/* HERO */}
      <section className="relative h-[70vh] flex items-center justify-center text-center overflow-hidden">

        <motion.img
          src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=2000&q=80"
          className="absolute inset-0 w-full h-full object-cover scale-105"
          animate={{ scale: [1, 1.08] }}
          transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
        />

        <div className="absolute inset-0 bg-white/70 backdrop-blur-sm" />

        <div className="relative z-10 px-6">
          <Typewriter text="Contact Us" />

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="text-gray-600 mt-6 max-w-2xl mx-auto text-lg"
          >
            Let’s discuss your project and build something meaningful together.
          </motion.p>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="px-6 md:px-20 py-24 bg-gradient-to-b from-gray-50 to-white grid md:grid-cols-[1.6fr_1fr] gap-14">

        {/* LEFT FORM (WIDER) */}
        {/* LEFT FORM (UPDATED FIELDS) */}
        <div className="bg-white border border-gray-200 rounded-3xl p-10 shadow-sm hover:shadow-xl transition-all duration-300 w-full">

          <p className="text-xs tracking-[3px] text-gray-500 uppercase">
            Webify Technologies
          </p>

          <h2 className="text-4xl font-black mt-3 mb-2 text-gray-900">
            Let’s Build Something Great
          </h2>

          <p className="text-gray-500 mb-8">
            Share your details and our team will get back to you shortly.
          </p>

          <div className="grid grid-cols-2 gap-5">

            {/* FULL NAME */}
            <input
              className="p-4 border border-gray-200 rounded-xl focus:border-black outline-none"
              placeholder="Full Name"
            />

            {/* PHONE NUMBER */}
            <input
              className="p-4 border border-gray-200 rounded-xl focus:border-black outline-none"
              placeholder="Phone Number"
              type="tel"
            />

            {/* EMAIL */}
            <input
              className="p-4 border border-gray-200 rounded-xl focus:border-black outline-none col-span-2"
              placeholder="Email Address"
              type="email"
            />

            {/* COMPANY */}
            <input
              className="p-4 border border-gray-200 rounded-xl focus:border-black outline-none col-span-2"
              placeholder="Company Name"
            />

            {/* SERVICE SELECT */}
            <select className="p-4 border border-gray-200 rounded-xl">
              <option>Select Service</option>
              <option>Web Development</option>
              <option>Mobile App Development</option>
              <option>UI/UX Design</option>
              <option>SEO & Marketing</option>
            </select>

            {/* COUNTRY SELECT */}
            <select className="p-4 border border-gray-200 rounded-xl">
              <option>India</option>
              <option>United States</option>
              <option>United Kingdom</option>
              <option>Canada</option>
              <option>Australia</option>
              <option>Other</option>
            </select>

          </div>

          {/* MESSAGE */}
          <textarea
            rows={5}
            className="w-full mt-5 p-4 border border-gray-200 rounded-xl focus:border-black outline-none"
            placeholder="Tell us about your project..."
          />

          {/* BUTTON */}
          <div className="flex items-center justify-between mt-8">

            <p className="text-xs text-gray-500 max-w-xs">
              Your information is secure and only used for project discussion.
            </p>

            <button className="bg-black text-white px-8 py-4 rounded-xl hover:scale-[1.02] transition">
              Send Message →
            </button>

          </div>

        </div>

        {/* RIGHT SIDE (SMALLER) */}
        <div className="space-y-6 md:sticky md:top-28">

          {/* CALL */}
          <div className="group relative p-[1px] rounded-2xl bg-gradient-to-r from-sky-200 via-blue-200 to-indigo-200">

            <div className="bg-white rounded-2xl p-6 hover:-translate-y-1 hover:shadow-xl transition">

              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-sky-50">
                <Phone className="text-sky-600" size={22} />
              </div>

              <p className="text-xs text-sky-500 mt-4 uppercase tracking-wider">
                Call Us
              </p>

              <h3 className="text-lg font-bold mt-1 text-gray-900">
                Talk to Webify Experts
              </h3>

              <p className="text-gray-600 mt-1">
                +91 xxxxxxxxxx
              </p>

            </div>
          </div>

          {/* EMAIL */}
          <div className="group relative p-[1px] rounded-2xl bg-gradient-to-r from-sky-200 via-blue-200 to-indigo-200">

            <div className="bg-white rounded-2xl p-6 hover:-translate-y-1 hover:shadow-xl transition">

              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-sky-50">
                <Mail className="text-sky-600" size={22} />
              </div>

              <p className="text-xs text-sky-500 mt-4 uppercase tracking-wider">
                Email Us
              </p>

              <h3 className="text-lg font-bold mt-1 text-gray-900">
                Get a Free Consultation
              </h3>

              <p className="text-gray-600">webifytechnologies4@gmail.com</p>

            </div>
          </div>

          {/* OFFICE */}
          <div className="group relative p-[1px] rounded-2xl bg-gradient-to-r from-sky-200 via-blue-200 to-indigo-200">

            <div className="bg-white rounded-2xl p-6 hover:-translate-y-1 hover:shadow-xl transition">

              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-sky-50">
                <MapPin className="text-sky-600" size={22} />
              </div>

              <p className="text-xs text-sky-500 mt-4 uppercase tracking-wider">
                Location
              </p>

              <h3 className="text-lg font-bold mt-1 text-gray-900">
                Webify Technologies
              </h3>

              <p className="text-gray-600 text-sm mt-1">
                Ahmedabad, Gujarat, India<br />
                Remote & Global Support Available
              </p>

            </div>
          </div>

        </div>

      </section>
    </div>
  );
};

export default Contact;
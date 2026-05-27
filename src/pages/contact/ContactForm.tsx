import { Phone, Mail, MapPin } from "lucide-react";

const ContactForm = () => {
  return (
    <section className="px-4 md:px-8 lg:px-16 py-8 md:py-16 bg-brand-white grid grid-cols-1 md:grid-cols-[1.6fr_1fr] gap-8 md:gap-14 max-w-7xl mx-auto" id="contact-section">

      {/* LEFT FORM */}
      <div className="bg-white p-4 sm:p-6 md:p-10 w-full rounded-3xl border border-brand-cyan/10 shadow-lg shadow-brand-blue/5">

        <p className="text-[11px] sm:text-xs tracking-[2px] sm:tracking-[3px] text-gray-600 uppercase font-semibold">
          Webify Technologies
        </p>

        <h2 className="text-3xl md:text-5xl font-bold mt-3 mb-3 text-brand-darkBlue leading-tight">
          Let's Build Something Great
        </h2>

        <p className="text-sm md:text-base text-gray-600 mb-6 md:mb-8 leading-relaxed">
          Share your details and our team will get back to you shortly.
        </p>

        {/* FORM GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-5">

          <input
            className="w-full h-12 px-4 border border-gray-200 rounded-xl focus:border-brand-blue focus:ring-1 focus:ring-brand-blue outline-none transition text-sm sm:text-base"
            placeholder="Full Name"
          />

          <input
            className="w-full h-12 px-4 border border-gray-200 rounded-xl focus:border-brand-blue focus:ring-1 focus:ring-brand-blue outline-none transition text-sm sm:text-base"
            placeholder="Phone Number"
            type="tel"
          />

          <input
            className="w-full h-12 px-4 border border-gray-200 rounded-xl focus:border-brand-blue focus:ring-1 focus:ring-brand-blue outline-none transition sm:col-span-2 text-sm sm:text-base"
            placeholder="Email Address"
            type="email"
          />

          <input
            className="w-full h-12 px-4 border border-gray-200 rounded-xl focus:border-brand-blue focus:ring-1 focus:ring-brand-blue outline-none transition sm:col-span-2 text-sm sm:text-base"
            placeholder="Company Name"
          />

          <select className="w-full h-12 px-4 border border-gray-200 rounded-xl focus:border-brand-blue focus:ring-1 focus:ring-brand-blue outline-none transition text-sm sm:text-base bg-white">
            <option>Select Service</option>
            <option>Web Development</option>
            <option>Mobile App Development</option>
            <option>UI/UX Design</option>
            <option>SEO & Marketing</option>
          </select>

          <select className="w-full h-12 px-4 border border-gray-200 rounded-xl focus:border-brand-blue focus:ring-1 focus:ring-brand-blue outline-none transition text-sm sm:text-base bg-white">
            <option>India</option>
            <option>United States</option>
            <option>United Kingdom</option>
            <option>Canada</option>
            <option>Australia</option>
            <option>Other</option>
          </select>
        </div>

        {/* TEXTAREA */}
        <textarea
          rows={5}
          className="w-full mt-4 sm:mt-5 p-4 border border-gray-200 rounded-xl focus:border-brand-blue focus:ring-1 focus:ring-brand-blue outline-none transition resize-none text-sm sm:text-base"
          placeholder="Tell us about your project..."
        />

        {/* FOOTER */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5 mt-6 md:mt-8">

          <p className="text-xs text-gray-500 leading-relaxed max-w-full md:max-w-xs">
            Your information is secure and only used for project discussion.
          </p>

          <button className="bg-gradient-to-r from-brand-blue to-brand-cyan hover:scale-[1.02] active:scale-[0.98] text-white px-6 md:px-8 py-4 rounded-xl w-full md:w-auto transition text-sm sm:text-base font-medium min-h-[48px] flex items-center justify-center border-none shadow-md shadow-brand-blue/15">
            Send Message →
          </button>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="space-y-5 md:space-y-6 md:sticky md:top-28 h-fit">

        {/* CALL */}
        <div className="group relative p-[1px] rounded-2xl bg-gradient-to-r from-brand-blue/30 via-brand-cyan/20 to-brand-blue/30">
          <div className="bg-white rounded-2xl p-5 sm:p-6 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 border border-brand-cyan/5">

            <div className="w-11 h-11 sm:w-12 sm:h-12 flex items-center justify-center rounded-xl bg-brand-light">
              <Phone className="text-brand-blue" size={20} />
            </div>

            <p className="text-[11px] sm:text-xs text-brand-blue mt-4 uppercase tracking-wider font-bold">
              Call Us
            </p>

            <h3 className="text-lg font-bold mt-1 text-brand-darkBlue">
              Talk to Webify Experts
            </h3>

            <p className="text-sm md:text-base text-gray-600 mt-1">
              +91 9723223010
            </p>
          </div>
        </div>

        {/* EMAIL */}
        <div className="group relative p-[1px] rounded-2xl bg-gradient-to-r from-brand-blue/30 via-brand-cyan/20 to-brand-blue/30">
          <div className="bg-white rounded-2xl p-5 sm:p-6 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 border border-brand-cyan/5">

            <div className="w-11 h-11 sm:w-12 sm:h-12 flex items-center justify-center rounded-xl bg-brand-light">
              <Mail className="text-brand-blue" size={20} />
            </div>

            <p className="text-[11px] sm:text-xs text-brand-blue mt-4 uppercase tracking-wider font-bold">
              Email Us
            </p>

            <h3 className="text-lg font-bold mt-1 text-brand-darkBlue">
              Get a Free Consultation
            </h3>

            <p className="text-sm md:text-base text-gray-600 break-all mt-1">
              webifytechnologies4@gmail.com
            </p>
          </div>
        </div>

        {/* OFFICE */}
        <div className="group relative p-[1px] rounded-2xl bg-gradient-to-r from-brand-blue/30 via-brand-cyan/20 to-brand-blue/30">
          <div className="bg-white rounded-2xl p-5 sm:p-6 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 border border-brand-cyan/5">

            <div className="w-11 h-11 sm:w-12 sm:h-12 flex items-center justify-center rounded-xl bg-brand-light">
              <MapPin className="text-brand-blue" size={20} />
            </div>

            <p className="text-[11px] sm:text-xs text-brand-blue mt-4 uppercase tracking-wider font-bold">
              Location
            </p>

            <h3 className="text-lg font-bold mt-1 text-brand-darkBlue">
              Webify Technologies
            </h3>

            <p className="text-gray-600 text-sm md:text-base mt-1 leading-relaxed">
              Ahmedabad, Gujarat, India
              <br />
              Remote & Global Support Available
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ContactForm;

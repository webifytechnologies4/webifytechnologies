import { Phone, Mail, MapPin } from "lucide-react";

const ContactForm = () => {
  return (
    <section className="px-4 md:px-20 py-24 bg-white grid grid-cols-1 md:grid-cols-[1.6fr_1fr] gap-10 md:gap-14">

      {/* LEFT FORM */}
      <div className="bg-white  p-5 sm:p-10  transition-all duration-300 w-full">
        <p className="text-xs tracking-[3px] text-gray-500 uppercase">Webify Technologies</p>
        <h2 className="text-4xl font-black mt-3 mb-2 text-gray-900">Let's Build Something Great</h2>
        <p className="text-gray-500 mb-8">Share your details and our team will get back to you shortly.</p>

        <div className="grid grid-cols-2 gap-3 sm:gap-5">
          <input className="p-4 border border-gray-200 rounded-xl focus:border-blue-600 outline-none" placeholder="Full Name" />
          <input className="p-4 border border-gray-200 rounded-xl focus:border-blue-600 outline-none" placeholder="Phone Number" type="tel" />
          <input className="p-4 border border-gray-200 rounded-xl focus:border-blue-600 outline-none col-span-2" placeholder="Email Address" type="email" />
          <input className="p-4 border border-gray-200 rounded-xl focus:border-blue-600 outline-none col-span-2" placeholder="Company Name" />
          <select className="p-4 border border-gray-200 rounded-xl focus:border-blue-600 outline-none">
            <option>Select Service</option>
            <option>Web Development</option>
            <option>Mobile App Development</option>
            <option>UI/UX Design</option>
            <option>SEO & Marketing</option>
          </select>
          <select className="p-4 border border-gray-200 rounded-xl focus:border-blue-600 outline-none">
            <option>India</option>
            <option>United States</option>
            <option>United Kingdom</option>
            <option>Canada</option>
            <option>Australia</option>
            <option>Other</option>
          </select>
        </div>

        <textarea rows={5} className="w-full mt-5 p-4 border border-gray-200 rounded-xl focus:border-blue-600 outline-none" placeholder="Tell us about your project..." />

        <div className="flex items-center justify-between mt-8">
          <p className="text-xs text-gray-500 max-w-xs">Your information is secure and only used for project discussion.</p>
          <button className="bg-gradient-to-r from-blue-700 to-sky-500 hover:from-blue-600 hover:to-sky-400 text-white px-6 md:px-8 py-4 rounded-xl w-full md:w-auto hover:scale-[1.02] transition">
            Send Message →
          </button>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="space-y-6 md:sticky md:top-28">
        {/* Call */}
        <div className="group relative p-[1px] rounded-2xl bg-gradient-to-r from-blue-300 via-sky-300 to-blue-400">
          <div className="bg-white rounded-2xl p-6 hover:-translate-y-1 hover:shadow-xl transition">
            <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-blue-50">
              <Phone className="text-blue-700" size={22} />
            </div>
            <p className="text-xs text-blue-700 mt-4 uppercase tracking-wider">Call Us</p>
            <h3 className="text-lg font-bold mt-1 text-gray-900">Talk to Webify Experts</h3>
            <p className="text-gray-600 mt-1">+91 xxxxxxxxxx</p>
          </div>
        </div>

        {/* Email */}
        <div className="group relative p-[1px] rounded-2xl bg-gradient-to-r from-blue-300 via-sky-300 to-blue-400">
          <div className="bg-white rounded-2xl p-6 hover:-translate-y-1 hover:shadow-xl transition">
            <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-blue-50">
              <Mail className="text-blue-700" size={22} />
            </div>
            <p className="text-xs text-blue-700 mt-4 uppercase tracking-wider">Email Us</p>
            <h3 className="text-lg font-bold mt-1 text-gray-900">Get a Free Consultation</h3>
            <p className="text-gray-600">webifytechnologies4@gmail.com</p>
          </div>
        </div>

        {/* Office */}
        <div className="group relative p-[1px] rounded-2xl bg-gradient-to-r from-blue-300 via-sky-300 to-blue-400">
          <div className="bg-white rounded-2xl p-6 hover:-translate-y-1 hover:shadow-xl transition">
            <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-blue-50">
              <MapPin className="text-blue-700" size={22} />
            </div>
            <p className="text-xs text-blue-700 mt-4 uppercase tracking-wider">Location</p>
            <h3 className="text-lg font-bold mt-1 text-gray-900">Webify Technologies</h3>
            <p className="text-gray-600 text-sm mt-1">
              Ahmedabad, Gujarat, India<br />Remote & Global Support Available
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;

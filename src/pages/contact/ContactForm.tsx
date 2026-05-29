import { Phone, Mail, MapPin } from "lucide-react";
import { getNames } from "country-list";
import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import toast from "react-hot-toast";

const ContactForm = () => {
  const countries = getNames();
  const [openCountry, setOpenCountry] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState("");

  const [openService, setOpenService] = useState(false);
  const [selectedService, setSelectedService] = useState("");

  const [errors, setErrors] = useState({});

  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpenCountry(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const validateForm = (form) => {
    const newErrors = {};

    const name = form.name.value.trim();
    const phone = form.phone.value.trim();
    const email = form.email.value.trim();
    const company = form.company.value.trim();
    const message = form.message.value.trim();

    const phoneRegex = /^[0-9]{10}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // required fields
    if (!name) newErrors.name = "Name is required";

    if (!phone) {
      newErrors.phone = "Phone Number is required";
    } else if (!phoneRegex.test(phone)) {
      newErrors.phone = "Invalid phone number";
    }

    if (!email) {
      newErrors.email = "Email Id is required";
    } else if (!emailRegex.test(email)) {
      newErrors.email = "Invalid email address";
    }

    if (!company) newErrors.company = "Company Name is required";

    if (!selectedService) newErrors.service = "Service is required";

    if (!selectedCountry) newErrors.country = "Country is required";

    if (!message) newErrors.message = "Message is required";

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  //  FORM SUBMIT 
  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;

    if (!validateForm(form)) return;

    const data = new FormData(form);
    data.append("access_key", "c2bb12fc-b188-4b2f-a11b-42a3c4026e19");
    data.append("country", selectedCountry);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: data,
    });

    const result = await res.json();

    if (result.success) {
      toast.success("Message sent successfully!");

      form.reset();
      setSelectedCountry("");
      setSelectedService("");
    } else {
      toast.error("Something went wrong! Please try again.");
    }

  };

  return (
    <section className="px-4 md:px-8 lg:px-16 py-8 md:py-16 bg-brand-white grid grid-cols-1 md:grid-cols-[1.6fr_1fr] gap-8 md:gap-14 max-w-7xl mx-auto">

      {/* LEFT FORM */}
      <div className="bg-white p-4 sm:p-6 md:p-10 w-full rounded-3xl border border-brand-cyan/10 shadow-lg shadow-brand-blue/5">

        {/*  FORM WRAP */}
        <form onSubmit={handleSubmit}>

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

            <div className="flex flex-col">
              <input
                name="name"
                className="w-full h-12 px-4 border border-gray-200 rounded-xl"
                placeholder="Full Name"
              />

              {errors.name && (
                <p className="text-red-500 text-xs mt-1">{errors.name}</p>
              )}
            </div>

            <div className="flex flex-col">
              <input
                name="phone"
                className="w-full h-12 px-4 border border-gray-200 rounded-xl"
                placeholder="Phone Number"
                type="tel"
              />

              {errors.phone && (
                <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
              )}
            </div>

            <div className="flex flex-col sm:col-span-2">
              <input
                name="email"
                className="w-full h-12 px-4 border border-gray-200 rounded-xl"
                placeholder="Email Address"
                type="email"
              />

              {errors.email && (
                <p className="text-red-500 text-xs mt-1">{errors.email}</p>
              )}
            </div>

            <div className="flex flex-col sm:col-span-2">
              <input
                name="company"
                className="w-full h-12 px-4 border border-gray-200 rounded-xl"
                placeholder="Company Name"
              />

              {errors.company && (
                <p className="text-red-500 text-xs mt-1">{errors.company}</p>
              )}
            </div>

            {/* SERVICE */}
            <div className="relative flex flex-col">
              <div
                onClick={() => setOpenService(!openService)}
                className="w-full h-12 px-4 border border-gray-200 rounded-xl flex items-center justify-between cursor-pointer bg-white"
              >
                <span className={selectedService ? "text-black" : "text-gray-400"}>
                  {selectedService || "Select Service"}
                </span>

                <ChevronDown size={18} className="text-gray-500" />
              </div>

              {openService && (
                <div className="absolute top-full left-0 mt-2 w-full max-h-60 overflow-auto bg-white border border-gray-200 rounded-xl shadow-lg z-50">

                  {[
                    "Web Development",
                    "Software Development",
                    "Mobile App Development",
                    "UI/UX Design",
                    "Graphic Design",
                    "Video Editing",
                    "SEO & Marketing"
                  ].map((service, index) => (
                    <div
                      key={index}
                      onClick={() => {
                        setSelectedService(service);
                        setOpenService(false);
                      }}
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm text-black"
                    >
                      {service}
                    </div>
                  ))}

                </div>
              )}

              {/* ERROR  */}
              {errors.service && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.service}
                </p>
              )}
            </div>

            {/* COUNTRY */}
            <div className="relative flex flex-col" ref={dropdownRef}>
              <div
                onClick={() => setOpenCountry(!openCountry)}
                className="w-full h-12 px-4 border border-gray-200 rounded-xl flex items-center justify-between cursor-pointer bg-white"
              >
                <span className={selectedCountry ? "text-black" : "text-gray-400"}>
                  {selectedCountry || "Country"}
                </span>

                <ChevronDown size={18} className="text-gray-500" />
              </div>

              {openCountry && (
                <div className="absolute top-full left-0 mt-2 w-full max-h-60 overflow-auto bg-white border border-gray-200 rounded-xl shadow-lg z-50">

                  {countries.map((country, index) => (
                    <div
                      key={index}
                      onClick={() => {
                        setSelectedCountry(country);
                        setOpenCountry(false);
                      }}
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm"
                    >
                      {country}
                    </div>
                  ))}

                </div>
              )}

              {/* ERROR */}
              {errors.country && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.country}
                </p>
              )}
            </div>
          </div>

          {/* TEXTAREA */}
          <div className="flex flex-col">
            <textarea
              name="message"
              rows={5}
              className="w-full mt-4 sm:mt-5 p-4 border border-gray-200 rounded-xl"
              placeholder="Tell us about your project..."
            />

            {errors.message && (
              <p className="text-red-500 text-xs mt-1">
                {errors.message}
              </p>
            )}
          </div>

          {/* FOOTER */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5 mt-6 md:mt-8">

            <p className="text-xs text-gray-500">
              Your information is secure and only used for project discussion.
            </p>

            <button
              type="submit"
              className="bg-gradient-to-r from-brand-blue to-brand-cyan text-white px-6 md:px-8 py-4 rounded-xl w-full md:w-auto"
            >
              Send Message →
            </button>
          </div>

        </form>
      </div>

      {/* RIGHT SIDE (UNCHANGED) */}
      <div className="space-y-5 md:space-y-6 md:sticky md:top-28 h-fit">

        <div className="p-6 bg-white rounded-2xl border">
          <Phone className="text-brand-blue" />
          <p>Call Us</p>
          <h3>+91 9723223010</h3>
        </div>

        <div className="p-6 bg-white rounded-2xl border">
          <Mail className="text-brand-blue" />
          <p>Email Us</p>
          <h3>webifytechnologies4@gmail.com</h3>
        </div>

        <div className="p-6 bg-white rounded-2xl border">
          <MapPin className="text-brand-blue" />
          <p>Location</p>
          <h3>Ahmedabad, Gujarat, India</h3>
        </div>

      </div>
    </section>
  );
};

export default ContactForm;
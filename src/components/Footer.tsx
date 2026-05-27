import { useRef } from 'react'
import { Link } from 'react-router-dom'
import logoImg from "../assets/logo.webp";
import VariableProximity from '../components/VariableProximity'

const services = [
  'Website Development',
  'Software Development',
  'Mobile App Development',
  'UI/UX Design',
  'Graphic Design',
  'Video Editing'
]

const socials = [
  {
    label: 'LinkedIn', icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" /><circle cx="4" cy="4" r="2" /></svg>
    ), href: '#'
  },
  {
    label: 'Instagram', icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5" /><circle cx="12" cy="12" r="5" /><circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" /></svg>
    ), href: '#'
  },
  {
    label: 'Facebook', icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" /></svg>
    ), href: '#'
  },
  {
    label: 'YouTube',
    icon: (
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M23.5 6.2a3 3 0 00-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 00.5 6.2 31.8 31.8 0 000 12a31.8 31.8 0 00.5 5.8 3 3 0 002.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 002.1-2.1A31.8 31.8 0 0024 12a31.8 31.8 0 00-.5-5.8zM9.7 15.5v-7L16 12l-6.3 3.5z" />
      </svg>
    ),
    href: '#',
  },
]

export default function Footer() {
  const containerRef = useRef(null);

  return (
    <footer className="bg-black relative overflow-hidden border-t border-white/10 noise-overlay">
      {/* Big display text */}
      <div className="pt-12 px-8 text-center overflow-hidden no-splash">
        <div
          ref={containerRef}
          style={{ position: 'relative' }}
          className="font-display font-bold text-[clamp(2.5rem,8vw,7rem)] leading-none text-white/60 [text-stroke:1px_rgba(255,255,255,0.15)] tracking-tighter opacity-80 uppercase cursor-default no-splash"
        >
          <VariableProximity
            label="HELLO! WE'RE LISTENING"
            className="variable-proximity-demo"
            fromFontVariationSettings="'wght' 400, 'opsz' 9"
            toFontVariationSettings="'wght' 1000, 'opsz' 40"
            containerRef={containerRef}
            radius={100}
            falloff="linear"
          />
        </div>
      </div>

      {/* Main footer content */}
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 py-16">

        {/* Updated Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-[1.3fr_.8fr_.8fr_1fr] gap-x-5 lg:gap-x-8 gap-y-12 lg:pl-6">

          {/* Brand column */}
          <div className="col-span-2 lg:col-span-1">
            <Link
              to="/"
              className="flex items-center gap-3 no-underline mb-5 group"
            >
              <img
                src={logoImg}
                alt="Webify Logo"
                className="h-11 w-auto object-contain transition-all duration-500 group-hover:scale-110 group-hover:rotate-2"
              />

              <div className="font-display font-bold leading-[1.1] transition duration-300 group-hover:text-cyan-400">
                <div className="text-white group-hover:text-cyan-400 transition duration-300">
                  Webify Technologies
                </div>
              </div>
            </Link>

            <p className="text-white/70 text-sm leading-relaxed mb-6 max-w-[280px] hover:text-white transition duration-300">
              Webify Technologies is a modern IT company building websites,
              software, mobile apps, and powerful digital solutions for growing
              businesses.
            </p>

            {/* Socials */}
            <div className="flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className={`group w-10 h-10 rounded-xl border flex items-center justify-center text-white/70 transition-all duration-300 hover:-translate-y-1
${s.label === "Instagram"
                      ? "bg-white/10 border-white/10 hover:bg-pink-500 hover:border-pink-500 hover:text-white hover:shadow-[0_10px_25px_rgba(236,72,153,0.45)]"
                      : s.label === "Facebook"
                        ? "bg-white/10 border-white/10 hover:bg-blue-600 hover:border-blue-600 hover:text-white hover:shadow-[0_10px_25px_rgba(37,99,235,0.45)]"
                        : s.label === "YouTube"
                          ? "bg-white/10 border-white/10 hover:bg-red-600 hover:border-red-600 hover:text-white hover:shadow-[0_10px_25px_rgba(220,38,38,0.45)]"
                          : "bg-white/10 border-white/10 hover:bg-cyan-400 hover:border-cyan-400 hover:text-black hover:shadow-[0_10px_25px_rgba(34,211,238,0.4)]"
                    }`}
                >
                  <span className="transition-transform duration-300 group-hover:scale-110">
                    {s.icon}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Company */}
          <div className="lg:ml-4">
            <h4 className="font-display font-semibold text-white mb-5 text-base">
              Company
            </h4>

            <ul className="list-none flex flex-col gap-3">
              {[
                { name: "Home", path: "/" },
                { name: "About Us", path: "/about" },
                { name: "Services", path: "/services" },
                { name: "Projects", path: "/projects" },
                { name: "Contact Us", path: "/contact" }
              ].map((c) => (
                <li key={c.name}>
                  <Link
                    to={c.path}
                    className="group inline-flex items-center gap-2 text-white/60 no-underline text-sm transition-all duration-300 hover:text-cyan-400 hover:translate-x-2"
                  >
                    <span className="w-0 h-0 group-hover:w-1 group-hover:h-1 rounded-full bg-cyan-400 transition-all duration-300" />
                    {c.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="lg:ml-2">
            <h4 className="font-display font-semibold text-white mb-5 text-base">
              Services
            </h4>

            <ul className="list-none flex flex-col gap-3">
              {services.map((s) => (
                <li key={s}>
                  <Link
                    to="/services"
                    className="group inline-flex items-center gap-2 text-white/60 no-underline text-sm transition-all duration-300 hover:text-cyan-400 hover:translate-x-2"
                  >
                    <span className="w-0 h-0 group-hover:w-1 group-hover:h-1 rounded-full bg-cyan-400 transition-all duration-300" />
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="col-span-2 lg:col-span-1 lg:pl-4">
            <h4 className="font-display font-semibold text-white mb-5 text-base">
              Contact
            </h4>

            <div className="flex flex-col gap-4">
              <a
                href="mailto:webifytechnologies4@gmail.com"
                className="text-white/60 no-underline text-sm transition-all duration-300 hover:text-cyan-400 hover:translate-x-1 break-all"
              >
                webifytechnologies4@gmail.com
              </a>

              <span className="text-white/60 text-sm transition duration-300 hover:text-white">
                Ahmedabad, Gujarat, India
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 px-8 py-6">
        <div className="max-w-[1400px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">

          <p className="text-white/60 text-[0.75rem] font-mono hover:text-cyan-400 transition duration-300 text-center sm:text-left">
            © 2026 Webify Technologies. All rights reserved.
          </p>

          <div className="flex items-center gap-5">
            <Link
              to="/privacy-policy"
              className="text-white/50 text-xs hover:text-cyan-400 transition duration-300"
            >
              Privacy Policy
            </Link>

            <Link
              to="/terms-conditions"
              className="text-white/50 text-xs hover:text-cyan-400 transition duration-300"
            >
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

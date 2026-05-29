import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";
import logo from "../assets/logo.png";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Projects", path: "/projects" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);

  const lastScrollY = useRef(0);
  const location = useLocation();

  // FIX: always black pages
  const forceBlackPages = [
    "/privacy-policy",
    "/terms-conditions",
  ];

  const isForceBlack = forceBlackPages.includes(location.pathname);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      const heroHeight = window.innerHeight * 0.9;

      if (currentY < 80) {
        setVisible(true);
      } else if (currentY < lastScrollY.current) {
        setVisible(true);
      } else if (currentY > lastScrollY.current) {
        setVisible(false);
        setOpen(false);
      }

      setScrolled(currentY > heroHeight);
      lastScrollY.current = currentY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* HEADER */}
      <motion.header
        animate={{ y: visible ? 0 : "-120%" }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className={`fixed top-3 left-1/2 -translate-x-1/2 w-[95%] z-50 rounded-[30px] border transition-all duration-500
          ${isForceBlack
            ? "bg-black/85 backdrop-blur-2xl border-blue-500/30 shadow-[0_10px_50px_rgba(21,101,192,0.30)]"
            : scrolled
              ? "bg-black/35 backdrop-blur-2xl border-blue-500/30 shadow-[0_10px_50px_rgba(21,101,192,0.25)]"
              : "bg-white/55 backdrop-blur-2xl border-white/20  shadow-[0_10px_50px_rgba(255,255,255,0.10)]"
          }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="h-20 flex items-center justify-between">

            {/* LOGO */}
            <Link to="/" className="flex items-center gap-2">
              <img
                src={logo}
                alt="Webify Technologies logo"
                className="h-[65px] w-auto object-contain"
              />
            </Link>

            {/* DESKTOP MENU */}
            <nav className="hidden md:flex items-center gap-10">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;

                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    className="relative font-semibold transition group"
                  >
                    <span
                      className={`transition duration-300 ${isActive
                        ? "text-cyan-300"
                        : isForceBlack || scrolled
                          ? "text-gray-300 group-hover:text-cyan-300"
                          : "text-black group-hover:text-cyan-700"
                        }`}
                    >
                      {link.name}
                    </span>

                    {/* UNDERLINE */}
                    <span
                      className={`absolute left-0 -bottom-2 h-[2px] bg-gradient-to-r from-brand-blue to-brand-cyan transition-all duration-300
          ${isActive
                          ? "w-full"
                          : "w-0 group-hover:w-full"
                        }`}
                    />
                  </Link>
                );
              })}
              {/* CTA */}
              <button
                onClick={() => {
                  const section = document.getElementById("contact-section");
                  section?.scrollIntoView({ behavior: "smooth" });
                }}
                className="flex items-center gap-2 bg-gradient-to-r from-brand-blue to-brand-cyan text-white px-7 py-3 rounded-full font-semibold"
              >
                Get Started <ArrowRight size={18} />
              </button>
            </nav>

            {/* MOBILE */}
            <button
              onClick={() => setOpen(!open)}
              className="md:hidden text-white"
            >
              {open ? <X /> : <Menu />}
            </button>

          </div>
        </div>
      </motion.header>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-brand-darkBlue/95 backdrop-blur-xl flex flex-col justify-center items-center h-[100dvh] overflow-hidden"
          >
            {/* CLOSE BUTTON */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-6 right-6 text-white text-3xl hover:rotate-90 transition-transform duration-300"
            >
              ✕
            </button>

            {/* MENU ITEMS */}
            <div className="flex flex-col items-center gap-7">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setOpen(false)}
                  className="text-white text-2xl font-medium relative group"
                >
                  {link.name}

                  {/* underline animation */}
                  <span className="absolute left-1/2 -translate-x-1/2 -bottom-1 w-0 h-[2px] bg-gradient-to-r from-brand-blue to-brand-cyan group-hover:w-full transition-all duration-300"></span>
                </Link>
              ))}
            </div>

            {/* GET STARTED BUTTON */}
            <div className="mt-12 w-full px-8 max-w-xs">
              <Link to="/contact" onClick={() => setOpen(false)}>
                <button className="w-full flex items-center justify-center gap-2 
          bg-gradient-to-r from-brand-blue to-brand-cyan 
          text-white py-4 rounded-2xl font-semibold shadow-lg
          active:scale-95 transition-transform">
                  Get Started <ArrowRight size={18} />
                </button>
              </Link>

              {/* LINE */}
              <p className="text-center text-white/50 text-xs mt-4">
                Let’s build something amazing 🚀
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
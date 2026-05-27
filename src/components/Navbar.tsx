import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";
import logoImg from "../assets/logo.webp";

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
  const [visible, setVisible] = useState(true);        // hide/show state
  const lastScrollY = useRef(0);                        // track previous scroll position
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;

      // Show/hide logic:
      // – scrolling UP   → show navbar
      // – scrolling DOWN → hide navbar (only after we've scrolled past 80px)
      if (currentY < 80) {
        setVisible(true);          // always show near the top
      } else if (currentY < lastScrollY.current) {
        setVisible(true);          // scrolling up
      } else if (currentY > lastScrollY.current) {
        setVisible(false);         // scrolling down
        setOpen(false);            // close mobile menu when hiding
      }

      setScrolled(currentY > 20);
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
        className={`fixed top-3 left-1/2 -translate-x-1/2 w-[95%] z-50 rounded-[30px] border transition-colors duration-500 ${scrolled
          ? "bg-black/85 backdrop-blur-2xl border-blue-500/30 shadow-[0_10px_50px_rgba(21,101,192,0.30)]"
          : "bg-black/60 backdrop-blur-xl border-white/10 shadow-[0_10px_40px_rgba(0,0,0,0.5)]"
          }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="h-20 flex items-center justify-between">

            {/* LOGO */}
            <Link to="/" className="flex items-center gap-3 group">
              <motion.div
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="h-12 w-12 rounded-xl overflow-hidden flex items-center justify-center bg-white shadow-[0_6px_24px_rgba(21,101,192,0.4)]"
              >
                <img
                  src={logoImg}
                  alt="Webify Technologies Logo"
                  className="h-11 w-11 object-contain"
                />
              </motion.div>
            </Link>

            {/* DESKTOP MENU */}
            <nav className="hidden md:flex items-center gap-10">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`relative text-[15px] font-semibold transition-all duration-300 ${location.pathname === link.path
                    ? "text-sky-400"
                    : "text-gray-300 hover:text-sky-400"
                    }`}
                >
                  {link.name}
                  {location.pathname === link.path && (
                    <motion.div
                      layoutId="active-nav"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      className="absolute left-0 -bottom-2 w-full h-[3px] rounded-full bg-gradient-to-r from-blue-600 to-sky-400 shadow-[0_0_12px_rgba(56,189,248,0.7)]"
                    />
                  )}
                </Link>
              ))}
            </nav>

            {/* CTA BUTTON */}
            <div className="hidden md:flex items-center">
              <Link to="/contact">
                <motion.button
                  onClick={() => {
                    const section = document.getElementById("contact-section");
                    section?.scrollIntoView({ behavior: "smooth" });
                  }}
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 0 25px rgba(21,101,192,0.5)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 bg-gradient-to-r from-blue-700 to-sky-500 hover:from-blue-600 hover:to-sky-400 text-white px-7 py-3 rounded-full font-semibold shadow-[0_10px_30px_rgba(21,101,192,0.4)] transition-all duration-300"
                >
                  Get Started
                  <ArrowRight size={18} />
                </motion.button>
              </Link>
            </div>

            {/* MOBILE MENU BUTTON */}
            <button
              onClick={() => setOpen(!open)}
              className="md:hidden text-white"
            >
              {open ? <X size={30} /> : <Menu size={30} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* MOBILE MENU */}
      <AnimatePresence mode="wait">
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed top-0 left-0 w-full h-[100dvh] z-50 md:hidden bg-black/95 backdrop-blur-2xl"
          >
            {/* SAFE WRAPPER */}
            <div className="relative h-full w-full flex flex-col items-center justify-center">

              {/* CLOSE BUTTON */}
              <button
                onClick={() => setOpen(false)}
                className="absolute top-6 right-6 text-white text-3xl z-50"
              >
                ✕
              </button>

              {/* MENU ITEMS */}
              <div className="flex flex-col items-center gap-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    onClick={() => setOpen(false)}
                    className={`text-2xl font-semibold transition ${location.pathname === link.path
                      ? "text-blue-400"
                      : "text-white/70 hover:text-blue-400"
                      }`}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>

              {/* CTA */}
              <div className="mt-12">
                <button className="flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-full font-semibold">
                  Start Project <ArrowRight size={18} />
                </button>
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
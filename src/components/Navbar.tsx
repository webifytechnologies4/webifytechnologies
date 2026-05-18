import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  ArrowRight,
} from "lucide-react";

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

  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* HEADER */}
      <header
        className={`fixed top-3 left-1/2 -translate-x-1/2 w-[95%] z-50 rounded-[30px] transition-all duration-500 border ${
          scrolled
            ? "bg-black/80 backdrop-blur-2xl border-cyan-500/30 shadow-[0_10px_50px_rgba(6,182,212,0.25)]"
            : "bg-black/60 backdrop-blur-xl border-white/10 shadow-[0_10px_40px_rgba(0,0,0,0.5)]"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10">

          <div className="h-20 flex items-center justify-between">

            {/* LOGO */}
            <Link
              to="/"
              className="flex items-center gap-4 group"
            >
              {/* LOGO ICON */}
              <motion.div
                whileHover={{
                  rotate: 10,
                  scale: 1.08,
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                }}
                className="w-12 h-12 rounded-2xl bg-gradient-to-br from-cyan-400 to-cyan-600 flex items-center justify-center shadow-[0_10px_30px_rgba(6,182,212,0.5)]"
              >
                <span className="text-2xl font-black text-white">
                  W
                </span>
              </motion.div>

              {/* LOGO TEXT */}
              <div>
                <h1 className="text-2xl font-black tracking-wide text-white">
                  WEBIFY
                </h1>

                <p className="text-[11px] text-cyan-400 tracking-[5px] font-semibold">
                  TECHNOLOGIES
                </p>
              </div>
            </Link>

            {/* DESKTOP MENU */}
            <nav className="hidden md:flex items-center gap-10">

              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`relative text-[15px] font-semibold transition-all duration-300 ${
                    location.pathname === link.path
                      ? "text-cyan-400"
                      : "text-gray-300 hover:text-cyan-400"
                  }`}
                >
                  {link.name}

                  {location.pathname === link.path && (
                    <motion.div
                      layoutId="active-nav"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                      className="absolute left-0 -bottom-2 w-full h-[3px] rounded-full bg-cyan-400 shadow-[0_0_12px_rgba(6,182,212,0.8)]"
                    />
                  )}
                </Link>
              ))}
            </nav>

            {/* CTA BUTTON */}
            <div className="hidden md:flex items-center">

              <motion.button
                whileHover={{
                  scale: 1.05,
                }}
                whileTap={{
                  scale: 0.95,
                }}
                className="flex items-center gap-2 bg-gradient-to-r from-cyan-400 to-cyan-600 hover:from-cyan-300 hover:to-cyan-500 text-white px-7 py-3 rounded-full font-semibold shadow-[0_10px_30px_rgba(6,182,212,0.45)] transition-all duration-300"
              >
                Get Started
                <ArrowRight size={18} />
              </motion.button>
            </div>

            {/* MOBILE MENU BUTTON */}
            <button
              onClick={() => setOpen(!open)}
              className="md:hidden text-white"
            >
              {open ? (
                <X size={30} />
              ) : (
                <Menu size={30} />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{
              opacity: 0,
              y: -30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -30,
            }}
            transition={{
              duration: 0.3,
            }}
            className="fixed top-28 left-1/2 -translate-x-1/2 w-[95%] rounded-[30px] bg-black/95 backdrop-blur-2xl border border-cyan-500/20 shadow-[0_10px_50px_rgba(6,182,212,0.25)] z-40 md:hidden overflow-hidden"
          >
            <div className="px-6 py-8 flex flex-col gap-6">

              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setOpen(false)}
                  className={`text-lg font-semibold transition-all ${
                    location.pathname === link.path
                      ? "text-cyan-400"
                      : "text-gray-300"
                  }`}
                >
                  {link.name}
                </Link>
              ))}

              {/* MOBILE CTA */}
              <motion.button
                whileTap={{
                  scale: 0.95,
                }}
                className="mt-4 flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-400 to-cyan-600 hover:from-cyan-300 hover:to-cyan-500 text-white py-4 rounded-2xl font-semibold shadow-[0_10px_30px_rgba(6,182,212,0.45)] transition-all"
              >
                Start Project
                <ArrowRight size={18} />
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
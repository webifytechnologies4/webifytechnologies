import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight,
  Globe,
  ShoppingCart,
  Zap,
  Building2,
  Home,
  X,
  ExternalLink,
} from "lucide-react";

const categories = ["All", "Solar", "Real Estate", "Medical", "E-Commerce", "Websites"];

interface Project {
  icon: React.ReactNode;
  title: string;
  shortDesc: string;
  fullDesc: string;
  category: string;
  tags: string[];
  image: string;
  link: string;
  features: string[];
  client: string;
}

const projectsList: Project[] = [
    {
    icon: <ShoppingCart size={34} />,
    title: "LEIFMED – Medical Marketplace",
    client: "LEIFMED Health Platform",
    shortDesc:
      "Ultra-modern dark mode medical e-commerce platform for prescription medicines and wellness essentials.",
    fullDesc:
      "LEIFMED is an advanced medical e-commerce marketplace designed to make healthcare accessible and intuitive. Built with a stunning dark mode UI featuring slate/navy backgrounds and emerald green branding, the platform enables users to order verified prescription medicines, wellness essentials, first aid kits, and hospital-grade medical supplies. The SaaS-dashboard-inspired interface includes a central search bar, glassmorphic card grids, glowing category highlights, and floating navigation. The design feels premium, professional, and instantly trustworthy for a sensitive sector like healthcare.",
    category: "Medical",
    tags: ["React", "Next.js", "Tailwind CSS", "Vercel"],
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1200&auto=format&fit=crop",
    link: "https://life-made.vercel.app/",
    features: [
      "Dark mode glassmorphic UI design",
      "Verified prescription medicine ordering",
      "Wellness & first aid product categories",
      "Hospital-grade medical supplies",
      "Central smart search functionality",
      "Floating nav & animated card grids",
    ],
  },
  {
    icon: <ShoppingCart size={34} />,
    title: "Viaan Enterprise",
    client: "Viaan Enterprise",
    shortDesc:
      "Custom industrial e-commerce and trading platform for valves, flanges, and piping solutions.",
    fullDesc:
      "Viaan Enterprise is a specialized industrial e-commerce platform built to streamline the purchase and supply of valves, flanges, and piping solutions for B2B and B2C clients. The platform features a clean product catalog, detailed specification sheets, and a straightforward ordering workflow tailored for the industrial sector. Built with React, Vite, and Tailwind CSS, the site delivers fast performance and an intuitive user experience for procurement professionals.",
    category: "E-Commerce",
    tags: ["React", "Tailwind CSS", "Vite"],
    image:
      "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=1200&auto=format&fit=crop",
    link: "http://viaanenterprise.com/",
    features: [
      "Industrial product catalog (valves, flanges, piping)",
      "B2B & B2C ordering system",
      "Detailed product specification sheets",
      "Fast Vite-powered performance",
      "Mobile-responsive layout",
      "Custom quote request workflow",
    ],
  },
  {
    icon: <Globe size={34} />,
    title: "Sky Pathology Lab",
    client: "Sky Pathology Lab",
    shortDesc:
      "Advanced clinical diagnostic management system and patient booking portal for seamless medical reporting.",
    fullDesc:
      "Sky Pathology Lab is a comprehensive digital platform for a clinical diagnostic center, featuring a patient booking portal, diagnostic report access, and a management system for lab staff. The website delivers a clean, professional interface that simplifies appointment scheduling, test ordering, and report delivery for patients, while offering administrative tools for lab operations. Built with React, Node.js, and Tailwind CSS, the platform prioritizes security, speed, and ease of use in a sensitive medical environment.",
    category: "Websites",
    tags: ["React", "Node.js", "Tailwind CSS"],
    image:
      "https://images.unsplash.com/photo-1579154204601-01588f351e67?q=80&w=1200&auto=format&fit=crop",
    link: "https://skypathologylab.in/",
    features: [
      "Patient appointment booking portal",
      "Online diagnostic report access",
      "Lab management admin dashboard",
      "Test catalog & pricing info",
      "Secure patient data handling",
      "Mobile-friendly responsive design",
    ],
  },
  {
    icon: <Zap size={34} />,
    title: "West Vic Energy",
    client: "West Vic Energy Pty Ltd",
    shortDesc:
      "Professional solar energy provider website for residential & commercial clients in Victoria, Australia.",
    fullDesc:
      "West Vic Energy is a trusted solar energy provider serving residential and commercial clients across Victoria, Australia. The website showcases their solar panel installation services, Tesla Powerwall battery packages, and government rebate programs. Built with a deep navy and amber gold color scheme, the site features a prominent hero slider, real-world project photography, and prominent CTAs for free energy quotes. The professional design inspires trust through compliance badges and detailed service breakdowns.",
    category: "Solar",
    tags: ["React", "Next.js", "Tailwind CSS", "Vercel"],
    image:
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=1200&auto=format&fit=crop",
    link: "https://westvicenergy.com.au/",
    features: [
      "Solar Panel Installation showcase",
      "Tesla Powerwall Battery packages",
      "Government rebate info & coordination",
      "Free quote CTA & contact forms",
      "Trust badges & compliance certifications",
      "Mobile-responsive hero slideshow",
    ],
  },
  {
    icon: <Zap size={34} />,
    title: "Dmax Solar",
    client: "Dmax Energy Solutions",
    shortDesc:
      "Large-scale industrial solar EPC (Engineering, Procurement & Construction) portfolio website.",
    fullDesc:
      "Dmax Solar is a B2B solar energy infrastructure company specializing in large-scale utility and industrial solar installations. The website highlights their EPC capabilities with impressive statistics — 78 MW+ total capacity and 20+ completed projects. Built with a sleek teal/navy color scheme, the site uses a minimalist SPA layout with an abundant whitespace grid showcasing project achievements, corporate milestones, and technical capabilities. Ideal for attracting large industrial and government clients seeking trusted green energy partners.",
    category: "Solar",
    tags: ["React", "Next.js", "Tailwind CSS", "Vercel"],
    image:
      "https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=1200&auto=format&fit=crop",
    link: "https://dmax1.vercel.app/",
    features: [
      "78 MW+ capacity statistics dashboard",
      "20+ projects portfolio showcase",
      "EPC services breakdown",
      "Industrial & utility solar focus",
      "Corporate B2B design aesthetic",
      "Animated achievement counters",
    ],
  },
  {
    icon: <Home size={34} />,
    title: "RRealtor – Everland Plots",
    client: "RRealtor – Arvind Everland",
    shortDesc:
      "Bilingual lead-generation landing page for premium plot sales in Arvind Everland, Mankol, Gujarat.",
    fullDesc:
      "RRealtor Everland is a high-conversion lead-generation landing page built to drive plot bookings for the Arvind Everland development in Mankol, Gujarat. The site features a bilingual design (Gujarati & English) to effectively target local investors. Key features include a limited-time offer popup for urgency, an elegant hero slideshow of project plots, and a direct contact/inquiry form embedded in the hero section. The forest green and charcoal color scheme conveys trust and natural luxury, perfectly matching the land investment audience.",
    category: "Real Estate",
    tags: ["React", "Next.js", "Tailwind CSS", "Vercel"],
    image:
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1200&auto=format&fit=crop",
    link: "https://rrsecond.vercel.app/",
    features: [
      "Bilingual Gujarati & English content",
      "Limited-time offer urgency popup",
      "Hero slideshow of project plots",
      "Embedded lead capture inquiry form",
      "Direct WhatsApp & call CTA buttons",
      "Mobile-first responsive layout",
    ],
  },
  {
    icon: <Building2 size={34} />,
    title: "RRealtor – Luxury Apartments",
    client: "RRealtor – South Bopal, Ahmedabad",
    shortDesc:
      "Premium landing page for 4 & 5 BHK luxury apartments in South Bopal, Ahmedabad with elegant gold branding.",
    fullDesc:
      "RRealtor Luxury Apartments is an elegant, high-end real estate landing page designed to attract premium buyers for 4 & 5 BHK apartments in South Bopal, Ahmedabad. The design leverages bronze/gold branding accents, warm interior photography, and a sophisticated tab navigation system covering Why Choose, Amenities, Location, Pricing, and Gallery sections. Prominent CTAs including 'Call Now' and 'Let's Connect' modals ensure high-intent lead capture. The overall aesthetic communicates exclusivity and luxury lifestyle to discerning buyers.",
    category: "Real Estate",
    tags: ["React", "Next.js", "Tailwind CSS", "Vercel"],
    image:
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=1200&auto=format&fit=crop",
    link: "https://rr1-theta.vercel.app/",
    features: [
      "4 & 5 BHK premium apartment showcase",
      "Tab navigation (Why Choose, Amenities, Location, Pricing, Gallery)",
      "Luxury photography hero background",
      "Bronze/gold premium branding",
      "'Call Now' & 'Let's Connect' lead modals",
      "Location map & pricing breakdown",
    ],
  },

];

const ProjectGrid = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects =
    activeCategory === "All"
      ? projectsList
      : projectsList.filter((project) => project.category === activeCategory);

  const openModal = (project: Project) => {
    setSelectedProject(project);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = "";
  };

  return (
    <>
      <section
        id="projects-section"
        aria-label="Our Creative Projects"
        className="relative bg-brand-white py-8 md:py-10 overflow-hidden w-full"
      >
        {/* TOP HEADING */}
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-brand-light border border-brand-cyan/15 mb-6">
              <div className="w-2 h-2 rounded-full bg-brand-cyan animate-pulse" />
              <span className="text-sm font-semibold tracking-[3px] uppercase text-brand-blue">
                Webify Technologies
              </span>
            </div>

            <h2 className="text-3xl md:text-5xl font-bold text-brand-darkBlue leading-tight">
              Our Latest
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-cyan">
                Creative Projects
              </span>
            </h2>

            <p className="max-w-5xl mx-auto mt-6 text-gray-600 text-sm md:text-lg leading-relaxed">
              We build modern websites, mobile apps and scalable software
              solutions with premium UI/UX and high performance.
            </p>
          </motion.div>

          {/* FILTERS */}
          <div className="flex flex-wrap justify-center gap-3 mt-8 mb-16">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 min-h-[48px] flex items-center justify-center
                  ${
                    activeCategory === cat
                      ? "bg-gradient-to-r from-brand-blue to-brand-cyan text-white shadow-md shadow-brand-blue/15 border-none"
                      : "bg-white border border-brand-cyan/15 text-gray-600 hover:bg-brand-light hover:text-brand-blue"
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* PROJECT GRID */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence>
              {filteredProjects.map((project, i) => (
                <motion.div
                  key={project.title}
                  layout
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -8 }}
                  onClick={() => openModal(project)}
                  className="group cursor-pointer relative rounded-lg  shadow-xl shadow-black/50 overflow-hidden border border-brand-cyan/10 bg-white  hover:border-brand-cyan/35 transition-all duration-300 flex flex-col"
                >
                  {/* IMAGE */}
                  <div className="relative h-[230px] overflow-hidden">
                    <img
                      src={project.image}
                      alt={`${project.title} showcase project by Webify Technologies`}
                      className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                    {/* CATEGORY */}
                    <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-brand-light/95 backdrop-blur text-xs font-semibold text-brand-blue border border-brand-cyan/10">
                      {project.category}
                    </div>

                    {/* CLICK HINT */}
                    <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/15 backdrop-blur-xl border border-white/25 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <ArrowUpRight size={16} />
                    </div>

                    {/* ICON */}
                    <div className="absolute bottom-4 left-4 w-12 h-12 rounded-xl bg-white/15 backdrop-blur-xl border border-white/20 flex items-center justify-center text-white">
                      {project.icon}
                    </div>
                  </div>

                  {/* CONTENT */}
                  <div className="p-5 sm:p-6 flex flex-col flex-grow justify-between">
                    <div>
                      <h3 className="text-lg md:text-xl font-bold text-brand-darkBlue group-hover:text-brand-cyan transition-colors duration-300">
                        {project.title}
                      </h3>

                      <p className="mt-2 text-gray-600 leading-relaxed text-sm line-clamp-2">
                        {project.shortDesc}
                      </p>
                    </div>

                    <div>
                     

                      {/* ACTION */}
                      <div className="mt-5 flex items-center gap-2 text-brand-blue group-hover:text-brand-cyan font-semibold text-sm min-h-[44px]">
                        View Details
                        <ArrowUpRight
                          size={16}
                          className="transition duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                        />
                      </div>
                    </div>
                  </div>

                  {/* HOVER GLOW */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none bg-gradient-to-tr from-brand-blue/5 via-transparent to-brand-cyan/10" />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* ─── PROJECT DETAIL MODAL ─── */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            key="modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-6"
            onClick={closeModal}
          >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

            {/* Modal Panel */}
            <motion.div
              key="modal-panel"
              initial={{ opacity: 0, scale: 0.92, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 40 }}
              transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-white rounded-[32px] shadow-2xl shadow-brand-blue/20 border border-brand-cyan/10"
            >
              {/* Modal Image */}
              <div className="relative h-[220px] md:h-[280px] overflow-hidden rounded-t-[32px]">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />

                {/* Category badge */}
                <div className="absolute top-5 left-5 px-4 py-1.5 rounded-full bg-white/90 backdrop-blur text-xs font-bold text-brand-blue border border-brand-cyan/15">
                  {selectedProject.category}
                </div>

                {/* Close button */}
                <button
                  onClick={closeModal}
                  aria-label="Close project details"
                  className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/40 backdrop-blur border border-white/20 flex items-center justify-center text-white hover:bg-black/60 transition-colors duration-200"
                >
                  <X size={18} />
                </button>

                {/* Title over image */}
                <div className="absolute bottom-5 left-5 right-5">
                  <h2 className="text-xl md:text-2xl font-bold text-white leading-tight">
                    {selectedProject.title}
                  </h2>
                  <p className="text-sm text-white/70 mt-1">
                    {selectedProject.client}
                  </p>
                </div>
              </div>

              {/* Modal Content */}
              <div className="p-6 md:p-8">
            

                {/* Description */}
                <div className="mb-6">
                  <h3 className="text-base font-bold text-brand-darkBlue mb-2">
                    About This Project
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {selectedProject.fullDesc}
                  </p>
                </div>

                {/* Key Features */}
                <div className="mb-8">
                  <h3 className="text-base font-bold text-brand-darkBlue mb-3">
                    Key Features
                  </h3>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {selectedProject.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2.5 text-sm text-gray-600"
                      >
                        <span className="mt-0.5 w-5 h-5 rounded-full bg-gradient-to-r from-brand-blue to-brand-cyan flex items-center justify-center flex-shrink-0">
                          <svg
                            className="w-3 h-3 text-white"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={3}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href={selectedProject.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-brand-blue to-brand-cyan text-white font-semibold text-sm shadow-lg shadow-brand-blue/20 hover:shadow-brand-blue/30 hover:opacity-90 transition-all duration-300 no-underline min-h-[52px]"
                  >
                    <ExternalLink size={18} />
                    Visit Website
                  </a>
                  <button
                    onClick={closeModal}
                    className="flex-1 flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-gray-100 text-gray-700 font-semibold text-sm hover:bg-gray-200 transition-all duration-300 min-h-[52px]"
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ProjectGrid;
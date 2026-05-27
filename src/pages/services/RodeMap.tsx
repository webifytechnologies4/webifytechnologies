import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./RodMap.css";
import {
    ShoppingCart, Code, Smartphone, Palette, PenTool, Film, Lightbulb, Layers, Headphones, Globe, User
} from "lucide-react";



interface Step {
    id: string;
    title: string;
    icon: React.ReactNode;
    color: string;
}

interface Point {
    x: number;
    y: number;
}

const STEPS: Step[] = [
    { id: "01", title: "Website Development", icon: <Globe size={18} />, color: "#c1972d" },
    { id: "02", title: "E-Commerce Solutions", icon: <ShoppingCart size={18} />, color: "#260466" },
    { id: "03", title: "Software Development", icon: <Code size={18} />, color: "#c1972d" },
    { id: "04", title: "App Development", icon: <Smartphone size={18} />, color: "#260466" },
    { id: "05", title: "UI/UX Design", icon: <Palette size={18} />, color: "#c1972d" },
    { id: "06", title: "Graphic Design", icon: <PenTool size={18} />, color: "#260466" },
    { id: "07", title: "Video Editing", icon: <Film size={18} />, color: "#c1972d" },
    { id: "08", title: "IT Consulting & Strategy", icon: <Lightbulb size={18} />, color: "#260466" },
    { id: "09", title: "Custom Software Solutions", icon: <Layers size={18} />, color: "#c1972d" },
    { id: "10", title: "24/7 Maintenance & Support", icon: <Headphones size={18} />, color: "#260466" },
];

const ROAD_PATH = "M 0 55 C 9 85 15 95 20 85 S 10 40 25 45 S 55 75 55 55 S 60 15 80 35 S 22 65 255 100 ";

const getPosition = (index: number): Point => {
    // Added coordinates for all 10 steps to prevent crashes
    const coords: Point[] = [
        { x: 1.5, y: 55 },   // 01
        { x: 18, y: 89 },  // 02
        { x: 18, y: 52 },  // 03
        { x: 28, y: 44 },  // 04
        { x: 40, y: 58 },  // 05
        { x: 55, y: 62 },  // 06
        { x: 60, y: 26 },  // 07
        { x: 80, y: 30 },  // 08
        { x: 82, y: 45 },  // 09
        { x: 90, y: 67 },  // 10
    ];
    return coords[index] || coords[0];
};

export default function Roadmap() {
    const [current, setCurrent] = useState(0);
    const [, setIsFinished] = useState(false);
    const [showLogo, setShowLogo] = useState(false);
    const [activeStep, setActiveStep] = useState(0);

    useEffect(() => {
        let timeout: any;

        const runStep = (index: number) => {
            setCurrent(index); // student moves

            //  delay BEFORE showing card (touch effect)
            timeout = setTimeout(() => {
                setActiveStep(index); // show card after 0.5s

                // if last step
                if (index === STEPS.length - 1) {

                    setTimeout(() => {
                        setIsFinished(true);
                        setShowLogo(true); // show company logo overlay

                        setTimeout(() => {
                            setShowLogo(false); // hide logo after 2s
                            setIsFinished(false);
                            setActiveStep(0);
                            runStep(0); // restart
                        }, 2800);

                    }, 1000);

                    return;
                }

                // move next step
                timeout = setTimeout(() => {
                    runStep(index + 1);
                }, 2000);

            }, 500); //  0.5s delay

        };

        runStep(0);

        return () => clearTimeout(timeout);
    }, []);
    const studentPos = getPosition(current);

    return (
        <section className="roadmap-section py-20 px-10 lg:px-0 md:py-10" style={{ position: 'relative' }} id="services-list">
            <div className="roadmap-container-main ">

                <div className="roadmap-header">
                    <h3 className="text-3xl md:text-5xl font-serif font-extrabold text-center text-[#c1972d]">
                        Our <span className="text-blue-950">IT Solutions</span> & Services
                    </h3>

                    <span className="text-blue-950 text-lg block mt-2">
                        Delivering end-to-end digital, web, mobile & software solutions for business growth
                    </span>
                </div>

                <div className="roadmap-visual-area">
                    <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="road-svg-element">

                        <defs>
                            <filter id="roadShadow" x="-50%" y="-50%" width="200%" height="200%">
                                <feDropShadow
                                    dx="0"
                                    dy="4"
                                    stdDeviation="6"
                                    floodColor="#000000"
                                    floodOpacity="0.4"
                                />
                            </filter>
                        </defs>

                        <path
                            d={ROAD_PATH}
                            className="road-path-bg"
                            stroke="#374151"
                            strokeWidth="35"
                            fill="none"
                            strokeLinecap="round"
                            filter="url(#roadShadow)"
                        />

                        <path
                            d={ROAD_PATH}
                            className="road-path-dashed"
                            stroke="white"
                            strokeWidth="4"
                            fill="none"
                            strokeDasharray="12 10"
                            strokeLinecap="round"
                        />
                    </svg>
                    {/* STUDENT ICON */}
                    <motion.div
                        className="student-mover"
                        animate={{ left: `${studentPos.x}%`, top: `${studentPos.y}%` }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                    >
                        <div className="student-icon-box">
                            <motion.div
                                className="student-circle"
                                animate={{ y: [0, -6, 0] }}
                                transition={{ repeat: Infinity, duration: 0.6 }}
                            >
                                <User size={24} fill="currentColor" />
                            </motion.div>
                            <div className="student-shadow" />
                        </div>
                    </motion.div>

                    {/* STEPS */}
                    {STEPS.map((step, index) => {
                        const pos = getPosition(index);
                        const isActive = activeStep === index;
                        const isCompleted = current >= index;
                        // logic for card placement
                        const isTop = [0, 2, 5, 8].includes(index);

                        return (
                            <div
                                key={step.id}
                                className={`step-node ${isActive ? 'active' : ''}`}
                                style={{ left: `${pos.x}%`, top: `${pos.y}%` }}

                            >
                                <div
                                    className="step-pin"
                                    style={{ backgroundColor: isCompleted ? step.color : "#94a3b8" }}
                                >
                                    <span className="step-id-text">{step.id}</span>
                                </div>

                                <motion.div
                                    className={`step-card -ms-13 md:-ms-4 h-18 md:h-auto ${isTop ? 'pos-bottom' : 'pos-top'}`}
                                    style={{ borderLeftColor: step.color }}
                                    transition={{ duration: 2.2, ease: "easeOut" }}
                                    animate={{
                                        opacity: isActive ? 1 : 0,
                                        scale: isActive ? 1 : 0.8,
                                        y: isActive ? 0 : (isTop ? 10 : -10)
                                    }}
                                >
                                    <div className="card-header">
                                        <div className="card-icon" style={{ color: step.color }}>{step.icon}</div>

                                    </div>
                                    <h3 className="card-title">{step.title}</h3>
                                </motion.div>
                            </div>
                        );
                    })}

                    {/* placeholder — logo overlay is rendered at section level below */}
                </div>
            </div>

            {/* COMPANY LOGO REVEAL — full section overlay on completion */}
            <AnimatePresence>
                {showLogo && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        style={{
                            position: 'absolute',
                            inset: 0,
                            zIndex: 50,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            backdropFilter: 'blur(18px)',
                            WebkitBackdropFilter: 'blur(18px)',
                            backgroundColor: 'rgba(255,255,255,0.45)',
                            borderRadius: '5rem',
                        }}
                    >
                        <motion.div
                            initial={{ scale: 0.6, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.8, opacity: 0, y: -20 }}
                            transition={{ duration: 0.6, ease: [0.34, 1.56, 0.64, 1] as const }}
                            style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}
                        >
                            <img
                                src="/logo.webp"
                                alt="Webify Technologies"
                                style={{
                                    width: 'clamp(140px, 22vw, 240px)',
                                    height: 'auto',
                                    objectFit: 'contain',
                                    filter: 'drop-shadow(0 8px 32px rgba(6,182,212,0.35))',
                                }}
                            />
                            <motion.p
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3, duration: 0.5 }}
                                style={{
                                    fontSize: '1.1rem',
                                    fontWeight: 700,
                                    letterSpacing: '0.12em',
                                    textTransform: 'uppercase',
                                    color: '#0e7490',
                                }}
                            >
                                All Services Delivered ✓
                            </motion.p>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
import { Globe, Mail, Phone, Rocket, ArrowRight } from "lucide-react";

const Footer = () => {
    return (
        <footer className="relative bg-black text-white overflow-hidden">

            {/* Glow Background */}
            <div className="absolute top-[-120px] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-cyan-500/20 blur-[180px] rounded-full" />
            <div className="absolute bottom-[-180px] right-[-120px] w-[500px] h-[500px] bg-blue-500/20 blur-[160px] rounded-full" />

            <div className="relative z-10 px-6 md:px-20 py-24">

                {/* TOP GRID (MAIN LAYOUT FIX) */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

                    {/* BRAND (LEFT BIG AREA) */}
                    <div className="lg:col-span-5 space-y-6">
                        <div className="flex items-center gap-2 text-3xl font-bold text-cyan-400">
                            <Rocket /> Webify Technologies
                        </div>

                        <p className="text-gray-400 leading-relaxed max-w-md">
                            We design and build modern digital products with high performance,
                            scalable architecture and futuristic UI/UX experiences.
                        </p>

                        <div className="flex gap-6 text-gray-400 text-sm">
                            <span className="hover:text-cyan-400 cursor-pointer">LinkedIn</span>
                            <span className="hover:text-cyan-400 cursor-pointer">Instagram</span>
                            <span className="hover:text-cyan-400 cursor-pointer">GitHub</span>
                        </div>
                    </div>

                    {/* RIGHT GRID (3 COLUMNS) */}
                    <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-12">

                        {/* Services */}
                        <div>
                            <h3 className="text-white font-semibold mb-5">Services</h3>
                            <div className="space-y-4 text-gray-400">
                                {["Web Development", "App Development", "UI/UX Design", "SaaS"].map((item, i) => (
                                    <div key={i} className="flex items-center gap-2 hover:text-cyan-400 cursor-pointer transition">
                                        <ArrowRight size={14} />
                                        {item}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Company */}
                        <div>
                            <h3 className="text-white font-semibold mb-5">Company</h3>
                            <div className="space-y-4 text-gray-400">
                                {["About", "Projects", "Careers", "Contact"].map((item, i) => (
                                    <div key={i} className="flex items-center gap-2 hover:text-cyan-400 cursor-pointer transition">
                                        <ArrowRight size={14} />
                                        {item}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Contact */}
                        <div>
                            <h3 className="text-white font-semibold mb-5">Contact</h3>

                            <div className="space-y-4 text-gray-400 text-sm">

                                <div className="flex items-center gap-2 hover:text-cyan-400 cursor-pointer">
                                    <Mail size={16} /> webifytechnologies4@gmail.com
                                </div>

                                {/* <div className="flex items-center gap-2 hover:text-cyan-400 cursor-pointer">
                                    <Phone size={16} /> +91 98765 43210
                                </div> */}

                                <div className="flex items-center gap-2 hover:text-cyan-400 cursor-pointer">
                                    <Globe size={16} /> www.webifytechnologies.com
                                </div>

                            </div>
                        </div>

                    </div>

                </div>

                {/* BOTTOM BAR */}
                <div className="border-t border-white/10 mt-20 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">

                    <p>© {new Date().getFullYear()} Webify Technologies. All rights reserved.</p>

                    <div className="flex gap-6 mt-4 md:mt-0">
                        {["Privacy", "Terms", "Support"].map((item, i) => (
                            <span key={i} className="hover:text-cyan-400 cursor-pointer transition">
                                {item}
                            </span>
                        ))}
                    </div>

                </div>

            </div>
        </footer>
    );
};

export default Footer;
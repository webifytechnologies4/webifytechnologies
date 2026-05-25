import { Globe, Mail, Rocket } from "lucide-react";

const Footer = () => {
    return (
        <footer className="relative bg-black text-white overflow-hidden">

            {/* Glow Background */}
            <div className="absolute top-[-120px] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-cyan-500/20 blur-[180px] rounded-full" />
            <div className="absolute bottom-[-180px] right-[-120px] w-[500px] h-[500px] bg-blue-500/20 blur-[160px] rounded-full" />

            <div className="relative z-10 px-6 md:px-20 py-24">

                {/* TOP GRID */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

                    {/* BRAND */}
                    <div className="lg:col-span-5 space-y-6">
                        <div className="flex items-center gap-2 text-3xl font-bold text-cyan-400">
                            <Rocket /> Webify Technologies
                        </div>

                        <p className="text-gray-400 leading-relaxed max-w-md">
                            We design and build modern digital products with high performance,
                            scalable architecture and futuristic UI/UX experiences.
                        </p>

                        {/* SOCIAL ICONS */}
                        <div className="flex gap-5 pt-2">

                            {/* LINKEDIN */}
                            <a
                                href="https://www.linkedin.com/company/webifytechnologies/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 rounded-lg border border-white/10 hover:border-cyan-400 hover:text-cyan-400 transition"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.5 23.5h4V7.98h-4V23.5zM8 7.98h3.8v2.12h.05c.53-1 1.83-2.12 3.77-2.12 4.03 0 4.78 2.65 4.78 6.1v9.42h-4v-8.36c0-1.99-.04-4.55-2.78-4.55-2.79 0-3.22 2.18-3.22 4.4v8.51H8V7.98z" />
                                </svg>
                            </a>

                            {/* INSTAGRAM */}
                            <a
                                href="https://www.instagram.com/webifytechnologies?igsh=MXM4MnRhYXMxY3Q5NQ=="
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 rounded-lg border border-white/10 hover:border-pink-400 hover:text-pink-400 transition"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M7 2C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5H7zm10 2a1 1 0 110 2 1 1 0 010-2zM12 7a5 5 0 110 10 5 5 0 010-10z" />
                                </svg>
                            </a>

                            {/* FACEBOOK */}
                            <a
                                href="https://www.facebook.com/share/1QS9oGiAUA/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 rounded-lg border border-white/10 hover:border-blue-500 hover:text-blue-500 transition"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M22 12a10 10 0 10-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.23.19 2.23.19v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.77l-.44 2.89h-2.33v6.99A10 10 0 0022 12z" />
                                </svg>
                            </a>

                            {/* GITHUB */}
                            <a
                                href="https://github.com/webifytechnologies4"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 rounded-lg border border-white/10 hover:border-gray-400 hover:text-gray-300 transition"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 .5C5.65.5.5 5.65.5 12a11.5 11.5 0 008 10.95c.58.1.79-.25.79-.56v-2.17c-3.25.71-3.94-1.39-3.94-1.39-.53-1.34-1.29-1.7-1.29-1.7-1.06-.73.08-.72.08-.72 1.17.08 1.79 1.2 1.79 1.2 1.04 1.77 2.73 1.26 3.39.96.11-.76.41-1.26.74-1.55-2.59-.29-5.31-1.3-5.31-5.79 0-1.28.46-2.33 1.2-3.15-.12-.29-.52-1.46.11-3.04 0 0 .98-.31 3.2 1.2a11.1 11.1 0 015.82 0c2.22-1.51 3.2-1.2 3.2-1.2.63 1.58.23 2.75.11 3.04.75.82 1.2 1.87 1.2 3.15 0 4.5-2.73 5.49-5.33 5.78.42.36.79 1.08.79 2.17v3.22c0 .31.21.67.8.56A11.5 11.5 0 0023.5 12C23.5 5.65 18.35.5 12 .5z" />
                                </svg>
                            </a>

                        </div>

                    </div>

                    {/* RIGHT GRID */}
                    <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-12">

                        {/* Services */}
                        <div>
                            <h3 className="text-white font-semibold mb-5">Services</h3>
                            <div className="space-y-4 text-gray-400">
                                {["Web Development", "App Development", "Software Development", "UI/UX Design", "Video Editing"].map((item, i) => (
                                    <div key={i} className="flex items-center gap-3 hover:text-cyan-400 cursor-pointer transition">
                                        <div className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
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
                                    <div key={i} className="flex items-center gap-3 hover:text-cyan-400 cursor-pointer transition">
                                        <div className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
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

                                <div className="flex items-center gap-2 hover:text-cyan-400 cursor-pointer">
                                    <Globe size={16} /> www.webifytechnologies.com
                                </div>

                            </div>
                        </div>

                    </div>

                </div>

                {/* BOTTOM BAR */}
                <div className="border-t border-white/10 mt-20 pt-8 flex justify-center items-center text-gray-500 text-sm">

                    <p className="text-center">
                        © {new Date().getFullYear()} Webify Technologies. All rights reserved.
                    </p>

                </div>

            </div>
        </footer>
    );
};

export default Footer;
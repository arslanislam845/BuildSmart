// components/Footer.jsx

const WA_NUMBER = "+971553945441";
const WA_LINK = `https://wa.me/${WA_NUMBER.replace(/\D/g, "")}?text=${encodeURIComponent(
    "Hi! I visited your BuildSmart website and want to discuss a project."
)}`;

export default function Footer() {
    return (
        <footer className="bg-slate-950 border-t border-slate-900">
            <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-6 sm:py-7">
                {/* GRID LAYOUT FOR BETTER RESPONSIVENESS */}
                <div className="grid gap-4 sm:gap-5 md:grid-cols-3 md:items-center">
                    {/* Left: Logo + text */}
                    <div className="flex items-center gap-3 justify-center md:justify-start">
                        <div className="relative">
                            <div className="h-9 w-9 rounded-2xl bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-600 flex items-center justify-center shadow-md">
                                <span className="text-white font-extrabold text-sm">B</span>
                            </div>
                            <div className="absolute -inset-[1px] rounded-2xl border border-white/10 pointer-events-none" />
                        </div>

                        <div className="leading-tight text-center md:text-left">
                            <p className="text-sm font-semibold text-white">BuildSmart</p>
                            <p className="text-[11px] text-slate-400">
                                Websites • Software • Automations
                            </p>
                        </div>
                    </div>

                    {/* Middle: Links */}
                    <nav className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-[11px] sm:text-xs text-slate-400">
                        <a href="#services" className="hover:text-slate-200 transition">
                            Services
                        </a>
                        <a href="#portfolio" className="hover:text-slate-200 transition">
                            Portfolio
                        </a>
                        <a href="#process" className="hover:text-slate-200 transition">
                            Process
                        </a>
                        <a href="#testimonials" className="hover:text-slate-200 transition">
                            Testimonials
                        </a>
                        <a href="#contact" className="hover:text-slate-200 transition">
                            Contact
                        </a>
                    </nav>

                    {/* Right: WhatsApp / copyright */}
                    <div className="flex flex-col items-center md:items-end gap-1 text-center md:text-right">
                        <a
                            href={WA_LINK}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 rounded-full border border-slate-700 px-3 py-1.5 text-[11px] font-medium text-slate-200 hover:bg-slate-900 transition"
                        >
                            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                            Chat on WhatsApp
                        </a>
                        <p className="text-[10px] text-slate-500">
                            © {new Date().getFullYear()} BuildSmart. All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

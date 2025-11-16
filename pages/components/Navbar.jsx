// components/Navbar.jsx
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Image from "next/image";

const WA_NUMBER = "+971553945441";
const WA_LINK = `https://wa.me/${WA_NUMBER.replace(/\D/g, "")}?text=${encodeURIComponent(
    "Hi! I want to get a website / software developed."
)}`;

const navLinks = [
    { href: "/", id: "home", label: "Home" },
    { href: "/#services", id: "services", label: "Services" },
    { href: "/#portfolio", id: "portfolio", label: "Portfolio" },
    { href: "/#process", id: "process", label: "Process" },
    { href: "/#testimonials", id: "testimonials", label: "Testimonials" },
    { href: "/#contact", id: "contact", label: "Contact" },
];

export default function Navbar() {
    const router = useRouter();
    const [open, setOpen] = useState(false);
    const [active, setActive] = useState("home");

    /* 👇 SCROLL LISTENER TO HIGHLIGHT ACTIVE SECTION */
    useEffect(() => {
        const handleScroll = () => {
            let current = "home";

            navLinks.forEach((item) => {
                if (item.id === "home") return;

                const section = document.getElementById(item.id);
                if (section) {
                    const rect = section.getBoundingClientRect();

                    if (rect.top <= 120 && rect.bottom >= 120) {
                        current = item.id;
                    }
                }
            });

            setActive(current);
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll(); // run once on load

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    /* Click on link */
    const handleNavClick = (href) => {
        setOpen(false);

        if (href.startsWith("/#")) {
            const id = href.split("#")[1];
            const el = document.getElementById(id);
            if (el) {
                el.scrollIntoView({ behavior: "smooth", block: "start" });
                setActive(id);
                return;
            }
        }

        router.push(href);
    };

    return (
        <header className="sticky top-0 z-40 backdrop-blur-xl bg-slate-950/80 border-b border-slate-800/80">
            <div className="h-[2px] w-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500" />

            <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 h-16 flex items-center justify-between">
                {/* LOGO */}

                <div className="flex items-center gap-1">
                    <div className="relative h-14 w-14">
                        <Image
                            src="/images/logo.png"
                            alt="BuildSmart logo"
                            fill
                            className="object-contain"
                            priority
                        />
                    </div>

                    <div className="leading-tight">
                        <p className="text-lg font-semibold tracking-tight text-white">
                            BuildSmart
                        </p>
                        <p className="text-[11px] text-slate-400">
                            Websites • Software • Automations
                        </p>
                    </div>
                </div>



                {/* DESKTOP NAV */}
                <nav className="hidden md:flex items-center gap-8 text-[0.95rem] font-medium">
                    {navLinks.map((link) => (
                        <button
                            key={link.href}
                            onClick={() => handleNavClick(link.href)}
                            className={`relative transition ${active === link.id
                                ? "text-white"
                                : "text-slate-300 hover:text-white"
                                }`}
                        >
                            {link.label}

                            {active === link.id && (
                                <span className="absolute -bottom-1 left-0 right-0 mx-auto h-[2px] w-6 rounded-full bg-gradient-to-r from-blue-400 to-purple-400"></span>
                            )}
                        </button>
                    ))}
                </nav>

                {/* WHATSAPP BUTTON */}
                <a
                    href={WA_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hidden sm:inline-flex md:flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs sm:text-sm font-semibold text-white border border-white/20 hover:bg-white/20 transition"
                >
                    <span className="h-2 w-2 rounded-full bg-emerald-400"></span>
                    WhatsApp
                </a>

                {/* MOBILE MENU BUTTON */}
                <button
                    onClick={() => setOpen((prev) => !prev)}
                    className="md:hidden inline-flex items-center justify-center rounded-lg border border-slate-700 bg-slate-900/80 px-3 py-2 text-slate-100"
                >
                    {open ? "✕" : "☰"}
                </button>
            </div>

            {/* MOBILE MENU */}
            {open && (
                <div className="md:hidden bg-slate-950/95 border-t border-slate-800 px-5 py-3">
                    <nav className="flex flex-col gap-2">
                        {navLinks.map((link) => (
                            <button
                                key={link.href}
                                onClick={() => handleNavClick(link.href)}
                                className={`w-full text-left text-[0.95rem] font-medium py-2 rounded-lg transition ${active === link.id
                                    ? "bg-slate-900 text-white"
                                    : "text-slate-300 hover:bg-slate-900 hover:text-white"
                                    }`}
                            >
                                {link.label}
                            </button>
                        ))}
                    </nav>

                    <a
                        href={WA_LINK}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-3 block w-full text-center rounded-full bg-emerald-500 px-4 py-2.5 text-sm font-semibold text-slate-900 shadow-md hover:brightness-110 transition"
                    >
                        💬 WhatsApp now
                    </a>
                </div>
            )}
        </header>
    );
}

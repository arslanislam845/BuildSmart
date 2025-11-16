// components/Hero.jsx
import { useEffect, useState } from "react";

const WA_NUMBER = "+971553945441";
const WA_LINK = `https://wa.me/${WA_NUMBER.replace(/\D/g, "")}?text=${encodeURIComponent(
    "Hi! I want to build a website or system for my business."
)}`;

// images that will rotate in the hero
const heroScreens = [
    { src: "/images/Hero1.png", alt: "BuildSmart preview" },
    { src: "/images/Hero2.png", alt: "Website preview" },
    { src: "/images/Hero3.png", alt: "Dashboard preview" },
];

export default function Hero() {
    const [activeIndex, setActiveIndex] = useState(0);

    // auto-rotate screenshots
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % heroScreens.length);
        }, 3500); // change slide every 3.5s

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="bg-slate-950 text-white">
            <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 pt-10 pb-16 lg:pt-14 lg:pb-20 grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">
                {/* LEFT CONTENT */}
                <div className="space-y-5">
                    <div className="inline-flex items-center gap-2 rounded-full border border-slate-700/70 bg-slate-900/70 px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-slate-300">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                        <span>BuildSmart Studio</span>
                    </div>

                    <h1 className="text-2.5xl sm:text-3xl lg:text-4xl font-bold leading-tight">
                        Modern{" "}
                        <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
                            websites & smart software
                        </span>{" "}
                        for growing businesses.
                    </h1>

                    <p className="text-sm sm:text-base text-slate-300 max-w-xl">
                        I build fast, clean and professional websites and custom web apps
                        that help businesses look trustworthy and work more efficiently.
                    </p>

                    {/* CTAs */}
                    <div className="flex flex-wrap items-center gap-3 pt-1">
                        <a
                            href={WA_LINK}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-500 px-6 py-2.5 text-sm font-semibold text-slate-900 shadow-md hover:brightness-110 transition"
                        >
                            💬 Chat on WhatsApp
                        </a>

                        <a
                            href="#services"
                            className="inline-flex items-center justify-center rounded-full border border-slate-700 px-5 py-2.5 text-sm font-medium text-slate-200 hover:bg-slate-900 transition"
                        >
                            See Services
                        </a>
                    </div>

                    <p className="text-[11px] text-slate-500 pt-1">
                        Fast • Secure • Fully responsive • Built with Next.js & React
                    </p>
                </div>

                {/* RIGHT VISUAL – AUTO CAROUSEL */}
                <div className="relative">
                    {/* glow behind card */}
                    <div className="pointer-events-none absolute -inset-8 -z-10 bg-gradient-to-tr from-blue-500/20 via-indigo-500/10 to-purple-500/30 blur-3xl" />

                    <div className="rounded-3xl border border-slate-800 bg-slate-900/80 shadow-[0_24px_60px_rgba(0,0,0,0.7)] p-4 sm:p-5 space-y-4">
                        {/* main carousel */}
                        <div className="relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 h-52 sm:h-64 lg:h-72">
                            {heroScreens.map((img, idx) => (
                                <div
                                    key={img.src}
                                    className={`absolute inset-0 transition-all duration-700 ease-out
                    ${idx === activeIndex
                                            ? "opacity-100 translate-y-0 scale-100"
                                            : "opacity-0 translate-y-3 scale-[1.02]"
                                        }`}
                                >
                                    <img
                                        src={img.src}
                                        alt={img.alt}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            ))}
                        </div>

                        {/* bottom info + dots */}
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-[11px] sm:text-xs text-slate-400">
                            <div>
                                <p className="font-medium text-slate-100">
                                    Real projects • AI-enhanced visuals
                                </p>
                                <p>Screens rotate automatically. Replace them anytime with your real work.</p>
                            </div>

                            <div className="flex items-center gap-3">
                                {/* dots */}
                                <div className="flex items-center gap-1.5">
                                    {heroScreens.map((_, idx) => (
                                        <button
                                            key={idx}
                                            onClick={() => setActiveIndex(idx)}
                                            className={`h-1.5 rounded-full transition-all duration-300 ${idx === activeIndex
                                                    ? "w-4 bg-blue-400"
                                                    : "w-1.5 bg-slate-600"
                                                }`}
                                            aria-label={`Go to slide ${idx + 1}`}
                                        />
                                    ))}
                                </div>

                                {/* responsive badge */}
                                <div className="flex items-center gap-2">
                                    <span className="h-2 w-2 rounded-full bg-emerald-400" />
                                    <span>Fully responsive</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

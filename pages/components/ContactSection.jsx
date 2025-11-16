// components/ContactSection.jsx

const WA_NUMBER = "+971553945441";
const WA_LINK = `https://wa.me/${WA_NUMBER.replace(/\D/g, "")}?text=${encodeURIComponent(
    "Hi! I want to build a website / software system for my business. Here are some details:"
)}`;

// TODO: replace with your real email
const CONTACT_EMAIL = "youremail@example.com";

export default function ContactSection() {
    return (
        <section
            id="contact"
            className="bg-slate-950 border-t border-slate-900/90"
        >
            <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-14 lg:py-16">
                <div className="grid gap-8 lg:grid-cols-[1.3fr_minmax(0,1fr)] items-center">
                    {/* LEFT: Text + bullets */}
                    <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
                            Contact
                        </p>

                        <h2 className="mt-2 text-2xl sm:text-3xl lg:text-[2rem] font-semibold text-white">
                            Let&apos;s build something for your business.
                        </h2>

                        <p className="mt-3 text-sm sm:text-base text-slate-300 max-w-xl">
                            Share a few lines about your business and what you need — a website,
                            store system, dashboard or custom software. I&apos;ll reply with a
                            simple plan and rough estimate.
                        </p>

                        <div className="mt-5 space-y-2 text-[12px] sm:text-xs text-slate-400">
                            <p className="font-semibold text-slate-300">
                                Helpful to mention:
                            </p>
                            <ul className="space-y-1">
                                <li className="flex gap-2">
                                    <span className="mt-[5px] h-1.5 w-1.5 rounded-full bg-blue-400" />
                                    <span>Your business type (shop, service, online store, etc.)</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="mt-[5px] h-1.5 w-1.5 rounded-full bg-blue-400" />
                                    <span>What you want (website, system, dashboard, automation)</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="mt-[5px] h-1.5 w-1.5 rounded-full bg-blue-400" />
                                    <span>Any example website / system you like (optional)</span>
                                </li>
                            </ul>
                        </div>

                        {/* CTAs */}
                        <div className="mt-6 flex flex-wrap items-center gap-3">
                            <a
                                href={WA_LINK}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-500 px-6 py-2.5 text-sm font-semibold text-slate-900 shadow-[0_18px_40px_rgba(16,185,129,0.4)] hover:brightness-110 transition"
                            >
                                💬 Chat on WhatsApp
                            </a>

                            <a
                                href={`mailto:${CONTACT_EMAIL}`}
                                className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-700 px-5 py-2.5 text-sm font-medium text-slate-200 hover:bg-slate-900 transition"
                            >
                                ✉️ Email me
                            </a>
                        </div>

                        <p className="mt-3 text-[11px] text-slate-500">
                            I usually reply within a few hours with follow-up questions or a
                            rough plan.
                        </p>
                    </div>

                    {/* RIGHT: Small card / accent */}
                    <div className="relative">
                        {/* background glow */}
                        <div className="pointer-events-none absolute -inset-6 rounded-3xl bg-gradient-to-br from-blue-500/20 via-indigo-500/15 to-purple-500/25 blur-3xl" />

                        <div className="relative rounded-3xl border border-slate-800 bg-slate-900/80 p-5 sm:p-6 shadow-[0_20px_60px_rgba(0,0,0,0.8)]">
                            <div className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-950/70 px-3 py-1 text-[11px] text-slate-300 mb-4">
                                <span className="h-2 w-2 rounded-full bg-emerald-400" />
                                <span>BuildSmart Studio</span>
                            </div>

                            <p className="text-sm font-semibold text-white mb-2">
                                Typical projects I handle:
                            </p>

                            <ul className="space-y-2 text-[12px] text-slate-300">
                                <li className="flex gap-2">
                                    <span className="mt-[5px] h-1.5 w-1.5 rounded-full bg-blue-400" />
                                    <span>Business websites & landing pages</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="mt-[5px] h-1.5 w-1.5 rounded-full bg-blue-400" />
                                    <span>Shop / store management systems & dashboards</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="mt-[5px] h-1.5 w-1.5 rounded-full bg-blue-400" />
                                    <span>E-commerce & product catalog setups</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="mt-[5px] h-1.5 w-1.5 rounded-full bg-blue-400" />
                                    <span>Automations between WhatsApp, forms & sheets</span>
                                </li>
                            </ul>

                            <p className="mt-4 text-[11px] text-slate-500">
                                Tech stack: Next.js • React • Node.js • MongoDB • Tailwind CSS
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

// components/Services.jsx

const services = [
    {
        title: "Business Websites",
        emoji: "🌐",
        short:
            "Modern, mobile-friendly websites that make your brand look professional.",
        points: [
            "Landing pages & company sites",
            "WhatsApp & contact integrations",
            "Fast, SEO-ready, fully responsive",
        ],
    },
    {
        title: "Custom Software",
        emoji: "🧩",
        short: "Web apps built exactly for your workflow & daily business needs.",
        points: [
            "Admin dashboards & portals",
            "Store, sales & staff tracking",
            "Role-based access control",
        ],
    },
    {
        title: "E-commerce & Online Stores",
        emoji: "🛒",
        short: "Easy-to-manage, clean online stores that convert customers.",
        points: [
            "Product catalog, filters & search",
            "Cart + checkout integration",
            "Order & customer management",
        ],
    },
    {
        title: "Automations & Integrations",
        emoji: "⚙️",
        short: "Connect systems & automate repeated tasks automatically.",
        points: [
            "WhatsApp & email automation",
            "Google Sheets & API syncing",
            "Auto reports & reminders",
        ],
    },
    {
        title: "UI/UX & AI-Enhanced Designs",
        emoji: "🎨",
        short: "Clean, modern user interfaces with AI-enhanced visuals.",
        points: [
            "Modern landing page layouts",
            "Design systems for consistent UI",
            "AI hero & section images",
        ],
    },
];

export default function Services() {
    return (
        <section
            id="services"
            className="bg-slate-950 border-t border-slate-900/90"
        >
            <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-14">
                {/* Heading */}
                <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 mb-12">
                    <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
                            Services
                        </p>

                        <h2 className="mt-2 text-2xl sm:text-3xl font-semibold text-white">
                            End-to-end digital solutions for your business
                        </h2>

                        <p className="mt-2 text-sm text-slate-400 max-w-xl">
                            Everything from website design to full software systems, built
                            custom for your business — clean, functional and easy to use.
                        </p>
                    </div>

                    <div className="inline-flex items-center gap-2 rounded-full border border-slate-800 bg-slate-900/70 px-3 py-1 text-[11px] text-slate-300">
                        <span className="h-2 w-2 rounded-full bg-emerald-400" />
                        Custom Work • No Templates • Fully Responsive
                    </div>
                </div>

                {/* Service Cards */}
                <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
                    {services.map((s) => (
                        <div
                            key={s.title}
                            className="
                group relative rounded-2xl 
                border border-slate-800 
                bg-slate-900/80 
                p-5 
                shadow-[0_16px_45px_rgba(0,0,0,0.6)]
                transition-all duration-300 ease-out
                hover:-translate-y-1 
                hover:shadow-[0_24px_60px_rgba(0,0,0,0.85)]
                hover:border-slate-700
              "
                        >
                            {/* gradient overlay on hover */}
                            <div
                                className="
                  absolute inset-0 rounded-2xl 
                  opacity-0 group-hover:opacity-100 
                  transition-opacity duration-300 pointer-events-none 
                  bg-gradient-to-br 
                  from-blue-500/10 via-indigo-500/10 to-purple-500/10
                "
                            />

                            <div className="flex items-center gap-3 mb-4 relative z-10">
                                <div className="h-10 w-10 rounded-xl bg-slate-950 flex items-center justify-center text-lg shadow-inner">
                                    {s.emoji}
                                </div>

                                <h3 className="text-base font-semibold text-white">
                                    {s.title}
                                </h3>
                            </div>

                            <p className="text-sm text-slate-300 mb-4 relative z-10">
                                {s.short}
                            </p>

                            <ul className="space-y-1.5 text-[12px] text-slate-400 relative z-10">
                                {s.points.map((p) => (
                                    <li key={p} className="flex items-start gap-2">
                                        <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-blue-400" />
                                        {p}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

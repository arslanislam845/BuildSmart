// components/Testimonials.jsx

const testimonials = [
    {
        name: "Ahmed R.",
        role: "Owner, Mobile Shop",
        text: "He built a full system for my daily sales, stock and drivers. Now everything is digital and I can quickly see my daily profit.",
        highlight: "Replaced messy registers and spreadsheets with one clean dashboard.",
    },
    {
        name: "Sara K.",
        role: "Founder, Online Store",
        text: "The new website looks clean and modern. Customers understand my products better and contact me directly on WhatsApp.",
        highlight: "More WhatsApp inquiries and more trust from new customers.",
    },
    {
        name: "Imran A.",
        role: "Service Business Owner",
        text: "The custom web app saves me a lot of time. I can check work, payments and reports without calling my staff again and again.",
        highlight: "Less manual follow-up and a clearer overview of daily work.",
    },
];

export default function Testimonials() {
    return (
        <section
            id="testimonials"
            className="bg-slate-950 border-t border-slate-900/90"
        >
            <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-14">
                {/* Heading */}
                <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 mb-10">
                    <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
                            Testimonials
                        </p>
                        <h2 className="mt-2 text-2xl sm:text-3xl font-semibold text-white">
                            What clients say about my work
                        </h2>
                        <p className="mt-2 text-sm text-slate-400 max-w-xl">
                            Feedback from real business owners who wanted simple, reliable systems
                            that actually support their daily work.
                        </p>
                    </div>

                    <p className="text-[11px] sm:text-xs text-slate-500">
                        Clear communication • Practical solutions • Long-term support
                    </p>
                </div>

                {/* Testimonials grid */}
                <div className="grid gap-5 md:grid-cols-3">
                    {testimonials.map((t) => (
                        <article
                            key={t.name}
                            className="
                group relative overflow-hidden 
                rounded-2xl border border-slate-800 
                bg-slate-900/85 
                p-5
                shadow-[0_16px_40px_rgba(0,0,0,0.55)]
                transition-all duration-400 ease-out
                hover:-translate-y-1 hover:shadow-[0_22px_55px_rgba(0,0,0,0.75)]
                hover:border-slate-700
              "
                        >
                            {/* soft outer glow */}
                            <div
                                className="
                  pointer-events-none absolute -inset-6 rounded-3xl
                  bg-gradient-to-br from-blue-500/12 via-indigo-500/10 to-purple-500/12
                  opacity-0 group-hover:opacity-100
                  blur-2xl transition-opacity duration-400
                "
                            />

                            {/* subtle inner sheen */}
                            <div
                                className="
                  pointer-events-none absolute inset-0
                  bg-gradient-to-br from-white/4 via-transparent to-white/0
                  opacity-0 group-hover:opacity-30
                  transition-opacity duration-400
                "
                            />

                            {/* content wrapper to stay above overlays */}
                            <div className="relative z-10 flex flex-col h-full">
                                {/* top row */}
                                <div className="mb-4 flex items-start justify-between">
                                    <div
                                        className="
                      h-9 w-9 rounded-xl 
                      bg-slate-950/90 border border-slate-700 
                      flex items-center justify-center 
                      text-lg text-slate-200
                      shadow-inner
                      transition-transform duration-400
                      group-hover:-translate-y-0.5 group-hover:scale-105
                    "
                                    >
                                        “
                                    </div>

                                    <div className="flex flex-col items-end gap-1">
                                        <div className="text-[10px] text-amber-300">
                                            ★★★★★
                                        </div>
                                        <div
                                            className="
                        h-[2px] w-10 rounded-full bg-slate-700
                        group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:via-indigo-400 group-hover:to-purple-400
                        transition-all duration-400
                      "
                                        />
                                    </div>
                                </div>

                                {/* main quote */}
                                <p className="text-sm text-slate-100 mb-3 leading-relaxed">
                                    {t.text}
                                </p>

                                {/* highlight */}
                                <p className="text-[11px] text-slate-400 mb-4">
                                    {t.highlight}
                                </p>

                                {/* spacer + name */}
                                <div className="mt-auto pt-2 border-t border-slate-800/80">
                                    <div className="pt-3 flex flex-col">
                                        <span className="text-sm font-semibold text-white">
                                            {t.name}
                                        </span>
                                        <span className="text-[11px] text-slate-400">
                                            {t.role}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}

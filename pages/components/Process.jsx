// components/Process.jsx

const steps = [
    {
        step: "01",
        title: "Discovery & Requirements",
        text: "You share your idea, problems and examples (if you have any). I ask a few questions and suggest the best structure.",
        hint: "Call, voice note or chat — whatever is easier for you.",
    },
    {
        step: "02",
        title: "Plan, Design & Demo",
        text: "I create a simple plan, screens and flows. You review and we adjust before full development starts.",
        hint: "You always see the direction before we go deep.",
    },
    {
        step: "03",
        title: "Development & Testing",
        text: "I build the website / system using modern tools, then test it on mobile, tablet and desktop.",
        hint: "Clean code, clear structure, no over-complicated tech.",
    },
    {
        step: "04",
        title: "Launch & Ongoing Support",
        text: "We deploy it live and I help you with basic training, small fixes and future improvements.",
        hint: "You’re not left alone after delivery.",
    },
];

export default function Process() {
    return (
        <section
            id="process"
            className="bg-slate-950 border-t border-slate-900/90"
        >
            <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-14">
                {/* Heading */}
                <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 mb-10">
                    <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
                            Process
                        </p>
                        <h2 className="mt-2 text-2xl sm:text-3xl font-semibold text-white">
                            How I work with you
                        </h2>
                        <p className="mt-2 text-sm text-slate-400 max-w-xl">
                            Simple steps, no confusion. You always know what&apos;s happening,
                            what&apos;s next and what you&apos;re paying for.
                        </p>
                    </div>

                    <p className="text-[11px] sm:text-xs text-slate-500">
                        Clear communication • Small updates • Real progress
                    </p>
                </div>

                {/* Timeline / steps */}
                <div className="relative">
                    {/* center line for large screens */}
                    <div className="hidden lg:block absolute left-1/2 top-4 bottom-4 w-px bg-slate-800/80 pointer-events-none" />

                    <div className="space-y-6">
                        {steps.map((s, index) => {
                            const isLeft = index % 2 === 0; // alternate sides on lg+
                            return (
                                <div
                                    key={s.step}
                                    className={`
                    flex flex-col lg:flex-row 
                    ${isLeft ? "lg:justify-start" : "lg:justify-end"}
                  `}
                                >
                                    <div
                                        className={`
                      lg:w-1/2 
                      ${isLeft ? "lg:pr-8" : "lg:pl-8"}
                    `}
                                    >
                                        <div
                                            className="
                        group relative rounded-2xl border border-slate-800 
                        bg-slate-900/80 p-4 sm:p-5 
                        shadow-[0_16px_40px_rgba(0,0,0,0.6)]
                        hover:-translate-y-1 hover:shadow-[0_22px_55px_rgba(0,0,0,0.85)]
                        transition-all duration-300 ease-out
                      "
                                        >
                                            {/* gradient overlay */}
                                            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none bg-gradient-to-br from-blue-500/10 via-indigo-500/10 to-purple-500/10" />

                                            {/* step circle (for lg timeline) */}
                                            <div className="hidden lg:flex absolute -left-[1.15rem] top-5 h-5 w-5 items-center justify-center rounded-full bg-slate-950 border border-slate-700 shadow-sm">
                                                <div className="h-2.5 w-2.5 rounded-full bg-blue-400" />
                                            </div>

                                            {/* mobile / general header */}
                                            <div className="flex items-center gap-3 mb-3 relative z-10">
                                                <div className="h-8 w-8 rounded-xl bg-slate-950 flex items-center justify-center text-[11px] font-semibold text-slate-300 border border-slate-700">
                                                    {s.step}
                                                </div>
                                                <h3 className="text-sm sm:text-base font-semibold text-white">
                                                    {s.title}
                                                </h3>
                                            </div>

                                            <p className="text-xs sm:text-[13px] text-slate-300 mb-2 relative z-10">
                                                {s.text}
                                            </p>

                                            <p className="text-[11px] sm:text-xs text-slate-400 relative z-10">
                                                {s.hint}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}

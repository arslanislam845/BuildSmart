// components/Portfolio.jsx

const projects = [
    {
        title: "Mobile Shop Management System",
        type: "Custom Software",
        tag: "Dashboard • Billing • Stock",
        desc: "Complete daily system for sales, stock, drivers, and credits — fully custom software.",
        image: "/images/portfolio-mobile-shop.jpg",
    },
    {
        title: "Store Billing Dashboard",
        type: "Web App",
        tag: "Analytics • Reports",
        desc: "Clean dashboard with income, expenses, invoices and reporting tools.",
        image: "/images/portfolio-dashboard.jpg",
    },
    {
        title: "E-commerce Online Store",
        type: "E-commerce",
        tag: "Products • Checkout",
        desc: "Modern product listing, filters and checkout-ready layout for online stores.",
        image: "/images/portfolio-ecommerce.jpg",
    },
    {
        title: "Business Website",
        type: "Website",
        tag: "Landing • Company Info",
        desc: "Simple, professional company site with WhatsApp/contact CTA.",
        image: "/images/portfolio-business-site.jpg",
    },
    {
        title: "Delivery / Logistics Tracking App",
        type: "Custom Software",
        tag: "Drivers • Routes • Deliveries",
        desc: "Tracking app for deliveries, routes, driver performance and daily reports — optimized for small businesses.",
        image: "/images/portfolio-logistics.jpg",
    },
];


const WA_NUMBER = "+971553945441";
const WA_LINK = `https://wa.me/${WA_NUMBER.replace(/\D/g, "")}?text=${encodeURIComponent(
    "Hi! I saw your portfolio and want to discuss a project."
)}`;

export default function Portfolio() {
    return (
        <section id="portfolio" className="bg-slate-950 border-t border-slate-900/90">
            <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-14">

                {/* Header */}
                <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 mb-12">
                    <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
                            Portfolio
                        </p>

                        <h2 className="mt-2 text-2xl sm:text-3xl font-semibold text-white">
                            Recent Work & Project Styles
                        </h2>

                        <p className="mt-2 text-sm text-slate-400 max-w-xl">
                            Shop systems, dashboards, websites and e-commerce projects — built
                            clean, fast and custom to each business.
                        </p>
                    </div>

                    <a
                        href={WA_LINK}
                        target="_blank"
                        className="inline-flex items-center gap-2 rounded-full bg-emerald-500 px-4 py-2 text-xs sm:text-sm font-semibold text-slate-900 shadow-md hover:brightness-110 transition"
                    >
                        💬 Send your idea
                    </a>
                </div>

                {/* GRID START */}
                <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                    {projects.map((p) => (
                        <article
                            key={p.title}
                            className="
                group relative rounded-2xl overflow-hidden 
                border border-slate-800 
                bg-slate-900/80
                shadow-[0_16px_40px_rgba(0,0,0,0.65)]
                hover:-translate-y-2
                transition-all duration-500 ease-out
              "
                        >

                            {/* hover glow */}
                            <div
                                className="
                  absolute inset-0 opacity-0 group-hover:opacity-100
                  transition-opacity duration-700 
                  pointer-events-none
                  bg-gradient-to-br from-blue-600/20 via-indigo-600/20 to-purple-600/20 
                  blur-xl
                "
                            />

                            {/* gradient border on hover */}
                            <div
                                className="
                  absolute inset-0 rounded-2xl border border-transparent 
                  group-hover:border-slate-700/60
                  transition-all duration-500
                "
                            />

                            {/* image */}
                            <div className="relative h-44 sm:h-48 overflow-hidden">
                                <img
                                    src={p.image}
                                    alt={p.title}
                                    className="
                    w-full h-full object-cover
                    transition-all duration-500
                    group-hover:scale-[1.06]
                    group-hover:brightness-[1.08]
                  "
                                />

                                {/* shine sweep */}
                                <div
                                    className="
                    absolute inset-0 bg-gradient-to-tr 
                    from-white/0 via-white/10 to-white/0
                    translate-x-[-100%]
                    group-hover:translate-x-[100%]
                    transition-transform duration-[1100ms]
                  "
                                />

                                {/* corner tag */}
                                <div className="absolute left-3 top-3 rounded-full bg-slate-950/80 backdrop-blur-md border border-slate-700 px-2 py-0.5 text-[10px] text-slate-200">
                                    {p.type}
                                </div>
                            </div>

                            {/* content */}
                            <div className="relative p-4 sm:p-5">
                                <h3 className="text-sm sm:text-base font-semibold text-white mb-1">
                                    {p.title}
                                </h3>

                                <p className="text-[11px] uppercase tracking-[0.18em] text-slate-500 mb-2">
                                    {p.tag}
                                </p>

                                <p className="text-xs sm:text-[13px] text-slate-300 mb-4">
                                    {p.desc}
                                </p>

                                <div className="flex items-center justify-between text-[11px] sm:text-xs text-slate-400">
                                    <span>Tech: Next.js • React • Node</span>

                                    <span className="inline-flex items-center gap-1 text-blue-300 group-hover:text-blue-200 transition">
                                        <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
                                        View
                                    </span>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>

            </div>
        </section>
    );
}

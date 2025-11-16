import Head from "next/head";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Process from "./components/Process";
import Testimonials from "./components/Testimonials";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

// const WA_NUMBER = "+971553945441";
// const WA_LINK = `https://wa.me/${WA_NUMBER.replace(/\D/g, "")}?text=${encodeURIComponent(
//   "Hi! I saw your BuildSmart website and I want a quote for a website / software project."
// )}`;

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Head>
        <title>BuildSmart — Websites & Software for Modern Businesses</title>
        <meta
          name="description"
          content="BuildSmart helps businesses get modern websites, web apps and management systems — fast, clean and mobile friendly."
        />
      </Head>

      {/* NAVBAR */}
      <div className="min-h-screen bg-slate-950 text-white">
        <Navbar />

        <Hero />

        <Services />

        <Portfolio />

        <Process />

        <Testimonials />

        <ContactSection />


        <Footer />

        {/* Rest of your sections will go here */}
        {/* Hero, Services, Portfolio etc. */}
      </div>


    </div>
  );
}

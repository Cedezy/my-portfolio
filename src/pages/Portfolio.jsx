import React, { useState, useEffect } from "react";
import Sidebar from "../components/layouts/Sidebar";
import Profile from "../components/layouts/Profile";
import StatsRow from "../components/layouts/StatsRow";
import TechStack from "../components/layouts/TechStack";
import Projects from "../components/layouts/Projects";
import Experience from "../components/layouts/Experience";
import Certifications from "../components/layouts/Certifications";
import FooterStrip from "../components/layouts/FooterStrip.jsx";
import Activity from "../components/layouts/Activity.jsx";

const DotField = () => (
    <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 -z-10"
        style={{
        backgroundImage: "radial-gradient(#D8D7D3 1px, transparent 1px)",
        backgroundSize: "22px 22px",
        backgroundPosition: "10px 10px",
        maskImage:"radial-gradient(ellipse 90% 70% at 78% 20%, black 10%, transparent 65%), radial-gradient(ellipse 60% 50% at 95% 90%, black 0%, transparent 60%)",
        WebkitMaskImage:
            "radial-gradient(ellipse 90% 70% at 78% 20%, black 10%, transparent 65%), radial-gradient(ellipse 60% 50% at 95% 90%, black 0%, transparent 60%)",
        }}
    />
);

const Portfolio = () => {
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        document.documentElement.style.scrollBehavior = "smooth";
        return () => {
        document.documentElement.style.scrollBehavior = "";
        };
    }, []);

    return (
        <div className="min-h-screen bg-[#FAFAFA] text-[#0A0A0A] antialiased selection:bg-[#3452FF] selection:text-white">
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@300;400;500;600&display=swap');
                * { font-family: 'JetBrains Mono', monospace; }
                ::selection { background: #3452FF; color: white; }
            `}</style>

            <DotField />
            <Sidebar
                mobileOpen={mobileOpen}
                setMobileOpen={setMobileOpen}
            />

             <main className="relative z-10">
                <div className="max-w-3xl mx-auto px-4 sm:px-10 pt-28 lg:pt-20 pb-10">
                    <Profile />
                    <StatsRow />
                    <TechStack />
                    <Projects />
                    <Experience />
                    <Certifications />
                    <Activity />
                    <FooterStrip />
                </div>
            </main>
        </div>
    );
}

export default Portfolio
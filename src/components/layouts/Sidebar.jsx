import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  Github,
  Linkedin,
  Instagram,
  Mail,
  ArrowUpRight,
  ArrowRight,
  Sun,
  Moon,
  Monitor,
  Volume2,
  VolumeX,
  MessageSquare,
  Quote,
  BadgeCheck,
  Apple,
  PlayCircle,
} from "lucide-react";

const NAV_TOP = [
    { label: "Journal", href: "#journal" },
    { label: "Playground", href: "#playground" },
    { label: "Toolkit", href: "#toolkit" },
];

const NAV_SECTIONS = [
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Stack", href: "#stack" },
    { label: "Experience", href: "#experience" },
    { label: "Activity", href: "#activity" },
];

const scrollToId = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
};

const Sidebar = ({ mobileOpen, setMobileOpen }) => {

    const content = (
        <motion.nav
            initial={{ y: -25, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="fixed top-5 left-1/2 -translate-x-1/2 z-50 hidden lg:flex items-center gap-2
            rounded-full
            border border-white/60
            bg-white/75
            backdrop-blur-2xl
            px-3 py-2
            shadow-[0_8px_30px_rgba(0,0,0,0.08)]"
        >
            {/* Logo */}
            <a
            href="#top"
            onClick={(e) => {
                e.preventDefault();
                scrollToId("#top");
            }}
            className="group flex items-center gap-3 rounded-full px-2 py-1"
            >
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#3452FF] text-white font-semibold shadow-lg transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110">
                Z
            </div>

            <div className="flex flex-col leading-none">
                <span
                className="text-[13px] font-semibold tracking-wide"
                style={{ fontFamily: "Poppins, sans-serif" }}
                >
                Zydece
                </span>

                <span
                className="text-[10px] text-[#777]"
                style={{ fontFamily: "Poppins, sans-serif" }}
                >
                Portfolio
                </span>
            </div>
            </a>

            <div className="mx-2 h-6 w-px bg-[#E5E4E1]" />

            {NAV_SECTIONS.map((item) => (
            <a
                key={item.href}
                href={item.href}
                onClick={(e) => {
                e.preventDefault();
                scrollToId(item.href);
                }}
                className="group relative overflow-hidden rounded-full px-4 py-2"
            >
                <span
                className="absolute inset-0 scale-0 rounded-full bg-black transition-transform duration-300 group-hover:scale-100"
                />

                <span
                className="relative z-10 text-xs font-medium uppercase tracking-wider text-[#666] transition-colors duration-300 group-hover:text-white"
                style={{ fontFamily: "Poppins, sans-serif" }}
                >
                {item.label}
                </span>
            </a>
            ))}

            <div className="mx-1 h-6 w-px bg-[#E5E4E1]" />

            <div
            className="flex items-center gap-2 rounded-full bg-black px-4 py-2"
            style={{ fontFamily: "Poppins, sans-serif" }}
            >
            <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-[11px] font-medium text-white">
                Available
            </span>
            </div>
        </motion.nav>
    );

    return (
        <>
            <aside>
                {content}
            </aside>

           <div className="lg:hidden fixed top-4 left-4 right-4 z-50">
                <div className="flex items-center justify-between rounded-full border border-white/60 bg-white/80 backdrop-blur-2xl px-5 py-3 shadow-lg">

                    <div className="flex items-center gap-3">
                    <div className="h-9 w-9 rounded-full bg-[#3452FF] text-white flex items-center justify-center font-semibold">
                        Z
                    </div>

                    <div>
                        <p className="text-sm font-semibold">Zydece</p>
                        <p className="text-[11px] text-[#777]">Portfolio</p>
                    </div>
                    </div>

                    <button
                    onClick={() => setMobileOpen(!mobileOpen)}
                    className="rounded-full bg-[#F5F5F5] p-2 transition hover:bg-black hover:text-white"
                    >
                    {mobileOpen ? <X size={18} /> : <Menu size={18} />}
                    </button>

                </div>
            </div>

            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -15, scale: 0.96 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -15, scale: 0.96 }}
                        transition={{ duration: 0.25 }}
                        className="lg:hidden fixed top-24 left-4 right-4 z-40 overflow-hidden rounded-3xl border border-[#E5E4E1] bg-white/95 backdrop-blur-2xl shadow-2xl"
                    >
                    <div className="p-3">
                        {NAV_SECTIONS.map((item) => (
                            <a
                                key={item.href}
                                href={item.href}
                                onClick={(e) => {
                                e.preventDefault();
                                scrollToId(item.href);
                                setMobileOpen(false);
                                }}
                                className="flex items-center justify-between rounded-2xl px-5 py-4 text-xs font-medium transition hover:bg-[#F5F5F5]"
                            >
                                {item.label}

                                <ArrowRight
                                size={16}
                                className="text-[#999]"
                                />
                            </a>
                        ))}
                    </div>

                    <div className="border-t border-[#E5E4E1] px-5 py-4">
                        <div className="flex items-center gap-2 text-xs">
                        <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse"></span>
                            Available for freelance
                        </div>
                    </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Sidebar
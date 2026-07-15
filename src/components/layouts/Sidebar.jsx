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
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
];

const scrollToId = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
};

const Sidebar = ({ mobileOpen, setMobileOpen }) => {

    const content = (
       <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 hidden lg:flex items-center gap-2 rounded-full border border-[#E5E4E1] bg-[#FAFAFA]/80 backdrop-blur-xl px-2 py-2 shadow-sm">
            <a
                href="#top"
                onClick={(e) => {
                e.preventDefault();
                scrollToId("#top");
                }}
                className="px-4 py-2 rounded-full text-xs font-medium text-[#0A0A0A] hover:bg-black hover:text-white transition-all" style={{ fontFamily: "Poppins, sans-serif" }}
            >
                HOME
            </a>

            {NAV_SECTIONS.map((item) => (
                <a
                    key={item.href}
                    href={item.href}
                    onClick={(e) => {
                        e.preventDefault();
                        scrollToId(item.href);
                    }}
                        className="px-4 py-2 rounded-full text-xs uppercase font-medium tracking-wider text-[#666] hover:bg-black hover:text-white transition-all duration-300 cursor-pointer"
                        style={{ fontFamily: "Poppins, sans-serif" }}
                    >
                    {item.label}    
                </a>
            ))}

            <a
                href="#contact"
                className="ml-2 rounded-full bg-black px-5 py-2 text-sm font-medium text-white hover:bg-neutral-800 transition"
            >
                Contact
            </a>
        </nav>
    );

    return (
        <>
            <aside>
                {content}
            </aside>

            <div className="lg:hidden fixed top-4 left-4 right-4 z-50">
                <div className="flex items-center justify-between rounded-full border border-[#E5E4E1] bg-[#FAFAFA]/80 backdrop-blur-xl px-5 py-3 shadow-sm">
                    <span className="font-medium">Abcede Acalal</span>

                    <button onClick={() => setMobileOpen(!mobileOpen)}>
                    {mobileOpen ? <X size={20} /> : <Menu size={20} />}
                    </button>
                </div>
            </div>

            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="lg:hidden fixed top-20 left-4 right-4 z-40 rounded-3xl border border-[#E5E4E1] bg-[#FAFAFA]/95 backdrop-blur-xl p-6 shadow-xl"
                    >
                    <div className="flex flex-col gap-2">
                        {NAV_SECTIONS.map((item) => (
                        <a
                            key={item.href}
                            href={item.href}
                            onClick={(e) => {
                            e.preventDefault();
                            scrollToId(item.href);
                            setMobileOpen(false);
                            }}
                            className="rounded-xl px-4 py-3 hover:bg-neutral-100 transition"
                        >
                            {item.label}
                        </a>
                        ))}
                    </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Sidebar
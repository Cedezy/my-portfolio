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

const STATS = [
    { value: "10+", label: "Projects", href: "#" },
    { value: "5+", label: "CLIENTS", href: "#" },
    { value: "4TH", label: "year bsit", href: "#" },
    { value: "100%", label: "Commitment", href: "#" },
];

const Reveal = ({ children, delay = 0, y = 18, className = "" }) => (
    <motion.div
        className={className}
        initial={{ opacity: 0, y }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
    >
        {children}
    </motion.div>
);

const StatsRow = () => (
    <Reveal delay={0.05}>
        <div className="mt-14 grid grid-cols-2 sm:grid-cols-4 border-y border-[#E5E4E1]">
            {STATS.map((s, index) => (
                <div
                    key={s.label}
                    className={`
                        px-6 py-6
                        border-b border-[#E5E4E1]
                        sm:border-b-0
                        ${index % 2 === 0 ? "border-r border-[#E5E4E1] sm:border-r" : "sm:border-r"}
                        ${index === STATS.length - 1 ? "sm:border-r-0" : ""}
                        ${index === STATS.length - 2 ? "border-b-0 sm:border-b-0" : ""}
                        ${index === STATS.length - 1 ? "border-b-0" : ""}
                    `}
                    >
                    <div className="flex items-center gap-1.5 text-xl text-[#0A0A0A]">
                        {s.value}
                        <ArrowUpRight size={13} className="text-[#8a8a8a]" />
                    </div>

                    <div className="mt-1 text-[11px] uppercase tracking-[0.08em] text-[#8a8a8a]">
                        {s.label}
                    </div>
                </div>
            ))}
        </div>
    </Reveal>
);

export default StatsRow
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

const CERTIFICATIONS = [
    { org: "Google", title: "Professional Cloud Developer", mark: "G" },
    { org: "AWS", title: "Solutions Architect — Associate", mark: "A" },
    { org: "Neo4j", title: "Graph Data Science Certified", mark: "N" },
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

const SectionHeader = ({ index, label, action }) => (
    <div className="flex items-baseline justify-between mb-8">
        <span className="text-[13px] text-[#8a8a8a]">
            {index} — {label}
        </span>
        {action && (
            <a
                href={action.href}
                className="text-[12px] text-[#8a8a8a] hover:text-[#0A0A0A] transition-colors inline-flex items-center gap-1"
            >
                {action.label} <ArrowRight size={11} />
            </a>
        )}
    </div>
);

const Certifications = () => (
    <section id="certifications" className="mt-24">
        <Reveal>
        <SectionHeader index="04" label="certifications" action={{ label: "all certifications", href: "#" }} />
        </Reveal>
        <div className="grid sm:grid-cols-3 gap-4">
        {CERTIFICATIONS.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.06}>
            <div className="rounded-2xl border border-[#E5E4E1] bg-[#FDFDFC] px-6 py-6 h-full flex flex-col">
                <div className="h-9 w-9 rounded-lg bg-[#0A0A0A] text-white flex items-center justify-center text-[13px]">
                {c.mark}
                </div>
                <h3 className="mt-4 text-[14.5px] text-[#0A0A0A] leading-snug">{c.title}</h3>
                <p className="mt-1 text-[11.5px] uppercase tracking-[0.06em] text-[#8a8a8a]">{c.org}</p>
                <a
                href="#"
                className="mt-5 inline-flex items-center gap-1 text-[12px] text-[#3452FF] hover:underline"
                >
                <BadgeCheck size={13} /> Verify
                </a>
            </div>
            </Reveal>
        ))}
        </div>
    </section>
);

export default Certifications
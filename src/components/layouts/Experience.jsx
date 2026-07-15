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

const EXPERIENCE = [
    {
        year: "2025 – Present",
        title: "Freelance MERN Stack Developer",
        org: "Self-Employed",
        description:
        "Building full-stack web applications for capstone and client projects using React, Node.js, Express, and MongoDB.",
    },
    {
        year: "Aug 2026 (Upcoming)",
        title: "IT Intern (OJT)",
        org: "Artifex Computer Center and General Merchandise",
        description:
        "Upcoming internship focused on computer troubleshooting, networking, technical support, and IT operations.",
    },
    {
        year: "2022 – Present",
        title: "BS Information Technology",
        org: "Southern Mindanao Colleges",
        description:
        "4th-year student specializing in web development, databases, networking, and software engineering.",
    },
    {
        year: "2020 – 2022",
        title: "ICT Student",
        org: "Senior High School",
        description:
        "Studied programming fundamentals, networking, computer hardware, and office productivity tools.",
    },
];

const Experience = () => (
    <section id="experience" className="mt-16">
        <Reveal>
            <SectionHeader index="03" label="experience" action={{ label: "full history", href: "#" }} />
        </Reveal>
        <div className="divide-y divide-[#E5E4E1] border-t border-b border-[#E5E4E1]">
            {EXPERIENCE.map((item, i) => (
                <Reveal key={item.title} delay={i * 0.05}>
                    <div className="flex justify-between gap-8 py-6">
                        <div className="flex gap-6">
                            <span className="w-28 shrink-0 text-[13px] text-[#8a8a8a]">
                                {item.year}
                            </span>
                            <div>
                                <h3 className="text-[15px] font-medium text-[#0A0A0A]">
                                    {item.title}
                                </h3>

                                <p className="text-[13px] text-[#8a8a8a] mt-1">
                                    {item.org}
                                </p>

                                <p className="mt-3 max-w-xl text-[13px] leading-6 text-[#666]">
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    </div>
                </Reveal>
            ))}
        </div>
    </section>
);

export default Experience
import { motion, AnimatePresence } from "framer-motion";
import {
    Menu,
    X,
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
import {
  SiGithub,
  SiInstagram,
  SiGmail,
} from "react-icons/si";
import {
  Link,
  Link2,
  ExternalLink,
  Globe,
  Share2,
  Cable,
} from "lucide-react";

import { FaLinkedin } from "react-icons/fa";

import profile from '../../assets/profile.jpg'

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

const Profile = () => (
    <div id="top" className="grid sm:grid-cols-[220px_1fr] gap-8 sm:gap-12 items-start md:mt-6">
        <Reveal>
            <div className="w-full max-w-[220px] aspect-square rounded-2xl overflow-hidden border border-[#E5E4E1]">
                <img
                    src={profile}
                    alt="Portrait of Mara Voss"
                    className="w-full h-full object-cover grayscale contrast-100"
                />
            </div>
        </Reveal>

        <Reveal delay={0.1}>
            <h1 className="text-xl sm:text-3xl text-[#0A0A0A] tracking-tight">ACALAL, ABCEDE S.</h1>
            <p className="mt-2 text-xs md:text-sm leading-relaxed text-[#4a4a4a] max-w-md">
                I'm an aspiring full-stack developer. I build modern web applications and enjoy bringing ideas to life through code.
            </p>
            <p className="mt-4 text-xs md:text-sm leading-relaxed text-[#4a4a4a] max-w-md">
                Currently studying Information Technology while continuously learning and building real-world projects.
            </p>

            <div className="mt-6 flex flex-col gap-2">
                <span className="text-[10px] flex items-center gap-2">
                    <Link size={12} />
                    CONNECT
                </span>
                 <div className="flex items-center gap-2">
                    {[
                        {
                            href: "https://github.com/Cedezy",
                            icon: SiGithub,
                            label: "GitHub",
                        },
                        {
                            href: "https://www.linkedin.com/in/abcede-sulani-acalal-2b335a332/",
                            icon: FaLinkedin,
                            label: "LinkedIn",
                        },
                        {
                            href: "https://www.instagram.com/abcedesulani/",
                            icon: SiInstagram,
                            label: "Instagram",
                        },
                        {
                            href: "mailto:abcedeacalal18@gmail.com",
                            icon: SiGmail,
                            label: "Email",
                        },
                    ].map(({ href, icon: Icon, label }) => (
                        <a
                            key={label}
                            href={href}
                            target={href.startsWith("http") ? "_blank" : undefined}
                            rel="noreferrer"
                            aria-label={label}
                            className="group flex h-8 w-8 items-center justify-center rounded-full border border-[#E7E7E7] text-[#6B6B6B] transition-all duration-300 hover:-translate-y-1 "
                        >
                        <Icon size={14} className="transition-transform duration-300 group-hover:scale-110" />
                        </a>
                    ))}
                </div>
            </div>
        </Reveal>
    </div>
);

export default Profile
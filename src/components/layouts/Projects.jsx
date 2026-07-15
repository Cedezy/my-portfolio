import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, Github, ExternalLink, Lock } from "lucide-react";


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

const PROJECTS = [
    {
        index: "01",
        category: "Booking Platform",
        featured: true,
        name: "Elyserah Hub",
        description:
        "A full-stack ESL booking platform with role-based authentication, scheduling, payments, and an admin dashboard.",
        highlight: "Handles scheduling & payments for three user roles in one system.",
        stack: ["React", "Node.js", "Express", "MongoDB"],
        github: "#",
        demo: "#",
    },
    {
        index: "02",
        category: "Internship Management",
        name: "Internship Portal",
        description:
        "A web-based internship management system for students, advisers, and companies.",
        stack: ["React", "Express", "MongoDB"],
        github: "#",
        demo: "#",
    },
    {
        index: "03",
        category: "Content Platform",
        name: "Blog Management System",
        description:
        "A modern content management platform with authentication and CRUD functionality.",
        stack: ["React", "Node.js", "MongoDB"],
        github: "#",
        demo: "#",
    },
];

const ProjectLink = ({ href, icon: Icon, label, placeholderLabel }) => {
    const isLive = href && href !== "#";

    if (!isLive) {
        return (
            <span
                className="inline-flex items-center gap-1.5 rounded-lg border border-dashed border-[#D8D7D3] px-3.5 py-2 text-[11.5px] text-[#B7B6B1] cursor-not-allowed select-none"
                title={placeholderLabel || "Not public yet"}
            >
                <Lock size={12} /> {label}
            </span>
        );
    }

    return (
        <a
            href={href}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 rounded-lg border border-[#0A0A0A] px-3.5 py-2 text-[11.5px] text-[#0A0A0A] hover:bg-[#0A0A0A] hover:text-white transition-colors"
        >
            <Icon size={13} /> {label}
        </a>
    );
};


const monogram = (name) =>
    name
        .split(" ")
        .filter((w) => /^[A-Za-z]/.test(w))
        .slice(0, 2)
        .map((w) => w[0])
        .join("")
        .toUpperCase();

const ProjectCard = ({ project, delay, large }) => (
    <Reveal delay={delay} className={`h-full ${large ? "lg:col-span-2" : ""}`}>
        <div className="group relative flex h-full flex-col rounded-2xl border border-[#E5E4E1] p-4 transition-all duration-300 hover:-translate-y-1 hover:border-[#0A0A0A]/25 hover:shadow-[0_14px_36px_-18px_rgba(10,10,10,0.28)]">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-0.5 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 bg-[#3452FF] rounded-t-2xl" />

            <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#E5E4E1] bg-[#FAFAFA] text-[12px] font-medium text-[#4a4a4a] group-hover:border-[#3452FF]/30 group-hover:text-[#3452FF] transition-colors">
                    {monogram(project.name)}
                </span>
                <div>
                    <p className="text-[11px] uppercase tracking-[0.06em] text-[#8a8a8a]">
                    {project.category}
                    </p>
                    {project.featured && (
                    <p className="text-[10px] tracking-[0.06em] text-[#3452FF]">Featured build</p>
                    )}
                </div>
                </div>
                <span className="text-[11px] text-[#D8D7D3] tabular-nums">{project.index}</span>
            </div>

            <h3 className="mt-5 text-[18px] text-[#0A0A0A] flex items-center gap-1.5">
                {project.name}
                <ArrowUpRight
                size={14}
                className="text-[#B7B6B1] opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
                />
            </h3>

            <p className="mt-3 text-xs md:text-sm leading-relaxed text-[#6B6B6B] flex-1">
                {project.description}
            </p>

            {project.highlight && (
                <p className="mt-3 text-[12.5px] leading-relaxed text-[#3452FF] border-l-2 border-[#3452FF]/30 pl-3">
                {project.highlight}
                </p>
            )}

            <div className="mt-5 flex flex-wrap gap-2">
                {project.stack.map((t) => (
                <span
                    key={t}
                    className="text-[10.5px] uppercase tracking-[0.04em] px-2.5 py-1 rounded-full border border-[#E5E4E1] text-[#6B6B6B]"
                >
                    {t}
                </span>
                ))}
            </div>

            <div className="mt-6 flex items-center gap-3 pt-5 border-t border-[#E5E4E1]">
                <ProjectLink href={project.github} icon={Github} label="Code" placeholderLabel="Repository not public yet" />
                <ProjectLink href={project.demo} icon={ExternalLink} label="Live Demo" placeholderLabel="Demo coming soon" />
            </div>
        </div>
    </Reveal>
);

const Projects = () => (
    <section id="projects" className="mt-16">
        <Reveal>
            <SectionHeader index="02" label="projects" action={{ label: "all projects", href: "#" }} />
        </Reveal>

        <div className="grid sm:grid-cols-2 gap-5">
            {PROJECTS.map((project, i) => (
                <ProjectCard
                    key={project.name}
                    project={project}
                    delay={i * 0.08}
                    large={project.featured}
                />
            ))}
        </div>
    </section>
);

export default Projects;
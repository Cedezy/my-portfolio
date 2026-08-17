import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import plogo1 from '../../assets/plogo1.png'

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

const TECH_ICONS = {
    React: {
        color: "#61DAFB",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="2.2" fill="currentColor" />
                <g stroke="currentColor" strokeWidth="1.3">
                    <ellipse cx="12" cy="12" rx="10" ry="4.2" />
                    <ellipse cx="12" cy="12" rx="10" ry="4.2" transform="rotate(60 12 12)" />
                    <ellipse cx="12" cy="12" rx="10" ry="4.2" transform="rotate(120 12 12)" />
                </g>
            </svg>
        ),
    },
    "Node.js": {
        color: "#3C873A",
        icon: (
            <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 1.5 21 6.75v10.5L12 22.5 3 17.25V6.75L12 1.5Z" fillOpacity="0.12" stroke="currentColor" strokeWidth="1.2" />
                <path d="M9.2 9.4v6.4l1.3-.75V9.05L9.2 9.4Zm-2.1 1.2v4l1.1-.65v-2.7l-1.1-.65Zm7.9-.65-1.1.65v2.7l1.1.65v-4Zm2.1-.55-1.3.35v6l1.3.75V9.4Z" />
            </svg>
        ),
    },
    Express: {
        color: "#000000",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 15.5c1.6 1.4 3.6 1.4 5-.4l3.3-4.3c1.1-1.5 2.6-1.5 3.7 0l3.3 4.3c1.4 1.8 3.4 1.8 5 .4" />
                <path d="M2 8.5h20" />
            </svg>
        ),
    },
    MongoDB: {
        color: "#47A248",
        icon: (
            <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2c2.6 2.8 4.2 6 4.2 9.6 0 4-1.9 7.4-4.2 9.9-2.3-2.5-4.2-5.9-4.2-9.9C7.8 8 9.4 4.8 12 2Z" fillOpacity="0.85" />
                <path d="M12 15.5V22" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
            </svg>
        ),
    },
};

const DEFAULT_ICON = (label) => (
    <span className="text-[10px] font-semibold">{label.slice(0, 2).toUpperCase()}</span>
);

const TechStack = ({ stack }) => (
    <div className="flex flex-wrap items-center gap-2">
        {stack.map((t) => {
            const tech = TECH_ICONS[t];
            return (
                <div key={t} className="group/tech relative">
                    <span
                        className="flex h-8 w-8 items-center justify-center rounded-lg border border-[#E5E4E1] text-[#6B6B6B] transition-colors duration-200"
                        style={tech ? { "--tech-color": tech.color } : undefined}
                        onMouseEnter={(e) => tech && (e.currentTarget.style.color = tech.color, e.currentTarget.style.borderColor = tech.color)}
                        onMouseLeave={(e) => tech && (e.currentTarget.style.color = "", e.currentTarget.style.borderColor = "")}
                    >
                        <span className="h-4 w-4">{tech ? tech.icon : DEFAULT_ICON(t)}</span>
                    </span>
                    <span className="pointer-events-none absolute left-1/2 top-full z-10 mt-1.5 -translate-x-1/2 whitespace-nowrap rounded-md bg-[#0A0A0A] px-2 py-1 text-[10px] text-white opacity-0 transition-opacity duration-150 group-hover/tech:opacity-100">
                        {t}
                    </span>
                </div>
            );
        })}
    </div>
);

const PROJECTS = [
    {
        index: "01",
        logo: plogo1,
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

const ProjectCard = ({ project, delay, large }) => {
    const isLive = project.demo && project.demo !== "#";
    const CardWrapper = isLive ? "a" : "div";
    const wrapperProps = isLive
        ? { href: project.demo, target: "_blank", rel: "noreferrer" }
        : {};

    return (
    <Reveal delay={delay} className={`h-full ${large ? "lg:col-span-2" : ""}`}>
        <CardWrapper
            {...wrapperProps}
            className="group relative flex h-full flex-col rounded-2xl border border-[#E5E4E1] p-5 transition-all duration-300"
        >
            <div className="pointer-events-none absolute inset-x-0 top-0 h-0.5 scale-x-0 bg-[#0A0A0A] group-hover:scale-x-100 origin-left transition-transform duration-300 rounded-t-2xl" />

            <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                    {project.logo ? (
                        <span className="flex h-10 w-10 items-center justify-center border border-[#E5E4E1] rounded-md overflow-hidden">
                            <img src={project.logo} alt="" className="h-full w-full object-cover" />
                        </span>
                    ) : (
                        <span className="flex h-10 w-10 items-center justify-center border border-[#E5E4E1] rounded-md text-[11px] font-medium text-[#8a8a8a]">
                            {project.name.charAt(0)}
                        </span>
                    )}
                    <div>
                        <h3 className="text-sm text-black flex items-center gap-1.5">
                            {project.name}
                            <ArrowUpRight
                                size={14}
                                className="text-[#B7B6B1] opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
                            />
                        </h3>
                        <p className="text-[10.5px] uppercase tracking-[0.06em] text-[#B7B6B1] mt-0.5">
                            {project.category}
                        </p>
                    </div>
                </div>
                <span className="text-[11px] text-[#D8D7D3] tabular-nums">{project.index}</span>
            </div>

            <p className="mt-4 text-xs md:text-sm leading-relaxed text-[#6B6B6B] flex-1">
                {project.description}
            </p>

            {project.highlight && (
                <p className="mt-3 text-[11.5px] leading-relaxed text-[#0A0A0A]/70 border-l-2 border-[#E5E4E1] pl-3">
                    {project.highlight}
                </p>
            )}

            <div className="mt-5 pt-5 border-t border-[#E5E4E1]">
                <TechStack stack={project.stack} />
            </div>
        </CardWrapper>
    </Reveal>
    );
};

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
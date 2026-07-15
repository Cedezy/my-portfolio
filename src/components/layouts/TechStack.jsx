import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import {
  SiReact,
  SiTailwindcss,
  SiJavascript,
  SiTypescript,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiGit,
  SiGithub,
  SiFigma,
  SiPostman,
  SiDocker,
  SiVercel,
  SiRender
} from "react-icons/si";

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
                className="inline-flex items-center gap-1 text-[12px] text-[#8a8a8a] hover:text-[#0A0A0A] transition-colors"
            >
                {action.label} <ArrowRight size={11} />
            </a>
        )}
    </div>
);

const STACK_GROUPS = [
    {
        group: "Interface & Server",
        items: [
            { name: "React", icon: SiReact, tint: "#61DAFB", primary: true },
            { name: "TypeScript", icon: SiTypescript, tint: "#3178C6" },
            { name: "JavaScript", icon: SiJavascript, tint: "#F7DF1E" },
            { name: "Tailwind CSS", icon: SiTailwindcss, tint: "#38BDF8", primary: true },
            { name: "Node.js", icon: SiNodedotjs, tint: "#3C873A", primary: true },
            { name: "Express", icon: SiExpress, tint: "#000000" },
            { name: "MongoDB", icon: SiMongodb, tint: "#47A248" },
        ],
    },

    {
        group: "Workflow",
        items: [
            { name: "Git", icon: SiGit, tint: "#F05032" },
            { name: "GitHub", icon: SiGithub, tint: "#181717" },
            { name: "Docker", icon: SiDocker, tint: "#2496ED" },
            { name: "Vercel", icon: SiVercel, tint: "#000000" },
            { name: "Render", icon: SiRender, tint: "#46E3B7" },
            { name: "Figma", icon: SiFigma, tint: "#F24E1E" },
            { name: "Postman", icon: SiPostman, tint: "#FF6C37" },
        ],
    },
];


const StackCard = ({ name, icon: Icon, tint, primary, delay }) => (
  <Reveal delay={delay}>
    <div
      className="group relative overflow-hidden rounded-xl border border-[#E5E4E1] p-3 sm:p-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_-15px_rgba(10,10,10,0.25)] cursor-pointer"
      style={{ "--tint": tint }}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-[0.07]"
        style={{ background: tint }}
      />

      <div className="relative flex items-start justify-between">
        <div className="flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-lg sm:rounded-xl border border-[#E5E4E1] bg-[#FAFAFA] text-[#555] transition-colors duration-300 group-hover:text-[var(--tint)]">
          <Icon className="h-[13px] w-[13px] sm:h-[15px] sm:w-[15px]" />
        </div>

        {primary && (
          <span className="hidden sm:block text-[9px] uppercase tracking-[0.08em] text-[#B7B6B1] group-hover:text-[#8a8a8a]">
            Core
          </span>
        )}
      </div>

      <p className="relative mt-3 text-[10px] sm:text-[11px] font-medium text-[#1A1A1A]">
        {name}
      </p>
    </div>
  </Reveal>
);

const TechStack = () => (
    <section id="stack" className="mt-16">
        <Reveal>
            <SectionHeader index="01" label="tech stack" action={{ label: "view all", href: "#" }} />
        </Reveal>

        <div className="space-y-8">
            {STACK_GROUPS.map((group, gi) => (
                <div key={group.group}>
                    <Reveal delay={gi * 0.05}>
                        <p className="mb-3 text-[11px] uppercase tracking-[0.08em] text-[#8a8a8a]">
                            {group.group}
                        </p>
                    </Reveal>

                    <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
                        {group.items.map((item, i) => (
                            <StackCard
                            key={item.name}
                            {...item}
                            delay={gi * 0.05 + i * 0.04}
                            />
                        ))}
                    </div>
                </div>
            ))}
        </div>
    </section>
);

export default TechStack;
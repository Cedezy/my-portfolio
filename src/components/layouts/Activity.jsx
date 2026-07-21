import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { GitHubCalendar } from "react-github-calendar";

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
)


const Activity = () => {
    return (
        <section id="activity" className="mt-16 mb-28">
            <Reveal>
                <SectionHeader
                index="05"
                label="activity"
                action={{
                    label: "Cedezy",
                    href: "https://github.com/Cedezy",
                }}
                />
            </Reveal>

            <Reveal delay={0.08}>
                <div className=" ">
                    <div className="flex items-center justify-between flex-wrap gap-6 mb-8">
                        <div>
                            <p className="text-[12px] uppercase tracking-[0.18em] text-[#8a8a8a]">
                                GitHub
                            </p>

                            <h3 className="mt-2 text-lg md:text-2xl font-medium text-[#0A0A0A]">
                                Open Source Activity
                            </h3>

                            <p className="mt-2 text-[11px] md:text-xs text-[#666] max-w-lg leading-5">
                                I use GitHub to manage personal projects, freelance work,
                                experiments, and continuous learning. Every contribution reflects
                                my growth as a developer.
                            </p>
                        </div>

                        <a
                            href="https://github.com/Cedezy"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 rounded-full border border-[#E5E4E1] px-4 py-2 text-sm hover:bg-black hover:text-white transition"
                        >
                            Visit GitHub
                            <ArrowRight size={14} />
                        </a>
                    </div>

                    <div className="overflow-x-auto">
                        <GitHubCalendar
                            username="Cedezy"
                            blockSize={11}
                            blockMargin={4}
                            fontSize={12}
                        />
                    </div>
                </div>
            </Reveal>
        </section>
    );
};

export default Activity
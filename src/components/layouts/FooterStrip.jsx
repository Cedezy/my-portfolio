import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const scrollToId = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
};

const FooterStrip = () => (
    <footer id="toolkit" className="border-t border-[#E5E4E1]  pt-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <p className="text-[12px] text-[#8a8a8a]">© {new Date().getFullYear()} Zydece — built from scratch, section by section.</p>
            <a
                href="#top"
                onClick={(e) => {
                e.preventDefault();
                scrollToId("#top");
                }}
                className="text-[12px] text-[#0A0A0A] hover:text-[#3452FF] transition-colors inline-flex items-center gap-1"
            >
                Back to top <ArrowUpRight size={11} />
            </a>
        </div>
    </footer>
);

export default FooterStrip
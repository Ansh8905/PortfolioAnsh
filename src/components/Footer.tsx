"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, ExternalLink, ArrowUp, Code2 } from "lucide-react";

export default function Footer() {
    const scrollToTop = () =>
        window.scrollTo({ top: 0, behavior: "smooth" });

    return (
        <footer className="relative border-t border-white/[0.04]">
            {/* Divider */}
            <div className="section-divider" />

            <div className="container-max py-20">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                    {/* Logo */}
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center">
                            <Code2 className="w-4 h-4 text-white" />
                        </div>
                        <span className="font-bold text-white font-mono text-sm">
                            ansh<span className="neon-text">.dev</span>
                        </span>
                    </div>

                    {/* Social */}
                    <div className="flex items-center gap-6">
                        {[
                            {
                                icon: <Github className="w-[18px] h-[18px]" />,
                                href: "https://github.com/Ansh8905",
                            },
                            {
                                icon: <Linkedin className="w-[18px] h-[18px]" />,
                                href: "https://www.linkedin.com/in/ansh-pandey-854398252",
                            },
                            {
                                icon: <ExternalLink className="w-[18px] h-[18px]" />,
                                href: "https://leetcode.com/u/Pandey10/",
                            },
                        ].map(({ icon, href }) => (
                            <a
                                key={href}
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-slate-600 hover:text-cyan-400 transition-colors"
                            >
                                {icon}
                            </a>
                        ))}
                    </div>

                    {/* Copyright + Scroll Top */}
                    <div className="flex items-center gap-6">
                        <p className="text-slate-600 text-xs">
                            © {new Date().getFullYear()} Ansh Kumar Pandey
                        </p>
                        <motion.button
                            onClick={scrollToTop}
                            className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-slate-500 hover:text-cyan-400 hover:border-cyan-400/30 transition-all"
                            whileHover={{ y: -2 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <ArrowUp className="w-4 h-4" />
                        </motion.button>
                    </div>
                </div>
            </div>
        </footer>
    );
}

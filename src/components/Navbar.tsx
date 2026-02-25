"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Code2 } from "lucide-react";

const navLinks = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "GitHub", href: "#github" },
    { label: "Achievements", href: "#achievements" },
    { label: "Contact", href: "#contact" },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("");

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);

            const sections = navLinks.map((l) => l.href.slice(1));
            const current = sections.find((id) => {
                const el = document.getElementById(id);
                if (!el) return false;
                const rect = el.getBoundingClientRect();
                return rect.top <= 120 && rect.bottom > 120;
            });
            if (current) setActiveSection(current);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollTo = (href: string) => {
        setMobileOpen(false);
        const el = document.querySelector(href);
        el?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <>
            <motion.nav
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "nav-blur shadow-lg" : "bg-transparent"
                    }`}
            >
                <div className="container-max">
                    <div className="flex items-center justify-between h-[72px]">
                        {/* Logo */}
                        <motion.button
                            onClick={() => scrollTo("#hero")}
                            className="flex items-center gap-3 group"
                            whileHover={{ scale: 1.05 }}
                        >
                            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center">
                                <Code2 className="w-4 h-4 text-white" />
                            </div>
                            <span className="font-bold text-white font-mono text-sm tracking-wide">
                                ansh<span className="neon-text">.dev</span>
                            </span>
                        </motion.button>

                        {/* Desktop Links */}
                        <div className="hidden md:flex items-center gap-8">
                            {navLinks.map((link) => {
                                const sectionId = link.href.slice(1);
                                const isActive = activeSection === sectionId;
                                return (
                                    <button
                                        key={link.label}
                                        onClick={() => scrollTo(link.href)}
                                        className={`relative text-[13px] font-medium transition-all duration-200 hover-underline ${isActive
                                                ? "neon-text"
                                                : "text-slate-400 hover:text-white"
                                            }`}
                                    >
                                        {link.label}
                                        {isActive && (
                                            <motion.div
                                                layoutId="nav-indicator"
                                                className="absolute -bottom-1 left-0 right-0 h-0.5 bg-cyan-400 rounded-full"
                                            />
                                        )}
                                    </button>
                                );
                            })}
                        </div>

                        {/* CTA + Hamburger */}
                        <div className="flex items-center gap-4">
                            <motion.a
                                href="/resume.pdf"
                                download
                                className="hidden md:inline-flex btn-neon text-xs py-2.5 px-5"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Resume
                            </motion.a>
                            <button
                                onClick={() => setMobileOpen(!mobileOpen)}
                                className="md:hidden text-slate-300 hover:text-white transition-colors"
                            >
                                {mobileOpen ? (
                                    <X className="w-5 h-5" />
                                ) : (
                                    <Menu className="w-5 h-5" />
                                )}
                            </button>
                        </div>
                    </div>
                </div>
            </motion.nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="fixed top-[72px] left-0 right-0 z-40 nav-blur border-b border-cyan-400/10 py-6"
                    >
                        <div className="container-max flex flex-col gap-1">
                            {navLinks.map((link) => (
                                <button
                                    key={link.label}
                                    onClick={() => scrollTo(link.href)}
                                    className="text-left text-slate-300 hover:text-cyan-400 transition-colors py-3 border-b border-white/5 last:border-0 text-sm"
                                >
                                    {link.label}
                                </button>
                            ))}
                            <a
                                href="/resume.pdf"
                                download
                                className="btn-neon text-center mt-4"
                            >
                                Download Resume
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}

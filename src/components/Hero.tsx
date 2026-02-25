"use client";

import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import {
    ArrowRight,
    Download,
    Mail,
    Github,
    Linkedin,
    MapPin,
    ExternalLink,
} from "lucide-react";

const stats = [
    { value: "3+", label: "Major Projects" },
    { value: "58+", label: "GitHub Repos" },
    { value: "2", label: "Hackathon Awards" },
    { value: "100+", label: "Small Projects" },
];

const particles = Array.from({ length: 14 }, (_, i) => ({
    id: i,
    size: Math.random() * 3 + 1,
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 5,
    duration: Math.random() * 4 + 4,
}));

export default function Hero() {
    return (
        <section
            id="hero"
            className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-grid"
            style={{ paddingTop: "100px", paddingBottom: "80px" }}
        >
            {/* Background Orbs */}
            <div
                className="glow-orb w-[500px] h-[500px] -top-40 -left-40"
                style={{ background: "#00d4ff" }}
            />
            <div
                className="glow-orb w-[400px] h-[400px] top-1/2 -right-40"
                style={{
                    background: "#7c3aed",
                    animationDelay: "-3s",
                    animationDuration: "10s",
                }}
            />
            <div
                className="glow-orb w-[300px] h-[300px] bottom-0 left-1/3"
                style={{
                    background: "#06b6d4",
                    animationDelay: "-6s",
                    animationDuration: "12s",
                }}
            />

            {/* Floating Particles */}
            {particles.map((p) => (
                <div
                    key={p.id}
                    className="particle"
                    style={{
                        width: p.size + "px",
                        height: p.size + "px",
                        left: p.x + "%",
                        top: p.y + "%",
                        animationDelay: `-${p.delay}s`,
                        animationDuration: `${p.duration}s`,
                    }}
                />
            ))}

            <div className="container-max relative z-10">
                <div className="max-w-3xl">
                    {/* Status Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="flex items-center gap-4 mb-12"
                    >
                        <div className="flex items-center gap-2.5 px-4 py-2.5 rounded-full border border-cyan-400/15 bg-cyan-400/5 text-sm">
                            <span className="w-2 h-2 rounded-full bg-cyan-400 pulse-glow" />
                            <span className="text-cyan-400 font-medium text-[13px]">
                                Open to Full-time Opportunities
                            </span>
                        </div>
                        <div className="hidden sm:flex items-center gap-1.5 text-slate-500 text-sm">
                            <MapPin className="w-3.5 h-3.5" />
                            <span>Noida, India</span>
                        </div>
                    </motion.div>

                    {/* Name */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="mb-6"
                    >
                        <p className="text-cyan-400 font-mono text-sm font-medium mb-4 tracking-widest uppercase">
                            Hi, I&#39;m
                        </p>
                        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-[1.08] tracking-tight">
                            Ansh Kumar{" "}
                            <span className="gradient-text">Pandey</span>
                        </h1>
                    </motion.div>

                    {/* Typewriter Role */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-xl md:text-2xl text-slate-300 font-semibold mb-8 h-9"
                    >
                        <TypeAnimation
                            sequence={[
                                "Full Stack Developer",
                                2000,
                                "AI/ML Engineer",
                                2000,
                                "Flutter Developer",
                                2000,
                                "Problem Solver",
                                2000,
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                            className="gradient-text-blue"
                        />
                    </motion.div>

                    {/* Description */}
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="text-slate-400 text-lg leading-relaxed max-w-2xl mb-12"
                    >
                        B.Tech AI/ML student at AKGEC, architecting production-grade
                        full-stack systems bridging mobile, backend, and machine learning.
                        Delivering real-time apps, NLP-powered chatbots, and
                        spatio-temporal ML pipelines with clean, scalable architecture.
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="flex flex-wrap items-center gap-5 mb-14"
                    >
                        <motion.button
                            onClick={() =>
                                document
                                    .getElementById("projects")
                                    ?.scrollIntoView({ behavior: "smooth" })
                            }
                            className="btn-neon-filled flex items-center gap-2.5"
                            whileHover={{ scale: 1.04 }}
                            whileTap={{ scale: 0.97 }}
                        >
                            View Projects <ArrowRight className="w-4 h-4" />
                        </motion.button>

                        <motion.a
                            href="mailto:anshpandey162@gmail.com"
                            className="btn-neon flex items-center gap-2.5"
                            whileHover={{ scale: 1.04 }}
                            whileTap={{ scale: 0.97 }}
                        >
                            <Mail className="w-4 h-4" /> Contact Me
                        </motion.a>

                        <motion.a
                            href="#"
                            download
                            className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm font-medium py-3"
                            whileHover={{ x: 3 }}
                        >
                            <Download className="w-4 h-4" /> Resume
                        </motion.a>
                    </motion.div>

                    {/* Social Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        className="flex items-center gap-6 mb-20"
                    >
                        {[
                            {
                                icon: <Github className="w-[18px] h-[18px]" />,
                                href: "https://github.com/Ansh8905",
                                label: "GitHub",
                            },
                            {
                                icon: <Linkedin className="w-[18px] h-[18px]" />,
                                href: "https://www.linkedin.com/in/ansh-pandey-854398252",
                                label: "LinkedIn",
                            },
                            {
                                icon: <ExternalLink className="w-[18px] h-[18px]" />,
                                href: "https://leetcode.com/u/Pandey10/",
                                label: "LeetCode",
                            },
                        ].map(({ icon, href, label }) => (
                            <motion.a
                                key={label}
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2.5 text-slate-500 hover:text-cyan-400 transition-all duration-200 text-sm group"
                                whileHover={{ y: -2 }}
                            >
                                <span className="group-hover:scale-110 transition-transform">
                                    {icon}
                                </span>
                                {label}
                            </motion.a>
                        ))}
                    </motion.div>

                    {/* Stats */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        className="grid grid-cols-2 md:grid-cols-4 gap-8"
                    >
                        {stats.map(({ value, label }, i) => (
                            <motion.div
                                key={label}
                                className="text-center"
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.7 + i * 0.1 }}
                            >
                                <div className="stat-num">{value}</div>
                                <div className="text-slate-500 text-xs mt-2 font-medium uppercase tracking-widest">
                                    {label}
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
            >
                <span className="text-slate-600 text-xs font-mono tracking-wider">scroll</span>
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="w-0.5 h-8 bg-gradient-to-b from-cyan-400/60 to-transparent"
                />
            </motion.div>
        </section>
    );
}

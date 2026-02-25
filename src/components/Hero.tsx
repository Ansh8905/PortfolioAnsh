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
            style={{ paddingTop: "140px", paddingBottom: "120px" }}
        >
            {/* Background Orbs */}
            <div
                className="glow-orb w-[600px] h-[600px] -top-60 -left-60"
                style={{ background: "#00d4ff", opacity: 0.1 }}
            />
            <div
                className="glow-orb w-[500px] h-[500px] top-2/3 -right-60"
                style={{
                    background: "#7c3aed",
                    opacity: 0.08,
                    animationDelay: "-3s",
                    animationDuration: "12s",
                }}
            />

            {/* Floating Particles */}
            {particles.map((p) => (
                <div
                    key={p.id}
                    className="particle opacity-20"
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
                <div className="grid lg:grid-cols-12 gap-16 items-center">
                    {/* Left Column: Content */}
                    <div className="lg:col-span-7">
                        {/* Status Badge */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="flex items-center gap-4 mb-14"
                        >
                            <div className="flex items-center gap-3 px-5 py-3 rounded-full border border-cyan-400/15 bg-cyan-400/5 text-sm">
                                <span className="w-2 h-2 rounded-full bg-cyan-400 pulse-glow" />
                                <span className="text-cyan-400 font-medium text-[12px] uppercase tracking-widest leading-none mt-0.5">
                                    Open to Full-time Opportunities
                                </span>
                            </div>
                            <div className="hidden sm:flex items-center gap-2 text-slate-500 text-sm">
                                <MapPin className="w-4 h-4" />
                                <span className="mt-0.5">Noida, India</span>
                            </div>
                        </motion.div>

                        {/* Name */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="mb-8"
                        >
                            <p className="text-cyan-400 font-mono text-sm font-medium mb-4 tracking-[0.3em] uppercase opacity-80">
                                Hello World, I&#39;m
                            </p>
                            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-[1.05] tracking-tight">
                                Ansh Kumar{" "}
                                <span className="gradient-text">Pandey</span>
                            </h1>
                        </motion.div>

                        {/* Typewriter Role */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-xl md:text-2xl text-slate-300 font-semibold mb-10 h-10"
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
                            className="text-slate-400 text-lg md:text-xl leading-relaxed max-w-2xl mb-12 opacity-90"
                        >
                            B.Tech AI/ML student at AKGEC, architecting production-grade
                            full-stack systems. Delivering intelligent web apps, NLP chatbots, and
                            spatio-temporal ML pipelines with precision and scale.
                        </motion.p>

                        {/* CTA Buttons */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="flex flex-wrap items-center gap-6 mb-16"
                        >
                            <motion.button
                                onClick={() =>
                                    document
                                        .getElementById("projects")
                                        ?.scrollIntoView({ behavior: "smooth" })
                                }
                                className="btn-neon-filled flex items-center gap-3 px-8 py-4.5"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                View Projects <ArrowRight className="w-5 h-5" />
                            </motion.button>

                            <motion.a
                                href="mailto:anshpandey162@gmail.com"
                                className="btn-neon flex items-center gap-3 px-8 py-4.5 border-white/10 text-white hover:border-cyan-400/50"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <Mail className="w-5 h-5" /> Let&#39;s Talk
                            </motion.a>

                            <motion.a
                                href="https://drive.google.com/file/d/1Cf_A-OSFmL7fZBE3sU4SUCm0iyT2r2EQ/view?usp=drive_link"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2.5 text-slate-500 hover:text-white transition-all text-sm font-semibold tracking-wide py-4"
                                whileHover={{ x: 5 }}
                            >
                                <Download className="w-4.5 h-4.5" /> Resume
                            </motion.a>
                        </motion.div>

                        {/* Social Links */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.5 }}
                            className="flex items-center gap-8"
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
                                    className="flex items-center gap-2.5 text-slate-500 hover:text-cyan-400 transition-all duration-300 text-xs font-bold uppercase tracking-widest group"
                                    whileHover={{ y: -3 }}
                                >
                                    <span className="text-slate-600 group-hover:text-cyan-400 transition-colors">
                                        {icon}
                                    </span>
                                    {label}
                                </motion.a>
                            ))}
                        </motion.div>
                    </div>

                    {/* Right Column: Photo */}
                    <motion.div
                        className="lg:col-span-5 hidden lg:flex justify-center items-center"
                        initial={{ opacity: 0, scale: 0.8, rotate: 3 }}
                        animate={{ opacity: 1, scale: 1, rotate: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        <div className="relative group">
                            {/* Decorative backgrounds - Larger & Softer */}
                            <div className="absolute -inset-8 bg-gradient-to-tr from-cyan-400/20 to-purple-500/20 rounded-3xl blur-2xl opacity-40 group-hover:opacity-60 transition duration-700"></div>
                            <div className="absolute -inset-2 bg-gradient-to-tr from-cyan-400/20 to-purple-500/20 rounded-3xl opacity-30 group-hover:opacity-40 transition duration-700"></div>

                            {/* Photo Frame - Spacious */}
                            <div className="relative w-[340px] h-[440px] rounded-3xl overflow-hidden border border-white/10 glass-card p-2">
                                <div className="w-full h-full rounded-2xl overflow-hidden relative">
                                    {/* Fallback pattern if image is missing */}
                                    <div className="absolute inset-0 bg-slate-900 flex items-center justify-center opacity-50">
                                        <div className="w-full h-full bg-[radial-gradient(circle_at_center,_var(--neon-blue)_0%,_transparent_70%)] opacity-20"></div>
                                    </div>

                                    {/* The Image */}
                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                    <img
                                        src="/PortfolioAnsh/images/profile.jpg"
                                        alt="Ansh Kumar Pandey"
                                        className="w-full h-full object-cover relative z-10 transition-transform duration-1000 group-hover:scale-110"
                                        onError={(e) => {
                                            (e.target as any).src = "https://api.dicebear.com/7.x/avataaars/svg?seed=Ansh";
                                        }}
                                    />

                                    {/* Gradient Overlay - Softer */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-80 z-20"></div>

                                    {/* Floating Tag - More Padding */}
                                    <div className="absolute bottom-6 left-6 right-6 z-30 transform translate-y-2 group-hover:translate-y-0 transition-all duration-500 opacity-0 group-hover:opacity-100">
                                        <div className="blur-xl bg-cyan-400/40 absolute inset-0 rounded-2xl"></div>
                                        <div className="relative bg-white/10 backdrop-blur-xl border border-white/15 py-4 px-6 rounded-2xl text-center shadow-2xl">
                                            <p className="text-white font-black text-xs tracking-[0.2em] uppercase">Software Architect</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Decorative dots - more space */}
                            <div className="absolute -top-10 -right-10 w-24 h-24 bg-grid opacity-15"></div>
                            <div className="absolute -bottom-10 -left-10 w-24 h-24 bg-grid opacity-15"></div>
                        </div>
                    </motion.div>
                </div>

                {/* Stats Row - Much more spacing */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="mt-[180px] grid grid-cols-2 md:grid-cols-4 gap-12 lg:gap-20 max-w-5xl"
                >
                    {stats.map(({ value, label }, i) => (
                        <motion.div
                            key={label}
                            className="text-left"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.8 + i * 0.1 }}
                        >
                            <div className="stat-num">{value}</div>
                            <div className="text-slate-500 text-xs mt-2 font-medium uppercase tracking-[0.2em]">
                                {label}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            {/* Mobile Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
            >
                <span className="text-slate-600 text-[10px] font-mono tracking-widest uppercase">scroll</span>
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="w-0.5 h-8 bg-gradient-to-b from-cyan-400/60 to-transparent"
                />
            </motion.div>
        </section>
    );
}

"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
    GraduationCap,
    Brain,
    Layers,
    Zap,
    Globe,
    Shield,
} from "lucide-react";

const strengths = [
    {
        icon: <Brain className="w-5 h-5" />,
        title: "AI/ML Systems",
        desc: "Spatio-temporal ML pipelines, NLP engines, and production inference APIs.",
    },
    {
        icon: <Layers className="w-5 h-5" />,
        title: "Full Stack Architecture",
        desc: "End-to-end design from Flutter apps to Node.js microservices.",
    },
    {
        icon: <Zap className="w-5 h-5" />,
        title: "Real-time Applications",
        desc: "Low-latency, event-driven systems for tracking and forecasting.",
    },
    {
        icon: <Globe className="w-5 h-5" />,
        title: "Clean Architecture",
        desc: "DDD, SOLID principles, and repository patterns for scalable code.",
    },
    {
        icon: <Shield className="w-5 h-5" />,
        title: "Security & Quality",
        desc: "Secure payment flows, validation, and safety detection modules.",
    },
    {
        icon: <GraduationCap className="w-5 h-5" />,
        title: "Continuous Learning",
        desc: "Active on LeetCode, certified in Data Science/ML.",
    },
];

const education = {
    degree: "B.Tech – Artificial Intelligence & Machine Learning",
    institution: "Ajay Kumar Garg Engineering College",
    location: "Ghaziabad, UP",
    duration: "2023 – 2026",
    highlight:
        "Specializing in intelligent systems, NLP, and full-stack AI integration",
};

export default function About() {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

    return (
        <section id="about" className="section-padding relative">
            {/* Subtle divider */}
            <div className="section-divider mb-[140px]" />

            <div className="container-max">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 40 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7 }}
                >
                    {/* Header */}
                    <div className="text-center mb-20">
                        <div className="section-tag">
                            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                            About Me
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-white mt-5 leading-tight">
                            Engineering at the{" "}
                            <span className="gradient-text">Intersection of AI & Web</span>
                        </h2>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-16 items-start">
                        {/* Left – Summary */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={inView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.7, delay: 0.2 }}
                        >
                            <div className="space-y-6 text-slate-300 text-[16px] leading-[1.8] mb-10">
                                <p>
                                    I&#39;m a{" "}
                                    <span className="text-cyan-400 font-semibold">
                                        Full Stack Developer & AI/ML Engineer
                                    </span>{" "}
                                    pursuing B.Tech in AI & ML at AKGEC. I build production-grade
                                    systems that merge modern web architecture with intelligent
                                    data-driven decision engines.
                                </p>
                                <p>
                                    My work spans cross-platform mobile development with{" "}
                                    <span className="text-white font-medium">Flutter</span>,
                                    backend microservices in{" "}
                                    <span className="text-white font-medium">
                                        Node.js & NestJS
                                    </span>
                                    , and ML pipelines using{" "}
                                    <span className="text-white font-medium">
                                        Python, XGBoost, and GeoPandas
                                    </span>
                                    .
                                </p>
                                <p>
                                    As a{" "}
                                    <span className="text-white font-medium">
                                        Smart India Hackathon 2024
                                    </span>{" "}
                                    participant and Anveshna Hackathon Runner-Up, I thrive under
                                    pressure building solutions that solve real problems — not
                                    just demo prototypes.
                                </p>
                            </div>

                            {/* Education Card */}
                            <div className="glass-card p-7 border-l-4 border-l-cyan-400/60">
                                <div className="flex items-start gap-5">
                                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-400/15 to-blue-600/15 flex items-center justify-center flex-shrink-0">
                                        <GraduationCap className="w-6 h-6 text-cyan-400" />
                                    </div>
                                    <div>
                                        <h3 className="text-white font-bold text-[15px] mb-1.5">
                                            {education.degree}
                                        </h3>
                                        <p className="text-cyan-400 text-sm font-medium">
                                            {education.institution}
                                        </p>
                                        <p className="text-slate-500 text-xs mt-1">
                                            {education.location}
                                        </p>
                                        <div className="flex items-center gap-4 mt-4">
                                            <span className="tech-badge">
                                                📅 {education.duration}
                                            </span>
                                        </div>
                                        <p className="text-slate-500 text-xs mt-4 italic leading-relaxed">
                                            {education.highlight}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Right – Strengths Grid */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={inView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.7, delay: 0.3 }}
                            className="grid grid-cols-1 sm:grid-cols-2 gap-5"
                        >
                            {strengths.map(({ icon, title, desc }, i) => (
                                <motion.div
                                    key={title}
                                    className="glass-card p-6 group"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={inView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ delay: 0.3 + i * 0.08 }}
                                >
                                    <div className="w-11 h-11 rounded-xl bg-cyan-400/8 flex items-center justify-center text-cyan-400 mb-4 group-hover:bg-cyan-400/15 transition-colors">
                                        {icon}
                                    </div>
                                    <h4 className="text-white font-semibold text-sm mb-2">
                                        {title}
                                    </h4>
                                    <p className="text-slate-500 text-[13px] leading-[1.7]">
                                        {desc}
                                    </p>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const skillGroups = [
    {
        category: "Frontend",
        color: "#00d4ff",
        skills: [
            { name: "Flutter / Dart", level: 88 },
            { name: "React / Next.js", level: 80 },
            { name: "TypeScript", level: 78 },
            { name: "Tailwind CSS", level: 82 },
            { name: "HTML / CSS / JS", level: 90 },
        ],
    },
    {
        category: "Backend",
        color: "#7c3aed",
        skills: [
            { name: "Node.js / Express", level: 85 },
            { name: "NestJS", level: 75 },
            { name: "REST API Design", level: 88 },
            { name: "WebSockets", level: 72 },
            { name: "Microservices", level: 70 },
        ],
    },
    {
        category: "AI / ML",
        color: "#06b6d4",
        skills: [
            { name: "Python (NumPy, Pandas)", level: 90 },
            { name: "XGBoost / LightGBM", level: 82 },
            { name: "scikit-learn", level: 85 },
            { name: "LSTM / Deep Learning", level: 72 },
            { name: "GeoPandas / Folium", level: 75 },
        ],
    },
    {
        category: "Databases",
        color: "#10b981",
        skills: [
            { name: "Firebase / Firestore", level: 88 },
            { name: "MongoDB", level: 80 },
            { name: "MySQL / PostgreSQL", level: 72 },
            { name: "Redis", level: 65 },
            { name: "Elasticsearch", level: 60 },
        ],
    },
    {
        category: "DevOps / Cloud",
        color: "#f59e0b",
        skills: [
            { name: "Docker", level: 68 },
            { name: "Git / GitHub", level: 92 },
            { name: "CI/CD Pipelines", level: 65 },
            { name: "Google Cloud / Firebase", level: 78 },
            { name: "Vercel / Netlify", level: 80 },
        ],
    },
    {
        category: "Tools & Misc",
        color: "#ec4899",
        skills: [
            { name: "Jupyter Notebook", level: 90 },
            { name: "Postman / API Testing", level: 85 },
            { name: "VS Code", level: 95 },
            { name: "Figma", level: 65 },
            { name: "Android Studio", level: 75 },
        ],
    },
];

const badgeSkills = [
    "Flutter", "Dart", "React", "Next.js", "TypeScript", "Node.js", "NestJS",
    "Python", "XGBoost", "LightGBM", "scikit-learn", "LSTM", "Firebase",
    "MongoDB", "Redis", "Docker", "Git", "REST APIs", "WebSockets",
    "GeoPandas", "Folium", "Razorpay", "Google Maps API", "NLP",
    "Microservices", "Tailwind CSS", "Framer Motion",
];

export default function Skills() {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 });
    const [activeGroup, setActiveGroup] = useState(0);

    const active = skillGroups[activeGroup];

    return (
        <section id="skills" className="section-padding relative">
            {/* Divider */}
            <div className="section-divider mb-[140px]" />

            {/* Background orb */}
            <div
                className="glow-orb w-96 h-96 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                style={{ background: "#7c3aed", opacity: 0.06 }}
            />

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
                            Tech Stack
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-white mt-5 leading-tight">
                            Skills &{" "}
                            <span className="gradient-text">Expertise</span>
                        </h2>
                        <p className="text-slate-500 mt-5 max-w-lg mx-auto text-[15px] leading-relaxed">
                            A comprehensive toolkit across the full stack, from mobile to ML
                            pipelines.
                        </p>
                    </div>

                    {/* Category Tabs + Skill Bars */}
                    <div className="grid lg:grid-cols-3 gap-10 mb-16">
                        {/* Category Selector */}
                        <div className="flex flex-col gap-3">
                            {skillGroups.map((g, i) => (
                                <motion.button
                                    key={g.category}
                                    onClick={() => setActiveGroup(i)}
                                    className={`text-left px-6 py-4 rounded-2xl border transition-all duration-300 ${activeGroup === i
                                            ? "border-cyan-400/30 bg-cyan-400/8 text-white"
                                            : "border-white/5 bg-white/[0.02] text-slate-500 hover:text-white hover:border-white/15"
                                        }`}
                                    whileHover={{ x: 3 }}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={inView ? { opacity: 1, x: 0 } : {}}
                                    transition={{ delay: i * 0.05 }}
                                >
                                    <div className="flex items-center gap-3">
                                        <div
                                            className="w-2.5 h-2.5 rounded-full"
                                            style={{ background: g.color }}
                                        />
                                        <span className="font-medium text-sm">{g.category}</span>
                                    </div>
                                </motion.button>
                            ))}
                        </div>

                        {/* Skills with bars */}
                        <div className="lg:col-span-2 glass-card p-10">
                            <div className="flex items-center gap-3 mb-10">
                                <div
                                    className="w-3 h-3 rounded-full"
                                    style={{ background: active.color }}
                                />
                                <h3 className="text-white font-bold text-lg">
                                    {active.category}
                                </h3>
                                <span className="text-slate-600 text-sm">Development</span>
                            </div>

                            <div className="space-y-7">
                                {active.skills.map(({ name, level }, i) => (
                                    <motion.div
                                        key={name}
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={inView ? { opacity: 1, x: 0 } : {}}
                                        transition={{ delay: 0.1 + i * 0.08 }}
                                    >
                                        <div className="flex justify-between items-center mb-3">
                                            <span className="text-slate-300 text-sm font-medium font-mono">
                                                {name}
                                            </span>
                                            <span
                                                className="text-xs font-bold font-mono"
                                                style={{ color: active.color }}
                                            >
                                                {level}%
                                            </span>
                                        </div>
                                        <div className="skill-bar">
                                            <motion.div
                                                className="skill-bar-fill"
                                                style={{
                                                    background: `linear-gradient(90deg, ${active.color}, ${active.color}aa)`,
                                                }}
                                                initial={{ width: 0 }}
                                                animate={inView ? { width: `${level}%` } : {}}
                                                transition={{
                                                    duration: 1.2,
                                                    delay: 0.2 + i * 0.1,
                                                    ease: "easeOut",
                                                }}
                                            />
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Badge Cloud */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.7, delay: 0.4 }}
                        className="mt-16"
                    >
                        <p className="text-center text-slate-600 text-xs font-mono uppercase tracking-[0.2em] mb-8">
                            Full Technology Stack
                        </p>
                        <div className="flex flex-wrap gap-3 justify-center max-w-3xl mx-auto">
                            {badgeSkills.map((s, i) => (
                                <motion.span
                                    key={s}
                                    className="tech-badge cursor-default"
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                                    transition={{ delay: 0.5 + i * 0.02 }}
                                    whileHover={{ scale: 1.08, borderColor: "#00d4ff" }}
                                >
                                    {s}
                                </motion.span>
                            ))}
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}

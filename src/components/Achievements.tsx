"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Trophy, Award, Heart, ExternalLink } from "lucide-react";

const achievements = [
    {
        icon: <Trophy className="w-6 h-6" />,
        color: "#f59e0b",
        gradient: "from-amber-500/15 to-yellow-600/15",
        title: "Smart India Hackathon 2024",
        org: "Government of India",
        desc: "Selected as a national-level participant in SIH 2024, India's largest hackathon — designing real-world solutions for government problem statements.",
        tags: ["National Level", "AI/ML", "Government"],
        year: "2024",
    },
    {
        icon: <Award className="w-6 h-6" />,
        color: "#c0c0c0",
        gradient: "from-slate-400/15 to-slate-600/15",
        title: "Runner-Up – Anveshna Hackathon",
        org: "AKGEC, Ghaziabad",
        desc: "Secured Runner-Up position competing against teams from multiple engineering institutions, delivering a technically rigorous product.",
        tags: ["Runner-Up 🥈", "Innovation"],
        year: "2024",
    },
    {
        icon: <Heart className="w-6 h-6" />,
        color: "#ec4899",
        gradient: "from-pink-500/15 to-rose-600/15",
        title: "Volunteer – Slum Swaraj Foundation",
        org: "Social Impact Initiative",
        desc: "Active volunteer contributing to community upliftment and educational outreach programs beyond technical work.",
        tags: ["Social Impact", "Education"],
        year: "2024",
    },
];

const certifications = [
    {
        title: "Python for Data Science",
        issuer: "Digipodium",
        color: "#3776AB",
        icon: "🐍",
        skills: ["NumPy", "Pandas", "Matplotlib", "Data Analysis"],
        desc: "Intensive certification covering Python fundamentals to advanced data science workflows including visualization and statistical analysis.",
    },
    {
        title: "Data Science & Machine Learning",
        issuer: "Udemy",
        color: "#a435f0",
        icon: "🤖",
        skills: ["scikit-learn", "Regression", "Classification", "Model Evaluation"],
        desc: "Comprehensive ML certification covering supervised/unsupervised learning, model selection, and end-to-end pipeline construction.",
    },
];

export default function Achievements() {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

    return (
        <section id="achievements" className="section-padding relative">
            {/* Divider */}
            <div className="section-divider mb-[140px]" />

            <div
                className="glow-orb w-96 h-96 right-0 bottom-0"
                style={{ background: "#f59e0b", opacity: 0.05 }}
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
                            Recognition
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-white mt-5 leading-tight">
                            Achievements &{" "}
                            <span className="gradient-text">Certifications</span>
                        </h2>
                    </div>

                    {/* Achievements */}
                    <div className="mb-20">
                        <h3 className="text-slate-500 text-xs font-mono uppercase tracking-[0.2em] mb-10 flex items-center gap-3">
                            <span className="block w-8 h-0.5 bg-cyan-400/60" />
                            Hackathons & Awards
                        </h3>
                        <div className="grid md:grid-cols-3 gap-8">
                            {achievements.map(
                                ({ icon, color, gradient, title, org, desc, tags, year }, i) => (
                                    <motion.div
                                        key={title}
                                        className="glass-card p-8 gradient-border"
                                        initial={{ opacity: 0, y: 30 }}
                                        animate={inView ? { opacity: 1, y: 0 } : {}}
                                        transition={{ delay: i * 0.12 }}
                                    >
                                        <div className="flex items-start justify-between mb-6">
                                            <div
                                                className={`w-14 h-14 rounded-2xl flex items-center justify-center bg-gradient-to-br ${gradient} flex-shrink-0`}
                                                style={{ color }}
                                            >
                                                {icon}
                                            </div>
                                            <span className="text-slate-600 text-xs font-mono">
                                                {year}
                                            </span>
                                        </div>
                                        <h4 className="text-white font-bold text-[15px] mb-2 leading-snug">
                                            {title}
                                        </h4>
                                        <p
                                            className="text-sm mb-4 font-medium"
                                            style={{ color }}
                                        >
                                            {org}
                                        </p>
                                        <p className="text-slate-500 text-[13px] leading-[1.7] mb-6">
                                            {desc}
                                        </p>
                                        <div className="flex flex-wrap gap-2.5">
                                            {tags.map((t) => (
                                                <span
                                                    key={t}
                                                    className="px-3 py-1.5 rounded-lg text-xs font-medium"
                                                    style={{
                                                        background: `${color}10`,
                                                        color,
                                                        border: `1px solid ${color}25`,
                                                    }}
                                                >
                                                    {t}
                                                </span>
                                            ))}
                                        </div>
                                    </motion.div>
                                )
                            )}
                        </div>
                    </div>

                    {/* Certifications */}
                    <div className="mb-14">
                        <h3 className="text-slate-500 text-xs font-mono uppercase tracking-[0.2em] mb-10 flex items-center gap-3">
                            <span className="block w-8 h-0.5 bg-cyan-400/60" />
                            Certifications
                        </h3>
                        <div className="grid md:grid-cols-2 gap-8">
                            {certifications.map(
                                ({ title, issuer, color, icon, skills, desc }, i) => (
                                    <motion.div
                                        key={title}
                                        className="glass-card p-10"
                                        initial={{ opacity: 0, x: i === 0 ? -30 : 30 }}
                                        animate={inView ? { opacity: 1, x: 0 } : {}}
                                        transition={{ delay: 0.4 + i * 0.1 }}
                                    >
                                        <div className="flex items-start gap-5 mb-6">
                                            <div className="text-4xl flex-shrink-0">{icon}</div>
                                            <div>
                                                <h4 className="text-white font-bold text-lg mb-2">
                                                    {title}
                                                </h4>
                                                <div className="flex items-center gap-2.5">
                                                    <span
                                                        className="px-3 py-1.5 rounded-full text-xs font-bold"
                                                        style={{
                                                            background: `${color}15`,
                                                            color,
                                                        }}
                                                    >
                                                        {issuer}
                                                    </span>
                                                    <ExternalLink className="w-3.5 h-3.5 text-slate-600" />
                                                </div>
                                            </div>
                                        </div>
                                        <p className="text-slate-500 text-sm leading-[1.8] mb-6">
                                            {desc}
                                        </p>
                                        <div className="flex flex-wrap gap-2.5">
                                            {skills.map((s) => (
                                                <span
                                                    key={s}
                                                    className="tech-badge"
                                                    style={{
                                                        color,
                                                        borderColor: `${color}25`,
                                                    }}
                                                >
                                                    {s}
                                                </span>
                                            ))}
                                        </div>
                                    </motion.div>
                                )
                            )}
                        </div>
                    </div>

                    {/* LeetCode */}
                    <motion.div
                        className="glass-card p-10 flex flex-col md:flex-row items-center justify-between gap-8"
                        initial={{ opacity: 0, y: 20 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.6 }}
                    >
                        <div>
                            <h4 className="text-white font-bold text-xl mb-3">
                                🧩 LeetCode — Competitive Programming
                            </h4>
                            <p className="text-slate-500 text-sm leading-relaxed max-w-lg">
                                Active on LeetCode solving DSA problems in Python and Java.
                                Focused on graph algorithms, dynamic programming, and system
                                design patterns.
                            </p>
                        </div>
                        <motion.a
                            href="https://leetcode.com/u/Pandey10/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-neon flex items-center gap-2.5 flex-shrink-0"
                            whileHover={{ scale: 1.04 }}
                            whileTap={{ scale: 0.97 }}
                        >
                            View Profile <ExternalLink className="w-4 h-4" />
                        </motion.a>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}

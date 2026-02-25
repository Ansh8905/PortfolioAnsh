"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Github, GitMerge, Star, BookOpen } from "lucide-react";

const githubStats = [
    {
        label: "Public Repos",
        value: "58+",
        icon: <BookOpen className="w-5 h-5" />,
    },
    {
        label: "GitHub Commits",
        value: "200+",
        icon: <GitMerge className="w-5 h-5" />,
    },
    {
        label: "Stars Earned",
        value: "2+",
        icon: <Star className="w-5 h-5" />,
    },
    {
        label: "Languages Used",
        value: "8+",
        icon: <Github className="w-5 h-5" />,
    },
];

const languages = [
    { name: "Python", percent: 42, color: "#3776AB" },
    { name: "Dart / Flutter", percent: 22, color: "#00B4AB" },
    { name: "TypeScript", percent: 18, color: "#3178C6" },
    { name: "JavaScript", percent: 8, color: "#F7DF1E" },
    { name: "Jupyter", percent: 6, color: "#DA5B0B" },
    { name: "HTML / CSS", percent: 4, color: "#00d4ff" },
];

const pinnedRepos = [
    {
        name: "Blinkit-Clone",
        desc: "Full-stack Flutter + Firebase grocery delivery app with Razorpay & Google Maps.",
        lang: "Dart",
        color: "#00B4AB",
        stars: 1,
        url: "https://github.com/Ansh8905/Blinkit-Clone",
    },
    {
        name: "RideShare--Chatbot",
        desc: "NLP + Decision Tree chatbot for post-booking support with safety detection.",
        lang: "TypeScript",
        color: "#3178C6",
        stars: 0,
        url: "https://github.com/Ansh8905/RideShare--Chatbot",
    },
    {
        name: "ride-demand-intelligence",
        desc: "Spatio-temporal ML pipeline for ride demand forecasting using XGBoost.",
        lang: "Python",
        color: "#3776AB",
        stars: 0,
        url: "https://github.com/Ansh8905/ride-demand-intelligence",
    },
    {
        name: "Android-Malware-Detection",
        desc: "ML-based Android malware classification using behavioral permission analysis.",
        lang: "Jupyter",
        color: "#DA5B0B",
        stars: 0,
        url: "https://github.com/Ansh8905/Android-Malware-Detection-Using-Machine-Learning-main",
    },
    {
        name: "Traffic-Flow-Prediction",
        desc: "ML model for urban traffic flow prediction using temporal pattern analysis.",
        lang: "Jupyter",
        color: "#DA5B0B",
        stars: 0,
        url: "https://github.com/Ansh8905/Traffic-Flow-Prediction",
    },
];


export default function GitHubAnalytics() {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

    return (
        <section id="github" className="section-padding relative">
            {/* Divider */}
            <div className="section-divider mb-[140px]" />

            <div
                className="glow-orb w-96 h-96 -left-48 top-1/3"
                style={{ background: "#00d4ff", opacity: 0.06 }}
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
                            <Github className="w-3 h-3" />
                            GitHub Analytics
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-white mt-5 leading-tight">
                            Open Source{" "}
                            <span className="gradient-text">Activity</span>
                        </h2>
                        <p className="text-slate-500 mt-5 text-[15px]">
                            58+ public repositories showcasing consistent learning and
                            building
                        </p>
                    </div>

                    {/* Stats Row */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-14">
                        {githubStats.map(({ label, value, icon }, i) => (
                            <motion.div
                                key={label}
                                className="glass-card p-8 text-center"
                                initial={{ opacity: 0, y: 20 }}
                                animate={inView ? { opacity: 1, y: 0 } : {}}
                                transition={{ delay: i * 0.1 }}
                            >
                                <div className="text-cyan-400 flex justify-center mb-4">
                                    {icon}
                                </div>
                                <div className="stat-num text-3xl">{value}</div>
                                <div className="text-slate-500 text-xs mt-2 uppercase tracking-widest font-medium">
                                    {label}
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Language Distribution */}
                    <motion.div
                        className="glass-card p-10"
                        initial={{ opacity: 0, y: 20 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.3 }}
                    >
                        <h3 className="text-white font-bold text-lg mb-8">
                            Language Distribution
                        </h3>
                        <div className="space-y-6">
                            {languages.map(({ name, percent, color }, i) => (
                                <div key={name}>
                                    <div className="flex justify-between mb-2">
                                        <span className="text-slate-300 text-sm font-medium flex items-center gap-2.5">
                                            <span
                                                className="w-2.5 h-2.5 rounded-full"
                                                style={{ background: color }}
                                            />
                                            {name}
                                        </span>
                                        <span className="text-slate-500 text-xs font-mono">
                                            {percent}%
                                        </span>
                                    </div>
                                    <div className="skill-bar">
                                        <motion.div
                                            className="skill-bar-fill"
                                            style={{ background: color }}
                                            initial={{ width: 0 }}
                                            animate={inView ? { width: `${percent}%` } : {}}
                                            transition={{
                                                duration: 1,
                                                delay: 0.4 + i * 0.1,
                                                ease: "easeOut",
                                            }}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}

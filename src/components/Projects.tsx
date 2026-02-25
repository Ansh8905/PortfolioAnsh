"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
    Github,
    ExternalLink,
    ChevronDown,
    ChevronUp,
    Layers,
    Zap,
    Brain,
    Code2,
} from "lucide-react";

const projects = [
    {
        id: 1,
        title: "Blinkit Clone – Instant Grocery Delivery",
        subtitle: "Production-grade cross-platform e-commerce app",
        icon: <Zap className="w-5 h-5" />,
        color: "#00d4ff",
        gradient: "from-cyan-500/15 to-blue-600/15",
        tags: ["Flutter", "Firebase", "Razorpay", "Google Maps API", "GetX", "Dart"],
        github: "https://github.com/Ansh8905/Blinkit-Clone",
        stars: 1,
        problem:
            "The on-demand grocery delivery market demands sub-10-minute delivery windows while managing complex inventory, real-time driver assignment, and frictionless payment flows.",
        solution:
            "Architected a full-fidelity Blinkit clone using Flutter's clean architecture pattern with Firebase as the real-time backend. Integrated Razorpay for secure checkout and Google Maps for live tracking.",
        architecture: [
            "Clean Architecture: Data / Domain / Presentation layer separation",
            "Firebase Firestore for real-time order state sync",
            "GetX state management for reactive UI",
            "Razorpay SDK with webhook-based order confirmation",
            "Google Maps Directions API for route rendering",
        ],
        impact: [
            "End-to-end delivery flow from cart → payment → live tracking",
            "Real-time updates with <500ms Firestore listener latency",
            "Modular architecture supports 10+ product categories",
            "Handles edge cases: retries, refunds, failure rollbacks",
        ],
        future: [
            "Driver app companion (Flutter)",
            "AI-based demand forecasting",
            "Multi-vendor support",
        ],
    },
    {
        id: 2,
        title: "RideShare Post-Booking Chatbot",
        subtitle: "NLP-powered intelligent support automation system",
        icon: <Brain className="w-5 h-5" />,
        color: "#7c3aed",
        gradient: "from-purple-500/15 to-indigo-600/15",
        tags: ["Node.js", "TypeScript", "NLP", "WebSockets", "React", "Express"],
        github: "https://github.com/Ansh8905/RideShare--Chatbot",
        stars: 0,
        problem:
            "RideShare operations face 60-70% repetitive support queries post-booking. A rule-only chatbot fails with ambiguous inputs. The challenge: resolving 80%+ queries without escalation.",
        solution:
            "Built a hybrid NLP + Decision Tree engine in TypeScript/Node.js. Natural language intent recognition classifies 15+ post-booking intents with keyword-weighted scoring.",
        architecture: [
            "Hybrid Engine: NLP intent classifier + deterministic Decision Tree",
            "15+ intent categories: tracking, cancel, refund, safety, payment",
            "Safety Detection Module with immediate escalation",
            "WebSocket-based real-time chat with session state",
            "Inactivity timeout with contextual conversation closure",
        ],
        impact: [
            "15+ distinct post-booking intent classifications",
            "Safety SOS detection with <200ms response trigger",
            "3-minute auto-completion reduces orphaned sessions ~90%",
            "Quick reply chips, typing indicators, card responses",
        ],
        future: [
            "GPT-4 integration for generative responses",
            "Sentiment analysis for escalation",
            "Multi-language support",
        ],
    },
    {
        id: 3,
        title: "Ride Demand Intelligence System",
        subtitle: "Spatio-temporal ML pipeline for driver allocation optimization",
        icon: <Layers className="w-5 h-5" />,
        color: "#10b981",
        gradient: "from-emerald-500/15 to-cyan-600/15",
        tags: ["Python", "XGBoost", "LightGBM", "GeoPandas", "LSTM", "Folium"],
        github: "https://github.com/Ansh8905/ride-demand-intelligence",
        stars: 0,
        problem:
            "Ride-hailing platforms lose 15-25% revenue from supply-demand imbalances. Without predictive positioning, drivers cluster in low-demand zones while high-demand areas go underserved.",
        solution:
            "Engineered a spatio-temporal ML pipeline with multi-horizon forecasting (15-min, 30-min, 1-hr), ensemble models, H3 hex indexing, and RL-inspired driver repositioning.",
        architecture: [
            "Multi-Model Ensemble: XGBoost + LSTM + Prophet",
            "H3 Hexagonal Grid for sub-km geospatial precision",
            "DBSCAN clustering for dynamic hotspot detection",
            "Supply-demand gap model with dynamic surge pricing",
            "Driver Repositioning Score: urgency-weighted heuristic",
        ],
        impact: [
            "3-horizon forecasting: 15-min, 30-min, 1-hr ahead",
            "Demand prediction with sub-10% MAPE",
            "Repositioning reduces deadhead miles by ~18%",
            "Revenue simulation quantifies improvement delta",
        ],
        future: [
            "Real-time inference API (FastAPI/gRPC)",
            "Live GPS stream integration",
            "Federated learning for city-wise personalization",
        ],
    },
    {
        id: 4,
        title: "Android Malware Detection – ML",
        subtitle: "Behavioral pattern-based mobile threat classification",
        icon: <Code2 className="w-5 h-5" />,
        color: "#f59e0b",
        gradient: "from-amber-500/15 to-orange-600/15",
        tags: ["Python", "Jupyter", "RandomForest", "XGBoost", "Feature Engineering"],
        github:
            "https://github.com/Ansh8905/Android-Malware-Detection-Using-Machine-Learning-main",
        stars: 0,
        problem:
            "Android's open ecosystem is a prime target for malware. Signature-based antivirus fails against polymorphic/zero-day threats. ML-based behavioral analysis provides robust detection.",
        solution:
            "Built a multi-classifier pipeline on Android app permission datasets using SMOTE for class balance and ensemble methods for high-precision classification.",
        architecture: [
            "Feature extraction from APK permission manifests",
            "SMOTE oversampling for balanced training",
            "Random Forest + XGBoost ensemble with cross-validation",
            "ROC-AUC curve analysis for threshold tuning",
        ],
        impact: [
            "94%+ classification accuracy on test partition",
            "Precision-recall optimized for minimal false negatives",
            "Feature importance for security audit trails",
        ],
        future: [
            "API for real-time APK scanning",
            "Deep learning (CNN on permission graph)",
        ],
    },
];

export default function Projects() {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 });
    const [expandedId, setExpandedId] = useState<number | null>(1);

    return (
        <section id="projects" className="section-padding relative">
            {/* Divider */}
            <div className="section-divider mb-[140px]" />

            <div
                className="glow-orb w-[600px] h-[600px] -right-48 top-1/4"
                style={{ background: "#00d4ff", opacity: 0.05 }}
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
                            Featured Work
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-white mt-5 leading-tight">
                            Projects &{" "}
                            <span className="gradient-text">Case Studies</span>
                        </h2>
                        <p className="text-slate-500 mt-5 max-w-xl mx-auto text-[15px] leading-relaxed">
                            Each project solves a real engineering problem — from instant
                            grocery delivery to AI-powered demand forecasting.
                        </p>
                    </div>

                    {/* Projects */}
                    <div className="space-y-8">
                        {projects.map((project, i) => {
                            const isOpen = expandedId === project.id;
                            return (
                                <motion.div
                                    key={project.id}
                                    className={`glass-card overflow-hidden project-card ${isOpen ? "border-cyan-400/20" : ""
                                        }`}
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={inView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ delay: i * 0.1 }}
                                    style={
                                        isOpen
                                            ? { boxShadow: `0 0 50px ${project.color}15` }
                                            : {}
                                    }
                                >
                                    {/* Header Row */}
                                    <button
                                        className="w-full text-left p-8 md:p-10"
                                        onClick={() =>
                                            setExpandedId(isOpen ? null : project.id)
                                        }
                                    >
                                        <div className="flex items-start justify-between gap-6">
                                            <div className="flex items-start gap-5">
                                                {/* Icon */}
                                                <div
                                                    className={`w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 bg-gradient-to-br ${project.gradient}`}
                                                    style={{ color: project.color }}
                                                >
                                                    {project.icon}
                                                </div>

                                                {/* Title */}
                                                <div>
                                                    <div className="flex items-center gap-3 mb-2">
                                                        <h3 className="text-white font-bold text-lg md:text-xl leading-snug">
                                                            {project.title}
                                                        </h3>
                                                        {project.stars > 0 && (
                                                            <span className="tech-badge text-yellow-400 border-yellow-400/20 bg-yellow-400/5">
                                                                ⭐ {project.stars}
                                                            </span>
                                                        )}
                                                    </div>
                                                    <p className="text-slate-500 text-sm mb-4">
                                                        {project.subtitle}
                                                    </p>

                                                    {/* Tags */}
                                                    <div className="flex flex-wrap gap-2.5">
                                                        {project.tags.map((t) => (
                                                            <span
                                                                key={t}
                                                                className="tech-badge"
                                                                style={{
                                                                    color: project.color,
                                                                    borderColor: `${project.color}25`,
                                                                }}
                                                            >
                                                                {t}
                                                            </span>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="flex items-center gap-4 flex-shrink-0">
                                                <a
                                                    href={project.github}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="p-2.5 text-slate-500 hover:text-white transition-colors"
                                                    onClick={(e) => e.stopPropagation()}
                                                >
                                                    <Github className="w-5 h-5" />
                                                </a>
                                                <div className="text-slate-500">
                                                    {isOpen ? (
                                                        <ChevronUp className="w-5 h-5" />
                                                    ) : (
                                                        <ChevronDown className="w-5 h-5" />
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </button>

                                    {/* Expanded Content */}
                                    <AnimatePresence>
                                        {isOpen && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: "auto", opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.4, ease: "easeInOut" }}
                                                className="overflow-hidden"
                                            >
                                                <div
                                                    className="px-8 md:px-10 pb-10 pt-2 border-t"
                                                    style={{ borderColor: `${project.color}15` }}
                                                >
                                                    <div className="grid md:grid-cols-2 gap-12 mt-8">
                                                        {/* Left */}
                                                        <div className="space-y-8">
                                                            {/* Problem */}
                                                            <div>
                                                                <h4
                                                                    className="text-xs font-bold uppercase tracking-[0.15em] mb-4 font-mono flex items-center gap-2"
                                                                    style={{ color: project.color }}
                                                                >
                                                                    <span
                                                                        className="block w-5 h-0.5"
                                                                        style={{ background: project.color }}
                                                                    />
                                                                    Problem Statement
                                                                </h4>
                                                                <p className="text-slate-400 text-sm leading-[1.8]">
                                                                    {project.problem}
                                                                </p>
                                                            </div>

                                                            {/* Solution */}
                                                            <div>
                                                                <h4
                                                                    className="text-xs font-bold uppercase tracking-[0.15em] mb-4 font-mono flex items-center gap-2"
                                                                    style={{ color: project.color }}
                                                                >
                                                                    <span
                                                                        className="block w-5 h-0.5"
                                                                        style={{ background: project.color }}
                                                                    />
                                                                    Solution
                                                                </h4>
                                                                <p className="text-slate-400 text-sm leading-[1.8]">
                                                                    {project.solution}
                                                                </p>
                                                            </div>

                                                            {/* Future */}
                                                            <div>
                                                                <h4
                                                                    className="text-xs font-bold uppercase tracking-[0.15em] mb-4 font-mono flex items-center gap-2"
                                                                    style={{ color: project.color }}
                                                                >
                                                                    <span
                                                                        className="block w-5 h-0.5"
                                                                        style={{ background: project.color }}
                                                                    />
                                                                    Roadmap
                                                                </h4>
                                                                <ul className="space-y-2.5">
                                                                    {project.future.map((f) => (
                                                                        <li
                                                                            key={f}
                                                                            className="text-slate-500 text-[13px] flex items-start gap-2.5"
                                                                        >
                                                                            <span
                                                                                style={{ color: project.color }}
                                                                                className="mt-0.5"
                                                                            >
                                                                                →
                                                                            </span>{" "}
                                                                            {f}
                                                                        </li>
                                                                    ))}
                                                                </ul>
                                                            </div>
                                                        </div>

                                                        {/* Right */}
                                                        <div className="space-y-8">
                                                            {/* Architecture */}
                                                            <div>
                                                                <h4
                                                                    className="text-xs font-bold uppercase tracking-[0.15em] mb-4 font-mono flex items-center gap-2"
                                                                    style={{ color: project.color }}
                                                                >
                                                                    <span
                                                                        className="block w-5 h-0.5"
                                                                        style={{ background: project.color }}
                                                                    />
                                                                    Architecture
                                                                </h4>
                                                                <ul className="space-y-3">
                                                                    {project.architecture.map((a) => (
                                                                        <li
                                                                            key={a}
                                                                            className="text-slate-400 text-[13px] leading-[1.7] flex items-start gap-3"
                                                                        >
                                                                            <span
                                                                                className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
                                                                                style={{
                                                                                    background: project.color,
                                                                                }}
                                                                            />
                                                                            {a}
                                                                        </li>
                                                                    ))}
                                                                </ul>
                                                            </div>

                                                            {/* Impact */}
                                                            <div
                                                                className="rounded-2xl p-7"
                                                                style={{
                                                                    background: `${project.color}08`,
                                                                    border: `1px solid ${project.color}15`,
                                                                }}
                                                            >
                                                                <h4
                                                                    className="text-xs font-bold uppercase tracking-[0.15em] mb-4 font-mono"
                                                                    style={{ color: project.color }}
                                                                >
                                                                    📈 Impact & Metrics
                                                                </h4>
                                                                <ul className="space-y-3">
                                                                    {project.impact.map((item) => (
                                                                        <li
                                                                            key={item}
                                                                            className="text-slate-300 text-[13px] leading-[1.7] flex items-start gap-2.5"
                                                                        >
                                                                            <span style={{ color: project.color }}>
                                                                                ✓
                                                                            </span>{" "}
                                                                            {item}
                                                                        </li>
                                                                    ))}
                                                                </ul>
                                                            </div>

                                                            <a
                                                                href={project.github}
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                                className="inline-flex items-center gap-2.5 text-sm font-medium transition-all"
                                                                style={{ color: project.color }}
                                                            >
                                                                <Github className="w-4 h-4" />
                                                                View on GitHub
                                                                <ExternalLink className="w-3 h-3" />
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </motion.div>
                            );
                        })}
                    </div>

                    {/* View All */}
                    <motion.div
                        className="text-center mt-16"
                        initial={{ opacity: 0 }}
                        animate={inView ? { opacity: 1 } : {}}
                        transition={{ delay: 0.6 }}
                    >
                        <a
                            href="https://github.com/Ansh8905"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-neon inline-flex items-center gap-2.5"
                        >
                            <Github className="w-4 h-4" />
                            View All 58+ Repositories
                            <ExternalLink className="w-3 h-3" />
                        </a>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}

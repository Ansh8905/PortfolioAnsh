"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
    Mail,
    Phone,
    MapPin,
    Github,
    Linkedin,
    ExternalLink,
    Send,
    CheckCircle,
    AlertCircle,
} from "lucide-react";

const contactInfo = [
    {
        icon: <Mail className="w-5 h-5" />,
        label: "Email",
        value: "anshpandey162@gmail.com",
        href: "mailto:anshpandey162@gmail.com",
        color: "#00d4ff",
    },
    {
        icon: <Phone className="w-5 h-5" />,
        label: "Phone",
        value: "+91 93054 08670",
        href: "tel:+919305408670",
        color: "#10b981",
    },
    {
        icon: <MapPin className="w-5 h-5" />,
        label: "Location",
        value: "Noida, India",
        href: null,
        color: "#f59e0b",
    },
    {
        icon: <Linkedin className="w-5 h-5" />,
        label: "LinkedIn",
        value: "ansh-pandey",
        href: "https://www.linkedin.com/in/ansh-pandey-854398252",
        color: "#0a66c2",
    },
    {
        icon: <Github className="w-5 h-5" />,
        label: "GitHub",
        value: "Ansh8905",
        href: "https://github.com/Ansh8905",
        color: "#e6edf3",
    },
    {
        icon: <ExternalLink className="w-5 h-5" />,
        label: "LeetCode",
        value: "Pandey10",
        href: "https://leetcode.com/u/Pandey10/",
        color: "#ffa116",
    },
];

export default function Contact() {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
    const [sending, setSending] = useState(false);
    const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
    const [form, setForm] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setSending(true);
        await new Promise((r) => setTimeout(r, 1500));
        setStatus("success");
        setSending(false);
        setForm({ name: "", email: "", subject: "", message: "" });
        setTimeout(() => setStatus("idle"), 5000);
    };

    return (
        <section id="contact" className="section-padding relative">
            {/* Divider */}
            <div className="section-divider mb-[140px]" />

            <div
                className="glow-orb w-96 h-96 -right-32 top-1/4"
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
                            Get in Touch
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-white mt-5 leading-tight">
                            Let&apos;s{" "}
                            <span className="gradient-text">Connect</span>
                        </h2>
                        <p className="text-slate-500 mt-5 max-w-lg mx-auto text-[15px] leading-relaxed">
                            Open for full-time roles, internships, and freelance
                            opportunities. Always happy to discuss interesting projects.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-5 gap-16 max-w-5xl mx-auto">
                        {/* Contact Form */}
                        <motion.div
                            className="lg:col-span-3"
                            initial={{ opacity: 0, x: -30 }}
                            animate={inView ? { opacity: 1, x: 0 } : {}}
                            transition={{ delay: 0.2 }}
                        >
                            <form onSubmit={handleSubmit} className="glass-card p-12">
                                <h3 className="text-white font-bold text-lg mb-8">
                                    Send a Message
                                </h3>

                                <div className="grid md:grid-cols-2 gap-8 mb-8">
                                    <div>
                                        <label className="text-slate-500 text-xs font-medium mb-2 block uppercase tracking-wider">
                                            Name
                                        </label>
                                        <input
                                            type="text"
                                            required
                                            value={form.name}
                                            onChange={(e) =>
                                                setForm({ ...form, name: e.target.value })
                                            }
                                            className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl px-5 py-3.5 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-cyan-400/40 transition-colors"
                                            placeholder="Your name"
                                        />
                                    </div>
                                    <div>
                                        <label className="text-slate-500 text-xs font-medium mb-2 block uppercase tracking-wider">
                                            Email
                                        </label>
                                        <input
                                            type="email"
                                            required
                                            value={form.email}
                                            onChange={(e) =>
                                                setForm({ ...form, email: e.target.value })
                                            }
                                            className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl px-5 py-3.5 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-cyan-400/40 transition-colors"
                                            placeholder="your@email.com"
                                        />
                                    </div>
                                </div>

                                <div className="mb-8">
                                    <label className="text-slate-500 text-xs font-medium mb-2 block uppercase tracking-wider">
                                        Subject
                                    </label>
                                    <input
                                        type="text"
                                        required
                                        value={form.subject}
                                        onChange={(e) =>
                                            setForm({ ...form, subject: e.target.value })
                                        }
                                        className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl px-6 py-4.5 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-cyan-400/40 transition-all duration-200"
                                        placeholder="What's this about?"
                                    />
                                </div>

                                <div className="mb-8">
                                    <label className="text-slate-500 text-xs font-medium mb-2 block uppercase tracking-wider">
                                        Message
                                    </label>
                                    <textarea
                                        required
                                        rows={5}
                                        value={form.message}
                                        onChange={(e) =>
                                            setForm({ ...form, message: e.target.value })
                                        }
                                        className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl px-5 py-4 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-cyan-400/40 transition-colors resize-none"
                                        placeholder="Tell me about your project or opportunity..."
                                    />
                                </div>

                                <motion.button
                                    type="submit"
                                    disabled={sending}
                                    className="btn-neon-filled w-full flex items-center justify-center gap-3 py-4"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    {sending ? (
                                        <div className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                                    ) : (
                                        <>
                                            <Send className="w-4 h-4" />
                                            Send Message
                                        </>
                                    )}
                                </motion.button>

                                {/* Status Messages */}
                                {status === "success" && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="mt-6 flex items-center gap-3 text-emerald-400 text-sm"
                                    >
                                        <CheckCircle className="w-5 h-5" />
                                        Message sent successfully! I&apos;ll get back to you soon.
                                    </motion.div>
                                )}

                                {status === "error" && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="mt-6 flex items-center gap-3 text-red-400 text-sm"
                                    >
                                        <AlertCircle className="w-5 h-5" />
                                        Something went wrong. Please try again.
                                    </motion.div>
                                )}
                            </form>
                        </motion.div>

                        {/* Contact Info */}
                        <motion.div
                            className="lg:col-span-2"
                            initial={{ opacity: 0, x: 30 }}
                            animate={inView ? { opacity: 1, x: 0 } : {}}
                            transition={{ delay: 0.3 }}
                        >
                            <div className="glass-card p-12 mb-10">
                                <h3 className="text-white font-bold text-lg mb-8">
                                    Contact Info
                                </h3>
                                <div className="space-y-9">
                                    {contactInfo.map(({ icon, label, value, href, color }) => {
                                        const Wrapper = href ? "a" : "div";
                                        return (
                                            <Wrapper
                                                key={label}
                                                {...(href
                                                    ? {
                                                        href,
                                                        target: href.startsWith("http")
                                                            ? "_blank"
                                                            : undefined,
                                                        rel: href.startsWith("http")
                                                            ? "noopener noreferrer"
                                                            : undefined,
                                                    }
                                                    : {})}
                                                className="flex items-center gap-4 group cursor-pointer"
                                            >
                                                <div
                                                    className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors"
                                                    style={{
                                                        background: `${color}10`,
                                                        color,
                                                    }}
                                                >
                                                    {icon}
                                                </div>
                                                <div>
                                                    <p className="text-slate-600 text-[11px] uppercase tracking-wider font-medium">
                                                        {label}
                                                    </p>
                                                    <p className="text-slate-300 text-sm font-medium group-hover:text-white transition-colors">
                                                        {value}
                                                    </p>
                                                </div>
                                            </Wrapper>
                                        );
                                    })}
                                </div>
                            </div>

                            {/* Availability */}
                            <div className="glass-card p-8">
                                <div className="flex items-center gap-3 mb-4">
                                    <span className="w-3 h-3 rounded-full bg-emerald-400 pulse-glow" />
                                    <span className="text-emerald-400 font-bold text-sm">
                                        Available for Opportunities
                                    </span>
                                </div>
                                <p className="text-slate-500 text-[13px] leading-[1.7]">
                                    Currently seeking full-time roles and internships in Full
                                    Stack Development or AI/ML Engineering. Open to remote and
                                    onsite positions.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

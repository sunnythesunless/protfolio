import { motion } from "framer-motion";
import { ArrowUpRight, Github, Linkedin, Twitter } from "lucide-react";
import { portfolioData } from "../data";

const socials = [
    { key: "github", icon: Github, label: "GitHub" },
    { key: "linkedin", icon: Linkedin, label: "LinkedIn" },
    { key: "twitter", icon: Twitter, label: "Twitter" },
];

export function Footer() {
    const { personal, social } = portfolioData;

    return (
        <footer id="contact" className="min-h-screen flex flex-col justify-between pt-24 pb-8 px-6 lg:px-16 border-t border-white/5 bg-gradient-to-b from-black to-[#0a0a0a]">
            {/* Main Content */}
            <div className="flex-1 flex flex-col lg:grid lg:grid-cols-2 gap-12 lg:gap-24 items-start lg:items-center">
                {/* Left: Headline and CTA */}
                <div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="inline-block py-1 px-3 rounded-full bg-white/5 border border-white/10 text-xs text-[#a855f7] font-medium tracking-wider mb-8">
                            OPEN TO WORK
                        </span>

                        <h2 className="text-5xl lg:text-7xl font-bold tracking-tight leading-tight mb-8 text-white">
                            Have an idea?<br />
                            <span className="text-[#3f3f46]">Let's build it.</span>
                        </h2>

                        <p className="text-[#a1a1aa] text-lg lg:text-xl max-w-md mb-12 leading-relaxed">
                            I'm currently available for freelance work and full-time opportunities. Reach out to discuss your next project.
                        </p>

                        <motion.a
                            href={`mailto:${personal.email}?subject=Hey Kunal, let's work together!`}
                            className="group inline-flex items-center gap-4 bg-white text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-[#a855f7] hover:text-white transition-all duration-300"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            Start a conversation
                            <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition-transform" />
                        </motion.a>
                    </motion.div>
                </div>

                {/* Right: Info and Socials */}
                <div className="w-full lg:pl-12 lg:border-l border-white/5 space-y-12">
                    {/* Contact Details */}
                    <div className="space-y-6">
                        <div>
                            <h3 className="text-sm font-medium text-[#71717a] uppercase tracking-widest mb-2">Email</h3>
                            <a href={`mailto:${personal.email}?subject=Hey Kunal, let's work together!`} className="text-lg lg:text-xl text-white hover:text-[#a855f7] transition-colors font-medium">
                                {personal.email}
                            </a>
                        </div>
                    </div>

                    {/* Social Links */}
                    <div>
                        <h3 className="text-sm font-medium text-[#71717a] uppercase tracking-widest mb-4">Connect</h3>
                        <div className="flex flex-wrap gap-4">
                            {socials.map(({ key, icon: Icon, label }) => {
                                const url = social[key as keyof typeof social];
                                if (!url) return null;
                                return (
                                    <a
                                        key={key}
                                        href={url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group flex items-center gap-3 px-5 py-3 rounded-xl border border-white/10 hover:border-[#a855f7] hover:bg-[#a855f7]/10 transition-all cursor-pointer"
                                    >
                                        <Icon className="w-5 h-5 text-[#a1a1aa] group-hover:text-white transition-colors" />
                                        <span className="text-[#a1a1aa] group-hover:text-white font-medium">{label}</span>
                                    </a>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="flex flex-col lg:flex-row items-center justify-between gap-4 pt-12 border-t border-white/5 mt-auto">
                <p className="text-sm text-[#3f3f46]">
                    © {new Date().getFullYear()} {personal.name}. All rights reserved.
                </p>
                <p className="text-sm text-[#3f3f46]">
                    Designed & Built with <span className="text-[#a855f7]">❤</span>
                </p>
            </div>
        </footer>
    );
}

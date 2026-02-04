import { motion } from "framer-motion";
import { portfolioData } from "../data";

export function Hero() {
    const { personal } = portfolioData;
    const nameParts = personal.name.split(" ");

    return (
        <section id="home" className="min-h-screen relative grid-bg">
            {/* Desktop: Two column layout */}
            <div className="hidden lg:grid lg:grid-cols-2 min-h-screen">
                {/* Left - Name section */}
                <div className="flex flex-col justify-between p-12 border-r border-white/5">
                    {/* Top - spacer */}
                    <div />

                    {/* Center - Giant Name */}
                    <div className="stagger-children">
                        <h1 className="text-[9vw] font-black leading-[0.85] tracking-tighter">
                            {nameParts[0]}
                        </h1>
                        {nameParts[1] && (
                            <h1 className="text-[9vw] font-black leading-[0.85] tracking-tighter text-outline">
                                {nameParts[1]}
                            </h1>
                        )}
                    </div>

                    {/* Bottom */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="flex items-center gap-8"
                    >
                        {personal.available && (
                            <div className="flex items-center gap-3">
                                <span className="w-2 h-2 rounded-full bg-[#a855f7] animate-pulse" />
                                <span className="text-sm text-[#a1a1aa]">Available</span>
                            </div>
                        )}
                        <a href="#contact" className="text-sm text-[#71717a] line-animated">
                            say hello →
                        </a>
                        <a
                            href={personal.resumeUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-[#71717a] line-animated"
                        >
                            read resume ↗
                        </a>
                    </motion.div>
                </div>

                {/* Right - Content */}
                <div className="flex flex-col justify-center p-16">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                        className="max-w-md"
                    >
                        <p className="text-xs uppercase tracking-[0.3em] text-[#a855f7] mb-6">
                            {personal.title}
                        </p>

                        <h2 className="text-3xl lg:text-4xl font-light leading-relaxed mb-8">
                            {personal.tagline}
                        </h2>

                        <div className="flex flex-wrap gap-3 mb-12">
                            <span className="tag">Full Stack Dev</span>
                            <span className="tag">AI Integration</span>
                            <span className="tag">Authentication</span>
                            <span className="tag">Databases</span>
                        </div>

                        <a
                            href="#projects"
                            className="group inline-flex items-center gap-4 text-sm uppercase tracking-widest"
                        >
                            <span className="w-12 h-px bg-white/30 group-hover:w-20 group-hover:bg-[#a855f7] transition-all duration-500" />
                            Explore Work
                        </a>
                    </motion.div>
                </div>
            </div>

            {/* Mobile Layout */}
            <div className="lg:hidden min-h-screen flex flex-col justify-center p-8">
                <div className="stagger-children mb-12">
                    <h1 className="text-[18vw] font-black leading-[0.85] tracking-tighter">
                        {nameParts[0]}
                    </h1>
                    {nameParts[1] && (
                        <h1 className="text-[18vw] font-black leading-[0.85] tracking-tighter text-outline">
                            {nameParts[1]}
                        </h1>
                    )}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                >
                    <p className="text-xs uppercase tracking-[0.3em] text-[#a855f7] mb-4">
                        {personal.title}
                    </p>

                    <h2 className="text-2xl font-light leading-relaxed mb-8">
                        {personal.tagline}
                    </h2>

                    <div className="flex flex-wrap gap-2 mb-8">
                        <span className="tag">Full Stack Dev</span>
                        <span className="tag">AI Integration</span>
                        <span className="tag">Authentication</span>
                        <span className="tag">Databases</span>
                    </div>

                    <a
                        href={personal.resumeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-3 border border-white/20 text-sm uppercase tracking-widest hover:bg-white hover:text-black transition-all inline-block"
                    >
                        Resume
                    </a>

                    {personal.available && (
                        <div className="flex items-center gap-3 mt-12">
                            <span className="w-2 h-2 rounded-full bg-[#a855f7] animate-pulse" />
                            <span className="text-sm text-[#a1a1aa]">Available for work</span>
                        </div>
                    )}
                </motion.div>
            </div>

            {/* Scroll indicator - desktop only */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="absolute right-8 top-1/2 -translate-y-1/2 hidden lg:block"
            >
                <p className="vertical-text text-xs tracking-[0.3em] text-[#3f3f46]">
                    SCROLL TO EXPLORE
                </p>
            </motion.div>
        </section>
    );
}

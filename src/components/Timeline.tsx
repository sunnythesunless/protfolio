import { motion } from "framer-motion";
import { portfolioData } from "../data";

export function Timeline() {
    const { experience } = portfolioData;

    return (
        <section id="experience" className="py-24 lg:py-32 px-6 lg:px-16">
            {/* Header */}
            <div className="mb-12">
                <h2 className="text-4xl lg:text-6xl font-bold tracking-tight mb-4">Experience</h2>
                <div className="h-1 w-20 bg-[#a855f7]" />
            </div>

            {/* Experience grid */}
            <div className="grid lg:grid-cols-1 gap-8 max-w-4xl">
                {experience.map((exp, i) => (
                    <motion.article
                        key={exp.id}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="group relative pl-8 border-l border-white/10 hover:border-[#a855f7] transition-colors duration-500"
                    >
                        {/* Timeline Dot */}
                        <div className="absolute left-[-5px] top-2 w-2.5 h-2.5 rounded-full bg-[#1a1a1a] border border-white/20 group-hover:border-[#a855f7] group-hover:bg-[#a855f7] transition-all" />

                        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-2">
                            <h3 className="text-xl lg:text-2xl font-bold text-white group-hover:text-[#a855f7] transition-colors">
                                {exp.role}
                            </h3>
                            <span className="text-sm font-mono text-[#71717a]">{exp.period}</span>
                        </div>

                        <p className="text-[#a855f7] font-medium mb-4 text-sm tracking-wide uppercase">
                            {exp.company} <span className="text-[#3f3f46]">·</span> {exp.location}
                        </p>

                        <p className="text-[#a1a1aa] leading-relaxed mb-6 max-w-2xl">
                            {exp.description}
                        </p>

                        {/* Tech */}
                        <div className="flex flex-wrap gap-2">
                            {exp.technologies.map((tech) => (
                                <span key={tech} className="text-xs text-[#71717a] bg-white/5 px-2 py-1 rounded hover:bg-white/10 transition-colors">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </motion.article>
                ))}
            </div>
        </section>
    );
}

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { portfolioData } from "../data";

export function BentoProjects() {
    const { projects } = portfolioData;

    return (
        <section id="projects" className="py-24 lg:py-32 px-6 lg:px-16">
            {/* Section header */}
            <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-4">
                <h2 className="text-4xl lg:text-6xl font-bold tracking-tight">Selected Work</h2>
                <p className="text-sm text-[#71717a] max-w-xs leading-relaxed">
                    A curated selection of projects showcasing problem-solving and craft.
                </p>
            </div>

            {/* Projects list */}
            <div className="space-y-4">
                {projects.map((project, i) => (
                    <motion.a
                        key={project.id}
                        href={project.demo || project.github || "#"}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="group block p-6 lg:p-10 border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] hover:border-[#a855f7]/30 transition-all duration-300 rounded-2xl"
                    >
                        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                            {/* Left */}
                            <div className="flex-1">
                                <div className="flex items-center gap-4 mb-2">
                                    <h3 className="text-2xl lg:text-3xl font-bold group-hover:text-[#a855f7] transition-colors">
                                        {project.title}
                                    </h3>
                                </div>
                                <p className="text-[#a1a1aa] mb-4 max-w-xl text-sm lg:text-base leading-relaxed">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag) => (
                                        <span key={tag} className="text-xs font-medium text-[#71717a] border border-white/5 px-2 py-1 rounded">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Right - Action */}
                            <div className="flex items-center justify-end">
                                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-[#a855f7] group-hover:border-[#a855f7] transition-all scale-100 group-hover:scale-110">
                                    <ArrowUpRight className="w-5 h-5 text-[#a1a1aa] group-hover:text-black transition-colors" />
                                </div>
                            </div>
                        </div>
                    </motion.a>
                ))}
            </div>
        </section>
    );
}

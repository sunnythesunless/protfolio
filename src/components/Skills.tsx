import { motion } from "framer-motion";
import { portfolioData } from "../data";

const categoryLabels: Record<string, string> = {
    languages: "Languages",
    frontend: "Frontend",
    backend: "Backend & Systems",
    database: "Database",
    tools: "Developer Tools",
    specialized: "Specialized",
};

export function Skills() {
    const { skills } = portfolioData;

    return (
        <section id="skills" className="py-24 lg:py-32 px-6 lg:px-16 border-t border-white/5">
            {/* Header */}
            <div className="mb-12">
                <h2 className="text-4xl lg:text-6xl font-bold tracking-tight mb-4">Technical Skills</h2>
                <div className="h-1 w-20 bg-[#a855f7]" />
            </div>

            {/* Skills Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {Object.entries(skills).map(([category, items], i) => (
                    <motion.div
                        key={category}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="group"
                    >
                        <h3 className="text-sm font-medium text-[#a855f7] uppercase tracking-widest mb-4">
                            {categoryLabels[category] || category}
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            {(items as string[]).map((skill) => (
                                <span
                                    key={skill}
                                    className="px-3 py-2 text-sm text-[#a1a1aa] bg-white/[0.03] border border-white/5 rounded-lg hover:bg-white/[0.08] hover:border-[#a855f7]/30 hover:text-white transition-all cursor-default"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}

import { portfolioData } from "../data";

export function TechMarquee() {
    const { techStack } = portfolioData;
    const doubled = [...techStack, ...techStack];

    return (
        <section className="py-8 border-y border-white/5 overflow-hidden">
            <div className="flex animate-marquee whitespace-nowrap">
                {doubled.map((tech, i) => (
                    <span
                        key={`${tech}-${i}`}
                        className="mx-12 text-[8vw] font-black text-[#2a2a2a] hover:text-white transition-colors duration-300"
                    >
                        {tech}
                    </span>
                ))}
            </div>
        </section>
    );
}

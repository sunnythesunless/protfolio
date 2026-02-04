// Portfolio Data - Kunal's Information
export const portfolioData = {
    personal: {
        name: "Kunal",
        title: "Full Stack Developer",
        tagline: "Full-stack developer focused on APIs, authentication, databases, and real-world AI integrations.",
        email: "workwithgonebone@gmail.com",
        location: "India",
        available: true,
        resumeUrl: "/kunal.pdf",
    },

    social: {
        github: "https://github.com/sunnythesunless",
        linkedin: "https://linkedin.com/in/kunal",
        twitter: "https://leetcode.com/u/bonegone", // Using LeetCode instead
        email: "mailto:workwithgonebone@gmail.com",
    },

    techStack: [
        "React",
        "Next.js",
        "TypeScript",
        "Node.js",
        "MongoDB",
        "PostgreSQL",
        "Tailwind CSS",
        "Java",
        "Python",
        "Docker",
    ],

    projects: [
        {
            id: 1,
            title: "StockPulse",
            description: "AI-Powered Market Engine with real-time stock tracking, Inngest background jobs, AI-driven sentiment analysis, automated price alerts via Nodemailer, and TradingView widgets.",
            image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80",
            tags: ["Next.js", "Inngest", "MongoDB", "AI/LLM", "TradingView"],
            github: "https://github.com/sunnythesunless/stock-pulse",
            demo: "https://stockpulsee.vercel.app",
            featured: true,
            size: "large" as const,
        },
        {
            id: 2,
            title: "InsightOps",
            description: "Knowledge Governance System with RAG pipeline, TF-IDF semantic drift detection, 31 APIs, 25 custom hooks, and 89+ unit tests. Automates knowledge decay detection.",
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
            tags: ["Next.js", "RAG", "MongoDB", "AI", "TF-IDF"],
            github: "https://github.com/sunnythesunless/kds-client",
            demo: "https://kdsss.vercel.app",
            featured: true,
            size: "large" as const,
        },
        {
            id: 3,
            title: "Classroom",
            description: "Institutional Management Hub with 30+ component library, strict RBAC for roles, Arcjet bot protection, Better Auth, Drizzle ORM, and NeonDB with automated enrollment.",
            image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&q=80",
            tags: ["React", "Tailwind CSS", "RBAC", "Drizzle ORM", "NeonDB"],
            github: "https://github.com/sunnythesunless/unidash-client",
            demo: "https://unidash-client.vercel.app",
            featured: false,
            size: "medium" as const,
        },
    ],

    experience: [
        {
            id: 1,
            role: "Web Development Intern",
            company: "Prodigy InfoTech",
            location: "Remote",
            period: "June 2025 - July 2025",
            description: "Architected responsive web interfaces using React and Tailwind CSS. Utilized Shadcn UI for pixel-perfect design. Optimized JavaScript DOM interactions and received 'Outstanding' remarks for technical execution.",
            technologies: ["React", "Tailwind CSS", "Shadcn UI", "JavaScript", "HTML5"],
        },
        {
            id: 2,
            role: "Java Programming Intern",
            company: "InternPe",
            location: "Remote",
            period: "Sept 2024",
            description: "Engineered backend logic using Core Java and OOP principles. Designed and validated complex Data Structures to resolve system-level algorithmic challenges. Recognized for high technical proficiency.",
            technologies: ["Java", "OOP", "Data Structures", "Algorithms"],
        },
    ],

    skills: {
        languages: ["JavaScript (ES6+)", "TypeScript", "Java", "Python", "HTML5", "CSS3"],
        frontend: ["Next.js", "React", "Tailwind CSS 4", "TanStack Query", "Framer Motion", "Shadcn UI"],
        backend: ["Node.js", "Express.js", "AI Integration", "Inngest", "RESTful APIs"],
        database: ["MongoDB", "PostgreSQL", "Drizzle ORM", "NeonDB"],
        tools: ["Git", "GitHub", "VS Code", "Postman", "Docker"],
        specialized: ["System Design", "DSA", "Machine Learning", "Operating Systems"],
    },

    education: [
        {
            id: 1,
            degree: "Computer Science",
            institution: "University",
            period: "2022 - Present",
            description: "Focused on software engineering, algorithms, and system design.",
        },
    ],
};

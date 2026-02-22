import { IconType } from "react-icons";
import {
    SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiNodedotjs, SiGraphql,
    SiShopify, SiWordpress, SiMysql, SiPostgresql, SiDocker, SiGit, SiFigma
} from "react-icons/si";

export interface ExperienceItem {
    id: string;
    role: string;
    company: string;
    period: string;
    description: string;
    skills: string[];
}

export interface TechCategory {
    id: string;
    title: string;
    skills: { name: string; icon: IconType }[];
}

export const bioData = {
    heading: "More Than Just Code",
    subheading: "I bridge the gap between complex engineering and intuitive design.",
    paragraphs: [
        "My journey started with a curiosity for how things work on the web. Over the years, that curiosity has evolved into a passion for building robust, scalable applications that solve real-world problems.",
        "I specialize in the e-commerce ecosystem, leveraging platforms like Shopify and WordPress to build high-converting storefronts. But my expertise doesn't stop there—I love diving into the modern JavaScript stack to build custom web applications from the ground up.",
        "When I'm not coding, you'll find me exploring new design trends, optimizing workflow automation, or sharing knowledge with the developer community."
    ]
};

export const experienceData: ExperienceItem[] = [
    {
        id: "exp-1",
        role: "Senior Frontend Engineer",
        company: "Tech Solutions Inc.",
        period: "2023 - Present",
        description: "Leading the frontend team in migration to Next.js, improving site performance by 40%. Architected a reusable component library used across 5 internal products.",
        skills: ["Next.js", "TypeScript", "Micro-frontends"]
    },
    {
        id: "exp-2",
        role: "Shopify Developer",
        company: "E-comm Agency",
        period: "2021 - 2023",
        description: "Developed custom themes for 20+ DTC brands. Implemented complex upsell logic and headless storefronts using Hydrogen.",
        skills: ["Shopify Liquid", "React", "Hydrogen"]
    },
    {
        id: "exp-3",
        role: "Web Developer",
        company: "Freelance",
        period: "2019 - 2021",
        description: "Delivered full-stack WordPress solutions and custom PHP applications for small to medium businesses.",
        skills: ["WordPress", "PHP", "MySQL"]
    }
];

export const techStackData: TechCategory[] = [
    {
        id: "frontend",
        title: "Frontend",
        skills: [
            { name: "React", icon: SiReact },
            { name: "Next.js", icon: SiNextdotjs },
            { name: "TypeScript", icon: SiTypescript },
            { name: "Tailwind", icon: SiTailwindcss },
        ]
    },
    {
        id: "backend",
        title: "Backend",
        skills: [
            { name: "Node.js", icon: SiNodedotjs },
            { name: "GraphQL", icon: SiGraphql },
            { name: "MySQL", icon: SiMysql },
            { name: "PostgreSQL", icon: SiPostgresql },
        ]
    },
    {
        id: "platforms",
        title: "Platforms & Tools",
        skills: [
            { name: "Shopify", icon: SiShopify },
            { name: "WordPress", icon: SiWordpress },
            { name: "Docker", icon: SiDocker },
            { name: "Git", icon: SiGit },
            { name: "Figma", icon: SiFigma },
        ]
    }
];

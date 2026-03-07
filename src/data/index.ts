import {
    SiHtml5,
    SiCss3,
    SiJavascript,
    SiJquery,
    SiPhp,
    SiShopify,
    SiWordpress,
    SiGit,
    SiFigma,
    SiSass,
    SiBootstrap,
} from "react-icons/si";
import { TbDropletFilled } from "react-icons/tb";
import type { IconType } from "react-icons";

export type Skill = {
    label: string;
    icon: IconType;
    color: string;
};

export type Project = {
    title: string;
    description: string;
    tech: string[];
    link: string;
    repo?: string;
    accent: string;
    image?: string;
};

export type Testimonial = {
    name: string;
    role: string;
    quote: string;
};

export type CommerceTab = {
    id: "shopify" | "wordpress";
    label: string;
    badge: string;
    projects: Project[];
};

export const skills: Skill[] = [
    { label: "HTML", icon: SiHtml5, color: "text-orange-500" },
    { label: "CSS", icon: SiCss3, color: "text-blue-500" },
    { label: "JavaScript", icon: SiJavascript, color: "text-amber-400" },
    { label: "jQuery", icon: SiJquery, color: "text-blue-400" },
    { label: "SCSS", icon: SiSass, color: "text-pink-500" },
    { label: "Bootstrap", icon: SiBootstrap, color: "text-purple-500" },
    { label: "PHP", icon: SiPhp, color: "text-indigo-400" },
    { label: "Liquid", icon: TbDropletFilled, color: "text-purple-400" },
    { label: "Shopify", icon: SiShopify, color: "text-emerald-400" },
    { label: "WordPress", icon: SiWordpress, color: "text-sky-400" },
    { label: "Git", icon: SiGit, color: "text-orange-400" },
    { label: "Figma", icon: SiFigma, color: "text-pink-400" },
];

export const projects: Project[] = [
    {
        title: "Conversion-First Shopify Store",
        description:
            "High-performing Shopify theme with custom Liquid sections, A/B tested layouts, and blazing fast Lighthouse scores.",
        tech: ["Shopify", "Liquid", "Next.js", "Tailwind", "Klaviyo"],
        link: "https://shopify.com",
        accent: "from-blue-500/70 via-cyan-400/60 to-sky-500/50",
    },
    {
        title: "Headless WordPress Showcase",
        description:
            "Headless WordPress with Next.js App Router, ISR, and dynamic content blocks for marketers.",
        tech: ["WordPress", "GraphQL", "Next.js", "Framer Motion"],
        link: "https://wordpress.com",
        accent: "from-purple-500/70 via-indigo-400/60 to-fuchsia-500/50",
    },
    {
        title: "Checkout Funnel Optimizer",
        description:
            "Custom Shopify app embedding analytics to detect drop-offs and surface UX experiments.",
        tech: ["Shopify App", "Node.js", "React", "Tailwind"],
        link: "https://apps.shopify.com",
        accent: "from-emerald-500/70 via-teal-400/60 to-cyan-500/50",
    },
];

export const commerceTabs: CommerceTab[] = [
    {
        id: "shopify",
        label: "Shopify",
        badge: "Performance + CRO",
        projects: [
            {
                title: "Glow Essentials",
                description: "Custom Shopify 2.0 theme with bundled offers and slide-out cart.",
                tech: ["Shopify", "Liquid", "Tailwind"],
                link: "#",
                accent: "from-blue-500/70 via-cyan-400/60 to-sky-500/50",
            },
            {
                title: "Peak Outdoors",
                description: "Headless Shopify storefront powered by Hydrogen + custom sections.",
                tech: ["Hydrogen", "React", "Shopify"],
                link: "#",
                accent: "from-emerald-500/70 via-teal-400/60 to-cyan-500/50",
            },
        ],
    },
    {
        id: "wordpress",
        label: "WordPress",
        badge: "Marketing + Publishing",
        projects: [
            {
                title: "SaaS Pulse",
                description: "Headless WP + Next.js with block-based landing page builder.",
                tech: ["WordPress", "GraphQL", "Next.js"],
                link: "#",
                accent: "from-purple-500/70 via-indigo-400/60 to-fuchsia-500/50",
            },
            {
                title: "Editorial Flow",
                description: "Custom Gutenberg blocks, animations, and SEO-ready architecture.",
                tech: ["WordPress", "Gutenberg", "Framer"],
                link: "#",
                accent: "from-pink-500/70 via-rose-400/60 to-orange-400/50",
            },
        ],
    },
];

export const testimonials: Testimonial[] = [
    {
        name: "Sarah Jenkins",
        role: "E-Commerce Director, Lumina Beauty",
        quote:
            "Vishnu completely transformed our Shopify store. Not only did he drastically improve our mobile load times, but his custom theme tweaks also helped increase our checkout conversion rate by over 15% in just the first month.",
    },
    {
        name: "Marcus Reynolds",
        role: "Founder, Velocity Gear",
        quote:
            "We needed a complex WordPress migration done quickly and flawlessly. Mr. Coder delivered precisely that. His eye for design and attention to performance details truly sets him apart from other developers I've worked with.",
    },
    {
        name: "Priya Desai",
        role: "Project Manager, Elevate Digital",
        quote:
            "I've hired Vishnu for multiple client projects now, and he never misses a deadline. His ability to translate complex design mockups into pixel-perfect, highly responsive code is incredibly impressive.",
    },
    {
        name: "David Alcorn",
        role: "Owner, Alcorn Coffee Roasters",
        quote:
            "Working with Vishnu was a breeze. He listened to exactly what we wanted for our online store, simplified our messy backend, and gave our customers a smooth purchasing experience. Highly recommended.",
    }
];

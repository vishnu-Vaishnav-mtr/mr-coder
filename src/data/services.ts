import { IconType } from "react-icons";
import { SiShopify, SiWordpress, SiReact, SiNextdotjs } from "react-icons/si";
import { FaCode, FaRocket, FaSearch, FaCogs } from "react-icons/fa";

export interface Service {
    id: string;
    title: string;
    description: string;
    icon: IconType;
    features: string[];
    accent: string;
}

export interface ProcessStep {
    number: string;
    title: string;
    description: string;
    icon: IconType;
}

export const servicesData: Service[] = [
    {
        id: "shopify",
        title: "Shopify Development",
        description: "Custom themes and apps that drive conversions. I build performant storefronts tailored to your brand.",
        icon: SiShopify,
        features: [
            "Custom 2.0 Themes",
            "Headless Commerce (Hydrogen)",
            "Speed Optimization (Core Web Vitals)",
            "App Integration & Customization",
            "Checkout Functionality",
        ],
        accent: "text-emerald-400",
    },
    {
        id: "wordpress",
        title: "WordPress Solutions",
        description: "Scalable, secure, and easy-to-manage websites. From custom plugin development to headless architectures.",
        icon: SiWordpress,
        features: [
            "Custom Theme Development",
            "Headless WordPress (Next.js)",
            "Plugin Development",
            "Performance Tuning",
            "API Integrations",
        ],
        accent: "text-blue-400",
    },
    {
        id: "web-apps",
        title: "Web Applications",
        description: "Modern, interactive web applications built with the latest tech stack for speed and SEO.",
        icon: SiReact, // Using React icon as a generic "Web App" symbol
        features: [
            "Next.js & React Applications",
            "SaaS Product MVP",
            "Interactive Dashboards",
            "API Development",
            "Real-time Features",
        ],
        accent: "text-cyan-400",
    },
];

export const processSteps: ProcessStep[] = [
    {
        number: "01",
        title: "Discovery",
        description: "We start by diving deep into your business goals, target audience, and technical requirements to build a solid foundation.",
        icon: FaSearch,
    },
    {
        number: "02",
        title: "Strategy & Design",
        description: "I create a tailored roadmap and technical architecture, ensuring the solution is scalable, secure, and user-centric.",
        icon: FaCogs,
    },
    {
        number: "03",
        title: "Development",
        description: "Clean, semantic code is written with a focus on performance. I keep you updated with regular sprints and demos.",
        icon: FaCode,
    },
    {
        number: "04",
        title: "Launch & Support",
        description: "After rigorous testing, we deploy. I provide documentation and ongoing support to ensure your success.",
        icon: FaRocket,
    },
];

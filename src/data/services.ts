import { IconType } from "react-icons";
import { SiShopify, SiWordpress } from "react-icons/si";
import { BsBootstrap } from "react-icons/bs";
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
        description: "I build modern Shopify stores that are fast, easy to manage, and designed to increase sales. I create custom themes and customize stores based on your brand and business needs.",
        icon: SiShopify,
        features: [
            "Custom Shopify 2.0 Theme Development",
            "Shopify Store Setup and Customization",
            "Shopify Liquid Development",
            "Speed and Performance Optimization",
            "Shipping and Multilangual helps",
        ],
        accent: "text-emerald-400",
    },
    {
        id: "wordpress",
        title: "WordPress Solutions",
        description: "I develop professional WordPress websites that are reliable, flexible, and easy to update. WooCommerce websites , Realstate Website",
        icon: SiWordpress,
        features: [
            "WordPress Plugin Development",
            "WooCommerce Store Development",
            "Custom Post Types and Dynamic Content",
            "API Integrations",
            "Website Speed Optimization",
        ],
        accent: "text-blue-400",
    },
    {
        id: "web-apps",
        title: "Web Applications",
        description: "I create modern websites using clean code and responsive design. My focus is to build websites that load fast, work well on all devices, and provide a great user experience.",
        icon: BsBootstrap, 
        features: [
            "Responsive Frontend Development",
            "HTML, CSS, SCSS, JavaScript",
            "Bootstrap",
            "SEO-Friendly Website Structure",
            "Website Performance Optimization",
        ],
        accent: "text-cyan-400",
    },
];

export const processSteps: ProcessStep[] = [
    {
        number: "01",
        title: "Discovery",
        description: "First, I understand business, goals, and project requirements. This helps create a clear plan before starting development.",
        icon: FaSearch,
    },
    {
        number: "02",
        title: "Strategy & Design",
        description: "I plan the website structure, features, and technical setup to make sure the project is organized and easy to scale.",
        icon: FaCogs,
    },
    {
        number: "03",
        title: "Development",
        description: "I build the website using clean code and modern development practices. I focus on performance, responsiveness, and a smooth user experience.",
        icon: FaCode,
    },
    {
        number: "04",
        title: "Launch & Support",
        description: "After testing everything carefully, the website is launched. I also provide support and guidance to help client to manage and grow website.",
        icon: FaRocket,
    },
];

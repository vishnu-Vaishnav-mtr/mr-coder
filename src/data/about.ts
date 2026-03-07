import { IconType } from "react-icons";
import {
    SiHtml5,
    SiCss3,
    SiJavascript,
    SiSass,
    SiBootstrap,
    SiJquery,
    SiPhp,
    SiMysql,
    SiShopify,
    SiWordpress,
    SiWoocommerce,
    SiGit,
    SiGithub,
    SiFigma
} from "react-icons/si";
export interface ExperienceItem {
    id: string;
    role: string;
    company: string;
    period: string;
    description: string[];
    skills: string[];
}

export interface TechCategory {
    id: string;
    title: string;
    skills: { name: string; icon: IconType }[];
}

export const bioData = {
    heading: "Shopify & WordPress Developer",
    subheading: "I bridge the gap between complex engineering and intuitive design.",
    paragraphs: [
        "Vishnu Vaishnav is a professional Shopify and WordPress developer focused on building high-quality, scalable websites that help businesses grow in the digital world. With strong expertise in e-commerce development and custom website solutions, he works closely with businesses, entrepreneurs, and brands to transform their ideas into powerful online platforms.",
        "Specializing in Shopify store development and Shopify theme customization, Vishnu creates modern, fast, and conversion-focused e-commerce stores designed to deliver an excellent user experience and maximize online sales. From Shopify store setup to advanced theme development, Shopify theme architecture, and Shopify storefront customization, he ensures that every Shopify project is optimized for performance, flexibility, and long-term growth.",
        "In addition to Shopify development, Vishnu has extensive experience building professional WordPress websites for a wide range of industries. Whether it’s an e-commerce store powered by WooCommerce, a business website, or a real estate platform with custom property listings, he develops solutions that are both visually engaging and technically reliable.",
        "His development expertise includes HTML, CSS, SCSS, Bootstrap, jQuery, JavaScript, Shopify Liquid, JSON structures, and advanced WordPress tools such as Elementor, Divi Theme, and Gutenberg Builder. He also has strong experience in WooCommerce development, custom post types, plugin development, and building custom website functionality tailored to specific business requirements.",
        "Vishnu also focuses on modern web development practices including API integrations, website speed optimization, SEO-friendly development, responsive design, and cross-browser compatibility to ensure every website performs smoothly across devices, browsers, and modern digital environments.",
        "Vishnu approaches every project with a strong focus on performance, clean code, and user experience. He believes that a well-designed website should not only look professional but also function smoothly, load quickly, and support business growth."
    ]
};

export const experienceData: ExperienceItem[] = [
    {
    id: "exp-1",
    role: "Shopify & WordPress Developer",
    company: "E-commerce & Web Development",
    period: "2023 - Present",
    description: [
        "Working on modern Shopify and WordPress websites. I develop fast, responsive, and easy-to-manage websites that help brands grow their online presence.",
        "My focus is on clean development, performance optimization, and creating smooth user experiences for e-commerce stores and business websites."
    ],
    skills: ["Shopify", "WordPress"]
    },
    {
        id: "exp-2",
        role: "Shopify Developer",
        company: "Shopify Store Development",
        period: "2022 - 2023",
        description: [
        "Worked on developing and customizing Shopify stores for different businesses. Built and modified Shopify themes, improved storefront design, and added custom features to improve the shopping experience.",
        "Focused on responsive layouts, store performance, and making stores easy for clients to manage."
        ],
        skills: ["Shopify Liquid", "HTML", "CSS", "JavaScript"]
    },
    {
        id: "exp-3",
        role: "WordPress Developer",
        company: "Wordpress Web Development",
        period: "2021 – 2022",
         description: [
        "Started my development journey by building WordPress websites. Created business websites, WooCommerce stores, and added custom functionality based on project requirements.",
        "This period helped build a strong foundation in web development and problem solving."
        ],
        skills: ["WordPress", "PHP", "MySQL", "jQuery"]
    }
];

export const techStackData: TechCategory[] = [
    {
        id: "frontend",
        title: "Frontend Development",
        skills: [
            { name: "HTML5", icon: SiHtml5 },
            { name: "CSS3", icon: SiCss3 },
            { name: "JavaScript", icon: SiJavascript },
            { name: "SCSS", icon: SiSass },
            { name: "Bootstrap", icon: SiBootstrap },
            { name: "jQuery", icon: SiJquery },
        ]
    },
    {
        id: "backend",
        title: "Backend Development",
        skills: [
            { name: "PHP", icon: SiPhp },
            { name: "MySQL", icon: SiMysql },
            { name: "WordPress Plugin Development", icon: SiWordpress },
            { name: "Custom Post Types", icon: SiWordpress },
            { name: "Shopify Theme Development", icon: SiShopify },
        ]
    },
    {
        id: "cms",
        title: "CMS & E-commerce Development",
        skills: [
            { name: "Shopify", icon: SiShopify },
            { name: "Shopify Liquid", icon: SiShopify },
            { name: "WordPress", icon: SiWordpress },
            { name: "WooCommerce", icon: SiWoocommerce },
            { name: "Elementor", icon: SiWordpress },
            { name: "Divi Theme", icon: SiWordpress },
            { name: "Gutenberg", icon: SiWordpress },
            { name: "Git", icon: SiGit },
            { name: "GitHub", icon: SiGithub },
            { name: "Figma", icon: SiFigma },
        ]
    }
];
import { IconType } from "react-icons";
import { FiGithub, FiLinkedin, FiMail, FiInstagram } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

export interface SocialLink {
    id: string;
    platform: string;
    url: string;
    icon: IconType;
    username: string;
    color: string;
}

export interface FAQItem {
    id: string;
    question: string;
    answer: string;
}

export const socialLinks: SocialLink[] = [
    {
        id: "linkedin",
        platform: "LinkedIn",
        url: "https://www.linkedin.com/in/vishnu-vaishnav-9280a8233?",
        icon: FiLinkedin,
        username: "@vishnu-vaishnav-9280a8233",
        color: "hover:border-blue-500/50 hover:text-blue-400"
    },
    {
        id: "instagram",
        platform: "Instagram",
        url: "https://www.instagram.com/mr.c.o.d.e.r", // Update with actual handle if available
        icon: FiInstagram,
        username: "@mr.c.o.d.e.r",
        color: "hover:border-pink-500/50 hover:text-pink-400"
    },
    {
        id: "whatsapp",
        platform: "WhatsApp",
        url: "https://wa.me/9675159209?text=Hi 👋Thank you for reaching out!I’m Vishnu Vaishnav specializing in creating E-commerce websites, Real Estate websites, Fast , and user-friendly websites.Let me know what you’re looking for — new website, redesign, bug fixes, or custom features — and I’ll be happy to help.", // Placeholder number
        icon: FaWhatsapp,
        username: "+91 967 515 9209",
        color: "hover:border-green-500/50 hover:text-green-400"
    },
    {
        id: "email",
        platform: "Email",
        url: "mailto:vishnuvaishnavmtr@gmail.com",
        icon: FiMail,
        username: "vishnuvaishnavmtr@",
        color: "hover:border-emerald-500/50 hover:text-emerald-400"
    }
];

export const faqs: FAQItem[] = [
    {
        id: "faq-1",
        question: "What is your typical turnaround time?",
        answer: "For standard Shopify or WordPress projects, timelines usually range from 2-4 weeks. Larger custom web applications can take 4-8 weeks depending on complexity."
    },
    {
        id: "faq-2",
        question: "Do you offer post-launch support?",
        answer: "Absolutely. I provide 30 days of complimentary support after launch to ensure everything runs smoothly. Retainer packages for ongoing maintenance are also available."
    },
    {
        id: "faq-3",
        question: "What platforms do you specialize in?",
        answer: "My core expertise is in Shopify (Liquid, Hydrogen) and WordPress (Headless, Custom Themes). For custom apps, I use the Next.js/React stack."
    },
    {
        id: "faq-4",
        question: "How do we get started?",
        answer: "Fill out the form on this page with details about your project. I'll review it and schedule a brief discovery call to discuss your goals."
    }
];

"use client";

import Link from "next/link";
import { FiArrowUp } from "react-icons/fi";
import { usePathname } from "next/navigation";
import { socialLinks } from "@/data/contact";

export function Footer() {
    const pathname = usePathname();
    const scrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const links = [
        { href: "/", label: "Home" },
        { href: "/projects", label: "Projects" },
        { href: "/services", label: "Services" },
        { href: "/about", label: "About" },
        { href: "/contact", label: "Contact" },
    ];

    return (
        <footer className="relative border-t border-white/5 bg-slate-950/80 pt-16 pb-8 text-sm text-slate-400 backdrop-blur-xl">
            {/* Gradient Line */}
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />

            <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-6 md:grid-cols-[1.5fr_1fr_1fr] lg:gap-20">
                {/* Branding & Bio */}
                <div className="space-y-6">
                    <Link href="/" className="flex items-center gap-3 font-semibold text-white">
                        <div className="h-8 w-8 rounded-xl bg-gradient-to-br from-blue-500 via-cyan-400 to-sky-300 shadow-lg shadow-blue-500/30 ring-1 ring-white/20" />
                        <span className="text-xl tracking-tight">Mr. Coder</span>
                    </Link>
                    <p className="max-w-xs leading-relaxed text-slate-400">
                        Crafting high-performance digital experiences with Next.js, Shopify, and WordPress.
                        Focused on conversion, speed, and premium aesthetics.
                    </p>
                    <div className="flex items-center gap-4">
                        {socialLinks.slice(0, 3).map((link) => (
                            <Link
                                key={link.id}
                                href={link.url}
                                className={`group flex items-center justify-center rounded-full border border-transparent bg-white/5 p-3 transition-all hover:bg-white/10 ${link.color}`}
                                target="_blank"
                                rel="noreferrer"
                                aria-label={link.platform}
                            >
                                <link.icon className="h-5 w-5" />
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Navigation */}
                <div className="flex flex-col gap-4">
                    <h3 className="font-semibold text-white">Navigation</h3>
                    <nav className="flex flex-col gap-3">
                        {links.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`w-fit transition-colors hover:text-cyan-400 ${pathname === link.href ? "text-cyan-400" : "text-slate-400"
                                    }`}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </nav>
                </div>

                {/* Contact / CTA */}
                <div className="flex flex-col gap-4">
                    <h3 className="font-semibold text-white">Let's Connect</h3>
                    <p className="leading-relaxed">
                        Have a project in mind? Let's build something extraordinary together.
                    </p>
                    <Link
                        href="/contact"
                        className="mt-2 text-cyan-400 underline decoration-cyan-400/30 underline-offset-4 transition-all hover:decoration-cyan-400 hover:text-cyan-300"
                    >
                        Start a Project &rarr;
                    </Link>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="mx-auto mt-16 flex max-w-6xl flex-col items-center justify-between gap-4 border-t border-white/5 px-6 pt-8 md:flex-row">
                <p className="text-xs text-slate-500">
                    © {new Date().getFullYear()} Mr. Coder. All rights reserved.
                </p>

                <a
                    href="#top"
                    onClick={scrollToTop}
                    className="group flex items-center gap-2 text-xs font-medium text-slate-400 transition-colors hover:text-white"
                >
                    Back to Top
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/5 transition-transform group-hover:-translate-y-1 group-hover:bg-white/10">
                        <FiArrowUp />
                    </span>
                </a>
            </div>
        </footer>
    );
}

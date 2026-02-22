"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { cn } from "@/lib/utils";

type NavbarProps = {
  onHireClick?: () => void;
};

const links = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Navbar({ onHireClick }: NavbarProps) {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 10);
  });

  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className={`fixed left-0 right-0 top-0 z-50`}
    >
      <motion.div
        animate={{
          backgroundColor: scrolled ? "rgba(12,16,32,0.9)" : "rgba(12,16,32,0.5)",
          scale: scrolled ? 0.98 : 1,
          boxShadow: scrolled
            ? "0 12px 40px rgba(0,0,0,0.25)"
            : "0 10px 40px rgba(0,0,0,0.12)",
        }}
        transition={{ type: "spring", stiffness: 220, damping: 22 }}
        className="mx-auto mt-4 flex w-[95%] max-w-7xl items-center justify-between rounded-full border border-white/10 px-6 py-3 text-sm text-foreground backdrop-blur-md"
      >
        <Link href="/" className="flex items-center gap-3 font-semibold">
          <div className="h-8 w-8 rounded-xl bg-gradient-to-br from-blue-500 via-cyan-400 to-sky-300 shadow-lg shadow-blue-500/30 ring-1 ring-white/20" />
          <span className="hidden sm:inline text-lg tracking-tight">Mr. Coder</span>
        </Link>

        <div className="hidden items-center gap-1 rounded-full bg-white/5 px-2 py-1 text-xs md:flex">
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "relative rounded-full px-4 py-2 transition-colors hover:text-white",
                  isActive ? "text-cyan-300" : "text-foreground/80"
                )}
              >
                {isActive && (
                  <motion.span
                    layoutId="active-pill"
                    className="absolute inset-0 -z-10 rounded-full bg-cyan-500/15"
                    transition={{ type: "spring", stiffness: 260, damping: 20 }}
                  />
                )}
                {link.label}
              </Link>
            );
          })}
        </div>

        <div className="flex items-center gap-4">
          <Link
            href="/contact"
            className="hidden rounded-full bg-gradient-to-r from-blue-600 to-cyan-400 px-5 py-2.5 text-xs font-semibold text-white shadow-lg shadow-blue-500/30 transition hover:scale-[1.02] md:inline-flex"
          >
            Let&apos;s Talk
          </Link>
        </div>
      </motion.div>
    </motion.nav>
  );
}

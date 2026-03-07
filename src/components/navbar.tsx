"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, useMotionValueEvent, useScroll, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { FiMenu, FiX } from "react-icons/fi";

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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-white/80 hover:text-white transition-colors"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </motion.div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 right-0 mt-2 mx-[2.5%] rounded-2xl bg-slate-900/95 border border-white/10 shadow-2xl backdrop-blur-xl overflow-hidden py-4 px-6 flex flex-col gap-4 md:hidden"
          >
            {links.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    "text-lg font-medium transition-colors p-2 rounded-lg",
                    isActive ? "text-cyan-400 bg-cyan-500/10" : "text-white/80 hover:text-white hover:bg-white/5"
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-2 text-center rounded-xl bg-gradient-to-r from-blue-600 to-cyan-400 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/30 transition hover:scale-[1.02]"
            >
              Let&apos;s Talk
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

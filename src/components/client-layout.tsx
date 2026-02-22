"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ClickFog } from "@/components/click-fog";

const CursorSpotlight = dynamic(
    () => import("@/components/cursor-spotlight").then((m) => m.CursorSpotlight),
    { ssr: false }
);

const ContactModal = dynamic(
    () => import("@/components/contact-modal").then((m) => m.ContactModal),
    { ssr: false }
);

const GlobalBackground = dynamic(
    () => import("@/components/global-background").then((m) => m.GlobalBackground),
    { ssr: false }
);

export function ClientLayout({ children }: { children: React.ReactNode }) {
    const [contactOpen, setContactOpen] = useState(false);
    const pathname = usePathname();
    const isHome = pathname === "/";

    return (
        <>
            <ClickFog />
            <CursorSpotlight />
            {!isHome && <GlobalBackground />}
            <Navbar onHireClick={() => setContactOpen(true)} />
            {children}
            <Footer />
            <ContactModal open={contactOpen} onClose={() => setContactOpen(false)} />
        </>
    );
}

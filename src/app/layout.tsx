import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { ClientLayout } from "@/components/client-layout";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mr. Coder | Shopify & WordPress Developer",
  description:
    "Portfolio of Mr. Coder, a Shopify & WordPress developer crafting fast, beautiful, high-converting digital experiences.",
  keywords: [
    "Shopify developer",
    "WordPress developer",
    "ecommerce",
    "web performance",
    "Next.js",
  ],
  openGraph: {
    title: "Mr. Coder | Shopify & WordPress Developer",
    description:
      "Fast, beautiful, and high-converting websites built with expertise.",
    url: "https://mr-coder-portfolio.example",
    siteName: "Mr. Coder Portfolio",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        <div className="fixed inset-0 z-[-1] bg-[radial-gradient(circle_at_20%_20%,rgba(96,165,250,0.08),transparent_25%),radial-gradient(circle_at_80%_0%,rgba(14,165,233,0.1),transparent_26%),radial-gradient(circle_at_60%_80%,rgba(236,72,153,0.08),transparent_20%)] pointer-events-none" />
        <ThemeProvider attribute="class" defaultTheme="dark" forcedTheme="dark" enableSystem={false}>
          <ClientLayout>{children}</ClientLayout>
        </ThemeProvider>
      </body>
    </html>
  );
}

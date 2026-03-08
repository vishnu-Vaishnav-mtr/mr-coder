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
        <ThemeProvider attribute="class" defaultTheme="dark" forcedTheme="dark" enableSystem={false}>
          <ClientLayout>{children}</ClientLayout>
        </ThemeProvider>
      </body>
    </html>
  );
}

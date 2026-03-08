"use client";

import dynamic from "next/dynamic";
import { Hero } from "@/components/hero";
import { IntroWrapper } from "@/components/intro/intro-wrapper";
import { ViewportLoader } from "@/components/viewport-loader";

// Massive Code Splitting: Defer parsing and hydration of everything below the fold
const AboutSection = dynamic(() => import("@/components/about-section").then(m => m.AboutSection));
const Skills = dynamic(() => import("@/components/skills").then(m => m.Skills));
const CommerceShowcase = dynamic(() => import("@/components/commerce-showcase").then(m => m.CommerceShowcase));
const Testimonials = dynamic(() => import("@/components/testimonials").then(m => m.Testimonials));
const Contact = dynamic(() => import("@/components/contact").then(m => m.Contact));

// WebGL Blobs (No SSR processing, heavy code split)
const SkillLab = dynamic(() => import("@/components/mini-game/skill-lab").then(m => m.SkillLab), { ssr: false });
const ExperienceStats = dynamic(() => import("@/components/experience-stats").then(m => m.ExperienceStats), { ssr: false });

export default function Home() {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <IntroWrapper>
      <main className="relative min-h-screen">
        <Hero />

        <div id="about">
          <ViewportLoader minHeight="800px">
            <AboutSection />
          </ViewportLoader>
        </div>

        <div id="services">
          <ViewportLoader minHeight="600px">
            <SkillLab />
          </ViewportLoader>
          <ViewportLoader minHeight="600px">
            <Skills />
          </ViewportLoader>
        </div>

        <div id="experience">
          <ViewportLoader minHeight="600px">
            <ExperienceStats />
          </ViewportLoader>
        </div>

        <div id="projects">
          <ViewportLoader minHeight="800px">
            <CommerceShowcase onHireClick={scrollToContact} />
          </ViewportLoader>
        </div>

        <div id="testimonials">
          <ViewportLoader minHeight="400px">
            <Testimonials />
          </ViewportLoader>
        </div>

        <div id="contact">
          <Contact />
        </div>
      </main>
    </IntroWrapper>
  );
}

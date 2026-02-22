"use client";

import dynamic from "next/dynamic";
import { Hero } from "@/components/hero";
import { IntroWrapper } from "@/components/intro/intro-wrapper";
import { AboutSection } from "@/components/about-section";
import { Skills } from "@/components/skills";
import { CommerceShowcase } from "@/components/commerce-showcase";
import { Testimonials } from "@/components/testimonials";
import { Contact } from "@/components/contact";

const SkillLab = dynamic(
  () => import("@/components/mini-game/skill-lab").then((mod) => mod.SkillLab),
  { ssr: false }
);

const ExperienceStats = dynamic(
  () => import("@/components/experience-stats").then((mod) => mod.ExperienceStats),
  { ssr: false }
);

export default function Home() {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <IntroWrapper>
      <main className="relative min-h-screen overflow-x-hidden bg-noise">
        <Hero />

        <div id="about">
          <AboutSection />
        </div>

        <div id="services">
          <SkillLab />
          <Skills />
        </div>

        <div id="experience">
          <ExperienceStats />
        </div>

        <div id="projects">
          <CommerceShowcase onHireClick={scrollToContact} />
        </div>

        <div id="testimonials">
          <Testimonials />
        </div>

        <div id="contact">
          <Contact />
        </div>
      </main>
    </IntroWrapper>
  );
}

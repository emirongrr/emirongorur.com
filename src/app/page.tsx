// src/app/pages/index.tsx
"use client";
import "./globals.css";
import ProjectsSection from "@components/ProjectsSection";
import AboutMeSection from "@components/AboutMeSection";
import LandingSection from "@components/LandingSection";

const Home = () => {
  return (
    <section id="#1" className="min-h-3xl">
      {/* home */}
      <LandingSection />
      {/* about me */}
      <AboutMeSection />
      {/* projects */}
      <ProjectsSection />
    </section>
  );
};

export default Home;

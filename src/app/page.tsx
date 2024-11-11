// src/app/pages/index.tsx
"use client";
import "./globals.css";
import ProjectsSection from "@components/ProjectsSection";
import AboutMeSection from "@components/AboutMeSection";
import LandingSection from "@components/LandingSection";

const Home = () => {
  return (
    <div>
      {/* home */}
      <LandingSection />
      {/* about me */}
      <AboutMeSection />
      {/* projects */}
      <ProjectsSection />
    </div>
  );
};

export default Home;

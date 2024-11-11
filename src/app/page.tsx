// src/app/pages/index.tsx
"use client";
import GradientBackground from "@components/GradientBackground";
import "./globals.css";
import LandingHeroText from "@components/LandingHero";
import ProjectsSection from "@components/ProjectsSection";
import AboutMeSection from "@components/AboutMeSection";

const Home = () => {
  return (
    <div>
      <div className="flex justify-center items-center w-full h-[calc(100vh-89px)] overflow-hidden">
        <div className="flex w-full h-full flex-col">
          <div className="h-full">
            <GradientBackground>
              <LandingHeroText />
            </GradientBackground>
          </div>
          <div className="bg-[#000] w-full overflow-hidden mt-auto h-[calc(100vh-calc(100vh-89px))]">
            {/* space */}
          </div>
        </div>
      </div>

      <div className=" bg-[#000] flex justify-center items-center w-full h-[100vh] overflow-hidden">
        <AboutMeSection />
      </div>

      {/* projects */}
      <div className="dark:[background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]">
        <div className=" mx-auto lg:max-w-7xl flex  items-start justify-start  h-[100vh] overflow-hidden">
          <div className=" flex flex-col gap-6 mt-24">
            <h1 className="font-incognito font-semibold tracking-tight sm:text-5xl text-3xl w-full lg:leading-[3.7rem]">
              Projects & Open-Source contributions
            </h1>
            <p className="max-w-5xl text-base dark:text-zinc-300 text-zinc-600 leading-relaxed">
              I&apos;ve tackled a range of projects over the years, but these
              are the ones that truly stand out. They reflect my skills in Rust,
              my commitment to open-source contributions, and my deep interest
              in the Ethereum ecosystem. I&apos;d love for you to contribute any
              ideas for improvements, especially if you share a passion for
              Ethereum development.
            </p>

            <div className="">
              <ProjectsSection />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

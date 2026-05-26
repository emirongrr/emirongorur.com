"use client";
import React from "react";
import dynamic from "next/dynamic";
import FooterSocials from "@components/FooterSocial";
import GradientBackground from "@components/GradientBackground";

const EthereumLogo = dynamic(() => import("@components/EthereumLogo"), {
  ssr: false,
});

const LandingSectionBase = ({
  title,
  content,
  logoAlt,
}: {
  title: string;
  content: string;
  logoAlt: string;
}) => {
  return (
    <main className="flex justify-center items-center w-full min-h-full md:h-[calc(100vh-89px)] overflow-hidden">
      <section className="flex w-full h-full flex-col">
        <div className="flex-1 min-h-0">
          <GradientBackground>
            <article className="flex flex-col items-center justify-center text-center w-full p-4 lg:p-8">
              {/* Title Section */}
              <header className="mb-6 lg:max-w-2xl max-w-full">
                <h1 className="font-incognito font-semibold tracking-tight text-3xl sm:text-5xl leading-tight text-white lg:min-w-[700px]">
                  {title}
                </h1>
                <p className="text-base text-zinc-300 leading-relaxed mt-4">
                  {content}
                </p>
              </header>

              {/* Logo Section */}
              <section className="w-full h-64 flex items-center justify-center">
                <EthereumLogo aria-label={logoAlt} />
              </section>

              {/* Link Section */}
              <FooterSocials />
            </article>
          </GradientBackground>
        </div>
        <div className="bg-white w-full shrink-0 dark:bg-[#000] h-[89px]" />
      </section>
    </main>
  );
};

export default LandingSectionBase;

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
        <div className="h-full">
          <GradientBackground>
            <article className="flex flex-col items-center justify-center text-center w-full p-4 lg:p-8">
              {/* Title Section */}
              <header className="mb-6 lg:max-w-2xl max-w-full">
                <h1 className="font-incognito font-semibold tracking-tight text-3xl sm:text-5xl leading-tight text-white lg:min-w-[700px]">
                  {title}
                </h1>
                <h2 className="text-base text-zinc-300 leading-relaxed mt-4">
                  {content}
                </h2>
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
        <div className="bg-white w-full overflow-hidden mt-auto dark:bg-[#000] h-[calc(100vh-calc(100vh-79px))]">
          {/* Additional space or other content */}
        </div>
      </section>
    </main>
  );
};

export default LandingSectionBase;

import EthereumLogo from "@components/EthereumLogo";
import React from "react";
import FooterSocials from "@components/FooterSocial";
import { i18n } from "i18next";
import GradientBackground from "@components/GradientBackground";
import { Slide } from "@components/Animation/Slide";

const LandingSectionBase = ({ i18n, lng }: { i18n: i18n; lng: string }) => {
  const t = i18n.getFixedT(lng, "landing");

  return (
    <main className="flex justify-center items-center w-full min-h-full md:h-[calc(100vh-89px)] overflow-hidden">
      <section className="flex w-full h-full flex-col">
        <Slide delay={0.1}>
          <div className="h-full">
            <GradientBackground>
              <div className="flex flex-col items-center justify-center text-center w-full p-4 lg:p-8">
                {/* Title Section */}
                <div className="mb-6 lg:max-w-2xl max-w-full">
                  <h1 className="font-incognito font-semibold tracking-tight text-3xl sm:text-5xl leading-tight text-white lg:min-w-[700px]">
                    {t("landingTitle")}
                  </h1>
                  <p className="text-base text-zinc-300 leading-relaxed mt-4">
                    {t("landingContent")}
                  </p>
                </div>

                {/* Logo Section */}
                <div className="w-full h-64 flex items-center justify-center">
                  <EthereumLogo />
                </div>

                {/* Link Section */}
                <FooterSocials />
              </div>
            </GradientBackground>
          </div>
          <div className="bg-white w-full overflow-hidden mt-auto dark:bg-[#000] h-[calc(100vh-calc(100vh-89px))]">
            {/* Additional space or other content */}
          </div>
        </Slide>
      </section>
    </main>
  );
};

export default LandingSectionBase;

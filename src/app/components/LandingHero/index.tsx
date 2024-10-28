// src/components/GlitchHero.tsx
import EthereumLogo from '@components/EthereumLogo';
import React from 'react';
import FooterSocials from '@components/FooterSocial';

const LandingHeroText: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center p-4 lg:p-8">
      {/* Title Section */}
      <div className="mb-6 lg:max-w-2xl max-w-full">
        <h1 className="font-incognito font-semibold tracking-tight text-3xl sm:text-5xl leading-tight lg:min-w-[700px]">
        I&apos;m Software engineer, technical writer & open-source maintainer
        </h1>
        <p className="text-base text-zinc-300 leading-relaxed mt-4">
        I&apos;m Emir Öngörür, an experienced software developer passionate about learning and building open-source software that is beneficial to developers and the world at large.
        </p>
      </div>

      {/* Logo Section */}
      <div className="w-full h-64 flex items-center justify-center">
        <EthereumLogo />
      </div>

      {/* Link Section */}
      <div>
      <FooterSocials />
      </div>
    </div>
  );
};

export default LandingHeroText;

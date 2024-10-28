// src/app/components/GradientBackground/index.tsx

import Container from '@components/Container';
import { FC, ReactNode } from 'react';

interface GradientBackgroundProps {
  children: ReactNode;
}

const GradientBackground: FC<GradientBackgroundProps> = ({ children }) => {
  return (
    <div className="gradientBg w-full h-screen  bg-gradient-to-br from-[#2588a1] via-[#da3e7f] to-[#a255cf] bg-[length:100%_100%] animate-effect  flex">
      <Container>
      <main className=" w-full max-w-7xl mx-auto md:px-16 px-6 lg:mt-12 mt-20">
        <section className="flex xl:flex-row flex-col xl:items-center items-start justify-center gap-x-12 mb-16">
          {children}
        </section>
      </main>
      </Container>
    </div>
  );
};

export default GradientBackground;

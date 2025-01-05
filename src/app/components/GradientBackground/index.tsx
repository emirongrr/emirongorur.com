import { FC, ReactNode } from "react";

interface GradientBackgroundProps {
  children: ReactNode;
}

const GradientBackground: FC<GradientBackgroundProps> = ({ children }) => {
  return (
    <div className="gradientBg w-full h-full flex items-center justify-center bg-gradient-to-br from-[#2588a1] via-[#da3e7f] to-[#a255cf] animate-effect">
      <main className="mx-auto w-full max-w-7xl px-6 md:px-16 lg:px-24 mt-20 mb-8 flex items-center justify-center">
        <section className="flex flex-col xl:flex-row xl:items-center justify-center gap-x-12 mb-16 w-full">
          {children}
        </section>
      </main>
    </div>
  );
};

export default GradientBackground;

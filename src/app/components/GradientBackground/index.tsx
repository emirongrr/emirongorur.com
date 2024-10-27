// src/app/components/GradientBackground/index.tsx

import { FC, ReactNode } from 'react';

interface GradientBackgroundProps {
  children: ReactNode;
}

const GradientBackground: FC<GradientBackgroundProps> = ({ children }) => {
  return (
    <div className="w-full h-screen bg-gradient-to-br from-[#2588a1] via-[#da3e7f] to-[#a255cf] bg-[length:100%_100%] animate-effect will-change-transform flex items-center justify-center">
      {children}
    </div>
  );
};

export default GradientBackground;

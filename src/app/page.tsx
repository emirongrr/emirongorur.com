// src/app/pages/index.tsx

import GradientBackground from '@components/GradientBackground';
import "./globals.css";
import LandingHeroText from '@components/LandingHero';

const Home = () => {
  return (
    <>
    <div className="flex justify-center items-center w-full h-[calc(100vh-89px)] overflow-hidden">
      <div className='flex w-full h-full flex-col'>
        <div className='h-full'>
          <GradientBackground>
            <LandingHeroText/>
          </GradientBackground>
        </div>
        <div className='w-full relative mt-auto h-[89px]'>
          {/* space */}
        </div>

      </div>


    </div>
  </>

  );
};

export default Home;

// src/app/pages/index.tsx

import GradientBackground from '@components/GradientBackground';
import "./globals.css";
import LandingHeroText from '@components/LandingHero';


const Home = () => {
  return (
    <div className=' border-white flex justify-center items-center h-screen '> 
        <div className=" relative z-10  w-full">
          <div className="w-full h-screen  overflow-hidden">
                <GradientBackground>
                  <LandingHeroText/>
                </GradientBackground>
          </div>
        </div>
    </div>
  );
};

export default Home;

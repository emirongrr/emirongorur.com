// src/app/pages/index.tsx

import GradientBackground from '@components/GradientBackground';
import Title from '@components/Typhography/Title'
import { TitleLevel } from '@components/Typhography/Title/types';


const Home = () => {
  return (
    <div className='border-2 border-white flex justify-center items-center h-screen '> 
        <div className="border relative z-10  w-full">
          <div className="w-full h-screen overflow-hidden">
                <GradientBackground>
                    <Title level={TitleLevel.Headline}>
                      welcome to blog
                    </Title>
                </GradientBackground>
          </div>
        </div>
    </div>
  );
};

export default Home;

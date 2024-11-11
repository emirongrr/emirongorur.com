import GradientBackground from "@components/GradientBackground";
import LandingHeroText from "@components/LandingHero";

const LandingSection = () => {
  return (
    <main className="flex justify-center items-center w-full h-[calc(100vh-89px)] overflow-hidden">
      <section id="home" className="flex w-full h-full flex-col">
        <div className="h-full">
          <GradientBackground>
            <LandingHeroText />
          </GradientBackground>
        </div>
        <div className="bg-[#000] w-full overflow-hidden mt-auto h-[calc(100vh-calc(100vh-89px))]">
          {/* space */}
        </div>
      </section>
    </main>
  );
};

export default LandingSection;

import SectionHeading from "./SectionHeading";
import Skills from "./Skills";

const SkillsSection = () => {
  return (
    <section className="space-y-5">
      <div className="space-y-3">
        <SectionHeading title="Technologies & Skills" />
      </div>
      <Skills />
    </section>
  );
};

export default SkillsSection;

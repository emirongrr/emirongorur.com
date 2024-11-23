import SectionHeading from "./SectionHeading";
import Skills from "./Skills";

interface SkillsSectionProps {
  title?: string;
}

const SkillsSection: React.FC<SkillsSectionProps> = ({
  title = "Technologies & Skills",
}) => {
  return (
    <section className="space-y-5">
      <div className="space-y-3">
        <SectionHeading title={title} />
      </div>
      <Skills />
    </section>
  );
};

export default SkillsSection;

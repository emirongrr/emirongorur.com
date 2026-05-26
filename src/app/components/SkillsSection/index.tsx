import SectionHeading from "./SectionHeading";
import Skills from "./Skills";

interface SkillsSectionProps {
  title?: string;
  headingLevel?: "h2" | "h3";
}

const SkillsSection: React.FC<SkillsSectionProps> = ({
  title = "Technologies & Skills",
  headingLevel = "h3",
}) => {
  return (
    <section className="space-y-5">
      <div className="space-y-3">
        <SectionHeading title={title} headingLevel={headingLevel} />
      </div>
      <Skills />
    </section>
  );
};

export default SkillsSection;

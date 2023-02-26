// Components
import Header from "../Components/Header";
import ProjectHero from "../Components/ProjectHero";
import SectionRoles from "../Components/SectionRoles";
import SectionContent from "../Components/SectionContent";
import HeroImage from "../images/projectassets/kaplanlj/lj-architect.jpg";

const K12LearnerJourney = () => {
  return (
    <div className="main kaplan">
      <Header />
      <ProjectHero
        title="Learner Journey"
        description="Better understand Kapla’s 1M+ learners across multiple programs and platforms."
        heroimage={HeroImage}
      />
      <SectionRoles roles="Solo UX Researcher" />
    </div>
  );
};

export default K12LearnerJourney;

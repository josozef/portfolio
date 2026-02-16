// Components
import Header from "../components/Header";
import Hero from "../components/Hero";
import CaseStudyCard from "../components/CaseStudyCard";
import Container from "../components/ui/Container";
import Section from "../components/ui/Section";

// Data
import { caseStudies } from "../data/caseStudies";

const Home = () => {
  return (
    <div className="main home">
      <Header />
      <Hero />
      
      {/* Case Studies Section */}
      <Section className="bg-gray-50">
        <Container>
          <div className="mb-12">
            <h2 className="text-3xl font-semibold mb-3">Featured Work</h2>
            <p className="text-lg text-gray-600">
              Selected case studies showcasing research, strategy, and design work
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((caseStudy) => (
              <CaseStudyCard key={caseStudy.id} caseStudy={caseStudy} />
            ))}
          </div>
        </Container>
      </Section>
    </div>
  );
};

export default Home;

import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import ProjectHero from "../components/ProjectHero";
import SectionRoles from "../components/SectionRoles";
import SectionContent from "../components/SectionContent";
import Container from "../components/ui/Container";
import Button from "../components/ui/Button";
import { getCaseStudyBySlug } from "../data/caseStudies";

/**
 * Generic CaseStudy page that uses dynamic data
 * Specific case study content can be added as needed
 */
const CaseStudy = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const caseStudy = getCaseStudyBySlug(slug);

  if (!caseStudy) {
    return (
      <div className="main">
        <Header />
        <Container className="py-20">
          <h1 className="text-3xl font-bold mb-4">Case Study Not Found</h1>
          <Button onClick={() => navigate("/")}>
            &larr; Back to Home
          </Button>
        </Container>
      </div>
    );
  }

  switch (slug) {
    case "k12-learner-journey":
      return <K12LearnerJourneyDetail caseStudy={caseStudy} />;
    case "aarp-chatbot":
      return <AARPChatbotDetail caseStudy={caseStudy} />;
    default:
      return <GenericCaseStudy caseStudy={caseStudy} />;
  }
};

const GenericCaseStudy = ({ caseStudy }) => {
  const heroImage = caseStudy.heroImage
    ? require(`../images/projectassets/${caseStudy.id}/${caseStudy.heroImage}`)
    : null;

  return (
    <div className={`main ${caseStudy.brandTheme || ""}`}>
      <Header />
      <ProjectHero
        title={caseStudy.name}
        description={caseStudy.description}
        heroimage={heroImage}
      />
      <SectionRoles roles={caseStudy.roles.join(", ")} />

      <SectionContent title="Challenge">
        <p>{caseStudy.challenge}</p>
      </SectionContent>

      <SectionContent title="Solution" alt="true">
        <p>{caseStudy.solution}</p>
      </SectionContent>

      {caseStudy.impact && (
        <SectionContent title="Impact">
          <ul className="space-y-3">
            {caseStudy.impact.map((item, index) => (
              <li key={index} className="flex items-start">
                <span className="text-primary mr-3">&check;</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </SectionContent>
      )}
    </div>
  );
};

const K12LearnerJourneyDetail = ({ caseStudy }) => {
  const HeroImage = require("../images/projectassets/kaplanlj/lj-architect.jpg");

  return (
    <div className="main kaplan">
      <Header />
      <ProjectHero
        title={caseStudy.name}
        description={caseStudy.description}
        heroimage={HeroImage}
      />
      <SectionRoles roles="Solo UX Researcher" />

      <SectionContent title="Challenge">
        <p>
          Kaplan needed a unified understanding of their diverse learner base across
          K-12, higher education, and professional learning platforms. With over 1
          million learners across multiple programs, there was no cohesive view of
          the learner journey.
        </p>
      </SectionContent>

      <SectionContent title="Approach" alt="true">
        <p>
          I conducted comprehensive user research across multiple learner segments,
          synthesizing insights into a unified learner journey framework. This included:
        </p>
        <ul className="mt-4 space-y-2">
          <li>In-depth interviews with 30+ learners across different programs</li>
          <li>Journey mapping workshops with stakeholders</li>
          <li>Data analysis of learner behavior patterns</li>
          <li>Framework development and validation</li>
        </ul>
      </SectionContent>

      <SectionContent title="Impact">
        <ul className="space-y-3">
          {caseStudy.impact.map((item, index) => (
            <li key={index} className="flex items-start">
              <span className="text-primary mr-3">&check;</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </SectionContent>
    </div>
  );
};

const AARPChatbotDetail = ({ caseStudy }) => {
  const HeroImage = require("../images/projectassets/aarpcb/iphone-hello.png");

  return (
    <div className="main aarp">
      <Header />
      <ProjectHero
        title={caseStudy.name}
        description={caseStudy.description}
        heroimage={HeroImage}
      />
      <SectionRoles roles="Chatbot Designer, UX Researcher" />

      <SectionContent title="Problem">
        <p>
          AARP views sponsored events as an important method for keeping their
          members engaged with their community and with their membership. They
          wanted to know whether a chatbot might be a good way for
          members to discover new events and plan for their attendance.
        </p>
      </SectionContent>

      <SectionContent title="Goal Alignment" alt="true">
        <p>
          Facilitated collaborative workshops with stakeholders to align the team
          on what AARP hoped to achieve.
        </p>
        <h2 className="text-xl font-semibold mt-6 mb-3">Goals</h2>
        <ul className="space-y-2">
          <li>Users are inspired to become active participants of AARP, sharing their experience with others</li>
          <li>Enrich moments in the event journey in a way that creates additional engagement</li>
          <li>Consumers are feeling supported and empowered to get real-time answers to their questions</li>
        </ul>
        <h2 className="text-xl font-semibold mt-6 mb-3">Design Principles</h2>
        <ul className="space-y-2">
          <li>The chatbot feels unintrusive, complimentary, and natural for the user to interface with</li>
          <li>Conversations feel small and simple, so that users are not overwhelmed by chatbot questions</li>
        </ul>
      </SectionContent>

      <SectionContent title="Discovery">
        <p>
          We interviewed former, current and non-AARP members in the 50+ age
          demographic who had participated in at least one community event in
          the previous year.
        </p>
        <h2 className="text-xl font-semibold mt-6 mb-3">Event Participation Increases Satisfaction</h2>
        <p>People who have attended an AARP event tended to have a positive view of AARP.</p>
        <h2 className="text-xl font-semibold mt-6 mb-3">Chat Preference</h2>
        <p>
          Most participants expressed a preference for chat when contacting
          customer support, but their expectation is that a human will be on
          the other side of the chat.
        </p>
        <p className="mt-3">To address these expectations, we should:</p>
        <ul className="mt-2 space-y-2">
          <li>Be up-front and clear that users are interfacing with a bot</li>
          <li>Escalate to a human as soon as the chatbot recognizes a question for which it does not have a clear response</li>
        </ul>
        <h2 className="text-xl font-semibold mt-6 mb-3">User Journey</h2>
        <p>
          Participant behavior when engaging with events can be understood in
          terms of Discovering, Preparing, Convening, and Strengthening
          relationships with other members.
        </p>
      </SectionContent>
    </div>
  );
};

export default CaseStudy;

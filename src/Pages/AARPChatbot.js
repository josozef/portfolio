// Components
import Header from "../Components/Header";
import ProjectHero from "../Components/ProjectHero";
import SectionRoles from "../Components/SectionRoles";
import SectionTeam from "../Components/SectionTeam";
import SectionContent from "../Components/SectionContent";
import HeroImage from "../images/projectassets/aarpcb/iphone-hello.png";

const AARPChatBot = () => {
  return (
    <div className="main aarp">
      <Header />
      <ProjectHero
        title="Chatbot"
        description="Explore whether a Chatbot might increase AARP event registration and improve attendance rates of registrants."
        heroimage={HeroImage}
      />
      <SectionRoles roles="Chatbot Designer, UX Researcher" />
      <SectionTeam team="JD Jones, Senior Product Designer" />
      <SectionContent title="Problem">
        <div>
          <p>
            AARP views sponsored events as an important method for keeping their
            members engaged with their community and with their membership. They
            wanted to know what whether a chatbot might be a good way for
            members to discover new events and plan for their attendance.
          </p>
        </div>
      </SectionContent>
      <SectionContent title="Goal Alignment" alt="true">
        <div>
          <p>
            Facilitated collaborative workshops with stakeholders align the team
            on what AARP hoped to achieve.
          </p>
          <h2>Goals</h2>
          <ul>
            <li>
              Users are inspired to become active participants of AARP, sharing
              their experience with others
            </li>
            <li>
              Enrich moments in the event journey in a way that creates
              additional engagement
            </li>
            <li>
              Consumers are feeling supported and empowered to get real-time
              answers to their questions
            </li>
          </ul>
          <h2>Design Principles</h2>
          <ul>
            <li>
              The chatbot feels unintrusive, complimentary, and natural for the
              user to interface with
            </li>
            <li>
              Conversations feel small and simple, so that users are not
              overwhelmed by chatbot questions
            </li>
          </ul>
        </div>
      </SectionContent>
      <SectionContent title="Discovery">
        <div>
          <p>
            We interviewed former, current and non-AARP members in the 50+ age
            demographic who had participated in at least one community event in
            the previous year.
          </p>
          <h2>Event Participation Increases Satisfaction </h2>
          <p>
            People who have attended an AARP event tended to have a positive
            view of AARP.
          </p>
          <h2>Chat Preference</h2>
          <p>
            Most participants expressed a preference for chat when contacting
            customer support, but their expectation is that a human will be on
            the other side of the chat.
          </p>
          <p>To address these expections, we should:</p>
          <ul>
            <li>Be up-front and clear that users are interfacing with a bot</li>
            <li>
              Escalate to a human as soon as the chatbot recognizes a question
              for which it does not have a clear response
            </li>
          </ul>
          <h2>User Journey</h2>
          <p>
            Participant behavior when engaging with events can be understood in
            terms of Discovering, Preparing, Convening, and Strengthening
            relationships with other members.
          </p>
        </div>
      </SectionContent>
    </div>
  );
};

export default AARPChatBot;

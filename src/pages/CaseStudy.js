import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import ProjectHero from "../components/ProjectHero";
import SectionRoles from "../components/SectionRoles";
import SectionTeam from "../components/SectionTeam";
import SectionContent from "../components/SectionContent";
import Container from "../components/ui/Container";
import Button from "../components/ui/Button";
import Badge from "../components/ui/Badge";
import { getCaseStudyBySlug } from "../data/caseStudies";

/* ───────────────────────────── Router ───────────────────────────── */

const CaseStudy = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const caseStudy = getCaseStudyBySlug(slug);

  if (!caseStudy) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <Container className="py-20 text-center">
          <h1 className="text-3xl font-semibold tracking-tight mb-4">
            Case Study Not Found
          </h1>
          <p className="text-muted-foreground mb-8">
            The case study you're looking for doesn't exist.
          </p>
          <Button onClick={() => navigate("/")}>&larr; Back to Home</Button>
        </Container>
      </div>
    );
  }

  switch (slug) {
    case "certsolv":
      return <CertSolvDetail caseStudy={caseStudy} />;
    case "k12-learner-journey":
      return <K12LearnerJourneyDetail caseStudy={caseStudy} />;
    case "aarp-chatbot":
      return <AARPChatbotDetail caseStudy={caseStudy} />;
    case "kickstart-practice":
      return <ModusKickstartDetail caseStudy={caseStudy} />;
    default:
      return <GenericCaseStudy caseStudy={caseStudy} />;
  }
};

/* ───────────────── Reusable section building blocks ───────────────── */

const BulletList = ({ items }) => (
  <ul className="space-y-2">
    {items.map((item, i) => (
      <li key={i} className="flex items-start gap-2">
        <span className="text-muted-foreground mt-1">&bull;</span>
        <span className="text-base leading-relaxed">{item}</span>
      </li>
    ))}
  </ul>
);

const CheckList = ({ items }) => (
  <ul className="space-y-3">
    {items.map((item, i) => (
      <li key={i} className="flex items-start gap-3">
        <svg
          className="h-5 w-5 mt-0.5 text-primary flex-shrink-0"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 13l4 4L19 7"
          />
        </svg>
        <span className="text-base">{item}</span>
      </li>
    ))}
  </ul>
);

const NumberedList = ({ items }) => (
  <ol className="space-y-4">
    {items.map((item, i) => (
      <li key={i} className="flex items-start gap-4">
        <span className="flex-shrink-0 flex items-center justify-center w-7 h-7 rounded-full bg-primary/10 text-primary text-sm font-semibold">
          {i + 1}
        </span>
        <div>
          <p className="font-medium text-base">{item.title}</p>
          {item.description && (
            <p className="text-sm text-muted-foreground mt-1 leading-relaxed">
              {item.description}
            </p>
          )}
        </div>
      </li>
    ))}
  </ol>
);

const Subheading = ({ children }) => (
  <h3 className="text-lg font-semibold mt-6 mb-3">{children}</h3>
);

const Blockquote = ({ children }) => (
  <blockquote className="border-l-2 border-primary/30 pl-4 italic text-muted-foreground my-4">
    "{children}"
  </blockquote>
);

/* ───────────────────── Generic fallback ───────────────────── */

const GenericCaseStudy = ({ caseStudy }) => {
  const heroImage = caseStudy.heroImage
    ? require(`../images/projectassets/${caseStudy.id}/${caseStudy.heroImage}`)
    : null;

  return (
    <div className={`min-h-screen brand-${caseStudy.brandTheme || ""}`}>
      <Header variant="brand" />
      <ProjectHero
        title={caseStudy.name}
        description={caseStudy.description}
        heroimage={heroImage}
      />
      <SectionRoles roles={caseStudy.roles.join(", ")} />

      <SectionContent title="Challenge">
        <p className="text-base leading-relaxed">{caseStudy.challenge}</p>
      </SectionContent>

      <SectionContent title="Solution" alt="true">
        <p className="text-base leading-relaxed">{caseStudy.solution}</p>
      </SectionContent>

      {caseStudy.impact && (
        <SectionContent title="Impact">
          <CheckList items={caseStudy.impact} />
        </SectionContent>
      )}
    </div>
  );
};

/* ═══════════════════════════════════════════════════════════════════ */
/*                          CERTSOLV                                  */
/* ═══════════════════════════════════════════════════════════════════ */

const CertSolvDetail = ({ caseStudy }) => {
  const HeroImage = require("../images/projectassets/certsolv/certsolvHERO.png");
  const CodeImage = require("../images/projectassets/certsolv/certsolveCode.png");

  return (
    <div className="min-h-screen brand-certsolv">
      <Header variant="brand" />
      <ProjectHero
        title={caseStudy.name}
        description={caseStudy.description}
        heroimage={HeroImage}
        imageClass="md:w-1/2"
      />
      <SectionRoles roles="Product Designer, Front-End Developer" />

      <SectionContent title="Challenge">
        <p className="text-base leading-relaxed">
          CertSolv needed to take a sales tax exemption certificate management
          concept from zero to a fully realized product. There was no existing
          brand, no design system, and no front-end codebase. A team of
          accountants had domain expertise but needed to be guided through a
          structured product development process to define what the minimum
          viable product should be.
        </p>
      </SectionContent>

      <SectionContent title="Process" alt="true">
        <p className="text-base leading-relaxed mb-6">
          The engagement spanned the full product lifecycle — from initial
          requirements gathering through coded component hand-off.
        </p>

        <div className="space-y-8">
          <div>
            <Subheading>Requirements Gathering</Subheading>
            <BulletList
              items={[
                "Lo-fi proto-personas and journey maps to align the team on who the users are and what they need",
                "Object-Oriented UX (OOUX) object mapping to define the system's core objects and relationships",
                "User story writing and mapping to define MVP scope and prioritize features",
              ]}
            />
          </div>

          <div>
            <Subheading>Design Delivery</Subheading>
            <BulletList
              items={[
                "Style tiles to establish visual direction and get early stakeholder alignment",
                "Complete brand identity including logo and icon design",
                "Full design system with consistent tokens for color, typography, spacing, and components",
                "Complete application design across all views and user flows",
              ]}
            />
          </div>

          <div>
            <Subheading>Code Hand-off</Subheading>
            <BulletList
              items={[
                "Component library built in Blazor/C# with TailwindCSS and native HTML elements",
                "Sample page layout markup demonstrating how components compose into full views",
                "Custom Blazor components for complex interactions specific to the platform",
              ]}
            />
            <div className="mt-6 rounded-lg border overflow-hidden">
              <img
                src={CodeImage}
                alt="CertSolv component library code"
                className="w-full"
              />
              <div className="px-4 py-2 bg-muted/50 text-xs text-muted-foreground">
                Blazor/C# component library with TailwindCSS
              </div>
            </div>
          </div>
        </div>
      </SectionContent>

      <SectionContent title="Deliverables">
        <NumberedList
          items={[
            {
              title: "Brand Identity",
              description:
                "Logo, icon system, color palette, and typography — a complete visual identity for the platform.",
            },
            {
              title: "Design System",
              description:
                "Comprehensive component library in Figma with documented patterns, spacing, and usage guidelines.",
            },
            {
              title: "Full Application Design",
              description:
                "Every screen and user flow designed end-to-end, from onboarding to certificate management workflows.",
            },
            {
              title: "Coded Component Library",
              description:
                "Production-ready Blazor/C# components styled with TailwindCSS, ready for the development team to build on.",
            },
          ]}
        />
      </SectionContent>

      <SectionContent title="Impact" alt="true">
        <CheckList items={caseStudy.impact} />
      </SectionContent>
    </div>
  );
};

/* ═══════════════════════════════════════════════════════════════════ */
/*                    K-12 LEARNER JOURNEY                            */
/* ═══════════════════════════════════════════════════════════════════ */

const K12LearnerJourneyDetail = ({ caseStudy }) => {
  const HeroImage = require("../images/projectassets/kaplanlj/lj-architect.jpg");
  const PersonaImage = require("../images/projectassets/kaplanlj/persona-architect.png");

  return (
    <div className="min-h-screen brand-kaplan">
      <Header variant="brand" />
      <ProjectHero
        title={caseStudy.name}
        description={caseStudy.description}
        heroimage={HeroImage}
      />
      <SectionRoles roles="Solo UX Researcher" />

      <SectionContent title="Challenge">
        <p className="text-base leading-relaxed">
          Kaplan needed a unified understanding of their diverse learner base
          across K-12, higher education, and professional learning platforms.
          With over 1 million learners across multiple programs, there was no
          cohesive view of the learner journey. The business needed to
          understand who their learners are, what motivates them, and where the
          pain points exist across the learning experience.
        </p>
      </SectionContent>

      <SectionContent title="Approach" alt="true">
        <p className="text-base leading-relaxed">
          Interviewed 40 students across 6 product lines to provide a complete
          analysis of learner personas and their learning journey inside and
          outside the Kaplan product ecosystem. The research spanned empathy
          interviews, persona development, customer journey mapping, and
          product strategy.
        </p>
        <BulletList
          items={[
            "In-depth empathy interviews with 40 students across 6 product lines",
            "Persona development based on behavioral patterns and motivations",
            "Customer journey mapping across the full learning lifecycle",
            "Product strategy recommendations informed by research synthesis",
            "Framework development and validation with stakeholders",
          ]}
        />
        <div className="mt-6 rounded-lg border overflow-hidden">
          <img
            src={PersonaImage}
            alt="Persona architect research artifact"
            className="w-full"
          />
          <div className="px-4 py-2 bg-muted/50 text-xs text-muted-foreground">
            Persona development from empathy interviews
          </div>
        </div>
      </SectionContent>

      <SectionContent title="Impact">
        <CheckList items={caseStudy.impact} />
      </SectionContent>
    </div>
  );
};

/* ═══════════════════════════════════════════════════════════════════ */
/*                       AARP CHATBOT                                 */
/* ═══════════════════════════════════════════════════════════════════ */

const AARPChatbotDetail = ({ caseStudy }) => {
  const HeroImage = require("../images/projectassets/aarpcb/chatbotHERO.png");
  const PersonaImage = require("../images/projectassets/aarpcb/persona-architect 1.png");

  return (
    <div className="min-h-screen brand-aarp">
      <Header variant="brand" />
      <ProjectHero
        title={caseStudy.name}
        description={caseStudy.description}
        heroimage={HeroImage}
      />
      <SectionRoles roles="Chatbot Designer, UX Researcher" />
      <SectionTeam team="JD Jones, Senior Product Designer" />

      {/* Problem */}
      <SectionContent title="Problem">
        <p className="text-base leading-relaxed">
          AARP views sponsored events as an essential method for keeping their
          members engaged with their community and membership. The product team
          wanted to know whether a chatbot might be a good way for members to
          discover new events and plan for their attendance.
        </p>
      </SectionContent>

      {/* Goal Alignment */}
      <SectionContent title="Goal Alignment" alt="true">
        <p className="text-base leading-relaxed">
          Facilitated collaborative workshops with stakeholders to align the
          team on what AARP hoped to achieve.
        </p>
        <Subheading>Goals</Subheading>
        <BulletList
          items={[
            "Users are inspired to become active participants of AARP, sharing their experiences with others",
            "Enrich moments in the event journey in a way that creates additional engagement",
            "Consumers are feeling supported and empowered to get real-time answers to their questions",
          ]}
        />
        <Subheading>Design Principles</Subheading>
        <BulletList
          items={[
            "The chatbot should feel unintrusive, complimentary, and natural for the user to interface with",
            "Interactions with the chatbot should be quick and require minimal reading",
          ]}
        />
      </SectionContent>

      {/* Discovery */}
      <SectionContent title="Discovery">
        <p className="text-base leading-relaxed">
          We interviewed former, current, and non-AARP members in the 50+ age
          demographic who had participated in at least one community event in
          the previous year.
        </p>

        <Subheading>Event Participation Increases Satisfaction</Subheading>
        <p className="text-base leading-relaxed">
          People who have attended AARP events in the past tended to have a
          more positive view of AARP.
        </p>

        <Blockquote>
          I didn't expect a movie event to be a community event. But it was,
          because we all ended up talking in the lobby while waiting for the
          movie to start.
        </Blockquote>

        <Subheading>Technical Proficiency</Subheading>
        <p className="text-base leading-relaxed">
          Probing participants' technology usage helped dispel concerns that
          older people don't have enough technical savvy to engage with a
          chatbot. Participants regularly text message, keep a phone or online
          calendar, prefer chat for customer service, are active on social
          media, and are active YouTube learners.
        </p>

        <Subheading>Chat Preference</Subheading>
        <p className="text-base leading-relaxed">
          Most participants expressed a preference for chat when contacting
          customer support, but they expect that a human will be on the other
          side of the chat.
        </p>
        <Blockquote>
          I'd rather chew my own arm off than wait on hold on the phone.
        </Blockquote>
      </SectionContent>

      {/* User Journeys */}
      <SectionContent title="User Journeys" alt="true">
        <p className="text-base leading-relaxed mb-6">
          Participant behavior when engaging with events can be understood in
          four phases:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {[
            {
              phase: "Discovering",
              text: "Members are looking for exciting things to do. They search for events nearby on AARP and other local websites.",
            },
            {
              phase: "Preparing",
              text: "Participants are concerned with transportation and what to bring. If plans change, they feel guilty about not canceling with advance notice.",
            },
            {
              phase: "Convening",
              text: "Participants become concerned about parking and directions. At the venue, they often stress about the 'last 100 feet' — finding the room and knowing if they need to sign in.",
            },
            {
              phase: "Strengthening",
              text: "Events are an excellent way to meet new people. Connecting with other participants after an event can lead to new friendships.",
            },
          ].map((item) => (
            <div
              key={item.phase}
              className="rounded-lg border bg-background p-5 space-y-2"
            >
              <Badge variant="secondary">{item.phase}</Badge>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </SectionContent>

      {/* Bot Persona */}
      <SectionContent title="Bot Persona">
        <p className="text-base leading-relaxed">
          We surveyed stakeholders to define the chatbot's personality and
          communication style.
        </p>
        <Subheading>Claire</Subheading>
        <p className="text-base leading-relaxed">
          Users should describe Claire as friendly, polite, and honest. She is
          upfront about not being a human and quickly recognizes her
          limitations.
        </p>
        <Blockquote>
          I'm sorry. I don't know how to do that yet. Would you like me to get
          a human to help?
        </Blockquote>
        <div className="mt-6 rounded-lg border overflow-hidden">
          <img
            src={PersonaImage}
            alt="Persona architect research artifact"
            className="w-full"
          />
          <div className="px-4 py-2 bg-muted/50 text-xs text-muted-foreground">
            Persona development from empathy interviews
          </div>
        </div>
      </SectionContent>

      {/* Wizard of Oz */}
      <SectionContent title="Wizard of Oz Experiment" alt="true">
        <p className="text-base leading-relaxed mb-4">
          We designed an in-person experiment in Chicago and northern Virginia
          to simulate the experience with Claire using freely available tools.
        </p>
        <BulletList
          items={[
            "Recruited users in Chicago and Virginia using Respondent.io",
            "Scripted user prompts and the chatbot's possible responses using real AARP and local event data in a Google Doc",
            "Constructed a fake chatbot using Slack, whereby the interviewer assumes the role of the chatbot",
            "Used Simple Poll to simulate multiple-choice option selection",
            "Printed an exit survey to evaluate the personality and effectiveness of the chatbot",
          ]}
        />
      </SectionContent>

      {/* Findings */}
      <SectionContent title="Findings">
        <Subheading>What Worked</Subheading>
        <NumberedList
          items={[
            {
              title: "Users had little trouble interacting with the bot",
              description:
                "Most users were able to perform the tasks requested, and the conversation's flow made sense.",
            },
            {
              title: "Users anticipated and expected the bot's limitations",
              description:
                "Participants appreciated that the bot introduced itself as a robot and therefore expected that the information it returned might be limited.",
            },
            {
              title: "The chat tone matched the desired persona",
              description:
                "The exit survey provided quantitative data confirming that the tone and personality largely met AARP's desired persona.",
            },
          ]}
        />

        <Subheading>Challenges</Subheading>
        <BulletList
          items={[
            "Content breadth is critical — user event searches were specific to activities they already have an interest in",
            "Users questioned whether the chat would proactively remind them of upcoming events without user initiation",
            "Location awareness was a common expectation — users wanted to see events 'near me'",
          ]}
        />
      </SectionContent>

      {/* Point of Stress */}
      <SectionContent title="Opportunity" alt="true">
        <Subheading>Point of Stress</Subheading>
        <p className="text-base leading-relaxed mb-4">
          Users are most stressed about event attendance at the point of
          arrival. A successful chatbot interaction at this moment might:
        </p>
        <BulletList
          items={[
            "Confirm that the participant has arrived",
            "Remind the participant of the room they are going to",
            "Provide last-step directions to the venue or room",
            "Alert the user to check-in or registration procedures",
          ]}
        />
      </SectionContent>

      {/* Recommendations */}
      <SectionContent title="Recommendation">
        <div className="space-y-8">
          <div className="rounded-lg border bg-background p-6 space-y-3">
            <div className="flex items-center gap-2">
              <Badge>High Impact</Badge>
              <span className="text-sm font-medium">Option 1</span>
            </div>
            <p className="text-base leading-relaxed">
              Build the chatbot into the AARP mobile app to take advantage of
              location services and push notifications.
            </p>
            <BulletList
              items={[
                "Proactively notify and prepare participants in advance of meetings they have registered for",
                "Assist event participants with last-step directions for finding venue specifics and alerting them to registration details",
                "Avoid the Discovery part of the event journey until the event database is robust enough for users to find value in local events",
              ]}
            />
          </div>

          <div className="rounded-lg border bg-muted/50 p-6 space-y-3">
            <div className="flex items-center gap-2">
              <Badge variant="secondary">Very Low Impact</Badge>
              <span className="text-sm font-medium">Option 2</span>
            </div>
            <p className="text-base leading-relaxed">
              Provide an alternative to the AARP website's event search
              functionality with a web-based chatbot.
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              A web-based chat linked from the AARP website that attempts to
              provide Preparing, Convening, or Strengthening functionality would
              likely be an unpleasant or unused experience. This would likely not
              be much improvement over the current experience — the existing web
              search would offer less friction.
            </p>
          </div>
        </div>
      </SectionContent>
    </div>
  );
};

/* ═══════════════════════════════════════════════════════════════════ */
/*                    MODUS KICKSTART                                 */
/* ═══════════════════════════════════════════════════════════════════ */

const ModusKickstartDetail = ({ caseStudy }) => {
  const HeroImage = require("../images/projectassets/modusks/kickstart-plan-map.png");

  return (
    <div className="min-h-screen brand-modus">
      <Header variant="brand" />
      <ProjectHero
        title={caseStudy.name}
        description={caseStudy.description}
        heroimage={HeroImage}
      />
      <SectionRoles roles="Design Strategist, Facilitator" />

      {/* Problem */}
      <SectionContent title="Problem">
        <p className="text-base leading-relaxed">
          Modus Create's time-boxed lean product development engagement —
          Kickstart — was suffering from inconsistent execution. The goals and
          procedure of each workshop were not well understood by team members,
          and the deliverables were largely undefined. This made it difficult to
          set expectations with customers and ensure consistent quality.
        </p>
      </SectionContent>

      {/* Mock Kickstart */}
      <SectionContent title="Mock Kickstart" alt="true">
        <p className="text-base leading-relaxed mb-4">
          To evaluate the existing practice, I designed and ran a simulated
          engagement with Modus team members role-playing as the customer.
        </p>
        <BulletList
          items={[
            "Prepared a brief for a hypothetical startup looking to develop a pitch deck for a fund-raising round",
            "Executed a 4-week Kickstart with Modus team members role-playing as the customer",
            "Critiqued each workshop's goals, flow, and results — both in-flight and in postmortem review",
            "Prepared deliverables to be used in training and marketing materials and to solidify deliverable standards",
          ]}
        />
      </SectionContent>

      {/* Workshop Redesign */}
      <SectionContent title="Workshop Redesign">
        <p className="text-base leading-relaxed italic text-muted-foreground mb-6">
          "What is essential for us to get from this workshop, and how have we
          failed in the past?"
        </p>
        <p className="text-base leading-relaxed mb-4">
          Each workshop was evaluated against its intended purpose and
          redesigned for maximum effectiveness.
        </p>

        <Subheading>Workshop Sequence</Subheading>
        <p className="text-base leading-relaxed mb-4">
          A critical question was how to arrange a workshop sequence that builds
          a comprehensive story of the product and its potential market fit.
          Each workshop needed clear critical outputs that feed as inputs into
          subsequent sessions.
        </p>

        <Subheading>Standardize Deliverables</Subheading>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
          {[
            {
              title: "Expectation Setting",
              text: "Is it reasonable to promise discovery research in a 2-week Kickstart?",
            },
            {
              title: "Reasonable Fidelity",
              text: "Favor speed and content over beauty — deliverables should communicate ideas, not impress with polish.",
            },
            {
              title: "Separation of Duties",
              text: "Define clear roles and responsibilities for pod members so everyone knows their contribution.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-lg border bg-background p-5 space-y-2"
            >
              <p className="font-medium text-sm">{item.title}</p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </SectionContent>

      {/* Documentation & Training */}
      <SectionContent title="Documentation & Training" alt="true">
        <p className="text-base leading-relaxed mb-6">
          The redesigned practice was documented comprehensively and used to
          train Design and Product Strategists across the organization.
        </p>
        <NumberedList
          items={[
            {
              title: "Workshop Manual",
              description:
                "Miro template with facilitation instructions, desired outcomes, how to explain it to customers, team member roles, prep procedures, project management considerations, and inputs & outputs.",
            },
            {
              title: "Customer Prep Slides",
              description:
                "Why we need their participation, objectives, what to expect, what to bring, and time commitment.",
            },
            {
              title: "Workshop Sequence White Paper",
              description:
                "An overview of the sequence of workshops and how they feed downstream workshops, providing a coherent product story.",
            },
          ]}
        />
      </SectionContent>

      {/* Impact */}
      <SectionContent title="Impact">
        <CheckList items={caseStudy.impact} />
      </SectionContent>
    </div>
  );
};

export default CaseStudy;

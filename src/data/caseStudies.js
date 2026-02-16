// Case Study Data
export const caseStudies = [
  {
    id: "certsolv",
    name: "CertSolv Tax Platform",
    slug: "certsolv",
    client: "CertSolv",
    logo: "certsolv",
    logoHeight: "40",
    brandTheme: "certsolv",
    cardImage: "certsolv",
    roles: ["Product Designer", "Front-End Developer"],
    year: "2022",
    summary:
      "Led a team of accountants through a lean product development process to define MVP requirements for a new sales tax exemption certificate management platform. Designed and coded the full application from branding to component library.",
    description:
      "End-to-end product design and front-end development for a sales tax exemption management platform.",
    heroImage: "certsolvHERO.png",
    challenge:
      "CertSolv needed a complete product — from brand identity to functional front-end — for a new sales tax exemption certificate management platform.",
    solution:
      "Led the full product lifecycle: persona definition, user story mapping, OOUX, branding, design system, full application design, and a coded component library in Blazor/C# with TailwindCSS.",
    impact: [
      "Complete brand identity and design system delivered",
      "Functional component library handed off to development team",
      "MVP requirements defined through collaborative lean process",
    ],
  },
  {
    id: "kaplanlj",
    name: "K-12 Learner Journey",
    slug: "k12-learner-journey",
    client: "Kaplan",
    logo: "kaplan",
    logoHeight: "40",
    brandTheme: "kaplan",
    cardImage: "kaplanlj",
    roles: ["UX Researcher", "Design Strategist"],
    year: "2021",
    summary:
      "Interviewed 40 students across 6 product lines to provide a complete analysis of learner personas and their learning journey inside and outside the Kaplan product ecosystem.",
    description:
      "Better understand Kaplan's 1M+ learners across multiple programs and platforms.",
    heroImage: "lj-architect.jpg",
    challenge:
      "Kaplan needed a unified understanding of their diverse learner base across K-12, higher education, and professional learning platforms.",
    solution:
      "Conducted comprehensive user research and created a learner journey framework that provides insights into learner behavior, motivations, and pain points.",
    impact: [
      "Unified understanding of 1M+ learners",
      "Framework adopted across multiple business units",
      "Informed product roadmap for 3 major platforms",
    ],
  },
  {
    id: "aarpchatbot",
    name: "AARP Event Chatbot",
    slug: "aarp-chatbot",
    client: "AARP",
    logo: "aarp",
    logoHeight: "40",
    brandTheme: "aarp",
    cardImage: "aarpchatbot",
    roles: ["Chatbot Designer", "UX Researcher"],
    year: "2020",
    summary:
      "Designed and validated a conversational chatbot to increase AARP event registration and attendance through user research, a Wizard of Oz experiment, and strategic recommendations.",
    description:
      "Explore whether a Chatbot might increase AARP event registration and improve attendance rates of registrants.",
    heroImage: "chatbotHERO.png",
    challenge:
      "AARP viewed sponsored events as essential for member engagement but needed to know whether a chatbot could help members discover events and plan attendance.",
    solution:
      "Designed a conversational chatbot persona, mapped user journeys, ran a Wizard of Oz experiment in two cities, and delivered strategic recommendations for implementation.",
    impact: [
      "Validated chatbot viability through live user testing in Chicago and Virginia",
      "Defined bot persona 'Claire' with tone confirmed by quantitative survey data",
      "Delivered high-impact strategic recommendation to integrate chatbot into AARP mobile app",
      "Identified key opportunity: assisting users at point-of-arrival stress",
    ],
  },
  {
    id: "modusks",
    name: "Kickstart Practice Reboot",
    slug: "kickstart-practice",
    client: "Modus Create",
    logo: "modus",
    logoHeight: "20",
    brandTheme: "modus",
    cardImage: "modusks",
    roles: ["Design Strategist", "Facilitator"],
    year: "2021",
    summary:
      "Redesigned Modus Create's lean product development engagement to fix inconsistent execution, undefined deliverables, and unclear workshop goals. Documented and trained the organization on the new practice.",
    description:
      "Evaluate, redesign, and document the Kickstart practice for training and marketing purposes.",
    heroImage: "kickstart-plan-map.png",
    challenge:
      "Modus Create's time-boxed lean product development engagement was suffering from inconsistent execution. The goals and procedure of each workshop were not well understood by team members, and the deliverables were largely undefined.",
    solution:
      "Ran a mock Kickstart to evaluate workshops, redesigned each for maximum effect, defined a cohesive workshop sequence, standardized deliverables, and produced comprehensive training documentation.",
    impact: [
      "Standardized engagement framework adopted across the organization",
      "Complete training materials: workshop manuals, customer prep slides, and sequence white paper",
      "Trained 20+ Design and Product Strategists on the new practice",
      "Clear role definitions and deliverable standards for all pod members",
    ],
  },
];

export const getCaseStudyBySlug = (slug) => {
  return caseStudies.find((study) => study.slug === slug);
};

export const getCaseStudyById = (id) => {
  return caseStudies.find((study) => study.id === id);
};

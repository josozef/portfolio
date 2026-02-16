// Case Study Data
export const caseStudies = [
  {
    id: "kaplanlj",
    name: "K-12 Learner Journey",
    slug: "k12-learner-journey",
    client: "Kaplan",
    logo: "kaplan",
    logoHeight: "40",
    brandTheme: "kaplan",
    roles: ["UX Researcher", "Design Strategist"],
    year: "2021",
    summary: "Provide a new framework for Kaplan to understand their 1M+ learners by mapping the learner journey across multiple programs and platforms.",
    description: "Better understand Kaplan's 1M+ learners across multiple programs and platforms.",
    heroImage: "lj-architect.jpg",
    challenge: "Kaplan needed a unified understanding of their diverse learner base across K-12, higher education, and professional learning platforms.",
    solution: "Conducted comprehensive user research and created a learner journey framework that provides insights into learner behavior, motivations, and pain points.",
    impact: [
      "Unified understanding of 1M+ learners",
      "Framework adopted across multiple business units",
      "Informed product roadmap for 3 major platforms"
    ]
  },
  {
    id: "aarpchatbot",
    name: "AARP Event Chatbot",
    slug: "aarp-chatbot",
    client: "AARP",
    logo: "aarp",
    logoHeight: "40",
    brandTheme: "aarp",
    roles: ["Chatbot Designer", "UX Researcher"],
    year: "2020",
    summary: "Explore whether a chatbot might increase AARP event registration and improve attendance rates of registrants.",
    description: "Explore whether a Chatbot might increase AARP event registration and improve attendance rates of registrants.",
    heroImage: "iphone-hello.png",
    challenge: "AARP wanted to increase event registration and attendance while providing better member support.",
    solution: "Designed and tested a conversational chatbot that helps members discover events and get real-time support.",
    impact: [
      "Improved member engagement with events",
      "Streamlined event discovery process",
      "Reduced support burden on staff"
    ]
  },
  {
    id: "modusks",
    name: "Kickstart Practice Reboot",
    slug: "kickstart-practice",
    client: "Modus Create",
    logo: "modus",
    logoHeight: "20",
    brandTheme: "modus",
    roles: ["Strategist", "Designer", "Facilitator"],
    year: "2022",
    summary: "Kickstart is an engagement that helps product development teams rapidly explore new product ideas and align around good lean product development practices.",
    description: "Evaluate, redesign, and document the Kickstart practice for training and marketing purposes.",
    heroImage: null,
    challenge: "The Kickstart practice needed to be standardized, documented, and made scalable for multiple teams.",
    solution: "I was charged with evaluating, redesigning, and documenting the practice for training and marketing purposes.",
    impact: [
      "Standardized engagement framework",
      "Training materials for 20+ consultants",
      "Improved client satisfaction scores"
    ]
  }
];

export const getCaseStudyBySlug = (slug) => {
  return caseStudies.find(study => study.slug === slug);
};

export const getCaseStudyById = (id) => {
  return caseStudies.find(study => study.id === id);
};

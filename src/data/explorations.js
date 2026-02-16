// Exploration/Vibe Coding Projects Data
export const explorations = [
  {
    id: "diligent-console",
    title: "Diligent Console",
    slug: "diligent-console",
    description:
      "A professional, minimalist AI-powered web application for streamlining board member appointment processes with an intelligent concierge system.",
    tags: ["AI Concierge", "Vanilla JS", "CSS Design System", "Vibe Coding"],
    thumbnail: null,
    githubUrl: "https://github.com/josozef/diligent-console",
    liveUrl: "https://diligent-console.vercel.app",
    objective:
      "Explore how an AI-powered concierge interface can simplify complex governance workflows like board member appointments. The application automates document generation, approvals, and regulatory filings through a conversational interface with progressive disclosure and multi-panel layouts.",
    details: [
      "Two-view interface: a hero landing with quick actions and a multi-panel chat view with sidebar, main thread, and contextual right panel",
      "Hybrid form system with progressive disclosure — fields unlock sequentially as previous selections are made",
      "Appointment panel with document management, workflow visualization, and multi-agent coordination",
      "Built entirely with vanilla HTML, CSS, and JavaScript — no frameworks or build tools required",
      "CSS design system with custom properties for colors, spacing, typography, and border radius tokens",
      "Responsive layout using CSS Grid that adapts across desktop, tablet, and mobile",
    ],
    learnings: [
      "Conversational UI patterns can dramatically simplify complex multi-step governance workflows",
      "Progressive disclosure reduces cognitive load — users only see what's relevant to their current step",
      "A well-structured CSS custom property system can replace a full design framework for focused applications",
      "Multi-agent orchestration concepts (concierge coordinating board, email, and entity agents) map naturally to real enterprise workflows",
      "Vibe coding with AI assistance enabled rapid prototyping of a fully functional application without traditional frameworks",
    ],
  },
];

export const getExplorationBySlug = (slug) => {
  return explorations.find((project) => project.slug === slug);
};

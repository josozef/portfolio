// Exploration/Vibe Coding Projects Data
export const explorations = [
  {
    id: "portfolio-redesign",
    title: "Portfolio Redesign",
    slug: "portfolio-redesign",
    description: "A modern, component-based portfolio built with React and Tailwind CSS",
    tags: ["React", "Tailwind CSS", "Component Design", "UI/UX"],
    thumbnail: null,
    githubUrl: "https://github.com/yourusername/portfolio",
    liveUrl: "https://portfolio.vercel.app",
    objective: "Build a performant, accessible portfolio site that showcases case studies and explorations while maintaining a clean, modern aesthetic inspired by shadcn/ui design principles.",
    details: [
      "Reusable component library for consistent UI",
      "Brand-specific theming system",
      "Responsive design across all breakpoints",
      "Optimized for performance and accessibility"
    ],
    learnings: [
      "Advanced Tailwind CSS patterns and customization",
      "Component composition and reusability best practices",
      "CSS custom properties for dynamic theming",
      "React Router for client-side navigation"
    ]
  }
];

export const getExplorationBySlug = (slug) => {
  return explorations.find(project => project.slug === slug);
};

import React from "react";
import Header from "../components/Header";
import Container from "../components/ui/Container";
import Section from "../components/ui/Section";
import { Separator } from "../components/ui/Separator";
import Badge from "../components/ui/Badge";
import Button from "../components/ui/Button";
import AboutPic from "../images/pic.png";

// Client logos for collage
import logoAARP from "../images/client-logos/aarp.png";
import logoAgrify from "../images/client-logos/agrify.png";
import logoCertsolv from "../images/client-logos/certsolv.png";
import logoDeepwatch from "../images/client-logos/deepwatch.png";
import logoK12 from "../images/client-logos/k12.png";
import logoKaplan from "../images/client-logos/kaplan.png";
import logoLifesherpa from "../images/client-logos/lifesherpa.png";
import logoModus from "../images/client-logos/modus.png";
import logoNasdaq from "../images/client-logos/nasdaq.png";
import logoNorthwesternMutual from "../images/client-logos/northwesternmutual.png";
import logoPlasics from "../images/client-logos/plasics.png";
import logoStride from "../images/client-logos/stride.png";
import logoThomsonReuters from "../images/client-logos/thomsonreuters.png";

const clientLogos = [
  { src: logoNasdaq, name: "Nasdaq" },
  { src: logoThomsonReuters, name: "Thomson Reuters" },
  { src: logoAARP, name: "AARP" },
  { src: logoKaplan, name: "Kaplan" },
  { src: logoModus, name: "Modus Create" },
  { src: logoNorthwesternMutual, name: "Northwestern Mutual" },
  { src: logoCertsolv, name: "CertSolv" },
  { src: logoK12, name: "K12" },
  { src: logoStride, name: "Stride" },
  { src: logoDeepwatch, name: "Deepwatch" },
  { src: logoLifesherpa, name: "LifeSherpa" },
  { src: logoAgrify, name: "Agrify" },
  { src: logoPlasics, name: "Plasics" },
];

const skills = {
  "Design & Strategy": [
    "Lean Product Development",
    "User Research",
    "Design Strategy",
    "Prototyping",
    "Usability Testing",
  ],
  "Design Disciplines": [
    "Web & Responsive Design",
    "Mobile Design",
    "Interaction Design",
    "Design Systems",
    "Information Architecture",
  ],
  "Tools & Technologies": [
    "Figma",
    "TailwindCSS",
    "PostCSS",
    "HTML & CSS",
    "JavaScript",
    "C#",
    "React",
    "Sketch",
  ],
};

const experience = [
  {
    title: "Independent Contractor — Product Designer",
    period: "Nov 2021 – Present",
    projects: [
      {
        client: "Nasdaq, Inc.",
        description:
          "Re-imagined the platform's investment asset screener for flexibility and usability for non-power users. Redesigned the chart view to remedy 10 years of feature build-up, consolidating and organizing functionality.",
      },
      {
        client: "CertSolv",
        description:
          "Led a team of accountants through a lean product development process to define MVP requirements for a sales tax exemption management platform. Designed branding, design system, and all views. Built a component library using C#, TailwindCSS, and native HTML elements.",
      },
    ],
  },
  {
    title: "Principal Design Strategist — Modus Create",
    period: "Apr 2019 – Oct 2021",
    description:
      "Conducted lean user experience research and design engagements on behalf of nationally recognized brands to test product ideas and provide deeper understanding of their customers.",
    projects: [
      {
        client: "Kickstart Practice",
        description:
          "Redesigned Modus Create's Kickstart practice for lean product development. Facilitated mock engagements, redesigned workshops for maximum effect, and trained Design and Product Strategists on the new practice.",
      },
      {
        client: "Kaplan Schweser",
        description:
          "Interviewed 40 students across 6 product lines to provide a complete analysis of learner personas and their learning journey inside and outside the Kaplan product ecosystem.",
      },
      {
        client: "AARP",
        description:
          "Prototyped and performed user research to validate the viability of two product ideas geared toward increasing members' engagement and satisfaction with local and online events.",
      },
    ],
  },
  {
    title: "Senior Product Designer — Nasdaq, Inc.",
    period: "2013 – 2018",
    description:
      "Employed a rigorous user-centric design process to research user behaviors and deliver product designs across 4 business units as both a team lead and primary contributor.",
    highlights: [
      "Facilitated user interviews with over 100 quantitative analysts, fund managers, corporate executives, and systems admins",
      "Presented strategic recommendations for nascent products to ensure product-market fit",
      "Designed interfaces for browsers, mobile devices, television, and voice",
      "Performed usability tests on functional prototypes to validate in-progress work",
    ],
  },
  {
    title: "Director of User Experience — Thomson Reuters",
    period: "2011 – 2013",
  },
  {
    title: "Director of Software Development — Thomson Reuters",
    period: "2004 – 2011",
  },
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="border-b">
        <Container className="py-16 md:py-24">
          <div className="flex flex-col md:flex-row items-start gap-12">
            <div className="flex-1 space-y-6">
              <h1 className="font-display text-4xl font-semibold tracking-tight sm:text-5xl">
                About Me
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
                I'm a digital product designer experienced in designing and
                building useful and usable enterprise software that solves the
                complex problems of users.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
                Based in Warren, New Hampshire, I bring over 20 years of
                experience spanning user research, design strategy, prototyping,
                and front-end development. I've worked with organizations
                ranging from Thomson Reuters and Nasdaq to AARP and Kaplan,
                always focused on understanding users deeply and translating
                those insights into thoughtful product decisions.
              </p>

              <div className="flex flex-wrap gap-3 pt-2">
                <Button
                  variant="outline"
                  onClick={() =>
                    window.open(
                      "https://github.com/josozef",
                      "_blank"
                    )
                  }
                >
                  <svg
                    className="mr-2 h-4 w-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      clipRule="evenodd"
                    />
                  </svg>
                  GitHub
                </Button>
                <Button
                  variant="outline"
                  onClick={() =>
                    window.open(
                      "https://www.linkedin.com/in/josephemcneil/",
                      "_blank"
                    )
                  }
                >
                  <svg
                    className="mr-2 h-4 w-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                  LinkedIn
                </Button>
                <Button
                  variant="ghost"
                  onClick={() =>
                    window.location.href = "mailto:joe.mcneil@gmail.com"
                  }
                >
                  Get in Touch
                </Button>
              </div>
            </div>

            <div className="flex-shrink-0 w-full md:w-auto">
              <div className="w-full max-w-xs mx-auto md:max-w-sm">
                <img
                  src={AboutPic}
                  alt="Joe McNeil"
                  className="w-full rounded-lg"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Client Logos */}
      <Section spacing="compact" className="border-b">
        <Container>
          <div className="space-y-1 mb-8">
            <h2 className="text-2xl font-semibold tracking-tight">
              Clients & Organizations
            </h2>
            <p className="text-sm text-muted-foreground">
              Brands I've designed and researched for throughout my career.
            </p>
          </div>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-6 items-center">
            {clientLogos.map((logo) => (
              <div
                key={logo.name}
                className="flex items-center justify-center p-3 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
              >
                <img
                  src={logo.src}
                  alt={logo.name}
                  className="max-h-10 w-auto object-contain"
                  title={logo.name}
                />
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Skills */}
      <Section className="bg-muted/50">
        <Container>
          <div className="space-y-1 mb-10">
            <h2 className="text-2xl font-semibold tracking-tight">
              Skills & Expertise
            </h2>
            <p className="text-sm text-muted-foreground">
              Core competencies across design, research, and technology.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category} className="space-y-4">
                <h3 className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <Badge key={skill} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Separator />

      {/* Experience */}
      <Section>
        <Container>
          <div className="space-y-1 mb-10">
            <h2 className="text-2xl font-semibold tracking-tight">
              Experience
            </h2>
            <p className="text-sm text-muted-foreground">
              20+ years designing products for enterprise and consumer audiences.
            </p>
          </div>

          <div className="max-w-3xl space-y-10">
            {experience.map((role, index) => (
              <div key={index} className="space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                  <h3 className="text-lg font-semibold">{role.title}</h3>
                  <span className="text-sm text-muted-foreground whitespace-nowrap">
                    {role.period}
                  </span>
                </div>

                {role.description && (
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {role.description}
                  </p>
                )}

                {role.projects && (
                  <div className="space-y-4 pl-4 border-l-2 border-border">
                    {role.projects.map((project, pIndex) => (
                      <div key={pIndex} className="space-y-1">
                        <h4 className="text-sm font-medium">{project.client}</h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {project.description}
                        </p>
                      </div>
                    ))}
                  </div>
                )}

                {role.highlights && (
                  <ul className="space-y-2 pl-4 border-l-2 border-border">
                    {role.highlights.map((highlight, hIndex) => (
                      <li
                        key={hIndex}
                        className="text-sm text-muted-foreground leading-relaxed"
                      >
                        {highlight}
                      </li>
                    ))}
                  </ul>
                )}

                {index < experience.length - 1 && (
                  <Separator className="mt-6" />
                )}
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Education */}
      <Section className="bg-muted/50" spacing="compact">
        <Container>
          <div className="flex flex-col sm:flex-row sm:items-baseline gap-4">
            <h2 className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
              Education
            </h2>
            <div>
              <p className="text-base font-medium">Clark University</p>
              <p className="text-sm text-muted-foreground">
                BA, Psychology & Communications
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* Footer */}
      <footer className="border-t py-8">
        <Container>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} Joe McNeil
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://github.com/josozef"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/josephemcneil/"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </Container>
      </footer>
    </div>
  );
};

export default About;

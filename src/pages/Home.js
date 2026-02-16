import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import CaseStudyCard from "../components/CaseStudyCard";
import ExplorationCard from "../components/ExplorationCard";
import Container from "../components/ui/Container";
import Section from "../components/ui/Section";
import { Separator } from "../components/ui/Separator";
import { caseStudies } from "../data/caseStudies";
import { explorations } from "../data/explorations";

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />

      {/* Case Studies Section */}
      <Section>
        <Container>
          <div className="space-y-1 mb-10">
            <h2 className="text-2xl font-semibold tracking-tight">
              Featured Work
            </h2>
            <p className="text-sm text-muted-foreground">
              Selected case studies showcasing research, strategy, and design.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {caseStudies.map((caseStudy) => (
              <CaseStudyCard key={caseStudy.id} caseStudy={caseStudy} />
            ))}
          </div>
        </Container>
      </Section>

      <Separator />

      {/* Explorations Section */}
      <Section className="bg-muted/50">
        <Container>
          <div className="space-y-1 mb-10">
            <h2 className="text-2xl font-semibold tracking-tight">
              Explorations
            </h2>
            <p className="text-sm text-muted-foreground">
              Personal projects, experiments, and vibe-coding adventures.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {explorations.map((exploration) => (
              <ExplorationCard
                key={exploration.id}
                exploration={exploration}
              />
            ))}
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

export default Home;

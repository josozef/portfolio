import React from "react";
import Header from "../components/Header";
import ExplorationCard from "../components/ExplorationCard";
import Container from "../components/ui/Container";
import Section from "../components/ui/Section";
import { explorations } from "../data/explorations";

const Explorations = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="border-b bg-foreground text-background">
        <Container className="py-16 md:py-24">
          <div className="max-w-2xl space-y-4">
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              Explorations
            </h1>
            <p className="text-lg text-background/60 leading-relaxed">
              Personal projects, experiments, and vibe-coding adventures. A
              playground for trying new technologies, exploring design patterns,
              and building interesting things.
            </p>
          </div>
        </Container>
      </section>

      {/* Projects Grid */}
      <Section>
        <Container>
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
    </div>
  );
};

export default Explorations;

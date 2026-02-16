import React from "react";
import Header from "../components/Header";
import ExplorationCard from "../components/ExplorationCard";
import Container from "../components/ui/Container";
import Section from "../components/ui/Section";
import { explorations } from "../data/explorations";

const Explorations = () => {
  return (
    <div className="main explorations">
      <Header />

      {/* Hero Section */}
      <Section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <Container>
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6">Explorations</h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Personal projects, experiments, and vibe-coding adventures.
              A playground for trying new technologies, exploring design patterns,
              and building interesting things.
            </p>
          </div>
        </Container>
      </Section>

      {/* Projects Grid */}
      <Section>
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {explorations.map((exploration) => (
              <ExplorationCard key={exploration.id} exploration={exploration} />
            ))}
          </div>
        </Container>
      </Section>
    </div>
  );
};

export default Explorations;

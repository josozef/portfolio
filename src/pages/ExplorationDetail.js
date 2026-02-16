import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeftIcon } from "@heroicons/react/outline";
import Header from "../components/Header";
import Container from "../components/ui/Container";
import Section from "../components/ui/Section";
import Badge from "../components/ui/Badge";
import Button from "../components/ui/Button";
import { getExplorationBySlug } from "../data/explorations";

const ExplorationDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const exploration = getExplorationBySlug(slug);

  if (!exploration) {
    return (
      <div className="main">
        <Header />
        <Container className="py-20">
          <h1 className="text-3xl font-bold mb-4">Exploration Not Found</h1>
          <Button onClick={() => navigate("/explorations")}>
            &larr; Back to Explorations
          </Button>
        </Container>
      </div>
    );
  }

  return (
    <div className="main">
      <Header />

      {/* Hero Section */}
      <Section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <Container>
          <button
            onClick={() => navigate("/explorations")}
            className="flex items-center gap-2 text-white/80 hover:text-white mb-8 transition-colors"
          >
            <ArrowLeftIcon className="h-5 w-5" />
            Back to Explorations
          </button>

          <h1 className="text-5xl font-bold mb-6">{exploration.title}</h1>
          <p className="text-xl text-gray-300 mb-8">{exploration.description}</p>

          <div className="flex flex-wrap gap-3 mb-8">
            {exploration.tags.map((tag, index) => (
              <Badge key={index} className="bg-white/10 text-white border-white/20">
                {tag}
              </Badge>
            ))}
          </div>

          <div className="flex gap-4">
            {exploration.githubUrl && (
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-gray-900"
                onClick={() => window.open(exploration.githubUrl, "_blank")}
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
                View on GitHub
              </Button>
            )}
            {exploration.liveUrl && (
              <Button
                className="bg-white text-gray-900 hover:bg-gray-100"
                onClick={() => window.open(exploration.liveUrl, "_blank")}
              >
                View Live Site &rarr;
              </Button>
            )}
          </div>
        </Container>
      </Section>

      {/* Objective Section */}
      <Section>
        <Container>
          <div className="max-w-4xl">
            <h2 className="text-3xl font-semibold mb-6">Objective</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              {exploration.objective}
            </p>

            {exploration.details && exploration.details.length > 0 && (
              <div className="mb-12">
                <h3 className="text-2xl font-semibold mb-4">Key Features</h3>
                <ul className="space-y-3">
                  {exploration.details.map((detail, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-primary mr-3 mt-1">&check;</span>
                      <span className="text-gray-700">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {exploration.learnings && exploration.learnings.length > 0 && (
              <div>
                <h3 className="text-2xl font-semibold mb-4">Learnings &amp; Takeaways</h3>
                <ul className="space-y-3">
                  {exploration.learnings.map((learning, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-primary mr-3 mt-1">&rarr;</span>
                      <span className="text-gray-700">{learning}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </Container>
      </Section>
    </div>
  );
};

export default ExplorationDetail;

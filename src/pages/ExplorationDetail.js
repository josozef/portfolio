import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Container from "../components/ui/Container";
import Section from "../components/ui/Section";
import Badge from "../components/ui/Badge";
import Button from "../components/ui/Button";
import { Separator } from "../components/ui/Separator";
import { getExplorationBySlug } from "../data/explorations";

const ExplorationDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const exploration = getExplorationBySlug(slug);

  if (!exploration) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <Container className="py-20 text-center">
          <h1 className="text-3xl font-semibold tracking-tight mb-4">
            Exploration Not Found
          </h1>
          <p className="text-muted-foreground mb-8">
            The exploration you're looking for doesn't exist.
          </p>
          <Button onClick={() => navigate("/explorations")}>
            &larr; Back to Explorations
          </Button>
        </Container>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="border-b bg-foreground text-background">
        <Container className="py-16 md:py-24">
          <button
            onClick={() => navigate("/explorations")}
            className="inline-flex items-center gap-2 text-background/60 hover:text-background mb-8 transition-colors text-sm"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M10 12L6 8L10 4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Back to Explorations
          </button>

          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl mb-4">
            {exploration.title}
          </h1>
          <p className="text-lg text-background/60 leading-relaxed mb-8 max-w-2xl">
            {exploration.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-8">
            {exploration.tags.map((tag, index) => (
              <Badge
                key={index}
                className="bg-background/10 text-background border-background/20 hover:bg-background/20"
              >
                {tag}
              </Badge>
            ))}
          </div>

          <div className="flex flex-wrap gap-3">
            {exploration.githubUrl && (
              <Button
                variant="outline"
                className="bg-transparent border-background text-background hover:bg-background hover:text-foreground"
                onClick={() => window.open(exploration.githubUrl, "_blank")}
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
                View on GitHub
              </Button>
            )}
            {exploration.liveUrl && (
              <Button
                className="bg-background text-foreground hover:bg-background/90"
                onClick={() => window.open(exploration.liveUrl, "_blank")}
              >
                View Live Site
              </Button>
            )}
          </div>
        </Container>
      </section>

      {/* Content */}
      <Section>
        <Container>
          <div className="max-w-3xl space-y-12">
            {/* Objective */}
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold tracking-tight">
                Objective
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                {exploration.objective}
              </p>
            </div>

            {exploration.details && exploration.details.length > 0 && (
              <>
                <Separator />
                <div className="space-y-4">
                  <h2 className="text-2xl font-semibold tracking-tight">
                    Key Features
                  </h2>
                  <ul className="space-y-3">
                    {exploration.details.map((detail, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-3"
                      >
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
                        <span className="text-muted-foreground">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </>
            )}

            {exploration.learnings && exploration.learnings.length > 0 && (
              <>
                <Separator />
                <div className="space-y-4">
                  <h2 className="text-2xl font-semibold tracking-tight">
                    Learnings & Takeaways
                  </h2>
                  <ul className="space-y-3">
                    {exploration.learnings.map((learning, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-3"
                      >
                        <svg
                          className="h-5 w-5 mt-0.5 text-muted-foreground flex-shrink-0"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M13 7l5 5m0 0l-5 5m5-5H6"
                          />
                        </svg>
                        <span className="text-muted-foreground">
                          {learning}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </>
            )}
          </div>
        </Container>
      </Section>
    </div>
  );
};

export default ExplorationDetail;

import React from "react";
import { useNavigate } from "react-router-dom";
import { cn } from "../lib/utils";
import Container from "./ui/Container";

const ProjectHero = ({ title, description, heroimage, imageClass }) => {
  const navigate = useNavigate();

  return (
    <section className="brand-hero py-12 md:py-20">
      <Container>
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 space-y-6">
            <button
              onClick={() => navigate(-1)}
              className="inline-flex items-center text-white/70 hover:text-white transition-colors text-sm"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                className="mr-2"
              >
                <path
                  d="M12.5 15L7.5 10L12.5 5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Back
            </button>
            <h1 className="text-4xl md:text-5xl font-semibold text-white tracking-tight">
              {title}
            </h1>
            <p className="text-lg text-white/80 leading-relaxed max-w-xl">
              {description}
            </p>
          </div>
          {heroimage && (
            <div
              className={cn(
                "flex-shrink-0 w-full md:w-2/5",
                imageClass
              )}
            >
              <img src={heroimage} alt="" className="w-full" />
            </div>
          )}
        </div>
      </Container>
    </section>
  );
};

export default ProjectHero;

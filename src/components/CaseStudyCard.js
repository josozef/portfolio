import React from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardHeader, CardContent, CardFooter, CardTitle, CardDescription } from "./ui/Card";
import Badge from "./ui/Badge";

const CaseStudyCard = ({ caseStudy }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/work/${caseStudy.slug}`);
  };

  return (
    <Card
      className="cursor-pointer overflow-hidden transition-all hover:shadow-lg hover:-translate-y-0.5 group"
      onClick={handleClick}
    >
      {/* Image Section */}
      {caseStudy.cardImage && (
        <div className="aspect-video w-full overflow-hidden border-b">
          <img
            src={require("../images/projectcards/" + caseStudy.cardImage + ".png")}
            alt={caseStudy.name}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      )}

      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="flex-1 space-y-1">
            <CardTitle className="text-lg group-hover:text-primary transition-colors">
              {caseStudy.name}
            </CardTitle>
            <CardDescription>
              {caseStudy.client}
              {caseStudy.year && <span className="ml-1">&middot; {caseStudy.year}</span>}
            </CardDescription>
          </div>
          {caseStudy.logo && (
            <div className="flex-shrink-0 ml-4 w-16">
              <img
                src={require("../images/logos/" + caseStudy.logo + ".png")}
                alt={caseStudy.client + " logo"}
                className="w-full h-auto opacity-60 group-hover:opacity-100 transition-opacity"
              />
            </div>
          )}
        </div>
      </CardHeader>

      <CardContent>
        {/* Roles */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {caseStudy.roles.map((role, index) => (
            <Badge key={index} variant="secondary">
              {role}
            </Badge>
          ))}
        </div>

        {/* Summary */}
        <p className="text-sm text-muted-foreground leading-relaxed">
          {caseStudy.summary}
        </p>
      </CardContent>

      <CardFooter className="text-sm font-medium text-primary">
        View Case Study
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          className="ml-1 transition-transform group-hover:translate-x-0.5"
        >
          <path
            d="M6 3L11 8L6 13"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </CardFooter>
    </Card>
  );
};

export default CaseStudyCard;

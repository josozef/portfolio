import React from "react";
import { useNavigate } from "react-router-dom";
import Card from "./ui/Card";
import Badge from "./ui/Badge";

/**
 * CaseStudyCard - Modern card component for displaying case studies
 * Inspired by shadcn/ui design principles
 */
const CaseStudyCard = ({ caseStudy }) => {
  const navigate = useNavigate();
  
  const handleClick = () => {
    navigate(`/work/${caseStudy.slug}`);
  };

  return (
    <Card
      className="cursor-pointer hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden group"
      onClick={handleClick}
    >
      {/* Image Section */}
      {caseStudy.id && (
        <div className="aspect-video w-full overflow-hidden bg-gray-100">
          <img
            src={require("../images/projectcards/" + caseStudy.id + ".png")}
            alt={caseStudy.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      )}

      <Card.Header>
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <Card.Title className="text-xl mb-2 group-hover:text-primary transition-colors">
              {caseStudy.name}
            </Card.Title>
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <span>{caseStudy.client}</span>
              {caseStudy.year && (
                <>
                  <span>•</span>
                  <span>{caseStudy.year}</span>
                </>
              )}
            </div>
          </div>
          {caseStudy.logo && (
            <div className="flex-shrink-0 ml-4 max-w-[80px]">
              <img
                src={require("../images/logos/" + caseStudy.logo + ".png")}
                alt={caseStudy.client + " logo"}
                className="w-full h-auto"
              />
            </div>
          )}
        </div>

        {/* Roles */}
        <div className="flex flex-wrap gap-2 mb-4">
          {caseStudy.roles.map((role, index) => (
            <Badge key={index} variant="secondary">
              {role}
            </Badge>
          ))}
        </div>

        {/* Summary */}
        <Card.Description className="text-base leading-relaxed">
          {caseStudy.summary}
        </Card.Description>
      </Card.Header>

      <Card.Footer className="text-sm text-primary font-medium group-hover:gap-2 transition-all">
        View Case Study
        <span className="group-hover:translate-x-1 transition-transform inline-block">→</span>
      </Card.Footer>
    </Card>
  );
};

export default CaseStudyCard;

import React from "react";
import { cn } from "../lib/utils";
import Container from "./ui/Container";

const SectionContent = ({ title, alt, children }) => {
  return (
    <section
      className={cn(
        "py-10 md:py-14",
        alt ? "brand-content-alt" : "bg-background"
      )}
    >
      <Container>
        <div className="flex flex-col md:flex-row gap-8 md:gap-12">
          <div className="md:w-1/5 flex-shrink-0">
            <h2 className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
              {title}
            </h2>
          </div>
          <div className="md:w-4/5 prose prose-gray max-w-none text-foreground">
            {children}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default SectionContent;

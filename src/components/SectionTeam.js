import React from "react";
import Container from "./ui/Container";

const SectionTeam = ({ team }) => {
  return (
    <section className="brand-team py-6">
      <Container>
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <span className="text-sm font-medium uppercase tracking-wider text-foreground/60">
            Team Members
          </span>
          <p className="text-sm text-foreground/80">{team}</p>
        </div>
      </Container>
    </section>
  );
};

export default SectionTeam;

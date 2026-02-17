import React from "react";
import Container from "./ui/Container";
import Badge from "./ui/Badge";

const SectionRoles = ({ roles }) => {
  const roleList = typeof roles === "string" ? roles.split(", ") : roles;

  return (
    <section className="brand-roles py-6">
      <Container>
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <span className="text-sm font-medium uppercase tracking-wider text-white/70">
            Roles
          </span>
          <div className="flex flex-wrap gap-2">
            {roleList.map((role, index) => (
              <Badge
                key={index}
                className="bg-white/15 text-white border-white/20 hover:bg-white/25"
              >
                {role.trim()}
              </Badge>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default SectionRoles;

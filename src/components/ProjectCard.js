import React from "react";
import { cn } from "../lib/utils";
import Badge from "./ui/Badge";

const ProjectCard = ({ id, name, logo, roles, casestudy, children }) => {
  return (
    <div
      className={cn(
        "rounded-lg border bg-card text-card-foreground shadow-sm flex pt-8 pb-6 px-6 mb-6",
        casestudy && "cursor-pointer hover:shadow-lg transition-shadow"
      )}
    >
      <div className="basis-1/2 flex-none mr-6">
        <div className="flex items-center relative mb-6">
          <h1 className="text-2xl font-medium">{name}</h1>
          <div className="flex-none absolute right-0 max-w-[25%]">
            <img
              src={require("../images/logos/" + logo + ".png")}
              alt={logo + " logo"}
            />
          </div>
        </div>
        <div className="flex flex-wrap gap-1.5 mb-4">
          {roles.map((role, index) => (
            <Badge key={index} variant="secondary">
              {role}
            </Badge>
          ))}
        </div>
        <div className="text-base text-muted-foreground">{children}</div>
      </div>
      <div>
        <img
          src={require("../images/projectcards/" + id + ".png")}
          alt={name + " visual summary"}
          className="rounded-md"
        />
      </div>
    </div>
  );
};

export default ProjectCard;

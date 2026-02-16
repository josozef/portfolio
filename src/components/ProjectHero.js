import React from "react";
import { ArrowLeftIcon } from "@heroicons/react/outline";

const ProjectHero = (props) => {
  return (
    <div className="project-hero flex items-center">
      <div className="basis-2/12">
        <ArrowLeftIcon className="h-16 w-16 text-white" />
      </div>
      <div className="basis-1/2">
        <h1 className="text-5xl text-white font-semibold">{props.title}</h1>
        <p className="text-lg text-white mt-11 font-medium">
          {props.description}
        </p>
      </div>
      <div className="basis-4/12 ml-16">
        <img src={props.heroimage} alt="" />
      </div>
    </div>
  );
};

export default ProjectHero;

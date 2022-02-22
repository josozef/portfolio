import classNames from "classnames";
import React from "react";
import ProjectCardTags from "./ProjectCardTags";

const ProjectCard = (props) => {
  return (
    <div
      className={classNames(
        "bg-white flex pt-8 pb-6 px-6 mb-6 rounded-lg shadow-xl",
        props.casestudy && "cursor-pointer"
      )}
    >
      {/* Left Column */}
      <div className="basis-1/2 flex-none mr-6">
        {/* Header - Left Column */}
        <div className="flex items-center relative mb-6">
          <h1 className="text-2xl font-medium text-medium">{props.name}</h1>
          <div className="flex-none absolute right-0 max-w-[25%]">
            <img
              src={require("../images/logos/" + props.logo + ".png")}
              alt={props.logo + " logo"}
            />
          </div>
        </div>
        {/* Tags - Left Column */}
        <ProjectCardTags roles={props.roles} />

        {/* Tags - Content */}
        <div className="text-xl">{props.children}</div>
      </div>
      <div>
        <img
          src={require("../images/projectcards/" + props.id + ".png")}
          alt={props.name + " visual summary"}
        />
      </div>
    </div>
  );
};

export default ProjectCard;

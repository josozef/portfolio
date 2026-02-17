import React from "react";

const ProjectCardTags = (props) => {
  return (
    <div className="mb-4">
      {props.roles.map((role, index) => {
        return (
          <span
            key={index}
            className="bg-blue-600 py-2 px-3 rounded-sm mr-2 inline-block text-sm font-medium text-white"
          >
            {role}
          </span>
        );
      })}
    </div>
  );
};

export default ProjectCardTags;

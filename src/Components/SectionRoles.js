import React from "react";

const SectionRoles = (props) => {
  return (
    <div className="section-roles flex items-center">
      <div className="basis-2/12 text-lg uppercase text-white tracking-wide">
        Roles
      </div>
      <div className="basis-10/12 text-lg text-white">{props.roles}</div>
    </div>
  );
};

export default SectionRoles;

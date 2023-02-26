import React from "react";

const SectionTeam = (props) => {
  return (
    <div className="section-team flex items-center">
      <div className="basis-2/12 text-lg uppercase text-standard tracking-wide">
        Team Members
      </div>
      <div className="basis-10/12 text-lg text-standard">{props.team}</div>
    </div>
  );
};

export default SectionTeam;

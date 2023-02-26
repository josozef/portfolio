import React from "react";

const SectionContent = (props) => {
  return (
    <div
      className={
        "section-content flex items-top " +
        (props.alt ? "section-content--alt" : "")
      }
    >
      <div className="basis-2/12 text-lg uppercase text-standard tracking-wide">
        {props.title}
      </div>
      <div className="basis-10/12 text-lg text-standard">{props.children}</div>
    </div>
  );
};

export default SectionContent;

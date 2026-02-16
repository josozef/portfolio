import React from "react";
import classNames from "classnames";

/**
 * Section component for page sections with consistent spacing
 */
const Section = ({ 
  className = "",
  variant = "default",
  children 
}) => {
  const variants = {
    default: "py-12 md:py-16 lg:py-20",
    compact: "py-8 md:py-12",
    spacious: "py-16 md:py-24 lg:py-32"
  };

  return (
    <section
      className={classNames(
        variants[variant],
        className
      )}
    >
      {children}
    </section>
  );
};

export default Section;

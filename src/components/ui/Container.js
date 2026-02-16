import React from "react";
import classNames from "classnames";

/**
 * Container component for consistent page width and padding
 */
const Container = ({ 
  className = "", 
  maxWidth = "7xl",
  children 
}) => {
  const maxWidthClasses = {
    sm: "max-w-screen-sm",
    md: "max-w-screen-md",
    lg: "max-w-screen-lg",
    xl: "max-w-screen-xl",
    "2xl": "max-w-screen-2xl",
    "7xl": "max-w-7xl",
    full: "max-w-full"
  };

  return (
    <div
      className={classNames(
        "mx-auto px-4 sm:px-6 lg:px-8",
        maxWidthClasses[maxWidth],
        className
      )}
    >
      {children}
    </div>
  );
};

export default Container;

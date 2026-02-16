import React from "react";
import classNames from "classnames";

/**
 * Card component for containing content
 * Inspired by shadcn/ui design principles
 */
const Card = ({ className = "", children, ...props }) => {
  return (
    <div
      className={classNames(
        "bg-white rounded-lg border border-gray-200 shadow-sm",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

const CardHeader = ({ className = "", children }) => {
  return (
    <div className={classNames("flex flex-col space-y-1.5 p-6", className)}>
      {children}
    </div>
  );
};

const CardTitle = ({ className = "", children }) => {
  return (
    <h3 className={classNames("text-2xl font-semibold leading-none tracking-tight", className)}>
      {children}
    </h3>
  );
};

const CardDescription = ({ className = "", children }) => {
  return (
    <p className={classNames("text-sm text-gray-500", className)}>
      {children}
    </p>
  );
};

const CardContent = ({ className = "", children }) => {
  return (
    <div className={classNames("p-6 pt-0", className)}>
      {children}
    </div>
  );
};

const CardFooter = ({ className = "", children }) => {
  return (
    <div className={classNames("flex items-center p-6 pt-0", className)}>
      {children}
    </div>
  );
};

Card.Header = CardHeader;
Card.Title = CardTitle;
Card.Description = CardDescription;
Card.Content = CardContent;
Card.Footer = CardFooter;

export default Card;

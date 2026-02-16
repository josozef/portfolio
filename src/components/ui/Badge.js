import React from "react";
import classNames from "classnames";

const badgeVariants = {
  default: "bg-gray-100 text-gray-900",
  primary: "bg-primary-l4 text-primary-800",
  secondary: "bg-gray-200 text-gray-700",
  outline: "border border-gray-300 text-gray-700"
};

/**
 * Badge component for displaying tags, labels, and categories
 * @param {string} variant - default | primary | secondary | outline
 * @param {ReactNode} children - Badge content
 */
const Badge = ({ 
  variant = "default", 
  className = "",
  children 
}) => {
  return (
    <span
      className={classNames(
        "inline-flex items-center px-2.5 py-0.5 rounded-full text-sm font-medium",
        badgeVariants[variant],
        className
      )}
    >
      {children}
    </span>
  );
};

export default Badge;

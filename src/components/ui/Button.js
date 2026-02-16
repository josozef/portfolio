import React from "react";
import classNames from "classnames";

const buttonVariants = {
  default: "bg-gray-900 text-white hover:bg-gray-800",
  primary: "bg-primary text-white hover:bg-primary-600",
  secondary: "bg-gray-100 text-gray-900 hover:bg-gray-200",
  outline: "border-2 border-gray-300 text-gray-900 hover:bg-gray-50",
  ghost: "text-gray-900 hover:bg-gray-100",
  link: "text-primary underline-offset-4 hover:underline"
};

const buttonSizes = {
  sm: "px-3 py-1.5 text-sm",
  md: "px-4 py-2 text-base",
  lg: "px-6 py-3 text-lg"
};

/**
 * Reusable Button component with multiple variants and sizes
 * @param {string} variant - default | primary | secondary | outline | ghost | link
 * @param {string} size - sm | md | lg
 * @param {boolean} disabled - Whether button is disabled
 * @param {function} onClick - Click handler
 * @param {ReactNode} children - Button content
 */
const Button = ({ 
  variant = "default", 
  size = "md", 
  disabled = false,
  className = "",
  onClick,
  type = "button",
  children,
  ...props 
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classNames(
        "inline-flex items-center justify-center rounded-md font-medium transition-colors",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
        "disabled:opacity-50 disabled:pointer-events-none",
        buttonVariants[variant],
        buttonSizes[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;

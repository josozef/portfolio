import React, { useState, useRef, useEffect } from "react";
import classNames from "classnames";
import { ChevronDownIcon } from "@heroicons/react/outline";

/**
 * Dropdown Menu Component
 * Accessible dropdown menu with keyboard navigation
 */
const Dropdown = ({ trigger, children, align = "left" }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  return (
    <div className="relative inline-block" ref={dropdownRef}>
      <div onClick={() => setIsOpen(!isOpen)}>
        {trigger}
      </div>
      
      {isOpen && (
        <div
          className={classNames(
            "absolute z-50 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5",
            align === "right" ? "right-0" : "left-0"
          )}
        >
          <div className="py-1" role="menu">
            {React.Children.map(children, (child) => {
              if (React.isValidElement(child)) {
                return React.cloneElement(child, {
                  onClick: () => {
                    child.props.onClick?.();
                    setIsOpen(false);
                  }
                });
              }
              return child;
            })}
          </div>
        </div>
      )}
    </div>
  );
};

const DropdownItem = ({ children, onClick, href, className = "" }) => {
  const baseClasses = "block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors";

  if (href) {
    return (
      <a
        href={href}
        className={classNames(baseClasses, className)}
        role="menuitem"
        onClick={onClick}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      className={classNames(baseClasses, className)}
      role="menuitem"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

const DropdownSeparator = () => {
  return <div className="h-px bg-gray-200 my-1" />;
};

const DropdownTrigger = ({ children, className = "" }) => {
  return (
    <button
      className={classNames(
        "inline-flex items-center gap-1 cursor-pointer",
        className
      )}
    >
      {children}
      <ChevronDownIcon className="h-4 w-4" />
    </button>
  );
};

Dropdown.Item = DropdownItem;
Dropdown.Separator = DropdownSeparator;
Dropdown.Trigger = DropdownTrigger;

export default Dropdown;

import React from "react";

const Header = () => {
  return (
    <header>
      <span className="font-display text-2xl font-semibold text-gray-dark">
        joe.mcneil
      </span>
      <nav className="justify-self-end">
        <ul className="uppercase text-lg">
          <li className="inline-block mr-4">Work</li>
          <li className="inline-block text-gray-mid">About Me</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

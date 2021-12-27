import React from "react";

const Header = () => {
  return (
    <header>
      <span className="font-display text-2xl font-semibold text-gray-dark">
        <a href="/">joe.mcneil</a>
      </span>
      <nav className="justify-self-end">
        <ul className="uppercase text-lg">
          <li className="inline-block mr-4">
            <a href="/project">Work</a>
          </li>
          <li className="inline-block text-gray-mid">About Me</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

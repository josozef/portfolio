import React from "react";

const Header = () => {
  return (
    <header className="header">
      <span className="header-logo">
        <a href="/">joe.mcneil</a>
      </span>
      <nav className="justify-self-end">
        <ul className="">
          <li className="header-link mr-4">
            <a href="/k12learnerjourney">Work</a>
          </li>
          <li className="header-link active hidden">
              <a href="/aarpchatbot">About Me</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

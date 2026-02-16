import React from "react";
import Dropdown from "./ui/Dropdown";
import { caseStudies } from "../data/caseStudies";

const Header = () => {
  return (
    <header className="header">
      <span className="header-logo">
        <a href="/">joe.mcneil</a>
      </span>
      <nav className="justify-self-end">
        <ul className="flex items-center">
          <li className="header-link mr-6">
            <Dropdown
              trigger={
                <Dropdown.Trigger className="header-link">
                  Work
                </Dropdown.Trigger>
              }
            >
              {caseStudies.map((study) => (
                <Dropdown.Item
                  key={study.id}
                  href={`/work/${study.slug}`}
                >
                  {study.name}
                </Dropdown.Item>
              ))}
            </Dropdown>
          </li>
          <li className="header-link mr-6">
            <Dropdown
              trigger={
                <Dropdown.Trigger className="header-link">
                  Explorations
                </Dropdown.Trigger>
              }
            >
              <Dropdown.Item href="/explorations">
                All Projects
              </Dropdown.Item>
              <Dropdown.Separator />
              <Dropdown.Item href="/explorations/portfolio-redesign">
                Portfolio Redesign
              </Dropdown.Item>
            </Dropdown>
          </li>
          <li className="header-link hidden">
            <a href="/about">About Me</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

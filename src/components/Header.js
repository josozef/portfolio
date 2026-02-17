import React from "react";
import { cn } from "../lib/utils";
import Dropdown from "./ui/Dropdown";
import { caseStudies } from "../data/caseStudies";
import { explorations } from "../data/explorations";

const Header = ({ variant = "default" }) => {
  const isBrand = variant === "brand";

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b",
        isBrand
          ? "brand-header border-transparent"
          : "bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-border"
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <a
          href="/"
          className={cn(
            "font-display text-xl font-semibold tracking-tight transition-colors hover:opacity-80",
            isBrand ? "text-white" : "text-foreground"
          )}
        >
          joe.mcneil
        </a>

        {/* Navigation */}
        <nav className="flex items-center gap-1">
          <Dropdown
            trigger={
              <Dropdown.Trigger
                className={cn(
                  "h-9 px-3 rounded-md transition-colors",
                  isBrand
                    ? "text-white/90 hover:text-white hover:bg-white/10"
                    : "text-muted-foreground hover:text-foreground hover:bg-accent"
                )}
              >
                Work
              </Dropdown.Trigger>
            }
          >
            {caseStudies.map((study) => (
              <Dropdown.Item key={study.id} href={`/work/${study.slug}`}>
                <div className="flex flex-col">
                  <span className="font-medium">{study.name}</span>
                  <span className="text-xs text-muted-foreground">
                    {study.client}
                  </span>
                </div>
              </Dropdown.Item>
            ))}
          </Dropdown>

          <Dropdown
            trigger={
              <Dropdown.Trigger
                className={cn(
                  "h-9 px-3 rounded-md transition-colors",
                  isBrand
                    ? "text-white/90 hover:text-white hover:bg-white/10"
                    : "text-muted-foreground hover:text-foreground hover:bg-accent"
                )}
              >
                Explorations
              </Dropdown.Trigger>
            }
          >
            <Dropdown.Item href="/explorations">
              <span className="font-medium">All Explorations</span>
            </Dropdown.Item>
            <Dropdown.Separator />
            {explorations.map((exp) => (
              <Dropdown.Item
                key={exp.id}
                href={`/explorations/${exp.slug}`}
              >
                {exp.title}
              </Dropdown.Item>
            ))}
          </Dropdown>

          <a
            href="/about"
            className={cn(
              "inline-flex items-center justify-center h-9 px-3 rounded-md text-sm font-medium transition-colors",
              isBrand
                ? "text-white/90 hover:text-white hover:bg-white/10"
                : "text-muted-foreground hover:text-foreground hover:bg-accent"
            )}
          >
            About
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;

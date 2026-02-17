import React from "react";
import { cva } from "class-variance-authority";
import { cn } from "../../lib/utils";

const sectionVariants = cva("", {
  variants: {
    spacing: {
      default: "py-12 md:py-16 lg:py-20",
      compact: "py-8 md:py-12",
      spacious: "py-16 md:py-24 lg:py-32",
      none: "",
    },
  },
  defaultVariants: {
    spacing: "default",
  },
});

const Section = React.forwardRef(
  ({ className, spacing, children, ...props }, ref) => (
    <section
      ref={ref}
      className={cn(sectionVariants({ spacing }), className)}
      {...props}
    >
      {children}
    </section>
  )
);
Section.displayName = "Section";

export default Section;

import React from "react";
import HeroPic from "../images/pic.png";

const Hero = () => {
  return (
    <section className="relative overflow-hidden border-b bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-12 py-16 md:py-24">
          {/* Text Content */}
          <div className="flex-1 space-y-6">
            <h1 className="font-display text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
              My name is Joe.
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-[600px]">
              I'm a user experience designer, researcher and strategist from New
              England, USA.
            </p>
            <p className="text-lg text-muted-foreground">
              Thanks for coming!
            </p>
          </div>

          {/* Image */}
          <div className="flex-shrink-0 w-full md:w-auto">
            <div className="relative w-full max-w-sm mx-auto md:max-w-md">
              <img
                src={HeroPic}
                alt="Joe and Karen"
                className="w-full rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

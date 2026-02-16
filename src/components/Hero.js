import React from "react";
import HeroPic from "../images/pic.png";

const Hero = () => {
  return (
    <div className="px-32 py-12 text-4xl font-display flex items-center">
      <div className="basis-1/2">
        <p>My name is Joe.</p>
        <p className="pt-6">
          I'm a user experience design, researcher and strategist from New
          England, USA.
        </p>
        <p className="pt-6">Thanks for coming!</p>
      </div>
      <div className="basis-1/2 ml-16">
        <img src={HeroPic} width="100%" alt="Joe and Karen"></img>
      </div>
    </div>
  );
};

export default Hero;

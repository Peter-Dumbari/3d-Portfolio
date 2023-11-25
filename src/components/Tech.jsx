import React from "react";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((technology) => (
        <div className="w-28 h-28 text-center " key={technology.name}>
          <BallCanvas icon={technology.icon} />
          <h6 className="text-white-100 text-[14px] pl-1 tracking-wider">
            {technology.name}
          </h6>
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
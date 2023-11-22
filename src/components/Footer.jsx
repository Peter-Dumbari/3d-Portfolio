import React from "react";
import { SectionWrapper } from "../hoc";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";
import { links } from "../constants";

const Footer = () => {
  return (
    <div className="fixed top-0 left-0 flex items-center h-full">
      <motion.div>
        <div className="flex  flex-col l w-10  p-[1px]">
          {links.map((link) => (
            <div
              className="flex  py-4"
              key={link.index}
              onClick={() => window.open(link.link, "_blank")}>
              <div className="container cursor-pointer">
                <img
                  src={link.icon}
                  alt={link.name}
                  className="object-contain h-auto w-10"
                />
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Footer, "");

import React from "react";
import { SectionWrapper } from "../hoc";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";
import { links } from "../constants";

const Footer = () => {
  return (
    <section className="w-full  items-center py-5 z-20">
      <div className="bg-white w-ful h-1"></div>

      <motion.div>
        <div className="container flex justify-center w-50">
          {links.map((link) => (
            <div
              className="flex"
              key={link.index}
              onClick={() => window.open(link.link, "_blank")}>
              <div className="container pointer">
                <img
                  src={link.icon}
                  alt={link.name}
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default SectionWrapper(Footer, "");

import React from "react";
import { SectionWrapper } from "../hoc";
import { returnicon, chevron } from "../assets";
import { links } from "../constants";

const Footer = () => {
  const [show, setShow] = React.useState(true);

  const handleShow = () => {
    setShow(true);
  };

  const handleHide = () => {
    setShow(false);
  };
  return (
    <div className="fixed top-0 left-0 flex items-center h-full">
      {show ? (
        <div className=" bg-black-100 p-3 rounded-2xl">
          <div className="flex  flex-col w-10  p-[1px] z-40">
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
          <div
            className="flex items-center justify-center  rounded-full bg-black-200 cursor-pointer"
            onClick={handleHide}>
            <img
              src={returnicon}
              alt="return"
              className="object-contain w-5 h-5"
            />
          </div>
        </div>
      ) : (
        <div
          className="flex items-center justify-center  rounded-full bg-black-200 cursor-pointer"
          onClick={handleShow}>
          <img src={chevron} alt="return" className="object-contain w-5 h-5" />
        </div>
      )}
    </div>
  );
};

export default SectionWrapper(Footer, "");

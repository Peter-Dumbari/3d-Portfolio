import React from "react";
import Typewriter from "typewriter-effect";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import { heroImg } from "../assets";
import { FaGithub, FaLinkedin, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`absolute  pt-[80px]  max-w-7xl mx-auto ${styles.paddingX} flex justify-center items-start gap-5`}>
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#FF8658]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#FF8658]">Peter</span>
          </h1>

          <div className="mt-2 h-20 ">
            <Typewriter
              options={{
                strings: ["The CEO of PECH NG, a software development company"],
                autoStart: true,
                loop: true,
              }}
            />
          </div>

          {/* <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            
          </p> */}
        </div>
      </div>
      {window.innerWidth > 768 ? (
        <ComputersCanvas />
      ) : (
        <div className="mobile-hero absolute  w-full h-full flex flex-col justify-center items-center top-20 z-10">
          <div className="image-container h-[45%] w-[80%]  border-2 border-[#ffff] rounded-full overflow-hidden shadow-lg shadow-[#FF8658]">
            <img
              src={heroImg}
              alt="Hero Mobile"
              className="mobile-hero-image w-full h-full object-cover center-center"
            />

            <div className="lg:hidden absolute flex justify-evenly items-center w-[250px] z-50 bottom-20">
              <button
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/in/peterdumbari/",
                    "_blank",
                  )
                }
                className="h-8 w-8 border border-white p-2 rounded-full flex justify-center items-center cursor-pointer text-white text-[14px] hover:border-[#FF8658] hover:text-[#FF8658] transition">
                <FaLinkedinIn size={30} />
              </button>
              <button
                onClick={() => {
                  window.open("https://github.com/Peter-Dumbari", "_blank");
                }}
                className="h-8 w-8 border border-white rounded-full flex justify-center items-center cursor-pointer text-white text-[14px] hover:border-[#FF8658] hover:text-[#FF8658] transition ">
                <FaGithub size={30} />
              </button>
              <button
                onClick={() => {
                  window.open("https://twitter.com/PeterDumbari", "_blank");
                }}
                className="h-8 w-8 border border-white p-2 rounded-full flex justify-center items-center cursor-pointer text-white text-[14px] hover:border-[#FF8658] hover:text-[#FF8658] transition">
                <FaTwitter size={30} />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;

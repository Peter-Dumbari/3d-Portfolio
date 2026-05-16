import React from "react";
import Typewriter from "typewriter-effect";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import { heroImg } from "../assets";

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

          <div className="mt-2">
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
        <div className="mobile-hero absolute  w-full h-full flex justify-center items-end">
          <div className="image-container h-[65%] w-[90%] border-dashed border-4 border-[#FF8658] rounded-full overflow-hidden p-2">
            <img
              src={heroImg}
              alt="Hero Mobile"
              className="mobile-hero-image w-full h-full object-cover center-center hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;

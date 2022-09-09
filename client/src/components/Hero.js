import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";

export const Hero = () => {
  return (
    <div name="home" className="md:h-[600px] w-full p-[50px]">
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center">
        <div className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          My name is Andrew McBurney.
        </div>
        <div className="text-2xl sm:text-5xl font-bold text-[#8892b0]">
          I am a fullstack Javascript developer.
        </div>
        <p className="text-[#8892b0] py-4 max-w-[500px]">
          with a focus in building user-friendly web applications by utilizing
          Javascript through the full stack
        </p>
        <div>
          <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600 duration-300 hover:px-12">
            View Work
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

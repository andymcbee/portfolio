import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { AboutMeBlurb } from "../components/AboutMeBlurb";
import { GetInTouchFooter } from "../components/GetInTouchFooter";
import { Project } from "../components/Project";
//h-screen
export const Home = () => {
  return (
    <div name="home" className="w-full bg-[#0a192f]">
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center border border-red-500">
        <p className="text-pink-600">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          Andrew McBurney.
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
          I'm a full stack developer
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[500px]">
          with a focus in building user-friendly web applications by utilizing
          Javascript through the full stack.
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

      <div className="flex justify-center">
        <AboutMeBlurb />
      </div>
      <div className="flex flex-col items-center justify-center">
        <Project />
        <Project />
        <Project />
        <Project />
        <Project />
      </div>
      <div>
        <GetInTouchFooter />
      </div>
    </div>
  );
};

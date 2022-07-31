import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";

export const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#0a192f]">
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-pink-600">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          Andrew McBurney
        </h1>
        <h2>I'm a full stack developer</h2>
        <p>
          with a focus in building user-friendly web applications by utilizing
          Javascript through the full stack.
        </p>
        <div>
          <button>
            View Work <HiArrowNarrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

import React from "react";

export const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000] w-full px-4 grid grid-cols-2 gaps-8">
          <div className="sm:text-right pb-8 pl-4 border-2">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              About
            </p>
          </div>
          <div className="border-2"> test</div>
        </div>
      </div>
    </div>
  );
};

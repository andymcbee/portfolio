//border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal"

export const AboutMeBlurb = () => {
  return (
    <div className="flex m-5 p-5 md:w-[50%] flex flex-col gap-2">
      <h1>About Andrew</h1>
      <div className="flex flex-col justify-evenly">
        <div className="flex flex-col gap-2 w-[100%]">
          <div className="flex flex-col gap-5 p-5">
            <p className="flex flex-col gap-2">
              I am an enthusastic software engineer with a track record of
              rising to any challenge by meeting the demands put on me.
            </p>
            <p className="flex flex-col gap-2">
              In the software world, I enjoy creatively solving complex problems
              to satisfy business requirements in an ideal manner, while writing
              clean and maintanable code.
            </p>
            <p className="flex flex-col gap-2">
              My biggest passion in life is growth - personally and
              professionally. I strive to be a better human being each and every
              day, while helping others where I can.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

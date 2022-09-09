//border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal"

export const Experience = () => {
  return (
    <div className="flex p-5 md:w-[50%] flex flex-col gap-2">
      <h1>Review Robin</h1>
      <div className="flex flex-col justify-evenly">
        <div className="flex flex-col gap-2 w-[100%]">
          <div className="flex flex-col gap-5 p-5">
            <div className="flex flex-col gap-2">
              <h3> Software Engineer | March 2020 - present</h3>
              <p>Responsibility #1</p>
              <p>Responsibility #2</p>
              <p>Responsibility #3</p>
            </div>
            <div className="flex flex-col gap-2">
              <h3> Sample Second Position | March 2020 - present</h3>
              <p>Responsibility #1</p>
              <p>Responsibility #2</p>
              <p>Responsibility #3</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Skills = () => {
  return (
    <div className="flex m-5 p-5 md:w-[50%] flex flex-col gap-2">
      <h1>General</h1>
      <div className="flex flex-col justify-evenly">
        <div className="flex flex-col gap-2 w-[100%]">
          <div className="flex flex-col gap-5 p-5">
            <p>
              Javascript &nbsp;|&nbsp; HTML &nbsp;|&nbsp; CSS &nbsp;|&nbsp; Git
              &nbsp;|&nbsp; Github &nbsp;|&nbsp; Linux
            </p>
          </div>
        </div>
      </div>
      <h1>Backend</h1>
      <div className="flex flex-col justify-evenly">
        <div className="flex flex-col gap-2 w-[100%]">
          <div className="flex flex-col gap-5 p-5">
            <p>
              Node &nbsp;|&nbsp; Express &nbsp;|&nbsp; MongoDB &nbsp;|&nbsp;
              Mongoose &nbsp;|&nbsp; Postgres
            </p>
          </div>
        </div>
      </div>
      <h1>Frontend</h1>
      <div className="flex flex-col justify-evenly">
        <div className="flex flex-col gap-2 w-[100%]">
          <div className="flex flex-col gap-5 p-5">
            <p>
              React &nbsp;|&nbsp; NextJS &nbsp;|&nbsp; TailwindCSS &nbsp;|&nbsp;
              Redux
            </p>
          </div>
        </div>
      </div>
      <h1>Soft Skills</h1>
      <div className="flex flex-col justify-evenly">
        <div className="flex flex-col gap-2 w-[100%]">
          <div className="flex flex-col gap-5 p-5">
            <p>
              Communication &nbsp;|&nbsp; Curiousity &nbsp;|&nbsp; Team player
              &nbsp;|&nbsp; Tenacity &nbsp;|&nbsp; Empathy &nbsp;|&nbsp; Self
              management &nbsp;|&nbsp; Self motivation
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

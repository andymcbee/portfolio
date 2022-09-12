//border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal"

export const Project = ({ data }) => {
  console.log(data);
  return (
    <div className="flex m-5 p-5 md:w-[50%] flex flex-col gap-2">
      <h1>{data.title}</h1>
      <div className="flex flex-col justify-evenly">
        <div className="flex flex-col gap-2 w-[100%]">
          <div className="flex flex-col gap-5 p-5">
            <div className="flex flex-col gap-2">
              <h3> Overview</h3>

              <div className="flex flex-col gap-5">
                {data.overview.map((paragraph) => {
                  return <p>{paragraph}</p>;
                })}
              </div>
            </div>

            {false && (
              <div className="flex flex-col gap-2">
                <h3> Tech Stack</h3>
                <div className="flex flex-col gap-2">
                  <h4>Backend</h4>
                  <p>{data.techstackBackend}</p>

                  <h4>Frontend</h4>
                  <p>{data.techstackFrontend}</p>
                </div>
              </div>
            )}
            {data.featureHighlights && (
              <div className="flex flex-col gap-2">
                <h3> Feature Highlights</h3>

                <p>{data.featureHighlights}</p>
              </div>
            )}

            {data.blogPosts && (
              <div className="flex flex-col gap-2">
                <h3> Blog posts</h3>

                <p>Blog #1 - how I built this app</p>
              </div>
            )}
            <div className="flex gap-5">
              {data.githubLink && (
                <a
                  href={data.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Github
                  </button>
                </a>
              )}
              {data.liveLink && (
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Live demo
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

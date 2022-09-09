//border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal"

export const Project = () => {
  return (
    <div className="flex m-5 p-5 md:w-[50%] flex flex-col gap-2">
      <h1>Project Name</h1>
      <div className="flex flex-col justify-evenly">
        <div className="flex flex-col gap-2 w-[100%]">
          <div className="flex flex-col gap-5 p-5">
            <div className="flex flex-col gap-2">
              <h3> Overview</h3>
              <p>
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium voluptatum deleniti atque corrupti quos
                dolores et quas molestias excepturi sint occaecati cupiditate
                non provident, similique sunt in culpa qui officia deserunt
                mollitia animi, id est laborum et dolorum fuga.
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <h3> Tech Stack</h3>
              <div className="flex flex-col gap-2">
                <h4>Backend</h4>
                <p>
                  At vero eos et accusamus et iusto odio dignissimos ducimus qui
                  blanditiis praesentium voluptatum deleniti atque corrupti quos
                  dolores et quas molestias excepturi sint occaecati cupiditate
                  non provident, similique sunt in culpa qui officia deserunt
                  mollitia animi, id est laborum et dolorum fuga.
                </p>

                <h4>Frontend</h4>
                <p>
                  At vero eos et accusamus et iusto odio dignissimos ducimus qui
                  blanditiis praesentium voluptatum deleniti atque corrupti quos
                  dolores et quas molestias excepturi sint occaecati cupiditate
                  non provident, similique sunt in culpa qui officia deserunt
                  mollitia animi, id est laborum et dolorum fuga.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <h3> Feature Highlights</h3>

              <p>
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium voluptatum deleniti atque corrupti quos
                dolores et quas molestias excepturi sint occaecati cupiditate
                non provident, similique sunt in culpa qui officia deserunt
                mollitia animi, id est laborum et dolorum fuga.
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <h3> Blog posts</h3>

              <p>Blog #1 - how I built this app</p>
            </div>
            <div className="flex gap-5">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Github
              </button>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Live demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

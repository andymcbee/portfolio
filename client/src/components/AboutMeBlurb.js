//border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal"

export const AboutMeBlurb = () => {
  return (
    <div className="flex m-5 p-5 md:w-[50%] flex flex-col gap-2">
      <h1>About Andrew</h1>
      <div className="flex flex-col justify-evenly">
        <div className="flex flex-col gap-2 w-[100%]">
          <div className="flex flex-col gap-5 p-5">
            <p className="flex flex-col gap-2">
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium voluptatum deleniti atque corrupti quos
              dolores et quas molestias excepturi sint occaecati cupiditate non
              provident, similique sunt in culpa qui officia deserunt mollitia
              animi, id est laborum et dolorum fuga. Et harum quidem rerum
              facilis est et expedita distinctio. Nam libero tempore, cum soluta
              nobis est eligendi optio cumque nihil impedit quo minus id quod
              maxime placeat facere possimus, omnis voluptas assumenda est,
              omnis dolor repellendus.
            </p>
            <p className="flex flex-col gap-2">
              Temporibus autem quibusdam et aut officiis debitis aut rerum
              necessitatibus saepe eveniet ut et voluptates repudiandae sint et
              molestiae non recusandae. Itaque earum rerum hic tenetur a
              sapiente delectus, ut aut reiciendis voluptatibus maiores alias
              consequatur aut perferendis doloribus asperiores repellat.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

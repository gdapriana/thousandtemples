const PopularSearch = ({ destinations }) => {
  return (
    <div className="w-full flex justify-center border-y items-center">
      <div className="w-full max-w-7xl p-8 flex justify-center items-center">
        <div className="text-base lg:text-lg border-r px-4 text-neutral-600 font-bold">
          Popular Search
        </div>
        <div className="flex-1 rounded-full hide-scrollbar whitespace-nowrap mx-4 overflow-scroll">
          {destinations.map((item, idx) => {
            return <Button key={idx} data={item} />;
          })}
        </div>
      </div>
    </div>
  );
};

const Button = ({ data }) => {
  return (
    <a
      href=""
      className="inline-block hover:bg-indigo-400 hover:text-white text-sm lg:text-base text-neutral-600 bg-neutral-100 px-3 py-2 rounded-full mx-2"
    >
      {data.title}
    </a>
  );
};

export default PopularSearch;

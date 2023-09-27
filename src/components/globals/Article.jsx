import {
  CalendarDaysIcon,
  BookmarkIcon,
  MinusCircleIcon,
  EllipsisHorizontalIcon,
} from "@heroicons/react/24/outline";

const Article = ({ data, categories }) => {
  return (
    <article className="w-full flex justify-center items-center">
      <div className="w-full flex flex-col py-10 gap-16 lg:gap-0 lg:py-20 lg:flex-row-reverse lg:items-start max-w-7xl">
        {/*categories*/}
        <RecommendedTopic categories={categories} />
        {/*  article*/}
        <ForYou data={data} />
      </div>
    </article>
  );
};

const ForYou = ({ data }) => {
  return (
    <div className="lg:w-2/3 w-full lg:border-r flex justify-start items-center lg:items-start px-8 flex-col">
      <h1 className="text-indigo-400 font-bold text-lg xl:text-xl">For You</h1>
      <div className="w-full">
        {data.map((item, idx) => {
          return <ArticleCard key={idx} data={item} />;
        })}
      </div>
    </div>
  );
};

const RecommendedTopic = ({ categories }) => {
  return (
    <div className="flex flex-col justify-center lg:items-start w-full lg:w-1/3 px-8 items-center gap-6">
      <h1 className="text-indigo-400 font-bold text-lg lg:text-xl">
        Recommended Topics
      </h1>
      <div className="flex flex-wrap max-w-lg justify-center lg:justify-start gap-3 items-center">
        {categories.map((item, idx) => (
          <a
            href={`/`}
            key={idx}
            className="bg-neutral-200 hover:bg-indigo-400 hover:text-white text-neutral-600 py-2 px-4 rounded-full"
          >
            {item.title}
          </a>
        ))}
      </div>
    </div>
  );
};
const ArticleCard = ({ data }) => {
  return (
    <article className="w-full flex flex-col justify-center items-center border-b py-8">
      <header className="w-full gap-2 flex justify-start items-center">
        <div className="w-8 aspect-square bg-neutral-200 rounded-full"></div>
        <p className="text-neutral-600 text-sm lg:text-base">
          by{" "}
          <span className="font-bold text-indigo-400">
            {import.meta.env.VITE_APP}
          </span>
        </p>
        <CalendarDaysIcon className="w-4 lg:w-5" />
        <p className="text-sm lg:text-base text-neutral-600">5 January</p>
      </header>
      <main className="flex w-full gap-3 lg:gap-5 justify-stretch items-center">
        <div className="flex-1 h-full gap-1 flex flex-col justify-start items-center">
          <h1 className="text-lg lg:text-xl font-bold mt-2 text-neutral-600 cutoff-text cutoff-text-2 w-full">
            {data.title}
          </h1>
          <p className="w-full text-neutral-600 text-sm lg:text-base leading-5 cutoff-text cutoff-text-2">
            {data.description}
          </p>
        </div>
        <div
          className="w-24 aspect-square rounded-xl bg-cover"
          style={{
            backgroundImage: `url(https://source.unsplash.com/random/1920x1080/?${data.slug})`,
          }}
        ></div>
      </main>
      <footer className="w-full mt-2 flex justify-between items-center">
        <div className="flex justify-center items-center gap-2">
          <a
            href={`/`}
            className="bg-neutral-200 hover:bg-indigo-400 text-sm hover:text-white text-neutral-600 py-1 px-3 rounded-full"
          >
            Category
          </a>
          <span className="text-sm text-neutral-600">6 min read</span>
        </div>
        <div className="flex justify-center items-center gap-2">
          <BookmarkIcon className="w-5 text-neutral-600 cursor-pointer" />
          <MinusCircleIcon className="w-5 text-neutral-600 cursor-pointer" />
          <EllipsisHorizontalIcon className="w-5 text-neutral-600 cursor-pointer" />
        </div>
      </footer>
    </article>
  );
};

export default Article;

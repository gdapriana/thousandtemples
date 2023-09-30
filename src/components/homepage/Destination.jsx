import Title from "../globals/Title.jsx";
import "../../css/heroDestination.css";
import {
  MapPinIcon,
  EyeIcon,
  HandThumbUpIcon,
  BanknotesIcon,
} from "@heroicons/react/24/solid";

const metadata = {
  title: "Popular Destinations",
  subtitle:
    "Much places suits your mood, Explore somewhere interesting and enjoy the vibes",
};

const Destination = ({ destinations }) => {
  return (
    <div className="w-full flex justify-center items-center">
      <div className="w-full gap-8 max-w-7xl flex flex-col justify-center items-center p-12">
        <Title
          title={metadata.title}
          subtitle={metadata.subtitle}
          customClass={"flex flex-col justify-center items-center w-full"}
          subtitleClass={"text-center"}
        />
        <CardWrapper destinations={destinations} />
        <a
          className="w-full bg-indigo-400 sm:w-auto lg:text-lg lg:py-3 lg:px-4 text-center text-white font-bold py-2 px-3 rounded-full"
          href="/destinations"
        >
          Explore More Destinations
        </a>
      </div>
    </div>
  );
};

const CardWrapper = ({ destinations }) => {
  return (
    <div className="w-full gap-2 lg:gap-4 grid lg:grid-cols-2">
      <MainCard destinations={destinations} />
      {destinations.slice(1, 5).map((item, idx) => {
        return <MiniCard key={idx} destination={item} />;
      })}
    </div>
  );
};

const MainCard = ({ destinations }) => {
  return (
    <div
      className="rounded-3xl p-4 lg:p-8 flex justify-center items-end relative overflow-hidden bg-cover h-72 md:h-auto md:aspect-square md:row-span-4"
      style={{
        backgroundImage: `url(https://source.unsplash.com/random/1920x1080/?${destinations[0].slug})`,
      }}
    >
      <div className="z-20 w-full">
        <div className="w-full">
          <h1 className="text-xl lg:text-2xl my-2 text-white font-bold">
            {destinations[0].title}
          </h1>
          <div className="flex mb-3 justify-start gap-2 items-center">
            <a
              href=""
              className="bg-neutral-600 py-1 px-2 rounded-full text-white text-sm"
            >
              {destinations[0].category}
            </a>
            <div className="flex justify-center items-center">
              <MapPinIcon className="w-4 text-indigo-400" />
              <span className="text-indigo-400 text-sm">
                {destinations[0].location}
              </span>
            </div>
          </div>
          <p className="cutoff-text cutoff-text-2 text-white text-xs lg:text-base">
            {destinations[0].description}
          </p>
        </div>
        <div className="flex mt-5 justify-end gap-3 items-center">
          <div className="flex justify-center items-center gap-1">
            <BanknotesIcon className="w-4 text-indigo-400" />
            <span className="text-sm lg:text-base text-indigo-400">
              {destinations[0].price !== 0 ? destinations[0].price : "Free"}
            </span>
          </div>

          <div className="sm:flex hidden justify-center items-center gap-1">
            <EyeIcon className="w-4 text-indigo-400" />
            <span className="text-sm lg:text-base text-indigo-400">
              {destinations[0].viewCount}
            </span>
          </div>
          <div className="sm:flex hidden justify-center items-center gap-1">
            <HandThumbUpIcon className="w-4 text-indigo-400" />
            <span className="text-sm lg:text-base text-indigo-400">
              {destinations[0].likeCount}
            </span>
          </div>
          <a
            href=""
            className="text-white text-sm lg:text-lg bg-indigo-400 font-bold py-2 px-3 rounded-full"
          >
            Explore
          </a>
        </div>
      </div>
      <div className="blackGradient bottom-0 z-10 absolute w-full h-full"></div>
    </div>
  );
};
const MiniCard = ({ destination }) => {
  return (
    <div className="flex justify-center gap-4 rounded-xl overflow-hidden border p-2 lg:p-4 items-center">
      <div className="">
        <div
          className="aspect-square w-20 bg-cover rounded-lg"
          style={{
            backgroundImage: `url(https://source.unsplash.com/random/1920x1080/?${destination.slug})`,
          }}
        ></div>
      </div>
      <div className="flex-1 flex justify-center gap-2 items-start flex-col">
        <div className="flex flex-col w-full">
          <h1 className="text-base font-bold text-neutral-600">
            {destination.title}
          </h1>
          <p className="cutoff-text cutoff-text-1 text-sm text-neutral-400">
            {destination.description}
          </p>
        </div>
        <div className="flex gap-2 overflow-auto justify-between items-center w-full">
          <a
            href=""
            className="bg-neutral-300 cutoff-text cutoff-text-1  me-auto py-1 px-2 rounded-full text-white text-sm"
          >
            {destination.category}
          </a>
          <div className="sm:flex hidden justify-center items-center gap-1">
            <BanknotesIcon className="w-4 text-indigo-400" />
            <span className="text-xs lg:text-sm text-indigo-400">
              {destination.price !== 0 ? destination.price : "Free"}
            </span>
          </div>

          <div className="sm:flex hidden justify-center items-center gap-1">
            <EyeIcon className="w-4 text-indigo-400" />
            <span className="text-xs lg:text-sm text-indigo-400">
              {destination.viewCount}
            </span>
          </div>
          <div className="sm:flex hidden justify-center items-center gap-1">
            <HandThumbUpIcon className="w-4 text-indigo-400" />
            <span className="text-xs lg:text-sm text-indigo-400">
              {destination.likeCount}
            </span>
          </div>
          <a
            href=""
            className="bg-indigo-400 rounded-full text-white text-sm font-bold py-1 px-2"
          >
            Explore
          </a>
        </div>
      </div>
    </div>
  );
};
export default Destination;

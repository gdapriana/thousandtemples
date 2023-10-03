import Title from "../globals/Title.jsx";
import "../../css/heroDestination.css";
import {
  MapPinIcon,
  EyeIcon,
  HandThumbUpIcon,
  BanknotesIcon,
} from "@heroicons/react/24/solid";
import Button from "../globals/Button.jsx";

const metadata = {
  title: "Popular Destinations",
  subtitle:
    "Much places suits your mood, Explore somewhere interesting and enjoy the vibes",
};

const Destination = ({ destinations }) => {
  return (
    <div className="w-full flex justify-center bg-white dark:bg-neutral-950 items-center">
      <div className="w-full gap-8 max-w-7xl flex flex-col justify-center items-center p-12">
        <Title
          title={metadata.title}
          subtitle={metadata.subtitle}
          titleClass={"dark:text-indigo-400"}
          customClass={"flex flex-col justify-center items-center w-full"}
          subtitleClass={"text-center"}
        />
        <CardWrapper destinations={destinations} />
        <Button text={"Explore more Destinations"} path={"/destinations"} />
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
      className="rounded-[40px] p-4 lg:p-[28px] flex justify-center items-end relative overflow-hidden bg-cover h-72 md:h-auto md:aspect-square md:row-span-4"
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
            <span className="text-sm font-sans font-bold lg:text-base text-indigo-400">
              {destinations[0].price !== 0
                ? `Rp. ${destinations[0].price},00`
                : "Free"}
            </span>
          </div>

          <div className="sm:flex hidden justify-center items-center gap-1">
            <EyeIcon className="w-4 text-indigo-400" />
            <span className="text-sm lg:text-base font-sans font-bold text-indigo-400">
              {destinations[0].viewCount}
            </span>
          </div>
          <div className="sm:flex hidden justify-center items-center gap-1">
            <HandThumbUpIcon className="w-4 text-indigo-400" />
            <span className="text-sm lg:text-base text-indigo-400 font-sans font-bold">
              {destinations[0].likeCount}
            </span>
          </div>
          <a
            href=""
            className="text-white text-sm lg:text-lg bg-indigo-400 font-bold py-2 px-4 ml-2 rounded-[12px]"
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
    <div
      style={{
        backgroundImage: `url('https://source.unsplash.com/random/1920x1080/?${destination.slug}')`,
      }}
      className="flex justify-center gap-4 rounded-[20px] lg:rounded-[28px] overflow-hidden items-center bg-cover bg-center"
    >
      <div className="h-full flex flex-col justify-center items-center gap-4 w-full bg-neutral-900 lg:p-[20px] p-[12px] bg-opacity-70">
        <div className="w-full">
          <h1 className="text-sm lg:text-lg font-bold text-white">
            {destination.title}
          </h1>
          <p className="text-xs cutoff-text lg:text-sm cutoff-text-2 text-neutral-400">
            {destination.description}
          </p>
        </div>
        <div className="w-full flex justify-between items-center">
          <span className="text-indigo-400 font-sans text-xs lg:text-base flex gap-1 font-bold">
            <BanknotesIcon className="w-3" />
            {destination.price > 0 ? `Rp. ${destination.price},00` : "Free"}
          </span>
          <a
            href=""
            className="text-sm lg:text-base font-bold text-white bg-indigo-400 py-1 px-2 rounded-[8px]"
          >
            Explore
          </a>
        </div>
      </div>
    </div>
  );
};
export default Destination;

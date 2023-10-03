import Title from "../globals/Title.jsx";
import Button from "../globals/Button.jsx";
import { useState } from "react";
import "../../css/heroActivity.css";

const metadata = {
  title: "Thing to do in Bali",
  subTitle:
    "Find your perfect Balinese experience: Whether you're looking for adventure, relaxation, or culture, Bali has something to offer everyone.",
};

const Activity = ({ activities }) => {
  return (
    <div className="w-full dark:bg-neutral-950 py-20 flex justify-center items-center">
      <div className="w-full lg:h-[500px] gap-8 max-w-7xl p-8 flex flex-col lg:flex-row">
        <div className="flex lg:w-1/3 flex-col gap-8 justify-center items-start">
          <Title
            title={metadata.title}
            subtitle={metadata.subTitle}
            subtitleClass={"max-w-sm"}
          />
          <Button text={"Explore more Activities"} path={"/activities"} />
        </div>
        <div className="lg:w-2/3">
          <ActivityCardMobile activities={activities} />
          <ActivityCardDesktop activities={activities} />
        </div>
      </div>
    </div>
  );
};

const ActivityCardMobile = ({ activities }) => {
  return (
    <div className="md:hidden rounded-xl hide-scrollbar w-full whitespace-nowrap overflow-auto">
      {activities.slice(0, 4).map((item, idx) => {
        return (
          <div
            key={idx}
            style={{
              backgroundImage: `url(https://source.unsplash.com/random/1920x1080/?${item.slug})`,
            }}
            className="w-44 inline-flex bg-cover overflow-hidden bg-center aspect-[2/3] mr-2 rounded-xl bg-red-400"
          >
            <div className="w-full p-4 h-full bg-black bg-opacity-40 flex gap-2 justify-end items-center flex-col">
              <h1 className="text-white font-bold text-base">{item.title}</h1>
              <a
                href=""
                className="text-sm text-white font-bold bg-indigo-400 py-1 px-2 rounded-full"
              >
                Explore
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
};

const ActivityCardDesktop = ({ activities }) => {
  const [activeCard, setActiveCard] = useState(activities[0]);
  const [cursorInside, setCursorInside] = useState(false);
  return (
    <div
      className="hidden w-full lg:h-full md:h-[500px] gap-2 md:flex justify-center items-center"
      onMouseEnter={() => {
        setCursorInside(true);
      }}
      onMouseLeave={() => {
        setCursorInside(false);
      }}
    >
      {activities.slice(0, 4).map((item, idx) => {
        return (
          <div
            key={idx}
            className={`h-full bg-blue-300 rounded-xl w-1/4 bg-center overflow-hidden bg-cover ${
              activeCard === item && !cursorInside
                ? "w-[500px]"
                : "hover:w-[500px]"
            }`}
            onMouseEnter={() => setActiveCard(activities[idx])}
            style={{
              backgroundImage: `url(https://source.unsplash.com/random/1920x1080/?${item.slug})`,
            }}
          >
            <div
              className={`w-full h-full bg-neutral-800 bg-opacity-70 overflow-hidden flex p-8 justify-end items-center flex-col  ${
                activeCard !== item ? "opacity-0" : "opacity-100"
              }`}
            >
              <h1 className="text-2xl font-bold text-white">{item.title}</h1>
              <p className="cutoff-text cutoff-text-2 text-white text-base text-center">
                {item.description}
              </p>
              <a
                href=""
                className="text-base mt-8 text-white bg-indigo-400 font-bold py-1 px-3 rounded-full"
              >
                Explore
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Activity;

import { useRef, useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

const Slider = ({ data }) => {
  const mostViewData = data
    .sort((a, b) => b.viewCount - a.viewCount)
    .slice(0, 5);

  const [activeSlide, setActiveSlide] = useState(mostViewData[0]);

  const cardContainerRef = useRef(null);
  const handleScrollOnClick = (direction) => {
    const container = cardContainerRef.current;
    if (container) {
      const scrollAmount = 300;
      const currentScrollLeft = container.scrollLeft;

      if (direction === "left") {
        container.scrollTo({
          left: currentScrollLeft - scrollAmount,
          behavior: "smooth",
        });
      } else if (direction === "right") {
        container.scrollTo({
          left: currentScrollLeft + scrollAmount,
          behavior: "smooth",
        });
      }
    }
  };

  return (
    <main className="w-full p-4 h-[648px]">
      <div
        className="w-full flex justify-center bg-cover bg-center items-end lg:items-center lg:justify-end h-full rounded-xl"
        style={{
          backgroundImage: `url(https://source.unsplash.com/random/1920x1080/?${activeSlide.slug})`,
        }}
      >
        <div className="flex w-full lg:w-1/2 justify-center m-4 items-center gap-2">
          <ChevronLeftIcon
            onClick={() => handleScrollOnClick("left")}
            className="w-5 text-white"
          />
          <div
            ref={cardContainerRef}
            className="flex-1 overflow-x-scroll rounded-xl whitespace-nowrap"
          >
            {mostViewData.map((item) => (
              <Card key={item._id} data={item} setSlide={setActiveSlide} />
            ))}
          </div>
          <ChevronRightIcon
            onClick={() => handleScrollOnClick("right")}
            className="w-5 text-white"
          />
        </div>
      </div>
    </main>
  );
};

const Card = ({ data, setSlide }) => {
  return (
    <article
      className="h-48 lg:h-72 inline-block w-36 lg:w-56 rounded-xl bg-white m-1"
      onClick={() => setSlide(data)}
    >
      <p className="text-neutral-600">{data.title}</p>
    </article>
  );
};

export default Slider;

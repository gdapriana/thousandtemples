import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import "../../css/slider.css";
import instagramIcon from "../../assets/images/instagram.png";
import whatsappIcon from "../../assets/images/whatsapp.png";
import twitterIcon from "../../assets/images/twitter.png";
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
        className="w-full relative overflow-hidden flex flex-col lg:flex-row justify-center xl:justify-center xl:items-center bg-cover bg-center items-end lg:items-center lg:justify-end h-full rounded-xl"
        style={{
          backgroundImage: `url(https://source.unsplash.com/random/1920x1080/?${activeSlide.slug})`,
        }}
      >
        <SocialSection />
        <HeroWrapper activeSlide={activeSlide} />
        {/*prettier-ignore*/}
        <CardWrapper handleScrollOnClick={handleScrollOnClick} cardContainerRef={cardContainerRef} mostViewData={mostViewData} setActiveSlide={setActiveSlide} />
        <div className="absolute bg-black bg-opacity-50 z-10 w-full h-full"></div>
      </div>
    </main>
  );
};
const HeroWrapper = ({ activeSlide }) => {
  return (
    <div className="flex-1 z-20 xl:max-w-3xl lg:items-start lg:h-full w-full flex flex-col justify-center items-center">
      <motion.h1 initial={{y: 50, opacity: 0}} animate={{y: 0, opacity: 1, transition:{duration: .8, ease: "circOut", delay: 1.2}}} className="text-3xl removeTransition drop-shadow-2xl max-w-lg m-4 text-center font-bold text-white">
        {activeSlide.title}
      </motion.h1>
      <motion.p initial={{y: 50, opacity: 0}} animate={{y: 0, opacity: 1, transition:{duration: .8, ease: "circOut", delay: 1.2}}} className="cutoff-text cutoff-text-2 lg:text-left mx-4 text-center text-white removeTransition">
        {activeSlide.description}
      </motion.p>
      <a
        href=""
        className="m-8 removeTransition overflow-hidden whitespace-nowrap lg:mx-4 text-base font-bold bg-indigo-400 text-white py-4 px-8 rounded-full"
      >
        <motion.span initial={{y: 40, opacity: 0}} animate={{y: 0, opacity: 1, transition: {duration: .8, ease: "circOut", delay: 1.5}}} className="inline-block removeTransition">Explore Now</motion.span>
      </a>
    </div>
  );
};
const CardWrapper = ({
  handleScrollOnClick,
  cardContainerRef,
  mostViewData,
  setActiveSlide,
}) => {
  return (
    <div className="flex w-full z-20 xl:max-w-3xl lg:w-1/2 justify-center m-4 items-center gap-2">
      <ChevronLeftIcon
        onClick={() => handleScrollOnClick("left")}
        className="w-5 text-white"
      />
      <div
        ref={cardContainerRef}
        className="flex-1 hide-scrollbar overflow-x-scroll rounded-3xl whitespace-nowrap"
      >
        {mostViewData.map((item, idx) => (
          <Card key={idx} data={item} setSlide={setActiveSlide} />
        ))}
      </div>
      <ChevronRightIcon
        onClick={() => handleScrollOnClick("right")}
        className="w-5 text-white"
      />
    </div>
  );
};
const Card = ({ data, setSlide }) => {
  return (
    <article
      className="h-48 lg:h-72 p-2 inline-flex flex-col justify-center items-center w-36 lg:w-56 rounded-3xl bg-white m-2 drop-shadow-lg"
      onClick={() => setSlide(data)}
    >
      <div
        className="flex-grow w-full bg-cover bg-center rounded-2xl"
        style={{
          backgroundImage: `url(https://source.unsplash.com/random/1920x1080/?${data.slug})`,
        }}
      ></div>
      <div className="flex flex-col w-full justify-center items-center cutoff-text cutoff-text-1">
        <h3 className="text-lg m-2 font-bold text-center text-neutral-600">
          {data.title}
        </h3>
      </div>
    </article>
  );
};
const SocialSection = () => {
  return (
    <div className="hidden lg:flex h-full gap-4 w-40 flex-col justify-center items-center z-20">
      <motion.div initial={{y: -250, opacity: 0}} animate={{y: 0, opacity: 1, transition: {duration: 1, ease: "circOut"}}} className="flex-1 removeTransition border rounded-full"></motion.div>
      <motion.a initial={{x: -100, opacity: 0}} animate={{x:0, opacity: 1, transition: {duration: 1, ease: "circOut", delay: 0.5}}} className="removeTransition" href="">
        <img src={instagramIcon} width={28} alt="" />
      </motion.a>
      <motion.a initial={{x: -100, opacity: 0}} animate={{x:0, opacity: 1, transition: {duration: 1, ease: "circOut", delay: 0.8}}} className="removeTransition" href="">
        <img src={whatsappIcon} width={28} alt="" />
      </motion.a>
      <motion.a initial={{x: -100, opacity: 0}} animate={{x:0, opacity: 1, transition: {duration: 1, ease: "circOut", delay: 1.1}}} className="removeTransition" href="">
        <img src={twitterIcon} width={28} alt="" />
      </motion.a>
      <motion.div initial={{y: 250, opacity: 0}} animate={{y: 0, opacity: 1, transition: {duration: 1, ease: "circOut"}}} className="flex-1 removeTransition border rounded-full"></motion.div>
    </div>
  );
};
export default Slider;

import {
  RocketLaunchIcon,
  Square2StackIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import mesh from "../../assets/images/mesh.png";
import temple from "../../assets/images/temple.png";
import { motion } from "framer-motion"

const metadata = {
  header: `Let's Enjoy Your Desired Trip in Bali With`,
  subHeader:
    '"Man cannot discover new oceans unless he has the courage to lose sight of the shore"',
};

const Hero = () => {
  return (
    <main className="h-[700px] overflow-hidden w-full flex justify-center items-center">
      <div
        className="w-full h-full lg:flex justify-center items-center px-12 pt-20 bg-cover max-w-7xl"
        style={{ backgroundImage: `url(${mesh})` }}
      >
        <div className="w-full lg:w-2/3 gap-2 h-full flex justify-center items-center flex-col">
          <header className="w-full">
            <motion.h1
              initial={{opacity: 0, y: -100}}
              animate={{opacity: 1, y: 0, transition:{ease: "circOut", duration: 1 }}}
              id="headerHero"
              className="text-neutral-600 hero-header-text removeTransition leading-10 lg:text-4xl my-4 font-bold text-2xl"
            >
              {metadata.header}{" "}
              <span className="text-indigo-400">
                {import.meta.env.VITE_APP}
              </span>
              <RocketLaunchIcon className="w-5 lg:w-8 mx-2 inline text-indigo-400" />
            </motion.h1>
          </header>
          <motion.article
            initial={{opacity: 0, y: -50}}
            animate={{opacity: 1, y: 0, transition:{ease: "circOut", duration: 1, delay: 0.3 }}}
            className="flex w-full gap-4 removeTransition">
            <Square2StackIcon className="w-8 lg:w-5 text-indigo-400" />
            <p className="text-neutral-500 lg:text-lg max-w-md italic text-sm">
              {metadata.subHeader}
            </p>
          </motion.article>
          <footer className="w-full">
            <form
              action=""
              className="bg-indigo-400 my-20 lg:my-10 max-w-md w-full gap-4 rounded-full p-2 flex justify-center items-center"
            >
              <div className="w-8 flex justify-center items-center aspect-square">
                <MagnifyingGlassIcon className="w-5 text-white" />
              </div>
              <div className="flex-1">
                <input
                  type="text"
                  className="bg-transparent placeholder-indigo-200 flex-1 w-full text-sm text-white focus:outline-none active:outline-none"
                  placeholder="Search anything..."
                />
              </div>
              <div className="w-20">
                <button className="text-indigo-400 font-bold bg-white rounded-full w-full py-2 px-3">
                  Search
                </button>
              </div>
            </form>
          </footer>
        </div>
        <div className="hidden lg:w-1/3 justify-start h-full lg:flex">
          <motion.img src={temple} className="" alt="" />
        </div>
      </div>
    </main>
  );
};

export default Hero;

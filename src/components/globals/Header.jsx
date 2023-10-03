import {
  MoonIcon,
  ChevronDownIcon,
  MagnifyingGlassIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const Header = ({ navigations }) => {
  const [showMobileOption, setShowMobileOption] = useState(false);
  const [yScroll, setYScroll] = useState(0)
  let getUrl = window.location.pathname.substring(1)
  let path = getUrl.charAt(0).toUpperCase() + getUrl.slice(1)

  if (window.location.pathname === "/") path = "Home"

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setYScroll(scrollY);
    });
  }, []);

  return (
    <motion.header
      initial={{y: -70}}
      animate={{y: 0, transition:{ease: "circOut", duration: 1, delay: 1 }}}
      className={`w-full removeTransition z-[999] ${
        yScroll > 0 ? "bg-white dark:bg-neutral-950 border-b dark:border-neutral-800" : ""
      } fixed flex justify-center items-center`}
    >
      <nav className="w-full h-20 z-40 p-4 flex justify-between items-center">
        <div className="flex justify-center items-center gap-2">
          <a
            href="/"
            className="text-indigo-400 pr-2 text-base md:text-lg lg:text-xl font-bold"
          >
            {import.meta.env.VITE_APP}
          </a>
          <div className="border-l dark:border-neutral-800 px-3">
            {showMobileOption ? (
              <XMarkIcon
                className="w-5 md:hidden"
                onClick={() => setShowMobileOption(!showMobileOption)}
              />
            ) : (
              <ChevronDownIcon
                className="w-5 md:hidden"
                onClick={() => setShowMobileOption(!showMobileOption)}
              />
            )}

            <ul className="hidden md:flex gap-2">
              {navigations.map((item, idx) => {
                return (
                  <li key={idx}>
                    <a
                      href={item.path}
                      className={`${path === item.name ? "text-indigo-400 font-bold" : "text-neutral-600"} text-sm lg:text-base hover:font-semibold hover:text-indigo-400`}
                    >
                      {item.name}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="flex justify-center items-center gap-4">
          <div className="hidden lg:flex p-1 border rounded-full dark:border-neutral-800">
            <MagnifyingGlassIcon className="w-4 mx-1 dark:text-neutral-200" />
            <input
              type="text"
              className="active:outline-none bg-transparent px-2 text-sm w-32 focus:outline-none outline-0"
            />
          </div>
          <MagnifyingGlassIcon className="w-5 text-neutral-600 lg:hidden dark:text-neutral-200" />
          <MoonIcon className="w-5 dark:text-neutral-200" />
          <a href="" className="text-white bg-indigo-400 py-1 px-3 rounded-full">Login</a>
        </div>
      </nav>
      <nav
        className={`absolute rounded-b-3xl z-30 w-full flex justify-center items-center ${
          showMobileOption ? "top-20" : "top-[-200px]"
        }  md:hidden bg-indigo-400`}
      >
        <ul className="flex flex-col justify-center items-center p-8 gap-2">
          {navigations.map((item, idx) => {
            return (
              <li key={idx}>
                <a className={`text-sm text-white`} href={item.path}>
                  {item.name}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </motion.header>
  );
};

export default Header;

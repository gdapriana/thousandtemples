import {
  MoonIcon,
  ChevronDownIcon,
  MagnifyingGlassIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { useEffect, useRef, useState } from "react";

const Header = ({ navigations }) => {
  const myElementRef = useRef(null);
  const [showMobileOption, setShowMobileOption] = useState(false);
  const [yScroll, setYScroll] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setYScroll(scrollY);
    });
  }, []);

  return (
    <header
      className={`w-full z-50 ${
        yScroll > 0 ? "bg-white border-b" : ""
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
          <div className="border-l px-3">
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
                      className="text-sm text-neutral-600 lg:text-base hover:font-semibold hover:text-indigo-400"
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
          <div className="hidden lg:flex p-1 border rounded-full">
            <MagnifyingGlassIcon className="w-4 mx-1" />
            <input
              type="text"
              className="active:outline-none px-2 text-sm w-32 focus:outline-none outline-0"
            />
          </div>
          <MagnifyingGlassIcon className="w-5 lg:hidden" />
          <MoonIcon className="w-5" />
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
                <a className="text-sm text-white" href={item.path}>
                  {item.name}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};

export default Header;

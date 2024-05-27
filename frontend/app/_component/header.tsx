"use client";
import React from "react";
import { Dot, HomeIcon, Luggage, Map } from "lucide-react";
import { Brand } from "@/app/_component/brand";
import { routesProps } from "@/lib/types";
import { Hamburger } from "@/app/_component/hamburger";
import { Navigations } from "@/app/_component/navigations";
import { Separator } from "@/components/ui/separator";
import { Search } from "@/app/_component/search";
import { DarkModeToggle } from "@/app/_component/dark-mode-toggle";

export const routes: routesProps[] = [
  { name: "Home", route: "/", icon: HomeIcon },
  { name: "Destinations", route: "/destinations", icon: Map },
  { name: "Activities", route: "/activities", icon: Luggage },
];

export const Header = () => {
  return (
    <header id="__header-root" className="">
      <div id="__header-wrapper" className="max-w-6xl flex gap-2 justify-between items-center w-full p-4">
        <Brand className={{ text: "text-xl" }} />
        <Dot className="w-8 h-8 text-primary hidden lg:block" />
        <Navigations routes={routes} className="mr-auto hidden lg:flex" />
        <Search variant="header" />
        <DarkModeToggle />
        <Hamburger routes={routes} />
      </div>
    </header>
  );
};

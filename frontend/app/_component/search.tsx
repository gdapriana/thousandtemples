"use client";

import { SearchIcon } from "lucide-react";
import { iconClass } from "@/lib/utils";

export const Search = () => {
  return (
    <div className="justify-center ms-auto w-[200px] hidden md:flex items-center p-2 rounded-lg bg-secondary gap-1">
      <SearchIcon className={iconClass} />
      <input
        type="text"
        placeholder="search.."
        className="bg-transparent w-full text-sm text-muted-foreground outline-0"
      />
    </div>
  );
};

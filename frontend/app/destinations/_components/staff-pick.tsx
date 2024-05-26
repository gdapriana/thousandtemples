"use client";
import {destinationProps} from "@/lib/types";
import { Header } from "@/app/activities/_components/header";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Bookmark, CircleMinus } from "lucide-react";
import { iconClass } from "@/lib/utils";

export const StaffPick = ({ destinations }: { destinations: destinationProps[] }) => {
  return (
    <main className="hidden gap-4 lg:flex flex-col justify-start items-stretch">
      <Header text="Staff Pick" />
      <div className="flex flex-col justify-start items-stretch">
        {destinations?.slice(0, 4).map((destination: destinationProps) => {
          return (
            <Link
              href={`/activities/${destination.slug}`}
              key={destination.id}
              className="p-4 hover:bg-muted group transition-all rounded-lg border-b flex justify-center items-center gap-2"
            >
              <div className="flex-1 basis-0">
                <h3 className="line-clamp-1 group-hover:font-bold">{destination.name}</h3>
              </div>
              <div className="flex justify-center items-center">
                <Button variant="ghost" className="text-muted-foreground" size="icon">
                  <Bookmark className={iconClass} />
                </Button>
                <Button variant="ghost" className="text-muted-foreground" size="icon">
                  <CircleMinus className={iconClass} />
                </Button>
              </div>
            </Link>
          );
        })}
      </div>
    </main>
  );
};

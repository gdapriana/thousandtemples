"use client";
import { activityProps } from "@/lib/types";
import { Header } from "@/app/activities/_components/header";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Bookmark, CircleMinus } from "lucide-react";
import { iconClass } from "@/lib/utils";

export const StaffPick = ({ activities }: { activities: activityProps[] }) => {
  return (
    <main className="hidden gap-4 lg:flex flex-col justify-start items-stretch">
      <Header text="Staff Pick" />
      <div className="flex flex-col justify-start items-stretch">
        {activities?.slice(0, 4).map((activity: activityProps) => {
          return (
            <Link
              href={`/activities/${activity.slug}`}
              key={activity.id}
              className="p-4 hover:bg-muted group transition-all rounded-lg border-b flex justify-center items-center gap-2"
            >
              <div className="flex-1 basis-0">
                <h3 className="line-clamp-1 group-hover:font-bold">{activity.name}</h3>
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

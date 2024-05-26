"use client";
import { activityProps } from "@/lib/types";
import { useState } from "react";
import { cn, iconClass } from "@/lib/utils";
import { MapIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Image from "next/image";

export const PopularActivitiy = ({ activities }: { activities?: activityProps[] }) => {
  const [active, setActive] = useState<number>(0);
  return (
    <main className="w-full mt-24 flex justify-center items-center">
      <div className="w-full p-4 md:gap-8 max-w-6xl flex flex-col md:flex-row">
        <header className="flex w-full md:w-1/3 flex-col justify-center items-center md:items-start">
          <h1 className="text-primary font-bold text-xl">Popular Activities</h1>
          <p className="font-medium text-center lg:text-start text-muted-foreground">
            Find your perfect Balinese experience: Whether you're looking for adventure, relaxation, or culture, Bali
            has something to offer everyone.
          </p>
        </header>

        {/* mobile */}
        <div className="md:hidden w-full mt-8">
          <Accordion type="single" collapsible className="w-full">
            {activities?.slice(0, 3).map((activity: activityProps, index: number) => {
              return (
                <AccordionItem value={`item-${index + 1}`}>
                  <AccordionTrigger className="flex gap-2 flex-col items-start  text-primary font-bold">
                    <h1 className="text-start">{activity?.name}</h1>
                  </AccordionTrigger>
                  <AccordionContent className="flex justify-start items-stretch">
                    <div className="flex flex-col justify-start items-stretch gap-4">
                      <Image
                        src={activity?.cover || "/images/no-image.png"}
                        alt={"cover"}
                        width={1000}
                        height={1000}
                        className="aspect-video rounded-lg object-cover object-center w-full"
                      />
                      <p className="text-muted-foreground line-clamp-2">
                        <MapIcon className={cn("inline-block me-2", iconClass)} />
                        {activity?.address}
                      </p>
                      <Button asChild>
                        <Link href={`/activities/${activity.slug}`}>Detail</Link>
                      </Button>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>

        {/* desktop */}
        <div className="hidden gap-2 flex-1 w-1/3 basis-0 md:flex">
          {activities?.slice(0, 3).map((activity: activityProps, index: number) => {
            return (
              <article
                onMouseEnter={() => setActive(index)}
                style={{ backgroundImage: `url("${activity.cover}")` }}
                className={cn(
                  `h-[400px] overflow-hidden rounded-lg bg-cover bg-center transition-all ease-in-out duration-500 flex justify-stretch items-end border`,
                  index === active ? "w-2/4" : "w-1/4",
                )}
                key={activity.id}
              >
                {active === index && (
                  <div className="bg-muted w-full p-4 flex flex-col gap-2 justify-start items-stretch">
                    <h1 className="text-primary font-bold">{activity.name}</h1>
                    <p className="text-muted-foreground line-clamp-2">
                      <MapIcon className={cn("inline-block me-2", iconClass)} />
                      {activity.address}
                    </p>
                    <Button asChild>
                      <Link href={`/activities/${activity.slug}`}>Detail</Link>
                    </Button>
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </main>
  );
};

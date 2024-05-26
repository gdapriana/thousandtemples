"use client";
import { activityProps, destinationProps } from "@/lib/types";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Image from "next/image";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa6";

export const Slider = ({ activities }: { activities: activityProps[] }) => {
  const [active, setActive] = useState<number>(1);
  const activeActivities = activities.slice(0, 4);

  return (
    <main className="w-full h-full p-4">
      <div
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)),
    url("${activeActivities[active].cover}")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        className="w-full transition-all flex py-24 md:py-0 justify-center rounded-lg items-center"
      >
        <div className="w-full max-w-6xl lg:h-[648px] flex flex-col justify-start items-stretch gap-8 md:flex-row md:justify-start md:items-center">
          <div className="justify-center me-12 h-full gap-2 items-center hidden xl:flex flex-col">
            <div className="flex-1 border border-white"></div>
            <FaInstagram className="w-6 h-6 text-white" />
            <FaFacebook className="w-6 h-6 text-white" />
            <FaTwitter className="w-6 h-6 text-white" />
            <div className="flex-1 border border-white"></div>
          </div>
          <div className="md:flex-1 p-4 flex justify-center items-center md:justify-start md:basis-0">
            <div className="flex flex-col justify-center items-center md:items-start gap-2">
              <h1 className="md:text-3xl text-xl font-bold text-center md:text-start text-white">
                {activeActivities[active]?.name}
              </h1>
              <p className="text-muted md:w-3/4 dark:text-muted-foreground text-center md:text-start line-clamp-3">
                {activeActivities[active]?.description}
              </p>
              <Button size="lg" className="mt-4 font-bold" asChild>
                <Link href={`/activities/${activeActivities[active]?.slug}`}>Explore Now</Link>
              </Button>
            </div>
          </div>
          <div className="md:flex-1 md:basis-0 rounded-xl p-12">
            <Carousel opts={{ loop: true, align: "start" }}>
              <CarouselContent>
                {activeActivities?.map((activity: activityProps, index: number) => {
                  return (
                    <CarouselItem key={index} onClick={() => setActive(index)} className="basis-1/2">
                      <div className="p-1 cursor-pointer">
                        <div className="border p-1 bg-muted gap-2 flex flex-col justify-start items-stretch overflow-hidden rounded-2xl">
                          <Image
                            src={activity?.cover || "/images/no-image.png"}
                            alt={"cover"}
                            width={1000}
                            height={1000}
                            className="aspect-[9/10] object-cover object-center rounded-xl"
                          />
                          <h1 className="text-center line-clamp-1 text-sm md:text-base font-bold text-muted-foreground">
                            {activity?.name}
                          </h1>
                        </div>
                      </div>
                    </CarouselItem>
                  );
                })}
              </CarouselContent>
              <CarouselNext />
              <CarouselPrevious />
            </Carousel>
          </div>
        </div>
      </div>
    </main>
  );
};

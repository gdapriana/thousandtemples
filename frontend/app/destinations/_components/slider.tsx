'use client'
import {destinationProps} from "@/lib/types";
import {useState} from "react";
import {Button} from "@/components/ui/button";
import Link from "next/link";
import {Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious} from "@/components/ui/carousel";
import Image from "next/image";
import {Facebook, Instagram} from "lucide-react";
import {iconClass} from "@/lib/utils";

export const Slider = ({ destinations }: {destinations: destinationProps[]}) => {
  const [active, setActive] = useState<number>(1)
  const activeDestinations = destinations.slice(0, 4);

  return (
    <main className="w-full h-full p-4">
      <div style={{backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)),
    url("${activeDestinations[active].cover}")`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}} className="w-full transition-all flex py-24 md:py-0 justify-center rounded-lg items-center">
        <div className="w-full max-w-6xl flex flex-col justify-start items-stretch gap-8 md:flex-row md:justify-start md:items-center">
          <div className="h-full justify-center gap-2 items-center hidden md:flex flex-col">
            <div className="flex-1 border"></div>
            <Instagram className='text-muted' />
            <Facebook className='text-muted' />
            <div className="flex-1 border"></div>
          </div>
          <div className="md:flex-1 p-4 flex justify-center items-center md:justify-start md:basis-0">
            <div className="flex flex-col justify-center items-center md:items-start gap-2">
              <h1 className="md:text-3xl text-xl font-bold text-primary">{activeDestinations[active]?.name}</h1>
              <p className="text-muted md:w-3/4 dark:text-muted-foreground text-center md:text-start line-clamp-3">{activeDestinations[active]?.description}</p>
              <Button size="lg" className="mt-4 font-bold" asChild>
                <Link href={`/destinations/${activeDestinations[active]?.slug}`}>
                  Explore Now
                </Link>
              </Button>
            </div>
          </div>
          <div className="md:flex-1 md:basis-0 rounded-xl p-12">
            <Carousel opts={{loop: true, align: 'start'}}>
              <CarouselContent>
                {activeDestinations?.map((destination: destinationProps, index: number) => {
                  return (
                    <CarouselItem key={index} onClick={() => setActive(index)} className="basis-1/2">
                      <div className="p-1 cursor-pointer">
                        <div className="border p-1 bg-muted gap-2 flex flex-col justify-start items-stretch overflow-hidden rounded-2xl">
                          <Image src={destination?.cover || '/images/no-image.png'} alt={'cover'} width={1000} height={1000} className="aspect-[9/10] object-cover object-center rounded-xl"  />
                          <h1 className='text-center text-sm md:text-base font-bold text-muted-foreground'>{destination?.name}</h1>
                        </div>
                      </div>
                    </CarouselItem>
                  )
                })}
              </CarouselContent>
              <CarouselNext />
              <CarouselPrevious />
            </Carousel>
          </div>
        </div>
      </div>
    </main>
  )
}
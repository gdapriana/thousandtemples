"use client"
import {destinationProps} from "@/lib/types";
import Link from "next/link";
import Image from "next/image";
import {Badge} from "@/components/ui/badge";
import {Layers2, Map, MapIcon, Pin} from "lucide-react";
import {cn, iconClass} from "@/lib/utils";

export const PopularDestination = ({ destinations } : { destinations: destinationProps[] }) => {
  return (
    <main className="w-full flex mt-24 justify-center items-center">
      <div className="w-full flex py-20 flex-col justify-center items-stretch max-w-6xl p-4 gap-8">
        <header className="flex flex-col justify-center items-center">
          <h1 className="text-primary font-bold text-xl">Popular Destinations</h1>
          <p className="font-medium text-muted-foreground">Much places suits your mood, Explore somewhere interesting and enjoy the vibes</p>
        </header>
        <div className="grid gap-4 grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
          {destinations?.slice(0, 4).map((destination: destinationProps) => {
            return (
              <Link href={`/destinations/${destination.slug}`} key={destination.id} className="border flex flex-col justify-start items-stretch shadow-sm rounded-lg overflow-hidden">
                <Image src={destination?.cover || "https://ideas.or.id/wp-content/themes/consultix/images/no-image-found-360x250.png"} alt="cover" width={1000} height={1000} className="w-full aspect-video object-cover" />
                <div className="p-4 gap-2 flex flex-col justify-start items-stretch">
                  <h1 className="font-bold text-primary">{destination?.name}</h1>
                  <p className="line-clamp-2 text-muted-foreground text-sm">{destination?.description}</p>
                  <p className="text-muted-foreground line-clamp-2"><MapIcon
                    className={cn("inline-block me-2", iconClass)}/>{destination?.address}</p>
                  <div className="flex text-primary justify-start items-center gap-2"><Pin className="w-4 h-4"/><p
                    className="line-clamp-1 font-bold text-sm">{destination?.district?.name}</p>
                  </div>
                  <Badge variant="outline" className="flex ms-auto justify-center items-center gap-1">
                    <Layers2 className={iconClass}/>
                    {destination?.category?.name}
                  </Badge>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </main>
  )
}
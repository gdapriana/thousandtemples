import { Header } from "@/app/activities/_components/header";
import {activityProps, destinationProps} from "@/lib/types";
import Link from "next/link";
import {Bookmark, Calendar, CircleMinus, MapPin, Wallet} from "lucide-react";
import {cn, iconClass} from "@/lib/utils";
import moment from "moment";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export const ForYou = ({ destinations }: { destinations: destinationProps[] }) => {
  return (
    <main className="flex flex-col gap-4 justify-start items-stretch">
      <Header text="For You" className="text-lg" />
      <div className="flex justify-start gap-8 flex-col items-stretch">
        {destinations?.slice(0, 4).map((destination: destinationProps) => {
          return (
            <article
              key={destination.id}
              className="flex border-b py-4 flex-col gap-4 justify-start items-stretch"
            >
              <div className="flex justify-start gap-1 items-center">
                <Image src="/images/logo.png" alt="logo" width={1000} height={1000} className="aspect-square w-8" /> by{" "}
                <span className="font-bold text-primary"> thousandtemples</span> <Calendar className={iconClass} />{" "}
                {moment(destination.createdAt).fromNow()}
              </div>
              <div className="flex gap-2 justify-center items-start">
                <div className="flex-1 basis-0">
                  <h1 className="lg:text-lg font-bold line-clamp-2">{destination.name}</h1>
                  <p className="text-muted-foreground text-sm lg:text-base line-clamp-2">{destination.description}</p>
                  <p className="mt-2 flex justify-start items-center"><MapPin className={cn('inline-block', iconClass)} /><span className="line-clamp-1">{destination.address}</span></p>
                </div>
                <Image
                  src={destination.cover || "/images/no-image.png"}
                  alt="cover"
                  width={1000}
                  height={1000}
                  className="aspect-square w-24 object-cover"
                />
              </div>
              <div className="flex justify-between gap-2 items-center">
                <Badge>{destination?.district?.name}</Badge>
                <p className="text-muted-foreground me-auto">5 minutes read</p>
                <div className="flex justify-center gap-2 items-center">
                  <p className="flex justify-center items-center text-muted-foreground"><Wallet
                    className={cn('inline-block me-1', iconClass)}/>{destination.price === 0 ? "free entry" : `Rp. ${destination.price}`}
                  </p>
                  <Button variant="ghost" className="text-muted-foreground" size="icon">
                    <Bookmark className={iconClass}/>
                  </Button>
                  <Button variant="ghost" className="text-muted-foreground" size="icon">
                    <CircleMinus className={iconClass}/>
                  </Button>
                  <Button asChild>
                    <Link href={`/destinations/${destination.slug}`}>
                      Detail
                    </Link>
                  </Button>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </main>
  );
};

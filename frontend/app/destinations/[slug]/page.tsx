import axios from "axios";
import {redirect} from "next/navigation";
import {categoryProps, destinationProps} from "@/lib/types";
import Image from "next/image";
import {Bookmark, CircleMinus, MapIcon, MapPin, Wallet} from "lucide-react";
import {cn, iconClass} from "@/lib/utils";
import {Button} from "@/components/ui/button";
import {Separator} from "@/components/ui/separator";
import {StaffPick} from "@/app/destinations/_components/staff-pick";
import {Category} from "@/app/destinations/_components/category";
import {Map} from "@/app/destinations/_component/map";

const getDestination = async (slug: string) => {
  try {
    const response =  await axios.get(`${process.env.NEXT_PUBLIC_SERVER_LINK}/destinations/${slug}`)
    return response.data.data
  } catch (e) {
    redirect('/destinations')
  }
}

const getDestinations = async () => {
  const response = await axios.get(`${process.env.NEXT_PUBLIC_SERVER_LINK}/destinations`);
  return response.data.data;
};

const getCategories = async () => {
  const response = await axios.get(`${process.env.NEXT_PUBLIC_SERVER_LINK}/categories`);
  return response.data.data;
};

export default async function DestinationPage({ params }: {params: { slug: string }}) {
  const destination: destinationProps = await getDestination(params.slug);
  const destinations: destinationProps[] = await getDestinations();
  const categories: categoryProps[] = await getCategories();

  return (
    <main className="w-full flex justify-center items-center">
      <div className="w-full max-w-6xl p-4 flex flex-col justify-start items-stretch gap-8">
        <Image src={destination?.cover || '/images/no-image.png'} alt="logo"
               className="aspect-video rounded-xl object-cover object-center" width={1920} height={1080}/>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-[1fr_.4fr]">
          <div className="flex-1 flex justify-start items-stretch gap-4 flex-col basis-0">
            <h1 className="font-bold text-primary md:text-lg lg:text-xl">{destination?.name}</h1>
            <p className="text-muted-foreground">{destination?.description}</p>
            <p className="font-semibold"><MapIcon className={cn('inline-block me-1', iconClass)}/>{destination?.address}
            </p>
            <div className="flex justify-between items-center gap-2">
              <div className="flex justify-center items-center gap-4">
                <Button variant="secondary" className="gap-1"><MapPin className={iconClass}/>{destination?.district?.name}</Button>
                <Button variant="secondary" className="gap-1"><Wallet className={iconClass}/>{destination?.price === 0 ? "Free Entry" : `Rp. ${destination?.price}`}</Button>
              </div>
              <div className="flex justify-center items-center">
                <Button variant="ghost" className="text-muted-foreground" size="icon">
                  <Bookmark className={iconClass}/>
                </Button>
                <Button variant="ghost" className="text-muted-foreground" size="icon">
                  <CircleMinus className={iconClass}/>
                </Button>
              </div>
            </div>
            <Separator/>
            <div className="w-full aspect-video">
              <Map destination={destination} />
            </div>
          </div>
          <div className="hidden lg:flex gap-8 flex-col justify-start items-stretch">
            <Category categories={categories} />
            <StaffPick destinations={destinations} />
          </div>
        </div>
      </div>
    </main>
  )
}
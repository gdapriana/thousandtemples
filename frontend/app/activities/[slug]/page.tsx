import axios from "axios";
import {redirect} from "next/navigation";
import {activityProps} from "@/lib/types";
import Image from "next/image";
import {Separator} from "@/components/ui/separator";
import {Districts} from "@/app/activities/_components/districts";
import {StaffPick} from "@/app/activities/_components/staff-pick";
import {Bookmark, CircleMinus, MapIcon, MapPin} from "lucide-react";
import {cn, iconClass} from "@/lib/utils";
import {Button} from "@/components/ui/button";

const getActivity = async (slug: string) => {
  try {
    const response =  await axios.get(`${process.env.NEXT_PUBLIC_SERVER_LINK}/activities/${slug}`)
    return response.data.data
  } catch (e) {
    redirect('/activities')
  }
}

const getActivities = async () => {
  const response = await axios.get(`${process.env.NEXT_PUBLIC_SERVER_LINK}/activities`);
  return response.data.data;
};

const getDistricts = async () => {
  const response = await axios.get(`${process.env.NEXT_PUBLIC_SERVER_LINK}/districts`);
  return response.data.data;
};

export default async function ActivityPage({ params }: {params: {slug: string}}) {
  const activity: activityProps = await getActivity(params.slug);
  const activities = await getActivities();
  const districts = await getDistricts();

  return (
    <main className="w-full flex justify-center items-center">
      <div className="w-full max-w-6xl p-4 flex flex-col justify-start items-stretch gap-8">
        <Image src={activity?.cover || '/images/no-image.png'} alt="logo" className="aspect-video rounded-xl object-cover object-center" width={1920} height={1080} />
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-[1fr_.4fr]">
          <div className="flex-1 flex justify-start items-stretch gap-4 flex-col basis-0">
            <h1 className="font-bold text-primary md:text-lg lg:text-xl">{activity?.name}</h1>
            <p className="text-muted-foreground">{activity?.description}</p>
            <p className="font-semibold"><MapIcon className={cn('inline-block me-1', iconClass)} />{activity?.address}</p>
            <div className="flex justify-between items-center gap-2">
              <Button className="gap-1"><MapPin className={iconClass}/>{activity?.district?.name}</Button>
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
            <div className="prose dark:prose-invert prose-h1:text-xl"
                 dangerouslySetInnerHTML={{__html: activity?.body}}></div>
          </div>
          <div className="hidden lg:flex gap-8 flex-col justify-start items-stretch">
            <Districts districts={districts}/>
            <StaffPick activities={activities}/>
          </div>
        </div>
      </div>
    </main>
  )
}
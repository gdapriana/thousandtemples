import axios from "axios";
import { Slider } from "@/app/activities/_components/slider";
import { Districts } from "@/app/activities/_components/districts";
import { StaffPick } from "@/app/activities/_components/staff-pick";
import { ForYou } from "@/app/activities/_components/for-you";

const getActivities = async () => {
  const response = await axios.get(`${process.env.NEXT_PUBLIC_SERVER_LINK}/activities`);
  return response.data.data;
};

const getDistricts = async () => {
  const response = await axios.get(`${process.env.NEXT_PUBLIC_SERVER_LINK}/districts`);
  return response.data.data;
};

export default async function ActivitiesPage() {
  const activities = await getActivities();
  const districts = await getDistricts();

  return (
    <main className="w-full flex flex-col justify-start items-stretch">
      <Slider activities={activities} />
      <div className="w-full flex justify-center items-center">
        <div className="w-full p-4 max-w-6xl gap-8 grid grid-rows-[auto_auto] grid-cols-1 lg:grid-cols-[1fr_.4fr] lg:grid-rows-1">
          <div className="flex flex-col justify-start items-stretch">
            <ForYou activities={activities} />
          </div>
          <div className="order-first flex gap-8 flex-col justify-start items-stretch lg:order-last">
            <Districts districts={districts} />
            <StaffPick activities={activities} />
          </div>
        </div>
      </div>
    </main>
  );
}

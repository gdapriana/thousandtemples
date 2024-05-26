import axios from "axios";
import { Slider } from "@/app/destinations/_components/slider";
import {ForYou} from "@/app/destinations/_components/for-you";
import {Category} from "@/app/destinations/_components/category";
import {StaffPick} from "@/app/destinations/_components/staff-pick";

const getDestinations = async () => {
  const response = await axios.get(`${process.env.NEXT_PUBLIC_SERVER_LINK}/destinations`);
  return response.data.data;
};

const getCategories = async () => {
  const response = await axios.get(`${process.env.NEXT_PUBLIC_SERVER_LINK}/categories`);
  return response.data.data;
}

export default async function DestinationsPage() {
  const destinations = await getDestinations();
  const categories = await getCategories();

  return (
    <main className="w-full flex flex-col justify-start items-stretch">
      <Slider destinations={destinations}/>
      <div className="w-full flex justify-center items-center">
        <div
          className="w-full p-4 max-w-6xl gap-8 grid grid-rows-[auto_auto] grid-cols-1 lg:grid-cols-[1fr_.4fr] lg:grid-rows-1">
          <div className="flex flex-col justify-start items-stretch">
            <ForYou destinations={destinations}/>
          </div>
          <div className="order-first flex gap-8 flex-col justify-start items-stretch lg:order-last">
            <Category categories={categories} />
            <StaffPick destinations={destinations}/>
          </div>
        </div>
      </div>
    </main>
  );
}

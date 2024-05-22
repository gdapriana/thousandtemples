import {Hero} from "@/app/_component/hero";
import {PopularSearch} from "@/app/_component/popular-search";
import {PopularDestination} from "@/app/_component/popular-destination";
import axios from "axios";
import {PopularActivitiy} from "@/app/_component/popular-activitiy";
import {Map} from "@/app/_component/map";

const getDestinations = async () => {
  const response = await axios.get(`${process.env.NEXT_PUBLIC_SERVER_LINK}/destinations`)
  return response.data.data
}

const getActivities = async () => {
  const response = await axios.get(`${process.env.NEXT_PUBLIC_SERVER_LINK}/activities`)
  return response.data.data
}

export default async function Home() {
  const destinations = await getDestinations()
  const activities = await getActivities()

  return (
    <main className="w-full flex flex-col justify-start items-stretch">
      <Hero />
      <PopularSearch destinations={destinations} />
      <PopularDestination destinations={destinations} />
      <PopularActivitiy activities={activities} />
      <Map destinations={destinations} />
    </main>
  )
}

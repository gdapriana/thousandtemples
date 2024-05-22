import axios from "axios";
import {Slider} from "@/app/destinations/_components/slider";

const getDestinations = async () => {
  const response = await axios.get(`${process.env.NEXT_PUBLIC_SERVER_LINK}/destinations`)
  return response.data.data
}

export default async function DestinationsPage() {
  const destinations = await getDestinations();
  return (
    <main className="w-full flex flex-col justify-start items-stretch">
      <Slider destinations={destinations} />
    </main>
  )
}
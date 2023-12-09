import Jumbotron from "@/components/homepage/Jumbotron";
import NearestDestinations from "@/components/homepage/NearestDestinations";

export default function Home() {
	return (
    <div className='w-full h-screen bg-white'>
      <Jumbotron />
      <NearestDestinations />
    </div>
  )
}

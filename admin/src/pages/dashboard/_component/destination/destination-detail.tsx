import {Dispatch, SetStateAction, useEffect, useState} from "react";
import axios from "axios";
import {Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger} from "@/components/ui/dialog.tsx";
import {Button} from "@/components/ui/button.tsx";
import {EyeIcon} from "lucide-react";
import {Badge} from "@/components/ui/badge.tsx";
import moment from "moment";

const getDestination = async (slug: string, setLoading: Dispatch<SetStateAction<boolean>>, setDestination: Dispatch<SetStateAction<any>>) => {
  setLoading(true);
  await axios.get(`${import.meta.env.VITE_SERVER_LINK}/destinations/${slug}`)
    .then((res) => {
      setLoading(false);
      setDestination(res.data.data);
    })
    .catch((err) => {
      console.log(err)
    })
}

export default function DestinationDetail({ slug }: {slug: string}) {
  const [loading, setLoading] =  useState<boolean>(false);
  const [destination, setDestination] = useState<any>({});

  useEffect(() => {
    getDestination(slug, setLoading, setDestination).then();
  }, []);

  if(loading) return <div>Loading...</div>
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="sm" className="gap-1"><EyeIcon className="w-4 h-4" />Detail</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Destination Detail</DialogTitle>
        </DialogHeader>
        {destination?.cover && (
          <img src={destination?.cover} alt="cover" className='w-full mb-4 rounded-xl aspect-video object-cover'/>
        )}
        <div className="grid gap-4 grid-cols-[auto_1fr] h-[400px] overflow-auto">
          <h4 className="text-muted-foreground text-sm border-b p-2">Name</h4>
          <p className="font-bold border-b p-2">{destination?.name}</p>
          <h4 className="text-muted-foreground text-sm border-b p-2">Description</h4>
          <p className="text-sm border-b p-2">{destination?.description}</p>
          <h4 className="text-muted-foreground text-sm border-b p-2">Address</h4>
          <p className="text-sm border-b p-2">{destination?.address}</p>
          <h4 className="text-muted-foreground text-sm border-b p-2">category</h4>
          <div className="border-b p-2">
            <Badge>{destination?.category?.name}</Badge>
          </div>
          <h4 className="text-muted-foreground text-sm border-b p-2">District</h4>
          <div className="border-b p-2">
            <Badge>{destination?.district?.name}</Badge>
          </div>
          <h4 className="text-muted-foreground text-sm border-b p-2">Price</h4>
          <p className="text-sm border-b p-2">Rp. {destination?.price}</p>
          <h4 className="text-muted-foreground text-sm border-b p-2">Coordinate</h4>
          <p className="text-sm border-b p-2">{destination?.latitude}, {destination?.longitude}</p>
          <h4 className="text-muted-foreground text-sm border-b p-2">Created</h4>
          <p className="text-sm border-b p-2">{moment(destination?.createdAt).fromNow()}</p>
          <h4 className="text-muted-foreground text-sm border-b p-2">Updated</h4>
          <p className="text-sm border-b p-2">{moment(destination?.updatedAt).fromNow()}</p>
        </div>
      </DialogContent>
    </Dialog>
  )
}
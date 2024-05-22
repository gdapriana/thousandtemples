import {Dispatch, SetStateAction, useEffect, useState} from "react";
import axios from "axios";
import {Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger} from "@/components/ui/dialog.tsx";
import {Button} from "@/components/ui/button.tsx";
import {EyeIcon} from "lucide-react";
import {Badge} from "@/components/ui/badge.tsx";
import moment from "moment";

const getActivity = async (slug: string, setLoading: Dispatch<SetStateAction<boolean>>, setActivity: Dispatch<SetStateAction<any>>) => {
  setLoading(true);
  await axios.get(`${import.meta.env.VITE_SERVER_LINK}/activities/${slug}`)
    .then((res) => {
      setLoading(false);
      setActivity(res.data.data);
    })
    .catch((err) => {
      console.log(err)
    })
}

export default function ActivityDetail({ slug }: {slug: string}) {
  const [loading, setLoading] =  useState<boolean>(false);
  const [activity, setActivity] = useState<any>({});

  useEffect(() => {
    getActivity(slug, setLoading, setActivity).then();
  }, []);

  if(loading) return <div>Loading...</div>
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="sm" className="gap-1"><EyeIcon className="w-4 h-4" />Detail</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Activity Detail</DialogTitle>
        </DialogHeader>
        {activity?.cover && (
          <img src={activity?.cover} alt="cover" className='w-full mb-4 rounded-xl aspect-video object-cover'/>
        )}
        <div className="grid gap-4 grid-cols-[auto_1fr] h-[400px] overflow-auto">
          <h4 className="text-muted-foreground text-sm border-b p-2">Name</h4>
          <p className="font-bold border-b p-2">{activity?.name}</p>
          <h4 className="text-muted-foreground text-sm border-b p-2">Description</h4>
          <p className="text-sm border-b p-2">{activity?.description}</p>
          <h4 className="text-muted-foreground text-sm border-b p-2">Body</h4>
          <div className="prose prose-sm h-[200px] p-2 overflow-auto border-b"
               dangerouslySetInnerHTML={{__html: activity?.body}}></div>
          <h4 className="text-muted-foreground text-sm border-b p-2">Address</h4>
          <p className="text-sm border-b p-2">{activity?.address}</p>
          <h4 className="text-muted-foreground text-sm border-b p-2">District</h4>
          <div className="border-b p-2">
            <Badge>{activity?.district?.name}</Badge>
          </div>
          <h4 className="text-muted-foreground text-sm border-b p-2">Created</h4>
          <p className="text-sm border-b p-2">{moment(activity?.createdAt).fromNow()}</p>
          <h4 className="text-muted-foreground text-sm border-b p-2">Updated</h4>
          <p className="text-sm border-b p-2">{moment(activity?.updatedAt).fromNow()}</p>
        </div>
      </DialogContent>
    </Dialog>
  )
}
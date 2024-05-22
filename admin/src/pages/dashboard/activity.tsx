import {Button} from "@/components/ui/button.tsx";
import {Link, useSearchParams} from "react-router-dom";
import {Input} from "@/components/ui/input.tsx";
import {Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table.tsx";
import {Dispatch, SetStateAction, useEffect, useState} from "react";
import axios from "axios";
import ActivityDetail from "@/pages/dashboard/_component/activity/activity-detail.tsx";
import ActivityCreate from "@/pages/dashboard/_component/activity/activity-create.tsx";
import ActivityDelete from "@/pages/dashboard/_component/activity/activity-delete.tsx";
import ActivityUpdate from "@/pages/dashboard/_component/activity/activity-update.tsx";

const getActivities = async (query: string | null, setLoading: Dispatch<SetStateAction<boolean>>, setActivities: Dispatch<SetStateAction<any>>) => {
  const search = query === null ? "activities" : `activities?name=${query}`
  setLoading(true);
  await axios.get(`${import.meta.env.VITE_SERVER_LINK}/${search}`)
    .then((res) => {
      setActivities(res.data.data);
      setLoading(false)
    })
    .catch((err) => {
      console.log(err)
    })
}

export default function Activity() {
  const [loading, setLoading] = useState<boolean>(false)
  const [activities, setActivities] = useState<any>()
  const [searchParams] = useSearchParams();

  useEffect(() => {
    getActivities(searchParams.get('name'), setLoading, setActivities).then();
  }, []);

  if (loading) return <div>Loading...</div>

  return (
    <>
      <div className="w-full my-4 flex justify-between items-center">
        <Button asChild><Link to="/">Back</Link></Button>
        <div className="flex flex-wrap justify-end items-center gap-2">
          <form method="get">
            <Input type="text" name="name" placeholder="search" />
          </form>
          <ActivityCreate />
        </div>
      </div>
      <Table className="w-full">
        <TableCaption>A list of your destinations.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>No</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Description</TableHead>
            <TableHead>Address</TableHead>
            <TableHead>District</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {activities?.map((activity: any, index: number) => {
            return (
              <TableRow key={activity?.id}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>
                  <span className="line-clamp-3">
                    {activity?.name}
                  </span>
                </TableCell>
                <TableCell>
                  <span className="line-clamp-3">
                    {activity?.description}
                  </span>
                </TableCell>
                <TableCell>
                  <span className="line-clamp-3">
                    {activity?.address}
                  </span>
                </TableCell>
                <TableCell>{activity?.district?.name}</TableCell>
                <TableCell className="flex justify-center items-center gap-1">
                  <ActivityDetail slug={activity?.slug} />
                  <ActivityUpdate slug={activity?.slug} />
                  <ActivityDelete slug={activity?.slug} />
                </TableCell>
              </TableRow>
            )
          })}
        </TableBody>
      </Table>
    </>
  )
}
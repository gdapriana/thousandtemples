import {Button} from "@/components/ui/button.tsx";
import {Link, useNavigate, useSearchParams} from "react-router-dom";
import {Input} from "@/components/ui/input.tsx";
import {Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table.tsx";
import {Dispatch, SetStateAction, useEffect, useState} from "react";
import axios from "axios";
import DestinationCreate from "@/pages/dashboard/_component/destination/destination-create.tsx";
import DestinationDetail from "@/pages/dashboard/_component/destination/destination-detail.tsx";
import DestinationDelete from "@/pages/dashboard/_component/destination/destination-delete.tsx";
import DestinationUpdate from "@/pages/dashboard/_component/destination/destination-update.tsx";

const getDestinations = async (query: string | null, setLoading: Dispatch<SetStateAction<boolean>>, setDestinations: Dispatch<SetStateAction<any>>) => {
  const search = query === null ? "destinations" : `destinations?name=${query}`
  setLoading(true)
  await axios.get(`${import.meta.env.VITE_SERVER_LINK}/${search}`)
    .then((res) => {
      setDestinations(res.data.data);
      setLoading(false);
    })
    .catch((err) => {
      console.log(err)
    })
}

export default function Destination() {
  const token = localStorage.getItem('token');
  const navigate = useNavigate();
  const [loading, setLoading] = useState<boolean>(false);
  const [destinations, setDestinations] = useState<any>();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    if (token === null) navigate('/login');
    getDestinations(searchParams.get('name'), setLoading, setDestinations).then();
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
          <DestinationCreate />
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
            <TableHead>Category</TableHead>
            <TableHead>District</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {
            destinations?.map((destination: any, index: number) => {
              return (
                <TableRow key={destination?.id}>
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>
                    <span className="line-clamp-3 font-medium">
                      {destination?.name}
                    </span>
                  </TableCell>
                  <TableCell>
                    <span className="line-clamp-3">
                      {destination?.description}
                    </span>
                  </TableCell>
                  <TableCell>
                    <span className="line-clamp-3">
                      {destination?.address}
                    </span>
                  </TableCell>
                  <TableCell>{destination?.category?.name}</TableCell>
                  <TableCell>{destination?.district?.name}</TableCell>
                  <TableCell className="flex justify-center items-center gap-1">
                    <DestinationDetail slug={destination?.slug} />
                    <DestinationUpdate slug={destination?.slug} />
                    <DestinationDelete slug={destination?.slug} />
                  </TableCell>
                </TableRow>
              )
            })
          }
        </TableBody>
      </Table>
    </>
  )
}
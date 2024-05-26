import {Dispatch, SetStateAction, useEffect, useState} from "react";
import axios from "axios";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {Button} from "@/components/ui/button.tsx";
import {Link, useSearchParams} from "react-router-dom";
import {Input} from "@/components/ui/input.tsx";
import AddDistrict from "@/pages/dashboard/_component/district/add-district.tsx";
import DeleteDistrict from "@/pages/dashboard/_component/district/delete-district.tsx";
import UpdateDistrict from "@/pages/dashboard/_component/district/update-district.tsx";


const getDistricts = async (query: string | null, setLoading: Dispatch<SetStateAction<boolean>> ,setDistricts: Dispatch<SetStateAction<object[]>>) => {
  const search = query === null ? "districts" : `districts?name=${query}`
  setLoading(true);
  await axios.get(`${import.meta.env.VITE_SERVER_LINK}/${search}`)
    .then((res) => {
      setDistricts(res.data.data);
      setLoading(false);
    })
    .catch((err) => {
      console.log(err);
    })
}

export default function District() {
  const [districts, setDistricts] = useState<object[]>([])
  const [loading, setLoading] = useState<boolean>(false)
  const [searchParams] = useSearchParams();

  useEffect(() => {
    getDistricts(searchParams.get('name'), setLoading, setDistricts).then()
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
          <AddDistrict />
        </div>
      </div>
      <Table className="w-full">
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>No</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Description</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {districts.map((district: any, index: number) => {
            return (
              <TableRow key={district?.id}>
                <TableCell>{index + 1}</TableCell>
                <TableCell className="font-medium">{district?.name}</TableCell>
                <TableCell><span className="line-clamp-1">{district?.description}</span></TableCell>
                <TableCell className="flex gap-2">
                  <UpdateDistrict slug={district?.slug} />
                  <DeleteDistrict slug={district?.slug} />
                </TableCell>
              </TableRow>
            )
          })}
        </TableBody>
      </Table>
    </>
  )
}
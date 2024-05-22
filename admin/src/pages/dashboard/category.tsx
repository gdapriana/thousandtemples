import {Dispatch, SetStateAction, useEffect, useState} from "react";
import {Link, useSearchParams} from "react-router-dom";
import {Button} from "@/components/ui/button.tsx";
import {Input} from "@/components/ui/input.tsx";
import {Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table.tsx";
import axios from "axios";
import UpdateCategory from "@/pages/dashboard/_component/category/update-category.tsx";
import DeleteCategory from "@/pages/dashboard/_component/category/delete-category.tsx";
import AddCategory from "@/pages/dashboard/_component/category/add-category.tsx";

const getCategories = async (query: string | null, setLoading: Dispatch<SetStateAction<boolean>>, setCategories: Dispatch<SetStateAction<object[]>>) => {
  const search = query === null ? "categories" : `categories?name=${query}`
  setLoading(true);
  await axios.get(`${import.meta.env.VITE_SERVER_LINK}/${search}`)
    .then((res) => {
      setCategories(res.data.data);
      setLoading(false);
    })
    .catch((err) => {
      console.log(err);
    })
}

export default function Category() {
  const [categories, setCategories] = useState<object[]>([])
  const [loading, setLoading] = useState<boolean>(false)
  const [searchParams] = useSearchParams();

  useEffect(() => {
    getCategories(searchParams.get('name'), setLoading, setCategories).then()
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
          <AddCategory />
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
          {categories.map((category: any, index: number) => {
            return (
              <TableRow key={category?.id}>
                <TableCell>{index + 1}</TableCell>
                <TableCell className="font-medium">{category?.name}</TableCell>
                <TableCell><span className="line-clamp-1">{category?.description}</span></TableCell>
                <TableCell className="flex gap-2">
                  <UpdateCategory slug={category?.slug} />
                  <DeleteCategory slug={category?.slug} />
                </TableCell>
              </TableRow>
            )
          })}
        </TableBody>
      </Table>
    </>
  )
}
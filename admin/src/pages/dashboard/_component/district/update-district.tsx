import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "@/components/ui/dialog.tsx";
import {Button} from "@/components/ui/button.tsx";
import {Dispatch, SetStateAction, useEffect, useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import {Label} from "@/components/ui/label.tsx";
import {Input} from "@/components/ui/input.tsx";
import {Textarea} from "@/components/ui/textarea.tsx";
import {toast} from "sonner";

const getDistrict = async (slug: string, setLoading: Dispatch<SetStateAction<boolean>>, setDistrict: Dispatch<SetStateAction<object>>) => {
  setLoading(true);
  await axios.get(`${import.meta.env.VITE_SERVER_LINK}/districts/${slug}`)
    .then((res) => {
      setDistrict(res.data.data);
      setLoading(false);
    })
    .catch((err) => {
      console.log(err)
    })
}

export default function UpdateDistrict({ slug }: {slug: string}) {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');
  const [loading, setLoading] = useState<boolean>(false)
  const [district, setDistrict] = useState<any>()

  useEffect(() => {
    if(token === null) navigate('/login');
    getDistrict(slug, setLoading, setDistrict).then();
  }, [navigate]);

  const formSubmitHandle = async (e: any) => {
    e.preventDefault();
    const data = {
      name: e.target.name.value,
      cover: e.target.cover.value === "" ? undefined : e.target.cover.value,
      description: e.target.description.value
    };
    await axios.patch(`${import.meta.env.VITE_SERVER_LINK}/admin/districts/${slug}`, data, {
      headers: {
        Authorization: `bearer ${token}`
      }
    })
      .then(() => {
        location.reload();
      }).catch((err) => {
        toast.error(err.response.data.errors)
      })
  }

  if (loading) return <div>loading....</div>
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Update</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Update {district?.name}</DialogTitle>
        </DialogHeader>

        <form onSubmit={formSubmitHandle} className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="input-name" className="text-right">
              Name
            </Label>
            <Input
              id="input-name"
              name="name"
              defaultValue={district?.name}
              className="col-span-3"
              placeholder="Name here..."
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="cover-input" className="text-right">
              Cover
            </Label>
            <Input
              id="cover-input"
              name="cover"
              defaultValue={district?.cover}
              className="col-span-3"
              placeholder="Cover here..."
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="input-description" className="text-right">
              Description
            </Label>
            <Textarea defaultValue={district?.description} className="col-span-3" name="description" id="input-description"
                      placeholder="Description here..."/>
          </div>
          <DialogFooter>
            <Button type="submit">Update</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
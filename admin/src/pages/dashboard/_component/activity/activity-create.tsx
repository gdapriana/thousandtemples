import {Dialog, DialogContent, DialogTitle, DialogTrigger} from "@/components/ui/dialog.tsx";
import {Button} from "@/components/ui/button.tsx";
import {Dispatch, SetStateAction, useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {Input} from "@/components/ui/input.tsx";
import {Textarea} from "@/components/ui/textarea.tsx";
import {Label} from "@/components/ui/label.tsx";
import Tiptap from "@/components/Tiptap.tsx";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select.tsx";
import axios from "axios";
import {toast} from "sonner";

const getDistricts = async (setLoading: Dispatch<SetStateAction<boolean>>, setDistricts: Dispatch<SetStateAction<any>>) => {
  setLoading(true)
  await axios.get(`${import.meta.env.VITE_SERVER_LINK}/districts`)
    .then((res) => {
      setDistricts(res.data.data);
      setLoading(false)
    })
    .catch((err) => {
      console.log(err)
    })
}

export default function ActivityCreate() {
  const token = localStorage.getItem('token');
  const navigate = useNavigate();
  const [loading, setLoading] = useState<boolean>(false);
  const [districts, setDistricts] = useState<any>();
  const [body, setBody] = useState<string | null>()

  useEffect(() => {
    if (token === null) navigate('/login');
    getDistricts(setLoading, setDistricts).then();
  }, []);

  const submitHandle = async (e:any) => {
    e.preventDefault();
    const data = {
      name: e.target.name.value,
      description: e.target.description.value,
      address: e.target.address.value,
      districtSlug: e.target.districtSlug.value === "" ? undefined : e.target.districtSlug.value,
      cover: e.target.cover.value === "" ? undefined : e.target.cover.value,
      body
    }

    await axios.post(`${import.meta.env.VITE_SERVER_LINK}/admin/activities`, data, {
      headers: {
        Authorization: `bearer ${token}`
      }
    })
      .then(() => {
        location.reload()
      })
      .catch((err) => {
        toast(err.response.data.errors)
      })
  }

  if (loading) return <div>Loading...</div>

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Create Activity</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogTitle>Create Activity</DialogTitle>
        <form onSubmit={submitHandle} className="grid gap-4 grid-cols-[auto_1fr]">
          <Label htmlFor="name-input" className="text-sm">Name</Label>
          <Input id="name-input" name="name" placeholder="Activity name..."/>
          <Label htmlFor="description-input" className="text-sm">Description</Label>
          <Textarea id="description-input" name="description" placeholder="Activity description..."/>
          <Label htmlFor="description-input" className="text-sm">Body</Label>
          <Tiptap setBody={setBody} />
          <Label htmlFor="address-input" className="text-sm">Address</Label>
          <Input id="address-input" name="address" placeholder="Address..."/>
          <Label htmlFor="district-input" className="text-sm">District</Label>
          <Select name="districtSlug">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select district" />
            </SelectTrigger>
            <SelectContent>
              {districts?.map((district: any) => {
                return (
                  <SelectItem key={district?.id} value={district?.slug}>{district?.name}</SelectItem>
                )
              })}
            </SelectContent>
          </Select>
          <Label htmlFor="cover-input" className="text-sm">Cover</Label>
          <Input id="cover-input" name="cover" placeholder="Cover..."/>
          <Button className="col-span-2">Create</Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}
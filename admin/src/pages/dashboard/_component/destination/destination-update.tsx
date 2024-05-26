import {Dialog, DialogContent, DialogTitle, DialogTrigger} from "@/components/ui/dialog.tsx";
import {Button} from "@/components/ui/button.tsx";
import {Label} from "@/components/ui/label.tsx";
import {Input} from "@/components/ui/input.tsx";
import {Textarea} from "@/components/ui/textarea.tsx";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select.tsx";
import {Dispatch, SetStateAction, useEffect, useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import {toast} from "sonner";
import {Pen} from "lucide-react";

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

const getCategories = async (setLoading: Dispatch<SetStateAction<boolean>>, setCategories: Dispatch<SetStateAction<any>>) => {
  setLoading(true)
  await axios.get(`${import.meta.env.VITE_SERVER_LINK}/categories`)
    .then((res) => {
      setCategories(res.data.data);
      setLoading(false)
    })
    .catch((err) => {
      console.log(err)
    })
}

const getDestination = async (slug: string, setLoading: Dispatch<SetStateAction<boolean>>, setDestination: Dispatch<SetStateAction<any>>) => {
  setLoading(true)
  await axios.get(`${import.meta.env.VITE_SERVER_LINK}/destinations/${slug}`)
    .then((res) => {
      setDestination(res.data.data);
      setLoading(false);
    })
    .catch((err) => {
      console.log(err)
    })
}


export default function DestinationUpdate({ slug }: {slug: string}) {
  const token = localStorage.getItem('token');
  const navigate = useNavigate();
  const [loading, setLoading] = useState<boolean>(false);
  const [districts, setDistricts] = useState<any>();
  const [categories, setCategories] = useState<any>()
  const [destination, setDestination] = useState<any>()

  useEffect(() => {
    if (token === null) navigate('/login');
    getDistricts(setLoading, setDistricts).then();
    getCategories(setLoading, setCategories).then();
    getDestination(slug, setLoading, setDestination).then();
  }, []);

  const submitHandle = async (e:any) => {
    e.preventDefault();
    const data = {
      name: e.target.name.value,
      description: e.target.description.value,
      address: e.target.address.value,
      districtSlug: e.target.districtSlug.value,
      categorySlug: e.target.categorySlug.value,
      latitude: e.target.latitude.value,
      longitude: e.target.longitude.value,
      price: parseInt(e.target.price.value),
      cover: e.target.cover.value === "" ? undefined : e.target.cover.value
    }

    await axios.patch(`${import.meta.env.VITE_SERVER_LINK}/admin/destinations/${slug}`, data, {
      headers: {
        Authorization: `bearer ${token}`,
      }
    }).then(() => {
      location.reload()
    }).catch((err) => {
      toast.error(err.response.data.errors);
    })
  }

  if (loading) return <div>Loading...</div>

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="sm" className="gap-1"><Pen className="w-4 h-4" /> Update</Button>
      </DialogTrigger>
      <DialogContent className="h-[500px] overflow-auto">
        <DialogTitle>Update Destination</DialogTitle>
        <form onSubmit={submitHandle} className="grid gap-4 grid-cols-[auto_1fr]">
          <Label htmlFor="name-input" className="text-sm">Name</Label>
          <Input defaultValue={destination?.name} id="name-input" name="name" placeholder="Destination name..."/>
          <Label htmlFor="description-input" className="text-sm">Description</Label>
          <Textarea id="description-input" defaultValue={destination?.description} name="description" placeholder="Destination description..."/>
          <Label htmlFor="address-input" className="text-sm">Address</Label>
          <Input id="address-input" defaultValue={destination?.address} name="address" placeholder="Address..."/>
          <Label htmlFor="district-input" className="text-sm">District</Label>
          <Select name="districtSlug" defaultValue={destination?.district?.slug}>
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
          <Label htmlFor="category-input" className="text-sm">Category</Label>
          <Select name="categorySlug" defaultValue={destination?.category?.slug}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select category" />
            </SelectTrigger>
            <SelectContent>
              {categories?.map((category: any) => {
                return (
                  <SelectItem key={category?.id} value={category?.slug}>{category?.name}</SelectItem>
                )
              })}
            </SelectContent>
          </Select>
          <Label htmlFor="latitude-input" className="text-sm">Latitude</Label>
          <Input defaultValue={destination?.latitude} id="latitude-input" type="text" name="latitude" placeholder="Latitude..."/>
          <Label htmlFor="longitude-input" className="text-sm">Longitude</Label>
          <Input defaultValue={destination?.longitude} id="longitude-input" type="text" name="longitude" placeholder="Longitude..."/>
          <Label htmlFor="cover-input" className="text-sm">Cover</Label>
          <Input defaultValue={destination?.cover} id="cover-input" name="cover" placeholder="Cover..."/>
          <Label htmlFor="price-input" className="text-sm">Price (Rp.)</Label>
          <Input defaultValue={destination?.price} id="price-input" name="price" type="number" placeholder="price to in..."/>
          <Button className="col-span-2">Update</Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}
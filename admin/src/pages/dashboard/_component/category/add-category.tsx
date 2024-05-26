import {useEffect} from "react";
import {useNavigate} from "react-router-dom";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {Textarea} from "@/components/ui/textarea.tsx";
import axios from "axios";
import {toast} from "sonner";

export default function AddCategory() {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  useEffect(() => {
    if(token === null) {
      navigate('/login');
    }
  }, [navigate]);

  const formSubmitHandle = async (e: any) => {
    e.preventDefault();
    const data = {
      name: e.target.name.value,
      cover: e.target.cover.value === "" ? undefined : e.target.cover.value,
      description: e.target.description.value
    }

    await axios.post(`${import.meta.env.VITE_SERVER_LINK}/admin/categories`, data, {
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

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Add Category</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add Category</DialogTitle>
        </DialogHeader>
        <form onSubmit={formSubmitHandle} className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="input-name" className="text-right">
              Name
            </Label>
            <Input
              id="input-name"
              name="name"
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
              className="col-span-3"
              placeholder="Cover here..."
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="input-description" className="text-right">
              Description
            </Label>
            <Textarea className="col-span-3" name="description" id="input-description"
                      placeholder="Description here..."/>
          </div>
          <DialogFooter>
            <Button type="submit">Add</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
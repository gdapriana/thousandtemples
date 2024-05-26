import {useNavigate} from "react-router-dom";
import {Dispatch, SetStateAction, useEffect, useState} from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import axios from "axios";
import {Button} from "@/components/ui/button.tsx";

const getCategory = async (slug: string, setLoading: Dispatch<SetStateAction<boolean>>, setCategory: Dispatch<SetStateAction<object>>) => {
  setLoading(true);
  await axios.get(`${import.meta.env.VITE_SERVER_LINK}/categories/${slug}`)
    .then((res) => {
      setCategory(res.data.data);
      setLoading(false);
    })
    .catch((err) => {
      console.log(err)
    })
}

export default function DeleteCategory({slug}: {slug: string}) {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');
  const [loading, setLoading] = useState<boolean>(false)
  const [category, setCategory] = useState<any>()

  useEffect(() => {
    if(token === null) navigate('/login');
    getCategory(slug, setLoading, setCategory).then();
  }, [navigate]);

  const deleteHandle = async () => {
    await axios.delete(`${import.meta.env.VITE_SERVER_LINK}/admin/categories/${slug}`, {
      headers: {
        Authorization: `bearer ${token}`
      }
    }).then(() => location.reload())
  }

  if (loading) return <div>Loading....</div>

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="destructive">Delete</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure delete {category?.name}?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete selected district
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={deleteHandle}>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
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

export default function DeleteDistrict({slug}: {slug: string}) {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');
  const [loading, setLoading] = useState<boolean>(false)
  const [district, setDistrict] = useState<any>()

  useEffect(() => {
    if(token === null) navigate('/login');
    getDistrict(slug, setLoading, setDistrict).then();
  }, [navigate]);

  const deleteHandle = async () => {
    await axios.delete(`${import.meta.env.VITE_SERVER_LINK}/admin/districts/${slug}`, {
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
          <AlertDialogTitle>Are you absolutely sure delete {district?.name}?</AlertDialogTitle>
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
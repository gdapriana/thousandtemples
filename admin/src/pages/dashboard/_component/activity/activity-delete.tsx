import {useNavigate} from "react-router-dom";
import {Dispatch, SetStateAction, useEffect, useState} from "react";
import axios from "axios";
import {
  AlertDialog, AlertDialogAction, AlertDialogCancel,
  AlertDialogContent, AlertDialogDescription, AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger
} from "@/components/ui/alert-dialog.tsx";
import {Button} from "@/components/ui/button.tsx";
import {Trash} from "lucide-react";

const getActivity = async (slug: string, setLoading: Dispatch<SetStateAction<boolean>>, setActivity: Dispatch<SetStateAction<any>>) => {
  setLoading(true)
  await axios.get(`${import.meta.env.VITE_SERVER_LINK}/activities/${slug}`)
    .then((res) => {
      setActivity(res.data.data);
      setLoading(false)
    })
    .catch((err) => {
      console.log(err)
    })
}

export default function ActivityDelete({ slug }: {slug: string}) {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');
  const [loading, setLoading] = useState<boolean>(false)
  const [activity, setActivity] = useState<any>()

  useEffect(() => {
    if(token === null) navigate('/login');
    getActivity(slug, setLoading, setActivity).then();
  }, [navigate]);

  const deleteHandle = async () => {
    await axios.delete(`${import.meta.env.VITE_SERVER_LINK}/admin/activities/${slug}`, {
      headers: {
        Authorization: `bearer ${token}`
      }
    })
      .then(() => {
        location.reload();
      })
      .catch((err) => {
        console.log(err)
      })
  }

  if (loading) return <div>Loading...</div>
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button size="sm" variant="destructive"><Trash className="w-4 h-4" /> Delete</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure delete {activity?.name}?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete selected activity
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
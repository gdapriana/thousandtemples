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

const getDestination = async (slug: string, setLoading: Dispatch<SetStateAction<boolean>>, setDestination: Dispatch<SetStateAction<any>>) => {
  setLoading(true);
  await axios.get(`${import.meta.env.VITE_SERVER_LINK}/destinations/${slug}`)
    .then((res) => {
      setLoading(false);
      setDestination(res.data.data);
    })
    .catch((err) => {
      console.log(err)
    })
}

export default function DestinationDelete({ slug }: {slug: string}) {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');
  const [loading, setLoading] = useState<boolean>(false)
  const [destination, setDestination] = useState<any>({});

  useEffect(() => {
    if(token === null) navigate('/login');
    getDestination(slug, setLoading, setDestination).then();
  }, [navigate]);

  const deleteHandle = async () => {
    await axios.delete(`${import.meta.env.VITE_SERVER_LINK}/admin/destinations/${slug}`, {
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
          <AlertDialogTitle>Are you absolutely sure delete {destination?.name}?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete selected destination
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
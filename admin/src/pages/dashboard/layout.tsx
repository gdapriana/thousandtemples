import {Outlet, useNavigate} from "react-router-dom";
import {useEffect} from "react";
import {HandIcon} from "lucide-react";
import {Toaster} from "sonner";


export default function Layout() {
  const navigate = useNavigate();
  const token = localStorage.getItem('token')

  useEffect(() => {
    if (!token) navigate('/login');
  }, [navigate])

  return (
    <div className="w-full flex justify-start items-center p-12 flex-col h-screen">
      <h1 className="font-bold text-xl flex gap-2"><HandIcon /> thousandtemples administrator</h1>
      <h3 className="text-muted-foreground mb-4">Choose what do you want to edit</h3>
      <div className="w-full max-w-4xl basis-0 overflow-auto flex-1">
        <Outlet />
      </div>
      <Toaster />
    </div>
  )
}
import {Button} from "@/components/ui/button.tsx";
import {Link} from "react-router-dom";
import {ActivityIcon, Flag, ListChecksIcon, LogOut, MapPin} from "lucide-react";

export default function Dashboard() {
  return (
    <div className="flex justify-center items-center gap-2 flex-wrap">
      <Button className="gap-2" asChild><Link to={"/destinations"}><MapPin className="w-4 h-4" />Destinations</Link></Button>
      <Button className="gap-2" asChild><Link to={"/activities"}><ActivityIcon className="w-4 h-4" />Activities</Link></Button>
      <Button className="gap-2" asChild><Link to={"/categories"}><ListChecksIcon className="w-4 h-4" />Categories</Link></Button>
      <Button className="gap-2" asChild><Link to={"/districts"}><Flag className="w-4 h-4" />Districts</Link></Button>
      <Button className="gap-2" asChild><Link to={"/districts"}><LogOut className="w-4 h-4" />Logout</Link></Button>
    </div>
  )
}
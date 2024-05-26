import { districtProps } from "@/lib/types";
import { Header } from "@/app/activities/_components/header";
import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";
import { iconClass } from "@/lib/utils";

export const Districts = ({ districts }: { districts: districtProps[] }) => {
  return (
    <main className="flex flex-col justify-start gap-4 items-stretch">
      <Header text="Most districts has activities" className="text-lg text-center lg:text-start" />
      <div className="flex justify-center lg:justify-start flex-wrap gap-1">
        {districts?.map((district: districtProps) => {
          return (
            <Button variant="outline" className="gap-1" key={district?.id}>
              <MapPin className={iconClass} /> {district?.name}
            </Button>
          );
        })}
      </div>
    </main>
  );
};

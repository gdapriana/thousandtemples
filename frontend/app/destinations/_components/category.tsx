import {categoryProps} from "@/lib/types";
import { Header } from "@/app/activities/_components/header";
import { Button } from "@/components/ui/button";
import {Layers2} from "lucide-react";
import { iconClass } from "@/lib/utils";

export const Category = ({ categories }: { categories: categoryProps[] }) => {
  return (
    <main className="flex flex-col justify-start gap-4 items-stretch">
      <Header text="Popular Categories" className="text-lg text-center lg:text-start" />
      <div className="flex justify-center lg:justify-start flex-wrap gap-1">
        {categories?.slice(0, 10).map((category: categoryProps) => {
          return (
            <Button variant="outline" className="gap-1" key={category?.id}>
              <Layers2 className={iconClass} /> {category?.name}
            </Button>
          );
        })}
      </div>
    </main>
  );
};

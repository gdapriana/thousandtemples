"use client";

import { routesProps } from "@/lib/types";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { AlignJustify } from "lucide-react";
import { iconClass } from "@/lib/utils";
import { Brand } from "@/app/_component/brand";
import { Navigations } from "@/app/_component/navigations";

export const Hamburger = ({ routes }: { routes: routesProps[] }) => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className="lg:hidden" variant="ghost" size="icon">
          <AlignJustify className={iconClass} />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>
            <Brand className={{ text: "hidden min-[400px]:flex" }} />
          </SheetTitle>
        </SheetHeader>
        <Navigations routes={routes} className="flex mt-12 flex-col justify-start items-start" />
      </SheetContent>
    </Sheet>
  );
};

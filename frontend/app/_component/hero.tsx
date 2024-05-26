import Image from "next/image";
import { cn, grayFont, iconClass } from "@/lib/utils";
import { QuoteIcon, SearchIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <main className="w-full pt-4 bg-[url('/images/mesh_transparent.png')] border-b bg-top bg-cover flex justify-center items-center">
      <div className="w-full max-w-6xl grid grid-cols-1 gap-4 lg:grid-cols-[1fr_auto] grid-rows-2">
        <div className="p-4 flex justify-start items-end">
          <article className="flex flex-col justify-start gap-4 items-start">
            <h1 className={cn("text-2xl font-bold text-pretty", grayFont)}>
              Let's Enjoy Your Desired Trip in Bali With <span className="text-primary">thousandtemples</span>
            </h1>
            <div className="flex justify-start gap-4 items-center">
              <QuoteIcon className={cn("text-muted-foreground", iconClass)} />
              <p className="text-muted-foreground italic text-sm w-2/3 md:w-1/2">
                "Man cannot discover new oceans unless he has the courage to lose sight of the shore"
              </p>
            </div>
          </article>
        </div>
        <div className="hidden pr-4 lg:flex justify-center items-end lg:row-span-2">
          <Image width={1000} height={1000} className="w-[350px]" src="/images/temple.png" alt="temple" />
        </div>
        <div className="p-4 flex justify-start items-start">
          <div className="flex justify-center p-2 items-center gap-2 bg-primary rounded-full">
            <SearchIcon className={cn("w-6 h-6 text-white")} />
            <input
              type="text"
              className={cn("bg-transparent w-auto outline-0 text-white text-sm")}
              placeholder="Search anything ..."
            />
            <Button className="rounded-full" variant="outline">
              Search
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
};

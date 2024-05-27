import Image from "next/image";
import { cn, grayFont, iconClass } from "@/lib/utils";
import { QuoteIcon } from "lucide-react";
import {Search} from "@/app/_component/search";

export const Hero = () => {
  return (
    <main className="w-full pt-4 bg-[url('/images/mesh_transparent.png')] border-b bg-top bg-cover flex justify-center items-center">
      <div className="w-full max-w-6xl grid grid-cols-1 gap-4 lg:grid-cols-[1fr_auto] grid-rows-2">
        <div className="p-4 flex justify-start items-end">
          <article className="flex flex-col justify-start gap-4 items-start">
            <h1 className={cn("text-2xl font-bold text-pretty", grayFont)}>
              Let&apos;s Enjoy Your Desired Trip in Bali With <span className="text-primary">thousandtemples</span>
            </h1>
            <div className="flex justify-start gap-4 items-center">
              <QuoteIcon className={cn("text-muted-foreground", iconClass)} />
              <p className="text-muted-foreground italic text-sm w-2/3 md:w-1/2">
                &apos;Man cannot discover new oceans unless he has the courage to lose sight of the shore&apos;
              </p>
            </div>
          </article>
        </div>
        <div className="hidden pr-4 lg:flex justify-center items-end lg:row-span-2">
          <Image width={1000} height={1000} className="w-[350px]" src="/images/temple.png" alt="temple" />
        </div>
        <div className="p-4 flex justify-start items-start">
          <Search variant="hero" />
        </div>
      </div>
    </main>
  );
};

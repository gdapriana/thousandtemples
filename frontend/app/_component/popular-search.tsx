"use client";

import { destinationProps } from "@/lib/types";
import { Badge } from "@/components/ui/badge";

export const PopularSearch = ({ destinations }: { destinations: destinationProps[] | undefined }) => {
  return (
    <main className="w-full border-b flex justify-center items-center p-4">
      <div className="w-full flex gap-4 justify-center items-center max-w-6xl">
        <h1 className="font-bold">Popular Search</h1>
        <div className="flex-1 basis-0 rounded-full overflow-auto">
          <div className="flex rounded-full justify-start items-center gap-2 whitespace-nowrap">
            {destinations?.map((destination: destinationProps) => {
              return <Badge key={destination.id}>{destination.name}</Badge>;
            })}
          </div>
        </div>
      </div>
    </main>
  );
};

"use client";

import { SearchIcon } from "lucide-react";
import {cn, iconClass} from "@/lib/utils";
import {Button} from "@/components/ui/button";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import {Dispatch, SetStateAction, useState} from "react";
import axios from "axios";
import {activityProps, destinationProps} from "@/lib/types";
import debounce from 'lodash.debounce';
import Link from "next/link";

const getActivities = async (name: string) => {
  const response = await axios.get(`${process.env.NEXT_PUBLIC_SERVER_LINK}/activities?name=${name}`);
  return response.data.data;
};

const getDestinations = async (name: string) => {
  const response = await axios.get(`${process.env.NEXT_PUBLIC_SERVER_LINK}/destinations?name=${name}`);
  return response.data.data;
};

export const Search = ({variant}: {variant: 'header' | 'hero'}) => {
  const [open, setOpen] = useState<boolean>(false)
  const [destinations, setDestinations] = useState< destinationProps[]>()
  const [activities, setActivities] = useState<activityProps[]>()

  const searchHandle = debounce (async (e: any) => {
    setDestinations(await getDestinations(e.target.value))
    setActivities(await getActivities(e.target.value))
  }, 500)

  return (
    <>
      {variant === 'header' ? (
        <Button variant="secondary" onClick={() => setOpen(!open)} className="gap-1 hidden md:flex ms-auto text-muted-foreground"><SearchIcon className={iconClass} />Search...</Button>
      ): (
        <div onClick={() => setOpen(!open)} className="flex justify-center p-2 items-center gap-2 bg-primary rounded-full">
          <SearchIcon className={cn("w-6 h-6 text-white")}/>
          <input
            type="text"
            className={cn("bg-transparent w-auto outline-0 text-white text-sm")}
            placeholder="Search anything ..."
          />
          <Button className="rounded-full" variant="outline">
            Search
          </Button>
        </div>
      )}
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput onChangeCapture={searchHandle} placeholder="Type a command or search..."/>
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Destinations">
            {
              destinations?.map((destination: destinationProps) => {
                return (
                <CommandItem key={destination.id} asChild>
                  <Link href={`/destinations/${destination.slug}`}>{destination.name}</Link>
                </CommandItem>
                )
              })
            }
          </CommandGroup>
          <CommandGroup heading="Activities">
            {
              activities?.map((activitiy: activityProps) => {
                return (
                  <CommandItem key={activitiy.id} asChild>
                    <Link href={`/activities/${activitiy.slug}`}>{activitiy.name}</Link>
                  </CommandItem>
                )
              })
            }
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
};

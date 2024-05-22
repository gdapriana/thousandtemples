import Link from "next/link";
import Image from "next/image";
import {cn} from "@/lib/utils";

export const Brand = ({ className }: {className?: {image?: string; text?:string}}) => {
  return (
    <Link href="/" className="flex justify-center gap-2 items-center">
      <h1 className={cn("text-primary font-bold", className?.text)}>thousandtemples</h1>
    </Link>
  )
}
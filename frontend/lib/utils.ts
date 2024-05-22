import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const iconClass = "w-4 h-4"
export const grayFont = "text-stone-700 dark:text-stone-50"
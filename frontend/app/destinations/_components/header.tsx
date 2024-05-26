import { cn } from "@/lib/utils";

export const Header = ({ text, className }: { text: string; className?: string }) => {
  return <h1 className={cn("text-primary font-bold", className)}>{text}</h1>;
};

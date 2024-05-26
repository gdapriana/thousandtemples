import { routesProps } from "@/lib/types";
import { cn, iconClass } from "@/lib/utils";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const Navigations = ({ routes, className }: { routes: routesProps[]; className?: string }) => {
  return (
    <nav className={cn("", className)}>
      {routes.map((route: routesProps, index: number) => {
        return (
          <Button size="sm" variant="ghost" key={index} asChild>
            <Link href={route.route} className="flex justify-center items-center gap-1">
              <route.icon className={cn("text-muted-foreground", iconClass)} />
              <span className="font-medium text-muted-foreground">{route.name}</span>
            </Link>
          </Button>
        );
      })}
    </nav>
  );
};

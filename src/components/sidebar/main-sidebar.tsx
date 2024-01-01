import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { useTheme } from "../theme-provider";
import { useSheet } from "@/hooks/use-sheet";

import {
  Book,
  Folder,
  Gamepad,
  Globe,
  Home,
  Search,
  Settings,
  UserCircle2,
  Wrench,
  X,
} from "lucide-react";
import { ModeToggle } from "../mode-toggle";
import { Button } from "../ui/button";
import { CommandShortcut } from "../ui/command";
import { Separator } from "../ui/separator";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { SearchCommand } from "../search-command";
import React from "react";

interface MainSidebarProps {
  isMobile?: boolean;
}

export const MainSidebar = ({ isMobile = false }: MainSidebarProps) => {
  const location = useLocation();
  const { theme } = useTheme();
  const { close } = useSheet();
  const [open, setOpen] = React.useState(false);

  const isHomeRoute = location.pathname === "/";
  const isThisProfileRoute = location.pathname === "/profile";
  const isHobbyRoute = location.pathname === "/hobby";
  const isArticlesRoute = location.pathname === "/articles";
  const isProjectsRoute = location.pathname === "/projects";
  const isSkillsRoute = location.pathname === "/skills";
  const isNetworkRoute = location.pathname === "/network";

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  return (
    <div
      className={cn(
        theme === "light" && "border-r-2",
        !isMobile ? "hidden md:block w-[20%]" : "w-full",
        "p-4 h-full overflow-hidden bg-primary-foreground"
      )}
    >
      <div className="flex flex-col h-full justify-between">
        <div>
          <div className="flex items-center gap-1 mb-4">
            <ModeToggle />
            <p className="font-semibold text-lg">Rizky Fauzi Ilmi</p>
          </div>
          <div className="flex flex-col gap-2">
            <Dialog onOpenChange={setOpen} open={open}>
              <DialogTrigger asChild>
                <Button
                  className="w-full flex gap-4 justify-start pl-2"
                  variant="ghost"
                >
                  <Search />
                  Search
                  <CommandShortcut>⌘ k</CommandShortcut>
                </Button>
              </DialogTrigger>
              <DialogContent className="p-0 border-none w-[80%] md:w-full">
                <SearchCommand setOpen={setOpen} />
              </DialogContent>
            </Dialog>

            <Separator />
            <Link to="/">
              <Button
                className={cn(
                  isHomeRoute && "bg-muted",
                  "w-full flex gap-4 justify-start pl-2"
                )}
                variant="ghost"
                onClick={close}
                type="submit"
              >
                <Home />
                Home
              </Button>
            </Link>
            <Link to="/profile">
              <Button
                className={cn(
                  isThisProfileRoute && "bg-muted",
                  "w-full flex gap-4 justify-start pl-2"
                )}
                variant="ghost"
                onClick={close}
              >
                <UserCircle2 />
                Profile
              </Button>
            </Link>
            <Link to="/hobby">
              <Button
                className={cn(
                  isHobbyRoute && "bg-muted",
                  "w-full flex gap-4 justify-start pl-2"
                )}
                variant="ghost"
                onClick={close}
              >
                <Gamepad />
                Hobby
              </Button>
            </Link>
            <Link to="/articles">
              <Button
                className={cn(
                  isArticlesRoute && "bg-muted",
                  "w-full flex gap-4 justify-start pl-2"
                )}
                variant="ghost"
                onClick={close}
              >
                <Book />
                Articles
              </Button>
            </Link>
            <Separator />
            <Link to="/projects">
              <Button
                className={cn(
                  isProjectsRoute && "bg-muted",
                  "w-full flex gap-4 justify-start pl-2"
                )}
                variant="ghost"
                onClick={close}
              >
                <Folder />
                Projects
              </Button>
            </Link>
            <Link to="/skills">
              <Button
                className={cn(
                  isSkillsRoute && "bg-muted",
                  "w-full flex gap-4 justify-start pl-2"
                )}
                variant="ghost"
                onClick={close}
              >
                <Wrench />
                Skills
              </Button>
            </Link>
            <Separator />
            <Link to="/network">
              <Button
                className={cn(
                  isNetworkRoute && "bg-muted",
                  "w-full flex gap-4 justify-start pl-2"
                )}
                variant="ghost"
                onClick={close}
              >
                <Globe />
                Network
              </Button>
            </Link>
            <Separator />
          </div>
        </div>
        <Button
          className="w-full flex gap-4 justify-start pl-2"
          variant="ghost"
        >
          <Settings />
          Settings
        </Button>
      </div>
      <Button
        variant="ghost"
        size="icon"
        className="absolute md:hidden top-1 right-1 z-50"
        onClick={close}
      >
        <X className="w-4 h-4" />
      </Button>
    </div>
  );
};

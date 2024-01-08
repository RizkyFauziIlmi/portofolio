import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { useTheme } from "../theme-provider";
import { useSheet } from "@/hooks/use-sheet";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import {
  ArrowDown,
  Folder,
  Gamepad,
  Globe,
  Home,
  Search,
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
import { useEffect, useState } from "react";
import IconGithub from "../svg/github-svg";
import IconLinkedin from "../svg/linkedin-svg";
import IconGmail from "../svg/gmail-svg";
import IconWhatsapp from "../svg/whatsapp-svg";
import IconInstagram from "../svg/instagram-svg";
import { useDrawer } from "@/hooks/use-drawer";

interface MainSidebarProps {
  isMobile?: boolean;
}

export const MainSidebar = ({ isMobile = false }: MainSidebarProps) => {
  const location = useLocation();
  const { theme } = useTheme();
  const { close } = useSheet();
  const drawer = useDrawer();
  const [open, setOpen] = useState(false);

  const isHomeRoute = location.pathname === "/";
  const isThisProfileRoute = location.pathname === "/profile";
  const isHobbyRoute = location.pathname === "/hobby";
  const isProjectsRoute = location.pathname === "/projects";
  const isSkillsRoute = location.pathname === "/skills";

  useEffect(() => {
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
        !isMobile
          ? "hidden md:block sm:w-[25%] md:w-[25%] lg:w-[20%]"
          : "w-full",
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
            <Drawer open={drawer.isOpen} onRelease={drawer.close}>
              <DrawerTrigger onClick={drawer.open}>
                <Button
                  className="w-full flex gap-4 justify-start pl-2"
                  variant="ghost"
                >
                  <Globe />
                  Network
                </Button>
              </DrawerTrigger>
              <DrawerContent>
                <DrawerHeader>
                  <DrawerTitle>Get in Touch</DrawerTitle>
                  <DrawerDescription>
                    Feel free to reach out to me for collaboration, project
                    inquiries, or just to say hello! I'm always open to new
                    opportunities and discussions. Use the contact options below
                    to connect with me directly. Looking forward to hearing from
                    you!
                  </DrawerDescription>
                </DrawerHeader>
                <div className="w-full flex flex-wrap justify-center items-center gap-2 py-4">
                  <Link
                    to="https://github.com/RizkyFauziIlmi"
                    replace
                    target="_blank"
                  >
                    <Button variant="outline" size="lg">
                      <IconGithub className="h-6 w-6 mr-2" /> Github
                    </Button>
                  </Link>
                  <Link
                    to="https://www.linkedin.com/in/rizky-fauzi-ilmi-b473a4257"
                    replace
                    target="_blank"
                  >
                    <Button variant="outline" size="lg">
                      <IconLinkedin className="h-6 w-6 mr-2" /> Linkedin
                    </Button>
                  </Link>
                  <Link to="mailto:rizkyfauziilmi@gmail.com">
                    <Button variant="outline" size="lg">
                      <IconGmail className="h-6 w-6 mr-2" /> Email
                    </Button>
                  </Link>
                  <Link to="https://wa.link/9rw4kd" replace target="_blank">
                    <Button variant="outline" size="lg">
                      <IconWhatsapp className="h-6 w-6 mr-2" /> Whatsapp
                    </Button>
                  </Link>
                  <Link
                    to="https://www.instagram.com/fauzirizkyw/"
                    replace
                    target="_blank"
                  >
                    <Button variant="outline" size="lg">
                      <IconInstagram className="h-6 w-6 mr-2" /> Instagram
                    </Button>
                  </Link>
                </div>
                <DrawerFooter>
                  <DrawerClose>
                    <Button variant="outline" className="w-full" onClick={drawer.close}>
                      <ArrowDown className="h-4 w-4 mr-2" /> Close
                    </Button>
                  </DrawerClose>
                </DrawerFooter>
              </DrawerContent>
            </Drawer>

            <Separator />
          </div>
        </div>
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

import {
  Settings,
  Folder,
  Wrench,
  UserCircle2,
  Home,
  Gamepad,
  Book,
  Globe,
} from "lucide-react";

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import { useNavigate } from "react-router-dom";
import { useSheet } from "@/hooks/use-sheet";

interface SearchCommandProps {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const SearchCommand = ({ setOpen }: SearchCommandProps) => {
  const navigate = useNavigate();
  const { close } = useSheet();

  const handleClick = (to: string) => {
    setOpen(false);
    close();
    navigate(to)
  }

  return (
    <Command
      className="rounded-lg border shadow-md"
    >
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Suggestions">
          <CommandItem onSelect={() => handleClick("/profile")}>
            <UserCircle2 className="mr-2 h-4 w-4" />
            <span>profile</span>
          </CommandItem>
          <CommandItem onSelect={() => handleClick("/projects")}>
            <Folder className="mr-2 h-4 w-4" />
            <span>projects</span>
          </CommandItem>
          <CommandItem onSelect={() => handleClick("/skills")}>
            <Wrench className="mr-2 h-4 w-4" />
            <span>skills</span>
          </CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Other">
          <CommandItem onSelect={() => handleClick("/")}>
            <Home className="mr-2 h-4 w-4" />
            <span>home</span>
          </CommandItem>
          <CommandItem onSelect={() => handleClick("/hobby")}>
            <Gamepad className="mr-2 h-4 w-4" />
            <span>hobby</span>
          </CommandItem>
          <CommandItem onSelect={() => handleClick("/articles")}>
            <Book className="mr-2 h-4 w-4" />
            <span>articles</span>
          </CommandItem>
          <CommandItem onSelect={() => handleClick("/network")}>
            <Globe className="mr-2 h-4 w-4" />
            <span>network</span>
          </CommandItem>
          <CommandItem onSelect={() => handleClick("/settings")}>
            <Settings className="mr-2 h-4 w-4" />
            <span>settings</span>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  );
};

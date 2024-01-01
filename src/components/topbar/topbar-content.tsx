import { ArrowLeft, ArrowRight, ArrowUpIcon, Menu } from "lucide-react";
import Breadcrumbs from "../breadcrumbs";
import { useNavigate } from "react-router-dom";
import { Button } from "../ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { MainSidebar } from "../sidebar/main-sidebar";
import { useSheet } from "@/hooks/use-sheet";

export const TopbarContent = () => {
  const navigate = useNavigate();
  const { isOpen, open } = useSheet();

  return (
    <div className="w-full p-4 flex items-center gap-4 md:gap-8">
      <div className="flex items-center gap-2 md:gap-4">
        <Sheet open={isOpen}>
          <SheetTrigger asChild>
            <Button size="icon" className="md:hidden" variant="ghost" onClick={open}>
              <Menu className="h-4 w-4" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="p-0">
            <MainSidebar isMobile />
          </SheetContent>
        </Sheet>
        <ArrowLeft
          className="w-4 h-4 cursor-pointer"
          onClick={() => navigate(-1)}
        />
        <ArrowRight
          className="w-4 h-4 cursor-pointer"
          onClick={() => navigate(1)}
        />
        <ArrowUpIcon className="w-4 h-4" />
      </div>
      <Breadcrumbs />
    </div>
  );
};

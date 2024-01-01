import { Outlet } from "react-router-dom";

import { MainSidebar } from "@/components/sidebar/main-sidebar";
import { ContentLayout } from "./content-layout";

export default function MainLayout() {
  return (
    <div className="flex h-screen w-screen">
      <MainSidebar />
      <ContentLayout>
        <Outlet />
      </ContentLayout>
    </div>
  );
}

import { Menu } from "lucide-react";
import SidebarContent from "./SidebarContent";

export default function Sidebar() {
  return (
    <div className="drawer drawer-end ml-4">
      <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* Page content here */}
        <label
          htmlFor="my-drawer-4"
          className="btn p-2 drawer-button cursor-pointer  bg-transparent hover:bg-transparent"
        >
          <Menu className="h-8 w-8" />
        </label>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-4"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <div className="menu h-screen w-4/5 bg-base-200 p-4 text-base-content">
          {/* Sidebar content here */}
          <SidebarContent />
        </div>
      </div>
    </div>
  );
}

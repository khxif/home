import { Search } from "lucide-react";
import Logo from "/logo.png";
import NavLinks from "./NavLinks";
import NavItems from "./NavItems";
import Sidebar from "../Sidebar/Sidebar";

export default function NavBar() {
  return (
    <nav className="mx-auto max-w-7xl px-4 sm:px-6  md:px-8 lg:px-0">
      <div className="flex w-full items-center justify-between border-b py-6">
        <div>
          <img src={Logo} alt="Logo" />
        </div>

        <div className="hidden max-w-xl flex-1 items-center rounded-full bg-[#F4F4F5] px-4 py-2 md:flex">
          <input
            placeholder="Search..."
            className="flex-1 bg-transparent p-1 outline-none"
            type="text"
          />
          <Search className="h-6 w-6" />
        </div>

        <NavItems />
        <div className="md:hidden">
          <Sidebar />
        </div>
      </div>

      <div className="hidden items-center justify-between py-6 md:flex">
        <NavLinks />
        <p className="text-[#5D5F5F]">
          Extra 20% off save items + Free shipping for orders over $200
        </p>
      </div>
    </nav>
  );
}

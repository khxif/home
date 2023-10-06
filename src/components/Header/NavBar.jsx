import { Search } from "lucide-react";
import Logo from "/logo.png";
import NavLinks from "./NavLinks";
import NavItems from "./NavItems";

export default function NavBar() {
  return (
    <nav className="max-w-7xl mx-auto px-4 sm:px-6  md:px-8 lg:px-0">
      <div className="py-6 flex items-center justify-between border-b">
        <div>
          <img src={Logo} alt="Logo" />
        </div>

        <div className="flex max-w-xl flex-1 items-center py-2 px-4 rounded-full bg-[#F4F4F5]">
          <input
            placeholder="Search..."
            className="p-1 bg-transparent flex-1 outline-none"
            type="text"
          />
          <Search className="h-6 w-6" />
        </div>

        <NavItems />
      </div>

      <div className="flex items-center justify-between py-6">
        <NavLinks />
        <p className="text-[#5D5F5F]">
          Extra 20% off save items + Free shipping for orders over $200
        </p>
      </div>
    </nav>
  );
}

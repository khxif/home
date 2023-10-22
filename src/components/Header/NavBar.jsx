import { useUser } from "@clerk/clerk-react";
import { Search } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "sonner";
import Sidebar from "../Sidebar/Sidebar";
import NavItems from "./NavItems";
import NavLinks from "./NavLinks";
import Logo from "/logo.png";

export default function NavBar() {
  const [input, setInput] = useState("");
  const { isSignedIn } = useUser();

  const handleSearch = (e) => {
    e.preventDefault();
    if (!isSignedIn) toast.error("Sign In or Sign Up to continue!!");
    setInput("");
  };

  return (
    <nav className="mx-auto max-w-7xl px-4 sm:px-6  md:px-8 lg:px-0">
      <div className="flex w-full items-center justify-between border-b py-6">
        <Link to="/">
          <img src={Logo} alt="Logo" />
        </Link>

        <form
          onSubmit={handleSearch}
          className="hidden max-w-xl flex-1 items-center rounded-full bg-[#F4F4F5] px-4 py-2 md:flex"
        >
          <input
            placeholder="Search..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1 bg-transparent p-1 outline-none"
            type="text"
          />
          <Search className="h-6 w-6 cursor-pointer" onClick={handleSearch} />
        </form>

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

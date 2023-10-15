import { Link } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import NavItems from "./NavItems";
import NavLinks from "./NavLinks";
import Logo from "/logo.png";

export default function Header() {
  return (
    <header className="mx-auto max-w-7xl px-4 py-6  sm:px-6 md:px-8 lg:px-0">
      <div className="flex items-center justify-between">
        <Link to="/">
          <img src={Logo} alt="Logo" />
        </Link>
        <NavLinks />
        <NavItems />
        <div className="md:hidden">
          <Sidebar />
        </div>
      </div>
    </header>
  );
}

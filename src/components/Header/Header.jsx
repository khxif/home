import NavItems from "./NavItems";
import NavLinks from "./NavLinks";
import Logo from "/logo.png";

export default function Header() {
  return (
    <header className="max-w-7xl mx-auto px-4 sm:px-6  md:px-8 lg:px-0 py-6">
      <div className="flex items-center justify-between">
        <div>
          <img src={Logo} alt="Logo" />
        </div>
        <NavLinks />
        <NavItems />
      </div>
    </header>
  );
}

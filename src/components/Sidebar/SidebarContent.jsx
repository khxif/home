import { UserButton, useUser } from "@clerk/clerk-react";
import { Heart, Search, ShoppingCart, User } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { toast } from "sonner";
import { twJoin } from "tailwind-merge";
import { routes } from "../../utils/constants";

export default function SidebarContent() {
  const location = useLocation();
  const pathname = location.pathname;

  const { isSignedIn } = useUser();
  const [input, setInput] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    if (!isSignedIn) toast.error("Sign In or Sign Up to continue!!");
    setInput("");
  };

  return (
    <div className="flex w-full  flex-col justify-center space-y-8 py-4">
      <div className="flex flex-col  gap-4">
        <div className="flex items-center justify-between px-2">
          <Link to="/">
            <img src="/logo.png" alt="logo" className="w-20" />
          </Link>
          <div className="flex items-center space-x-4">
            <Link
              to="/favorites"
              className="tooltip tooltip-bottom hover:tooltip-open"
              data-tip="Favorites"
            >
              <Heart className="h-5 w-5" />
            </Link>

            <Link
              to="/cart"
              className="tooltip tooltip-bottom flex items-center space-x-2 hover:tooltip-open"
              data-tip="Cart"
            >
              <ShoppingCart className="h-5 w-5" />
            </Link>
            <div>
              {isSignedIn ? (
                <UserButton afterSignOutUrl="/" />
              ) : (
                <Link
                  to="/sign-up"
                  className="tooltip tooltip-bottom hover:tooltip-open"
                  data-tip="Sign in"
                >
                  <User className="h-5 w-5" />
                </Link>
              )}
            </div>
          </div>
        </div>
        <form
          onSubmit={handleSearch}
          className="flex items-center justify-between rounded-full bg-white px-4 py-2 shadow-sm"
        >
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Search for products..."
            className="w-full bg-transparent px-2 outline-none hover:outline-none"
          />
          <Search className="h-5 w-5 cursor-pointer" onClick={handleSearch} />
        </form>
      </div>
      <div className="flex flex-col items-start space-y-2">
        {routes.map((route) => (
          <Link
            to={route.href}
            className={twJoin(
              "w-full rounded-xl p-4 font-semibold shadow-sm hover:bg-gray-200",
              pathname === route.href && "bg-gray-200",
              route.color && route.color,
            )}
            key={route.href}
          >
            {route.name}
          </Link>
        ))}
      </div>
    </div>
  );
}

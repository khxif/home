import { Heart, Search, ShoppingCart, User } from "lucide-react";
import { routes } from "../../utils/constants";
import { Link, useLocation } from "react-router-dom";
import { twJoin } from "tailwind-merge";
import { UserButton, useUser } from "@clerk/clerk-react";

export default function SidebarContent() {
  const location = useLocation();
  const pathname = location.pathname;

  const { isSignedIn } = useUser();

  return (
    <div className="flex w-full  flex-col justify-center space-y-8 py-4">
      <div className="flex flex-col  gap-4">
        <div className="flex items-center justify-between px-2">
          <img src="/logo.png" alt="logo" className="w-20" />
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
        <form className="flex items-center justify-between rounded-full bg-white px-4 py-2 shadow-sm">
          <input
            type="text"
            placeholder="Search for products..."
            className="w-full  bg-transparent px-2 outline-none hover:outline-none"
          />
          <Search />
        </form>
      </div>
      <div className="flex flex-col items-start space-y-2">
        {routes.map((route) => (
          <Link
            to={route.href}
            className={twJoin(
              "w-full rounded-xl p-4 font-semibold shadow-sm hover:bg-gray-200",
              pathname === route.href && "bg-gray-200",
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

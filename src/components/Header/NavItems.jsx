import { UserButton, useUser } from "@clerk/clerk-react";
import { Heart, ShoppingCart, User } from "lucide-react";
import { Link } from "react-router-dom";

export default function NavItems() {
  const { isSignedIn } = useUser();

  return (
    <div className="hidden items-center space-x-8 md:flex">
      <Link
        to="/favorites"
        className="tooltip tooltip-bottom hover:tooltip-open"
        data-tip="Favorites"
      >
        <Heart />
      </Link>

      <Link
        to="/cart"
        className="tooltip tooltip-bottom flex items-center space-x-2 hover:tooltip-open"
        data-tip="Cart"
      >
        <ShoppingCart />
        <span
          className="flex h-4 w-4 items-center justify-center rounded-full bg-[#DE5212] p-3 text-sm
             font-bold text-white"
        >
          0
        </span>
      </Link>

      {isSignedIn ? (
        <UserButton afterSignOutUrl="/sign-in" />
      ) : (
        <Link to="/sign-up" className="flex items-center space-x-2">
          <User />
          <p>Sign In</p>
        </Link>
      )}
    </div>
  );
}

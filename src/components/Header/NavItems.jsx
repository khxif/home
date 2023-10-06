import { Heart, ShoppingCart, User } from "lucide-react";
import { Link } from "react-router-dom";

export default function NavItems() {
  return (
    <div className="hidden md:flex space-x-8">
      <Link 
      to="/favorites" 
      className="tooltip hover:tooltip-open tooltip-bottom" 
      data-tip="Favorites"
      >
        <Heart />
      </Link>

      <Link 
      to="/cart" 
      className="flex items-center space-x-2 tooltip hover:tooltip-open tooltip-bottom"
      data-tip="Cart"
      >
        <ShoppingCart />
        <span
          className="flex items-center justify-center p-3 h-4 w-4 font-bold text-white rounded-full
             bg-[#DE5212] text-sm"
        >
          0
        </span>
      </Link>

      <div className="flex items-center space-x-2">
        <User />
        <p>Sign In</p>
      </div>
    </div>
  );
}

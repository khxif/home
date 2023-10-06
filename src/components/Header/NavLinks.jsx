import { routes } from "../../utils/constants";
import { Link, useLocation } from "react-router-dom";
import { twJoin } from "tailwind-merge";

export default function NavLinks() {
  const location = useLocation();
  return (
    <div className="hidden md:flex items-center space-x-8">
      {routes.map((route) => (
        <Link
          key={route.name}
          to={route.href}
          className={twJoin(
            location.pathname === route.href && "text-black font-bold",
            route.color ? route.color : "text-[#5D5F5F]",
            "font-medium text-base"
          )}
        >
          {route.name}
        </Link>
      ))}
    </div>
  );
}

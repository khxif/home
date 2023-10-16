import { Link } from "react-router-dom";

export default function BreadCrumbs() {
  return (
    <div className="w-full bg-[#F4F4F5] px-4 py-4 md:px-0">
      <div className="breadcrumbs mx-auto max-w-7xl text-sm text-[#5D5F5F]">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link>Living room</Link>
          </li>
          <li>
            <Link>Larkin Room</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

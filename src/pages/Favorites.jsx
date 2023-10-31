import { Suspense, lazy } from "react";
import Loading from "../components/Loading";
import Tables from "../components/Cart/Tables";

const Header = lazy(() => import("../components/Header/Header"));

export default function Favorites() {
  return (
    <Suspense fallback={<Loading />}>
      <Header />
      <div className="max-w-7xl mx-auto px-4 md:px-0">
      <Tables />
      </div>
    </Suspense>
  );
}

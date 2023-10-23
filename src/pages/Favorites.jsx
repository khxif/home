import { Suspense, lazy } from "react";
import Loading from "../components/Loading";

const Header = lazy(() => import("../components/Header/Header"));

export default function Favorites() {
  return (
    <Suspense fallback={<Loading />}>
      <Header />
      Favorites
    </Suspense>
  );
}

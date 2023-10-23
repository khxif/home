import { ClerkProvider, SignIn, SignUp } from "@clerk/clerk-react";
import { Suspense, lazy } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import NotFound from "../../pages/NotFound";
import Loading from "../Loading";

const Home = lazy(() => import("../../pages/Home"));
const About = lazy(() => import("../../pages/About"));
const Cart = lazy(() => import("../../pages/Cart"));
const Shop = lazy(() => import("../../pages/Shop"));
const Sales = lazy(() => import("../../pages/Sales"));
const Faq = lazy(() => import("../../pages/Faq"));
const Contact = lazy(() => import("../../pages/Contact"));
const Favorites = lazy(() => import("../../pages/Favorites"));
const Product = lazy(() => import("../../pages/Product"));
const Blog = lazy(() => import("../../pages/Blog"));

if (!import.meta.env.VITE_REACT_APP_CLERK_PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}

const clerkPubKey = import.meta.env.VITE_REACT_APP_CLERK_PUBLISHABLE_KEY;

export function ClerkProviderWithRoutes() {
  const navigate = useNavigate();

  return (
    <ClerkProvider publishableKey={clerkPubKey} navigate={(to) => navigate(to)}>
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<Loading />}>
              <Home />
            </Suspense>
          }
        />
        <Route
          path="/shop"
          element={
            <Suspense fallback={<Loading />}>
              <Shop />
            </Suspense>
          }
        />
        <Route
          path="/contact"
          element={
            <Suspense fallback={<Loading />}>
              <Contact />
            </Suspense>
          }
        />
        <Route
          path="/blog"
          element={
            <Suspense fallback={<Loading />}>
              <Blog />
            </Suspense>
          }
        />
        <Route
          path="/about"
          element={
            <Suspense fallback={<Loading />}>
              <About />
            </Suspense>
          }
        />
        <Route
          path="/sales"
          element={
            <Suspense fallback={<Loading />}>
              <Sales />
            </Suspense>
          }
        />
        <Route
          path="/favorites"
          element={
            <Suspense fallback={<Loading />}>
              <Favorites />
            </Suspense>
          }
        />
        <Route
          path="/cart"
          element={
            <Suspense fallback={<Loading />}>
              <Cart />
            </Suspense>
          }
        />
        <Route
          path="/faq"
          element={
            <Suspense fallback={<Loading />}>
              <Faq />
            </Suspense>
          }
        />
        <Route
          path="/product/:id"
          element={
            <Suspense fallback={<Loading />}>
              <Product />
            </Suspense>
          }
        />
        <Route
          path="/sign-in/*"
          element={
            <div className="flex h-screen w-full items-center justify-center">
              <SignIn routing="path" path="/sign-in" />
            </div>
          }
        />
        <Route
          path="/sign-up/*"
          element={
            <div className="flex h-screen w-full items-center justify-center">
              <SignUp routing="path" path="/sign-up" />
            </div>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </ClerkProvider>
  );
}

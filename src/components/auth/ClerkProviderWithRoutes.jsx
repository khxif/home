import { ClerkProvider, SignIn, SignUp } from "@clerk/clerk-react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Home from "../../pages/Home";
import Shop from "../../pages/Shop";
import Contact from "../../pages/Contact";
import Blog from "../../pages/Blog";
import About from "../../pages/About";
import Sales from "../../pages/Sales";
import Favorites from "../../pages/Favorites";
import Cart from "../../pages/Cart";
import Faq from "../../pages/Faq";
import NotFound from "../../pages/NotFound";

if (!import.meta.env.VITE_REACT_APP_CLERK_PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}

const clerkPubKey = import.meta.env.VITE_REACT_APP_CLERK_PUBLISHABLE_KEY;

export function ClerkProviderWithRoutes() {
  const navigate = useNavigate();

  return (
    <ClerkProvider publishableKey={clerkPubKey} navigate={(to) => navigate(to)}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/about" element={<About />} />
        <Route path="/sales" element={<Sales />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="*" element={<NotFound />} />
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
      </Routes>
    </ClerkProvider>
  );
}
import { Suspense, lazy, useState } from "react";
import { Link } from "react-router-dom";
import Loading from "../components/Loading";

const OtherProducts = lazy(() => import("../components/Cart/OtherProducts"));
const Header = lazy(() => import("../components/Header/Header"));

export default function Cart() {
  // eslint-disable-next-line no-unused-vars
  const [cartItems, setCartItems] = useState([]);
  return (
    <Suspense fallback={<Loading />}>
      <Header />
      {cartItems.length === 0 && (
        <div className="my-4 h-full flex w-full flex-col items-center justify-center space-y-6 py-6">
          <img src="/Cart.png" alt="shopping-cart" />
          <p className="text-2xl font-semibold">Your shopping cart is empty</p>
          <Link to="/">
            <button
              className="btn btn-wide rounded-full bg-[#E9672B] text-white transition-all duration-200 
              ease-in-out hover:bg-[#E9672B] hover:brightness-125"
            >
              Continue Shopping
            </button>
          </Link>
        </div>
      )}
      <div className="mx-auto max-w-7xl bg-white">
        <OtherProducts />
      </div>
    </Suspense>
  );
}

import { useState } from "react";
import Header from "../components/Header/Header";
import { Link } from "react-router-dom";

export default function Cart() {
  // eslint-disable-next-line no-unused-vars
  const [cartItems, setCartItems] = useState([]);
  return (
    <div>
      <Header />
      {cartItems.length === 0 && (
        <div className="w-full flex flex-col space-y-6 my-4 py-6 justify-center items-center">
          <img src="/Cart.png" alt="shopping-cart" />
          <p className="font-semibold text-2xl">Your shopping cart is empty</p>
          <Link to="/">
            <button
              className="btn btn-wide rounded-full text-white bg-[#E9672B] transition-all duration-200 
              ease-in-out hover:bg-[#E9672B] hover:brightness-125"
            >
              Continue Shopping
            </button>
          </Link>
        </div>
      )}
    </div>
  );
}

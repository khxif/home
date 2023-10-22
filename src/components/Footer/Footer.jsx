import { Send } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "sonner";

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      if (!email) return;
      setEmail("");
      toast.success("Thank you for Subscribing!");
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong!");
    }
  };
  return (
    <footer className="bg-black text-white">
      <div
        className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-y-4 px-4
       py-8 md:flex-row md:justify-between md:gap-y-0 md:px-0"
      >
        <div className="space-y-3">
          <img src="/logo-light.png" alt="logo" />
          <p className="text-xs text-[#FBF8F5] sm:text-sm">
            Address: 17 Princess Road, London, Greater London NW1 8JR, UK
          </p>
          <p className="text-xs text-[#FBF8F5] sm:text-sm">
            Phone: (800) 8001-8588, (0600) 874 548
          </p>
          <p className="text-xs text-[#FBF8F5] sm:text-sm">
            Email: info@gmail.com
          </p>
          <span className="flex items-center space-x-3 py-2">
            <img className="cursor-pointer" src="/FacebookIcon.svg" />
            <img className="cursor-pointer" src="/GoogleIcon.svg" />
            <img className="cursor-pointer" src="/InstagramIcon.svg" />
            <img className="cursor-pointer" src="/TwitterIcon.svg" />
          </span>
        </div>

        <div className="hidden items-center space-y-3 md:flex md:gap-6">
          <div className="space-y-3">
            <h2 className="text-base font-medium">Company</h2>
            <div className="flex flex-col space-y-3 text-sm text-[#FBF8F5]">
              <Link to="/about">About us</Link>
              <Link to="/shop">Shop</Link>
              <Link to="/sale">Sale</Link>
              <Link to="/Contact">Contact us</Link>
            </div>
          </div>

          <div className="flex h-fit flex-col items-start space-y-3 text-sm text-[#FBF8F5]">
            <Link to="/about">About us</Link>
            <Link to="/shop">Shop</Link>
            <Link to="/faq">Faqs</Link>
          </div>
        </div>

        <div className="flex flex-col space-y-3">
          <h2 className="text-base font-medium">Newsletter</h2>
          <p className="mt-2 text-xs text-[#FBF8F5] sm:text-sm md:w-[400px]">
            Sign up for our Newsletter to get more events, promotions & news
            from us!
          </p>
          <form
            onSubmit={handleSubmit}
            className="flex w-full items-center justify-between rounded-full bg-[#343535]"
          >
            <input
              placeholder="Enter your email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-transparent px-6 py-2 placeholder:text-sm focus:outline-none"
            />
            <button className="btn btn-circle border-0 bg-[#E9672B] text-white">
              <Send />
            </button>
          </form>
        </div>
      </div>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 pb-4 md:px-0">
        <p className="text-xs text-[#FBF8F5]">
          Copyright © All rights Reserved
        </p>
        <span className="flex items-center space-x-2 sm:space-x-4">
          <img src="/Visa.svg" />
          <img src="/MasterCard.svg" />
          <img src="/PayPal.png" />
        </span>
      </div>
    </footer>
  );
}

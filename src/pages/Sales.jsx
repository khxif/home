import { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "sonner";

export default function Sales() {
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
    <div className="h-screen overflow-hidden bg-black/90">
      <header className="mx-auto flex max-w-7xl items-center px-4 py-6 sm:px-6 md:px-0">
        <Link to="/">
          <img src="/logo-light.png" alt="logo" />
        </Link>
      </header>
      <main
        className="mx-auto my-auto flex h-4/5 max-w-2xl flex-col items-center justify-center space-y-3 px-4 
      text-center text-white sm:px-6 md:px-0 md:text-start"
      >
        <h1 className="text-2xl font-bold md:text-3xl md:leading-[48px]">
          November Lookbook Vol.1
        </h1>
        <p className="text-sm font-normal sm:text-base">
          Sign up to be the first to hear about exclusive deals, special offers
          and upcoming collections
        </p>
        <div className="grid auto-cols-max grid-flow-col gap-5 py-6 text-center">
          <div className="flex flex-col">
            <span className="countdown font-mono text-4xl md:text-6xl">
              <span className="font-bold" style={{ "--value": 15 }}></span>
            </span>
            <p className="font-semibold">Days</p>
          </div>
          <div className="flex flex-col">
            <span className="countdown font-mono text-4xl md:text-6xl">
              <span className="font-bold" style={{ "--value": 10 }}></span>
            </span>
            <p className="font-semibold">Hours</p>
          </div>
          <div className="flex flex-col">
            <span className="countdown font-mono text-4xl md:text-6xl">
              <span className="font-bold" style={{ "--value": 24 }}></span>
            </span>
            <p className="font-semibold">Minutes</p>
          </div>
          <div className="flex flex-col">
            <span className="countdown font-mono text-4xl md:text-6xl">
              <span className="font-bold" style={{ "--value": 59 }}></span>
            </span>
            <p className="font-semibold">Seconds</p>
          </div>
        </div>
        <form
          onSubmit={handleSubmit}
          className="flex w-full justify-center space-x-4 py-2"
        >
          <input
            placeholder="Enter your email here"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="input-bordered input-md w-full flex-1 rounded-full bg-transparent outline 
            outline-1 outline-gray-500 focus:outline focus:outline-white"
          />
          <button
            className="btn btn-md rounded-full border-0 bg-[#E9672B] px-8 text-white transition-all duration-200 
            ease-in-out md:btn-wide hover:bg-[#E9672B] hover:brightness-125 md:px-0 "
          >
            Subscribe
          </button>
        </form>
      </main>
      <footer className="absolute bottom-0 w-full bg-[#F4F4F5] py-6">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 md:px-0">
          <p>Copyright © All rights Reserved</p>
          <p>Privacy & Cookies | Ts&Cs | Accessibility</p>
        </div>
      </footer>
    </div>
  );
}

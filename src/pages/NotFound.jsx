import { Link } from "react-router-dom";
import Header from "../components/Header/Header";
import CarrotImage from "/carrot.png";

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="w-full h-full flex flex-col items-center justify-center py-10 space-y-5">
        <img src={CarrotImage} alt="404" className="py-4" />
        <h1 className="font-bold text-2xl">Oops ! Something went wrong.</h1>
        <p className="text-[#5D5F5F] text-sm">
          The page are looking for has been moved or doesn’t exist anymore.
        </p>
        <Link to="/">
          <button
            type="button"
            className="btn btn-wide rounded-full text-white bg-[#E9672B] transition-all duration-200 ease-in-out
         hover:bg-[#E9672B] hover:brightness-125"
          >
            Back to Homepage
          </button>
        </Link>
      </main>
    </>
  );
}

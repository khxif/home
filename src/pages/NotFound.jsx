import { Link } from "react-router-dom";
import Header from "../components/Header/Header";
import CarrotImage from "/carrot.png";

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="flex h-full w-full flex-col items-center justify-center space-y-5 py-10">
        <img src={CarrotImage} alt="404" className="py-4" />
        <h1 className="text-2xl font-bold">Oops ! Something went wrong.</h1>
        <p className="text-sm text-[#5D5F5F]">
          The page are looking for has been moved or doesn’t exist anymore.
        </p>
        <Link to="/">
          <button
            type="button"
            className="btn btn-wide rounded-full bg-[#E9672B] text-white transition-all duration-200 ease-in-out
         hover:bg-[#E9672B] hover:brightness-125"
          >
            Back to Homepage
          </button>
        </Link>
      </main>
    </>
  );
}

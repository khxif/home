import { Link } from "react-router-dom";
import Header from "../components/Header/Header";
import { faqs } from "../utils/constants";

export default function Faq() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-7xl px-4 py-3 text-3xl md:px-0 md:py-6">
        <h1 className="font-bold">How Can We Help You?</h1>
        <p className="my-4 text-sm text-[#5D5F5F]">
          Below are answers to our most commonly asked questions. If you cannot
          find an answer here, please contact us.
        </p>
        <section className="flex flex-col space-y-4 py-2">
          {faqs.map((faq) => (
            <div
              key={faq.question}
              tabIndex={0}
              className="collapse collapse-arrow border border-base-300"
            >
              <div className="collapse-title flex items-center space-x-6 bg-base-200 font-semibold">
                <span className="text-xs">Question</span>
                <span className="text-sm">{faq?.question}</span>
              </div>
              <div className="collapse-content">
                <p className="p-4 text-sm leading-6">{faq?.answer}</p>
              </div>
            </div>
          ))}
        </section>
        <div
          className="mt-4 flex flex-col items-center justify-center space-x-4 
        space-y-3 py-2 md:flex-row md:justify-end md:space-y-0"
        >
          <p className="text-sm">Unable to find satisfactory answers ?</p>
          <Link to="/contact">
            <button
              type="button"
              className="btn btn-wide rounded-full bg-[#E9672B] text-white transition-all duration-200 ease-in-out
         hover:bg-[#E9672B] hover:brightness-125"
            >
              Contact Us
            </button>
          </Link>
        </div>
      </main>
    </>
  );
}

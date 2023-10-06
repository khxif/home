import { Link } from "react-router-dom";

export default function Slider() {
  return (
    <div className="carousel h-full w-full">
      <div
        id="slide1"
        className="carousel-item relative h-[553px] w-full overflow-hidden"
      >
        <div className="flex w-full flex-col items-center justify-center space-y-3 bg-[#103D37] py-10 text-center">
          <p className="text-sm font-medium uppercase text-[#CDD454]">
            Make real with wood
          </p>
          <h1 className="text-4xl font-bold text-white md:w-[350px] md:leading-[64px]">
            Greate Design Affordable Prices
          </h1>
          <p className="text-lg font-normal text-white">
            We design your home more beautiful
          </p>
          <Link to="/">
            <button
              type="button"
              className="btn btn-wide mt-10 rounded-full border-0 bg-[#E9672B] text-white 
              transition-all duration-200 ease-in-out hover:bg-[#E9672B] hover:brightness-90"
            >
              Explore Now
            </button>
          </Link>
          <div
            className="absolute bottom-0 left-20 flex items-center justify-center rounded-full
           bg-[#0A2925] p-8 md:h-96 md:w-96"
          >
            <img src="/sofa1.png" className="mt-8" />
            <div
              className="absolute right-14 top-10 flex h-24 w-24 flex-col items-center justify-start rounded-full
             bg-black p-4 text-white"
            >
              <span className="text-base">up to</span>
              <span className="flex items-center">
                <p className="text-3xl font-bold">60</p>
                <p className="text-base">%off</p>
              </span>
            </div>
          </div>
          <div
            className="absolute -right-64 -top-40 flex items-end justify-start 
          overflow-hidden rounded-full bg-[#0A2925] md:h-[660px] md:w-[660px]"
          >
            <img src="/sofa2.png" />
          </div>
        </div>
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a
            href="#slide3"
            className="btn btn-circle border-0 bg-[#DE5212] text-white
             hover:bg-[#DE5212] hover:brightness-90"
          >
            ❮
          </a>
          <a
            href="#slide2"
            className="btn btn-circle z-50 border-0 bg-[#DE5212]
            text-white hover:bg-[#DE5212] hover:brightness-90"
          >
            ❯
          </a>
        </div>
      </div>

      <div
        id="slide2"
        className="carousel-item relative w-full overflow-hidden"
      >
        <div className="flex w-full items-center justify-around bg-[#E8E8E8] text-center">
          <img
            src="lamp1.png"
            className="absolute left-12 z-10 bg-transparent"
          />
          <img
            src="lamp2.png"
            className="absolute right-20 z-50 bg-transparent"
          />
          <div
            className="absolute bottom-0 left-4 right-0 top-0 mx-auto my-auto rounded-full bg-white
           md:h-[522px] md:w-[522px]"
          />
          <div
            className="absolute bottom-0 left-0 right-0 top-0 mx-auto my-auto rounded-full bg-white/50
           md:h-[690px] md:w-[690px] "
          />
          <div
            className="absolute bottom-0 left-0 right-0 top-0 mx-auto my-auto rounded-full bg-white/20
           md:h-[858px] md:w-[858px] "
          />
          <div
            className="relative bottom-0 left-0 right-0 top-0 mx-auto my-auto flex flex-col items-center 
          justify-center"
          >
            <div className="flex items-center">
              <span className="flex flex-col items-center space-y-1">
                <p className="text-lg text-[#DE5212]">up to</p>
                <span className="visible flex h-3 w-10 bg-black" />
              </span>
              <span className="text-8xl font-bold ">50</span>
              <span>
                <p className="text-4xl font-bold">%</p>
                <p className="text-lg text-[#DE5212]">off</p>
              </span>
            </div>

            <span className="flex space-x-3 py-4 text-6xl">
              <h1>Holiday</h1>
              <h1 className="text-[#DE5212]">Sale</h1>
            </span>
            <p className="py-2 text-lg font-light text-[#B6B8B8]">
              Interior design and decor for your home
            </p>
            {/* button */}
            <div className="py-2">
              <Link to="/">
                <button
                  type="button"
                  className="btn btn-wide rounded-full bg-[#E9672B] text-white transition-all duration-200 ease-in-out
         hover:bg-[#E9672B] hover:brightness-125"
                >
                  Contact Us
                </button>
              </Link>
            </div>

            <p className="py-2 text-lg font-medium uppercase text-[#CDD454]">
              Select Zwilling Cutlery
            </p>

            <button
              className="btn-circle btn-wide mx-auto my-3 bg-black text-white
                hover:opacity-75 disabled:opacity-50"
            >
              Submit
            </button>
          </div>
        </div>

        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a
            href="#slide1"
            className="btn btn-circle z-50 border-0 bg-[#DE5212]
            text-white hover:bg-[#DE5212] hover:brightness-90"
          >
            ❮
          </a>
          <a
            href="#slide3"
            className="btn btn-circle z-50 border-0 bg-[#DE5212]
            text-white hover:bg-[#DE5212] hover:brightness-90"
          >
            ❯
          </a>
        </div>
      </div>

      <div
        id="slide3"
        className="carousel-item relative w-full overflow-hidden"
      >
        <div className="relative flex w-full items-center justify-center bg-[#fff5eb]">
          <img src="/lamp3.png" className="absolute bottom-0 left-32 z-50" />
          <div className="flex flex-col items-center justify-center space-y-3 text-center">
            <h3 className="text-xl uppercase text-[#EF8C5F]">
              2020’s NEW COLLECTION
            </h3>
            <h1 className="text-4xl font-bold text-[#DE5212] ">
              Long Neck Table Lamp
            </h1>
            <span className="flex items-end justify-center space-x-5 py-4">
              <h1 className="text-6xl font-bold leading-[64px]">$19.99</h1>
              <h1 className="text-center text-4xl font-light leading-[44px] text-[#B6B8B8]">
                $54.20
              </h1>
            </span>
            <p className="w-[373px] text-xl font-light leading-8 text-[#EF8C5F]">
              A midcentury modern statement piece with a tailored profile
            </p>
            <button
              className="btn-circle btn-wide mx-auto mt-8 bg-[#103D37]
                text-white hover:opacity-75"
            >
              Explore Now
            </button>
          </div>
          <img src="/lamp4.png" className="absolute bottom-0 right-28 z-50" />
          <div className="absolute -bottom-16 left-8 flex h-96 w-96 rounded-full bg-[#E9672B66]" />
          <div className="absolute -right-20 -top-14 flex h-[537px] w-[537px] rounded-full bg-[#F4AE8B33]">
            <div
              className="relative left-4 top-96 flex h-40 w-40 items-center justify-center rounded-full 
            bg-[#DA3E31] text-4xl font-bold text-white"
            >
              -30%
            </div>
          </div>
        </div>
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a
            href="#slide2"
            className="btn btn-circle z-50 border-0 bg-[#DE5212]
            text-white hover:bg-[#DE5212] hover:brightness-90"
          >
            ❮
          </a>
          <a
            href="#slide1"
            className="btn btn-circle z-50 border-0 bg-[#DE5212]
            text-white hover:bg-[#DE5212] hover:brightness-90"
          >
            ❯
          </a>
        </div>
      </div>
    </div>
  );
}

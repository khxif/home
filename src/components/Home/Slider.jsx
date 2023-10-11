import { Link } from "react-router-dom";

export default function Slider() {
  return (
    <div className="carousel h-full w-full">
      <div
        id="slide1"
        className="carousel-item relative h-[553px] w-full overflow-hidden"
      >
        <div className="flex w-full flex-col items-center justify-center space-y-3 bg-[#103D37] px-4 py-10 text-center">
          <p className="text-sm font-medium uppercase text-[#CDD454]">
            Make real with wood
          </p>
          <h1 className="text-2xl font-bold text-white md:w-[350px] md:text-4xl md:leading-[64px]">
            Greate Design Affordable Prices
          </h1>
          <p className="text-base font-normal text-white md:text-lg">
            We design your home more beautiful
          </p>
          <Link to="/" className="mb-2 md:mb-0">
            <button type="button" className="orange-btn mt-2 md:mt-10">
              Explore Now
            </button>
          </Link>
          <div
            className="absolute -bottom-6 -left-6 flex h-40 w-40 items-center justify-center
           rounded-full bg-[#0A2925] p-4 md:left-20 md:h-96 md:w-96 md:p-8"
          >
            <img src="/sofa1.png" className="mt-8" />
            <div
              className="absolute -right-2 -top-1 flex h-20 w-20 flex-col items-center justify-start
               rounded-full bg-black p-4 text-white md:right-14 md:top-10 md:h-24 md:w-24"
            >
              <span className="text-sm md:text-base">up to</span>
              <span className="flex items-center">
                <p className="text-xl font-bold md:text-3xl">60</p>
                <p className="text-sm md:text-base">%off</p>
              </span>
            </div>
          </div>
          <div
            className="absolute -right-6 -top-6 flex h-40 w-40 items-end justify-start overflow-hidden 
          rounded-full bg-[#0A2925] md:-right-64 md:-top-40 md:h-[660px] md:w-[660px] md:p-0"
          >
            <img src="/sofa2.png" />
          </div>
        </div>
        <div
          className="absolute -left-5 -right-5 top-1/2 flex -translate-y-1/2 transform justify-between 
        md:left-5 md:right-5"
        >
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
            className="absolute left-2.5 w-24 bg-transparent md:left-12 md:z-10 md:w-auto"
          />
          <img
            src="lamp2.png"
            className="absolute right-2.5 w-32 bg-transparent md:right-20 md:z-50 md:w-auto"
          />
          <div
            className="absolute bottom-0 left-4 right-0 top-0 mx-auto my-auto h-32
             w-32 rounded-full bg-white sm:h-48 sm:w-48 md:h-[522px] md:w-[522px]"
          />
          <div
            className="absolute bottom-0 left-0 right-0 top-0 mx-auto my-auto h-48 w-48
           rounded-full bg-white/50 sm:h-64 sm:w-64 md:h-[690px] md:w-[690px]"
          />
          <div
            className="absolute bottom-0 left-0 right-0 top-0 mx-auto my-auto h-64 w-64
           rounded-full bg-white/20 sm:h-80 sm:w-80 md:h-[858px] md:w-[858px]"
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
              <span className="text-5xl font-bold sm:text-6xl md:text-8xl ">
                50
              </span>
              <span>
                <p className="text-4xl font-bold">%</p>
                <p className="text-lg text-[#DE5212]">off</p>
              </span>
            </div>

            <span className="flex space-x-3 py-4 text-4xl sm:text-5xl md:text-6xl">
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
                  className="btn btn-wide rounded-full bg-[#E9672B] text-white transition-all duration-200 
                  ease-in-out hover:bg-[#E9672B] hover:brightness-125"
                >
                  Contact Us
                </button>
              </Link>
            </div>

            <p className="z-50 py-2 text-base font-medium uppercase text-[#CDD454] md:text-lg">
              Select Zwilling Cutlery
            </p>

            <button
              className="btn-circle btn-wide mx-auto my-3 bg-[#103D37] text-white
                hover:opacity-75 disabled:opacity-50"
            >
              Explore Now
            </button>
          </div>
        </div>

        <div
          className="absolute -left-5 -right-5 top-1/2 flex -translate-y-1/2 transform justify-between 
        md:left-5 md:right-5"
        >
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
        <div className="relative flex w-full items-center justify-center bg-[#fff5eb] ">
          <img
            src="/lamp3.png"
            className="absolute bottom-0 left-10 z-50 w-24 md:left-32 md:w-auto"
          />
          <div className="flex flex-col items-center justify-center space-y-3 text-center">
            <h3 className="text-lg uppercase text-[#EF8C5F] md:text-xl">
              2020’s NEW COLLECTION
            </h3>
            <h1 className="text-2xl sm:text-3xl font-bold text-[#DE5212] md:text-4xl ">
              Long Neck Table Lamp
            </h1>
            <span className="flex items-center justify-center space-x-5 py-0 md:py-4">
              <h1 className="text-3xl font-bold leading-[64px] sm:text-5xl md:text-6xl">
                $19.99
              </h1>
              <h1 className="text-center text-2xl sm:text-3xl font-light leading-[44px] text-[#B6B8B8] md:text-4xl">
                $54.20
              </h1>
            </span>
            <p className="px-2 md:w-[373px] text-base sm:text-lg font-light leading-8 text-[#EF8C5F] md:text-xl">
              A midcentury modern statement piece with a tailored profile
            </p>
            <button
              className="btn-circle btn-wide mx-auto bg-[#103D37] text-white
                hover:opacity-75 md:mt-8 z-10"
            >
              Explore Now
            </button>
          </div>
          <img
            src="/lamp4.png"
            className="absolute right-4 top-2 z-50 w-24 md:bottom-0 md:right-28 md:w-auto"
          />
          <div
            className="absolute -bottom-8 -left-8 flex h-52 w-52 rounded-full bg-[#E9672B66] md:-bottom-16 
            md:left-8 md:h-96 md:w-96"
          />
          <div
            className="absolute -right-8 -top-8 flex h-60 w-60 rounded-full bg-[#F4AE8B33] md:-right-20
           md:-top-14 md:h-[537px] md:w-[537px]"
          >
            <div
              className="relative flex h-20 w-20 items-center justify-center rounded-full bg-[#DA3E31] text-2xl
               font-bold text-white top-10 sm:text-3xl md:left-4 md:top-96 md:h-40 md:w-40 md:text-4xl"
            >
              -30%
            </div>
          </div>
        </div>
        <div
          className="absolute -left-5 -right-5 top-1/2 flex -translate-y-1/2 transform justify-between 
        md:left-5 md:right-5"
        >
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

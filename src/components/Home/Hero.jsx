import Slider from "./Slider";

export default function Hero() {
  return (
    <section className="w-full grid-cols-3 gap-4 space-y-4 pb-4 md:grid md:space-y-0">
      <div className="col-span-3 row-span-2 h-[553px]">
        <Slider />
      </div>
      <div className="row-span-2 flex flex-col items-center justify-center space-y-2 bg-[#E8E8E8] p-6">
        <span className="flex flex-col items-start">
          <h1 className="text-4xl font-bold text-[#DE5212]">Special Offer</h1>
          <p className="flex space-x-2">
            <p className="text-2xl font-light">on</p>
            <p className="text-2xl font-bold">Furniture</p>
          </p>
        </span>
        <p className="px-2 text-center text-sm font-light text-[#5D5F5F]">
          Gently sloping curves and large dual cushions create a favorite
          lounging spot
        </p>
        <div className="relative flex">
          <img src="/chair.png" />
          <div
            className="absolute right-12 top-8 flex h-24 w-24 flex-col items-center justify-center rounded-full 
            bg-[#DA3E31]  text-white"
          >
            <p className="font-bold">from</p>
            <h1 className="text-xl font-bold">$39.99</h1>
          </div>
        </div>
        <button className="white-btn mt-auto justify-end px-6 md:px-10 py-2">Shop Now</button>
      </div>
      <div className=" bg-[#F4F4F5]">3</div>
      <div className=" flex h-full w-full flex-col items-center justify-center bg-[#CDD454] p-4 text-center">
        <h1 className="mt-3 flex w-52 flex-col space-y-2 text-2xl font-medium">
          <h1>Rivet Geometric</h1>
          <h1>Ceramic Wallclock</h1>
        </h1>

        <span className="flex items-center justify-center space-x-4 py-4">
          <h1 className="text-3xl font-bold leading-10 text-[#DA3E31]">
            $19.99
          </h1>
          <h1 className="text-3xl font-bold leading-10 text-[#DA3E31]/25 ">
            $54.20
          </h1>
        </span>

        <img src="/clock.png" />
      </div>
      <div className="col-span-2 flex w-full items-center justify-around bg-[#FDF2E8]  p-4">
        <div>
          <h4 className="text-xl text-[#E9672B] md:w-48">
            Myriam’s Garden Wall Art
          </h4>
          <span className="flex items-center space-x-4 py-4">
            <h1 className="text-xl font-bold leading-10 ">$42.13</h1>
            <h1 className="text-xl font-bold leading-10 text-[#E8CFB5] ">
              $42.13
            </h1>
          </span>
          <button className="white-btn px-6 md:px-10">Shop Now</button>
        </div>
        <div className="relative">
          <img src="/wallart.png" />
          <div
            className="absolute -right-4 -top-3 flex h-16 w-16 items-center justify-center rounded-full
             bg-[#DA3E31] text-xl font-bold text-white sm:right-0 sm:top-0 sm:text-3xl md:h-28 md:w-28
              md:text-4xl"
          >
            -30%
          </div>
        </div>
      </div>
    </section>
  );
}

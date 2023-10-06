import Slider from "./Slider";

export default function Hero() {
  return (
    <section className="grid w-full grid-cols-3 gap-4">
      <div className="col-span-3 row-span-2 h-[553px]">
        <Slider />
      </div>
      <div className="row-span-2 bg-[#E8E8E8]">2</div>
      <div className=" bg-[#F4F4F5]">3</div>
      <div className=" flex h-full w-full flex-col items-center justify-center bg-[#CDD454] p-4 text-center">
        <h1 className="flex w-52 flex-col space-y-2 text-2xl font-medium">
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
      <div className="col-span-2  bg-[#FDF2E8]">6</div>
    </section>
  );
}

import ColorSelector from "./ColorSelector";

export default function ProductCard() {
  const offer = true;
  return (
    <div className="card relative transition-all duration-200 ease-in-out">
      {offer && (
        <div className="absolute left-0 top-0 md:top-4 flex h-10 w-10 items-center justify-center rounded-full 
        bg-[#CDD454] md:h-14 md:w-14">
          <h4 className="text-xs md:text-sm font-bold">-50%</h4>
        </div>
      )}
      <img
        src="/clock.png"
        alt="product-image"
        className="h-28 object-contain md:h-48"
      />
      <div className="card-body my-0 space-y-2 px-2 py-0 text-center md:py-2">
        <div>
          <ColorSelector />
        </div>
        <p className="text-base text-[#5D5F5F]">Bucklo Wrop Wooden Table</p>
        <h4 className="text-base font-bold">$69.36</h4>
        <button className="btn px-2 md:px-4 border-0 bg-transparent text-[#E9672B] outline-none">
          Add to Cart
        </button>
      </div>
    </div>
  );
}

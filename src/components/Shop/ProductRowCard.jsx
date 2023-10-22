import { Link } from "react-router-dom";

export default function ProductRowCard() {
  const offer = true;
  return (
    <div className="relative flex items-center transition-all duration-200 ease-in-out">
      {offer && (
        <div
          className="absolute left-2 top-8 flex h-10 w-10 items-center justify-center rounded-full bg-[#CDD454] 
        md:top-4 md:h-14 md:w-14"
        >
          <h4 className="text-xs font-bold md:text-sm">-50%</h4>
        </div>
      )}
      <img
        src="/clock.png"
        alt="product-image"
        className="h-28 bg-white object-contain md:h-48"
      />
      <div className="flex flex-1 flex-col space-y-2 py-4">
        <p className="text-base font-bold text-[#5D5F5F]">
          Bucklo Wrop Wooden Table
        </p>
        <p className="line-clamp-2">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut quasi
          aperiam ducimus aliquam ipsum ab enim ad voluptatum autem iusto, fugit
          dolorum, illo placeat ullam? Facilis repellendus enim quidem saepe?
        </p>
        <h4 className="text-base font-bold">$69.36</h4>
        <Link to="/product/123">
          <button className="btn border-0  bg-transparent px-0 text-[#E9672B] hover:bg-transparent">
            Add to Cart
          </button>
        </Link>
      </div>
    </div>
  );
}

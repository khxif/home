import { MinusIcon, PlusIcon } from "lucide-react";

// eslint-disable-next-line react/prop-types
export default function Quantity({ quantity, setQuantity }) {
  return (
    <span className="flex w-full items-center space-x-8">
      <h1 className="text-base font-normal">Quantity</h1>
      <span className="flex w-full items-center justify-between border-b-2 border-black py-2 ">
        <button disabled={quantity === 1} className="disabled:text-[#B6B8B8]">
          <MinusIcon
            onClick={() => setQuantity((prev) => prev - 1)}
            className="h-6 w-6 cursor-pointer "
          />
        </button>
        <p className="text-sm font-bold">{quantity}</p>
        <button>
          <PlusIcon
            onClick={() => setQuantity((prev) => prev + 1)}
            className="h-6 w-6 cursor-pointer"
          />
        </button>
      </span>
    </span>
  );
}

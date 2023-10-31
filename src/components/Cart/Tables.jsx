import { X } from "lucide-react";

export default function Tables() {
  return (
    <div className="border border-[#E3E3E3]">
      <table className="table">
        {/* head */}
        <thead>
          <tr className="text-base font-normal text-[#5D5F5F]">
            <th></th>
            <th>Products</th>
            <th>Total</th>
            <th>Availabel</th>
            <th>Quantity</th>
            <th> </th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          <tr>
            <th>
              <X className="h-5 w-5 cursor-pointer text-[#5D5F5F]" />
            </th>
            <td>
              <div className="flex items-center">
                <img
                  src="/clock.png"
                  alt="product-image"
                  className="h-24 w-24 object-contain"
                />
                <div className="hidden flex-col space-y-2 md:flex">
                  <h2 className="text-sm font-medium">
                    Bucklo Wrop Wooden Table
                  </h2>
                  <span className="flex space-x-2 text-xs font-normal">
                    <p>Color: </p>
                    <p>Brown</p>
                  </span>
                  <span className="flex space-x-2 text-xs font-normal">
                    <p>Dimensions: </p>
                    <p>40x60</p>
                  </span>
                </div>
              </div>
            </td>
            <td className="text-base font-bold">$69.36</td>
            <td className="text-[#DA3E31]">In Stock</td>
            <td>
              <select className="select select-bordered w-28 min-w-max rounded-full focus:outline-none">
                {[...Array(20)].map((_, i) => (
                  <option key={i}>{i + 1}</option>
                ))}
              </select>
            </td>
            <td className="mt-4 flex h-full justify-center space-x-4">
              <button className="white-btn my-auto border border-[#E9672B] text-center">
                View Product
              </button>
              <button className="orange-btn my-auto max-w-fit px-10">
                Add to Cart
              </button>
            </td>
          </tr>
          {/* row 2 */}
          
        </tbody>
      </table>
    </div>
  );
}

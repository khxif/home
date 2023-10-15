import Select from "react-select";
import Header from "../components/Header/Header";
import ShopHero from "../components/Shop/ShopHero";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
import ProductsGrid from "../components/Shop/ProductsGrid";
import Collapsible from "react-collapsible";
import ColorSelector from "../components/Home/ColorSelector";
import ReactPaginate from "react-paginate";

const options = [
  { value: "low to high", label: "Price(low to high)" },
  { value: "high to low", label: "Price(high to low)" },
];

export default function Shop() {
  const [selectedOption, setSelectedOption] = useState(null);
  const [category, setCategory] = useState("");

  return (
    <>
      <Header />
      <main className="h-full">
        <ShopHero />
        <section className="mx-auto flex h-full max-w-7xl space-x-20 py-6">
          <section className="flex max-w-xs  flex-col px-2 py-4">
            <div className=" py-2">
              <h1 className="text-xl">Filter</h1>
            </div>

            <div className="flex flex-col items-start space-y-8 py-2">
              <Collapsible
                className="font-semibold"
                openedClassName="flex flex-col space-y-3"
                trigger="Categories"
              >
                <div className="space-y-4">
                  <span className="flex w-40 cursor-pointer items-center space-x-2">
                    <input
                      type="checkbox"
                      value={category}
                      onClick={() => setCategory(category ? "" : "acessories")}
                      className="checkbox-warning checkbox checkbox-sm rounded-md"
                    />
                    <label
                      className={twMerge(
                        "cursor-pointer text-base font-medium text-[#5D5F5F]",
                        category && "text-orange-400",
                      )}
                    >
                      Accessories
                    </label>
                  </span>

                  <span className="flex w-40 cursor-pointer items-center space-x-2">
                    <input
                      type="checkbox"
                      value={category}
                      onClick={() => setCategory(category ? "" : "books")}
                      className="checkbox-warning checkbox checkbox-sm rounded-md"
                    />
                    <label
                      className={twMerge(
                        "cursor-pointer text-base font-medium text-[#5D5F5F]",
                        category && "text-orange-400",
                      )}
                    >
                      Accessories
                    </label>
                  </span>
                </div>
              </Collapsible>

              <Collapsible
                className="font-semibold"
                openedClassName="flex flex-col space-y-3"
                trigger="Types"
              >
                <div className="space-y-4">
                  <span className="space-x- flex w-40 cursor-pointer items-center">
                    <input
                      type="checkbox"
                      value={category}
                      onClick={() => setCategory(category ? "" : "acessories")}
                      className="checkbox-warning checkbox checkbox-sm rounded-md"
                    />
                    <label
                      className={twMerge(
                        "cursor-pointer text-base font-medium text-[#5D5F5F]",
                        category && "text-orange-400",
                      )}
                    >
                      Accessories
                    </label>
                  </span>

                  <span className="flex w-40 cursor-pointer items-center space-x-2">
                    <input
                      type="checkbox"
                      value={category}
                      onClick={() => setCategory(category ? "" : "books")}
                      className="checkbox-warning checkbox checkbox-sm rounded-md"
                    />
                    <label
                      className={twMerge(
                        "cursor-pointer text-base font-medium text-[#5D5F5F]",
                        category && "text-orange-400",
                      )}
                    >
                      Accessories
                    </label>
                  </span>
                </div>
              </Collapsible>

              <Collapsible
                className="font-semibold"
                openedClassName="flex flex-col space-y-3"
                trigger="Colors"
              >
                <ColorSelector />
              </Collapsible>

              <Collapsible
                className="font-semibold"
                openedClassName="flex flex-col space-y-3"
                trigger="Price Range"
              >
                <input
                  type="range"
                  min="0"
                  max="2000"
                  className="slider bg-orange-600"
                />
              </Collapsible>

              <div className="flex flex-col items-center justify-center space-y-2 bg-[#E8E8E8] p-6">
                <span className="flex flex-col items-start">
                  <h1 className="text-4xl font-bold text-[#DE5212]">
                    Special Offer
                  </h1>
                  <p className="flex space-x-2">
                    <p className="text-2xl font-light">on</p>
                    <p className="text-2xl font-bold">Furniture</p>
                  </p>
                </span>
                <p className="px-2 text-center text-sm font-light text-[#5D5F5F]">
                  Gently sloping curves and large dual cushions create a
                  favorite lounging spot
                </p>
                <div className="relative flex">
                  <img src="/chair.png" />
                  <div
                    className="absolute right-10 top-2 flex h-20 w-20 flex-col items-center justify-center 
                    rounded-full bg-[#DA3E31]  text-white"
                  >
                    <p className="font-medium">from</p>
                    <h1 className="text-lg font-bold">$39.99</h1>
                  </div>
                </div>
                <button className="white-btn mt-auto justify-end px-6 py-2 md:px-10">
                  Shop Now
                </button>
              </div>
            </div>
          </section>

          <section className="w-full flex-1 px-2 py-4">
            <div className="flex w-full items-center space-x-5">
              <Select
                className="w-1/4"
                placeholder="Show"
                options={[...Array(20)].map((_, i) => ({
                  label: (i + 1).toString(),
                  value: (i + 1).toString(),
                }))}
                onChange={setSelectedOption}
                defaultValue={selectedOption}
              />

              <Select
                className="w-1/4"
                placeholder="Sort by"
                options={options}
                onChange={setSelectedOption}
                defaultValue={selectedOption}
              />
            </div>

            <div className="py-4">
              <ProductsGrid />
            </div>
            <div className="flex w-full items-center justify-center">
              <ReactPaginate
                className="flex items-center space-x-4"
                previousClassName="p-2 border border-black font-medium rounded-md"
                nextClassName="p-2 border border-black font-medium rounded-md"
                activeClassName="px-4 py-2 font-medium bg-black text-white rounded-md"
                breakLabel="..."
                nextLabel="Next"
                pageRangeDisplayed={3}
                pageCount={20}
                previousLabel="Prev"
                renderOnZeroPageCount={null}
              />
            </div>
          </section>
        </section>
      </main>
    </>
  );
}

/* eslint-disable react/prop-types */
import { X } from "lucide-react";
import Collapsible from "react-collapsible";
import { twMerge } from "tailwind-merge";
import ColorSelector from "../Home/ColorSelector";

export default function ShopSidebar({
  filters,
  categoriesCheckedBox,
  typesCheckedBox,
  handleCategoriesCheckBox,
  handleTypesCheckBox,
}) {
  return (
    <section className="relative z-50 h-full hidden flex-col px-2 py-4 md:flex md:max-w-xs">
      <div className=" py-2">
        <h1 className="text-xl">Filter</h1>
        <div className="mr-auto flex items-center space-x-4 py-4">
          {filters?.map((filter) => (
            <p
              className="flex cursor-pointer space-x-4"
              // onClick={removeFilters(filter)}
              key={filter}
            >
              <X className={` ${filter === "" && "hidden"}`} />
              {filter}
            </p>
          ))}
        </div>
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
                checked={categoriesCheckedBox === "Accessories"}
                onChange={() => handleCategoriesCheckBox("Accessories")}
                className="checkbox-warning checkbox checkbox-sm rounded-md"
              />
              <label
                className={twMerge(
                  "cursor-pointer text-base font-medium text-[#5D5F5F]",
                )}
              >
                Accessories
              </label>
            </span>

            <span className="flex w-40 cursor-pointer items-center space-x-2">
              <input
                type="checkbox"
                checked={categoriesCheckedBox === "Gadgets"}
                onChange={() => handleCategoriesCheckBox("Gadgets")}
                className="checkbox-warning checkbox checkbox-sm rounded-md"
              />
              <label
                className={twMerge(
                  "cursor-pointer text-base font-medium text-[#5D5F5F]",
                )}
              >
                Gadgets
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
            <span className="flex w-40 cursor-pointer items-center space-x-2">
              <input
                type="checkbox"
                checked={typesCheckedBox === "Wooden"}
                onChange={() => handleTypesCheckBox("Wooden")}
                className="checkbox-warning checkbox checkbox-sm rounded-md"
              />
              <label
                className={twMerge(
                  "cursor-pointer text-base font-medium text-[#5D5F5F]",
                )}
              >
                Wooden
              </label>
            </span>

            <span className="flex w-40 cursor-pointer items-center space-x-2">
              <input
                type="checkbox"
                checked={typesCheckedBox === "Iron"}
                onChange={() => handleTypesCheckBox("Iron")}
                className="checkbox-warning checkbox checkbox-sm rounded-md"
              />
              <label
                className={twMerge(
                  "cursor-pointer text-base font-medium text-[#5D5F5F]",
                )}
              >
                Iron
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

        <div className="hidden flex-col items-center justify-center space-y-2 bg-[#E8E8E8] p-6 md:flex">
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
  );
}

import { LayoutGrid, Rows } from "lucide-react";
import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import Select from "react-select";
import { twMerge } from "tailwind-merge";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import ProductRow from "../components/Shop/ProductRow";
import ProductsGrid from "../components/Shop/ProductsGrid";
import ShopHero from "../components/Shop/ShopHero";
import ShopSidebar from "../components/Shop/ShopSidebar";

const options = [
  { value: "low to high", label: "Price(low to high)" },
  { value: "high to low", label: "Price(high to low)" },
];

export default function Shop() {
  const [selectedOption, setSelectedOption] = useState(null);
  const [categoriesCheckedBox, setCategoriesCheckBox] = useState("");
  const [typesCheckedBox, setTypesCheckBox] = useState("");
  const [filters, setFilters] = useState([]);
  const [mode, setMode] = useState("grid");

  const handleCategoriesCheckBox = (checkBoxName) => {
    if (categoriesCheckedBox === checkBoxName) setCategoriesCheckBox("");
    else setCategoriesCheckBox(checkBoxName);
  };

  const handleTypesCheckBox = (checkBoxName) => {
    if (typesCheckedBox === checkBoxName) setTypesCheckBox("");
    else setTypesCheckBox(checkBoxName);
  };

  // const removeFilters = (checkBoxName) => {
  //   const index = filters.indexOf(checkBoxName);
  //   console.log(index);
  //   // delete filters[index]
  // };

  useEffect(() => {
    setFilters([categoriesCheckedBox, typesCheckedBox]);
    console.log(filters);
  }, [categoriesCheckedBox, typesCheckedBox]);

  return (
    <>
      <Header />
      <main className="h-full">
        <ShopHero />
        <section className="mx-auto flex h-full max-w-7xl px-4 py-6 md:space-x-20 md:px-0">
          <ShopSidebar
            handleCategoriesCheckBox={handleCategoriesCheckBox}
            handleTypesCheckBox={handleTypesCheckBox}
            categoriesCheckedBox={categoriesCheckedBox}
            typesCheckedBox={typesCheckedBox}
            filters={filters}
          />

          <section className="w-full flex-1 px-2 py-4">
            <div className="flex items-center justify-between">
              <div className="flex w-full items-center space-x-5">
                <Select
                  className="w-max md:w-1/4"
                  placeholder="Show"
                  options={[...Array(20)].map((_, i) => ({
                    label: (i + 1).toString(),
                    value: (i + 1).toString(),
                  }))}
                  onChange={setSelectedOption}
                  defaultValue={selectedOption}
                />

                <Select
                  className="w-max md:w-1/4"
                  placeholder="Sort by"
                  options={options}
                  onChange={setSelectedOption}
                  defaultValue={selectedOption}
                />
              </div>
              <div className="flex items-center space-x-4">
                <LayoutGrid
                  onClick={() => setMode("grid")}
                  className={twMerge(
                    "h-5 w-5 cursor-pointer",
                    mode === "grid" && "text-[#DE5212]",
                  )}
                />
                <Rows
                  onClick={() => setMode("row")}
                  className={twMerge(
                    "h-5 w-5 cursor-pointer",
                    mode === "row" && "text-[#DE5212]",
                  )}
                />
              </div>
            </div>

            <div className="py-4">
              {mode == "grid" ? <ProductsGrid /> : <ProductRow />}
            </div>
            <div className="flex w-full items-center justify-center">
              <ReactPaginate
                className="flex items-center space-x-4"
                previousClassName="p-2 border border-black font-medium rounded-md"
                nextClassName="p-2 border border-black font-medium rounded-md"
                activeClassName="px-4 py-2 font-medium bg-black text-white rounded-md"
                breakLabel="..."
                nextLabel="Next"
                pageRangeDisplayed={2}
                pageCount={10}
                previousLabel="Prev"
                renderOnZeroPageCount={null}
              />
            </div>
          </section>
        </section>
      </main>
      <Footer />
    </>
  );
}

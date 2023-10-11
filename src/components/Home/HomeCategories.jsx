import { categories, productTypes } from "../../utils/constants";

export default function HomeCategories() {
  return (
    <section
      className="livingroom-bg mb-4 flex  w-full  flex-col px-4 md:px-10 
        py-6 text-center text-white"
    >
      <div className="flex w-full flex-col items-center justify-center">
        <h1 className="py-2 text-2xl md:text-3xl font-bold text-white">
          Popular Categories
        </h1>
        <div className="grid gap-y-2 text-sm md:text-base grid-cols-3 mx-auto text-center md:grid-cols-5 font-semibold w-full 
        items-center justify-center border-b-2 py-4 md:py-8">
          {categories.map((category) => (
            <div key={category}>{category}</div>
          ))}
        </div>
        <div className="grid grid-cols-3 md:grid-cols-5 justify-between w-full py-5 gap-x-2 text-xs md:text-sm 
        gap-y-4 md:gap-4">
            {
                productTypes.map((product) => (
                    <h4 key={product}>
                        {product}
                    </h4>
                ))
            }
        </div>
      </div>
    </section>
  );
}

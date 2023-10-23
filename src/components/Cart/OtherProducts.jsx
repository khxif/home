import ProductCard from "../Home/ProductCard";

export default function OtherProducts() {
  return (
    <section className="bg-white px-4 md:px-0  pt-8">
      <div className="mx-auto flex max-w-7xl flex-col space-y-4">
        <h1 className="text-3xl font-bold text-center">
        Other Products You&apos;ll Love
        </h1>
        <div className="grid grid-cols-2 gap-4 py-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
    </section>
  );
}

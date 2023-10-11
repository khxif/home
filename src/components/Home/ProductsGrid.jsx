import ProductCard from "./ProductCard";

export default function ProductsGrid() {
  return (
    <section className="grid grid-cols-2 py-6 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        <ProductCard />
        <ProductCard /> 
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
    </section>
  )
}

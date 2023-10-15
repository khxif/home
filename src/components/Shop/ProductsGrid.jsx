import ProductCard from "../Home/ProductCard";

export default function ProductsGrid() {
  return (
    <section className="grid grid-cols-2 py-6 gap-4 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4">
        <ProductCard />
        <ProductCard /> 
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
    </section>
  )
}
import ProductRowCard from "./ProductRowCard";

export default function ProductRow() {
  return (
    <div className="grid grid-cols-1 gap-2 py-2 md:gap-4 md:py-4">
      <ProductRowCard />
      <ProductRowCard />
      <ProductRowCard />
      <ProductRowCard />
    </div>
  );
}

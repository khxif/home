import { motion } from "framer-motion";
import ProductCard from "../Home/ProductCard";

export default function ProductsGrid() {
  return (
    <motion.section
      initial={{ x: "-100%" }}
      animate={{ x: 0 }}
      transition={{ duration: 0.75 }}
      className="grid grid-cols-2 gap-4 py-6 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4"
    >
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </motion.section>
  );
}

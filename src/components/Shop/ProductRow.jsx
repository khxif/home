import { motion } from "framer-motion";
import ProductRowCard from "./ProductRowCard";

export default function ProductRow() {
  return (
    <motion.div
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      transition={{ duration: 0.75 }}
      className="grid grid-cols-1 gap-2 py-2 md:gap-4 md:py-4"
    >
      <ProductRowCard />
      <ProductRowCard />
      <ProductRowCard />
      <ProductRowCard />
    </motion.div>
  );
}

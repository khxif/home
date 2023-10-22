import { motion } from "framer-motion";

export default function ShopHero() {
  return (
    <section className="shop-hero  w-full ">
      <motion.div
        animate={{ x: 0 }}
        initial={{ x: "100%" }}
        transition={{ duration: 0.75 }}
        className="flex flex-col items-center justify-center space-y-3 text-center h-full"
      >
        <p className="text-sm font-normal text-[#5D5F5F]">
          Home {`>`} Living room
        </p>
        <h1 className="text-5xl font-bold leading-[72px]">Living Room</h1>
        <p className="text-xl font-normal text-[#5D5F5F]">
          Shop our newest items, made with love by the world’s best artisans.
        </p>
      </motion.div>
    </section>
  );
}

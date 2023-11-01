import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

// eslint-disable-next-line react/prop-types
export default function Reveal({ children }) {
  const ref = useRef(null);
  const inView = useInView(ref,{once: true});
  const mainControl = useAnimation();

  useEffect(() => {
    inView && mainControl.start("visible");
  });
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 100 },
        visible: { opacity: 1, y: 0 },
      }}
      ref={ref}
      initial="hidden"
      animate={mainControl}
      transition={{ duration: 0.7 }}
    >
      {children}
    </motion.div>
  );
}

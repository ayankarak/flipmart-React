import { motion } from "motion/react";
import ProductCard from "./ProductCard";

function AnimatedProductCard({ product, index = 0, showRating = false }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.55,
        delay: (index % 6) * 0.1,
        ease: "easeOut",
      }}
      whileHover={{
        y: -8,
        transition: { duration: 0.25 },
      }}
    >
      <ProductCard product={product} showRating={showRating} />
    </motion.div>
  );
}

export default AnimatedProductCard;

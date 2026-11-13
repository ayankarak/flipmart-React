
import { motion } from "motion/react";
import CategoryItem from "../molecules/CategoryItem";
import categories from "../../data/categories";

function CategoryNavbar() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="w-full border-b border-gray-100 bg-white px-5 py-4"
    >
      <div className="mx-auto flex max-w-[1440px] justify-start gap-6 overflow-x-auto whitespace-nowrap pb-2 sm:justify-between">

        {categories.map((category, index) => (
          <motion.div
            key={category.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.4,
              delay: index * 0.07,
            }}
            whileHover={{ y: -5, scale: 1.05 }}
          >
            <CategoryItem {...category} />
          </motion.div>
        ))}

      </div>
    </motion.nav>
  );
}

export default CategoryNavbar;

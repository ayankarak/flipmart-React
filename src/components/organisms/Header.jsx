import { motion } from "motion/react";
import { Heart, UserRound, ShoppingBag } from "lucide-react";

import Logo from "../atoms/Logo";
import Button from "../atoms/Button";
import IconButton from "../atoms/IconButton";
import SearchBar from "../molecules/SearchBar";

const headerIcons = [
  { icon: Heart, label: "Wishlist", to: "/wishlist" },
  { icon: UserRound, label: "Account", to: "/account" },
  { icon: ShoppingBag, label: "Cart", to: "/cart" },
];

function Header() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full border-b border-gray-100 bg-white px-3 py-3 sm:px-5"
    >
      <div className="mx-auto flex max-w-[1440px] flex-wrap items-center justify-between gap-3">

        {/* Logo */}
        <motion.div whileHover={{ scale: 1.05 }}>
          <Logo />
        </motion.div>

        {/* Search Bar */}
        <motion.div
          whileHover={{ scale: 1.01 }}
          className="order-3 w-full md:order-none md:flex-1 md:max-w-2xl"
        >
          <SearchBar />
        </motion.div>

        {/* Vendor Button */}
        <motion.div
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
          className="hidden md:block"
        >
          <Button className="shrink-0">Become a Vendor</Button>
        </motion.div>

        {/* Icons */}
        <div className="flex items-center gap-1">
          {headerIcons.map(({ icon, label, to }) => (
            <motion.div
              key={label}
              whileHover={{ scale: 1.15, y: -3 }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.2 }}
            >
              <IconButton icon={icon} label={label} to={to} />
            </motion.div>
          ))}
        </div>

      </div>
    </motion.header>
  );
}

export default Header;

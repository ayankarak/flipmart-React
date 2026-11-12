
import { Heart, UserRound, ShoppingBag } from "lucide-react";

import Logo from "../atoms/Logo";
import Button from "../atoms/Button";
import IconButton from "../atoms/IconButton";
import SearchBar from "../molecules/SearchBar";

function Header() {
  return (
    <header className="w-full border-b border-gray-100 bg-white px-3 py-3 sm:px-5">
      <div className="mx-auto flex max-w-[1440px] flex-wrap items-center justify-between gap-3">

        {/* Logo */}
        <Logo />

        {/* Search Bar */}
        <div className="order-3 w-full md:order-none md:flex-1 md:max-w-2xl">
          <SearchBar />
        </div>

        {/* Vendor Button */}
        <div className="hidden md:block">
          <Button className="shrink-0">
            Become a Vendor
          </Button>
        </div>

        {/* Icons */}
        <div className="flex items-center gap-1">
          <IconButton icon={Heart} label="Wishlist" />
          <IconButton icon={UserRound} label="Account" />
          <IconButton icon={ShoppingBag} label="Cart" />
        </div>

      </div>
    </header>
  );
}

export default Header;


import { Search } from "lucide-react";
import { useState } from "react";

import SearchInput from "../atoms/SearchInput";

function SearchBar() {
  const [search, setSearch] = useState("");

  const handleSearch = () => {
    console.log("Searching:", search);
  };

  return (
    <div className="flex w-full items-center rounded-md bg-slate-100 px-2">
      <Search size={19} className="text-gray-400" />

      <SearchInput
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search for Products, Brand and More"
      />

      <button
        onClick={handleSearch}
        className="px-3 text-sm font-medium text-blue-600"
      >
        Search
      </button>
    </div>
  );
}

export default SearchBar;

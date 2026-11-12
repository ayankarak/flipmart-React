
function SearchInput({ value, onChange, placeholder }) {
  return (
    <input
      type="text"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="w-full bg-transparent px-3 py-2 text-sm outline-none placeholder:text-gray-400"
    />
  );
}

export default SearchInput;

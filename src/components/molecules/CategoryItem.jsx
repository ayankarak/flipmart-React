
function CategoryItem({ image, name }) {
  return (
    <div className="flex cursor-pointer flex-col items-center gap-2">
      <div className="h-14 w-14 overflow-hidden rounded-md bg-slate-100">
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover transition hover:scale-110"
        />
      </div>

      <span className="text-xs font-medium text-gray-700">
        {name}
      </span>
    </div>
  );
}

export default CategoryItem;

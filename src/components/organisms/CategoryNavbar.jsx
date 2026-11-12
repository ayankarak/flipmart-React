
import CategoryItem from "../molecules/CategoryItem";
import categories from "../../data/categories";

function CategoryNavbar() {
    return (
        <nav className="w-full border-b border-gray-100 bg-white px-5 py-3">


            <div className="mx-auto flex max-w-[1440px] items-center justify-start gap-6 overflow-x-auto whitespace-nowrap pb-2 sm:justify-between">
                {categories.map((category) => (
                    <CategoryItem
                        key={category.id}
                        image={category.image}
                        name={category.name}
                    />
                ))}
            </div>


        </nav>
    );
}

export default CategoryNavbar;

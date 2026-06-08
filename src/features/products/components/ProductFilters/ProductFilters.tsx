import BrandFilter from "./BrandFilter";
import CategoryFilter from "./CategoryFilter";
import PriceFilter from "./PriceFilter";

const ProductFilters = () => {
  return (
    <aside className="w-[300px] bg-gray-50 border-r p-6">
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search..."
          className="w-full border rounded-md px-4 py-3"
        />
      </div>

      <div className="space-y-8">
        <CategoryFilter />

        <hr />

        <PriceFilter />

        <hr />

        <BrandFilter />
      </div>
    </aside>
  );
};

export default ProductFilters;

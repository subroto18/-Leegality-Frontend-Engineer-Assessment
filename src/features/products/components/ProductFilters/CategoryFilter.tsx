// CategoryFilter.tsx

const categories = [
  "Smartphones",
  "Laptops",
  "Fragrances",
  "Groceries",
  "Furniture",
];

const CategoryFilter = () => {
  return (
    <div>
      <h3 className="font-semibold text-lg mb-4">Categories</h3>

      <div className="space-y-3">
        {categories.map((category) => (
          <label key={category} className="flex items-center gap-3">
            <input type="checkbox" />
            <span>{category}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default CategoryFilter;

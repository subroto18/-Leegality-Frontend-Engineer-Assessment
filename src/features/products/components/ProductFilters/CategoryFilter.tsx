import Checkbox from "@/components/ui/Checkbox";

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
          <Checkbox label={category} value={category} />
        ))}
      </div>
    </div>
  );
};

export default CategoryFilter;

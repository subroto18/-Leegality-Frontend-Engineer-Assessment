import Checkbox from "@/components/ui/Checkbox";
import ExpandableFilterSection from "../ExpandableFilterSection/ExpandableFilterSection";
import type { Category } from "../../types/product.types";

interface CategoryFilterProps {
  categories: Category[];
}

const CategoryFilter = ({ categories }: CategoryFilterProps) => {
  return (
    <div>
      <h3 className="font-semibold text-lg mb-4">Categories</h3>

      <ExpandableFilterSection
        items={categories}
        renderItem={(category) => (
          <Checkbox
            key={category.slug}
            label={category.name}
            value={category.slug}
          />
        )}
      />
    </div>
  );
};

export default CategoryFilter;

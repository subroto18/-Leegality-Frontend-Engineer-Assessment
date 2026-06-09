import Checkbox from "@/components/ui/Checkbox";
import ExpandableFilterSection from "../ExpandableFilterSection/ExpandableFilterSection";
import type { Category } from "../../types/product.types";
import { useProductFilter } from "../../context/useProductFilter";
import FilterLoading from "./FilterLoading";

interface CategoryFilterProps {
  categories: Category[];
  loading?: boolean;
}

const CategoryFilter = ({ categories, loading }: CategoryFilterProps) => {
  const { filters, updateFilters } = useProductFilter();

  const handleCategoryChange = (categorySlug: string) => {
    const isSelected = filters.categories.includes(categorySlug);

    const updatedCategories = isSelected
      ? filters.categories.filter((category) => category !== categorySlug)
      : [...filters.categories, categorySlug];

    updateFilters({
      categories: updatedCategories,
    });
  };

  if (loading) {
    return <FilterLoading title={"Categories"} />;
  }

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
            checked={filters.categories.includes(category.slug)}
            onChange={() => handleCategoryChange(category.slug)}
          />
        )}
      />
    </div>
  );
};

export default CategoryFilter;

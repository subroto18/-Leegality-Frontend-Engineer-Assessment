import Checkbox from "@/components/ui/Checkbox";
import Button from "@/components/ui/Button";
import ExpandableFilterSection from "../ExpandableFilterSection/ExpandableFilterSection";
import type { Category } from "../../types/product.types";
import { useProductFilter } from "../../context/useProductFilter";
import FilterLoading from "./FilterLoading";
import { CloseCircleOutlined } from "@ant-design/icons";
import FilterSectionHeader from "./common/FilterSectionHeader";

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

  const isCategoryFilterActive = filters.categories.length > 0;

  return (
    <div>
      <FilterSectionHeader
        title="Categories"
        count={filters.categories.length}
        showClear={isCategoryFilterActive}
        onClear={() =>
          updateFilters({
            categories: [],
          })
        }
      />

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

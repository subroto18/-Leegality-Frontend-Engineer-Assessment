import Checkbox from "@/components/ui/Checkbox";
import ExpandableFilterSection from "../ExpandableFilterSection/ExpandableFilterSection";
import { useProductFilter } from "../../context/useProductFilter";
import FilterLoading from "./FilterLoading";

interface BrandFilterProps {
  brands: string[];
  loading?: boolean;
}

const BrandFilter = ({ brands, loading }: BrandFilterProps) => {
  const { filters, updateFilters } = useProductFilter();

  const handleBrandChange = (brand: string) => {
    const isSelected = filters.brands.includes(brand);

    const updatedBrands = isSelected
      ? filters.brands.filter((item) => item !== brand)
      : [...filters.brands, brand];

    updateFilters({
      brands: updatedBrands,
    });
  };

  if (loading) {
    return <FilterLoading title={"Brands"} />;
  }

  return (
    <div>
      <h3 className="font-semibold text-lg mb-4">Brands</h3>

      <ExpandableFilterSection
        items={brands}
        renderItem={(brand) => (
          <Checkbox
            key={brand}
            label={brand}
            value={brand}
            checked={filters.brands.includes(brand)}
            onChange={() => handleBrandChange(brand)}
          />
        )}
      />
    </div>
  );
};

export default BrandFilter;

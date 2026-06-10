import { useEffect, useState } from "react";

import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";

import { useProductFilter } from "../../context/useProductFilter";
import FilterSectionHeader from "./common/FilterSectionHeader";

const PriceFilter = () => {
  const { filters, updateFilters } = useProductFilter();
  const [minPrice, setMinPrice] = useState(filters.minPrice);
  const [maxPrice, setMaxPrice] = useState(filters.maxPrice);

  useEffect(() => {
    setMinPrice(filters.minPrice);
    setMaxPrice(filters.maxPrice);
  }, [filters.minPrice, filters.maxPrice]);

  const handleApply = () => {
    updateFilters({
      minPrice,
      maxPrice,
    });
  };

  const isPriceFilterActive = !!filters.minPrice || !!filters.maxPrice;

  return (
    <div>
      <FilterSectionHeader
        title="Price Range"
        showClear={isPriceFilterActive}
        onClear={() =>
          updateFilters({
            minPrice: "",
            maxPrice: "",
          })
        }
      />

      <div className="flex gap-3">
        <Input
          type="number"
          placeholder="Min"
          value={minPrice}
          onChange={(e) => setMinPrice(e.target.value)}
        />

        <Input
          type="number"
          placeholder="Max"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
        />
      </div>
      <Button uiVariant="filterApply" className="mt-4" onClick={handleApply}>
        Apply
      </Button>
    </div>
  );
};

export default PriceFilter;

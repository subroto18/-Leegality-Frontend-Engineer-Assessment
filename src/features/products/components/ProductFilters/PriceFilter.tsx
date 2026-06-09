import { useEffect, useState } from "react";

import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";

import { useProductFilter } from "../../context/useProductFilter";

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

  return (
    <div>
      <h3 className="font-semibold text-lg mb-4">Price Range</h3>
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

      <Button
        onClick={handleApply}
        className="
          w-full
          mt-4
          !bg-blue-500
          !text-white
        "
      >
        Apply
      </Button>
    </div>
  );
};

export default PriceFilter;

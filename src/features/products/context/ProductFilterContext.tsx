import { createContext, useMemo, useState, type ReactNode } from "react";

export interface ProductFilterState {
  search: string;
  categories: string[];
  brands: string[];
  minPrice: string;
  maxPrice: string;
}

interface ProductFilterContextType {
  filters: ProductFilterState;

  updateFilters: (filters: Partial<ProductFilterState>) => void;

  clearFilters: () => void;
}

const defaultFilters: ProductFilterState = {
  search: "",
  categories: [],
  brands: [],
  minPrice: "",
  maxPrice: "",
};

export const ProductFilterContext = createContext<
  ProductFilterContextType | undefined
>(undefined);

interface Props {
  children: ReactNode;
}

export const ProductFilterProvider = ({ children }: Props) => {
  const [filters, setFilters] = useState<ProductFilterState>(defaultFilters);

  const updateFilters = (updatedFilters: Partial<ProductFilterState>) => {
    setFilters((prev) => ({
      ...prev,
      ...updatedFilters,
    }));
  };

  const clearFilters = () => {
    setFilters(defaultFilters);
  };

  const value = useMemo(
    () => ({
      filters,
      updateFilters,
      clearFilters,
    }),
    [filters],
  );

  return (
    <ProductFilterContext.Provider value={value}>
      {children}
    </ProductFilterContext.Provider>
  );
};

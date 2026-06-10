import { createContext, useState, ReactNode } from "react";

interface ProductLayoutContextType {
  isFilterOpen: boolean;
  mobileFilterOpen: boolean;
  hasFilters: boolean;
  setIsFilterOpen: (value: boolean) => void;
  setMobileFilterOpen: (value: boolean) => void;
  setHasFilters: (value: boolean) => void;
  toggleDesktopFilter: () => void;
}

export const ProductLayoutContext = createContext<
  ProductLayoutContextType | undefined
>(undefined);

interface Props {
  children: ReactNode;
}

export const ProductLayoutProvider = ({ children }: Props) => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);
  const [hasFilters, setHasFilters] = useState(true);

  const toggleDesktopFilter = () => {
    setIsFilterOpen((prev) => !prev);
  };

  return (
    <ProductLayoutContext.Provider
      value={{
        isFilterOpen,
        mobileFilterOpen,
        hasFilters,
        setHasFilters,
        setIsFilterOpen,
        setMobileFilterOpen,
        toggleDesktopFilter,
      }}
    >
      {children}
    </ProductLayoutContext.Provider>
  );
};

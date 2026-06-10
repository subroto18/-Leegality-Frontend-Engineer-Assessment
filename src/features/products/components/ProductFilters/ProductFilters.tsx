import { SearchOutlined } from "@ant-design/icons";
import Input from "@/components/ui/Input";
import BrandFilter from "./BrandFilter";
import CategoryFilter from "./CategoryFilter";
import PriceFilter from "./PriceFilter";
import { ProductFiltersProps } from "../../types/product.types";
import { useProductFilter } from "../../context/useProductFilter";
import Divider from "@/components/ui/Divider";

const ProductFilters = ({
  categories,
  isCategoryLoading,
  isProductLoading,
  brands,
}: ProductFiltersProps) => {
  const { filters, updateFilters } = useProductFilter();

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateFilters({
      search: e.target.value,
      categories: [],
      brands: [],
      maxPrice: "",
      minPrice: "",
    });
  };

  return (
    <aside className="w-full h-full p-6">
      <Input
        size="lg"
        uiVariant="search"
        prefix={<SearchOutlined />}
        placeholder="Search..."
        value={filters.search}
        onChange={handleSearchChange}
      />

      <div className="mt-8 space-y-6">
        <CategoryFilter
          loading={isCategoryLoading || false}
          categories={categories}
        />
        <Divider />
        <PriceFilter />
        <Divider />
        <BrandFilter loading={isProductLoading} brands={brands} />
      </div>
    </aside>
  );
};

export default ProductFilters;

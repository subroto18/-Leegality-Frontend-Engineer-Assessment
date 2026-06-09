import { SearchOutlined } from "@ant-design/icons";
import Input from "@/components/ui/Input";
import BrandFilter from "./BrandFilter";
import CategoryFilter from "./CategoryFilter";
import PriceFilter from "./PriceFilter";
import { ProductFiltersProps } from "../../types/product.types";
import { useProductFilter } from "../../context/useProductFilter";

const ProductFilters = ({
  categories,
  isCategoryLoading,
  isProductLoading,
  brands,
}: ProductFiltersProps) => {
  const { filters, updateFilters } = useProductFilter();

  return (
    <aside className="w-full h-full bg-[#F3F3F4] p-6">
      <Input
        size="lg"
        uiVariant="search"
        prefix={<SearchOutlined />}
        placeholder="Search..."
        value={filters.search}
        onChange={(e) =>
          updateFilters({
            search: e.target.value,
            categories: [],
            brands: [],
            maxPrice: "",
            minPrice: "",
          })
        }
      />

      <div className="mt-8 space-y-6">
        <CategoryFilter
          loading={isCategoryLoading || false}
          categories={categories}
        />
        <div className="border-t border-slate-200" />
        <PriceFilter />
        <div className="border-t border-slate-200" />
        <BrandFilter loading={isProductLoading} brands={brands} />
      </div>
    </aside>
  );
};

export default ProductFilters;

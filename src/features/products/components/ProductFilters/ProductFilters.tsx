import { SearchOutlined } from "@ant-design/icons";
import Input from "@/components/ui/Input";
import BrandFilter from "./BrandFilter";
import CategoryFilter from "./CategoryFilter";
import PriceFilter from "./PriceFilter";
import { ProductFiltersProps } from "../../types/product.types";

const ProductFilters = ({ categories, brands }: ProductFiltersProps) => {
  return (
    <aside className="w-full h-full bg-[#F3F3F4] p-6">
      <Input
        size="lg"
        uiVariant="search"
        prefix={<SearchOutlined />}
        placeholder="Search..."
      />

      <div className="mt-8 space-y-6">
        <CategoryFilter categories={categories} />
        <div className="border-t border-slate-200" />
        <PriceFilter />
        <div className="border-t border-slate-200" />
        <BrandFilter brands={brands} />
      </div>
    </aside>
  );
};

export default ProductFilters;

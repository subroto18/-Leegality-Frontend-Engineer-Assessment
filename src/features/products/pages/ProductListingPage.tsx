import { useEffect, useState } from "react";
import { Drawer } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import ProductFilters from "../components/ProductFilters/ProductFilters";
import ProductGrid from "../components/ProductGrid/ProductGrid";
import { useProductLayout } from "../context/useProductLayout";
import Pagination from "@/components/ui/Pagination";

import { useCategories } from "../hooks/useCategories";
import { useProducts } from "../hooks/useProduct";
import { getPriceRange, getUniqueBrands } from "../utils/product.utils";

const PAGE_SIZE = 12;

const ProductListingPage = () => {
  const { setHasFilters, isFilterOpen, mobileFilterOpen, setMobileFilterOpen } =
    useProductLayout();
  const [page, setPage] = useState(1);
  const skip = (page - 1) * PAGE_SIZE;
  const {
    data: productsResponse,
    isLoading,
    isError,
  } = useProducts({
    limit: PAGE_SIZE,
    skip,
  });

  const { data: categories = [] } = useCategories();

  useEffect(() => {
    setHasFilters(true);

    return () => {
      setHasFilters(false);
    };
  }, [setHasFilters]);

  const products = productsResponse?.products ?? [];
  const totalProducts = productsResponse?.total ?? 0;
  const totalPages = Math.ceil(totalProducts / PAGE_SIZE);
  const brands = getUniqueBrands(products);
  const { minPrice, maxPrice } = getPriceRange(products);

  return (
    <>
      <div className="flex">
        {/* Desktop Sidebar */}
        <aside
          className={`
            hidden lg:block
            transition-all
            duration-300
            shrink-0
            overflow-hidden
            overflow-y-auto
             bg-[#F3F3F4] 
            ${isFilterOpen ? "w-[320px]" : "w-0"}
          `}
        >
          <ProductFilters
            categories={categories}
            brands={brands}
            minPrice={minPrice}
            maxPrice={maxPrice}
          />
        </aside>

        {/* Content */}
        <section className="flex-1 min-w-0 mx-10 py-6">
          {isFilterOpen && (
            <div className="flex items-center gap-1 mb-6">
              <SearchOutlined className="text-slate-500" />
              <h2 className="font-semibold text-slate-800">Filters</h2>
            </div>
          )}

          {isError ? (
            <div>Failed to load products</div>
          ) : (
            <ProductGrid products={products} isLoading={isLoading} />
          )}

          {!isLoading && totalPages > 1 && (
            <div className="mt-10">
              <Pagination
                currentPage={page}
                totalPages={totalPages}
                onPageChange={setPage}
              />
            </div>
          )}
        </section>
      </div>

      {/* Mobile Drawer */}
      <Drawer
        title="Filters"
        placement="left"
        open={mobileFilterOpen}
        onClose={() => setMobileFilterOpen(false)}
        width={320}
      >
        <ProductFilters
          categories={categories}
          brands={brands}
          minPrice={minPrice}
          maxPrice={maxPrice}
        />
      </Drawer>
    </>
  );
};

export default ProductListingPage;

import { useEffect, useMemo, useState } from "react";
import { Drawer } from "antd";
import ProductFilters from "../components/ProductFilters/ProductFilters";
import ProductGrid from "../components/ProductGrid/ProductGrid";
import { useProductLayout } from "../context/useProductLayout";
import Pagination from "@/components/ui/Pagination";
import { useCategories } from "../hooks/useCategories";
import { getUniqueBrands } from "../utils/product.utils";
import { useProductFilter } from "../context/useProductFilter";
import { useProducts } from "../hooks/useProducts";
import FilterToolbar from "../components/ProductFilters/common/FilterToolbar";

const PAGE_SIZE = 10;

const ProductListingPage = () => {
  const { setHasFilters, isFilterOpen, mobileFilterOpen, setMobileFilterOpen } =
    useProductLayout();
  const [page, setPage] = useState(1);
  const skip = (page - 1) * PAGE_SIZE;
  const { data: categories = [], isLoading: categoryLoading } = useCategories();
  useEffect(() => {
    setHasFilters(true);
    return () => {
      setHasFilters(false);
    };
  }, [setHasFilters]);

  const { filters, clearFilters, hasActiveFilters } = useProductFilter();

  const { data, isLoading, isError } = useProducts({
    limit: PAGE_SIZE,
    skip,
    search: filters.search,
  });

  useEffect(() => {
    setPage(1);
  }, [filters]);

  const products = data?.products ?? [];
  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesCategory =
        !filters.categories.length ||
        filters.categories.includes(product.category);

      const matchesBrand =
        !filters.brands.length || filters.brands.includes(product.brand);

      const matchesMinPrice =
        !filters.minPrice || product.price >= Number(filters.minPrice);

      const matchesMaxPrice =
        !filters.maxPrice || product.price <= Number(filters.maxPrice);

      return (
        matchesCategory && matchesBrand && matchesMinPrice && matchesMaxPrice
      );
    });
  }, [products, filters]);

  const brands = useMemo(() => getUniqueBrands(products), [products]);

  const paginatedProducts = useMemo(() => {
    const start = (page - 1) * PAGE_SIZE;
    return filteredProducts.slice(start, start + PAGE_SIZE);
  }, [filteredProducts, page]);

  const productsToDisplay = hasActiveFilters
    ? paginatedProducts
    : filteredProducts;

  const totalPages = hasActiveFilters
    ? Math.ceil(filteredProducts.length / PAGE_SIZE)
    : Math.ceil((data?.total ?? 0) / PAGE_SIZE);

  const shouldShowFilterToolbar = isFilterOpen || hasActiveFilters;

  const filterProps = {
    categories,
    isCategoryLoading: categoryLoading,
    isProductLoading: isLoading,
    brands,
  };

  return (
    <>
      <div className="flex">
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
          <ProductFilters {...filterProps} />
        </aside>

        <section className="flex-1 min-w-0 mx-10 py-6">
          {isError ? (
            <div className="flex flex-col items-center justify-center py-20">
              <h3 className="text-lg font-semibold">Failed to load products</h3>
              <p className="text-slate-500 mt-2">Please try again later.</p>
            </div>
          ) : (
            <>
              {shouldShowFilterToolbar && (
                <FilterToolbar
                  showClear={hasActiveFilters}
                  onClear={clearFilters}
                />
              )}
              <ProductGrid products={productsToDisplay} isLoading={isLoading} />
            </>
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
        <div className="bg-[#F3F3F4]">
          <ProductFilters {...filterProps} />
        </div>
      </Drawer>
    </>
  );
};

export default ProductListingPage;

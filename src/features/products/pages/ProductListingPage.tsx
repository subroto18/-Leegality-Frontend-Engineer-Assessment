import { useEffect, useMemo, useState } from "react";
import { Drawer } from "antd";
import { CloseCircleOutlined, SearchOutlined } from "@ant-design/icons";
import ProductFilters from "../components/ProductFilters/ProductFilters";
import ProductGrid from "../components/ProductGrid/ProductGrid";
import { useProductLayout } from "../context/useProductLayout";
import Pagination from "@/components/ui/Pagination";
import { useCategories } from "../hooks/useCategories";
import { getPriceRange, getUniqueBrands } from "../utils/product.utils";
import { useProductFilter } from "../context/useProductFilter";
import { useProducts } from "../hooks/useProducts";
import Button from "@/components/ui/Button";
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

  const { filters, clearFilters } = useProductFilter();
  const { data, isLoading, isError } = useProducts({
    limit: 10,
    skip,
    category: filters.categories?.join(","),
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

  const brands = getUniqueBrands(products);
  const { minPrice, maxPrice } = getPriceRange(products);

  const paginatedProducts = useMemo(() => {
    const start = (page - 1) * PAGE_SIZE;
    return filteredProducts.slice(start, start + PAGE_SIZE);
  }, [filteredProducts, page]);

  const isClientSidePagination =
    filters.categories.length > 0 ||
    filters.brands.length > 0 ||
    !!filters.minPrice ||
    !!filters.maxPrice;

  const productsToDisplay = isClientSidePagination
    ? paginatedProducts
    : filteredProducts;

  const totalPages = isClientSidePagination
    ? Math.ceil(filteredProducts.length / PAGE_SIZE)
    : Math.ceil((data?.total ?? 0) / PAGE_SIZE);

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
            isCategoryLoading={categoryLoading}
            isProductLoading={isLoading}
            brands={brands}
            minPrice={minPrice}
            maxPrice={maxPrice}
          />
        </aside>

        <section className="flex-1 min-w-0 mx-10 py-6">
          {isFilterOpen && (
            <FilterToolbar
              showClear={isClientSidePagination}
              onClear={clearFilters}
            />
          )}

          {isError ? (
            <div>Failed to load products</div>
          ) : (
            <>
              {!isFilterOpen && isClientSidePagination && (
                <FilterToolbar
                  showClear={isClientSidePagination}
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

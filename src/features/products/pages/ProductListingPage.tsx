import { useEffect, useState } from "react";
import { Drawer } from "antd";
import { SearchOutlined } from "@ant-design/icons";

import ProductFilters from "../components/ProductFilters/ProductFilters";
import ProductGrid from "../components/ProductGrid/ProductGrid";
import { useProductLayout } from "../context/useProductLayout";
import Pagination from "@/components/ui/Pagination";

const ProductListingPage = () => {
  const { setHasFilters, isFilterOpen, mobileFilterOpen, setMobileFilterOpen } =
    useProductLayout();
  const [page, setPage] = useState(1);
  useEffect(() => {
    setHasFilters(true);

    return () => {
      setHasFilters(false);
    };
  }, [setHasFilters]);

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
            ${isFilterOpen ? "w-[320px]" : "w-0"}
          `}
        >
          {isFilterOpen && <ProductFilters />}
        </aside>

        {/* Content */}
        <section className="flex-1 min-w-0 mx-10 py-6">
          {isFilterOpen && (
            <div className="flex items-center gap-1 mb-6">
              <SearchOutlined className="text-1xl text-slate-500" />
              <h2 className="text-1xl font-semibold text-slate-800">Filters</h2>
            </div>
          )}
          <ProductGrid />
          <div className="mt-10">
            <Pagination
              currentPage={page}
              totalPages={5}
              onPageChange={setPage}
            />
          </div>
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
        <ProductFilters />
      </Drawer>
    </>
  );
};

export default ProductListingPage;

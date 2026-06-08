import { useState } from "react";
import Pagination from "../components/Pagination/Pagination";
import ProductFilters from "../components/ProductFilters/ProductFilters";
import ProductGrid from "../components/ProductGrid/ProductGrid";
import clsx from "clsx";
import Container from "@/components/common/Container";

const ProductListingPage = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(true);
  return (
    <div className="flex gap-6">
      <aside
        className={clsx(
          "transition-all duration-300 overflow-hidden shrink-0",
          isFilterOpen ? "w-[320px]" : "w-0",
        )}
      >
        <ProductFilters />
      </aside>
      <section className="flex-1 min-w-0 mx-10">
        <ProductGrid />
        <Pagination />
      </section>
    </div>
  );
};

export default ProductListingPage;

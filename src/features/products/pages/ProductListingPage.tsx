import { useState } from "react";
import { Drawer, Button } from "antd";
import { FilterOutlined } from "@ant-design/icons";

import Pagination from "../components/Pagination/Pagination";
import ProductFilters from "../components/ProductFilters/ProductFilters";
import ProductGrid from "../components/ProductGrid/ProductGrid";

const ProductListingPage = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(true);
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  return (
    <>
      <div className="lg:hidden mb-4">
        <Button
          icon={<FilterOutlined />}
          onClick={() => setMobileFilterOpen(true)}
        >
          Filters
        </Button>
      </div>

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

        <section className="flex-1 min-w-0 lg:mx-10 py-6">
          <ProductGrid />
          <Pagination />
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

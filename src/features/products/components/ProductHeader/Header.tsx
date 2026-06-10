import Container from "@/components/common/Container";
import Input from "@/components/ui/Input";
import { useResponsive } from "@/hooks/useResponsive";
import {
  SearchOutlined,
  ShoppingCartOutlined,
  PieChartOutlined,
  UserOutlined,
  MenuOutlined,
} from "@ant-design/icons";
import { useProductLayout } from "../../context/useProductLayout";
import Button from "@/components/ui/Button";
import { useLocation, useNavigate } from "react-router-dom";
import { useProductFilter } from "../../context/useProductFilter";
const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { isDesktop } = useResponsive();
  const { toggleDesktopFilter, setMobileFilterOpen } = useProductLayout();
  const { filters, updateFilters } = useProductFilter();
  const handleMenuClick = () => {
    const isProductDetailPage = location.pathname.startsWith("/product/");
    if (isProductDetailPage) {
      navigate("/");
      return;
    }
    if (isDesktop) {
      toggleDesktopFilter();
      return;
    }
    setMobileFilterOpen(true);
  };

  return (
    <header className="h-20 bg-gradient-to-r from-slate-700 to-slate-800  shadow-md">
      <Container className="h-full">
        <div className="h-full flex items-center justify-between">
          <Button uiVariant="ghostIcon" onClick={handleMenuClick}>
            <MenuOutlined className="text-3xl" />
          </Button>

          <div className="flex-1 max-w-2xl mx-12">
            <div className="relative">
              <SearchOutlined className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 text-xl" />

              <Input
                placeholder="Search products..."
                prefix={<SearchOutlined className="text-gray-400 text-lg" />}
                uiVariant="search"
                size="lg"
                className="max-w-2xl"
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
            </div>
          </div>

          <div className="flex items-center gap-8 text-white text-2xl">
            <button className="hover:text-blue-200 transition">
              <ShoppingCartOutlined />
            </button>

            <button className="hover:text-blue-200 transition">
              <PieChartOutlined />
            </button>

            <button className="hover:text-blue-200 transition">
              <UserOutlined />
            </button>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;

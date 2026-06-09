import Checkbox from "@/components/ui/Checkbox";
import ExpandableFilterSection from "../ExpandableFilterSection/ExpandableFilterSection";
interface BrandFilterProps {
  brands: string[];
}

const BrandFilter = ({ brands }: BrandFilterProps) => {
  return (
    <div>
      <h3 className="font-semibold text-lg mb-4">Brands</h3>

      <ExpandableFilterSection
        items={brands}
        renderItem={(brand) => (
          <Checkbox key={brand} label={brand} value={brand} />
        )}
      />
    </div>
  );
};

export default BrandFilter;
